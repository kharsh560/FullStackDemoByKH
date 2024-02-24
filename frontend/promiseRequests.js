console.log("Checking-3!");

//####################################### Method-1 #######################################
// Making "promise" request using XHR :-

// const requestURL = "http://localhost:2345/jokes";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", requestURL);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(this.responseText);
//     console.log(`response data is an array of ${data.length} items!`);
//     console.log(data);
//     for (var i = 0; i < data.length; i++) {
//       const para = document.createElement("p");
//       para.innerHTML = `setup: ${data[i].setup} <br> punchline: ${data[i].punchline}`;
//       document.getElementById("mainContainer").appendChild(para);
//     }
//   }
// };
// xhr.send();

//####################################### Method-2 #######################################
// Making "promise" request using async-await & try-catch :-

// async function getAllUsers() {
//   try {
//     const response = await fetch("http://localhost:2345/jokes");

//     const data = await response.json();
//     console.log(data);
//     for (var i = 0; i < data.length; i++) {
//       const para = document.createElement("p");
//       para.innerHTML = `setup: ${data[i].setup} <br> punchline: ${data[i].punchline}`;
//       document.getElementById("mainContainer").appendChild(para);
//     }
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

//####################################### Method-3 #######################################
// Making "promise" request using ".then" & ".catch" :-

fetch("http://localhost:2345/jokes")
  .then((response) => {
    return response.json();
    // Jo response aaya, usko parse kiya humne into "json" and return kar diya.
  })
  .then((data) => {
    // upar wale ".then" se response aaya iss ".then" ke paas jisko we named "data"
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      const para = document.createElement("p");
      para.innerHTML = `setup: ${data[i].setup} <br> punchline: ${data[i].punchline}`;
      document.getElementById("mainContainer").appendChild(para);
    }
  })
  .catch((error) => console.log(error));

// But can't it be done using a single ".then"? Let's see!
// fetch("http://localhost:2345/jokes")
//   .then((response) => {
//     data = response.json();
//     console.log(data);
//     console.log(`Directly used one ".then"`);
//     for (var i = 0; i < data.length; i++) {
//       const para = document.createElement("p");
//       para.innerHTML = `setup: ${data[i].setup} <br> punchline: ${data[i].punchline}`;
//       document.getElementById("mainContainer").appendChild(para);
//     }
//   })
//   .catch((error) => console.log(error));
// No, its not working, the pormise stayed in pending state.
