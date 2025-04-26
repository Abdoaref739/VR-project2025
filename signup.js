let eyeImage = document.getElementById("eye");
let slashedEyeImage = document.getElementById("slash-eye");
let password = document.querySelector(".password-field");
let eyeImage2 = document.getElementById("eye2");
let slashedEyeImage2 = document.getElementById("slash-eye2");
let password2 = document.querySelector(".confirm-password-field");
let username_field = document.querySelector(".username-field");
let email_field = document.querySelector(".email-field");
let password_field = document.querySelector(".password-field");
let confirm_password_field = document.querySelector(".confirm-password-field");
let login_button = document.getElementById("login-btn");
let userDataDisplay = document.getElementById("user-data-display");
eyeImage.addEventListener("click", function(){
    password.setAttribute('type', 'text');
    eyeImage.style.display = "none";
    slashedEyeImage.style.display = "block";
}
    )

        slashedEyeImage.addEventListener("click", function(){
            password.setAttribute('type', 'password');
            eyeImage.style.display = "block";
            slashedEyeImage.style.display = "none";
        })
        
        eyeImage2.addEventListener("click", function(){
            password2.setAttribute('type', 'text');
            eyeImage2.style.display = "none";
            slashedEyeImage2.style.display = "block";
        }
            )
        
                slashedEyeImage2.addEventListener("click", function(){
                    password2.setAttribute('type', 'password');
                    eyeImage2.style.display = "block";
                    slashedEyeImage2.style.display = "none";
                })
                // data saving function 
                function getData(){
                if(username_field.value != ""  && email_field .value != "" &&  password_field.value != "" && confirm_password_field.value != ""){
                    console.log("clicked")   
                    const userData = {
                        "username": username_field.value,
                        "email": email_field.value,
                        "passwordtext": password_field.value,
                    }
                    let username_value =  localStorage.setItem("username", userData.username);
                    let email_value =  localStorage.setItem("email", userData.email);
                    let password_value =  localStorage.setItem("password", userData.passwordtext);
                    let confirm_password = localStorage.setItem("password-confirm", confirm_password_field.value);
                    askAlert = window.confirm(`اهلا, ${userData.username}! هل تريد بدأ رحلتك`);
                    username_field.value = "";
                    email_field.value = "";
                    password_field.value = "";
                    confirm_password_field.value = "";
                    if(askAlert === true && password_value == confirm_password){
                        window.location.href = "./login.html";
                        }
                    }else if(username_field.value == ""  || email_field .value == "" ||  password_field.value == "" || confirm_password_field.value == ""){
                    window.alert("please fill all the form!");
                }else if(askAlert === true && password_value != confirm_password){
                        window.alert("somthing wrong!")
                    }
            }