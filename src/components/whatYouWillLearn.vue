<template>
    <div class="flex justify-center what-you-learn-container">
      <div class="align-center ">
        <b class="color-semi-black headers-text-size">Ką sužinosi šių praktinių mokymų metu?</b>
        <div class="line" />
        <div class="know-parts">
          <div class="box">
            <picture>
              <source media="(max-width: 650px)" srcset="../statics/images/imgUpload.png">
              <source media="(max-width: 465px)" srcset="../statics/images/imgUpload.png">
              <img src="../statics/images/imgUpload.png" alt="Flowers" style="width: 200px;">
            </picture>
            <br/>
            <b class="normal-text-size headings">MAISTINGOSIOS MEDŽIAGOS</b>
            <p class="paragraphs-size color-grey paragraph">
              Pagaliau suprasi, kurios maistingosios <br/>
              medžiagos kenkia ir kurios padeda<br/>
              Tavo organizmui: baltymai,<br/>
              angliavandeniai, riebalai, kalorijos,<br/>
              saldikliai, vanduo, druska – šie daug<br/>
              kartų girdėtų žodžiai įgaus naują<br/>
              prasmę. Įrodysiu, kad lieknėjant<br/>
              nereikia skaičiuoti jokių kalorijų ir kad<br/>
              riebalai mažai ką bendro turi su<br/>
              nereikalingais kilogramais.
            </p>
          </div>
          <div class="box">
            <picture>
              <source media="(max-width: 650px)" srcset="../statics/images/suits.png">
              <source media="(max-width: 465px)" srcset="../statics/images/suits.png">
              <img src="../statics/images/suits.png" alt="Flowers" style="width: 200px;">
            </picture>
            <br/>
            <b class="normal-text-size headings">pH BALANSAS HORMONAI</b>
            <p class="paragraphs-size color-grey paragraph">
              Pagaliau suprasi, kurios maistingosios <br/>
              medžiagos kenkia ir kurios padeda<br/>
              Tavo organizmui: baltymai,<br/>
              angliavandeniai, riebalai, kalorijos,<br/>
              saldikliai, vanduo, druska – šie daug<br/>
              kartų girdėtų žodžiai įgaus naują<br/>
              prasmę. Įrodysiu, kad lieknėjant<br/>
              nereikia skaičiuoti jokių kalorijų ir kad<br/>
              riebalai mažai ką bendro turi su<br/>
              nereikalingais kilogramais.
            </p>
          </div>
          <div class="box">
            <picture>
              <source media="(max-width: 650px)" srcset="../statics/images/mobile.png">
              <source media="(max-width: 465px)" srcset="../statics/images/mobile.png">
              <img src="../statics/images/mobile.png" alt="Flowers" style="width: 200px;">
            </picture>
            <br/>
            <b class="normal-text-size headings">MITYBOS PLANO SUDARYMAS</b>
            <p class="paragraphs-size color-grey paragraph">
              Pagaliau suprasi, kurios maistingosios <br/>
              medžiagos kenkia ir kurios padeda<br/>
              Tavo organizmui: baltymai,<br/>
              angliavandeniai, riebalai, kalorijos,<br/>
              saldikliai, vanduo, druska – šie daug<br/>
              kartų girdėtų žodžiai įgaus naują<br/>
              prasmę. Įrodysiu, kad lieknėjant<br/>
              nereikia skaičiuoti jokių kalorijų ir kad<br/>
              riebalai mažai ką bendro turi su<br/>
              nereikalingais kilogramais.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'whatYouWillLearn'
}
</script>

<style scoped>
.headings {
  color: rgb(211, 179, 121);
}
.align-center {
  text-align: -webkit-center;
  width: 100%;
}
.know-parts {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
@media only screen and ( max-width: 320px) {
  .box {
    padding: 0px 30px 10px 30px;
  }
}
@media only screen and ( max-width: 700px) {
  .paragraph {
    margin-top: 20px;
  }
  .what-you-learn-container {
    padding: 20px;
  }
  .know-parts {
    display: inline-block;
    margin-top: 0px;
  }
  .box {
    border: solid white 2px;
    padding: 0px 40px 10px 40px;
    margin-bottom: 50px;
  }
}
@media only screen and (min-width: 501px ) and ( max-width: 700px) {
  .paragraph {
    margin-top: 30px;
  }
}

@media only screen and (min-width: 701px ) and ( max-width: 900px) {
  .paragraph {
    margin-top: 20px;
  }
  .paragraphs-size {
    font-size: 15px;
  }
  .know-parts {
    display: flex;
    margin-top: 0px;
  }
  .box {
    border-right: solid white 1px;
    padding: 0px 5px 0px 5px;
    margin-bottom: 20px;
  }
}
@media only screen and (min-width: 901px )  {
  .paragraph {
    margin-top: 20px;
  }
  .paragraphs-size {
    font-size: 16px;
  }
  .know-parts {
    display: flex;
    margin-right: 5px;
  }
  .box {
    padding: 0px 5px 0px 5px;
    margin-bottom: 20px;
  }
  .align-center {
    padding: 20px;
  }
}
@media only screen and (min-width: 1000px ) {
  .align-center {
    padding: 50px;
  }
}
</style>
