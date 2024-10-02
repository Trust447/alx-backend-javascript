const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.length > 0);
      // First line is the header, so we remove it
      const students = lines.slice(1);

      // Rest of the code processing student data

      resolve();
    });
  });
}

module.exports = countStudents;
