<template>
  <div ref="gradesDistribution" data-aos="fade"></div>
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
            type: 'category'
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
