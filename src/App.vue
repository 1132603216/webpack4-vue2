<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
/**
 * 开始显示home
 * 点击开始后跳转到答题页面并开始计时，点击下一题切换题目，全部答题完提交答案跳转分数页面进行分析
 * 什么时候访问分数页面？根据什么完成？
 *
 */

import Content from "./components/Content.vue";
import Question from "./components/Question.vue";

export default {
  name: "App",
  components: {  Content, Question },
};
</script>

<style lang="less" scoped>
section{
width: 100%;
height: 100%;
}
</style>
