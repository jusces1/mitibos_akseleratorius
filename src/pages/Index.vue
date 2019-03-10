<template>
  <q-page>
    <introduction class="introduction" />
    <howOrganizmWorks class="howOrganizmWorks"/>
    <whatYouWillLearn class="whatYouWillLearn" />
    <reviews class="reviews" />
    <haveDoubts class="haveDoubts"/>
    <learn class="learn" />
    <pageFooter class="pageFooter" />
  </q-page>
</template>

<style>
.line {
  margin-top: 10px;
  margin-bottom: 20px;
  width: 15%;
  height: 5px;
  background-color: rgb(211, 179, 121);
}
.normal-text-size {
  font-size: 25px;
}
.paragraphs-size {
  font-size: 20px;
}
.big-text-size {
  font-size: 35px;
}
.headers-text-size {
  font-size: 45px;
}
.large-text-size {
  font-size: 55px;
}
.color-white {
  color: white;
}
.color-grey {
  color: rgb(83, 83, 83);
}
.color-semi-black {
  color: #2F2F2F;
}
.introduction {
  height: 70vh;
  background-image: linear-gradient(to bottom, #ffa408, #f8b23a, #ffb639, #ffe8be, #ffffff);
}
.howOrganizmWorks {
  height: 60vh;
}
.whatYouWillLearn {
  height: 70vh;
  background-color: #F0F1F2;
}
.reviews {
  height: 90vh;
}
.haveDoubts {
  background-color: #3BB796;
  height: 50vh;
}
.learn {
  height: 70vh;
  background-image: linear-gradient( rgba(0, 0, 0, 0.815), rgba(0, 0, 0, 0.822) ), url('../statics/images/popular-healthy-foods.jpg');
  background-size: cover;
}
.pageFooter {
  height: 10vh;
}
</style>

<script>
import introduction from '../components/introduction'
import howOrganizmWorks from '../components/howOrganizmWorks'
import reviews from '../components/reviews'
import whatYouWillLearn from '../components/whatYouWillLearn'
import haveDoubts from '../components/haveDoubts'
import learn from '../components/learn'
import pageFooter from '../components/footer'

export default {
  name: 'mainPage',
  components: {
    introduction,
    howOrganizmWorks,
    reviews,
    whatYouWillLearn,
    haveDoubts,
    learn,
    pageFooter
  }
}
</script>
