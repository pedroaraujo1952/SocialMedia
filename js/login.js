function loginSubmit(ev) {
  try {
    ev.preventDefault();
    // elements[index]
    // elements["name"]
    const username = ev.target.elements[0].value;
    const pswd = ev.target.elements[1].value;

    var dbData = localStorage.getItem(username);

    let error = {};

    if (dbData) {
      dbData = JSON.parse(dbData);

      const USER = dbData.username;
      const PSWD = dbData.password;

      if (username === USER && pswd === PSWD) {
        window.location.href = "./pages/home.html";
        localStorage.setItem("token", username);
        return true;
      } else error = { code: "pswd", message: "Password is incorrect" };
    } else error = { code: "username", message: "Username not found" };

    throwError(error);
  } catch (e) {
    alert(e.message);
  }
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
