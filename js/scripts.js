
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const products = [
{Modelo: 787, Fabricante: "Boeing", Aerolinea: "Aeromexico", Precio: $19000},
{Modelo: 777, Fabricante: "Boeing", Aerolinea: "Emirates", Precio: $17500},
{Modelo: 330, Fabricante: "Airbus", Aerolinea: "Aerolineas Argentinas", Precio: $25650},
{Modelo: 737, Fabricante: "Boeing", Aerolinea: "Aerolineas Argentinas", Precio: $22300},
{Modelo: 330, Fabricante: "Airbus", Aerolinea: "Swiss", Precio: $15000},
{Modelo: 737, Fabricante: "Boeing", Aerolinea: "Aerolineas Argentinas", Precio: $23000},
{Modelo: 777, Fabricante: "Boeing", Aerolinea: "Alitalia", Precio: $19750},
{Modelo: 340, Fabricante: "Airbus", Aerolinea: "Iberia", Precio: $18600},
{Modelo: 320, Fabricante: "Airbus", Aerolinea: "VIva", Precio: $14800},
{Modelo: 747, Fabricante: "Boeing", Aerolinea: "CargoLux", Precio: $24000},
]


function formulario() {
    let nombre = document.getElementById("nombre").value;
    
    if(nombre == ''){
        Swal.fire({
            title: 'Error!',
            text: 'Debe ingresar un nombre! Se mostrara el ultimo ingresado',
            icon: 'error',
            confirmButtonText: 'Ok!'
        })
        /* alert("no ingreso ningun nombre, se mostrara el ultimo ingresado") */
        nombre = localStorage.getItem('nombreUsuario')
    }else{
        localStorage.setItem('nombreUsuario', JSON.stringify(nombre))
    }

    let valor = document.getElementById("valor").value;

     if(valor == ''){
        Swal.fire({
            title: 'Error!!!!',
            text: 'Debe ingresar un valor!',
            icon: 'error',
            confirmButtonText: 'Ok!'
        })
        /* alert("Debe ingresar un valor") */
        valor = localStorage.getItem('valorUsuario')
    }else{
        localStorage.setItem('valorUsuario', JSON.stringify(valor))
    }
    

    let cuotas = document.getElementById("cuotas").value;
    
    if(cuotas == '' || cuotas > 12){
        Swal.fire({
            title: 'Hey!',
            text: 'Debe ingresar cantidad de cuotas (max 12)!',
            icon: 'error',
            confirmButtonText: 'Ok!'
        })
        /* alert("Debe ingresar una cantidad de cuotas, la cual la max son 12") */
        cuotas = localStorage.getItem('cuotasUsuario')
    }else{
        localStorage.setItem('cuotasUsuario', JSON.stringify(cuotas))
    }
    
    document.getElementById("msj").innerHTML = "Hola " + nombre + " " + "el precio final en "  + cuotas + " " + "cuotas seria de: $" + valor/cuotas; 

    
}