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

// AXIOS

// const getUrls = () => {
//   axios
//     .get("https://public.karat.io/content/q015/urls.txt")
//     .then((response) => {
//       const urls = response.data;
//       const split = urls.split("\n");
//       console.log(`GET split`, split);
//       // result.textContent = split;

//       function mode(arr) {
//         return arr
//           .sort(
//             (a, b) =>
//               arr.filter((v) => v === a).length -
//               arr.filter((v) => v === b).length
//           )
//           .pop();
//       }
//       console.log("MODE", mode(split));
//       result.textContent = mode(split);
//     })
//     .catch((error) => console.error(error));
// };
// getUrls();

// FETCH API

//

// const getUrls = () => {
//   fetch("https://ghibliapi.herokuapp.com/films")
//     .then(function (response) {
//       // Successfull fetch return as json
//       return response.json();
//     })
//     .then(function (data) {
//       // Data now contains the json
//       console.log(data);
//     })
//     .catch(function (error) {
//       // A Error occured
//       console.log(error);
//     });
// };
// getUrls();
