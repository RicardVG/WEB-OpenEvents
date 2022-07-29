<template>
  <main>
    <div class="card">
      <div class="card-content">

        <input
          class="submit-btn"
          type="button"
          value="Crear event"
          @click="crearEsdeveniment == true ? crearEsdeveniment = false : crearEsdeveniment = true"/>
        <input
          class="submit-btn"
          type="button"
          value="Filtrar event"
          @click="filtrarEsdeveniment == true ? filtrarEsdeveniment = false : filtrarEsdeveniment = true"/>

        <div class="info-event">
          <div class="filter-events" style="width:800px" v-if="filtrarEsdeveniment">
            <div class="box">
               <div class="row-box">
                <div class="column-box">
                  <input type="text" placeholder="Cercar esdeveniment per localització" v-model="Location" />
                  <input type="text" placeholder="Cercar esdeveniment per paraula clau" v-model="Keyword" />
                  <input type="date" placeholder="Cercar esdeveniment per data" v-model="Date" />
                </div>
                <div class="column-box">
                  <input
                    class="submit-btn"
                    type="submit"
                    name="submit"
                    value="Cercar"
                    style="margin-left:550px; margin-top:50px"
                    @click="searchEvent(Location, Keyword, Date)"
                  />
                </div>
                </div>
            </div>
          </div>
          <div class="create-event" v-if="crearEsdeveniment">
            <div class="box2">
              <div class="row-box">
                <div class="column-box">
                  <div><h3>Nom</h3></div>
                  <input
                    class="camp-esdeveniment"
                    style="padding-left: 10px"
                    v-model="dataEvent.name"/>
                  <div><h3>Categoria</h3></div>
                  <input
                    class="camp-esdeveniment"
                    style="padding-left: 10px"
                    name="Categoria Esdeveniment"
                    v-model="dataEvent.type"/>
                  <div><h3>Localització</h3></div>
                  <input
                    class="camp-esdeveniment"
                    style="padding-left: 10px"
                    v-model="dataEvent.location"/>
                  <div><h3>Descripció</h3></div>
                  <input
                    class="camp-esdeveniment"
                    style="padding-left: 10px"
                    name="Categoria Esdeveniment"
                    v-model="dataEvent.description"/>
                </div>
              </div>
              <div class="column-box">
                <div><h3>Data Inici</h3></div>
                <input
                  class="camp-esdeveniment"
                  style="padding-left: 10px"
                  v-model="dataEvent.eventStart_date"/>
                <div><h3>Data Final</h3></div>
                <input
                  class="camp-esdeveniment"
                  style="padding-left: 10px"
                  v-model="dataEvent.eventEnd_date"/>

                <div><h3>Número participants</h3></div>
                <input
                  class="camp-esdeveniment"
                  style="padding-left: 10px"
                  v-model="dataEvent.n_participators"/>
                <div><h3>Imatge</h3></div>
                <input
                  class="camp-esdeveniment"
                  style="padding-left: 10px"
                  v-model="dataEvent.image"/>
              </div>
              <div class="column-box" style="padding-top: 60px; gap: 10px">
                <div style="padding-left: 40px">
                  <font-awesome-icon icon="calendar-plus" size="4x" />
                </div>
                <input
                  id="create-esdeveniment"
                  type="submit"
                  name="submit"
                  value="Crear Esdeveniment"
                  @click="createEvent()"/>
              </div>
            </div>
          </div>
        </div>
        <section class="list-events">
          <div class="timeline2">
            <div
              class="list-box-events"
              v-for="event in events"
              :key="event.id">
              <div class="column-box">
                <img :src="event.image" @error="$event.target.src ='https://i.ibb.co/ssj3X3T/585e4beacb11b227491c3399.png'"/>
              </div>
              <div class="column-box">
                <div @click="showEvent(event.id)" class="titolEsde">
                  <h1>{{ event.name }}</h1>
                </div>
                &nbsp;&nbsp;
                <h3><b>Date :</b> {{ event.date }}</h3>
                &nbsp;&nbsp;
                <h3><b>Location :</b> {{ event.location }}</h3>
              </div>
              <div
                class="column-box"
                style="padding-left: 50px; gap: 10px; justify-content: center">
                <input
                  class="submit-btn"
                  type="submit"
                  name="submit"
                  value="Participar"
                  @click="participateEvent(event.id)"/>
              </div>
            </div>
          </div>
          <div class="box-timeline" style="width: 250px">
            <div style="padding-bottom: 15px; text-align: center">
              <h2>TOP 10 ESDEVENIMENTS (AVG.SCORE)</h2>
            </div>
            <div id="timeline">
              <article
                v-for="bestEvent in bestEvents.slice(0, 10)"
                :key="bestEvent.id">
                <div class="inner">
                  <span class="date">
                    <span class="month">{{ bestEvent.avg_score }}</span>
                  </span>
                  <h2>{{ bestEvent.name }}</h2>
                  <p>{{ bestEvent.location }}</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
  <notifications position="top left" width="300px" />
