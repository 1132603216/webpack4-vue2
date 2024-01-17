<template>
  <div class="question">
    <!-- tip -->
    <div class="tip">
      <span>{{ week }}</span>
    </div>
    <!-- 背景 -->
    <!-- <div class="container">
    </div> -->
    <div class="container" ref="container">
      <Content
        :current_index="current_index"
        @choose="choose"
        v-if="is_start"
      ></Content>
    </div>
    <!-- 按钮 -->
    <div class="bottom" ref="btn" @click="start">
      <!-- <Index>hello</Index> -->
    </div>
  </div>
</template>
<script>
/**
 * 开始显示home
 * 点击开始后跳转到答题页面并开始计时，点击下一题切换题目，全部答题完提交答案跳转分数页面进行分析
 * 什么时候访问分数页面？根据什么完成？
 */

import Content from "./Content.vue";

export default {
  name: "Question",
  data() {
    return {
      msg: "hello vue2",
      week: "星期一",
      is_start: false,
      answer: [],
      current_answer: -1,
      current_index: 0,
    };
  },
  mounted() {
    console.log(this.$refs.btn);
    this.$store.dispatch("ADD_TIMEOUT");
    document.body.style.backgroundImage =
      "url(" + require("../images/1-1.jpg") + ")";
  },
  methods: {
    start() {
      if (!this.is_start) {
        this.is_start = true;
        this.$refs.container.style.backgroundImage =
          "url(" + require("../images/2-1.png") + ")";
        this.$refs.btn.style.backgroundImage =
          "url(" + require("../images/2-2.png") + ")";
      } else {
        this.next();
      }
    },
    next() {
      if (this.current_answer === -1) alert("你还没有选择");
      else {
        // 记录答案
        this.$store.commit('RECORD_ANSWER', this.current_answer)
        this.current_answer = -1;
        if(this.current_index <  this.max_index) {
            this.current_index++;
            if(this.current_index === this.max_index){
                this.$refs.btn.style.backgroundImage = "url(" + require("../images/3-1.png") + ")";
            }
        }
        else {
          this.$router.push('score')
        }
      }
    },
    choose(index) {
      this.current_answer = index;
    },
  },
  computed: {
    max_index() {
      return this.$store.state.question_list.length - 1;
    }
  },
  components: {  Content },
};
</script>

<style lang="less" scoped>
/**
	.top_tips{
    // 设置元素大小
		height: 7.35rem;
		width: 3.25rem;
    // 定位
		position: absolute;
		top: -1.3rem;
		right: 1.6rem;
    // 背景图片
		background: url(./images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
    // 定位权重
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #a57c50;
			text-align: center;
		}
	}
 

.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}

.home_logo {
  background-image: url(./images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}


  .button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	.start{
        background-image: url(./images/1-4.png);
    }
  */

.tip {
  position: absolute;
  right: 1.5rem;
  width: 3rem;
  height: 6rem;
  background: 100%/100% no-repeat;
  background-image: url(../images/WechatIMG2.png);
  span {
    position: absolute;
    top: 4.5rem;
    font-size: 0.5rem;
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
}

.container {
  color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 4rem;
  background: 100%/100% no-repeat;
  background-image: url(../images/1-2.png);
  width: 14.4rem;
  height: 12rem;
}

.bottom {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 16.5rem;
  width: 5rem;
  height: 2.5rem;
  background: 100%/100% url(../images/1-4.png) no-repeat;
}
</style>
