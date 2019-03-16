<template>
  <q-page>
    <introduction class="introduction items-center" />
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
    width: 27%;
    height: 5px;
    background-color: rgb(253, 178, 101);
    margin-bottom: 30px;
}
.introduction {
  height: 100vh;
  background: #f4f2f2;
}
.headers-text-size {
  font-family: 'Segoe UI';
}

.haveDoubts {
  background: #f4f2f2;
}
@media only screen and (max-width: 320px) {
  .normal-text-size {
    font-size: 15px;
  }
  .paragraphs-size {
    font-size: 13px;
  }
  .big-text-size {
    font-size: 16px;
  }
  .headers-text-size {
    font-size: 20px;
  }
  .reviews {
    height: 80vh;
  }
  .introduction {
    height: 100%;
  }
}
@media only screen and (min-width: 321px ) and ( max-width: 500px) {
  .normal-text-size {
    font-size: 17px;
  }
  .paragraphs-size {
    font-size: 15px;
  }
  .big-text-size {
    font-size: 19px;
  }
  .headers-text-size {
    font-size: 25px;
  }
  .reviews {
    height: 80vh;
  }
  .introduction {
    height: 100%;
  }
}

@media only screen and (min-width: 501px ) and ( max-width: 700px) {
  .normal-text-size {
    font-size: 20px;
  }
  .paragraphs-size {
    font-size: 17px;
  }
  .big-text-size {
    font-size: 22px;
  }
  .headers-text-size {
    font-size: 30px;
  }
  .reviews {
    height: 95vh;
  }
  .introduction {
    height: 100%;
  }
}

@media only screen and (min-width: 701px )  {
  .normal-text-size {
    font-size: 25px;
  }
  .paragraphs-size {
    font-size: 20px;
  }
  .big-text-size {
    font-size: 30px;
  }
  .headers-text-size {
    font-size: 35px;
  }
  .reviews {
    height: 100vh;
  }
}
@media only screen and (min-width: 1600px )  {
  .introduction {
    height: 100%;
  }
}
@media only screen and (min-width: 1500px )  {
  .paragraphs-size {
    font-size: 20px !important;
  }
}
.color-white {
  color: white;
}
.color-grey {
  color: rgb(91, 91, 91);
}
.color-semi-black {
  color: #2F2F2F;
}
.reviews {
  background-color: #f4f2f2;
}

.learn {
}
.pageFooter {
  height: 10vh;
}
.large-text-size {
  font-family: 'Segoe UI Emoji';
}
.whatYouWillLearn {
  width: 100%;
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
