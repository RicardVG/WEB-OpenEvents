<template>
  <main>
    <div class="card">
      <!--Fons blanc on estarà el contingut-->
      <router-link to="/gPerfil">
        <!--enllaça amb la pàgina de perfil d'usuari-->
        <div class="card-content">
          <!--Contingut dins del card-->
          <div class="card-image">
            <div ><font-awesome-icon icon="user" size="4x"/></div>
          </div>
          <!--Ens permet posar la icona de la secció corresponent-->
          <div class="form">
            <h3>Gestionar Perfil d'Usuari</h3>
          </div>
          <!--Títol de la secció-->
        </div>
      </router-link>
    </div>
    <div class="card">
      <!--Fons blanc on estarà el contingut-->
      <router-link to="/amistats">
        <!--enllaça amb la pàgina de perfil d'amistats-->
        <div class="card-content">
          <!--Contingut dins del card-->
          <div class="card-image">
            <div><font-awesome-icon icon="user-group" size="4x"/></div>
          </div>
          <!--Ens permet posar la icona de la secció corresponent-->
          <div class="form">
            <h3>Gestionar Usuaris</h3>
          </div>
          <!--Títol de la secció-->
        </div>
      </router-link>
    </div>
    <div class="card">
      <!--Fons blanc on estarà el contingut-->
      <router-link to="/esdeveniments">
        <!--enllaça amb la pàgina d'esdeveniments-->
        <div class="card-content">
          <!--Contingut dins del card-->
          <div class="card-image">
            <div><font-awesome-icon icon="calendar" size="4x"/></div>
          </div>
          <!--Ens permet posar la icona de la secció corresponent-->
          <div class="form">
            <h3>Gestió d’esdeveniments</h3>
          </div>
          <!--Títol de la secció-->
        </div>
      </router-link>
    </div>
  </main>
</template>

<script>
  

</script>


<style scoped>
a {
  text-decoration: none;
}


html {
  height: 100%;
}
main {
  background: -webkit-linear-gradient(bottom, #2a0aa0, #07ffc9);
  background-repeat: no-repeat;
  display: flex;
  min-height: 100vh;
}
label {
  font-family: "Raleway", sans-serif;
  font-size: 20pt;
}
.card {
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 410px;
  margin: auto auto auto auto;
  width: 340px;
}
.card-content {
  padding: 12px 44px;
}
.card-image {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 80px;
  text-align: center;
}

.form {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 18pt;
  padding-top: 20%;
}
.form-border {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
}
.underline-title {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 2px;
  margin: -1.1rem auto 0 auto;
  width: 89px;
}


</style>