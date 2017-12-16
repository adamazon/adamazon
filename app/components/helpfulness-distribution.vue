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
        y: [0.406574707675, 0.487743960507, 0.575155633234, 0.718221101536, 0.711544766346],
        error_y: {
          type: 'data',
          array: [0.131949, 0.128475, 0.128407, 0.120565, 0.119671],
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
          b:100
        }
      }, {
        displayModeBar: false
      });
    }
  }
</script>
