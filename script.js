document.querySelector('.Claim').addEventListener('click',function(events){
    events.preventDefault();


//fetch the input from the html by creating a const

const first_Name= document.querySelector('.firstName');
const last_Name = document.querySelector('.lastName');
const emailAddress= document.querySelector('.e-address');
const pass_word = document.querySelector('.passcode');


//clearing old errors and rechecking again
document.querySelectorAll('.error').forEach(element=>element.remove());
document.querySelectorAll('.inputError').forEach(putter=>putter.classList.remove('inputError'))

//create a function that will show the error message
//pass two parameters. one will contain the message and the  UserInfo will have our earlier const part to it individually
// create a p tag that will contain the message and give it a class name.


function showError(UserInfo, message){

    UserInfo.classList.add('inputError');


    let errorMessage = document.createElement('p');
    errorMessage.className= "error";
    errorMessage.textContent= message;
    UserInfo.insertAdjacentElement('afterend',errorMessage);
}
let hasErrors = false;

if(first_Name.value.trim() ===''){
    showError(first_Name, 'First name cannot be empty')
    hasErrors = true;
}
if(last_Name.value.trim() ===''){
    showError(last_Name,'Last Name cannot be empty')
    hasErrors = true;
}

if (pass_word.value.trim() === ''){
    showError(pass_word,'Password cannot be empty');
    hasErrors = true;
}
 if (!isValidEmail(emailAddress.value)){
   showError(emailAddress,'Looks like this is not an email')
   hasErrors = true;
 }



function isValidEmail(emailAddress) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailAddress.trim());
}

if(!hasErrors){
    const payload = {
        firstname: first_Name.value,
        lastname: last_Name.value,
        password: pass_word.value,
        email: emailAddress.value
    };
    
    console.log(payload);
    
    fetch('https://nonmitigatory-jaxon-martyrly.ngrok-free.dev/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
})


























// const Usersform = document.getElementsById('UserForm');
 
// Usersform.addEventListener('submit', (e)=>{

//     e.preventDefault();

//  const Inputs = Usersform.querySelectorAll('input');
//   let allFilled=true;

//  Inputs.forEach((input)=>{
//     if(input.value.trim()=== ''){
//         allFilled=false;
//         input.style.border= "2px solid red";

//     }else{
//         input.style.border="2px solid greem"
//     }

//  }

//(a variable that stores one input is called input inside the input.forEach))