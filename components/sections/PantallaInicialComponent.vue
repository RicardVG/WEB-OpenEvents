<template>
  <main>
    <!--Contingut principal del cos-->
    <div class="card">
      <!--Fons blanc on estarà el contingut-->
      <div class="card-content">
        <div class="logo"><font-awesome-icon icon="atom" size="4x" /></div>
        <div v-if="error.length > 0" class="alert">
          <ul>
            <li v-for="(item, key) in error" :key="key">
              {{ item }}
            </li>
          </ul>
        </div>
        <!--Contingut dins del card-->
        <div class="flexRegister-Login">
          <!--separador del Login i register utilitzan un flex row-->
          <form
            @submit="login(usuarioLogin)"
            onsubmit="return false"
            class="form"
          >
            <!--Mostra el contingut de login en forma de flex column-->
            <div class="card-title">
              <!--Clase que serveix per editar el títol Login-->
              <h2>LOGIN</h2>
              <div class="underline-title-login"></div>
              <!--Clase que serveix per subratllar el login-->
            </div>
            <label style="padding-top: 13px"> &nbsp;Email </label>

            <input
              id="user-email"
              class="form-content"
              type="email"
              name="email"
              autocomplete="on"
              v-model="usuarioLogin.email"
            />
            <!--El input ens serveix com a entrada de informació de l'usuari.-->
            <div class="form-border"></div>
            <label style="padding-top: 22px"
              ><!--Els labels ens permeten posar sub-elements, en aquest cas subelements de Login.-->
              &nbsp;Password
            </label>
            <input
              id="user-password"
              class="form-content"
              type="password"
              name="password"
              v-model="usuarioLogin.password"
            />
            <!--El input ens serveix com a entrada de informació de l'usuari.-->
            <div class="form-border"></div>
            <button
              type="submit"
              @click="login()"
              class="submit-btn"
              name="submit"
            >
              LOGIN
            </button>

            <!--El input ens serveix com a entrada de informació de l'usuari.
              El atribut onclick ens indica que al donarli al botó, crida a la funció
              changeHTML la cual ens permet cambiar de secció/pàgina-->
          </form>

          <form
            @submit.prevent="register(usuarioRegister)"
            onsubmit="return false"
            class="form"
          >
            <div class="card-title">
              <!--Clase que serveix per editar el títol Login-->
              <h2>REGISTER</h2>
              <div class="underline-title-register"></div>
              <!--Clase que serveix per subratllar el login-->
            </div>
            <label style="padding-top: 13px">
              <!--Els labels ens permeten posar sub-elements, en aquest cas subelements de Register.-->
              &nbsp;Name
            </label>
            <input
              class="form-content"
              type="name"
              v-model="usuarioRegister.name"
            /><!--El input ens serveix com a entrada de informació de l'usuari.-->
            <div class="form-border"></div>
            <label style="padding-top: 22px">&nbsp;Last Name </label>
            <!--Els labels ens permeten posar sub-elements, en aquest cas subelements de Register.-->
            <input
              class="form-content"
              type="last_name"
              v-model="usuarioRegister.last_name"
            />
            <div class="form-border"></div>
            <label style="padding-top: 22px">&nbsp;Email </label>
            <input
              class="form-content"
              type="email"
              v-model="usuarioRegister.email"
              autocomplete="on"
            />
            <div class="form-border"></div>
            <label style="padding-top: 22px">&nbsp;Password </label>
            <input
              class="form-content"
              type="password"
              v-model="usuarioRegister.password"
            />
            <div class="form-border"></div>
            <label style="padding-top: 22px">&nbsp;Image </label>
            <input class="form-content" v-model="usuarioRegister.image" />
            <!--El input ens serveix com a entrada de informació de l'usuari.-->
            <div class="form-border"></div>
            <button type="submit" class="submit-btn">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>



<script>
export default {
  data() {
    return {
      usuarioLogin: {
        email: "",
        password: "",
      },
      usuarioRegister: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        image: "",
      },
      error: [],
      users: [],
    };
  },
  methods: {
    register() {
      try {
        this.error = [];
        if (!this.checkEmptyFields()) {
          this.fetchRegister();
        } else {
          throw new Error(
            "There is some empty fields! Please enter all the fields"
          );
        }
      } catch (error) {
        this.error.push(error.message);
      }
    },

    async fetchRegister() {
      await fetch("http://puigmal.salle.url.edu/api/v2/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.usuarioRegister),
      })
        .then((res) => {
          if (res.status == 201) {
            return res.json();
          } else {
            throw new Error("Server Error");
          }
        })
        .catch((error) => {
          if (!this.error.includes(error.message)) {
            this.error.push(error.message);
          }
        });
    },

    checkEmptyFields() {
      if (this.usuarioRegister.name.length == 0) {
        return true;
      }
      if (this.usuarioRegister.last_name.length == 0) {
        return true;
      }
      if (this.usuarioRegister.email.length == 0) {
        return true;
      }
      if (this.usuarioRegister.password.length == 0) {
        return true;
      }
      if (this.usuarioRegister.image.length == 0) {
        return true;
      }
      return false;
    },

    async getUsers() {
      this.error = [];
      await fetch("http://puigmal.salle.url.edu/api/v2/users", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status == 200) {
            this.users = res.json();
            return this.users;
          } else {
            throw new Error("Incorrect credentials. Please try again!");
          }
        })
        .then((data) => {
          const userEmail = data.filter((user) => {
            localStorage.setItem("email", this.usuarioLogin.email);              
            return user.email == this.usuarioLogin.email;
          });
       
          let userId = userEmail[0].id  
          localStorage.setItem("id", userId);
          this.$router.push("Inici"); 
        })
        .catch((error) => {
          console.log(error);
          if (!this.error.includes(error.message)) {
            this.error.push(error.message);
          }
        });
    },
    async login() {
      this.error = [];
    
      await fetch("http://puigmal.salle.url.edu/api/v2/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.usuarioLogin),
      })
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            throw new Error("Incorrect credentials. Please try again!");
          }
        })
        .then((data) => {
          localStorage.setItem("accessToken", data.accessToken);
          this.getUsers();                   
        })
        .catch((error) => {
          console.log(error);
          if (!this.error.includes(error.message)) {
            this.error.push(error.message);
          }
        });
    },
    
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.logo {
  display: table;
  margin: 0 auto;
}

.alert {
  padding: 15px;
  background-color: red;
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
  font-size: 11pt;
}
.login-logo {
  width: 5%;
}
.card {
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 620px;
  margin: auto auto auto auto;
  width: 50%;
}
.card-content {
  padding-top: 5%;
}
.card-title {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}
.submit-btn {
  background: -webkit-linear-gradient(right, #2a0aa0, #07ffc9);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #2a0aa0;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
.submit-btn:hover {
  box-shadow: 0px 1px 18px #2a0aa0;
}
.form {
  display: flex;
  flex-direction: column;
  width: 30%;
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
.underline-title-login {
  background: -webkit-linear-gradient(right, #2a0aa0, #07ffc9);
  height: 2px;
  margin: 0.2rem auto 0 auto;
  width: 60px;
  padding-right: 10px;
}
.underline-title-register {
  background: -webkit-linear-gradient(right, #2a0aa0, #07ffc9);
  height: 2px;
  margin: 0.2rem auto 0 auto;
  width: 110px;
}

h1 {
  font-size: 20pt;
}
.flex-main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.flexRegister-Login {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
