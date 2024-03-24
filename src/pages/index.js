const btn1 = document.querySelector('.button__submit');
const btn2 = document.querySelector('.button_check');
let name='';
let age='';
let email='';



btn1.addEventListener('click',function(){
    name = document.querySelector('.information__name__input').value;
    age = document.querySelector('.information__age__input').value;
    email = document.querySelector('.information__email__input').value;  
});

btn2.addEventListener('click',function(){
    document.querySelector('.title').innerHTML="<h1>사용자 정보";
    document.getElementById('output').innerHTML=`
    <p>이름: ${name}</p>
    <p>나이: ${age}</p>
    <p>이메일: ${email}</p>`;
    
});