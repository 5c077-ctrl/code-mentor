const fs = require('fs');
const path = require('path');
const { crypto } = require('crypto');

function uuidv4() {
  return 'f' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const coursesFilePath = path.join(__dirname, '../src/data/courses.json');
const courseDetailsFilePath = path.join(__dirname, '../src/data/courseDetails.json');
const lessonsFilePath = path.join(__dirname, '../src/data/lessons.json');
const categoriesFilePath = path.join(__dirname, '../src/data/categories.json');

const coursesData = JSON.parse(fs.readFileSync(coursesFilePath, 'utf8'));
const courseDetailsData = JSON.parse(fs.readFileSync(courseDetailsFilePath, 'utf8'));
const lessonsData = JSON.parse(fs.readFileSync(lessonsFilePath, 'utf8'));
const categoriesData = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf8'));

// Find category IDs
const basicsCat = categoriesData.find(c => c.slug === 'basics') || categoriesData[0];
const aimlCat = categoriesData.find(c => c.slug === 'ai-ml') || categoriesData[0];

// 1. Arduino Course
const arduinoCourseId = uuidv4();
const arduinoModuleId = uuidv4();
const arduinoSlug = 'arduino';

const arduinoLessonsList = [
  {
    title: '01. Introduction to Arduino & Microcontrollers',
    slug: '01-intro-arduino-microcontrollers',
    desc: 'Understand microcontrollers vs microprocessors, ATmega328P architecture, and pinout layout.',
    code: `// Arduino Blink Hello World\nvoid setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n  Serial.begin(9600);\n  Serial.println("Arduino UNO Initialized Successfully!");\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(1000);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(1000);\n}`,
    solution: `void setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n  Serial.begin(9600);\n  Serial.println("Arduino System Ready");\n}\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(500);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(500);\n}`,
    lang: 'cpp'
  },
  {
    title: '02. Arduino IDE 2.0 & C/C++ Embedded Toolchain',
    slug: '02-arduino-ide-setup-c-cpp-toolchain',
    desc: 'Install Arduino IDE 2.0, configure board drivers, COM ports, and understand AVR-GCC compiler compilation pipeline.',
    code: `#include <Arduino.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  Serial.println("AVR-GCC Embedded Toolchain Ready.");\n}\n\nvoid loop() {\n  // Main loop\n}`,
    solution: `void setup() {\n  Serial.begin(115200);\n}\nvoid loop() {\n}`,
    lang: 'cpp'
  },
  {
    title: '03. Digital I/O & LED Circuit Control',
    slug: '03-digital-io-led-circuit-control',
    desc: 'Learn pinMode(), digitalWrite(), digitalRead(), current limiting resistors, and push-button state detection.',
    code: `const int BUTTON_PIN = 2;\nconst int LED_PIN = 13;\n\nvoid setup() {\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  int btnState = digitalRead(BUTTON_PIN);\n  if (btnState == LOW) {\n    digitalWrite(LED_PIN, HIGH);\n  } else {\n    digitalWrite(LED_PIN, LOW);\n  }\n}`,
    solution: `void setup() { pinMode(2, INPUT_PULLUP); pinMode(13, OUTPUT); }\nvoid loop() { digitalWrite(13, !digitalRead(2)); }`,
    lang: 'cpp'
  },
  {
    title: '04. Analog Input, ADC & Potentiometers',
    slug: '04-analog-input-adc-potentiometers',
    desc: 'Understand 10-bit Analog-to-Digital Conversion (ADC), analogRead(), 0-1023 resolution, and voltage mapping.',
    code: `const int POT_PIN = A0;\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int rawVal = analogRead(POT_PIN);\n  float voltage = rawVal * (5.0 / 1023.0);\n  Serial.print("Raw: "); Serial.print(rawVal);\n  Serial.print(" | Voltage: "); Serial.println(voltage);\n  delay(250);\n}`,
    solution: `void setup() { Serial.begin(9600); }\nvoid loop() { int v = analogRead(A0); Serial.println(v); delay(100); }`,
    lang: 'cpp'
  },
  {
    title: '05. Pulse Width Modulation (PWM) & Motor Speed',
    slug: '05-pulse-width-modulation-pwm-motor-speed',
    desc: 'Master analogWrite(), duty cycles, 8-bit resolution (0-255), LED dimming, and DC motor speed adjustment.',
    code: `const int LED_PWM = 9;\n\nvoid setup() {\n  pinMode(LED_PWM, OUTPUT);\n}\n\nvoid loop() {\n  for (int fade = 0; fade <= 255; fade += 5) {\n    analogWrite(LED_PWM, fade);\n    delay(30);\n  }\n  for (int fade = 255; fade >= 0; fade -= 5) {\n    analogWrite(LED_PWM, fade);\n    delay(30);\n  }\n}`,
    solution: `void setup() { pinMode(9, OUTPUT); }\nvoid loop() { analogWrite(9, 128); }`,
    lang: 'cpp'
  },
  {
    title: '06. Serial Communication & UART Data Protocol',
    slug: '06-serial-communication-uart-data-protocol',
    desc: 'Deep dive into Universal Asynchronous Receiver-Transmitter (UART), baud rates, Serial.readString(), and packet parsing.',
    code: `void setup() {\n  Serial.begin(9600);\n  Serial.println("Send command: ON or OFF");\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    String command = Serial.readStringUntil('\\n');\n    command.trim();\n    if (command.equalsIgnoreCase("ON")) {\n      digitalWrite(LED_BUILTIN, HIGH);\n      Serial.println("LED Status: ENABLED");\n    } else if (command.equalsIgnoreCase("OFF")) {\n      digitalWrite(LED_BUILTIN, LOW);\n      Serial.println("LED Status: DISABLED");\n    }\n  }\n}`,
    solution: `void setup() { Serial.begin(9600); }\nvoid loop() { if(Serial.available()){ Serial.write(Serial.read()); } }`,
    lang: 'cpp'
  },
  {
    title: '07. Interfacing Ultrasonic Distance Sensors',
    slug: '07-interfacing-ultrasonic-distance-sensors',
    desc: 'Interface HC-SR04 sonar sensor using pulseIn(), microsecond echo timing, and distance calculation in centimeters.',
    code: `const int TRIG_PIN = 9;\nconst int ECHO_PIN = 10;\n\nvoid setup() {\n  pinMode(TRIG_PIN, OUTPUT);\n  pinMode(ECHO_PIN, INPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  digitalWrite(TRIG_PIN, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n  \n  long duration = pulseIn(ECHO_PIN, HIGH);\n  float distanceCm = duration * 0.0343 / 2.0;\n  Serial.print("Distance: "); Serial.print(distanceCm); Serial.println(" cm");\n  delay(500);\n}`,
    solution: `void setup() { Serial.begin(9600); }\nvoid loop() { }`,
    lang: 'cpp'
  },
  {
    title: '08. DHT11/DHT22 Temperature & Humidity Sensors',
    slug: '08-dht11-dht22-temperature-humidity-sensors',
    desc: 'Read digital single-bus protocols using DHT sensor libraries, error handling, and environmental data logging.',
    code: `#include <DHT.h>\n\n#define DHTPIN 2\n#define DHTTYPE DHT11\n\nDHT dht(DHTPIN, DHTTYPE);\n\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  if (isnan(h) || isnan(t)) {\n    Serial.println("Failed to read from DHT sensor!");\n    return;\n  }\n  Serial.print("Humidity: "); Serial.print(h);\n  Serial.print("%  Temp: "); Serial.print(t); Serial.println("°C");\n  delay(2000);\n}`,
    solution: `void setup() { Serial.begin(9600); }\nvoid loop() {}`,
    lang: 'cpp'
  },
  {
    title: '09. Servo Motor Precision Control & Timers',
    slug: '09-servo-motor-precision-control-timers',
    desc: 'Control SG90/MG996R servo motors using Servo.h, 50Hz PWM signals, 1ms-2ms pulse width, and sweep algorithms.',
    code: `#include <Servo.h>\n\nServo myServo;\n\nvoid setup() {\n  myServo.attach(9);\n}\n\nvoid loop() {\n  for (int pos = 0; pos <= 180; pos += 10) {\n    myServo.write(pos);\n    delay(150);\n  }\n  for (int pos = 180; pos >= 0; pos -= 10) {\n    myServo.write(pos);\n    delay(150);\n  }\n}`,
    solution: `void setup() { Servo s; s.attach(9); s.write(90); }\nvoid loop() {}`,
    lang: 'cpp'
  },
  {
    title: '10. DC Motor Control with L298N H-Bridge Driver',
    slug: '10-dc-motor-control-l298n-h-bridge-driver',
    desc: 'Understand H-Bridge circuitry, direction control (IN1, IN2), speed control (ENA PWM), and dual DC motor driving.',
    code: `const int ENA = 9;\nconst int IN1 = 7;\nconst int IN2 = 6;\n\nvoid setup() {\n  pinMode(ENA, OUTPUT);\n  pinMode(IN1, OUTPUT);\n  pinMode(IN2, OUTPUT);\n}\n\nvoid forward(int speed) {\n  digitalWrite(IN1, HIGH);\n  digitalWrite(IN2, LOW);\n  analogWrite(ENA, speed);\n}\n\nvoid loop() {\n  forward(200);\n  delay(2000);\n}`,
    solution: `void setup() { pinMode(9, OUTPUT); }\nvoid loop() { analogWrite(9, 255); }`,
    lang: 'cpp'
  },
  {
    title: '11. I2C Protocol & LCD 1602 Display Interface',
    slug: '11-i2c-protocol-lcd-1602-display-interface',
    desc: 'Master Inter-Integrated Circuit (I2C) communication, SDA/SCL pins, 0x27 address scanning, and LiquidCrystal_I2C display.',
    code: `#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n\nLiquidCrystal_I2C lcd(0x27, 16, 2);\n\nvoid setup() {\n  lcd.init();\n  lcd.backlight();\n  lcd.setCursor(0, 0);\n  lcd.print("Code Mentor");\n  lcd.setCursor(0, 1);\n  lcd.print("Arduino PRO");\n}\n\nvoid loop() {\n  // Static text\n}`,
    solution: `void setup() { Wire.begin(); }\nvoid loop() {}`,
    lang: 'cpp'
  },
  {
    title: '12. SPI Bus Protocol & MicroSD Card Storage',
    slug: '12-spi-bus-protocol-microsd-card-storage',
    desc: 'Understand Serial Peripheral Interface (SPI), MOSI, MISO, SCK, CS pins, high-speed bus communication, and SD card file writing.',
    code: `#include <SPI.h>\n#include <SD.h>\n\nconst int chipSelect = 4;\n\nvoid setup() {\n  Serial.begin(9600);\n  if (!SD.begin(chipSelect)) {\n    Serial.println("SD Card initialization failed!");\n    return;\n  }\n  File dataFile = SD.open("datalog.txt", FILE_WRITE);\n  if (dataFile) {\n    dataFile.println("Sensor Reading: 24.5C");\n    dataFile.close();\n    Serial.println("Data logged successfully.");\n  }\n}\n\nvoid loop() {}`,
    solution: `void setup() { SPI.begin(); }\nvoid loop() {}`,
    lang: 'cpp'
  },
  {
    title: '13. Hardware Interrupts & Debouncing Push Buttons',
    slug: '13-hardware-interrupts-debouncing-push-buttons',
    desc: 'Implement attachInterrupt(), RISING/FALLING edges, Interrupt Service Routines (ISR), volatile variables, and software debouncing.',
    code: `const byte interruptPin = 2;\nvolatile unsigned long pulseCount = 0;\n\nvoid counterISR() {\n  pulseCount++;\n}\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(interruptPin, INPUT_PULLUP);\n  attachInterrupt(digitalPinToInterrupt(interruptPin), counterISR, FALLING);\n}\n\nvoid loop() {\n  Serial.print("Interrupt Pulses: "); Serial.println(pulseCount);\n  delay(1000);\n}`,
    solution: `void setup() { attachInterrupt(0, [](){}, RISING); }\nvoid loop() {}`,
    lang: 'cpp'
  },
  {
    title: '14. EEPROM Non-Volatile Memory Storage',
    slug: '14-eeprom-non-volatile-memory-storage',
    desc: 'Read & write non-volatile EEPROM byte storage, EEPROM.get(), EEPROM.put(), and preserving configuration across reboots.',
    code: `#include <EEPROM.h>\n\nstruct Config {\n  int deviceID;\n  char name[16];\n};\n\nvoid setup() {\n  Serial.begin(9600);\n  Config settings = {101, "Arduino_Rover"};\n  EEPROM.put(0, settings);\n  \n  Config loaded;\n  EEPROM.get(0, loaded);\n  Serial.print("Loaded ID: "); Serial.println(loaded.deviceID);\n}\n\nvoid loop() {}`,
    solution: `void setup() { EEPROM.write(0, 255); }\nvoid loop() {}`,
    lang: 'cpp'
  },
  {
    title: '15. Building an Autonomous Obstacle-Avoiding Rover',
    slug: '15-building-autonomous-obstacle-avoiding-rover',
    desc: 'Combine ultrasonic sensor scanning, dual DC motor driving, servo motor head rotation, and obstacle avoidance logic.',
    code: `#include <Servo.h>\n\nServo scanner;\nconst int TRIG = 9, ECHO = 10;\n\nlong getDistance() {\n  digitalWrite(TRIG, LOW); delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  return pulseIn(ECHO, HIGH) * 0.0343 / 2;\n}\n\nvoid setup() {\n  pinMode(TRIG, OUTPUT);\n  pinMode(ECHO, INPUT);\n  scanner.attach(11);\n  Serial.begin(9600);\n  Serial.println("Autonomous Obstacle Avoidance Rover Initialized.");\n}\n\nvoid loop() {\n  long dist = getDistance();\n  if (dist < 20) {\n    Serial.println("Obstacle detected! Scanning left and right...");\n  }\n  delay(200);\n}`,
    solution: `void setup() { Serial.begin(9600); }\nvoid loop() {}`,
    lang: 'cpp'
  }
];

const arduinoResources = [
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'documentation', title: 'Official Arduino Language & API Reference', url: 'https://www.arduino.cc/reference/en/', author: 'Arduino Team', platform: 'Arduino.cc', sortOrder: 1 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'video', title: 'Arduino Programming Course for Beginners', url: 'https://www.youtube.com/watch?v=zJ-LqeX_fLU', author: 'freeCodeCamp', platform: 'YouTube', sortOrder: 2 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'article', title: 'Arduino Hardware & Electronics Starter Handbook', url: 'https://docs.arduino.cc/learn/', author: 'Arduino Education', platform: 'Arduino Docs', sortOrder: 3 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'video', title: 'ESP32 & Arduino Wi-Fi IoT Masterclass', url: 'https://www.youtube.com/watch?v=yW6aX0Osn8g', author: 'Random Nerd Tutorials', platform: 'YouTube', sortOrder: 4 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'documentation', title: 'AVR Microcontroller Architecture Reference', url: 'https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/8-bit-mcus/avr-mcus', author: 'Microchip Technology', platform: 'Microchip', sortOrder: 5 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'article', title: 'Mastering I2C, SPI & UART Protocols on Microcontrollers', url: 'https://sparkfun.com/tutorials', author: 'SparkFun Electronics', platform: 'SparkFun', sortOrder: 6 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'github', title: 'Arduino Open Source Hardware & Software Repository', url: 'https://github.com/arduino/Arduino', author: 'Arduino Community', platform: 'GitHub', sortOrder: 7 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'article', title: 'Simulating Arduino Circuits Online with Tinkercad', url: 'https://www.tinkercad.com/circuits', author: 'Autodesk', platform: 'Tinkercad', sortOrder: 8 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'documentation', title: 'L298N H-Bridge Motor Driver Technical Datasheet', url: 'https://www.st.com/resource/en/datasheet/l298.pdf', author: 'STMicroelectronics', platform: 'Datasheet', sortOrder: 9 },
  { id: uuidv4(), courseId: arduinoCourseId, resourceType: 'article', title: 'Building Autonomous Mobile Robots with Arduino & C++', url: 'https://hackaday.com/category/robots-2/', author: 'Hackaday Hardware', platform: 'Hackaday', sortOrder: 10 }
];

