<template>
  <div ref="featuresImportance" data-aos="fade" class="graph"></div>
</template>

<script>
  import Plotly from 'plotly.js/dist/plotly.min';

  export default {
    name: 'features-importance',
    mounted () {
      const data = [{
        x: ["Summary text", "Review text", "Review length", "Review grade", 'Exclamation points', 'Question marks', 'Ellipsis', 'Uppercase letters', 'Summary length', 'Price'],
        y: [0.091, 0.623, 0.108, 0.112, 0.003, 0.0, 0.0, 0.035, 0.001, 0.027],
        type: 'bar'
      }];

      Plotly.newPlot(this.$refs.featuresImportance, data, {
        title: 'Features importance after training with all reviews',
        xaxis: {
          title: "Feature's name",
          fixedrange: true
        },
        yaxis: {
          title: "Features weight",
          fixedrange: true
        },
        margin: {
          t: 30,
          b: 90
        }
      }, {
        displayModeBar: false
      });
    }
  }
</script>
