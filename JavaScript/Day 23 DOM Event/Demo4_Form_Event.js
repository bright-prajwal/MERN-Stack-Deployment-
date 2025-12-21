let from = document.querySelector("form");

from.addEventListener("submit", function (event) {
  event.preventDefault(); // remove the defult path
  //   let user = this.elements[0];  // document.querySelector(.....)
  //   let pass = document.querySelector("#password");

  //   console.log(user.value);
  //   console.log(password.value);

  //   alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

let user = document.querySelector("#user");
user.addEventListener("change", function () {
  console.log("input changed");
  console.log("final value =", this.value);
});


user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value =", this.value);
});
