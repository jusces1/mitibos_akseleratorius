<template>
    <div class="text">
      <b class="color-white headers-text-size ">SEMINARO METU JŪS SUŽINOSITE</b>
      <div class="learn-container ">
        <div class="know-parts">
          <div class="box">
            <div class="paddings">
              <b class="paragraphs-size color-white ">MAISTINGOSIOS <br/>MEDŽIAGOS</b>
              <div class="color-white paragraph mm ">
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
              <b class="paragraphs-size  color-white  ">HORMONAI</b>
              <div class="color-white  paragraph h">
                <li>testosteronas</li>
                <li>estrogenas</li>
                <li>insulinas</li>
              </div>
              <b class="paragraphs-size color-white  ">PH BALANSAS</b>
              <div class=" color-white  paragraph h">
                <li>šarmai</li>
                <li>rūgštys</li>
              </div>
              <b class="paragraphs-size color-white  ">AR SKAIČIUOJATE <br /> KALORIJAS?</b>
            </div>
          </div>
          <div class="box">
            <div class="paddings">
              <b class="paragraphs-size color-white ">MITYBOS PLANAS</b>
              <div class="color-white  paragraph mp">
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
    padding: 50px;
  }
  .box {
    border: 1px solid white;
    width: 100%;
    height: 350px;
    margin-bottom: 50px;
  }
  .know-parts {
    text-align: center;
    padding: 20px;
  }
  .button {
    color: white;
    font-size: 18px;
  }
  .circle {
    color: white;
    border-radius: 50%;
    margin-top: -10%;
    width: 65px;
    height: 65px;
    margin-left: 35%;
    text-align: center;
    vertical-align: middle;
    line-height: 65px;
  }
  .orange-color {
    background-color: #ff8040;
    margin-top: -3%;
  }
}
@media only screen and (min-width: 501px ) and ( max-width: 700px) {
  .know-parts {
    text-align: center;
    padding: 80px;
  }
  .text {
    text-align: center;
    padding: 20px 10px;
  }
  .box {
    height: 300px;
  }
}
@media only screen and (min-width: 701px ) {
  .box {
    border: 1px solid white;
    width: 50%;
    height: 350px;
    margin-bottom: 50px;
  }
  .know-parts {
    text-align: center;
  }
  .text {
    text-align: center;
    padding: 20px 20px;
  }
  .box {
    height: 300px;
    max-width: 320px;
    padding: 20px 10px;
  }
  .know-parts {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 50px;
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
    padding: 20px 50px;
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
</style>
