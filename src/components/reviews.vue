<template>
    <div class="flex justify-center reviews">
      <div class="align-center header">
        <b class="color-semi-black headers-text-size">Dalyvių atsiliepimai</b>
        <div class="line" />
      </div>
      <iframe class="video"
      src="https://www.youtube.com/embed/nQgPvknsgYo">
      </iframe>
    </div>
</template>

<script>
export default {
  name: 'reviews'
}
</script>

<style>
.align-center {
  text-align: -webkit-center;
  width: 100%;
}
@media only screen and (max-width: 900px) {
  .header {
    padding-top: 10px;
    height: 15%;
  }
  .video {
    width: 100%;
    height: 85%;
  }
  .reviews {
    padding: 15px;
  }
}
@media only screen and (min-width: 901px )  {
 .video {
    width: 80%;
    height: 85%;
  }
}
</style>
