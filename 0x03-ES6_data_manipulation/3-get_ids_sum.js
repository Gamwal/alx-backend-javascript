export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((accumulator, currVal) => accumulator + currVal.id, 0);
  return sum;
}
