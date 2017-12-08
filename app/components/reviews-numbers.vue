<template>
  <div class="reviews-numbers">
    <div class="text-background">
      {{ longestReview }}
    </div>

    <span class="numbers">75% of reviews have less than <span ref="quartile3">{{ quartile3 }}</span> characters</span><br />
    <small class="numbers">The longest one is <span ref="max">{{ max }}</span> characters</small>
  </div>
</template>

<script>
  import CountUp from 'countup.js';

  export default {
    name: 'reviews-numbers',
    data () {
      return {
        longestReview: require('../data/longest-review.txt'),
        quartile3: 1373,
        max: 32689
      }
    },
    methods: {
      isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        return (elemTop >= 0) && (elemBottom <= window.innerHeight);
      }
    },
    mounted () {
      const quartile3Counter = new CountUp(this.$refs.quartile3, 0, this.quartile3);
      const maxCounter = new CountUp(this.$refs.max, 0, this.max);

      document.addEventListener('scroll', () => {
        if (this.isScrolledIntoView(this.$refs.quartile3)) {
          quartile3Counter.start();
        }

        if (this.isScrolledIntoView(this.$refs.max)) {
          maxCounter.start();
        }
      })
    }
  }
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  .reviews-numbers {
    position: relative;
    text-align: center;
    padding: 20px;

    .text-background {
      font-size: 0.8em;
      color: #d1d1d1;
      line-height: 1em;
      text-align: justify;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 0;
      overflow: hidden;
    }

    .numbers {
      font-family: Oswald, sans-serif;
      position: relative;
      z-index: 1;
      text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
      font-size: 1.9em;
      font-weight: bold;
      text-align: center;
      padding: 20px;
    }

    small.numbers {
      font-size: 1.3em;
      font-weight: normal;
    }
  }
</style>
