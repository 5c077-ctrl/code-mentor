const fs = require('fs');
const path = require('path');

function uuidv4() {
  return 'f' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const courseDetailsFilePath = path.join(__dirname, '../src/data/courseDetails.json');
const courseDetailsData = JSON.parse(fs.readFileSync(courseDetailsFilePath, 'utf8'));

// Arduino Resources (5 YouTube Videos + 10 Other Resources = 15 total)
const arduinoCourseId = courseDetailsData['arduino'] ? courseDetailsData['arduino'].id : uuidv4();
const arduinoResources = [
  // 5 YouTube Videos
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'youtube',
    title: 'Arduino Course for Beginners - Open-Source Electronics Platform',
    url: 'https://www.youtube.com/watch?v=zJ-LqeX_fLU',
    author: 'freeCodeCamp.org',
    platform: 'YouTube',
    sortOrder: 1
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'youtube',
    title: 'Arduino Tutorial 1: Setting Up and Programming the Arduino',
    url: 'https://www.youtube.com/watch?v=1Xi8Z84Qc3s',
    author: 'Paul McWhorter',
    platform: 'YouTube',
    sortOrder: 2
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'youtube',
    title: 'Arduino Sensors and Electronics Full Crash Course',
    url: 'https://www.youtube.com/watch?v=d8_xXNcGYgo',
    author: 'Programming Electronics Academy',
    platform: 'YouTube',
    sortOrder: 3
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'youtube',
    title: 'ESP32 & Arduino Microcontroller Deep Dive',
    url: 'https://www.youtube.com/watch?v=nL34zDTPkcs',
    author: 'freeCodeCamp.org',
    platform: 'YouTube',
    sortOrder: 4
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'youtube',
    title: 'Arduino Robotics - How to Build an Autonomous Robot Car',
    url: 'https://www.youtube.com/watch?v=Cq_bCJ8fH4I',
    author: 'How To Mechatronics',
    platform: 'YouTube',
    sortOrder: 5
  },

  // 10 Other Functional Resources
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'documentation',
    title: 'Official Arduino Language & API Reference Guide',
    url: 'https://www.arduino.cc/reference/en/',
    author: 'Arduino Official Team',
    platform: 'Arduino.cc',
    sortOrder: 6
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'documentation',
    title: 'Arduino Official Hardware & Electronics Learn Guide',
    url: 'https://docs.arduino.cc/learn/',
    author: 'Arduino Education',
    platform: 'Arduino Docs',
    sortOrder: 7
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'github',
    title: 'Official Arduino Core Open Source GitHub Repository',
    url: 'https://github.com/arduino/Arduino',
    author: 'Arduino Community',
    platform: 'GitHub',
    sortOrder: 8
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'interactive',
    title: 'Autodesk Tinkercad Interactive Arduino Circuit Simulator',
    url: 'https://www.tinkercad.com/circuits',
    author: 'Autodesk',
    platform: 'Tinkercad',
    sortOrder: 9
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'article',
    title: 'Random Nerd Tutorials: ESP32 & Arduino Project Guides',
    url: 'https://randomnerdtutorials.com/',
    author: 'Rui Santos & Sara Santos',
    platform: 'Random Nerd Tutorials',
    sortOrder: 10
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'article',
    title: 'SparkFun Electronics Microcontroller & Sensors Tutorials',
    url: 'https://sparkfun.com/tutorials',
    author: 'SparkFun Electronics',
    platform: 'SparkFun',
    sortOrder: 11
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'interactive',
    title: 'Wokwi Online Arduino & ESP32 Browser Simulator',
    url: 'https://wokwi.com/',
    author: 'Wokwi Systems',
    platform: 'Wokwi',
    sortOrder: 12
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'article',
    title: 'Hackaday Microcontrollers & Open Source Hardware Projects',
    url: 'https://hackaday.com/category/microcontrollers/',
    author: 'Hackaday Hardware',
    platform: 'Hackaday',
    sortOrder: 13
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'documentation',
    title: 'L298N Dual Full-Bridge Motor Driver Technical Datasheet',
    url: 'https://www.st.com/resource/en/datasheet/l298.pdf',
    author: 'STMicroelectronics',
    platform: 'Datasheet',
    sortOrder: 14
  },
  {
    id: uuidv4(),
    courseId: arduinoCourseId,
    resourceType: 'github',
    title: 'Arduino Servo Motor Control Official Library Repository',
    url: 'https://github.com/arduino-libraries/Servo',
    author: 'Arduino Libraries Team',
    platform: 'GitHub',
    sortOrder: 15
  }
];

