const { app, BrowserWindow, shell } = require('electron');
const http = require('http');
const path = require('path');

let mainWindow = null;
let nextServer = null;

const LOADING_HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Code Mentor PRO</title>
  <style>
    body {
      background: #0f1117;
      color: #f8fafc;
      font-family: system-ui, -apple-system, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .card {
      background: rgba(26, 29, 39, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2.5rem 3rem;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    .icon { font-size: 3rem; margin-bottom: 1rem; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; color: #8b5cf6; }
    p { color: #94a3b8; font-size: 0.95rem; }
    .spinner {
      width: 36px;
      height: 36px;
      border: 3px solid rgba(139, 92, 246, 0.2);
      border-top-color: #8b5cf6;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 1.5rem auto 0;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">⚡</div>
    <h1>Code Mentor PRO</h1>
    <p>Starting Application Engine...</p>
    <div class="spinner"></div>
  </div>
</body>
</html>
`;

function checkServerReady(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, (res) => {
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(800, () => {
      req.destroy();
      resolve(false);
    });
    req.end();
  });
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    title: 'Code Mentor PRO',
    autoHideMenuBar: true,
    backgroundColor: '#0f1117',
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Check if a dev or production server is active
  const is3000Active = await checkServerReady(3000);
  const is3001Active = await checkServerReady(3001);

  if (is3000Active) {
    mainWindow.loadURL('http://localhost:3000');
  } else if (is3001Active) {
    mainWindow.loadURL('http://localhost:3001');
  } else {
    // Show instant splash loading screen while preparing server
    mainWindow.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(LOADING_HTML));

    try {
      const next = require('next');
      const appDir = path.join(__dirname, '..');
      const nextApp = next({ dev: false, dir: appDir, conf: { distDir: '.next' } });
      const handle = nextApp.getRequestHandler();
      
      await nextApp.prepare();
      nextServer = http.createServer((req, res) => handle(req, res));
      
      nextServer.listen(3000, () => {
        mainWindow.loadURL('http://localhost:3000');
      });
    } catch (err) {
      // Poll until local server becomes available
      const interval = setInterval(async () => {
        const ready = await checkServerReady(3000);
        if (ready) {
          clearInterval(interval);
          mainWindow.loadURL('http://localhost:3000');
        }
      }, 1000);
    }
  }

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (nextServer) {
    nextServer.close();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
