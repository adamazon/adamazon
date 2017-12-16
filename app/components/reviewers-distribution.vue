<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6">
        <p class="description"><strong class="colored">5,860</strong> reviewers wrote <span class="colored">50%</span> of the reviews<br />
        <small>More than 7 reviews each</small></p>
        <div class="reviewers" data-aos="fade-in">
          <span class="productive">
            <template v-for="n in 773">&bull; </template>
          </span>
          <template v-for="n in 5860 - 773">&bull; </template>
        </div>
      </div>
      <div class="col-12 col-sm-6 others">
        <p class="description"><strong class="colored">18,443</strong> reviewers wrote the other <span class="colored">50%</span><br />
        <small>Less than 7 reviews each</small></p>
        <div class="reviewers" data-aos="fade-in">
          <template v-for="n in 9222">&bull; </template>
          <span class="unproductive">
            <template v-for="n in 9221">&bull; </template>
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <p><i class="fa fa-arrow-circle-up"></i> The <span class="productive">most productive reviewer</span> wrote <strong>773</strong> reviews</p>
      </div>
      <div class="col-12 col-md-6">
        <p><i class="fa fa-arrow-circle-down"></i> <span class="unproductive">25% of the reviewers</span> wrote less than <strong>5 reviews</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reviewers-distribution'
  }
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  .description {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 5px;
    line-height: 0.8em;

    small {
      font-size: 0.7em;
      font-style: italic;
      font-weight: normal;
    }
  }

  .others {
    text-align: right;
  }

  .reviewers {
    font-size: 0.1em;
    line-height: 0.5em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .productive {
    color: #2aaafc;
  }

  .unproductive {
    color: #fc095c;
  }
</style>
