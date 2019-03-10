<template>
  <q-page>
    <introduction />
    <howOrganizmWorks />
    <whatYouWillLearn />
    <reviews />
    <haveDoubts />
    <learn />
    <pageFooter />
  </q-page>
</template>

<style>
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
