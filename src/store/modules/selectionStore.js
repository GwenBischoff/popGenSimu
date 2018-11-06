const state = {
  fitness: [{
    id: 'fitness00',
    allel1: 0,
    allel2: 0,
    value: 1
  },
  {
    id: 'fitness10',
    allel1: 1,
    allel2: 0,
    value: 1
  },
  {
    id: 'fitness11',
    allel1: 1,
    allel2: 1,
    value: 1
  }]
};
const mutations = {
  addNewFitness: (state, allelsFromStore) => {
    let nextNumberOfAllel = allelsFromStore.length;

    for (let newFitnessForOldAlleles = 0; newFitnessForOldAlleles < nextNumberOfAllel; newFitnessForOldAlleles++) {
      state.fitness.push({
        id: 'fitness' + (nextNumberOfAllel - 1) + newFitnessForOldAlleles,
        allel1: nextNumberOfAllel - 1,
        allel2: newFitnessForOldAlleles,
        value: 1
      });
    }
  },
  removeLastFitness: (state, allelsFromStore) => {
    let numberOfLastAllel = allelsFromStore.length;
    for (let newFitnessAllel1 = 0; newFitnessAllel1 <= numberOfLastAllel; newFitnessAllel1++) {
      state.fitness.splice(-1, 1);
    }
  }
};
const actions = {
  addNewFitness: ({commit}, allelsFromStore) => {
    commit('addNewFitness', allelsFromStore);
  },
  removeLastFitness: ({commit}, allelsFromStore) => {
    commit('removeLastFitness', allelsFromStore);
  }
};

export default{
  state,
  mutations,
  actions
};
