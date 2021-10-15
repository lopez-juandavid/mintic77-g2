<template>
    <div class="container">

        <br>
        <br>
        <br>

        <h1 style="color: rgb(81, 83, 82)">¡Error de acceso!</h1>

        <v-alert
            outlined
            type="error"
            text
        >
            Los datos ingresados no se encuentran en nuestra base de datos. Por favor, intenta de nuevo.
        </v-alert>

        <b-button>
            <a href="/login" class="nav-link text-white" >
            Mi cuenta
            </a>
        </b-button>


        <br>
        <br>
        <br>

    </div>
</template>