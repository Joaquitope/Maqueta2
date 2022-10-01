function traerProductos(){
fetch("../js/products.json")
  .then((res) => res.json())
  .then((json) => {
    let html = '<h2 class="titulo-aeronaves">Nuestras aeronaves</h2>';
    json.forEach((product) => {
      html += `

      <section class="container-fluid-aeronaves">
          <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 galeria">
                 <h3>${product.Fabricante}</h3>
                <h3>${product.Modelo}</h3>
                  <h2> ${product.Aerolinea} </h2>
                  <img src="${product.img}" class="images" alt="am"> <br>
                  <button>$${product.Precio}</button>
                  <button onclick=agregarAlCarro('${JSON.stringify(product)}')>Agregar al carro</button> </div>
                  </div> </section>
      `;
    });
    document.getElementById('listado-products').innerHTML = html;
  })
  .catch((e) => {
    console.log(e);
  });
}
traerProductos()


function agregarAlCarro(producto){
    let jsonProducto = JSON.parse(producto)
    let productosCarro;
    if(localStorage.getItem('carro') != 'undefined'){
        productosCarro = JSON.parse(localStorage.getItem('carro'));
    }else{
        productosCarro = [];
    }
    productosCarro.push(jsonProducto);
    localStorage.setItem('carro',JSON.stringify(productosCarro))
    Swal.fire({
        title: 'Hey',
        text: 'Producto agregado al carro',
        icon: 'info',
        confirmButtonText: 'Ok!'
    })
}

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
