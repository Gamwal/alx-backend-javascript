export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const ids = arr.map((ar) => ar.id);
    return ids;
  }
  return [];
}
