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
      <div class="row align-items-center">
        <div class="col-12 col-md-4">
          <ul>
            <li>
              <a href="#what-is-review">What is a review?</a>
            </li>
            <li>
              <a href="#who-is-reviewer">Who is a reviewer?</a>
            </li>
            <li>
              <a href="#finding-correlations">Finding correlations</a>
              <ul>
                <li>
                  <a href="#dumb-network">The dumb network</a>
                </li>
                <li>
                  <a href="#digging-features">Digging for features</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-8">
          <img src="../images/amazon.svg" data-aos="fade" />
        </div>
      </div>
    </section>
    <section>
      <h2 id="what-is-review">What is a review?</h2>
      <p>
        We will use data from <em>Amazon product data</em><sup><a href="#ups-and-down" id="ups-and-down-cite">[1]</a></sup>
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
            The product's grade given by<br />the reviewer, between 1 and 5 stars
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
      <h2 id="who-is-reviewer">Who is a reviewer?</h2>
      <p>
        Now that we know what a review is, let's find out what behavior defines reviewers of the <em>video games</em>
        category. Distribution of the numbers of reviews per reviewer is following a power law, meaning the major part
        of the reviews is wrote by a minor part of the reviewers.
      </p>
    </section>
    <section>
      <p>
        The above visualisation represents each of the <strong class="colored">24,303 reviewers</strong> as a dot. The population is split into two groups, so that each group
        produced 50% of the total number of reviews (<strong>115,890</strong> reviews each). We can see that few
        customers wrote the majority of reviews.
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
      <h2 id="finding-correlations">Finding correlations</h2>
      <p>
        We will use machine learning methods to find out which factors should naturally be taken into account to predict
        the final <em>helpfulness</em> of a review.
      </p>
      <h3 id="dumb-network">The dumb network</h3>
      <p>
        To better understand data distribution and be more critical about the results found by the neural network, we will
        introduce features progressively. We first only use the product's grade given by the review.
        We have 5 possibilities between 1 and 5 <i class="fa fa-star"></i>. We ask the neural network if the review is
        <span class="success"><i class="fa fa-check-circle"></i> useful</span> (more than 66% of positive evaluations),
        <span class="danger"><i class="fa fa-times-circle"></i> not useful</span> (less than 33% of positive evaluations)
        or <span class="warning"><i class="fa fa-exclamation-triangle"></i> controversial</span>. After stabilization, we get the final results:
      </p>
      <ul>
        <li>
          <i class="fa fa-star" v-for="n in 5"></i>: the review is
          <span class="success"><i class="fa fa-check-circle"></i> useful</span>
        </li>
        <li>
          <i class="fa fa-star" v-for="n in 4"></i>: the review is
          <span class="success"><i class="fa fa-check-circle"></i> useful</span>
        </li>
        <li>
          <i class="fa fa-star" v-for="n in 3"></i>: the review is
          <span class="success"><i class="fa fa-check-circle"></i> useful</span>
        </li>
        <li>
          <i class="fa fa-star" v-for="n in 2"></i>: the review is
          <span class="warning"><i class="fa fa-exclamation-triangle"></i> controversial</span>
        </li>
        <li>
          <i class="fa fa-star" v-for="n in 1"></i>: the review is
          <span class="danger"><i class="fa fa-times-circle"></i> not useful</span>
        </li>
      </ul>
      <p>
        This means that any review attributing 1 <i class="fa fa-star"></i> to a product will be considered as <em>not useful</em>,
        and any review attributing 2 <i class="fa fa-star"></i> will be considered as <em>polemical</em>. Other reviews
        will be considered <em>useful</em>. The final f1 score of our network is 0.37, meaning it is behaving as a
        random classifier. This network does not help a lot, but it reveals one thing: the repartition of helpful rate based on the review's grade.
      </p>
      <helpfulness-distribution></helpfulness-distribution>
      <p>
        Amazon reviews which are giving a lower grade are more likely to get lower evaluations by other customers. This may be due
        to overstated reviews and product bashing. When trying to take into account the review length or the review summary
        length, we get approximately the same accuracy (around 0.54). We need to use better machine learning methods
        and select more precisely which parts of the review should be taken into account.
      </p>
      <h3 id="digging-features">Digging for features</h3>
      <p>
        We will now start digging for interesting features which could be used to predict the helpful rate of the review.
        The explored features are the following (<i class="fa fa-check-circle"></i> means the feature was used by
        the final classifier, <i class="fa fa-times-circle"></i> means it was rejected):
      </p>
      <features></features>
      <p>
        As we can see here, only the review's grade, length and contents have a real impact on the final helpfulness. Using
        naive counting of punctuation and text case does not brings interesting insights. This means we will need to use
        the final contents as a vector of features to produce a good classification of the results.
      </p>
    </section>
    <section>
      <h2>Text analysis</h2>
    </section>
    <section>
      <h2>Are your reviews useful?</h2>
      <p>
        Now that we have investigated which factors are influencing the <em>helpfulness</em> of a review, you can try your
        own! Use the following input to write your review, and you will know...
      </p>
      <reviewer></reviewer>
    </section>
    <section>
      <p>
        Thanks for reading this story! If you want to learn more about how the presented results were found, feel free
        to read the <a href="https://github.com/Coac/epfl-ada/tree/master/Project" target="_blank">detailed analysis</a>
        of the <em>video games</em> Amazon reviews.
      </p>
    </section>
    <section class="citations">
      <a id="ups-and-down" href="#ups-and-down-cite">[1]</a>
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
  import ReviewersDistribution from './reviewers-distribution.vue';
  import HelpfulnessDistribution from './helpfulness-distribution.vue';
  import Reviewer from './reviewer.vue';
  import Features from './features.vue';

  export default {
    name: 'app-main',
    components: {
      Features,
      Reviewer,
      HelpfulnessDistribution,
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
