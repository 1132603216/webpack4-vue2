<template>
  <div class="question">
    <p class="title">题目一</p>
    <ul>
      <li
        @click="choose(index, $event)"
        v-for="(question, index) in question_list">
        <span v-bind:class="{ choose: index == choose_num }" class="option">
          {{ question.option }}
        </span>
        {{ question.describe }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["current_index"],
  data() {
    return {
      choose_num: -1,
    };
  },
  computed: {
    question_list(){
        return this.$store.state.question_list[this.current_index]
    }
  },
  methods: {
    choose(index, e) {
    this.$emit('choose',index)
      this.choose_num = index;
    },
  },
  watch:{
    current_index: function(newVal, oldVal){
        this.choose_num = -1;
    }
  },
  mounted() {

  },
};
</script>

<style lang="less" scoped>
// .container {
//   color: #ffffff;
//   position: absolute;
//   left: 0;
//   right: 0;
//   margin: auto;
//   top: 4rem;
//   background: url(../images/2-1.png) 100%/100% no-repeat;
//   width: 14.4rem;
//   height: 12rem;

.question {
  // position: absolute;
  // left: 1.5rem;
  // top: 1rem;
  // right: 0;
  width: 11rem;
  // margin: auto;
  // background-color: aqua;

  .title {
    font-size: 0.75rem;
    font-weight: bolder;
  }

  ul {
    position: absolute;
    left: 2rem;
    top: 1.5rem;
    right: 0;
    box-sizing: content-box;
    font-size: 0.5rem;

    li {
      margin: 0.5rem;
      line-height: 0.75rem;

      .option {
        font-weight: bolder;
        display: inline-block;
        width: 0.75rem;
        height: 0.75rem;
        border: 2px solid #ffffff;
        text-align: center;
        border-radius: 50%;
        line-height: 0.75rem;
        margin-right: 0.2rem;
      }

      .choose {
        background-color: red;
      }
    }
  }
}
// }
</style>
