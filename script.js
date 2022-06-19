var el = document.getElementById("myUl");
var sortable = Sortable.create(el);

const result = document.querySelector(".result");

// const getUsers = () => {
//   axios
//     .get("https://reqres.in/api/users")
//     .then((response) => {
//       const users = response.data.data;
//       console.log(`GET users`, users[0]);
//       result.textContent = users[0].email;
//     })
//     .catch((error) => console.error(error));
// };
// getUsers();

const getUrls = () => {
  axios
    .get("https://public.karat.io/content/q015/urls.txt")
    .then((response) => {
      const urls = response.data;
      console.log(`GET urls`, urls.split("http://"));
      result.textContent = urls;
    })
    .catch((error) => console.error(error));
};
getUrls();
