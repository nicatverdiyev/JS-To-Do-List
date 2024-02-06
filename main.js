let formElem = document.querySelector("form");
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
            }
        );
    }else{
        alert("asasas");
    }
   

console.log(users);
});
