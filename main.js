let formElem = document.querySelector("form");
formElem.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(formElem.fullname);
    console.log(formElem.useremail);
    console.log(formElem.userpass);

});
