var file = null;

function logoutApp() {
  localStorage.removeItem("token");
  window.location.href = "../index.html";
}

function postAny(ev) {
  var username = localStorage.getItem("token");
  var post = ev.target.elements["post"].value;
  var img = file;
  if (post || img !== null) {
    var postArray = getPostArray();
    if (postArray.length > 0) postArray = postArray.split(",");

    let data = {
      user: username,
      message: post,
      img: img,
    };

    postArray.push(JSON.stringify(data));

    localStorage.setItem("posts", postArray);
  } else ev.preventDefault();
}

function getPostArray() {
  var array = localStorage.getItem("posts");

  return array ? array : [];
}

const setFile = (img) => {
  file = img;
};

function generatePost(name, post, file) {
  var divPost = document.createElement("div");
  divPost.classList.add("post", "created");

  var avatar = document.createElement("IMG");
  avatar.setAttribute("src", "../assets/avatar.png");
  avatar.classList.add("avatar");

  var nameP = document.createElement("p");
  nameP.innerHTML = name;

  var titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.appendChild(avatar);
  titleDiv.appendChild(nameP);

  divPost.appendChild(titleDiv);

  if (file !== null) {
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");

    var img = document.createElement("IMG");
    img.setAttribute("src", file);
    img.classList.add("imgMessage");
    imgDiv.appendChild(img);

    divPost.appendChild(imgDiv);
  }

  var postP = document.createElement("p");
  postP.innerHTML = post;
  postP.classList.add("message");
  divPost.appendChild(postP);

  var section = document.getElementById("postSection");
  section.appendChild(divPost);
}
