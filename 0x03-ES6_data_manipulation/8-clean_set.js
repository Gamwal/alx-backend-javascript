export default function cleanSet(set, startString) {
  if (startString !== '' && startString !== undefined && typeof startString === 'string') {
    const result = new Set();
    const regex = new RegExp(`^${startString}`);
    set.forEach((item) => {
      if (regex.test(item)) {
        result.add(item.slice(startString.length));
      }
    });
    return [...result].join('-');
  }
  return '';
}
