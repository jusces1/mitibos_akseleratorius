<template>
    <div class="flex justify-center what-you-learn-container">
      <div class="align-center ">
        <div class="color-semi-black headers-text-size">Ką sužinosi šių praktinių mokymų metu?</div>
        <div class="line" />
        <div class="know-parts">
          <div class="box">
            <img src="../statics/images/nutrition.svg" alt="nutriotions" class="icon">
            <br/>
            <b class="normal-text-size color-grey">MAISTINGOSIOS MEDŽIAGOS</b>
            <p class="paragraphs-size color-grey paragraph">
              Pagaliau suprasi, kurios maistingosios 
              medžiagos kenkia ir kurios padeda
              Tavo organizmui: baltymai,
              angliavandeniai, riebalai, kalorijos,
              saldikliai, vanduo, druska – šie daug
              kartų girdėtų žodžiai įgaus naują
              prasmę. Įrodysiu, kad lieknėjant
              nereikia skaičiuoti jokių kalorijų ir kad
              riebalai mažai ką bendro turi su
              nereikalingais kilogramais.
            </p>
          </div>
          <div class="box">
            <img src="../statics/images/ph.svg" alt="pH balanse" class="icon">
            <br/>
            <b class="normal-text-size color-grey">pH BALANSAS, HORMONAI</b>
            <p class="paragraphs-size color-grey paragraph">
              Laimingas žmogus orientuojasi į ilgalaikę perspektyvą ir sveikatingumą, 
              todėl seminaro metu plačiau papasakosiu apie šarmų ir rūgščių pusiausvyros 
              svarbą: kas tai yra, kaip tai veikia ir ką tai duoda. Ar žinojai, kad teisinga 
              pH pusiausvyra beveik visiškai sumažina ligų bei susirgimų tikimybę?
            </p>
          </div>
          <div class="box">
            <img src="../statics/images/dietplan.svg" alt="diet plan" class="icon">
            <br/>
            <b class="normal-text-size color-grey">MITYBOS PLANO SUDARYMAS</b>
            <p class="paragraphs-size color-grey paragraph">
            Papasakosiu Tau viską, ką turi žinoti: galėsi pats lengvai susidaryti mitybos planą ir juo vadovautis likusį gyvenimą.
             Pateiksiu visus pažangiausius mokslinių tyrimų duomenis ir išmokysiu atsisveikinti su 
             dietomis bei kitais beverčiais draudimais! Juk nori išsaugosi savo sveikatą, sutaupyti laiką ir pinigus?
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

.align-center {
  text-align: -webkit-center;
  width: 100%;
}
.know-parts {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.icon {
  height: 150px;
}
.what-you-learn-container {
  max-width: 1600px;
  margin: auto
}

@media only screen and ( max-width: 330px) {
  .paragraphs-size  {
    font-size: 15px;
  }
}
@media only screen and ( min-width: 330px) and ( max-width: 700px) {
  .paragraphs-size  {
    font-size: 17px;
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
    margin-bottom: 50px;
  }
  .icon {
    height: 110px;
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
    border-right: solid #959595  1px;
    padding: 0px 15px 0px 15px;
    margin-bottom: 20px;
  }
  .icon {
    height: 90px;
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
    width: 25%;
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
.line {
  width: 50%;
}
</style>
