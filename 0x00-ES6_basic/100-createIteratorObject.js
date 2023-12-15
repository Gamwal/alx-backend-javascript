export default function createIteratorObject(report) {
  const keys = Object.keys(report.allEmployees);
  const newList = keys.reduce((agg, value) => {
    agg.push(...report.allEmployees[value]);
    return agg;
  }, []);
  return newList;
}
