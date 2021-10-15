<template>

    <header >
        <div class="header-section">
            <div class="header-container">
                <div class="contenedor-titulo-loggin">
                    <h1 class="site-title">Librería</h1>
                        <div class="col-md-1 text-end">
                            <button type="button" class="btn btn-secondary me-lg-2">
                                <a href="/login" class="nav-link text-white" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg> 
                                    Mi cuenta
                                </a>
                            </button>
                        </div>
                </div>
            </div>                
                
            <!-- Inicio menú navegación -->
            <nav id="menu-navegacion" class="navbar navbar-light bg-light" >
                <div class="container-fluid">
                    <a href="/" style="color: rgb(81, 83, 82)">Inicio</a>
                    <a href="/books" style="color: rgb(81, 83, 82)">Libros</a>
                    <a href="/#titulo-noticias" style="color: rgb(81, 83, 82)">Noticias</a>
                    <a href="/#titulo-equipo" style="color: rgb(81, 83, 82)">Nuestro Equipo</a>
                  <form class="d-flex">
                    <input class="form-control me-1" type="search" placeholder="Buscar por autor, título..." aria-label="Search">
                    <button class="btn btn-secondary" type="submit">Buscar</button>
                  </form>
                </div>
            </nav>

            <!-- Fin menú navegación -->   
            <div class="logoLibreria">
                <img src="../assets/logoLibreria.jpg" alt="A logo imagen">
            </div>
        </div>
    </header>

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

* {
  max-width: 1400px;
  min-width: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 0;
}

.btn {
    padding: 0;
}

.header-section {
  margin-bottom: 0px;
}

.header-container {
  background-color: #0a9292;
  display: block;
  flex-wrap: wrap;
  justify-content: space-between;

}

.contenedor-titulo-loggin {
  display: flex;
  height: 90px;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.site-title {
  display: flex;
  width: 450%;
  justify-content: flex-start;
  color: #f7f7f7;
  padding-left: 40px;
}

#menu-navegacion {
  padding: 0;
}
.container-fluid {
  display: flex;
  background: #d6d309;
  padding-inline-start: 50px;
  padding-inline-end: 100px;
  margin: auto;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  color:#f7f7f7;
}

.container-fluid > a {
  display: flex;
  /* color: inherit; */
  text-decoration: none;
  font-weight: bold;
  color: rgb(81, 83, 82);
}

.container-fluid > a:hover {
  display: flex;
  text-decoration: underline;
}

.logoLibreria {
  width: 100%;
}

.logoLibreria > img {
  width: 100%;
  height: 190px;
  max-width: 1400px;
  object-fit: cover;
}

</style>
