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
          <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">{{year.title}}</h2>
          <div>
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
          detail: '我们的第一次相遇在Burnaby小肥羊火锅，吃完后她主动过来加了我微信，其实当时我也想加她的微信。之后我们去了sugar loop。 从来没有见过的我们居然默契的点了一样的甜品 --- 杨枝甘露。 走的时候我是唯一一个帮她打包的男生， 她说我很特别，我似乎对她有些好感...'
        },
        {
          color: 'green',
          year: '2018-09-21',
          title: 'Our The Very Fisrt Date',
          detail: '我们之间的第一次约会， 我当时特别紧张，我知道她是上海人，所以'
        },
        {
          color: 'pink',
          year: '2018-09-29',
          title: 'Our The Very Fisrt Hug and Hand in Hand with Each Other',
        },
        {
          color: 'amber',
          year: '2018-10-04',
          title: 'Our The Very Fisrt Kiss',
        },
        {
          color: 'orange',
          year: '2018-10-06',
          title: 'We Are Together Officially From Today',
        },
        {
          color: 'indigo',
          year: '2018-11-03',
          title: 'Joker Xue Concert'
        },
        {
          color: 'teal',
          year: '2018-11-04',
          title: 'First Meet with Mrs Wu'
        }
      ]
    };
  }
};
</script>

<style>

</style>
