export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);
  if (position >= length || position < 0) {
    return new Error('Position outside range');
  }
  dv.setInt8(position, value);

  return dv;
}
