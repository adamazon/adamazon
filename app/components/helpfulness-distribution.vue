<template>
    <div ref="helpfulnessDistribution" data-aos="fade" class="graph"></div>
</template>

<script>
  import Plotly from 'plotly.js/dist/plotly.min';

  export default {
    name: 'helpfulness-distribution',
    mounted () {
      const data = [{
        x: ['🟊', '🟊🟊', '🟊🟊🟊', '🟊🟊🟊🟊', '🟊🟊🟊🟊🟊'],
        y: [0.41, 0.49, 0.58, 0.72, 0.71],
        error_y: {
          type: 'data',
          array: [0.13, 0.13, 0.13, 0.12, 0.12],
          visible: true
        },
        type: 'bar'
      }];

      Plotly.newPlot(this.$refs.helpfulnessDistribution, data, {
        title: 'Average helpful rate based on product\'s given grade',
        xaxis: {
          title: "Product's grade",
          tickfont: {
            color: '#FF9900'
          },
          fixedrange: true
        },
        yaxis: {
          title: "Helpful rate",
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