// 2. Robotics Course
const roboticsCourseId = uuidv4();
const roboticsModuleId = uuidv4();
const roboticsSlug = 'robotics';

const roboticsLessonsList = [
  {
    title: '01. Foundations of Robotics Engineering',
    slug: '01-foundations-robotics-engineering',
    desc: 'Overview of modern robotics, mobile robots, manipulators, sensors, actuators, and control system loops.',
    code: `# Python Robotics System Monitor\nclass RobotState:\n    def __init__(self, name):\n        self.name = name\n        self.battery_percent = 98.5\n        self.is_armed = True\n        \n    def status_report(self):\n        return f"Robot [{self.name}] Armed: {self.is_armed} | Battery: {self.battery_percent}%"\n\nbot = RobotState("Rover-Alpha-01")\nprint(bot.status_report())`,
    solution: `print("Robotics System Active")`,
    lang: 'python'
  },
  {
    title: '02. Robot Kinematics: Forward & Inverse Kinematics',
    slug: '02-robot-kinematics-forward-inverse',
    desc: 'Calculate 2D/3D robot position using Denavit-Hartenberg (DH) parameters, rotation matrices, and Jacobian matrices.',
    code: `import numpy as np\n\ndef forward_kinematics_2d(l1, l2, theta1_deg, theta2_deg):\n    t1 = np.radians(theta1_deg)\n    t2 = np.radians(theta2_deg)\n    x = l1 * np.cos(t1) + l2 * np.cos(t1 + t2)\n    y = l1 * np.sin(t1) + l2 * np.sin(t1 + t2)\n    return x, y\n\nx_pos, y_pos = forward_kinematics_2d(1.0, 0.8, 30, 45)\nprint(f"End Effector Coordinates: X={x_pos:.3f}m, Y={y_pos:.3f}m")`,
    solution: `import numpy as np\nprint("Kinematics Calculated")`,
    lang: 'python'
  },
  {
    title: '03. Introduction to ROS 2 (Robot Operating System)',
    slug: '03-intro-ros2-robot-operating-system',
    desc: 'Understand ROS 2 Humble architecture, DDS middleware, node discovery, workspace creation, and colcon build tool.',
    code: `import rclpy\nfrom rclpy.node import Node\n\nclass MinimalRobotNode(Node):\n    def __init__(self):\n        super().__init__('minimal_robot_node')\n        self.get_logger().info('ROS 2 Autonomous Robot Node Active!')\n\ndef main():\n    rclpy.init()\n    node = MinimalRobotNode()\n    rclpy.spin_once(node, timeout_sec=1)\n    node.destroy_node()\n    rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()`,
    solution: `print("ROS 2 Node Ready")`,
    lang: 'python'
  },
  {
    title: '04. ROS 2 Nodes, Topics, Publishers & Subscribers',
    slug: '04-ros2-nodes-topics-publishers-subscribers',
    desc: 'Master asynchronous pub/sub messaging pattern over ROS 2 topics using std_msgs and geometry_msgs/Twist.',
    code: `import rclpy\nfrom rclpy.node import Node\nfrom geometry_msgs.msg import Twist\n\nclass VelocityPublisher(Node):\n    def __init__(self):\n        super().__init__('cmd_vel_publisher')\n        self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)\n        \n    def publish_cmd(self):\n        msg = Twist()\n        msg.linear.x = 0.5  # 0.5 m/s forward\n        msg.angular.z = 0.2 # 0.2 rad/s turn\n        self.publisher_.publish(msg)\n        self.get_logger().info(f"Published Velocity: linear={msg.linear.x}, angular={msg.angular.z}")\n\nprint("ROS 2 Topic Publisher Ready.")`,
    solution: `print("Publisher Active")`,
    lang: 'python'
  },
  {
    title: '05. ROS 2 Custom Messages, Services & Actions',
    slug: '05-ros2-custom-messages-services-actions',
    desc: 'Define custom .msg interface schemas, synchronous Service client/server RPC, and long-running Action goals.',
    code: `import rclpy\nfrom rclpy.node import Node\n\nclass NavigationService(Node):\n    def __init__(self):\n        super().__init__('nav_service_server')\n        self.get_logger().info("Navigation Service Server Ready.")\n\nprint("ROS 2 Service initialized.")`,
    solution: `print("Service Ready")`,
    lang: 'python'
  },
  {
    title: '06. Robot Modeling with URDF & Xacro',
    slug: '06-robot-modeling-urdf-xacro',
    desc: 'Construct 3D robot kinematics models using Unified Robot Description Format (URDF), links, joints, and Xacro macros.',
    code: `urdf_xml = """<?xml version="1.0"?>\n<robot name="mobile_rover">\n  <link name="base_link">\n    <visual>\n      <geometry><box size="0.6 0.4 0.2"/></geometry>\n    </visual>\n  </link>\n</robot>\n"""\nprint("URDF XML Model Validated Successfully:")\nprint(urdf_xml)`,
    solution: `print("URDF Validated")`,
    lang: 'python'
  },
  {
    title: '07. Gazebo 3D Physics Simulator & Environment Setup',
    slug: '07-gazebo-3d-physics-simulator-setup',
    desc: 'Spawn URDF robots into Gazebo 3D physics engine, configure ODE rigid body friction, gravity, and camera sensors.',
    code: `print("Gazebo 3D Simulation Environment Initialized.")\nprint("World Loaded: indoor_warehouse.world")`,
    solution: `print("Gazebo Ready")`,
    lang: 'python'
  },
  {
    title: '08. Sensor Fusion: IMU, Lidar & Wheel Encoders',
    slug: '08-sensor-fusion-imu-lidar-wheel-encoders',
    desc: 'Combine noisy IMU accelerometers, Lidar 360-degree point clouds, and optical wheel encoders using Extended Kalman Filter (EKF).',
    code: `import numpy as np\n\ndef ekf_predict(x, P, Q):\n    # Simple EKF prediction step\n    P = P + Q\n    return x, P\n\nx_state = np.array([0.0, 0.0])\nP_cov = np.eye(2) * 0.1\nQ_noise = np.eye(2) * 0.01\n\nx_est, P_est = ekf_predict(x_state, P_cov, Q_noise)\nprint("EKF State Estimation:", x_est)`,
    solution: `print("EKF Filter Applied")`,
    lang: 'python'
  },
  {
    title: '09. Closed-Loop PID Control for Robotic Actuators',
    slug: '09-closed-loop-pid-control-robotic-actuators',
    desc: 'Implement Proportional-Integral-Derivative (PID) control loop algorithm for motor velocity and heading correction.',
    code: `class PIDController:\n    def __init__(self, kp, ki, kd):\n        self.kp, self.ki, self.kd = kp, ki, kd\n        self.prev_error = 0.0\n        self.integral = 0.0\n        \n    def compute(self, setpoint, pv, dt):\n        error = setpoint - pv\n        self.integral += error * dt\n        derivative = (error - self.prev_error) / dt\n        self.prev_error = error\n        return (self.kp * error) + (self.ki * self.integral) + (self.kd * derivative)\n\npid = PIDController(kp=1.5, ki=0.1, kd=0.05)\noutput = pid.compute(setpoint=10.0, pv=8.2, dt=0.05)\nprint(f"PID Control Output Signal: {output:.3f}")`,
    solution: `print("PID Compute Executed")`,
    lang: 'python'
  },
  {
    title: '10. OpenCV Computer Vision for Object Tracking',
    slug: '10-opencv-computer-vision-object-tracking',
    desc: 'Process camera video streams, HSV color space masking, contour detection, and centroid tracking for robotic follow.',
    code: `import numpy as np\n\n# Simulated HSV image thresholding\nhsv_lower = np.array([35, 100, 100])\nhsv_upper = np.array([85, 255, 255])\n\nprint(f"Color Tracking Mask Configured: Green Target [{hsv_lower} - {hsv_upper}]")`,
    solution: `print("OpenCV Tracking Active")`,
    lang: 'python'
  },
  {
    title: '11. SLAM (Simultaneous Localization and Mapping)',
    slug: '11-slam-simultaneous-localization-mapping',
    desc: 'Generate 2D occupancy grid maps using Lidar scan matching, Cartographer, and SLAM Toolbox in ROS 2.',
    code: `print("SLAM Toolbox Mapping Active: /map OccupancyGrid published at 5Hz.")`,
    solution: `print("SLAM Active")`,
    lang: 'python'
  },
  {
    title: '12. Autonomous Path Planning with Nav2 Protocol',
    slug: '12-autonomous-path-planning-nav2-protocol',
    desc: 'Configure ROS 2 Nav2 stack, A* global costmap path planning, DWB local obstacle avoidance controller, and goal action servers.',
    code: `print("Nav2 Goal Action Sent: Waypoint X=5.0m, Y=3.2m, Yaw=1.57rad")`,
    solution: `print("Nav2 Active")`,
    lang: 'python'
  },
  {
    title: '13. Robotic Arm Trajectory Planning & MoveIt 2',
    slug: '13-robotic-arm-trajectory-planning-moveit2',
    desc: 'Plan collision-free motion trajectories for 6-DOF robotic arms using MoveIt 2, OMPL planners, and inverse kinematics solvers.',
    code: `print("MoveIt 2 Motion Plan Computed: 6-DOF Arm Trajectory Validated.")`,
    solution: `print("MoveIt 2 Trajectory Executed")`,
    lang: 'python'
  },
  {
    title: '14. AI & Reinforcement Learning for Robot Control',
    slug: '14-ai-reinforcement-learning-robot-control',
    desc: 'Train deep reinforcement learning agents (PPO / SAC) in Isaac Sim / Gazebo for quadruped walking and manipulation tasks.',
    code: `print("PyTorch PPO Policy Evaluation: Episode Reward = 340.5")`,
    solution: `print("RL Policy Loaded")`,
    lang: 'python'
  },
  {
    title: '15. Deploying Autonomous Mobile Robots in Production',
    slug: '15-deploying-autonomous-mobile-robots-production',
    desc: 'Deploy ROS 2 production stack onto Jetson Orin / Raspberry Pi, Docker containerization, RTOS real-time execution, and hardware safety.',
    code: `print("Production Robot Launch Sequence: All Nodes & Safety Watchdogs Operational.")`,
    solution: `print("Production Launch Complete")`,
    lang: 'python'
  }
];

