<template>
  <div ref="reviewsDistribution" data-aos="fade"></div>
</template>

<script>
  import c3 from 'c3';

  let chart;
  const reviews = require('../data/reviews.json');

  export default {
    name: 'reviews-distribution',
    mounted () {
      chart = c3.generate({
        bindto: this.$refs.reviewsDistribution,
        data: {
          json: reviews,
          keys: {
            value: ['Number of reviews'],
          },
          type: 'area'
        },
        axis: {
          x: {
            tick: {
              count: 270, // C3.js bug, can't put less ticks
              format: (x) => Math.round(x) + 1
            },
            label: {
              text: 'Product rank',
              position: 'outer'
            },
            padding: {
              left: 0,
              right: 0
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
        },
        tooltip: {
          format: {
            title: function (x) { return reviews[x]['Product ID']; }
          }
        }
      });
    }
  }
</script>
