import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.all(promises.map((promise) => promise.then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error }),
  )));
}