const roboticsResources = [
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'documentation', title: 'Official ROS 2 Humble Documentation & Manuals', url: 'https://docs.ros.org/en/humble/', author: 'Open Robotics Foundation', platform: 'ROS.org', sortOrder: 1 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'video', title: 'Robotics Specialization Course by UPenn', url: 'https://www.coursera.org/specializations/robotics', author: 'University of Pennsylvania', platform: 'Coursera', sortOrder: 2 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'book', title: 'Modern Robotics: Mechanics, Planning, and Control', url: 'http://modernrobotics.org/', author: 'Kevin M. Lynch & Frank C. Park', platform: 'Cambridge Press', sortOrder: 3 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'documentation', title: 'Gazebo 3D Simulation Engine User Guide', url: 'https://gazebosim.org/docs', author: 'Open Robotics', platform: 'Gazebo Sim', sortOrder: 4 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'github', title: 'OpenCV Computer Vision for Autonomous Robots', url: 'https://github.com/opencv/opencv', author: 'OpenCV Foundation', platform: 'GitHub', sortOrder: 5 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'article', title: 'SLAM & Autonomous Navigation Systems Architecture', url: 'https://nav2.org/', author: 'Nav2 Working Group', platform: 'Nav2.org', sortOrder: 6 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'documentation', title: 'MoveIt 2 Robotic Motion Planning Framework', url: 'https://moveit.ros.org/', author: 'PickNik Robotics', platform: 'MoveIt', sortOrder: 7 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'article', title: 'Closed-Loop PID Controller Tuning in Python & C++', url: 'https://controlautomation.com/', author: 'Control Automation', platform: 'Control Automation', sortOrder: 8 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'github', title: 'Awesome ROS 2 Autonomous Robotics Resources', url: 'https://github.com/fkromer/awesome-ros2', author: 'ROS 2 Community', platform: 'GitHub', sortOrder: 9 },
  { id: uuidv4(), courseId: roboticsCourseId, resourceType: 'video', title: 'NVIDIA Isaac Sim & AI Robotics Masterclass', url: 'https://developer.nvidia.com/isaac-sim', author: 'NVIDIA Robotics', platform: 'NVIDIA Developer', sortOrder: 10 }
];

