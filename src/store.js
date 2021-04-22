import Vue from "vue";
import Vuex from "vuex";

import service from "@/services/service.js"; // service.js fetch data from API. We will have a look at it in the next step.

Vue.use(Vuex); // tell Vue to action with Vuex

export default new Vuex.Store({
  state: {
    // define here data that you wish to store
    weather: {},
    dataIsRecived: false,
  },
  mutations: {
    // change state from here
    UPDATE_WEATHER(state, payload) {
      service
        .getWeather(payload) // call the function from service.js that returns the data from API
        .then((response) => {
          // if the response was get
          // console.log(response.data);
          state.weather = response.data; // set weather obj in state to real weather obj
          state.dataIsRecived = true; // mark that data was recived
          // eslint-disable-next-line no-console
          // console.log(response); // and log it
        })
        .catch((error) => {
          // if there was an error
          // eslint-disable-next-line no-console
          console.log("There was an error:", error.response); // log it
          state.dataIsRecived = false; // and mark that data wasn't recived
        });
    },
  },
  actions: {
    // call mutations that change the state here
    updateWeather(context, payload) {
      context.commit("UPDATE_WEATHER", payload);
    },
  },
});
