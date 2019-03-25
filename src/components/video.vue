<template>
    <div v-if="open" class="cont">
        <div class="flex justify-center container">
                <div  class="text"><span> Nepamiršk nusikopijuoti nuorodos, kad video galėtum pažiūrėti ir vėliau! </span>
                </div>
            </div>
        <div style="position:relative; padding-bottom:56.25%; overflow:hidden;"><iframe src="https://cdn.jwplayer.com/players/MMJOk4KO-jsqcZH27.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen  class="video"></iframe></div>
        <div class="small items-center justify-center ">
            <q-btn @click="download" class="btn"  icon-right="cloud_download" > Čia gali atsisiųsti maistingų medžiagų lentelę</q-btn>
            <a target="_blank" href="https://www.facebook.com/groups/2242723429308000/">
                <img src="../statics/images/fb.svg">
            </a>
            <a target="_blank" clas href="https://www.facebook.com/groups/2242723429308000/">
                <div class="text">Prisijunk prie mitybos akseleratoriaus grupės</div>
            </a>
        </div>
    </div>
</template>

<script>
function getUrlVars () {
  let vars = {}
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value
  })
  return vars
}
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    download () {
      window.open(window.origin + '/statics/Maistingosios-medžiagos.xlsx')
    }
  },
  created () {
    let data = getUrlVars(window.location.href)['data']
    let encoded = '?' + atob(decodeURIComponent(data))
    let d = {}
    encoded.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      d[key] = value
    })
    if (d.projectid === 138506 || d.projectid === '138506') {
      this.open = true
    }
  }
}
</script>

<style>
.video {
  position:absolute;
}
.cont {
    padding: 30px;
}
.btn {
    background-color: #47c8ac;
    color: white;
    margin-left: 5px;
    margin-right: 10px;
}
a {
    color: #FFFFFF;
    text-decoration: none;
}
.container {
    padding: 0 15px;
    padding-top: 20px;
    text-align: center;
}
.small {
    width: 100%;
    display: flex;
    padding-left: 15px;
    padding-top: 20px;
}
.text {
    font-size: 20px;
    padding-bottom: 10px;
    color: rgb(252, 128, 0);
    text-decoration: none;
}
@media only screen and (max-width: 500px) {
    .text {
        font-size: 15px;
    }
    .btn {
        width: 100vw;
    }
    .video {
      padding: 10px;
    }
}
</style>
