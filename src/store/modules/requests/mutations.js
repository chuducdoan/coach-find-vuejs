export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },

  setRequest(state, payload) {
    console.log("mutations setRequest payload: ", payload);
    state.requests = payload;
  },
};
