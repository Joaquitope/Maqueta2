function traerCarro(){
    json = JSON.parse(localStorage.getItem('carro'));
        let html = '<h2 class="titulo-aeronaves">Carro</h2>';
        json.forEach((product) => {
          html += `
    
          <section class="container-fluid-aeronaves">
              <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 galeria">
                     <h3>${product.Fabricante}</h3>
                    <h3>${product.Modelo}</h3>
                      <h2> ${product.Aerolinea} </h2>
                      <img src="${product.img}" class="images" alt="am"> <br>
                      <button>$${product.Precio}</button></div>
                      </div> </section>
          `;
        });
        document.getElementById('carro-products').innerHTML = html;
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        traerCarro()
      });

function pagar(){
    localStorage.setItem('carro',JSON.stringify([]))
    Swal.fire({
        title: 'Genial!',
        text: 'Pago realizado',
        icon:'success',
        confirmButtonText: 'Ok!'
    })
    
}

