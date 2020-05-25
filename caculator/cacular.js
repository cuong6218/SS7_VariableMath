function add(){
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = parseInt(a);
    let d = parseInt(b);
    let tong = c+d;
    document.write('Tổng hai số là:'+tong);
}
function sub(){
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = parseInt(a);
    let d = parseInt(b);
    let hieu = c-d;
    document.write('Hiệu hai số là:'+hieu);
}
function multi(){
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = parseInt(a);
    let d = parseInt(b);
    let tich = c*d;
    document.write('Tích hai số là:'+tich);
}
function div(){
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = parseInt(a);
    let d = parseInt(b);
    let chia = c/d;
    document.write('Kết quả phép chia hai số là:'+chia);
}