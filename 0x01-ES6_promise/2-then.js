export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      return {
        status: 200, body: 'Success'
      };
    })
    .catch((error) => {
      return new Error();
    })
    .finally((info) => {
      console.log('Got a response from the API');
    });
}
