<template>
   <div id="time" class="time-container">
        <div>
          <img style="height: 300px;" src="../assets/main/lady.png" alt="Yvonne">
        </div>
        <!--Vue element-->
        <div id="vue-time-clock" class="timeDay">
          <div class="togother-text" style="margin-top: 30px; margin-bottom: 10px">We Have Been Together</div>
          <div class="day-time-container">
            <div id="days" class="time-box">
              <div class="each-time-text">{{time.d}}</div>
              <span class="span-time-text">DAYS</span>
            </div>
            <div id="hours" class="time-box">
              <div class="each-time-text">{{time.h}}</div>
              <span class="span-time-text">HOURS</span>
            </div>
            <div id="minutes" class="time-box">
              <div class="each-time-text">{{time.m}}</div>
              <span class="span-time-text">MINUTES</span>
            </div>
            <div id="seconds" class="time-box">
              <div class="each-time-text">{{time.s}}</div>
              <span class="span-time-text">SECONDS</span>
            </div>
          </div>
        </div>
        <div>
          <img style="height: 300px;" src="../assets/main/gentleman.png" alt="Leo">
        </div>
    </div>
</template>

<script>
import { START, convertMiliseconds } from "../Service/timeUtil.js";
export default {
  data() {
    return {
      msg: "Hi Yvonne",
      time: {}
    };
  },
  methods: {
    timeCallback() {
      let self = this;
      let now = Date.now();
      this.time = convertMiliseconds(now - START);
      setTimeout(self.timeCallback, 1000);
    }
  },
  mounted: function() {
    this.timeCallback();
  }
};
</script>

<style>
.time-container {
  display: flex;
  justify-content: space-between;
  height: 300px;
  background-color: #d2c2b2;
}

.timeDay {
  width: 500px;
}

.time-box {
  background: rgba(255, 255, 255, 0.85);
  width: 120px;
  height: 125px;
  position: relative;
}

.togother-text {
  text-align: center;
  font-family: "Pacifico", serif;
  font-size: 25px;
}

.day-time-container {
  display: flex;
  justify-content: space-between;
}

.span-time-text {
  position: absolute;
  top: 125px;
  left: 30px;
}

.each-time-text {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 46px;
  padding-top: 25px;
}
</style>
