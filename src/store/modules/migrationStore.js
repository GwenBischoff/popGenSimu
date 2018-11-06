const state = {
  generation: {
    id: 'migrationgeneration',
    sliderMin: 1,
    sliderMax: 10,
    sliderInterval: 1,
    value: 1
  },
  migrationRate: {
    id: 'migrationRate',
    value: 0.5
  },
  migrationFrequencyOfAllel: [{
    id: 'migrationFrequency1',
    allel: 0,
    value: 0.5
  },
  {
    id: 'migrationFrequency2',
    allel: 1,
    value: 0.5
  }],
  isAllelesSumOne: true
};
const mutations = {
  addNewMigrationAllel: (state, allelsFromStore) => {
    let nextNumberOfAllel = allelsFromStore.length - 1;
    state.migrationFrequencyOfAllel.push({
      id: 'migrationFrequency' + nextNumberOfAllel,
      allel: nextNumberOfAllel,
      value: 0
    });
  },
  removeLastMigrationAllel: (state, allelsFromStore) => {
    let numberOfLastAllel = allelsFromStore.length - 1;
    state.migrationFrequencyOfAllel.splice(numberOfLastAllel, 1);
  }
};
const actions = {
  addNewMigrationAllel: ({commit}, allelsFromStore) => {
    commit('addNewMigrationAllel', allelsFromStore);
  },
  removeLastMigrationAllel: ({commit}, allelsFromStore) => {
    commit('removeLastMigrationAllel', allelsFromStore);
  }
};

export default{
  state,
  mutations,
  actions
};
