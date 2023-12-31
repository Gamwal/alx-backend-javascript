import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [createUser(), uploadPhoto()];

  return Promise.all(promises)
    .then((results) => {
      const user = results[0];
      const photo = results[1];

      const { firstName } = user;
      const { lastName } = user;
      const userBody = photo.body;

      console.log(`${userBody} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
