export default function updateUniqueItems(mapObj) {
  try {
    for (const [key, value] of mapObj.entries()) {
      if (value === 1) {
        mapObj.set(key, 100);
      } else {
        mapObj.set(key, value);
      }
    }
  } catch (e) {
    throw new Error('Cannot process');
  }
  return mapObj;
}