// Helper to assemble full course details JSON entry
function buildCourseDetail(courseId, catObj, title, slug, desc, diff, hours, lessonsList, resourcesList) {
  const modules = [{
    id: uuidv4(),
    courseId: courseId,
    title: `Section 1: Complete ${title} Masterclass`,
    description: `Master ${title} step-by-step from fundamental principles to advanced real-world projects.`,
    sortOrder: 1,
    xpRequired: 0,
    lessons: lessonsList.map((item, idx) => ({
      id: uuidv4(),
      title: item.title,
      slug: item.slug,
      estimatedMinutes: 20,
      xpReward: 30,
      sortOrder: idx + 1
    }))
  }];

  return {
    id: courseId,
    categoryId: catObj.id,
    title: title,
    slug: slug,
    description: desc,
    difficulty: diff,
    language: 'en',
    thumbnailUrl: null,
    estimatedHours: hours,
    totalLessons: lessonsList.length,
    isPublished: true,
    createdAt: new Date().toISOString(),
    modules: modules,
    category: {
      id: catObj.id,
      name: catObj.name,
      slug: catObj.slug,
      description: catObj.description,
      icon: catObj.icon,
      color: catObj.color,
      sortOrder: catObj.sortOrder
    },
    resources: resourcesList
  };
}

