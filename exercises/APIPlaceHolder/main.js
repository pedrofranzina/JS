const userList = document.querySelector("#userList");
const detailedData = document.querySelector("#detailedData");
let userData = [];

userList.addEventListener("click", function (event) {
    if (event.target.tagName !== "LI") {
        return;
    }
    const i = event.target.dataset.index;
    console.log(userData[i]);
    detailedData.innerHTML = `<p>email: ${userData[i].email}</p>`;
    detailedData.innerHTML += `<p>username: ${userData[i].username}</p>`;
    detailedData.innerHTML += `<p>ID: ${userData[i].id}</p>`;
});

async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    const result = await response.json();
    userData = result;
    userList.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
        userList.innerHTML += `<li data-index="${i}">${result[i].name}</li>`
    }
}

getUsers();