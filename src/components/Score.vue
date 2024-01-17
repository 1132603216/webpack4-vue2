<template>
  <div>
    <div class="score">
      <span>{{ score }}分!</span>
    </div>
    <div class="share"></div>
    <div class="answer">
      {{ text }}
      <div class="code"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Score",

  data() {
    return {
      text: "关注葡萄之家",
    };
  },
  computed: {
    score() {
      // 总分
      let total_score = 0;
      // 答案列表
      let answer_list = [2, 3, 2, 3];

      this.$store.state.answerid.forEach((answer, index) => {
        if(answer === answer_list[index]) total_score += 25;
      });
      console.log(this.$store.state.answerid);
      return total_score;
    },
  },
  mounted() {
    document.body.style.backgroundImage =
      "url(" + require("../images/4-1.jpg") + ")";
  },
};
</script>

<style lang="less" scoped>
.score {
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  background: no-repeat url(../images/4-2.png) 100%/100%;
  height: 11rem;
  width: 11rem;
  span {
    position: absolute;
    top: 6rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: red;
    left: 0;
    right: 0;
    text-align: center;
  }
}

.share {
  background: no-repeat 100%/100% url(../images/4-3.png);
  position: relative;
  font-size: 3rem;
  top: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 5.4rem;
  height: 2rem;
}

.answer {
  position: relative;
  width: 9.3rem;
  height: 13rem;
  top: 2rem;
  margin: auto;
  //   background-color: aqua;
  font-size: 0.5rem;
  font-weight: 300;
  text-align: center;
  .code {
    background: no-repeat 100%/100% url(../images/4-4.png);
    position: absolute;
    width: 7rem;
    height: 7rem;
    top: 1rem;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
