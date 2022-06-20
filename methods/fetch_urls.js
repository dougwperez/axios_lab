// Objective: Find the most common url in the list
//https://javascript.plainenglish.io/how-to-find-the-most-frequent-element-in-an-array-in-javascript-c85119dc78d2

const getUrls = () => {
  fetch("https://public.karat.io/content/q015/urls.txt")
    .then(function (response) {
      // Successfull fetch return as json
      return response.text();
    })
    .then(function (data) {
      // Data now contains the json
      // console.log("data from FETCH", data);

      const urlArray = data.split("\n");
      console.log(": urlArray ", urlArray);

      const getMostFrequent = (arr) => {
        const hashmap = arr.reduce((obj, key) => {
          obj[key] = (obj[key] || 0) + 1;
          return obj;
        }, {});
        return Object.keys(hashmap).reduce((a, b) =>
          hashmap[a] > hashmap[b] ? a : b
        );
      };

      getMostFrequent(urlArray);
      console.log("getMostFrequent(urlArray)", getMostFrequent(urlArray));
    })
    .catch(function (error) {
      // A Error occured
      console.log(error);
    });
};
getUrls();
