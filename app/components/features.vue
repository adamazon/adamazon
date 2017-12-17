<template>
  <div class="row graph">
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="100">
        <i class="fa fa-check-circle"></i>
        <i class="fa fa-star-half-full"></i> Review's grade
        <div class="details">
          The review's grade between 1 and 5 <i class="fa fa-star"></i>
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="150">
        <i class="fa fa-check-circle"></i>
        <i class="fa fa-th-list"></i> Summary length
        <div class="details">
          The review's summary length
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="200">
        <i class="fa fa-check-circle"></i>
        <i class="fa fa-list"></i> Review's length
        <div class="details">
          The review's length
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="250">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-exclamation-circle"></i> Exclamation points
        <div class="details">
          The numbers of exclamation points
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="300">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-question-circle"></i> Question marks
        <div class="details">
          The numbers of question marks
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="350">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-ellipsis-h"></i> Ellipsis
        <div class="details">
          The numbers of ellipsis
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="400">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-text-height"></i> Uppercase letters
        <div class="details">
          The numbers of uppercase letters
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="450">
        <i class="fa fa-check-circle"></i>
        <i class="fa fa-language"></i> Text analysis
        <div class="details">
          Text vectorization (TFIDF, Word2Vect)
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature" data-aos="zoom-in" data-aos-delay="500">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-dollar"></i> Product's price
        <div class="details">
          The product's price in dollars
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'features'
  }
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  @import '../scss/vars';

  .feature {
    color: white;
    background: #404040;
    padding: 10px 5px;
    text-align: center;
    border-radius: 3px;
    margin: 3px 0 10px;
    cursor: default;
    position: relative;

    .fa:not(.fa-times-circle):not(.fa-check-circle) {
      color: $amazon-color;
    }

    .fa-times-circle, .fa-check-circle {
      position: absolute;
      top: -8px;
      right: -8px;
      font-size: 1.4em;
      background: white;
      border-radius: 50%;
      border: 1px solid white;
      height: 23px;
    }

    .details {
      overflow: hidden;
      font-size: 0.7em;
      font-style: italic;
      margin-top: 5px;
    }
  }
</style>
