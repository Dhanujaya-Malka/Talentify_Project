
//  switcher
 // loging page

function switchForm(formType) {
            const wrapper = document.getElementById('formWrapper');
            const loginSec = document.getElementById('loginSection');
            const regSec = document.getElementById('registerSection');
            const loginTab = document.getElementById('loginTab');
            const regTab = document.getElementById('registerTab');

            if (formType === 'register') {
                wrapper.classList.add('register-mode');
                loginSec.style.display = 'none';
                regSec.style.display = 'block';
                regTab.classList.add('active');
                loginTab.classList.remove('active');
            } else {
                wrapper.classList.remove('register-mode');
                loginSec.style.display = 'block';
                regSec.style.display = 'none';
                loginTab.classList.add('active');
                regTab.classList.remove('active');
            }
        }

// Password visibility 
function togglePass(inputId, icon) {
    const $inputField = $('#' + inputId);
    const $icon = $(icon); // $() Query object

    if ($inputField.attr('type') === "password") {
        $inputField.attr('type', "text");
        $icon.removeClass('fa-eye-slash').addClass('fa-eye');
    } else {
        $inputField.attr('type', "password");
        $icon.removeClass('fa-eye').addClass('fa-eye-slash');
    }
}