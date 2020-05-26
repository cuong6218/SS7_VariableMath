function show(a){
    document.getElementById("textbox").value += a;
}
function equal(){
    document.getElementById("textbox").value = eval (document.getElementById("textbox").value);
}
function clearScreen(){
    document.getElementById("textbox").value = null;    
}
function clearEach(){
    document.getElementById("textbox").value = document.getElementById("textbox").value - a;
}
