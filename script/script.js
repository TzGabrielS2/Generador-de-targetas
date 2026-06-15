//arreglos

const targeta_arreglo=[];

//variables

const nombre=document.getElementById("nombre");
const cargo=document.getElementById("cargo");
const color=document.getElementById("color-favorito");
const targetas=document.getElementById("targeta");
const destino_nombre=document.getElementById("destino-nombre");
const destino_cargo=document.getElementById("destino-cargo");
const destino_color=document.getElementById("targeta");
const formulario=document.getElementById("formulario");
const contenedor_principal=document.getElementById("contenedor-principal");
const principal=document.getElementById("main");
const targetas_generadas=document.getElementById("targetas-generadas");
const mostrar_targetas=document.getElementById("mostrar-targetas");

//variable para volver
const volver_inicio=document.createElement("a");
volver_inicio.href="#";
volver_inicio.textContent="Volver";
volver_inicio.style.animation="aparecer .9s ease-in-out alternate";

//funciones principales para generar
function eventoreal(){

    //para la prevializacion 
    destino_nombre.innerHTML="<b>Nombre: </b>" + nombre.value;
    destino_cargo.innerHTML="<strong>Cargo: </strong>" + cargo.value;
    targetas.style.backgroundColor=color.value;
    
    if(color.value<"#b4b4b4" && color.value<"#c26c6c"){ //cambiar de color las letras en caso de que la targeta sea oscura
        destino_nombre.style.color="#ffffff";
        destino_cargo.style.color="#ffffff";
        destino_color.style.border="solid #ffffff";
    }else{
        destino_nombre.style.color="#000000";
        destino_cargo.style.color="#000000";
        destino_color.style.border="solid #000000";
    }
}

function generador(evento){

    evento.preventDefault(); //con el parametro evento y preventDefault para que no se recargue la pagina
    
    contenedor_principal.style.display="none"; // ocultar formulario
    mostrar_targetas.style.display="none"; // ocultar el mostrar targetas

    const targeta_generada=document.createElement("div"); //crear el div
    targeta_generada.classList.add("targeta-generada"); //su clase

    //para insertar todo en la targeta generada
    targeta_generada.innerHTML=` 
        <p><strong>Nombre:</strong> ${nombre.value}</p>
        <p><strong>Cargo:</strong> ${cargo.value}</p>
    `;



    //insertar el color y animacion en la targeta

    targeta_generada.style.animation="aparecer .9s ease-in-out alternate";

    targeta_generada.style.backgroundColor=color.value; 
    principal.appendChild(targeta_generada); //insertar la targeta en el main

    if(color.value<"#b4b4b4" && color.value<"#c26c6c"){ //cambiar el color de las letras si la targeta es oscura
        targeta_generada.style.color="#ffffff";
        targeta_generada.style.border= "solid #ffffff";
    }else{
        targeta_generada.style.color="#000000";
        targeta_generada.style.border= "solid #000000";
    }

    targeta_arreglo.push(targeta_generada);

    //link para regresar al generador de nuevo

    principal.appendChild(volver_inicio);

    volver_inicio.addEventListener("click", ()=>{

        //restablecer todo
        contenedor_principal.style.display="block flex"; // para aparesca el formulario
        contenedor_principal.style.animation="aparecer .9s ease-in-out alternate";
        mostrar_targetas.style.display="block"; //mostrar de nuevo
        volver_inicio.remove(); //desaparecer el volver
        targeta_generada.remove(); //desaparecer la targeta
        formulario.reset(); // restablecer el formulario
        //restablecer la targeta de actualizacion real
        destino_nombre.innerHTML="<strong>Nombre: </strong";
        destino_cargo.innerHTML="<strong>Cargo: </strong";
        targetas.style.backgroundColor="";
        destino_color.style.border="solid #000000";
        destino_nombre.style.color="";
        destino_cargo.style.color="";
    });

    
    
}





//eventos

nombre.addEventListener("input", eventoreal); //evento para que se vea lo que se esta escribiendo en el nombre
cargo.addEventListener("input", eventoreal); //evento para que se vea lo que se esta escribiendo en el cargo
color.addEventListener("input", eventoreal); //evento para que se vea el color de la targeta
formulario.addEventListener("submit", generador); //evento para que cuando se presione el boton se genere la targeta
formulario.addEventListener("reset", ()=>{ // si se presiona limpiar para que restablesca la targeta derecha
    destino_nombre.innerHTML="<strong>Nombre: </strong";
    destino_cargo.innerHTML="<strong>Cargo: </strong";
    targetas.style.backgroundColor="";
    destino_color.style.border="solid #000000";
    destino_nombre.style.color="";
    destino_cargo.style.color="";
});

//evento para ver la galeria
mostrar_targetas.addEventListener("click", ()=>{ //evento con funcion para mostrar las targetas generadas

    //ocultar
    contenedor_principal.style.display="none";
    mostrar_targetas.style.display="none";
    
    targeta_arreglo.forEach(mostrar =>{ 

        //insertar las targetas en el html
        targetas_generadas.appendChild(mostrar);


    });
    
    //volver al generador
    principal.appendChild(volver_inicio);

    volver_inicio.addEventListener("click", ()=>{
        
        //mostrar
        contenedor_principal.style.display="block flex"; // para que aparesca el generador
        contenedor_principal.style.animation="aparecer .9s ease-in-out alternate"; //animacion
        mostrar_targetas.style.display="block"; //para que aparesca 
        volver_inicio.remove(); //para que remueva el volver
        formulario.reset(); //para que restablesca el formulario

        //para que restablesca la targeta derecha
        destino_nombre.innerHTML="<strong>Nombre: </strong";
        destino_cargo.innerHTML="<strong>Cargo: </strong";
        targetas.style.backgroundColor="";
        destino_color.style.border="solid #000000";
        destino_nombre.style.color="";
        destino_cargo.style.color="";
    });

});



