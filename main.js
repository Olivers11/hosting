let seleccionado = false;
let seleccionado2 = false;
let seleccionado3 = false;
document.getElementById('ministerio').addEventListener('click', function(){
    if(!seleccionado)
    {
        document.getElementById('li-inicio').style.display = "block";
        seleccionado = true;
    }
    else{
        document.getElementById('li-inicio').style.display = "none";
        seleccionado = false;
    }
});

document.getElementById('oradores').addEventListener('click', function(){
    if(!seleccionado2)
    {
        document.getElementById('li-inicio1').style.display = "block";
        seleccionado2 = true;
    }
    else{
        document.getElementById('li-inicio1').style.display = "none";
        seleccionado2 = false;
    }
});

document.getElementById('congresos').addEventListener('click', function(){
    if(!seleccionado3)
    {
        document.getElementById('li-inicio3').style.display = "block";
        seleccionado3 = true;
    }
    else{
        document.getElementById('li-inicio3').style.display = "none";
        seleccionado3 = false;
    }
});