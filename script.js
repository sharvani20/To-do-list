const task = document.getElementById("task");
const text = document.getElementById("text");

function addtask() {
  val = text.value.trim();
  if (val == "") {
    alert("please enter the task");
    return;
  }
  text.value = "";
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = val;
  li.appendChild(span);
  let btncontainer = document.createElement("div");
  btncontainer.style.display = "flex";
  btncontainer.style.alignContent = "center";
  btncontainer.style.gap = "5px";
  let btn = document.createElement("button");
  btn.innerHTML = "Edit";
  btn.style.backgroundColor = "lightgray";
  btn.style.color = "white";
  btn.style.padding = "5px";
  btn.style.border = "none";
  const rmvbtn = document.createElement("button");
  rmvbtn.innerHTML = "remove";
  rmvbtn.style.backgroundColor = "yellow";
  rmvbtn.style.color = "red";
  rmvbtn.style.padding = "5px";
  rmvbtn.style.border = "none";
  btncontainer.appendChild(btn);
  btncontainer.appendChild(rmvbtn);
  li.appendChild(btncontainer);
  task.appendChild(li);
  rmvbtn.addEventListener("click", function () {
    task.removeChild(li);
  });
  btn.addEventListener("click", function () {
    span.contentEditable = "true";
    span.focus();
    const savebtn = document.createElement("button");
    savebtn.innerHTML = "save";
    btncontainer.appendChild(savebtn);
    savebtn.addEventListener("click", function () {
      span.contentEditable = "false";
      btncontainer.removeChild(savebtn);
    });
  });
}
