<template>
  <main>
    <div class="card">
      <div class="card-content">
        <section class="card-image" style="max-width: 50%">
          <div class="dades-estadístiques">
            <font-awesome-icon icon="user" size="4x" />
            <p></p>
            <h3>Dades</h3>
          </div>
          <form method="post" class="form">
            <label for="Nom" style="padding-top: 50px"> &nbsp;Nom </label>            
              {{ this.user.name }}
            <div class="form-border"></div>
            <label for="Email" style="padding-top: 22px">&nbsp;Last Name
            </label>
            
              {{ this.user.last_name }}            
            <div class="form-border"></div>
            <label for="Mobil" style="padding-top: 22px">&nbsp;Email </label>
              {{ this.user.email }}
            <div class="form-border"></div>
          </form>
        </section>
        <section class="card-image" style="max-width: 40%">
          <div class="dades-estadístiques">
            <font-awesome-icon icon="chart-column" size="4x" />
            <p></p>
            <h3>Estadístiques</h3>
          </div>
          <div class="estadístiques-input">
            <p style="padding-top: 50px">Puntuació Mitjana Donada: </p>
            {{ this.userStatistics.avg_score}}
            <p>Nombre de Comentaris Realitzats: </p>
            {{ this.userStatistics.num_comments}}
            <p>% d'Usuaris amb menys Comentaris que aquest: </p>
            {{ this.userStatistics.percentage_commenters_below}}
          </div>
        </section>
      </div>
      <div class="eliminarCompte">
        <button @click="deleteAccount()" id="submit-btn" name="submit">
          Eliminar Compte
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    async beforeCreate() {
       let idTest = localStorage.getItem("id");
      let res = await fetch(`http://puigmal.salle.url.edu/api/v2/users/${idTest}`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem("accessToken"), 
          "Content-Type": "application/json",
        },        
      })
      res = await res.json();
      this.user= res[0];

      let resStatistics = await fetch(`http://puigmal.salle.url.edu/api/v2/users/${idTest}/statistics`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },        
      })
      resStatistics = await resStatistics.json();
      this.userStatistics = resStatistics[0];

    },
     data() {
    return {
      user: [],
      userStatistics: []
    };

    

  },
  methods: {
    async deleteAccount() {
      await fetch("http://puigmal.salle.url.edu/api/v2/users", {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      });
      window.localStorage.removeItem("accessToken");
      this.$router.push("/");
    },
  }
  
};
</script>
<style scoped>
a {
  text-decoration: none;
}

body {
  background: -webkit-linear-gradient(bottom, #2a0aa0, #07ffc9);
}

html {
  height: 100%;
}

main {
  background: -webkit-linear-gradient(bottom, #2a0aa0, #07ffc9);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 100vh;
}
label {
  font-family: "Raleway", sans-serif;
  font-size: 14pt;
}
.card {
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 600px;
  margin: 6rem auto 8.1rem auto;
  width: 1000px;
}
.card-content {
  padding: 12px 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card-image {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 2px;
  padding-bottom: 23px;
  padding-top: 60px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.dades-estadístiques {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.estadístiques-input p {
  padding-top: 30px;
}

.form {
  display: flex;
  flex-direction: column;
}
.form-border {
  background: -webkit-linear-gradient(right, #2a0aa0, #07ffc9);
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
}
#submit-btn {
  background: red;
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #ff6e6e;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
.eliminarCompte {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>