// Robotics Resources (5 YouTube Videos + 10 Other Resources = 15 total)
const roboticsCourseId = courseDetailsData['robotics'] ? courseDetailsData['robotics'].id : uuidv4();
const roboticsResources = [
  // 5 YouTube Videos
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'youtube',
    title: 'ROS 2 Full Course for Beginners - Robotics Operating System',
    url: 'https://www.youtube.com/watch?v=gQnU9Zk4tXQ',
    author: 'The Construct',
    platform: 'YouTube',
    sortOrder: 1
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'youtube',
    title: 'Autonomous Mobile Robots Specialization',
    url: 'https://www.youtube.com/watch?v=wfNV0xQflZ0',
    author: 'University of Pennsylvania',
    platform: 'YouTube',
    sortOrder: 2
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'youtube',
    title: 'Modern Robotics: Mechanics, Planning, and Control',
    url: 'https://www.youtube.com/watch?v=4-s83cvyP6E',
    author: 'Northwestern Robotics',
    platform: 'YouTube',
    sortOrder: 3
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'youtube',
    title: 'Gazebo 3D Simulation & ROS 2 Integration Course',
    url: 'https://www.youtube.com/watch?v=f2nNf6M09kY',
    author: 'Articulated Robotics',
    platform: 'YouTube',
    sortOrder: 4
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'youtube',
    title: 'OpenCV Computer Vision & Object Tracking Masterclass',
    url: 'https://www.youtube.com/watch?v=481S1E6q__o',
    author: 'freeCodeCamp.org',
    platform: 'YouTube',
    sortOrder: 5
  },

  // 10 Other Functional Resources
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'documentation',
    title: 'Official ROS 2 Humble Documentation & Manuals',
    url: 'https://docs.ros.org/en/humble/',
    author: 'Open Robotics Foundation',
    platform: 'ROS.org',
    sortOrder: 6
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'book',
    title: 'Modern Robotics Mechanics & Kinematics Book Portal',
    url: 'http://modernrobotics.org/',
    author: 'Kevin M. Lynch & Frank C. Park',
    platform: 'Cambridge Press',
    sortOrder: 7
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'documentation',
    title: 'Gazebo 3D Robotics Physics Simulator Manual',
    url: 'https://gazebosim.org/docs',
    author: 'Open Robotics',
    platform: 'Gazebo Sim',
    sortOrder: 8
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'documentation',
    title: 'Nav2 Autonomous Navigation & SLAM Framework',
    url: 'https://nav2.org/',
    author: 'Nav2 Working Group',
    platform: 'Nav2.org',
    sortOrder: 9
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'documentation',
    title: 'MoveIt 2 Robotic Motion Planning Framework',
    url: 'https://moveit.ros.org/',
    author: 'PickNik Robotics',
    platform: 'MoveIt',
    sortOrder: 10
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'github',
    title: 'Nav2 ROS 2 Navigation Stack GitHub Repository',
    url: 'https://github.com/ros-navigation/navigation2',
    author: 'ROS 2 Navigation Team',
    platform: 'GitHub',
    sortOrder: 11
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'github',
    title: 'MoveIt 2 Trajectory & Motion Planning GitHub',
    url: 'https://github.com/ros-planning/moveit2',
    author: 'MoveIt Team',
    platform: 'GitHub',
    sortOrder: 12
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'github',
    title: 'OpenCV Open Source Computer Vision Library',
    url: 'https://github.com/opencv/opencv',
    author: 'OpenCV Foundation',
    platform: 'GitHub',
    sortOrder: 13
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'article',
    title: 'NVIDIA Isaac Sim AI Robotics Platform & SDK',
    url: 'https://developer.nvidia.com/isaac-sim',
    author: 'NVIDIA Robotics',
    platform: 'NVIDIA Developer',
    sortOrder: 14
  },
  {
    id: uuidv4(),
    courseId: roboticsCourseId,
    resourceType: 'github',
    title: 'Official ROS 2 Core Distribution Repository',
    url: 'https://github.com/ros2/ros2',
    author: 'Open Robotics Community',
    platform: 'GitHub',
    sortOrder: 15
  }
];

if (courseDetailsData['arduino']) {
  courseDetailsData['arduino'].resources = arduinoResources;
}
if (courseDetailsData['robotics']) {
  courseDetailsData['robotics'].resources = roboticsResources;
}

fs.writeFileSync(courseDetailsFilePath, JSON.stringify(courseDetailsData, null, 2), 'utf8');
console.log('Successfully updated Arduino and Robotics courses with 5 YouTube videos and 10 other functional resources each (15 total each)!');