</template>

<script>
export default {
  async beforeCreate() {
    try {
      const res = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://puigmal.salle.url.edu/api/v2/events",res
      );
      this.events = await response.json();
    } catch (error) {
      console.log(error);
    }
    try {
      const res = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://puigmal.salle.url.edu/api/v2/events/best",
        res
      );
      this.bestEvents = await response.json();
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      dataEvent: {
        name: "",
        image: "",
        location: "",
        description: "",
        eventStart_date: "",
        eventEnd_date: "",
        n_participators: "",
        type: "",
      },
      events: [],
      error: [],
      bestEvents: [],
      Location: "",
      Date: "",
      Keyword:"",
      crearEsdeveniment: false,
      filtrarEsdeveniment: false
    };
  },
  methods: {
    showEvent(id) {
      this.$router.push({
        name: "Esdeveniments2",
        params: {
          id: id,
        },
      });
    },

    showMessageFillCamps() {
      try {
        this.error = [];
        if (!this.checkEmptyFields()) {
          this.createEvent();
        } else {
          throw new Error(
            "There is some empty fields! Please enter all the fields"
          );
        }
      } catch (error) {
        this.error.push(error.message);
      }
    },

    checkEmptyFields() {
      if (this.dataEvent.name.length == 0) {
        return true;
      }
      if (this.dataEvent.image.length == 0) {
        return true;
      }
      if (this.dataEvent.location.length == 0) {
        return true;
      }
      if (this.dataEvent.description.length == 0) {
        return true;
      }
      if (this.dataEvent.eventStart_date.length == 0) {
        return true;
      }
      if (this.dataEvent.eventEnd_date.length == 0) {
        return true;
      }
      if (this.dataEvent.n_participators == 0) {
        return true;
      }
      if (this.dataEvent.type.length == 0) {
        return true;
      }
      return false;
    },

    async createEvent() {
      await fetch("http://puigmal.salle.url.edu/api/v2/events", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.dataEvent),
      })
        .then((res) => {
          console.log(this.dataEvent);
          if (res.status == 200) {
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
    async participateEvent(id) {
      await fetch(
        `http://puigmal.salle.url.edu/api/v2/events/${id}/assistances`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.status == 200) {
          this.$notify({type: "success", text:"T'has apuntat al event!"});
        }else{
          this.$notify({type: "error", text:"Ja t'has apuntat en aquest event!"});
        }
      });
    },
    async searchEvent(Location,Keyword,Date) {
        let strUrlParams = "";

        if(Location.length!=0){ 
          let connector = strUrlParams === "" ? "?" : "&";
          strUrlParams += connector+"location="+Location
        }

        if(Keyword.length!=0){ 
          let connector = strUrlParams === "" ? "?" : "&";
          strUrlParams += connector+"keyword="+Keyword
        }

        if(Date.length!=0){ 
          let connector = strUrlParams === "" ? "?" : "&";
          strUrlParams += connector+"date="+Date
        }

        await fetch(`http://puigmal.salle.url.edu/api/v2/events/search${strUrlParams}`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
          },
        })
        .then(response => response.json()) 
        .then((data) => { this.events = data; })                
        
    },
  },
};
</script>


<style scoped>
a {
  text-decoration: none;
}

