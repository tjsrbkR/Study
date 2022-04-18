const $BtnOption = document.getElementById("BtnOption");
$BtnOption.addEventListener("click",Change);
function Change(){
    alert("123");
    $BtnOption.setAttribute("href","https://www.google.com/");
}