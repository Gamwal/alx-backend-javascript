export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const response = true;
    const error = 'Error';
    if (response) {
      resolve('True');
    } else {
      reject(error);
    }
  });
}
