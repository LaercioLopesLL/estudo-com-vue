import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userName: 'Lopes',
		userAge: 35,
	},
	mutations: {
		UPDATE_USER (state, payload){
			state.userName = payload.userName;
			state.userAge = payload.userAge	
		},
	},
});