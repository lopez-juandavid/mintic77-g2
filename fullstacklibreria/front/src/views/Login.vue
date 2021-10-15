<template>
  <div>
      <br>
      <br>
    <main class="form-signin">
        <h1 class="h3 mb-3 fw-normal">Iniciar sesión</h1>

      <b-form @submit.prevent="buscarUsuario()" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Número de identificación:"
          label-for="input-1"
          description=""
        >
          <b-form-input
            id="input-1"
            v-model="form.cedula"
            type="text"
            placeholder="Ingrese su número de identificación"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Ingrese su contraseña"
            required
          ></b-form-input>
        </b-form-group>

              <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Mantener sesión iniciada
        </label>
      </div>

        <b-button type="submit" variant="primary">Acceder</b-button>
      </b-form>

    </main>
    <br>
    <br>
  </div>
</template>

<script>
export default {
    
  data(){
    return {
      form:{
          cedula: '',
          password: ''
      },
      show: true,
      customers: []
    }
  },  

  methods: {
    buscarUsuario(){
      console.log("Se ejecuta la función Buscar");
      this.axios.get('customers') . then( res => {

          
          this.customers = res.data; 
          console.log(this.customers);
          
          // Tengo que empezar a recorrer esa array o esala data para empezar a validar que los datos coincidan
          this.customers.forEach((value) => {
            console.log(value.cedula);
            console.log(value.password);

            //Ahora debemos validar si el usuario que ingreso es el mismo que se encuentra en la BD
            if(this.form.cedula == value.cedula ){

              console.log("Usuario si existe");
              if(this.form.password == value.password){

                console.log("Contraseña Correcta");

                window.localStorage.setItem('autenticacion','ok');
                this.$router.push({path: '/Bienvenida'});
              } else {
                this.$router.push({path: '/ErrorAcceso'});
            } 

            } 

          });

      })

    }     

  },
}
</script>



<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



.form-signin {
  width: 100%;
  max-width: 350px;
  padding: 15px;
  margin: auto;
  background-color:  #bbbbb4;
  border-radius: 7%;

}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>