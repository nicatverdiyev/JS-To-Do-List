let formElem = document.querySelector("form");
const tBodyElem = document.querySelector("table tbody");
let users =[];
let userId = 0;
let localVal = JSON.parse(localStorage.getItem("users"));
let localId = localStorage.getItem("userId");
if (localVal) {
    users =  localVal;
    addUi(users)
}
if (localId) {
    userId = localId;
}

formElem.addEventListener("submit", (e) =>{
    e.preventDefault();
    let foundUser= users.find(user => user.email === useremail.value);
    if(!foundUser){
        users.push(
            {
                id:++userId,
                fullname:fullname.value,
                email:useremail.value,
                pass:userpass.value
            });
            addUi(users);
            localStorage.setItem("users",JSON.stringify(users));
            localStorage.setItem("userId",userId);

    }else{
        alert("e-poçt artıq elave edilib");
    }

   fullname.value = "";
   useremail.value = "";
    userpass.value = "";
});

// -----elave olunan datanı silmek----START--
function deleteUser(id) {
    users = users.filter(user=> user.id !== id);
    localStorage.setItem("users",JSON.stringify(users));

    addUi(users);
    
};
// -----elave olunan datanı silmek----END--

// -----elave olunan datanı edit etmek---START---


function editUser(button, id) {
    const {firstElementChild, lastElementChild, previousElementSibling} = button.parentElement.previousElementSibling
    let passwordSpan = firstElementChild;
    let passwordInput = lastElementChild;

    let emailSpan = previousElementSibling.firstElementChild;
    let emailInput = previousElementSibling.lastElementChild;

    let usernameSpan = previousElementSibling.previousElementSibling.firstElementChild;
    let usernameInput = previousElementSibling.previousElementSibling.lastElementChild;

    passwordSpan.classList.add("d-none");
    passwordInput.classList.remove("d-none");

    emailSpan.classList.add("d-none");
    emailInput.classList.remove("d-none");

    usernameSpan.classList.add("d-none");
    usernameInput.classList.remove("d-none");

    
}

// -----elave olunan datanı edit etmek---END---

// ---yazılan datanın elave olunması----START--
function addUi(param) {
    tBodyElem.innerHTML = "";
    param.forEach(user =>{
        const {id,fullname, email,pass} = user
        tBodyElem.innerHTML+= `
        <tr>
                  <td>${id}</td>
                  <td class="userNameCol"> 
                  <span>${fullname}</span>
                  <input type="email" class="d-none">
                  </td>
                  <td class="userEmailCol">
                   <span>${email}</span>
                  <input type="email" class="d-none">
                  </td>
                  <td class="userPassCol">
                  <span>*********</span>
                  <input type="password" class="d-none">
                  </td>
                  <td>
                    <button class="btn btn-danger" onclick="deleteUser(${id})">Silmək</button>
                    <button class="btn btn-secondary" onclick="editUser(this,${id})">Düzəltmək</button>
                  </td>
        </tr>
        `
    })
}
// ---yazılan datanın elave olunması----END--


