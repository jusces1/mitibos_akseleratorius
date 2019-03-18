<template>
    <div class="main-container flex  items-center">
        <div class="container-left flex justify-center items-center">
          <picture class="logo">
            <source media="(max-width: 650px)" srcset="../statics/images/logo-accscelerator.svg">
            <source media="(max-width: 465px)" srcset="../statics/images/logo-accscelerator.svg">
            <img src="../statics/images/logo-accscelerator.svg" alt="diet accscelerator logo" class="logo">
          </picture>
        </div>
        <div class="container-right">
          <span class="large-text-size">MITYBOS AKSELERATORIUS</span><br />
          <span class="big-text-size">PRAKTINIAI MOKYMAI</span><b class="big-text-size gift">+ DOVANA</b>
          <hr />
          <br />
          <p class="color-grey paragraphs-size">SUREGULIUOK SAVO MITYBĄ BE DIDELIŲ PASTANGŲ TIK PER 2 VALANDAS!</p>
          <p class="color-grey paragraphs-size">2019.02.26 Dalyvauk gyvai! Negali atvykti? Žiūrėk įrašą</p>
          <p class="color-grey paragraphs-size gift display">+ Mitybos plano sudarymo instrukcijos ir mokymų medžiaga!!</p>
          <button data-cta="+ Mitybos plano sudarymo instrukcijos ir mokymų medžiaga!!">
            Pasinaudoti pasiūlimu
          </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'intorduction'
}
</script>

<style scoped lang="scss">
.main-container {
  max-width: 1600px;
  margin: auto;
}
.display {
  display: none;
}
$c-white:#fff;

button {
  border-radius:2px;
  padding:15px 20px;
  color:$c-white;
  background:#FB9F3A;
  border:none;
  font-size:18px;
  text-align:center;
  position:relative;
  box-sizing:border-box;
}
.logo {
  width: 100%;
  height: 100%;
}
.gift {
  color: #47C8AC;
  margin-left: 10px;
}

@media only screen and ( max-width: 700px) {
  .large-text-size {
    font-size: 35px;
  }
  .container-left {
    width: 100%;
    height: 37%;
  }
  .container-right {
    width: 100%;
    height: 63%;
  }
  .main-container {
    padding: 10px;
    text-align: center;
  }
  .display {
    display: inline-block;
  }
}


@media only screen and ( min-width: 701px) and ( max-width: 1009px) {
  .display {
    display: inline-block;
  }
  .large-text-size {
    font-size: 45px;
  }
  .paragraphs-size {
    font-size: 15px;
  }
  .big-text-size {
    font-size: 20px;
  }
}

@media only screen and ( min-width: 1010px) {
  .large-text-size {
    font-size: 65px;
  }
  .paragraphs-size {
    font-size: 20px;
  }
  .big-text-size {
    font-size: 25px;
  }
  button{
     &:before{
      content: attr(data-cta);
      display:block;
      border-radius:2px;
      position:absolute;
      width:550px;
      background:#47C8AC;
      top:0;
      left:0;
      padding:15px 20px;
      z-index:-1;
      box-sizing:border-box;
      opacity:0;
      animation-fill-mode: forwards;
      animation-direction:alternate;
      animation: hide .5s 1;
    }
    
    &:hover{
      cursor:pointer;
      animation: bounce .5s 1;
      
      &:before{
        animation: reveal .5s 1 forwards;
        transition-delay:2s;
      }
    }
  }
  @-webkit-keyframes hide{
    0% {left:0;opacity:1;z-index:1;}
    50% {left:100%;}
    100% {left:0;opacity:1;z-index:-1;}
  }

  @-webkit-keyframes reveal{
    0% {left:0;opacity:1;z-index:-1;}
    50% {left:100%;}
    100% {left:0;opacity:1;z-index:1;}
  }
}

@media only screen and ( min-width: 700px) {
  .container-left {
    width: 50%;
    padding-right: 10px;
  }
  .container-right {
    width: 50%;
  }
  .main-container {
    padding: 30px;
  }
}
@media only screen and ( min-width: 1000px) {
  .main-container {
    padding: 70px;
  }
}
@media only screen and ( min-width: 600px) and ( max-height: 600px)    {
  .container-left {
    width: 50%;
    height: 100%;
  }
  .container-right {
    width: 50%;
    height: 100%;
  }
  .large-text-size {
    font-size: 28px;
  }
  .paragraphs-size {
    font-size: 15px;
  }
  .big-text-size {
    font-size: 18px;
  }
}
</style>
