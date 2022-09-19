function checkdangxuat() {
    var a = [];
    a[0] = document.getElementById("input1").value;
    a[1] = document.getElementById("input2").value;
                
    for(var j = 0; j < a.length; j++){
        if(a[j] === ""){
            alert("Chưa điền đầy đủ thông tin!!! Mời nhập lại");
            break;
        }
    }

    if(j === a.length){
        var user = JSON.parse(localStorage.getItem(a[1]));
        
        if(a[0] === user.name && a[1] === user.phone){
            localStorage.removeItem(user.phone);
            alert("Đăng xuất tài khoản thành công!!!");
        }
        else {
            alert("Nhập sai tên tài khoản hoặc số điện thoại!!!")
        }
    }
}
