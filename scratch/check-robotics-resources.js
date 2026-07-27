const fs = require('fs');
const path = require('path');

const courseDetailsFilePath = path.join(__dirname, '../src/data/courseDetails.json');
const courseDetailsData = JSON.parse(fs.readFileSync(courseDetailsFilePath, 'utf8'));

const roboticsCourse = courseDetailsData['robotics'];
if (roboticsCourse) {
  console.log('Robotics Resources Count:', roboticsCourse.resources ? roboticsCourse.resources.length : 0);
  console.log(JSON.stringify(roboticsCourse.resources, null, 2));
} else {
  console.log('Robotics course not found in courseDetails.json');
}
