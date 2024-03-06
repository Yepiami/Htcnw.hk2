function KiemTraTenDN(){
    var re= /^[a-z]\w*/;
    if (re.test(document.getElementById('txtDN').value.trim())==false) 
    {
        tendn.innerText = "*bat buoc, bat dau bang ky tu";
        return false;     
    } else {
        tendn.innerText="*";
        return true;   
    }
}
function KiemTraPassWord(){
    var re= /(?=.*\d).{6,}/;
    if (re.test(document.getElementById('txtMK').value.trim())==false) 
    {
        mk.innerText = "*Phai co chu,so, it nhat 6 ki tu";
        return false;     
    } else {
        tendn.innerText="*";
        return true;   
    }
}
function KiemTraXacNhanPassWord(){
    if (document.getElementById('txtXNMK').value != document.getElementById('txtMK').value){
        xnmk.innerText="*phai giong o mat khau";
        return false;
    } else {
        xnmk.innerText="*";
        return true;   
    }
}
function KiemTraNgaySinh(){
    var ns= Date(document.getElementById('txtNS'.value));
    var today= new Date();
    if (eval(today.getFullYear()- ns.getFullYear())<=10){
        KiemTraNgaySinh.innerText = "tuoi phai lon hon 10";
        return true;
    } 
}
function SubmitForm (){
    if(KiemTraTenDN() == false || KiemTraPassWord() == false||KiemTraXacNhanPassWord() ==false){
        alert('Ban chua nhap day du thong tin!');
        return false;
    }
    return true;
}