const sleep = (x) => {
  return new Promise((resolve) => setTimeout(resolve, x));
};

const logger = async () => {
  for (let i = 0; i <= 3; i++) {
    if (i === 0) {
      console.log("Start");
    } else {
      await sleep(i * 1000);
      console.log(i);
    }
  }
};

logger();
