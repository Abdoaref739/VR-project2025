
let eyeImage = document.getElementById("eye");
let slashedEyeImage = document.getElementById("slash-eye");
let password = document.querySelector(".password-field");
let username_field = document.querySelector(".username-field");
let password_field = document.querySelector(".password-field");
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
                function checkData(){
                if(username_field.value != ""  &&  password_field.value != ""){
                    console.log("clicked")   
                    const userData = {
                        "username": username_field.value,
                        "passwordtext": password_field.value,
                    }
                    let username_value =  localStorage.getItem("username");
                    let password_value =  localStorage.getItem("password");
                    if(username_value == username_field.value && password_value == password_field.value){
                        window.location.href = "./index.html";
                    }
                    else if(password_value != username_field.value){
                        console.log("hello")
                    }
                    username_field.value = "";
                    password_field.value = "";
                }else if(username_field.value == ""  ||  password_field.value == ""){
                    window.alert("please fill all the form!");
                }
                
            }