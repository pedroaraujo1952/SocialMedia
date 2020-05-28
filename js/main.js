const goToLogin = (ev) => {
  ev.preventDefault();

  var loginField = document.getElementById("loginField");
  loginField.focus();
};

function goToRegister() {
  window.location.href = "./pages/register.html";
}
