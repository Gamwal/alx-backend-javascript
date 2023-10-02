export default function getListStudentIds(arr) {
  const ids = [];
  if (arr.constructor === Array) {
    for (const ar of arr) {
      ids.push(ar.id);
    }
    return ids;
  }
  return [];
}
