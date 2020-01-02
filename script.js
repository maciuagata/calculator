function myFunction() {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var x = Number(y) + Number(z);
  document.getElementById("demo").innerHTML = x;
}