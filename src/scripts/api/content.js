export default function getContent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 300);
  });
}