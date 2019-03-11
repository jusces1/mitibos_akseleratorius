<template>
    <div class="flex justify-center">
      <div class="learn-container">
        <div class="know-parts">
          <div class="column">
            <div class="box paddings">
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
           <div class="circle blue-color" >1</div>
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
            <div class="circle orange-color" >2</div>
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
            <div class="circle green-color" >3</div>
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
.circle {
    color: white;
    border-radius: 50%;
    margin-top: -12%;
    width: 65px;
    height: 65px;
    margin-left: 40%;
    text-align: center;
    vertical-align: middle;
    line-height: 65px;
}
.blue-color {
    background-color: #0080ff;
}
.orange-color {
  background-color: #ff8040;
}
.green-color {
  background-color: #3BB796;
  margin-top: 0%;
}
.paddings {
  padding: 50px;
}
.paragraph {
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  line-height: 150%;
}
.box {
  border: 1px solid white;
  width: 300px;
  height: 400px;
  margin-right: 50px;
}
.learn-container {
  padding: 50px;
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
.know-parts {
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 50px;
}
.button {
  color: white;
  font-size: 30px;
  height: 50px;
}
</style>
