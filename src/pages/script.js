let userInfo = {};
let isDisplayed = false;

function submitInfo() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    userInfo[name] = { age, email };

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';

    alert('정보가 저장되었습니다.');
}

function viewInfo() {
    const userInfoDisplay = document.getElementById('userInfoDisplay');
    if (!isDisplayed) {
        let displayContent = '';
        for (const [name, {age, email}] of Object.entries(userInfo)) {
            displayContent += `<h2>사용자 정보</h2>
                                이름: ${name}<br>
                                나이: ${age}<br>
                                이메일: ${email}<br><br>`;
        }
        userInfoDisplay.innerHTML = displayContent;
        isDisplayed = true;
    } else {
        userInfoDisplay.innerHTML = '';
        isDisplayed = false;
    }
}
