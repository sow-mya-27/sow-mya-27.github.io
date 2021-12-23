let data = [];
var i = 1;
var x;
window.onload = () => {
  fetch("/gallery.json").then(async (response) => {
    data = await response.json();
    data.forEach((object) => {
      var img = new Image();
      img.src = object.image1;
      var id1 = (i++).toString();
      img.setAttribute("name", "cute1");
      img.setAttribute("alt", "sorry");
      img.setAttribute("id", id1);
      img.setAttribute("onClick", "onClickImage(event.target.id)");
      document.getElementById("container").appendChild(img);
    });
  });
};

function addImage(e) {
  e.preventDefault();
  if (validateImage()) {
    let name1 = document.forms["form"]["name"].value;
    let url = document.forms["form"]["url"].value;
    var id1 = (i++).toString();
    var description1 = document.forms["form"]["description"].value;
    var date = document.forms["form"]["date"].value;
    data.push({
      id: id1,
      image1: url,
      name: name1,
      description: description1,
      upload: date,
    });
    console.log(date);
    var img = new Image();
    img.src = url;
    img.setAttribute("class", name1);
    img.setAttribute("alt", "sorry");
    img.setAttribute("id", id1);
    img.setAttribute("onClick", "onClickImage(event.target.id)");
    console.log(img);
    document.getElementById("container").appendChild(img);

    document.getElementById("modal").className = "modal-close";
  }
}

function showModal() {
  document.getElementById("modal").className = "modal-open";
}

function closeModal(e) {
  e.preventDefault();
  document.getElementById("modal").className = "modal-close";
}

function onClickImage(id) {
  console.log(document.getElementById("on").id);
  if (document.getElementById("on").id == "on") {
    var img = document.getElementById(id);
    img.parentNode.removeChild(img);
    document.getElementById("on").id = "off";
  }
}

function deleteImage() {
  document.getElementById("off").id = "on";
  console.log(document.getElementById("on").id);
}

function validateImage() {
  var name = document.getElementById("name").value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  var url = document.getElementById("url").value;
  var res = url.match(
    "/(http(s)?://.)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g"
  );
  if (res != null) {
    alert("enter valid url");
    return false;
  }
  if (url == "") {
    alert("url can't be empty");
    return false;
  }
  var description = document.getElementById("description").value;
  if (description == "") {
    alert("description can't be empty");
    return false;
  }
  return true;
}
