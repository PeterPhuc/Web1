function checkdangnhap() {
    var a = [];
    a[0] = document.getElementById("input-info1").value;
    a[1] = document.getElementById("input-info2").value;
    a[2] = document.getElementById("input-info3").value;  
                
    for(var j = 0; j < a.length; j++){
        if(a[j] === ""){
            alert("Chưa điền đầy đủ thông tin!!! Mời nhập lại");
            break;
        }
    }

    if(j === a.length){
        var user = JSON.parse(localStorage.getItem(a[2]));

        if(a[0] === user.name && a[1] === user.pass){
            alert("Đăng nhập thành công!!!");
        }
        else {
            alert("Nhập sai tên đăng nhập hoặc mật khẩu!!!");
        }
    }
}

