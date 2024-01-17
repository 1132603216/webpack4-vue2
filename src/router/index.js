import Vue from "vue";
import VueRouter from "vue-router";
import Question from "../components/Question.vue";
import Score from "../components/Score.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Question,
    },
    {
        path: "/score",
        component: Score,
      },
  ],
});