// Helper to populate lessonsData entries
function populateLessonsMap(courseSlug, courseTitle, courseId, moduleObj, lessonsList) {
  lessonsList.forEach((item, idx) => {
    const lessonId = moduleObj.lessons[idx].id;
    const key = `${courseSlug}/${item.slug}`;

    const quizId = uuidv4();
    const q1Id = uuidv4();

    lessonsData[key] = {
      lesson: {
        id: lessonId,
        moduleId: moduleObj.id,
        title: item.title,
        slug: item.slug,
        contentMarkdown: `# ${item.title}\n\n${item.desc}\n\n## Overview\nIn this lesson, you will master the principles of **${item.title}** through interactive code exercises and real-world hardware concepts.\n\n## Requirements & Tools\n- Understanding of fundamental programming constructs.\n- Development environment and syntax compiler tools.\n\n## Implementation & Code Explanation\nExamine the starter code below to see how to implement this module in practice.\n\n## Key Takeaways\n1. Always test and verify hardware/software interfaces step-by-step.\n2. Ensure proper pinout or topic mappings before executing control loops.`,
        starterCode: item.code,
        solutionCode: item.solution,
        codeLanguage: item.lang,
        sortOrder: idx + 1,
        estimatedMinutes: 20,
        xpReward: 30,
        module: {
          id: moduleObj.id,
          courseId: courseId,
          title: moduleObj.title,
          description: moduleObj.description,
          sortOrder: 1,
          xpRequired: 0,
          course: {
            title: courseTitle,
            slug: courseSlug,
            id: courseId
          }
        },
        quizzes: [
          {
            id: quizId,
            lessonId: lessonId,
            title: `Quiz — ${item.title}`,
            passingScore: 70,
            timeLimitSeconds: null,
            questions: [
              {
                id: q1Id,
                quizId: quizId,
                questionText: `What is the core principle behind ${item.title}?`,
                questionType: 'multiple_choice',
                codeSnippet: null,
                explanation: 'Always verify interface parameters and hardware logic before executing control loops.',
                points: 10,
                sortOrder: 1,
                answers: [
                  { id: uuidv4(), questionId: q1Id, answerText: 'Ignore pin configurations and run code directly', isCorrect: false, sortOrder: 1 },
                  { id: uuidv4(), questionId: q1Id, answerText: 'Configure proper pinouts/topics and verify logic step-by-step', isCorrect: true, sortOrder: 2 },
                  { id: uuidv4(), questionId: q1Id, answerText: 'Disable all timers and safety interrupts', isCorrect: false, sortOrder: 3 }
                ]
              }
            ]
          }
        ]
      }
    };
  });
}

