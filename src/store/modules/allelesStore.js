const state = {
  allels: [{
    id: 'allel0',
    allel: 0,
    value: 0.5
  },
  {
    id: 'allel1',
    allel: 1,
    value: 0.5
  }],
  isAllelesSumOne: true
};
const mutations = {
  addNewAllel: state => {
    let nextNumberOfAllel = state.allels.length;
    state.allels.push({
      id: 'allel' + nextNumberOfAllel,
      allel: nextNumberOfAllel,
      value: 0
    });
  },
  removeLastAllel: state => {
    if (state.allels.length > 2) {
      let numberOfLastAllel = state.allels.length - 1;
      state.allels.splice(numberOfLastAllel, 1);
    }
  }
};
const actions = {
  addNewAllel: ({commit}) => {
    commit('addNewAllel');
  },
  removeLastAllel: ({commit}) => {
    commit('removeLastAllel');
  }
};

export default{
  state,
  mutations,
  actions
};
