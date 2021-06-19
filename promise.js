const fetchData = async () => {
  const { data } = await fetch("https://www.zapya.com/");
  return data;
};

fetchData()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
