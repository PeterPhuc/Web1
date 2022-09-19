function checkdangky() {
    var arr = [];
    arr[0] = document.getElementById("input1").value;
    arr[1] = document.getElementById("input2").value;
    arr[2] = document.getElementById("input3").value;
    arr[3] = document.getElementById("input4").value;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] === ""){
            alert("Chưa điền đầy đủ thông tin!!! Mời nhập lại");
            break;
        }
    }

    if(i === arr.length){
        alert("Tạo tài khoản thành công!!!");
        var user = {
            name: arr[0],
            phone: arr[1],
            mail: arr[2],
            pass: arr[3],
        };
        var key = user.phone;
        localStorage.setItem(key, JSON.stringify(user) );
    }
}