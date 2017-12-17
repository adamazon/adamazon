<template>
  <div class="row graph">
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature">
        <i class="fa fa-check-circle"></i>
        <i class="fa fa-star-half-full"></i> Review's grade
        <div class="details">
          The review's grade<br />(between 1 and 5 <i class="fa fa-star"></i>)
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-th-list"></i> Summary length
        <div class="details">
          The review's summary length<br />(characters count)
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature">
        <i class="fa fa-check-circle"></i>
        <i class="fa fa-list"></i> Review's length
        <div class="details">
          The review's length<br />(characters count excluding the summary)
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-exclamation-circle"></i> Exclamation points
        <div class="details">
          The numbers of exclamation points
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-question-circle"></i> Question marks
        <div class="details">
          The numbers of question marks
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-ellipsis-h"></i> Ellipsis
        <div class="details">
          The numbers of ellipsis
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature">
        <i class="fa fa-times-circle"></i>
        <i class="fa fa-text-height"></i> Uppercase letters
        <div class="details">
          The numbers of uppercase letters
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4 col-md-3">
      <div class="feature">
        <i class="fa fa-check-circle"></i>
        <i class="fa fa-language"></i> Text analysis
        <div class="details">
          Text vectorization (TFIDF, Word2Vect)
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
    margin: 3px 0;
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
      max-height: 0;
      transition: max-height .5s;
      overflow: hidden;
      font-size: 0.8em;
      font-style: italic;
    }

    &:hover .details {
      max-height: 300px;
    }
  }
</style>
