let formElem = document.querySelector("form");
const tBodyElem = document.querySelector("table tbody");
let users =[];
let userId = 0;
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

    }else{
        alert("asasas");
    }
});

function addUi(param) {
    param.forEach(user =>{
        const {id,fullName, email,pass} = user
        tBodyElem.innerHTML+= `
        <tr>
                  <td>${id}</td>
                  <td>${fullName}</td>
                  <td>${email}</td>
                  <td>*********</td>
                  <td>
                    <button class="btn btn-danger">Silmək</button>
                    <button class="btn btn-secondary">Düzəltmək</button>
                  </td>
        </tr>
        `
    })
}
