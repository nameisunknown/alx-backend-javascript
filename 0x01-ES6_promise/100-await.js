import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const asyncResObj = { photo: null, user: null };

  try {
    asyncResObj.photo = await uploadPhoto().then((res) => res);
    asyncResObj.user = await createUser().then((res) => res);
  } catch (err) {
    return { photo: null, user: null };
  }

  return asyncResObj;
}
