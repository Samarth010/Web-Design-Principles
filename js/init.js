function increaseFontSizeBy100px() {
        document.getElementById('a').style.fontSize = "20px";
      }

function decreaseFontSizeBy100px() {
        document.getElementById('a').style.fontSize = "2px";
      }

function largeFontSize() {
        document.getElementById('a').style.fontSize = "100px";
      }

function visible(){
  document.getElementById('shown').style.visibility="Collapse";
    document.getElementById('hidden').style.visibility="Visible";
}

function normal(){
  document.getElementById('shown').style.visibility="Visible";
    document.getElementById('hidden').style.visibility="Collapse";
}

function omit(){
  document.getElementById('s').style.visibility="Collapse";
    document.getElementById('o').style.visibility="Visible";
}

function notomit(){
  document.getElementById('o').style.visibility="Collapse";
    document.getElementById('s').style.visibility="Visible";
}
