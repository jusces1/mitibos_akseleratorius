<template>
    <div class="container" > 
       <div class="text">
        <h2 class="headers-text-size color-grey head">
          Ar tikrai žinai, kaip veikia tavo organizmas?
        </h2>
        <div class="line" />
        <p class="paragraphs-size color-grey paragraph">
          Ar pastebėjai, kad visos dietos turi tik trumpalaikį poveikį, o mitybos specialistų
          sudaryti planai po metų nebeveikia?
          Taip yra todėl, kad gerai nesupranti savo organizmo veikimo principų ir nežinai, kaip
          vieną kartą visiems laikams jam padėti nebegrįžti prie klaidingų mitybos įpročių.
          Žinoma, aš galiu Tau sudaryti mitybos planą ir palinkėti sėkmės, tačiau mane domina
          tik ilgalaikis efektas: šį seminarą sukūriau tam, kad puikiai jaustumeisi ne laikinai, o
          kiekvieną dieną – ir tam reikia vos kelių teisingų žingsnių!
        </p>
       </div>
       <div class="foto">
          <img src="../statics/images/settings.svg" alt="spinning settigns icon" class="settings-1 spin">
          <img src="../statics/images/settings.svg" alt="spinning settigns icon" class="settings-2 spin-back">
       </div>
    </div>
</template>

<script>
export default {
  name: 'howOrganizmWorks'
}
</script>

<style scoped>
.container {
  display: flex;
  padding: 30px;
  max-width: 1600px;
  margin: auto;
}
.text {
  width: 55%;
  border: 0.5px solid #dcdcdc;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0px 7px #f3f3f3c7;
}
.foto {
  width: 40%;
}
h2 {
  margin:0;
}

.spin {
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
}
.spin-back {
  animation-name: spin-back;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
}
.paragraph {
  width: 80%;
}
@media only screen and (max-width: 500px ) {
  .container {
    display: inline-block;
  }
  .settings-1 {
    animation-duration: 15000ms;
    width: 40%;
  }
  .settings-2 {
    display: none;
  }
  .foto {
    width: 100%;
    text-align: center;
    margin-top: -40%;
  }
  .line {
    width: 100%;
  }

  .text {
    width: 100%;
    text-align: center;
  }
  .paragraph {
    width: 100%;
    margin-bottom: 42%;
  }
}
@media only screen and (min-width: 500px ) and (max-width: 850px ) {
  .settings-1 {
    animation-duration: 15000ms;
    width: 100%;
  }
  .settings-2 {
    display: none;
  }
  .foto {
    padding-left: 10%;
    padding-top: 40px;
    margin-left: -30%;
    margin-top: 20%;
    padding-right: 5%;
    width: 30%;
  }
  .text {
    width: 100%;
  }
}

@media only screen and (min-width: 850px ) and (max-width: 1100px ) {
  .settings-1 {
    animation-duration: 15000ms;
    float: left;
    width: 100%;
  }
  .settings-2 {
    animation-duration: 15000ms;
    float: right;
    width: 80%;
  }
  .foto {
    padding-left: 5%;
    padding-top: 40px;
    width: 30%;
  }
  .text {
    width: 65%;
  }
}
@media only screen and (min-width: 1100px ) {
  .settings-1 {
    width: 60%;
    margin-bottom: -15%;
    animation-duration: 15000ms;
    margin-left: 8%;
  }
  .settings-2 {
    width: 50%;
    float: right;
    animation-duration: 15000ms;
  }
  .text {
    width: 55%;
  }
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
@keyframes spin-back {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(-360deg);
    }
}
</style>
