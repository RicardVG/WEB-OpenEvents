<template>
    <main>
      <div class="card">
        <div class="card-content">
          <div class="info-event">
            <section class="list-events">
                <div class="list-box-events">
                  <div class="column-box">
                   <img :src="this.event.image" @error="$event.target.src='https://i.ibb.co/ssj3X3T/585e4beacb11b227491c3399.png'"/> 
                  </div>
                  <div class="column-box">
                    <h1 style="font-size: 20pt">{{ event.name }}</h1>
                      &nbsp;&nbsp;
                  <h3><b>Date:</b> {{ event.date }}</h3>
                  <h3><b>Location:</b> {{ event.location }}</h3>
                  <h3><b>Description:</b> {{ event.description }}</h3>
                  <h3><b>Event Start Date:</b> {{ event.eventStart_date }}</h3>
                  <h3><b>Event End Date:</b> {{ event.eventEnd_date }}</h3>
                  <h3><b>Num Participators:</b> {{ event.n_participators }}</h3>
                  <h3><b>Event Type:</b> {{ event.type }}</h3>
                    <div class="row-share-participate">
                      <input
                        class="submit-btn"
                        type="submit"
                        name="submit"
                        value="Participar"/>
                    </div>
                  </div>
                </div>
            </section>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
export default {
  async beforeCreate() {
          let res = await fetch(`http://puigmal.salle.url.edu/api/v2/events/${this.$route.params.id}`,{
              method: "GET",
              headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"), 
                "Content-Type": "application/json",
              },        
            })
        res = await res.json();
        this.event= res[0];
        console.log(this.$route.params.id);
  
    },
    data() {
        return {
            event: [],
        };
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
  height: 450px;
  margin: 6rem auto 8.1rem auto;
  width: 950px;
}
.card-content {
  padding: 30px 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
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



.box {
  background-color: darkgrey;
  width: 800px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.column-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.column-box img{
  max-width: 90%;
  max-height: 90%;
}

.column-box2 {
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 30px;
  gap: 10px;
}
.titol-esdeveniment {
  width: 200px;
  padding: 12px 20px;
  margin: 3px 0;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
}

.descripcio-esdeveniment {
  width: 400px;
  height: 100px;
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
  flex-direction: column;
}

.list-box-events {
  background-color: lightgray;
  max-height: 55%;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

h1 {
  font-size: 32px;
}


.row-share-participate {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
}

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
  font-size: 10px;
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
</style>