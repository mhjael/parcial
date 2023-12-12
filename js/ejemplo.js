function suma()
{
    let a=parseInt(prompt("ingrese a:"));
    let b=parseInt(prompt("ingrese a:"));
    let c=parseInt(prompt("ingrese a:"));
    let s=a+b+c;
    document.write(s);
}
function sumar()
{
    let a,b,c,s;
    /*a=parseInt(document.getElementById("valor1").Value);*/
    s=parseInt
    (document.getElementById("valor1").value)+parseInt
    (document.getElementById("valor2").value)+parseInt
    (document.getElementById("valor3").value);  
    document.getElementById("resultado").value=s;
}
function limpiar()
{
    document.getElementById("valor1").value=" ";
    document.getElementById("valor2").value=" ";
    document.getElementById("valor3").value=" ";
    document.getElementById("resultado").value=" ";
}