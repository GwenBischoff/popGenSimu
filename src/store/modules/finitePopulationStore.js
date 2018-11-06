const state = {
  id: 'populationSize',
  populationSizeMax: 10000,
  populationSizeMin: 1,
  populationSizeInterval: 1,
  populationSizeValue: 100,

  bottleneckIsSet: false,
  bottleneckPopulationSizeMax: 10000,
  bottleneckPopulationSizeInterval: 1,
  bottleneckPopulationSizeValue: 100,
  bottleneckGenerationMax: 10,
  bottleneckGenerations: [5, 10]
};
const mutations = {
  setSliderValue: (state, newValue) => {
    state.slider.value = newValue;
  }
};
const actions = {
  setSliderValue: ({commit}, newValue) => {
    commit('setSliderValue', newValue);
  }
};

export default{
  state,
  mutations,
  actions
};
