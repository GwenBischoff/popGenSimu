const state = {
  allelesLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  allelesDatasets: [{
    label: 'Allel 1',
    backgroundColor: '#3a9284',
    pointRadius: 0,
    pointHoverRadius: 0,
    pointHitRadius: 4,
    borderColor: '#3a9284',
    borderWidth: 2,
    cubicInterpolationMode: 'monotone',
    fill: false,
    data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
  },
  {
    label: 'Allel 2',
    backgroundColor: '#4286f4',
    pointRadius: 0,
    pointHoverRadius: 0,
    pointHitRadius: 4,
    borderColor: '#4286f4',
    borderWidth: 2,
    cubicInterpolationMode: 'monotone',
    fill: false,
    data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
  }],
  colors: ['#3a9284', '#4286f4', '#f45941', '#f4e541', '#f4ac41', '#aaffc3', '#000080', '#911eb4', '#911eb4']
};

const getters = {
  allelesDatasets: (state) => state.allelesDatasets,
  allelesLabels: (state) => state.allelesLabels
};

const mutations = {
  setAllelesData: (state, dataFromCalculation) => {
    let temporaryDataset = [];
    for (let numberOfAlleles = 0; numberOfAlleles < dataFromCalculation.length; numberOfAlleles++) {
      temporaryDataset[numberOfAlleles] = {
        label: 'Allell ' + (numberOfAlleles + 1),
        backgroundColor: state.colors[numberOfAlleles],
        pointRadius: 0,
        pointHoverRadius: 0,
        pointHitRadius: 4,
        borderColor: state.colors[numberOfAlleles],
        borderWidth: 2,
        cubicInterpolationMode: 'monotone',
        fill: false,
        data: dataFromCalculation[numberOfAlleles]
      };
    }
    state.allelesDatasets = temporaryDataset;
  },
  setAllelesLabels: (state, numberOfGenerations) => {
    let labels = [];
    for (let generationLabel = 0; generationLabel < numberOfGenerations; generationLabel++) {
      labels.push(generationLabel);
    }
    state.allelesLabels = labels;
  }
};

const actions = {
  setAllelesData: ({commit}, dataFromCalculation) => {
    commit('setAllelesData', dataFromCalculation);
  },
  setAllelesLabels: ({commit}, numberOfGenerations) => {
    commit('setAllelesLabels', numberOfGenerations);
  }
};

export default{
  state,
  getters,
  mutations,
  actions
};
