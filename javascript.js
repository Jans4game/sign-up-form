const foreal =  document.querySelector('#passwork');
const confirm = document.querySelector('#confpasswork');


function checkPasswords() {
    let password = foreal.value;
    let confirmpassword = confirm.value;

    if(!password){
        confpasswork.style.border ='0.3em solid red';
    }else if(password != confirmpassword){
        confpasswork.style.border ='0.3em solid red';
    }else if(password =confirmpassword) {
        confpasswork.style.border ='0.3em solid green';
    } 
}

foreal.addEventListener('input', () => {
    checkPasswords();
})

confirm.addEventListener('input', () => {
    checkPasswords();
})