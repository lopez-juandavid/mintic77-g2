<template>

    <div class="contenedor-contenido-principal">
        <h2 id="titulo-libros" style="border-bottom:solid">Resumen de compra</h2> <!-- Antes: Servicios-->
        <!-- inicio sección de servicios -->

        <section class="body-section">
            <div id="summary" class="summary-section">
                <div>
                    <img class="services-info__imagen" src="../assets/libros/el-principito.jpeg" alt="">
                </div>
                
                <div>
                    <h3> El Principito </h3>
                    <p class="book-author">
                        Antoine de Saint Exupery
                    </p>
                    <p>
                        Subtotal: $39.990
                    </p>
                    <p>
                        Precio de envío: $15.000
                    </p>
                    <p class="book-price">
                        Total: $54.990
                    </p>
                </div>
            </div>

            <div class="dropdown center pb-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Elegir dirección de envío
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            
            <p>
                Al pagar acepta los <a href="./termCond">términos y condiciones del servicio</a>.
            </p>
            <div class="center">
                <button type="button" class="btn btn-success">
                    <a href="#" target="_blank" class="nav-link text-white">Pagar</a>
                </button>
            </div>
            
        </section>
    </div>

</template>

<script>
export default {
    
}
</script>


<style>

* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.contenedor-contenido-principal {
  padding: 25px;
}

.services-info__imagen {
  max-width: 50%;
  max-height: 50%;
  border-radius: 10%;
  object-fit: contain;
}

.details-header {
  display: flex;
  justify-content: space-around;
}

</style>