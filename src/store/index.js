import Vue from "vue";
import Vuex from "vuex";

const ADD_TIMEOUT = "ADD_TIMEOUT";
const RECORD_ANSWER = "RECORD_ANSWER";

Vue.use(Vuex);

const state = {
  level: "第一周", // 活动周数
  itemNum: 1, // 第几题
  allTime: 0, //  答题总时
  timer: "", // 定时器
  question_list: [
    [
      {
        option: "A",
        describe: "java英文全称为 ",
      },
      {
        option: "B",
        describe: "php是世界上最好的语言",
      },
      {
        option: "C",
        describe: "这题是对的",
      },
      {
        option: "D",
        describe: "这题错的",
      },
    ],
	[
		{
		  option: "A",
		  describe: "第二题： java英文全称为 java",
		},
		{
		  option: "B",
		  describe: "B",
		},
		{
		  option: "C",
		  describe: "C",
		},
		{
		  option: "D",
		  describe: "这题对的",
		},
	  ],
    [
      {
        option: "A",
        describe: "java英文全称为 ",
      },
      {
        option: "B",
        describe: "php是世界上最好的语言",
      },
      {
        option: "C",
        describe: "这题是对的",
      },
      {
        option: "D",
        describe: "错",
      },
    ],
    [
      {
        option: "A",
        describe: "第二题： java英文全称为 java",
      },
      {
        option: "B",
        describe: "B",
      },
      {
        option: "C",
        describe: "C",
      },
      {
        option: "D",
        describe: "这题对的",
      },
      ],
  ], // 题目列表
  answerid: [], //答案
};

const mutations = {
  [ADD_TIMEOUT](state) {
    state.allTime += 1;
  },
  [RECORD_ANSWER](state, answer){
	state.answerid.push(answer)
	console.log(state.answerid);
  }
};

const actions = {
  [ADD_TIMEOUT]({ state, commit }) {
    state.timer = setInterval(() => {
      commit(ADD_TIMEOUT);
    }, 1000);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
