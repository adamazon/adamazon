<template>
  <div class="row graph">
    <div class="col-6 col-sm-4">
      <div class="bench" data-aos="fade-in" data-aos-delay="100">
        <div class="score">
          72<small>%</small><br />
          <span class="description">f1 score</span>
        </div>
        <div class="details">
          <ul>
            <li><span class="badge">Features</span> All features</li>
            <li><span class="badge">Training</span> All reviews</li>
            <li><span class="badge">Predicted</span> All reviews in PC Games<br />subcategory</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4">
      <div class="bench" data-aos="fade-in" data-aos-delay="150">
        <div class="score">
          62<small>%</small><br />
          <span class="description">f1 score</span>
        </div>
        <div class="details">
          <ul>
            <li><span class="badge">Features</span> All features</li>
            <li><span class="badge">Training</span> All reviews</li>
            <li><span class="badge">Predicted</span> Reviewed products rel-<br />ated to <a href="https://www.amazon.com/Memory-Card-Nintendo-Wii-Gamecube-Blocks/dp/B01KLC1AYG"><em>64MB Block Memory Card</em></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-4">
      <div class="bench" data-aos="fade-in" data-aos-delay="200">
        <div class="score">
          90<small>%</small><br />
          <span class="description">f1 score</span>
        </div>
        <div class="details">
          <ul>
            <li><span class="badge">Features</span> All features</li>
            <li><span class="badge">Training</span> Reviews with more than<br />100 evaluations</li>
            <li><span class="badge">Predicted</span> Same as training <sup>[a]</sup></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12">
      <small><br /><sup>[a]</sup> Score computed after cross validation</small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bench'
  }
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  @import '../scss/vars';

  .score {
    text-align: center;
    font-size: 2em;
    background: $amazon-color;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    display: inline-block;
    padding: 23px 0;
    color: white;
    font-family: Oswald, sans-serif;
    line-height: 0.45em;
    vertical-align: middle;

    small {
      font-size: 0.8em;
    }

    .description {
      font-style: italic;
      font-size: 0.4em;
    }
  }

  .details {
    display: inline-block;
    vertical-align: middle;

    ul {
      margin: 0;
      padding: 0 0 0 10px;
      list-style-type: none;
    }
  }
</style>
