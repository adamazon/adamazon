<template>
  <div ref="gradesDistribution" data-aos="fade" class="graph"></div>
</template>

<script>
  import Plotly from 'plotly.js/dist/plotly.min';

  export default {
    name: 'grades-distribution',
    mounted () {
      const data = [{
        x: ['🟊', '🟊🟊', '🟊🟊🟊', '🟊🟊🟊🟊', '🟊🟊🟊🟊🟊'],
        y: [14853, 13663, 28275, 54804, 120185],
        type: 'bar'
      }];

      Plotly.newPlot(this.$refs.gradesDistribution, data, {
        title: 'Number of reviews per product\'s grade',
        xaxis: {
          title: "Product's grade",
          tickfont: {
            color: '#FF9900'
          },
          fixedrange: true
        },
        yaxis: {
          title: "Number of reviews",
          fixedrange: true
        },
        margin: {
          t: 30,
          b: 40
        }
      }, {
        displayModeBar: false
      });
    }
  }
</script>
