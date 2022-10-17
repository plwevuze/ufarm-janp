// const form = document.querySelector('form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submit = document.querySelector('#submit')
const firstName = document.querySelector('#first-name')
const telephone = document.querySelector('#phone-number')
// min and max char values
const min = 3
const max = 25

// prevent form refresh
// function handleForm(event) { event.preventDefault();}
// form.addEventListener('submit', handleForm)

// checking user name
const checkUserName = () => {
    let u_name = userName.value.trim()
    // regex for alphanumeric values
    let alphanum = /^[0-9a-zA-Z]+$/

    // check if empty and if matchecs regex
    if (u_name.match(alphanum) && u_name != "") {
        firstName.focus()
        return true
    } else {
        alert('Please enter your user name using letters and numbers only')
        userName.style.border = '2px solid red'
    }

    // check if too short or too long
    if (u_name.length <= min || u_name.length >= max ) {
        alert('Your user name is too short or too long')
        userName.style.border = '2px solid red'
    }
}

// check first name
const checkFirstName = () => {
    let f_name = firstName.value
    // regex for small and full caps letters
    let alphabet = /^[A-Za-z]+$/

    // check if empty and if matchecs regex
    if (f_name.match(alphabet) && f_name != "") {
        telephone.focus()
        return true
    } else {
        alert('Please enter your first name using letters of the alphabet only')
        firstName.style.border = '2px solid red'
    }
}

// check phone number
const checkTelephone = () => {
    let p_number = telephone.value
    // regex for numbers
    let numbers = /^[0-9]+$/

    // check if empty and if matches regex
    if (p_number.match(numbers) && p_number != "") {
        email.focus()
        return true
    } else {
        alert('Please enter your phone number using numbers only')
        telephone.style.border = '2px solid red'
    }
}

// check email
const checkEmail = () => {
    let e_mail = email.value
    // regex for email
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // check if emtpy and if matches regex
    if(e_mail.match(emailRegex) && e_mail != "") {
        password.focus()
        return true
    } else {
        alert('Please enter your email and follow the proper email format')
        email.style.border = '2px solid red'
    }
}

// checking password
const checkPassword = () => {
    let p_word = password.value
    // let c_password = confirmPassword.value
    
    // check if input is empty
    if (p_word == "") {
        alert('Please input your password')
        password.style.border = '2px solid red'
    }
}

// confirming password
const checkConfirmPassword = () => {
    let c_password = confirmPassword.value
    let p_word = password.value

    // check if input is empty
    if (c_password == "") {
        alert('Please input your password')
        confirmPassword.style.border = '2px solid red'
    }
    // check if emails dont match
    if (c_password != p_word) {
        alert('Your passwords does not match, try again please')
        password.style.border = '2px solid red'
        confirmPassword.style.border = '2px solid red'
    }
}
const validateAll = () => { 
         checkUserName(),
        checkFirstName(),
        checkTelephone(),
        checkPassword();
}