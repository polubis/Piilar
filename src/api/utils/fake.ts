const fake = <T>(data: T, isSuccess = true, delay = 1000) => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(data);
      } else {
        reject(data);
      }
    }, delay);
  });
};

export default fake;
