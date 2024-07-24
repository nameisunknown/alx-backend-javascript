export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const isPromise = true;
    if (isPromise) {
      resolve(`Promise is ${isPromise}`);
    } else {
      reject(`Promise is ${isPromise}`);
    }
  });
}
