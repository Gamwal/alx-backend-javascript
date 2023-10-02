export default function getStudentsByLocation(arr, city) {
  const result = arr.filter((ar) => ar.location === city);
  return result;
}
