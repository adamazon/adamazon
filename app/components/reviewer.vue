<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <p>You're not inspired? <a href="#" @click.prevent="loadRandom()">Load a random review!</a></p>
          <strong>We need one information about the product:</strong><br />
          <label for="price">Price of the product in $</label>
          <input id="price" type="number" placeholder="19.99" v-model="price" @input="evaluateReview()" />
        </div>
        <div class="col-12">
          <strong>Your review:</strong><br />
          <label>Which grade do you want to give?</label>
          <a href="#" class="fa fa-star" v-for="n in grade" @click.prevent="updateGrade(n)"></a><a href="#" class="fa fa-star-o" v-for="n in 5 - grade" @click.prevent="updateGrade(grade + n)"></a>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-8">
      <form action="#">
        <input type="text" title="Title for your review" placeholder="Title for your review..." v-model="summary" />
        <textarea title="Enter your review here" @input="evaluateReview()" v-model="review" placeholder="Enter your review here..."></textarea>
      </form>
    </div>
    <div class="col-sm-4">
      <div class="result">
        <template v-if="loading"><i class="fa fa-spinner fa-spin"></i><br />Evaluating your review...</template>
        <template v-if="result === true">
          <i class="fa fa-trophy"></i><br />Kudos! Your review <strong>is</strong> helpful!
        </template>
        <template v-if="result === false">
          <i class="fa fa-trash"></i><br />Your review is <strong>not</strong> helpful...
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reviewer',
    data () {
      return {
        review: '',
        summary: '',
        grade: 1,
        price: '',
        timeout: 0,
        loading: false,
        result: null
      }
    },
    methods: {
      evaluateReview () {
        this.result = null;

        if (this.review === '' || this.price === '') {
          this.loading = false;

          return;
        }

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.loading = true;
          const data = new FormData();
          data.append('reviewText', this.review);
          data.append('summary', this.summary);
          data.append('overall', this.grade);
          data.append('price', this.price);

          return fetch('https://compil.io/lazy', { method: 'POST', body: data })
            .then(res => res.text())
            .then(res => {
              console.log(res);
              this.result = res === 'helpful';
              this.loading = false;
            })
        }, 500);
      },
      updateGrade (i) {
        this.grade = i;
      },
      loadRandom() {
        const sampleReviews = [
          {
            grade: 5,
            price: '500',
            review: 'Hello world!',
            summary: 'Hi!'
          },
          {
            grade: 5,
            price: '30',
            review: 'The ADA course was really great, I learn a lot of things. Hooray! Randomness is the lack of pattern or predictability in events. A random sequence of events, symbols or steps has no order and does not follow an intelligible pattern or combination. Individual random events are by definition unpredictable, but in many cases the frequency of different outcomes over a large number of events (or "trials") is predictable. HODL ADA. For example, when throwing two dice, the outcome of any particular roll is unpredictable, but a sum of 7 will occur twice as often as 4. In this view, randomness is a measure of uncertainty of an outcome, rather than haphazardness, and applies to concepts of chance, probability, and information entropy.',
            summary: 'I loved this course!'
          },
          {
            grade: 3,
            price: 246.63,
            review: 'I got this version instead of the PS3 version, which turned out to be a mistake. Console versions of games look 95 percent as good as their PC versions, but you do not have to deal with driver issues and the numerous things that can go wrong with windows. First off the installation takes about 30 minutes, which is ridiculous. I have never had a game take this long to load, Shift 2 took about 20 minutes which seemed too long also. Next many of the latest games for PC are forcing you to have an internet connection in order to install the game, regardless of whether you want to play only offline single player games. Shift 2 unleashed is also like this, so be forewarned. Internet requirements are not prominently displayed on the boxes. The game pushes you, but does not require you to, sign up for a Games For Windows Live account, which is required to get the game patches and updates. More time wasted signing up for that. Finally after about one hour the game was up and running , but the menu screen text had red blocky borders, and the sun in the game screens was ugly pink red, with red reflections on the car and everywhere. So more time spent googling to find a solution to this. I had to download a hot-fix driver update for my AMD videocard driver, which solved that red text and sun problem. Finally after nearly 2 hours I was able to play the game, which is perhaps the prettiest racing game I have ever played. Magnificent graphics, and fun excellent gameplay. Good forcefeedback effects with a steering wheel, and excellent sense of speed and immersion, makes this a top notch sim racer with just a hint of arcade feeling to it.I was really, finally enjoying the game , when suddenly about 30 minutes in to a race the game suddenly crashed. No error message or anything, it just hung up and crashed to desktop, under windows 7. I later tried it with Windows XP on the same machine, and it crashed less frequently, usually only when exiting the game, but random crashes really kill the fun of a racing game, since it might not crash during an entire 20 lap race or it might crash on the 2nd lap.It is a great game when it works, and if you are lucky enough to have a machine that it runs stably on then by all means get this game. But hang on to your receipt just in case.I am tired of fiddling with my computer trying to find a totally reliable setup for this game, so I think I am going to buy a copy for my PS3, which has never crashed, in over 3 years of game playing. I have been buying the top notch PC versions of videogames and spent thousands of dollars over the years on faster videocards and cpu\'s , but I have finally grown tired of fiddling with incompatibilities of hardware and software, and now game publishers demanding that you have an internet connection as well as providing a long serial number, utilizing gigabytes of harddrive space, 30 minute or longer installation times ( it takes less time to install Windows 7 ) , and requiring you to sign up for their online service and game store, and still you have to put that stupid little DVD in your computer everytime you want to play a simple game to relax. I am pretty much done with PC gaming, since the consoles are so much less hassle, and they have " good enough " graphics that the diminishing returns of costly higher resolution better antialiased higher framerate graphics is not worth it. When the PS4 and Xbox 720 come out, I think the law of diminishing returns will be even more evident.',
            summary: 'awesome game, if it did not crash frequently !!'
          },
          {
            grade: 1,
            price: 36,
            review: 'The absolute worst Dreamcast game I have ever played. I would not even take this game if it was given to me for free.',
            summary: 'Not worth it at any price'
          },
          {
            grade: 5,
            price: 39,
            review: 'They lack the interest or the concentration to play the game as it was designed.  They want to easily finish it, and it is not easily finished.  I played Diablo 1 and 2, I grew up with them, I remember when demos existed for everything.  Kids today have no concept of these ideas, the past, quality, etc.  This is a fun game!',
            summary: 'Disregard the 1 star reviews'
          },
          {
            grade: 1,
            price: 25,
            review: "For an online game, it's pathetic that the servers cannot deal with the multiplayer component of this title.Even more shameful is the fact that TDU1 had the SAME ISSUES.  4 years later and the same game-breaking problems?!?  Forget it.This game is broken, and regardless of all of the promises, the multiplayer DOES NOT work.  And it's pretty much designed to be a multiplayer game.  That's all you need to know.  DO NOT BUY.",
            summary: 'The servers are broken'
          },
          {
            grade: 1,
            price: 25,
            review: 'Not bad it was hyped a lot but it was worth it the campaign was not bad the online was not bad either they try to add some new things to the online but it was just ok. Im still waiting on something that blew me away like modern warfare original.',
            summary: ';0)'
          },
          {
            grade: 4,
            price: 50,
            review: "When I bought this game the salesman raised his eyebrows and said, \"I thought this came out three years ago.\"Apparently it's been in development for a long time but, of course, it was just released.  The concept is irresistable:  A Sim game AND \"tycoon\" game where you operate a movie studio, make business decisions about movies, make money, but also produce \"art.\"It apparently is a lot to bite off and therefore a lot to chew.  First, let me assure you that it is \"playable.\"  If you commit to learning the game (not as easy as it should be), you will enjoy the results.  However, if your primary purpose in buying this fairly expensive game is to shoot your own movies, you'll find the producing architecture to be limiting, even constricting.It can make for some unintentionally hilaious results, though.What's tough is making \"good\" movies in the early stages of the game.  You pretty well have to go through the entire time sequence, from 1920 to now, to get even close to anything looking like watchable moviemaking, and some of us might not have that kind of patience.Overall, I'm glad I bought it, though, and you will be too.  Merry Christmas!!",
            summary: 'Needed More Postproduction'
          },
          {
            grade: 4,
            price: 231,
            review: "This IS the funnest game I have ever played. If your looking for a game with good graphics, this isn't for you, though. But if your down with old school hardcore action then you need to buy this!",
            summary: 'Old School Fun'
          },
          {
            grade: 2,
            price: 100,
            review: "OK you have to admit that this game has it's good moments, but I would have thought that with the success of \"All or Nothing\" and the failure of Angelfire that all of the Bond games would have followed the obvious pattern of \"All or nothing\". The part that I really hate is the fact that you have to shoot the guys 10 or more times to get a hit and they run around like a bunch of panzies while you're shooting at them. OK, I expect them do do a certain bit of running around, but after a while it gets to be like a game of \"ring around the rosies\". While the game does have it's enjoyable moments, it's not as enjoyable as it could have been. Hopefully the next game, they'll do better.",
            summary: 'Golden flop'
          },
          {
            grade: 3,
            price: 7,
            review: "Please keep in mind this review was written when the game was first released, before any patches or even mods were released.  The game is obviously quite a bit different now and would get a higher score from me certainly.Morrowind, the 3rd installment of the Daggerfall series from Bethesda Software promised to be the first open-ended single player RPG game in a fully immersive 3D environment with cutting edge graphics, length and depth.Well, they got the cutting edge graphics part right apparently.The character development system is excellent, plenty of options to choose from in the areas of magic, melee and ranged combat, and classes/races.  This promising, involved character creation system is intuitive, deep and fun to play around with by itself.Once you've landed in the first town and are introduced to the reason you've been chosen by the Emperor and are allowed to enter the outside world, it can be a bit over-whelming and confusing - the game is very open-ended.You can pretty much do anything you want, buy some stuff, kill someone or something, sneak, steal, barter, join a guild, accept a quest from an NPC who gives you one etc.., or you can just run around the world at your leisure.The frustrating and ultimately disappointing aspect of the game is how incredibly tedious and boring the game becomes after you've gotten more than halfway through the main quest, where the game reveals just how shallow it really is.The vendors never carry much money, so finding expensive items means absolutely nothing at all.There are only 3-5 suits of armor or types of clothing any character in the game can wear, along with one or two special suits you can only find in certain areas and after completing certain quests.  This simply adds to the tedium, wearing the same stuff for over 4-5 levels or more at a time.It can take up to 15 minutes or more to travel from one area to another.  And the landscape is barren, boring, and repetitive, despite the hand-placed items. Everything looks the same.On top of that there are only 3-4 monsters you will do battle with 90% of the time in the game, and you get really, really tired of combating the same monsters over and over and over for 100 hours (which is what it takes to finish the game and really complete most of the quests).  If I see or hear another Cliff Racer I'm going to puke, seriously.  The difficulty level of these enemies never changes, they are always the same. And certain areas don't offer harder challenges than others unless you \"want\" to wander into a ruin, and those are of all the same difficulty level as well, no matter where you are in the game.Around level 22, as a Nord Warrior specializing in long blades, I could kill everything and everyone in the game with little problem at all, and I hadn't even finished the main quest yet - still had at least 10 or more hours to go, at least, to finish. This was horribly designed, there were no challenges left, just errand running and talking to the same people over and over.Magic and Thief characters add some depth and much-needed complexity to the game, but they get old fast and their lack of combat ability can be frustrating, ecspecially early on.  You can collect and steal tons of different little odds and ends, but it gets so boring and useless that it's easy to give up after doing it for hours on end.Despite these major problems (similar to my complaints of MMORPG's) the game is very entertaining and fun because of it's explorative nature at first, at least the first 40-50 hours, making it worthwhile at least.But once you've tried and done everything for the most part, there's simply nothing more there, it gets old quick and I really can't see myself playing it again any time soon.Finally the system requirements are incredibly high and it didn't run all that well even on my 1GHZ/Geforce3 rig, but at high detail it ran more than adequately.  The load times are annoying and constant also.Simply another hyped RPG that is just a single player version of Asheron's Call, EverQuest or Anarchy Online.  And like most RPG's of late, boring and tedious despite the intrictate story line and world politics that push you along.If you are a hardcore PC game lover, I'd recommend it, but if you are not, take a pass, ecspecially if your PC is less than ideal for these high end games.",
            summary: 'A Fantastic Beginning, But Leaves You Wanting More...'
          },
          {
            grade: 3,
            price: 16,
            review: "This game is great fun. For some reason though, harmonix had the nerve to release this product and yesterday announced plans for rock band 2. The gameplay itself is fun, but with no DLC, character customization, or world tour mode, it is really stripped down. With bigger an better things coming in the fall, this is not worth it. As for me I am outraged that harmonix announced rock band 2 right after releasing this game.",
            summary: 'DO NOT BUY THIS!!!!!!!'
          }
        ];

        const chosen = Math.floor(Math.random() * (sampleReviews.length));

        this.review = sampleReviews[chosen].review;
        this.summary = sampleReviews[chosen].summary;
        this.price = sampleReviews[chosen].price;
        this.grade = sampleReviews[chosen].grade;

        this.evaluateReview();
      }
    }
  }
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  @import '../scss/vars';

  label {
    vertical-align: middle;
    margin: 10px 0;
  }

  textarea, input, select {
    border: none;
    padding: 5px 10px;
    background: #f1f1f1;
    border-radius: 3px;
    vertical-align: middle;
  }

  form {
    input {
      width: 70%;
      margin-bottom: 5px;
    }

    textarea {
      width: 100%;
      height: 200px;
    }
  }

  select, option {
    color: $amazon-color;
  }

  a:hover {
    text-decoration: none;
  }

  .result {
    font-size: 1.8em;
    text-align: center;
    padding: 40px 10px;

    .fa {
      &.fa-trash {
        color: #ec2c31;
      }
      &.fa-trophy {
        color: #44b41c;
      }
    }

  }
</style>
