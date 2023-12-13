import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let firstName;
  let lastName;
  createUser()
    .then((user) => {
      firstName = user.firstName;
      lastName = user.lastName;
      return uploadPhoto();
    })
    .then((photo) => {
      const userBody = photo.body;
      console.log(`${userBody} ${firstName} ${lastName}`);
    });
}
