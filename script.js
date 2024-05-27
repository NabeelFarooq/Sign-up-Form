// input elements
const firstname = document.querySelector('#f-name');
const lastname = document.querySelector('#l_name');
const email = document.querySelector('#email');
const tel = document.querySelector('#contact');
const pw = document.querySelector('#pwd');
const pwC = document.querySelector('#cnf-pwd');
//errors
const pwError = document.querySelector('#password-error');
const pwCError = document.querySelector('#passwordC-error');
const firstnameError = document.querySelector('#first-name-error');
const lastnameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const telError = document.querySelector('#tel-error');

firstname.addEventListener("input",()=>{
    if (firstname.value === '') {
      firstnameError.textContent = 'Please type in your first name.';
    } else {
      firstnameError.textContent = '';
    }
  }); 

  lastname.addEventListener("input",()=>{
    if (lastname.value === '') {
      lastnameError.textContent = 'Please type in your last name';
    } else {
      lastnameError.textContent = '';
    }
  }); 

  email.addEventListener("input",()=>{
    if (email.validity.typeMismatch) {
      emailError.textContent = 'Please enter in a valid Email. ex(johnSmith@email.com)';
    } else {
      emailError.textContent = '';
    }
  }); 

  tel.addEventListener("input",()=>{
    if (tel.validity.patternMismatch) {
      telError.textContent = 'Please enter in a 10 digit phone number';
    } else {
      telError.textContent = '';
    }     
  }); 

  pw.addEventListener("input",()=>{
    if (pw.validity.patternMismatch){
      const currentValue = pw.value;
      const regExpCap = /[A-Z]/g;
      const regExpDig = /[0-9]/g;
      let result = '';
      if (regExpCap.test(currentValue)){
        result += '';
      } else {
        result += `Missing at least 1 capital letter. `;
        result += '\n';
      }
      
      
      if (regExpDig.test(currentValue)){
        result += '';
      } else {
        result += 'Missing at least 1 number. ';
        result += '\n';
      }
      
      if (currentValue.length < 9){
        result += 'Password must be at least 8 characters. '
        result += '\n';
      } else {
        result += '';
      }

      console.log(result);
      pwError.textContent = result;


    } else {
      pwError.textContent = '';
    }
  });

  pwC.addEventListener("input",()=>{
    if (pwC.value !== pw.value) {
      pwCError.textContent = 'Passwords do not match';
    } else {
      pwCError.textContent = '';
    }
  }); 