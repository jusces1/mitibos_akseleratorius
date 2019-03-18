<template>
    <div class="flex justify-center reviews">
      <div class="align-center header">
        <div class="color-semi-black headers-text-size">Dalyvių atsiliepimai</div>
        <div class="line" />
      </div>
      <iframe class="video" title="video" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen 
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
.header {
  margin: 10px;
}
.reviews {
  max-width: 1600px;
  margin: auto;
  background-color: #f4f2f2;
}
@media only screen and (max-width: 900px) {
  .header {
    padding-top: 10px;
    height: 15%;
  }
  .video {
    width: 100%;
    height: 80%;
    border: 1px solid white;
  }
  .reviews {
    padding: 15px;
  }
}
@media only screen and (min-width: 901px )  {
.header {
    padding-top: 10px;
  }
 .video {
    width: 70%;
    height: 80%;
    border: 1px solid white;
  }
}
</style>
