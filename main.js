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
    const {
        emailSpan,emailInput,usernameSpan,usernameInput,firstElementChild,lastElementChild
    } 
    = 
    getDomElements(button);

    firstElementChild.classList.add("d-none");
    lastElementChild.classList.remove("d-none");

    emailSpan.classList.add("d-none");
    emailInput.classList.remove("d-none");

    usernameSpan.classList.add("d-none");
    usernameInput.classList.remove("d-none");

    // USER FİND
    let foundUser = users.find(user => user.id ===id);
    lastElementChild.value = foundUser.pass
emailInput.value = foundUser.email
usernameInput.value = foundUser.fullname

    // SAVE BUTTON
    button.nextElementSibling.classList.remove("d-none");
    button.classList.add("d-none");

}

// -----elave olunan datanı edit etmek---END---

function updateUser(button, id) {
    const {
        emailSpan,emailInput,usernameSpan,usernameInput,firstElementChild,lastElementChild
    } 
    = 
    getDomElements(button);
    let foundUser = users.find(user => user.id ===id);
    foundUser.fullname = usernameInput.value;
    foundUser.email = emailInput.value;
    foundUser.pass = lastElementChild.value;

    addUi(users);

}

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
                  <input type="text" class="d-none">
                  </td>
                  <td>
                    <button class="btn btn-danger" onclick="deleteUser(${id})">Silmək</button>
                    <button class="btn btn-secondary" onclick="editUser(this,${id})">Düzəlt</button>
                    <button class="btn btn-success d-none" onclick="updateUser(this,${id})">Qeyd</button>
                  </td>
        </tr>
        `
    })
}
// ---yazılan datanın elave olunması----END--


function getDomElements(btn) {
    const {firstElementChild, lastElementChild, previousElementSibling} = btn.parentElement.previousElementSibling

    let emailSpan = previousElementSibling.firstElementChild;
    let emailInput = previousElementSibling.lastElementChild;

    let usernameSpan = previousElementSibling.previousElementSibling.firstElementChild;
    let usernameInput = previousElementSibling.previousElementSibling.lastElementChild;
return{
    firstElementChild,
lastElementChild,
    emailSpan,
emailInput,
usernameSpan,
usernameInput
}

}