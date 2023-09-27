export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse === undefined) {
    task = true;
    task = false;
  }

  return [task, task2];
}
