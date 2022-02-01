const reg = document.querySelector("#tabreg")
const formReg = document.querySelector("#reg")
const sign = document.querySelector("#tabsign")
const formSign = document.querySelector("#sign")

//переключение на tabform registration/sign in
reg.addEventListener("click", () => {
    if(formReg.style.display ="none"){
        formReg.style.display ="block"
        formSign.style.display ="none"
    } 
})
sign.addEventListener("click", () => {
    if(formSign.style.display ="none"){
        formSign.style.display ="block"
        formReg.style.dicplay ="none"
    }
 });

//функция для проверки ввода пароля и сохранения в localstorage
function store(){

    let name = document.getElementById('name');
    let pw = document.getElementById('pw');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');
        
    }else if(pw.value.length == 0){
        alert('Please fill in password');
        
    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');
        
    }else if(pw.value.length > 8){
        alert('Max of 8');
        
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');
        
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');
        
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
        
    }else{
        //если все правильно введено - сохраняем в localstorage
        let secname = name.value;
        let secpw = pw.value;
        let secuser = user.value;
        //собираем все данные в object
        myObj ={
            name: secname,
            pw: secpw,
            user: secuser
        }
        //сохраняем в Localstorage в формате JSON
        localStorage.setItem('myObj', JSON.stringify(myObj))
        window.open('/animation.html');
    }
}

//sign in
function check(){
    //получаем из localstorage
    let storedObj = localStorage.getItem('myObj');
    let result = JSON.parse(storedObj);//парсим localStorage

    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");
    //сравниваем введенные логин/пароль с логин/пароль из local storage
    if(userName.value == result.name && userPw.value == result.pw){
        //alert('You are logged in.');
        window.open('/animation.html');
    }else{
        alert('Error on login');
    }
}

//показать / скрыть пароль на вкладке - регистрации
function show_hide_password(target){
	let input = document.getElementById('pw');
    let view = document.querySelector('.fa-eye')
    let noview =document.querySelector('.fa-eye-slash')
	if (input.getAttribute('type') === 'password') {
		view.style.display = 'none';
        noview.style.display = 'inline-block';
		input.setAttribute('type', 'text');
	} else {
		view.style.display = 'inline-block';
        noview.style.display = 'none';
		input.setAttribute('type', 'password');
	}
	return false;
}
//показать / скрыть пароль на вкладке - вход
function show_hide_password_sign(target){
	let input = document.getElementById('userPw');
    let view2 = document.querySelector('.fa-eye')
    let noview2 =document.querySelector('.fa-eye-slash')
	if (input.getAttribute('type') === 'password') {
		view2.style.display = 'none';
        noview2.style.display = 'inline-block';
		input.setAttribute('type', 'text');
	} else {
		view2.style.display = 'inline-block';
        noview2.style.display = 'none';
		input.setAttribute('type', 'password');
	}
	return false;
}

