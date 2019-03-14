<template>
    <div class="organizm-works-section">
       <div class="foto">
         <picture>
          <source media="(max-width: 650px)" srcset="../statics/images/organizmas.jpg">
          <source media="(max-width: 465px)" srcset="../statics/images/organizmas.jpg">
          <img src="../statics/images/organizmas.jpg" alt="Flowers" style="width:100%;">
        </picture>
       </div>
       <div class="text">
        <b class="color-semi-black headers-text-size">
          Ar tikrai žinai, kaip veikia tavo organizmas?
        </b>
        <div class="line" />
        <p class="paragraphs-size color-grey text">
          Ar pastebėjai, kad visos dietos turi tik trumpalaikį poveikį, o mitybos specialistų<br/>
          sudaryti planai po metų nebeveikia?<br />
          Taip yra todėl, kad gerai nesupranti savo organizmo veikimo principų ir nežinai, kaip<br />
          vieną kartą visiems laikams jam padėti nebegrįžti prie klaidingų mitybos įpročių.<br />
          Žinoma, aš galiu Tau sudaryti mitybos planą ir palinkėti sėkmės, tačiau mane domina <br />
          tik ilgalaikis efektas: šį seminarą sukūriau tam, kad puikiai jaustumeisi ne laikinai, o <br/>
          kiekvieną dieną – ir tam reikia vos kelių teisingų žingsnių!
        </p>
       </div>
    </div>
</template>

<script>
export default {
  name: 'howOrganizmWorks'
}
</script>

<style scoped>

.organizm-works-section {
  padding: 90px;
  max-width: 100%;
  max-height: 100%;
}
@media only screen and (max-width: 500px) {
  .organizm-works-section {
    padding: 40px;
    display: inline-block;
  }
  .foto {
    padding: 0 10px;
    margin-bottom: 10px;
  }
  .text {
    margin-bottom: 10px;
  }
}
@media only screen and (min-width: 501px ) and ( max-width: 800px)  {
  .organizm-works-section {
    padding: 60px;
    display: inline-block;
  }
  .foto {
    padding: 0 10px;
    margin-bottom: 10px;
  }
  .text {
    margin-bottom: 10px;
  }
}
@media only screen and (min-width: 801px ) {
  .organizm-works-section {
    padding: 20px;
    display: flex;
  }
  .foto {
    width: 40%;
    padding: 0 20px;
  }
  .text {
    width: 80%;
    margin-bottom: 10px;
  }
}
</style>
