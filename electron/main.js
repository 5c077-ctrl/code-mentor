const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow = null;
let serverProcess = null;

function startNextServer() {
  return new Promise((resolve) => {
    // Check if server is already running, or spawn next start
    const nextBin = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'bin', 'next');
    serverProcess = spawn(process.execPath, [nextBin, 'start', '-p', '3000'], {
      cwd: path.join(__dirname, '..'),
      env: { ...process.env, NODE_ENV: 'production' }
    });

    serverProcess.stdout.on('data', (data) => {
      if (data.toString().includes('Ready') || data.toString().includes('started')) {
        resolve();
      }
    });

    // Fallback timer resolve
    setTimeout(resolve, 3000);
  });
}

async function createWindow() {
  await startNextServer();

  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    title: 'Code Mentor PRO',
    icon: path.join(__dirname, 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL('http://localhost:3000');

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
  if (serverProcess) {
    serverProcess.kill();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
