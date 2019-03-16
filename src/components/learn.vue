<template>
    <div class="text">
      <div class="fit flex justify-center">
      <div class="headers-text-size main-header">Seminaro metu jūs sužinosite</div>
      <div class="line" />
      </div>
      <div class="learn-container ">
        <div class="know-parts">
          <div class="box">
            <div class="paddings">
              <div class="normal-text-size flex justify-center"><div class="card-head">MAISTINGOSIOS <br/>MEDŽIAGOS </div><img src="../statics/images/nutrition.svg" alt="Flowers" class="icon"></div>
              <div class="paragraph mm ">
                <li>baltymai</li>
                <li>angliavandeniai</li>
                <li>riebalai</li>
                <li>vanduo</li>
                <li>vitaminai/mineralai</li>
                <li>saldikliai</li>
                <li>kofeinas</li>
                <li>druska</li>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="paddings">
              <div class="normal-text-size flex justify-center"><div class="card-head"> HORMONAI</div><img src="../statics/images/ph.svg" alt="Flowers" class="icon"></div>
              <div class=" paragraph h">
                <li>testosteronas</li>
                <li>estrogenas</li>
                <li>insulinas</li>
              </div>
              <div class="normal-text-size ">PH BALANSAS</div>
              <div class="paragraph h">
                <li>šarmai</li>
                <li>rūgštys</li>
              </div>
              <div class="normal-text-size">AR SKAIČIUOJATE <br /> KALORIJAS?</div>
            </div>
          </div>
          <div class="box">
            <div class="paddings">
              <div class="normal-text-size flex justify-center"><div class="card-head">MITYBOS PLANAS</div> <img src="../statics/images/dietplan.svg" alt="Flowers" class="icon"></div>
              <div class="paragraph mp">
                  <li>baltymai</li>
                  <li>angliavandeniai</li>
                  <li>riebalai</li>
                  <li>vanduo</li>
                  <li>vitaminai/mineralai</li>
                  <li>saldikliai</li>
                  <li>kofeinas</li>
                  <li>druska</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <q-btn class="green-color button">Noriu sau skirti šias 2 val!</q-btn>
    </div>
</template>

<script>
export default {
  name: 'learn'
}
</script>

<style scoped>
.green-color {
  background-color: #3BB796;
}
.card-head {
  margin-right: 5px;
  width: 100%;

}
.text {
  text-align: center;
  max-width: 1600px;
  margin:auto;
}
.main-header {
  width: 100%;
}
.icon {
  height: 50px;
  margin-top: 10px;
}
@media only screen and (max-width: 700px) {
  .text {
    text-align: center;
    padding: 20px 0px;
  }
  .paragraph {
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    line-height: 150%;
  }
  .paddings {
    padding: 0 50px;
  }
  .box {
    width: 100%;
    margin-bottom: 50px;
  }
  .know-parts {
    text-align: center;
    margin: 10px;
  }
  .button {
    color: white;
    font-size: 18px;
  }
}
@media only screen and (min-width: 501px ) and ( max-width: 700px) {
  .know-parts {
    text-align: center;
    margin: 60px;
  }
  .text {
    text-align: center;
    padding: 20px 10px;
  }
}
@media only screen and (min-width: 701px ) {

  .know-parts {
    text-align: center;
  }
  .normal-text-size {
    font-size: 20px;
  }
  .text {
    text-align: center;
    padding: 20px 20px;
  }
  .box {
    max-width: 320px;
    width: 50%;
    margin: 0px 2px;
    margin-bottom: 50px;
  }
  .know-parts {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .paragraph {
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    line-height: 150%;
    padding-left: 20px;
  }
  .button {
    color: white;
    font-size: 25px;
  }
}
@media only screen and (min-width: 1000px )  {
  .text {
    text-align: center;
  }
  .box {
    margin: 30px 50px;
  }
}
.blue-color {
  background-color: #0080ff;
}

li {
  list-style: none;
}
.mm > li::before {
  content: "\2022";
  color: #0080ff;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.h > li::before {
  content: "\2022";
  color: #ff8040;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.mp > li::before {
  content: "\2022";
  color: #3BB796;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.box {
  border: 0.5px solid #dcdcdc;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0px 7px #f3f3f3c7;
}
</style>
