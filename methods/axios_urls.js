// Objective: Find the most common url in the list

const getUrls = () => {
  axios
    .get("https://public.karat.io/content/q015/urls.txt")
    .then((response) => {
      const urls = response.data;
      const split = urls.split("\n");
      console.log(`GET split`, split);
      // result.textContent = split;

      function mode(arr) {
        return arr
          .sort(
            (a, b) =>
              arr.filter((v) => v === a).length -
              arr.filter((v) => v === b).length
          )
          .pop();
      }
      console.log("MODE", mode(split));
      result.textContent = mode(split);
    })
    .catch((error) => console.error(error));
};
getUrls();
