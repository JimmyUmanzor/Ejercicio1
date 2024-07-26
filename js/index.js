function calcular (){
    
    let strA = document.getElementById("valorA").value
    let strB = document.getElementById("valorB").value
    
    if (strA===""){
        warning("Valor A en blanco")   
    } else if (strB==="") {
        warning("Valor B en blanco")
    } else {
    let a = parseInt(strA)
    let b = parseInt(strB)
    
    let area=(a*b)
    
    document.getElementById("area").value=area
            
        }
    }

function limpiar(){
        
    document.getElementById("valorA").value=""
    document.getElementById("valorB").value=""
    document.getElementById("area").value=""
}   

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Ups...",
        text: mensaje
        });
}