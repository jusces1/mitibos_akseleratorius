<template>
    <div class="row organizm-works-section">
       <div class="col-4 foto">
         <picture>
          <source media="(max-width: 650px)" srcset="../statics/images/organizmas.jpg">
          <source media="(max-width: 465px)" srcset="../statics/images/organizmas.jpg">
          <img src="../statics/images/organizmas.jpg" alt="Flowers" style="width:100%;">
        </picture>
       </div>
       <div class="col">
        <b class="color-semi-black headers-text-size">
          Ar tikrai žinai, kaip veikia tavo organizmas?
        </b>
        <div class="line" />
        <p class="paragraphs-size color-grey">
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
.foto {
  margin-right: 50px
}
.organizm-works-section {
  padding: 90px;
}

</style>
