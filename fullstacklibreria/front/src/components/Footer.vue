<template>
    <footer class="seccion-footer">
        <h2 class="titulo-footer">Librería Había Una Vez</h2>
        <p class="parrafo-footer"> 
            Compra tus libros desde la comodidad de tu casa!
        </p>
        <div class="seccion-info__pie">
            <article>
                <h3>Información de Contacto</h3>
                <p>3134736162 - (606)3213206</p>
                <p>Carrera 27 No. 11-02 Pereira - Risaralda - Colombia</p>
                <p>Horario de atención: Lunes a Viernes de 8:00 AM a 6:00 PM, Sádado de 9:00 AM a 5:00 PM.</p>
            </article>

            <article>
                <h3>Síguenos</h3>
                <nav>
                    <ul class="redes-sociales">
                        <li>
                            <a href="https://www.facebook.com/groups/1266068920457464/?ref=share" target="_blank" class="nav-link text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCNz3oP-hmpxwyESng_vp_Wg" target="_blank" class="nav-link text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://imaster.academy" target="_blank" class="nav-link text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-file-ppt-fill" viewBox="0 0 16 16">
                                    <path d="M8.188 8.5H7V5h1.188a1.75 1.75 0 1 1 0 3.5z"/>
                                    <path d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm3 4a1 1 0 0 0-1 1v6.5a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5H7z"/>
                                </svg>
                            </a>
                            
                        </li>
                    </ul>
                </nav>
            </article>
        </div>
        
    </footer>
    
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

.body {
  max-width: 1400px;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 0;
  color: #222222;
}

.seccion-info__pie {
  height: 200px;
  display: flex;
  justify-content: space-around;
  color: #f7f7f7;
}

.seccion-footer {
  padding: 3px;
  background-color: #0a9292;
  color: #f7f7f7;
}

.titulo-footer {
  text-align: center;
  color: #f7f7f7;
}
.parrafo-footer {
  text-align: center;
  color: #f7f7f7;
}

.redes-sociales {
  list-style: none;
  color: #f7f7f7;
}

</style>