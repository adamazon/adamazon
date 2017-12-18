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
        y: [0.0916328127077, 0.622917328527, 0.107914581506, 0.111529999997, 0.00288719001996, 0.0, 0.0, 0.0346898563207, 0.00128150933387, 0.0271467215876],
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
