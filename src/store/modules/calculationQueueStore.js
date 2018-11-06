const state = {
  isWeightedMeanOn: false,
  calculationQueue: [
  ]
};
const mutations = {
  addCalculationToQueue: (state, calculationData) => {
    state.calculationQueue.push(calculationData);
  },
  removeCalculationFromQueue: (state, calculationData) => {
    const toDelete = new Set([calculationData.id, calculationData.name]);
    const newArray = state.calculationQueue.filter(obj => !toDelete.has(obj.id));
    state.calculationQueue = newArray;
  }
};
const actions = {
  addCalculationToQueue: ({commit}, calculationData) => {
    commit('addCalculationToQueue', calculationData);
  },
  removeCalculationFromQueue: ({commit}, calculationData) => {
    commit('removeCalculationFromQueue', calculationData);
  }
};
const getters = {
  isCalculationActive: state => (obj) => {
    let contains = false;
    state.calculationQueue.forEach(function (element) {
      if (element.id === obj.id) {
        contains = true;
      }
    });
    return contains;
  }
};
export default{
  state,
  mutations,
  actions,
  getters
};
