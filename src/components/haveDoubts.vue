<template>
    <div class="doubts-container">
      <div class="column-1">
        <b class="color-white headers-text-size">Abejoji, ar <br /> išgirsi kažką naujo?</b>
        <div class="line" />
        <p class="color-white paragraphs-size paragraph">
          Mano paties istorija prasidėjo nuo didelio entuziazmo ir meilės<br/>
          sportui: aktyvus gyvenimo būdas buvo ir yra mano<br/>
          pašaukimas, todėl gavau Lietuvos Edukologijos Universiteto diplomą.<br/>
          Tapus asmeniniu treneriu, teko pripažinti labai nemalonų faktą –<br/>
          man trūksta informacijos. Neatidėliojau ir pradėjau mokytis savarankiškai: <br/>
          daug skaičiau, dalyvavau seminaruose, bendravau su geriausiais<br/>
          šios srities specialistais. Metams bėgant, mano apetitas žinioms tik didėjo,<br/>
          todėl aukščiausiu balu baigiau dar vieną mokymo įstaigą – Neil Hill Academy.<br/>
          Per beveik dešimtmetį, praleistą sporto industrijoje,<br/>
          esu treniravęs ir konsultavęs daugiau nei 1000 žmonių.<br/>
          Man pasisekė, kad darau tai, ką moku geriausiai,<br />
           ir galiu prisidėti prie Tavo gyvenimo pokyčių.<br/>
        </p>
      </div>
      <div class="column-2">
         <picture >
          <source media="(max-width: 650px)" srcset="../statics/images/zizas.png">
          <source media="(max-width: 465px)" srcset="../statics/images/zizas.png">
          <img src="../statics/images/zizas.png" alt="Flowers" style="width:100%; height: 85%;">
        </picture>
      </div>
    </div>
</template>

<script>
export default {
  name: 'haveDoubts'
}
</script>

<style>
.doubts-container {
  display: flex;
}
.column-1 {
  width: 70%;
  padding: 50px;
}
.column-2 {
  width: 40%;
}
</style>
