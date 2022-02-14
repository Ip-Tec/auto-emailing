import { Axios } from "@axios";

async function posting() {
  await Axios.post("http://google.com")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
}
document.getElementById("form").addEventListener("submit", (params) => {
  params.preventDefault();
});

// myEmail=
// myEmail=
// mypassword=
// emailSubject=

/* function GEEKFORGEEKS() {
  var name = document.forms["RegForm"]["Name"];
  var email = document.forms["RegForm"]["EMail"];
  var phone = document.forms["RegForm"]["Telephone"];
  var what = document.forms["RegForm"]["Subject"];
  var password = document.forms["RegForm"]["Password"];
  var address = document.forms["RegForm"]["Address"];

  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (address.value == "") {
    window.alert("Please enter your address.");
    address.focus();
    return false;
  }

  if (email.value == "") {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (phone.value == "") {
    window.alert("Please enter your telephone number.");
    phone.focus();
    return false;
  }

  if (password.value == "") {
    window.alert("Please enter your password");
    password.focus();
    return false;
  }

  if (what.selectedIndex < 1) {
    alert("Please enter your course.");
    what.focus();
    return false;
  }

  return true;
} */

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let form = id("form"),
  myEmail = id("myEmail"),
  mypassword = id("mypassword"),
  receiverEmail = id("receiverEmail"),
  emailSubject = id("emailSubject"),
  SMTPPort = id("SMTPPort"),
  EmailOption = id("EmailOption"),
  encryption = id("encryption"),
  EmailBody = id("EmailBody"),
  btn = id("btn"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(receiverEmail, 0, "Receiver email cannot be blank");
  engine(myEmail, 1, "Email cannot be blank");
  engine(mypassword, 2, "Password cannot be blank");
  engine(EmailBody, 2, "Email body cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
