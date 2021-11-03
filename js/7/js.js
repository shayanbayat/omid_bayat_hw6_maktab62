let form = document.createElement("form");
let container = document.createElement("fieldset");
let table = document.createElement("table");
let userName = document.createElement("input");
let error1 = document.createElement("p");
let table2 = document.createElement("table");
let title = document.createElement("legend");
let password = document.createElement("input");
let error2 = document.createElement("p");
let table3 = document.createElement("table");
let confirmPassword = document.createElement("input");
let error3 = document.createElement("p");
let button = document.createElement("button");

document.getElementsByTagName("body")[0].appendChild(form);
document.getElementsByTagName("body")[0].style.direction = "rtl";
document.getElementsByTagName("body")[0].style.backgroundColor = "white";
document.getElementsByTagName("body")[0].style.fontFamily = "vazir";

form.appendChild(container);
container.appendChild(table);
container.appendChild(userName);
container.appendChild(error1);
container.appendChild(table2);
container.appendChild(password);
container.appendChild(error2);
container.appendChild(table3);
container.appendChild(confirmPassword);
container.appendChild(error3);
container.appendChild(title);
container.appendChild(button);


function validateUserNameAndPass() {
    var pass
    var pass2
    if (userName.value.trim() === "") {
        error1.textContent = "الزامی";
        error1.style.color = "red";
        userName.style.borderColor = "red";
        button.type = "button";
    } else if (userName.value.length < 4) {
        error1.textContent = "نام کاربری حداقل 4 کاراکتر باشد";
        error1.style.color = "red";
        button.type = "button";
        userName.style.borderColor = "red";
    } else if (password.value.length < 8) {
        error2.textContent = "رمز عبور حداقل 8 کاراکتر و یک حرف و یک عدد باشد ";
        error2.style.color = "red";
        button.type = "button";
        password.style.borderColor = "red";
    } else if (password.value != confirmPassword.value) {
        error3.textContent =
            "متاسفانه رمز عبور شما با تکرار رمز عبور شما مطابقت ندارد";
        error3.style.color = "red";
        button.type = "button";
        confirmPassword.style.borderColor = "red";
    } else if (password.value.trim() === "") {
        error2.textContent = "رمز عبور حداقل 8 کاراکتر و یک حرف و یک عدد باشد ";
        error2.style.color = "red";
        button.type = "button";
        password.style.borderColor = "red";
    } else {
        if (password.value.match(pass) && password.value.match(pass2)) {
            button.type = "submit";
        } else {
            error2.textContent = "رمز عبور حداقل 8 کاراکتر و یک حرف و یک عدد باشد ";
            error2.style.color = "red";
            button.type = "button";
        }
    }
}

// str.match(/abc/ig) //Array(3) ["Abc","abc","abc"]

button.onclick = validateUserNameAndPass;

//######################## style #############################

title.textContent = "ثبت نام";
container.style.position = "fixed";
container.style.right = "40%";
container.style.top = "20%";
userName.type = "text";
password.type = "text";
confirmPassword.type = "password";
button.type = "submit";
button.style.float = "left";
button.textContent = "ثبت نام";

userName.placeholder = "نام کاربری حداقل 4 کاراکتر";
password.placeholder = "رمز عبور حداقل 8 کاراکتر";
table.textContent = "نام کاربری";
table2.textContent = "رمز عبور";
table3.textContent = "تایید رمز عبور";