<template>
    <!-- inicio contenido principal -->
    <div class="contenedor-contenido-principal">

         <!-- inicio sección de servicios -->
         <section class="flex-container">
            <div class="imagen_ppal">
                <img src="../assets/libros/el-principito.jpeg" alt="">
               
            </div>
            
            <div class="autor">
                <h1 class="titulo_Detalles">El Principito</h1>
                <p>Antonie de Saint Exupery</p>
                
                
                <p>$39.999</p>
                <div class="contador_libros">
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-secondary" id="menos">-</button>
                        <!-- <button class="btn btn-default" id="menos" type="button">-</button> -->
                    </span>
                    <input
                        type="text"
                        style="width:50px;text-align: center;"
                        id="contador"
                        class="form-control"
                        value="1"
                        min="1"
                        
                    />
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-secondary" id="mas">+</button>
                    </span>
                    <span class="btn_detalle-comprar">
                        <button type="button" class="btn btn-success">
                            <a href= "./transactionDetails" class="nav-link text-white">Comprar</a>
                        </button>
                    </span>
                </div>
                
                <div class="editorial_detalle">
                    <section class="seccion_info_editorial">
                        <article class="info_editorial">
                            <h4>Editorial</h4>
                            <p>Gato Negro</p>
                        </article>
                        <article class="info_formato">
                            <h4>Formato</h4>
                            <p>Libro</p>
                        </article>
                        <article class="info_presentacion">
                            <h4>Presentación</h4>
                            <p>
                                Pasta Dura
                            </p>
                        </article>
                       
                    </section>
                   
                    <section class="grp_detalles">
                        <h3>Descripción Del Libro</h3>
                        <article>
                            <p>
                                El principito es una narración corta del escritor francés Antoine de Saint-Exupéry, que trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.<br>
                                El principito es tenido como uno de los mejores libros de todos los tiempos y un clásico contemporáneo de la literatura universal.
                                Debido a su estilo sencillo y directo se lo ha considerado un libro para niños; no obstante, su profundo carácter reflexivo sobre la vida, la sociedad y el amor, lo convierten en una narración de interés para todos.

                                Fue publicado en abril de 1943, en Estados Unidos, puesto que, debido a la segunda guerra mundial, la obra no pudo ser imprimida en Francia. <br>

                                El libro ha sido traducido a decenas de lenguas y adaptado a diversos formatos, como el teatro, el cine, la serie animada, el ballet y la ópera.
                            </p>
                        </article>

                    </section>
                    <section class="grp_detalles">
                        <h3>Especificaciones</h3>
                        <article>
                            <p>Número De Paginas: <strong>156</strong></p>
                            <p>Fecha De Publicación: <strong>12 Marzo 2012</strong></p>
                            <p>autor: <strong>Antony de Saint-Exupéry</strong></p>
                            <p>Dimensiones: <strong>26 cm x 20.5 cm x 1.5 cm</strong></p>
                            <p>Encuadernación: <strong>Pasta Dura</strong></p>
                            <p>Idioma: <strong>Español</strong></p>
                        </article>
                    </section>
                    <section class="grp_detalles">
                        <h3>Política de Envío</h3>
                        <article>

                        </article>
                    </section>
                    
                </div>
               

            </div>

        </section>
       

    </div>
    <!-- fin contenido principal -->
</template>


<script>
export default {
    
// var sumar = document.getElementById("mas");
//                         var restar = document.getElementById("menos");
//                         var contador = document.getElementById("contador");
//                         var importe = document.getElementById("importe");
//                         // var valorBase = 5.20;
//                         var prevValue;
                
//                         function calcular() {
//                         var value = contador.value;
//                         var isValid = /^[1-9][0-9]*$/.test(value);
                
//                         if (!isValid) {
//                             contador.value = prevValue;
//                         } else {
//                             prevValue = value;
//                         }
                
//                         importe.value = Number.parseFloat(contador.value).toFixed(2);
//                         }
                
//                         sumar.onclick = function() {
//                         contador.value = Number(contador.value) + 1;
//                         calcular();
//                         };
                
//                         restar.onclick = function() {
//                         contador.value = Number(contador.value) - 1;
//                         calcular();
//                         };
                
//                         contador.onchange = function() {
//                         calcular();
//                         };
                
//                         contador.onkeyup = function() {
//                         if (contador.value === "") {
//                             return;
//                         }
//                         calcular();
//                         };
                
//                         calcular();

}
</script>
