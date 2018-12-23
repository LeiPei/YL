<template>
   <v-container fluid>
    <v-layout
      text-xs-center
      wrap
    >
     <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :color="year.color"
        :key="i"
        small
      >
        <span
          slot="opposite"
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
        <div class="py-3">
          <h2 :class="`customized-title font-weight-light mb-3 ${year.color}--text`">{{year.title}}</h2>
          <div class="customized-detail">
            {{year.detail}}
          </div>
        </div>
      </v-timeline-item>
     </v-timeline>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
       years: [
        {
          color: 'cyan',
          year: '2018-09-15',
          title: 'Our The Very First Meet',
          detail: '我们的第一次相遇在Burnaby小肥羊火锅，吃完后她过来加了我微信，其实当时我也想加她的微信。之后我们去了sugar loop。 从来没有见过的我们居然默契的点了一样的甜品 --- 杨枝甘露 （超级好吃）。 走的时候我是唯一一个帮她打包的男生， 她说我很特别，我似乎对她有些好感，想进一步了解'
        },
        {
          color: 'green',
          year: '2018-09-21',
          title: 'Our The Very Fisrt Date',
          detail: '我们之间的第一次约会， 我当时特别紧张，我知道她是上海人，所以特地的选了一家上海菜 --- “聚”。 Before the first date, we talked a lot about food and it turns out that we are both foodies. 我们都喜欢小笼包，糖醋小排... We met at the restaurant around 7, and it was the first step to get to know each other. 我发现我们有很多共同的爱好，美食，旅游，摄影，爬山与户外活动。After dinner we went to a bubble tea place called COCO, after which we went to see a movie named "Crazy rich asians". She struck me as a very kind girl, different than other girls I have ever met, as her tears were welling up in her eyes when the last scene was shown. 我发现自己有点儿喜欢她了'
        },
        {
          color: 'pink',
          year: '2018-09-29',
          title: 'Our The Very Fisrt Hug and Hand in Hand with Each Other',
          detail: '这是我和小宝宝第一次的road trip. we went to Chilliwack and the corn maze place there. 我们一共要go through两个迷宫。 可爱的小宝宝在第一个迷宫里面转悠了很久，找不到出口，当时感觉她特别好玩，不停地问我怎么走出去，然后我就故意给她指错路，让我们走不出去。第二迷宫，小宝宝累了，所以主要是我带她走，我手里拿着地图，聚精会神地在研究路线，可恶的小宝宝就在旁边捣乱，老是打断我的思路，我情急之下就赶紧牵了小宝宝的手，然后我们就抱抱在一起，当时感觉真的好幸福，好温暖呀。之后我们又去了pumpkin patch, 我给小宝宝从南瓜地里抓了一个pumpkin. 在回去的路上我们聊了很多，包括对彼此的看法和人生的打算与规划'
        },
        {
          color: 'amber',
          year: '2018-10-04',
          title: 'Our The Very Fisrt Kiss',
          detail: '小宝宝其实很早就和我提过她喜欢薛之谦。这也算是我给她的第一份惊喜。我买了两张薛之谦演唱会的门票。但是当时公司有说派我去总部学习考察，所以我就写了一张卡片，告诉小宝宝我尽量陪她去，如果我那天不在，就让小宝宝找人陪着她。然后我的小宝宝感动的哭了，我抱着她安慰着她。看着小宝宝在哭，我特别想亲她，可是又不敢。 聪明的小宝宝似乎看出了我的心思，于是贴着我的脸，暗示要亲亲。Therefore this is the first time we kiss each other.'
        },
        {
          color: 'orange',
          year: '2018-10-06',
          title: 'We Are Together Officially From Today',
          detail: '今天的天气特别好，其实我早有准备想和小宝宝表白 （on Thanksgiving long weekend）。 感谢小宝宝出现在我的生命中。So everything is set up. 我们首先吃了一个Church chicken. 然后我带她去了Hope 的一个tunnel. 其实我当时还很犹豫，有点害怕。怕小宝宝不答应我。但是没想到一路上小宝宝居然给了我很多暗示，说你都没有和我表白。有了小宝宝的暗示让我信心倍增。我想这也是为什么我们在一起之后会有很多心有灵犀的事情。原来之前就有征兆。回到温哥华后，我在家中点燃了100根蜡烛，是吴怡青三个字。我唱了张信哲的’爱就一个字‘给小宝宝。之所以选这首歌是我想告诉小宝宝，也许未来的道路会有艰难，但无论万水千山，大宝宝都想陪着小宝宝走下去。小宝宝最后感动的答应了大宝宝的表白。之后我们去了温哥华旋转餐厅吃饭，我想告诉小宝宝我之所以点燃100根蜡烛，是想在有生之年好好照顾你100年，并在每年的10月6号点燃一支，代表我们的爱情长跑又跑过了一年。'
        },
        {
          color: 'indigo',
          year: '2018-11-03',
          title: 'Joker Xue Concert',
          detail: '今天我的小宝宝很开心，因为我没有出差，而且陪她去看了薛之谦的演唱会。演唱会在UBC thunderbird 剧院。我的小宝宝很喜欢薛之谦，之后激动得都跑到前台去了，哈哈哈，小臭宝'
        },
        {
          color: 'teal',
          year: '2018-11-04',
          title: 'First Meet with Mrs Wu',
          detail: '今天是第一次和阿姨见面，心里超级紧张。我们首先在甜品店喝咖啡，阿姨问了我很多问题，我就把自己心里想说的告诉了阿姨。之后阿姨请我去了锦江上海菜馆吃饭饭。其实阿姨之前有时候晚上会给我做饭，发现阿姨做饭挺好吃的，嘿嘿'
        },
        {
          color: 'purple',
          year: '2018-12-02',
          title: 'First Meet with Mr Wu',
          detail: '小臭宝突然说吴叔叔要和我一起吃饭饭。This was going to be the first time I have dinner with both her mom and dad. 小臭宝选在了我公司旁边的The KEG Steak House. 我本来以为叔叔会很严肃，所以在吃饭前我的手心还在冒汗。但是后来发现叔叔原来特别和蔼，亲切。我发现我还挺喜欢和叔叔聊天的，比如时事与政治。叔叔比较喜欢喝酒，准备下次和叔叔喝上几杯。PS: 小臭宝基本上一直有牵着我的手，让我感觉心理暖暖的。也就没有那么紧张了'
        },
        {
          color: 'cyan',
          year: '2018-12-15',
          title: 'Our The Very Fisrt...',
          detail: '我们俩爱爱了， 细节大宝宝和小臭宝会一起完善哒'
        },
        {
          color: 'green',
          year: '2018-12-17',
          title: 'Hair Transplant Procedure',
          detail: '大臭宝今天在西雅图做变帅的手术，他要他的两个好基友陪，不要我陪☹️☹️☹️, 大臭宝说医生让他早上7：15到，大臭宝早上6点半就醒了，估计他的好基友给他做了爱心早餐（不是我！！！）这个大笨蛋还说了一句乌鸦嘴的话😡😡😡我开始写下这些字的时候已经是10：52了，大臭宝还没有出现给我发消息。我不知道手术时间要多长，虽然坐在办公室里，心里却挂念着大臭宝的情况，希望下一秒他就会出现给我发信息，我知道他一定会好好的🙏🙏🙏12:38 PM --- 大臭宝还没出现，网上查了下，1000根hair就要5个小时，不知道大臭宝要植多少根，疼不疼，事先也不告诉我，好让我心里有数😒😒😒'
        },
        {
          color: 'pink',
          year: '2018-12-19',
          title: 'Our Trip is Postponed',
          detail: '今天虽然坐在办公桌前，但是一点儿也没有心情工作。心里全部都是我的小宝宝。我对她的爱每天都在加深，This love has grown stronger and stronger. 我深深的知道自己这一次真的是伤了小宝宝的心了。马上就2019 了，我想给自己立一个flag，以后无论有什么重大决定，都要和我的小宝宝商量。我也不知道小宝宝还会不会原谅我，因为我做的一切一切其实都是为她—吴怡青。马上4点就要开会了，我也好难过，我突然想起来泰坦尼克号的电影。如果有一天我和她也遇到危难，我也会牺牲自己的生命，让小宝宝活下去。把我对她的爱深深的埋在大西洋的海底，永远永远...'
        }
      ]
    };
  }
};
</script>

<style>
.customized-title {
   font-size: 26px;
   line-height: 32px;
   letter-spacing: normal;
   font-family: "Indie Flower";
}
.customized-detail {
  font-family: "Noto Sans SC";
}
</style>
