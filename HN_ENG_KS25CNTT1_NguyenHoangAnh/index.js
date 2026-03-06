let users = [] 

function register() {
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let rePasswordInput = document.getElementById("rePassword");
    
    for (let index = 0; index < users.length; index++) {
        if (users[index].email === emailInput.value) {
            alert("Email đã được sử dụng.");
            return;
        }
    }

    if (emailInput.value === "" || passwordInput.value === "" || rePasswordInput.value === "") {
        alert("Không được để trống.");
        return;
    }

    if (passwordInput.value.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự.");
        return;
    }

    if (passwordInput.value !== rePasswordInput.value) {
        alert("Mật khẩu không khớp.");
        return;
    }

    let user = { 
        email: emailInput.value, 
        password: passwordInput.value,
        rePassword: rePasswordInput.value,
    };

    users.push(user);
    alert("Đăng ký thành công!");
    console.log(users);

    emailInput.value = "";
    passwordInput.value = "";
    rePasswordInput.value = "";

}