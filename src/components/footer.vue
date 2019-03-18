<template>
    <div class="container">
      <div class="biger-box big-text-size color-semi-black">
      <b class="large-text-size">LIFE ACADEMY</b><br/>
      <a class="color-semi-black" href="https://www.lifeacademy.lt">www.lifeacademy.lt</a><br/>
      </div>
      <div class="smaller-box color-grey paragraphs-size">
        vadimas@zizas.lt<br/>
        MB Gyvenimo Akseleratorius<br/>
        +370 652 19 404<br/>
        Vilnius<br/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'footerPage'
}
</script>

<style scoped>
.container {
  padding: 5px;
  height: 100%;
  background-color: white;
  border-top: 1px solid #d7d7d7;
}
@media only screen and (max-width: 700px) {
  .container {
    display: inline-block;
    width: 100%;
  }
  .biger-box {
    width: 100%;
    text-align: center;
  }
  .smaller-box{
    width: 100%;
    padding: 2%;
    text-align: center;
  }
}
@media only screen and (min-width: 701px) {
  .container {
    display: flex;
    width: 100%;
  }
  .biger-box {
    width: 60%;
    text-align: center;
  }
  .smaller-box{
    width: 40%;
    padding: 1%;
    text-align: right;
    margin-right: 80px;
  }
  .large-text-size {
    font-size: 35px !important;
  }
  .big-text-size {
    font-size: 20px !important;
  }
  .paragraphs-size {
    font-size: 15px !important;
  }
}
</style>
