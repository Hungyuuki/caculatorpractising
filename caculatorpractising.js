//Khai báo tên 2 biến như bên dưới//
let result; //biến này để tính kết quả sau đó hiện ra màn hình//
let bieuThuc = ''; //bieuThuc khoảng trắng để thêm các chuỗi phía sau//

//Gán biểu thức là một chuỗi muốn thêm vào đằng sau//
function themVaoBieuThuc(chuoiMuonThem){
    bieuThuc += chuoiMuonThem;
    document.getElementById("result").innerText=bieuThuc;}

//Bấm các phím//
function runOpe(){
    themVaoBieuThuc("(");
}
function runClo(){
    themVaoBieuThuc(")");
}
function runPer(){
    themVaoBieuThuc("%");
}
function runAC(){
    themVaoBieuThuc("AC");
}
function runSev(){
    themVaoBieuThuc("7");
}
function runEig(){
    themVaoBieuThuc("8");
}
function runNin(){
    themVaoBieuThuc("9");
}
function runFou(){
    themVaoBieuThuc("4");
}
function runFiv(){
    themVaoBieuThuc("5");
}
function runSix(){
    themVaoBieuThuc("6");
}
function runOne(){
    themVaoBieuThuc("1");
}
function runTwo(){
    themVaoBieuThuc("2");
}
function runThr(){
    themVaoBieuThuc("3");
}
function runZer(){
    themVaoBieuThuc("0");
}
function runPlu(){
    themVaoBieuThuc("+");
}
function runMin(){
    themVaoBieuThuc("-");
}
function runMul(){
    themVaoBieuThuc("*");
}
function runDiv(){
    themVaoBieuThuc("/");
}
function runDot(){
    themVaoBieuThuc(".");
}


//Tạo ra một function mới để khi bấm
// dấu bằng thì máy tính sẽ xử lý
// biểu thức dạng chuỗi trên màn hình
// thành dạng số//
function runEqu(){
    xuLyBieuThuc();
    bieuThuc="";  //tạo biểu thức mới bằng trống//
}
//chức năng biến dạng chuỗi thành dạng số thông qua hàm eval//
function xuLyBieuThuc(){
    result= eval(bieuThuc);
    document.getElementById("result").innerText=result;
}

