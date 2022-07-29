<template>
  <main>
    <div class="card">
      <div class="card-content">
         <section class="friend">
          <article v-for="user in users" :key="user.id" class="friend-data">
           <img :src="user.image" @error="$event.target.src='https://i.ibb.co/ssj3X3T/585e4beacb11b227491c3399.png'"/> 
            <div class="friend-title">
              <table class="table">
                <tr>
                  <td>NOM:</td>
                  <td><span>{{ user.name }}</span></td>
                </tr>  
                <tr>
                  <td>LAST NAME:</td>
                  <td><span>{{ user.last_name }}</span></td>
                </tr>  
                <tr>
                  <td>EMAIL:</td>
                  <td><span>{{ user.email }}</span></td>
                </tr>  
              </table>
            </div>
            <div class="friend-button">
              <div><input
                class="submit-btn"
                type="submit"
                name="submit"
                value="Veure Perfil"
                @click="showProfile(user.id)"
              /></div>
              <div ><input
                class="submit-btn"
                type="submit"
                name="submit"
                value="Enviar Petició"
                @click="sendFriendRequest(user.id)"
              /></div>
               <div ><input
                class="submit-btn2"
                type="submit"
                name="submit"
                value="Eliminar Petició"
                @click="deleteFriendRequest(user.id)"
              /></div>
            </div>
          </article>
          
        </section>
      </div>
    </div>
  </main>

  <notifications position="top left" width="300px" />
</template>

<script>
export default {

  async beforeCreate() {
    await fetch("http://puigmal.salle.url.edu/api/v2/users",{
      method: "GET",
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
    }).then(response => response.json())
    .then((data) => {    
      this.users = data;
    })
  },
  data() {
    return {
      users: [],
      errors: []     
    };
  },
methods: {
  showProfile(id) {
    this.$router.push({
      name: "InfoUsuari",
      params: {
        id: id,
      },
    });
  },
  async sendFriendRequest(id) {
    await fetch(`http://puigmal.salle.url.edu/api/v2/friends/${id}`,{
      method: "POST",
      headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"), 
        "Content-Type": "application/json",
      },        
    })
    .then((res) => {
      if (res.status === 201) {
        this.$notify({ type: "success", text:"Sol·licitud d'amistat enviada"});
      }
      if (res.status === 400){
        this.$notify({ type: "error", text:"Sol·licitud d'amistat ja ha estat enviada"});
      }
      if (res.status === 500){     
        this.$notify({ type: "error", text:"Error: Sol·licitud d'amistat no enviada"});
      }
      return res.json()
    })
 
  },
  async deleteFriendRequest(id) {
    await fetch(`http://puigmal.salle.url.edu/api/v2/friends/${id}`,{
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"), 
        "Content-Type": "application/json",
      },        
    })
    .then((res) => {
      if (res.status === 200) {
        this.$notify({ type: "success", text:"Sol·licitud d'amistat eliminada"});
      }
      if (res.status === 400){
        this.$notify({ type: "error", text:"Sol·licitud d'amistat ja ha estat eliminada"});
      }
      if (res.status === 500){     
        this.$notify({ type: "error", text:"Error: Sol·licitud d'amistat no eliminada"});
      }
      return res.json()
    })
 
  }
}
};
</script>


<style scoped>
.table {
  border: none;
}
.table td {
  padding-left: 15px;
}

img {
    max-width: 25%;
    max-height: 50%;
   
}

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
  height: 472px;
  margin: 2rem auto auto auto;
  width: 1000px;
}
.card-content {
  padding: 30px 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-x: hidden;
  height: 400px;
}

.bell {
  padding-left: 95%;
}

.friend {
  width: 95%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
.friend-title{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  
}
.friend-data {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 25px;
  padding-bottom: 25px; 
}

.friend-data img{
  max-width: 150px;
  max-height: unset;
}

.friend-button{
 display: flex;
flex-direction: column;
 margin-bottom: 15px;
 gap: 10px;
}
.submit-btn {
  background: blue;
  border: none;
  border-radius: 21px;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  transition: 0.25s;
  width: 110px;
}
.submit-btn2 {
  background: red;
  border: none;
  border-radius: 21px;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  transition: 0.25s;
  width: 110px;
}
</style>