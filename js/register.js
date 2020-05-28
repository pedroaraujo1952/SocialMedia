function registerSubmit(ev) {
  ev.preventDefault();
  const username = ev.target.elements[0].value;
  const pswd = ev.target.elements[1].value;

  let error = {};

  if (localStorage.getItem(username)) {
    error = { code: "username", message: "This name has already been taken" };
    throwError(error);
    return false;
  }

  if (pswd.length < 6) {
    error = { code: "pswd", message: "Minimal number of characters: 6" };
    throwError(error);
    return false;
  }

  let data = {
    username: username,
    password: pswd,
  };
  // var data = [username, pswd];
  localStorage.setItem(username, JSON.stringify(data));
  window.location.href = "../index.html";
}

const throwError = (error) => {
  var loginfield = document.getElementById("erroUsername");
  var pswdfield = document.getElementById("erroPswd");

  var errorText = document.createTextNode(error.message);

  if (error.code === "username") {
    loginfield.appendChild(errorText);
    pswdfield.innerHTML = "";
  } else if (error.code === "pswd") {
    loginfield.innerHTML = "";
    pswdfield.appendChild(errorText);
  }
};
