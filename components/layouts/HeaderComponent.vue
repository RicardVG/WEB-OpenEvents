<template>
<header >
    <div class="logo">
      <font-awesome-icon icon="atom" size="4x" />
    </div>
    <div class="top-sections">
      <router-link to="/gPerfil"><h2>PERFIL D'USUARI</h2>
      </router-link>
      <router-link to="/usuaris"><h2>USUARIS</h2>
      </router-link>
      <router-link to="/esdeveniments"><h2>ESDEVENIMENTS</h2>
      </router-link>
    </div>
    <div class="exit">
      <div>
        <router-link to="/gPerfil"><font-awesome-icon icon="user" size="2x" />
        </router-link>
      </div>
      <div>
         <router-link to="/" @click="cerrarSession()"><font-awesome-icon icon="arrow-right-from-bracket" size="2x"/>
        </router-link>
      </div>
    </div>
  </header>
   
</template>

<script>
export default {
  methods: {
  cerrarSession(){
    localStorage.removeItem('accessToken')
  }
}
}
</script>


<style>

:root {
  --footer-height: 10%;
  --footer-width: 100%;
  --footer-padding: 0px;
  --header-width: 100%;
  --header-height: 10%;
}


a {
  text-decoration: none;
}
header a:hover {
  font-size: 20px;
}

header {
  height: var(--header-height);
  width: var(--header-width);
  background: -webkit-linear-gradient(top, #2a0aa0, #07ffc9);
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

header .exit {
  display: flex;
  height: 100%;
  align-items: flex-end;
  gap: 30px;
  padding-top: 30px;
  margin-right: 20px;
}

header .logo {
  padding: 0.5%;
}

header .top-sections {
  display: flex;
  flex-direction: row;
  gap: 100px;
  text-align: center;
  margin: auto;
  font-family: "Raleway", sans-serif;
}

</style>