function checkgen(rollnum){
    if(document.getElementById("clstr").value <= 1){
      document.getElementById("rollno").textContent = "Invalid entry. Please type a valid maximum number";
    }
    else if(rollnum == 'The number: "NaN" is picked!'){
      document.getElementById("rollno").textContent = "Invalid entry. Please type a valid maximum number";
    }
    else {
      document.getElementById("rollno").textContent = rollnum;
    }
  }    

function generate(){
    let clstr = document.getElementById("clstr").value;
    let roll  = Math.floor((Math.random() * clstr) + 1)
    let rollstr = 'The number: "' + roll + '" is picked!';
    checkgen(rollstr);   
}

function copy() {
  var y = document.getElementById("rollno");
  let ytxt = y.textContent
  if (ytxt == "Invalid entry. Please type a valid maximum number"){
    document.getElementById("snackbar").textContent = 'Invalid entry'
  }
  else if (ytxt == ""){
    document.getElementById("snackbar").textContent = 'No number to be copied'
  }
  else{
    navigator.clipboard.writeText(y.textContent);
    document.getElementById("snackbar").textContent = 'Copied!'
  }

  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2800);
}
