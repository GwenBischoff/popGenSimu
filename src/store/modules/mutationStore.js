const state = {
  mutation: [{
    id: 'mutation01',
    allel1: 0,
    allel2: 1,
    value: 0
  },
  {
    id: 'mutation10',
    allel1: 1,
    allel2: 0,
    value: 0
  }]
};
const mutations = {
  addNewMutation: (state, allelsFromStore) => {
    let nextNumberOfAllel = allelsFromStore.length - 1;

    for (let newMutationForOldAlleles = 0; newMutationForOldAlleles < (nextNumberOfAllel + 1); newMutationForOldAlleles++) {
      if (nextNumberOfAllel !== newMutationForOldAlleles) {
        state.mutation.push({
          id: 'mutation' + newMutationForOldAlleles + nextNumberOfAllel,
          allel1: newMutationForOldAlleles,
          allel2: nextNumberOfAllel,
          value: 0
        });
        state.mutation.push({
          id: 'mutation' + nextNumberOfAllel + newMutationForOldAlleles,
          allel1: nextNumberOfAllel,
          allel2: newMutationForOldAlleles,
          value: 0
        });
      }
    }
  },
  removeLastMutation: (state, allelsFromStore) => {
    let numberOfLastAllel = allelsFromStore.length;
    let indexToBeDeleted = [];
    state.mutation.forEach(function (element, index) {
      if (element.allel1 === numberOfLastAllel || element.allel2 === numberOfLastAllel) {
        indexToBeDeleted.push(index);
      }
    });
    for (let indexInArray = indexToBeDeleted.length - 1; indexInArray >= 0; indexInArray--) {
      state.mutation.splice(indexToBeDeleted[indexInArray], 1);
    }
  }
};
const actions = {
  addNewMutation: ({commit}, allelsFromStore) => {
    commit('addNewMutation', allelsFromStore);
  },
  removeLastMutation: ({commit}, allelsFromStore) => {
    commit('removeLastMutation', allelsFromStore);
  }
};

export default{
  state,
  mutations,
  actions
};