body {
  background: -webkit-linear-gradient(bottom, #2a0aa0, #07ffc9);
}
.titolEsde {
  color: #610ece;
}

.titolEsde:hover {
  color: #2a0aa0;
}

html {
  height: 100%;
}
main {
  background: -webkit-linear-gradient(bottom, #2a0aa0, #07ffc9);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  /*min-height: calc(90vh - var(--footer-padding) * 2 - var(--footer-height));*/
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
  margin: 2rem auto 8.1rem auto;
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

input[type="text"] {
  width: 700px;
  padding: 12px 20px;
  margin: 3px 0;
  box-sizing: border-box;
  border: 2px solid gray;
  border-radius: 10px;
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

.info-event {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.search-event {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.create-event {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.box {
  background-color: darkgrey;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  
}

.box2 {
  background-color: darkgrey;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
}


.row-box {
  display: flex;
  flex-direction: row;
  width: 25%;
  gap: 10px;
}

.column-box {
  display: flex;
  flex-direction: column;
  max-width: 150px;
  max-height: 300px;
  text-align: left;
}

.column-box2 {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
  align-items: center;
}
.camp-esdeveniment {
  width: 200px;
  padding: 12px 20px;
  margin: 3px 0;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
}

.descripcio-esdeveniment {
  width: 200px;
  height: 10px;
  padding: 12px 20px;
  margin: 3px 0;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
}

#create-esdeveniment {
  background: blue;
  border: none;
  border-radius: 21px;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  transition: 0.25s;
  width: 150px;
}

.list-events {
  display: flex;
  flex-direction: row;
}

.list-box-events {
  background-color: lightgray;
  width: 90%;
  height: 20%;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

h1 {
  font-size: 32px;
}

.v2 {
  font-size: 24px;
}

h3 {
  font-size: 14px;
}
.box-timeline {
  background-color: lightgray;
  width: 50%;
  padding: 40px;
  margin-top: 20px;
}

.timeline2 {
  display: flex;
  flex-direction: column;
}

/*********************************************/
html,
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
}
body {
  background: #25303b;
}
div#timeline {
  width: 100%;

  margin: auto auto;
  position: relative;
}
div#timeline:before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 0;
  margin: 0 0 0 -1px;
  width: 2px;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
}
div#timeline article {
  width: 100%;
  margin: 0 0 20px 0;
  position: relative;
}
div#timeline article:after {
  content: "";
  display: block;
  clear: both;
}
div#timeline article div.inner {
  width: 40%;
  float: left;
  margin: 5px 0 0 0;
  border-radius: 6px;
}
div#timeline article div.inner span.date {
  display: block;
  width: 60px;
  height: 50px;
  padding: 5px 0;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0 0 0 -32px;
  border-radius: 100%;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  background: #25303b;
  color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 7px #25303b;
}
div#timeline article div.inner span.date span {
  display: block;
  text-align: center;
}
div#timeline article div.inner span.date span.day {
  font-size: 20px;
}
div#timeline article div.inner span.date span.month {
  font-size: 18px;
}
div#timeline article div.inner span.date span.year {
  font-size: 10px;
}
div#timeline article div.inner h2 {
  padding: 10px;
  margin: 0;
  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: -1px;
  border-radius: 6px 6px 0 0;
  position: relative;
}
div#timeline article div.inner h2:after {
  content: "";
  position: absolute;
  top: 20px;
  right: -5px;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
}
div#timeline article div.inner p {
  padding: 15px;
  margin: 0;
  font-size: 14px;
  background: #fff;
  color: #656565;
  border-radius: 0 0 6px 6px;
}
div#timeline article:nth-child(2n + 2) div.inner {
  float: right;
}
div#timeline article:nth-child(2n + 2) div.inner h2:after {
  left: -5px;
}
div#timeline article:nth-child(1) div.inner h2 {
  background: #e74c3c;
}
div#timeline article:nth-child(1) div.inner h2:after {
  background: #e74c3c;
}
div#timeline article:nth-child(2) div.inner h2 {
  background: #2ecc71;
}
div#timeline article:nth-child(2) div.inner h2:after {
  background: #2ecc71;
}
div#timeline article:nth-child(3) div.inner h2 {
  background: #e67e22;
}
div#timeline article:nth-child(3) div.inner h2:after {
  background: #e67e22;
}
div#timeline article:nth-child(4) div.inner h2 {
  background: #1abc9c;
}
div#timeline article:nth-child(4) div.inner h2:after {
  background: #1abc9c;
}
div#timeline article:nth-child(5) div.inner h2 {
  background: #9b59b6;
}
div#timeline article:nth-child(5) div.inner h2:after {
  background: #c177df;
}
div#timeline article:nth-child(6) div.inner h2 {
  background: #e74c3c;
}
div#timeline article:nth-child(6) div.inner h2:after {
  background: #e74c3c;
}
div#timeline article:nth-child(7) div.inner h2 {
  background: #2ecc71;
}
div#timeline article:nth-child(7) div.inner h2:after {
  background: #2ecc71;
}
div#timeline article:nth-child(8) div.inner h2 {
  background: #e67e22;
}
div#timeline article:nth-child(8) div.inner h2:after {
  background: #e67e22;
}
div#timeline article:nth-child(9) div.inner h2 {
  background: #1abc9c;
}
div#timeline article:nth-child(9) div.inner h2:after {
  background: #1abc9c;
}
div#timeline article:nth-child(10) div.inner h2 {
  background: #9b59b6;
}
div#timeline article:nth-child(10) div.inner h2:after {
  background: #c177df;
}
</style>