export default function getListStudents() {
  const result = [];
  result.push({ firstName: 'Guillaume', id: 1, location: 'San Francisco' });
  result.push({ firstName: 'James', id: 2, location: 'Columbia' });
  result.push({ firstName: 'Serena', id: 5, location: 'San Francisco' });

  return result;
}