// Build Course Details
const arduinoCourseDetail = buildCourseDetail(
  arduinoCourseId,
  basicsCat,
  'Arduino',
  arduinoSlug,
  'Master microcontroller programming, C/C++ embedded code, sensors, actuators, PWM, I2C/SPI communication, and IoT projects with Arduino UNO & ESP32.',
  'beginner',
  25,
  arduinoLessonsList,
  arduinoResources
);

const roboticsCourseDetail = buildCourseDetail(
  roboticsCourseId,
  aimlCat,
  'Robotics Engineering & ROS 2',
  roboticsSlug,
  'Master kinematic modeling, robot operating system (ROS 2), Gazebo 3D simulation, computer vision, PID motor control, and autonomous navigation (SLAM).',
  'intermediate',
  30,
  roboticsLessonsList,
  roboticsResources
);

// Add to courseDetails.json
courseDetailsData['arduino'] = arduinoCourseDetail;
courseDetailsData['robotics'] = roboticsCourseDetail;

// Add to courses.json
const arduinoCourseSummary = {
  id: arduinoCourseId,
  categoryId: basicsCat.id,
  title: 'Arduino',
  slug: 'arduino',
  description: arduinoCourseDetail.description,
  difficulty: 'beginner',
  language: 'en',
  thumbnailUrl: null,
  estimatedHours: 25,
  totalLessons: 15,
  isPublished: true,
  createdAt: new Date().toISOString(),
  category: arduinoCourseDetail.category,
  _count: { modules: 1 }
};

