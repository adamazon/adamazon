<template>
  <div class="row">
    <div class="col-12 col-sm-8">
      <form action="#">
        <textarea title="Enter your review here" @input="evaluateReview()" v-model="review" placeholder="Enter your review here..."></textarea>
      </form>
    </div>
    <div class="col-sm-4">
      <template v-if="loading"><i class="fa fa-spinner fa-spin"></i> Evaluating your review...</template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reviewer',
    data () {
      return {
        review: '',
        timeout: 0,
        loading: false
      }
    },
    methods: {
      evaluateReview () {
        if (this.review === '') {
          this.loading = false;

          return;
        }

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.loading = true;
          console.log(this.review)
        }, 500);
      }
    }
  }
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  textarea {
    border: 1px solid #343434;
    width: 100%;
    height: 200px;
    padding: 2px;
  }
</style>
