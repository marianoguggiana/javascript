function interes(){
    document.getElementById("interes").innerHTML=" "
    document.getElementById("valorcuota").innerHTML=" "
    document.getElementById("total").innerHTML=" "
    let n=Number(document.getElementById("cuota").value);
    let n2=Number(document.getElementById("costo").value);
if (n2 == 0){
    alert("Ingresar costo")
}
  else if(n == 1){
    document.getElementById("interes").innerHTML=document.getElementById("interes").innerHTML+ "0%"
    int = 0
} else if (n == 3){
    document.getElementById("interes").innerHTML=document.getElementById("interes").innerHTML+ "5%"
    int = 5
} else if (n == 6){
    document.getElementById("interes").innerHTML=document.getElementById("interes").innerHTML+ "12%"
    int = 12
} else if (n == 12){
    document.getElementById("interes").innerHTML=document.getElementById("interes").innerHTML+ "30%"
    int = 30
    
}
totalcuota = n2*(1+(int/100))/n
document.getElementById("valorcuota").innerHTML= document.getElementById("valorcuota").innerHTML + totalcuota.toFixed(2)
valortotal = totalcuota * n
document.getElementById("total").innerHTML = valortotal.toFixed(2)
}
