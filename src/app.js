class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getName() {
    return `이름: ${this.name}`;
  }

  getAge() {
    return `나이: ${this.age}`;
  }

  getEmail() {
    return `이메일: ${this.email}`;
  }
}

$(document).ready(() => {
  $("#submit").on("click", (e) => {
    const name = $("#name").val();
    const age = $("#age").val();
    const email = $("#email").val();

    const user = new User(name, age, email);

    $("#user_name").text(user.getName());
    $("#user_age").text(user.getAge());
    $("#user_email").text(user.getEmail());
  });

  $("#view").on("click", (e) => {
    $("#user_info").show();
  });
});