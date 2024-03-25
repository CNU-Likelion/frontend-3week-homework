const container = document.querySelector(".subDb");
container.style.display = 'none';

let inputName, inputAge, inputEmail; //input값들 전역변수로 설정
let isSubmitted = false; // 제출 여부를 나타내는 변수 전역함수로 설정

const submit = function () {
    inputName = document.querySelector("#name").value;
    inputAge = document.querySelector('#age').value;
    inputEmail = document.querySelector('#email').value;
    //제출 함수 안에서 유효성 검사만 수행
    let isValid = true;

    if(inputName === ""){
        document.getElementById('error__name').innerText ="이름이 올바르지 않습니다."
        isValid = false
    } else{
        document.getElementById('error__name').innerText =""
    };

    if(inputAge === ""){
        document.getElementById('error__age').innerText ="나이가 올바르지 않습니다."
        isValid = false
    } else{
        document.getElementById('error__age').innerText =""
    };

    if(!inputEmail.includes("@")){
        document.getElementById('error__email').innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById('error__email').innerText =""
    };

    //유효성 검사 통과 시, subName,subAge,subEmail에 할당.(사용자 정보 업데이트)
    //DOM 조작 코드 함수 내부에서(전역,지역 상관없이) 정상적으로 동작
    if (isValid) {
        document.getElementById('subName').innerText = inputName;
        document.getElementById('subAge').innerText = inputAge;
        document.getElementById('subEmail').innerText = inputEmail;

        isSubmitted = true; // 제출 여부 업데이트
    }

    // return isValid; //유효성 검사 결과 반환
};

const view = function(){
    if(isSubmitted) { // 제출된 경우에만 보기 동작 수행
        // 보기 버튼을 누르면 보이거나 숨기도록 토글
        if(container.style.display === 'none'){
            container.style.display ='flex';
            container.style.flexDirection='column';
        } else {
            container.style.display = 'none';
        }
    }
};