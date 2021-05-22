// Add your code here

function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      const main = document.getElementsByTagName("body")[0];
      
      main.innerHTML += object.id;
    })
    .catch(function(error) {
      const main = document.getElementsByTagName("body")[0];
      alert("Something is amiss!");
      main.innerHTML += error.message;
    })
}