const roboticsCourseSummary = {
  id: roboticsCourseId,
  categoryId: aimlCat.id,
  title: 'Robotics Engineering & ROS 2',
  slug: 'robotics',
  description: roboticsCourseDetail.description,
  difficulty: 'intermediate',
  language: 'en',
  thumbnailUrl: null,
  estimatedHours: 30,
  totalLessons: 15,
  isPublished: true,
  createdAt: new Date().toISOString(),
  category: roboticsCourseDetail.category,
  _count: { modules: 1 }
};

// Check if already present to prevent duplicate appending
const existingArduinoIdx = coursesData.findIndex(c => c.slug === 'arduino');
if (existingArduinoIdx >= 0) coursesData[existingArduinoIdx] = arduinoCourseSummary;
else coursesData.push(arduinoCourseSummary);

const existingRoboticsIdx = coursesData.findIndex(c => c.slug === 'robotics');
if (existingRoboticsIdx >= 0) coursesData[existingRoboticsIdx] = roboticsCourseSummary;
else coursesData.push(roboticsCourseSummary);

// Populate lessonsData map
populateLessonsMap('arduino', 'Arduino', arduinoCourseId, arduinoCourseDetail.modules[0], arduinoLessonsList);
populateLessonsMap('robotics', 'Robotics Engineering & ROS 2', roboticsCourseId, roboticsCourseDetail.modules[0], roboticsLessonsList);

// Save back to JSON files
fs.writeFileSync(coursesFilePath, JSON.stringify(coursesData, null, 2), 'utf8');
fs.writeFileSync(courseDetailsFilePath, JSON.stringify(courseDetailsData, null, 2), 'utf8');
fs.writeFileSync(lessonsFilePath, JSON.stringify(lessonsData, null, 2), 'utf8');

console.log('Successfully generated and saved Arduino and Robotics courses with 15 lessons and 10 resources each!');
