import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [createUser(), uploadPhoto()];

	Promise.all(promises)
    .then((results) => {
			const user = results[0];
			const photo = results[1];

      const firstName = user.firstName;
      const lastName = user.lastName;
			const userBody = photo.body;

			console.log(`${userBody} ${firstName} ${lastName}`);
    })
		.catch((error) => {
			console.error('Signup system offline');
		})
}
