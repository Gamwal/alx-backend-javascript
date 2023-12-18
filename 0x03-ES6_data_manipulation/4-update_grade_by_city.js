/* eslint-disable no-param-reassign */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const results = students.filter((student) => student.location === city);

  results.map((result) => {
    newGrades.forEach((newGrade) => {
      if (newGrade.studentId === result.id) {
        result.grade = newGrade.grade;
      }
    });
    if (result.grade === undefined) {
      result.grade = 'N/A';
    }
    return result;
  });
  return results;
}
