<template>
 <q-page>
    <introduction class="introduction items-center" @pay="pay"/>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        v-back-to-top
        round
        class="scroll-top"
        icon="keyboard_arrow_up"
      />
    </q-page-sticky>
    <howOrganizmWorks class="howOrganizmWorks"/>
    <whatYouWillLearn class="whatYouWillLearn" />
    <haveDoubts class="haveDoubts"/>
    <learn class="learn" @pay="pay" />
    <reviews class="reviews" />
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
.scroll-top {
  background-color: #FB9F3A;
  color: white;
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
  padding-top: 50px;
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
import introduction from './introduction'
import howOrganizmWorks from './howOrganizmWorks'
import reviews from './reviews'
import whatYouWillLearn from './whatYouWillLearn'
import haveDoubts from './haveDoubts'
import learn from './learn'
import pageFooter from './footer'
import md5 from 'js-md5'
const encodeDataToURL = (data) => {
  return Object
    .keys(data)
    .map(value => `${value}=${encodeURIComponent(data[value])}`)
    .join('&')
}
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
  },
  methods: {
    pay () {
      let date = new Date()
      const paramsArray = {
        projectid: 138506,
        orderid: 'MITSEM' + date.getMonth() + '' + date.getDate() + '' + date.getHours() + '' + date.getMinutes() + '' + date.getSeconds(),
        accepturl: window.location.href + 'video',
        cancelurl: window.location.href,
        callbackurl: window.location.href,
        version: '1.6',
        amount: 4700,
        currency: 'EUR',
        country: 'LT',
        test: 1
      }
      let url = encodeDataToURL(paramsArray)
      let encoded = window.btoa(url)
      const sign = md5(encoded + '105890ae17da7c441bd2dd0dee06a748')
      window.open(`https://www.paysera.com/pay?data=${encoded}&sign=${sign}`, '_self')
    }
  }
}
</script>
