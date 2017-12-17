<template>
  <div class="row">
    <div class="col-12 col-sm-8">
      <div class="row">
        <div class="col-6">
          <label for="price">Price of the product in $</label>
          <input id="price" type="number" placeholder="19.99" v-model="price" @input="evaluateReview()" />
        </div>
        <div class="col-6">
          <label for="grade">Which grade do you want to give?</label>
          <select id="grade" v-model="grade" @input="evaluateReview()">
            <option value="" disabled></option>
            <option value="5">🟊🟊🟊🟊🟊</option>
            <option value="4">🟊🟊🟊🟊</option>
            <option value="3">🟊🟊🟊</option>
            <option value="2">🟊🟊</option>
            <option value="1">🟊</option>
          </select>
        </div>
      </div>

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
        grade: '',
        price: '',
        timeout: 0,
        loading: false
      }
    },
    methods: {
      evaluateReview () {
        if (this.review === '' || this.grade === '' || this.price === '') {
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
  @import '../scss/vars';

  textarea, input, select {
    border: none;
    padding: 5px 10px;
    background: #f1f1f1;
    border-radius: 3px;
  }

  textarea {
    width: 100%;
    height: 200px;
  }

  select, option {
    color: $amazon-color;
  }
</style>
