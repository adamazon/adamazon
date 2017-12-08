<template>
  <div ref="reviewsDistribution" data-aos="fade"></div>
</template>

<script>
  import c3 from 'c3';

  let chart;

  export default {
    name: 'reviews-distribution',
    mounted () {
      chart = c3.generate({
        bindto: this.$refs.reviewsDistribution,
        data: {
          json: require('../data/reviews.json'),
          keys: {
            value: ['Number of reviews'],
          },
        },
        axis: {
          x: {
            tick: {
              values: [...Array(27).keys()].map(val => val*20)
            },
            label: {
              text: 'Product',
              position: 'outer'
            }
          },
          y: {
            label: {
              text: 'Number of reviews',
              position: 'outer'
            }
          }
        },
        grid: {
          y: {
            show: true
          }
        }
      });
    }
  }
</script>
