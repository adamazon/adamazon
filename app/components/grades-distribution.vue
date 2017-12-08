<template>
  <div ref="gradesDistribution" data-aos="fade" class="colored-axis"></div>
</template>

<script>
  import c3 from 'c3'

  let chart;

  export default {
    name: 'grades-distribution',
    mounted () {
      chart = c3.generate({
        bindto: this.$refs.gradesDistribution,
        data: {
          json: require('../data/grades.json'),
          type: 'bar',
          keys: {
            x: "Rating's grade",
            value: ['Number of ratings'],
          },
        },
        axis: {
          x: {
            type: 'category',
            label: {
              text: 'Product rating',
              position: 'outer'
            }
          },
          y: {
            label: {
              text: 'Number of products',
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

<style lang="scss" ref="stylesheet/scss">
  @import '../scss/vars';

  .colored-axis .c3-axis.c3-axis-x .tick text {
    fill: $amazon-color;
  }
</style>
