function toggle(elementId, btnId) {
    var x = document.getElementById(elementId);
    var btn = document.getElementById(btnId)
    if (x.style.display === "none") {
      x.style.display = "block";
      btn.innerHTML = "<imp><sm>CLICK TO HIDE</imp></sm>";
    } else {
      x.style.display = "none";
      btn.innerHTML = "<imp><sm>CLICK TO SHOW</imp></sm>";
    }
  }