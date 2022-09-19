function dodulieu(){
    var input = localStorage.getItem("tukhoa");
    
    var filter, subcontainer, sanpham, p, i, txtValue;

    filter = input.toUpperCase();

    sanpham = document.getElementsByClassName("sanpham2");

    let check = 0;

    for (i = 0; i < sanpham.length; i++) {

        p = sanpham[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            check = 1;
            sanpham[i].style.display = "inline-block";
        } else {
            sanpham[i].style.display = "none";
        }
    }

    if(check === 0 ){
        document.getElementById("innerText").innerText = "Không có sản phẩm nào được tìm thấy!!!";
    }

}