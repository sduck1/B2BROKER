if (document.querySelector('#checkPass')){
    document.querySelector('#checkPass').onclick = togglePass;
}


function togglePass() {
    var x = document.getElementById("input-pass");
    if (x.type === "password") {
        x.type = "text";
        console.log(document.querySelector('.label-check'));
        document.querySelector('.label-check').innerHTML = '<i class="fas fa-eye"></i>';
    } else {
        x.type = "password";
        document.querySelector('.label-check').innerHTML = '<i class="far fa-eye-slash"></i>';
    }
}