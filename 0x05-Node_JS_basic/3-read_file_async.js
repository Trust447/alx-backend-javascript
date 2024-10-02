const { readFile } = require('fs');

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      if (lines.length < 2) {
        reject(new Error('No data in the database'));
        return;
      }

      const students = {};
      const fields = {};
      const header = lines[0].split(',');  // First line is the header

      for (const line of lines.slice(1)) { // Skip the header row
        const studentData = line.split(',');
        const field = studentData[3]; // Assuming the field is at index 3 (last column)

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(studentData[0]); // Collect student first names

        if (!fields[field]) {
          fields[field] = 0;
        }
        fields[field] += 1; // Count students in the field
      }

      const totalStudents = lines.length - 1;
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, count] of Object.entries(fields)) {
        const namesList = students[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${namesList}`);
      }

      resolve(true); // You may return data if needed for further usage
    });
  });
}

module.exports = countStudents;
