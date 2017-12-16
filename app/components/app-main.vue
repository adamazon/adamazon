<template>
  <main>
    <h1>
      Adamazon<br /><small>Investigating factors behind product reviews</small><br />
      <span class="team">Victor Le, Quentin de Longraye, Karttikeya Mangalam &bull; ADA &bull; EPFL</span>
    </h1>
    <hr />
    <section class="intro">
      <p>
        Reviews on Amazon are done by thousands of people to share their advices and analysis concerning products
        in dozens of categories and subcategories. These reviews can influence positively or negatively the potential
        buyers to make their purchase a reality or buy an other product. We will here try to focus on which factors
        can determine whether a review is <em>good</em> and which product's features can influence reviews. See
        this website's <a href="https://github.com/adamazon/adamazon" target="_blank">source code</a> and
        <a href="https://github.com/Coac/epfl-ada/tree/master/Project" target="_blank">detailed analysis</a>.
      </p>
      <img src="../images/amazon.svg" data-aos="fade" />
    </section>
    <section>
      <h2>What is a review?</h2>
      <p>
        We will use data from <em>Amazon product data</em><sup><a href="#ups-and-down">[1]</a></sup>
        containing Amazon product reviews (142.8 million) and metadata. We will more precisely focus on the Video Games section
        to try to find correlations and insights for understanding how reviews are written. The Video Games section contains
        about 1,300,000 reviews (after de-duplication) and will be useful to reduce bias in our analysis, as we could expect
        reviews to be done based on the same family of criteria.
      </p>
      <p>
        If you're not familiar with Amazon or the concept of <em>review</em>, here is what it look likes:
      </p>
      <div class="review">
        <div class="grade">
          <i class="fa fa-star" data-aos="zoom-in" data-aos-delay="100"></i>
          <i class="fa fa-star" data-aos="zoom-in" data-aos-delay="200"></i>
          <i class="fa fa-star" data-aos="zoom-in" data-aos-delay="300"></i>
          <i class="fa fa-star" data-aos="zoom-in" data-aos-delay="400"></i>
          <i class="fa fa-star-o" data-aos="zoom-in" data-aos-delay="500"></i>
          <span class="explanation" data-aos="fade" data-aos-offset="400">
            The product's score given by the reviewer,<br />between 1 and 5 stars
          </span>
        </div>
        <h3>
          Review by
          <strong>Electronic Junky</strong>
          <span class="explanation" data-aos="fade" data-aos-offset="400">
            Reviewers are identified to allow gathering of all their reviews
          </span>
        </h3>
        <p class="review-text">
          <strong>Good rally game</strong> &bull;
          If you like rally cars get this game you will have fun. It is more oriented to &#34;European market&#34; since here in America there isn't a huge rally fan party. Music it is very European and even the voices from the game very &#34;English&#34; accent. The multiplayer isn't the best but it works just ok.
          <span class="explanation" data-aos="fade" data-aos-offset="400">
            The review text containing the product analysis<br />
            preceded by a summary
          </span>
        </p>
        <p class="helpfulness">
          <strong>13</strong> of 15 people found this review useful
          <span class="explanation" data-aos="fade" data-aos-offset="400">
            Other customers can say if the review was helpful
          </span>
        </p>
      </div>
      <p>
        Relevant data is mostly textual. The <em>helpfulness</em> level of each review is a good way to understand
        if the review was useful for the other customers. It is determined by the vote of other customers. But before
        focusing on this aspect, let's see how reviews grades are distributed among products:
      </p>
      <grades-distribution></grades-distribution>
      <p>
        Users tend to give priority to the highest grades, 4 <i class="fa fa-star"></i> and 5 <i class="fa fa-star"></i>
        are representing more than 50% of the overall. There is a a slightly increase between 2 <i class="fa fa-star"></i>
        and 1 <i class="fa fa-star"></i>, which can be understood by the will to <em>punish</em> products when something
        went wrong for the customer. But are these reviews representative and equally distributed for all the products?
      </p>
      <reviews-distribution></reviews-distribution>
      <p>
          We can see here an extract of the products database (one on twenty product) sorted by the number of reviews.
          Some products are attracting more attention; we will focus on them in our next observations.
      </p>
      <reviews-numbers></reviews-numbers>
    </section>
    <section>
      <h2>Who is a reviewer?</h2>
      <p>
        Now that we know what a review is, let's find out what behavior defines reviewers of the <em>video games</em>
        category. Distribution of the numbers of reviews per reviewer is following a power law, meaning the major part
        of the reviews is wrote by a minor part of the reviewers.
      </p>
    </section>
    <section>
      <p>
        The above visualisation represents each reviewer as a dot. The population is split into two groups, each group
        produced 50% of the total number of reviews (<strong>115,890</strong> reviews each).
      </p>
      <reviewers-distribution></reviewers-distribution>
      <p>
        The median helpful rate (proportion of users who found the review helpful) is <strong>0.7</strong>; people tend
        more to reward good reviews than bashing bad ones or the overall reviews quality is high.
      </p>
      <p>
        Now that we know what a review and a reviewer are, we can start our investigation. We want to better understand
        which factors are influencing the <em>helpfulness</em> of a review.
      </p>
    </section>
    <section>
      <h2>Finding correlations</h2>
    </section>
    <section class="citations">
      <span id="ups-and-down">[1]</span>
      <strong>Ups and downs: Modeling the visual evolution of fashion trends with one-class collaborative filtering</strong><br />
      R. He, J. McAuley<br />
      <em>WWW</em>, 2016
    </section>
  </main>
</template>

<script>
  import GradesDistribution from './grades-distribution.vue';
  import ReviewsDistribution from './reviews-distribution.vue';
  import ReviewsNumbers from './reviews-numbers.vue';
  import ReviewersDistribution from "./reviewers-distribution.vue";

  export default {
    name: 'app-main',
    components: {
      ReviewersDistribution,
      GradesDistribution,
      ReviewsDistribution,
      ReviewsNumbers
    },
  };
</script>

<style lang="scss" ref="stylesheet/scss">
  @import '../scss/main';
</style>
