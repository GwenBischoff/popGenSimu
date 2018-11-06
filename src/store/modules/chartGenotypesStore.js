const state = {
  genotypesLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  genotypesDatasets: [{
    label: 'Genotype 11',
    backgroundColor: '#3a9284',
    pointRadius: 0,
    pointHoverRadius: 0,
    pointHitRadius: 4,
    borderColor: '#3a9284',
    borderWidth: 2,
    cubicInterpolationMode: 'monotone',
    fill: false,
    data: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
  },
  {
    label: 'Genotype 12',
    backgroundColor: '#4286f4',
    pointRadius: 0,
    pointHoverRadius: 0,
    pointHitRadius: 4,
    borderColor: '#4286f4',
    borderWidth: 2,
    cubicInterpolationMode: 'monotone',
    fill: false,
    data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
  },
  {
    label: 'Genotype 22',
    backgroundColor: '#f45941',
    pointRadius: 0,
    pointHoverRadius: 0,
    pointHitRadius: 4,
    borderColor: '#f45941',
    borderWidth: 2,
    cubicInterpolationMode: 'monotone',
    fill: false,
    data: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
  }],
  colors: ['#3a9284', '#4286f4', '#f45941', '#f4e541', '#f4ac41', '#aaffc3', '#000080', '#911eb4', '#911eb4']
};

const getters = {
  genotypesDatasets: (state) => state.genotypesDatasets,
  genotypesLabels: (state) => state.genotypesLabels
};

const mutations = {
  setGenotypeData: (state, dataFromCalculation) => {
    let temporaryDataset = [];
    for (let numberOfGenotypes = 0; numberOfGenotypes < dataFromCalculation.genotypeNames.length; numberOfGenotypes++) {
      temporaryDataset[numberOfGenotypes] = {
        label: dataFromCalculation.genotypeNames[numberOfGenotypes],
        backgroundColor: state.colors[numberOfGenotypes],
        pointRadius: 0,
        pointHoverRadius: 0,
        pointHitRadius: 4,
        borderColor: state.colors[numberOfGenotypes],
        borderWidth: 2,
        cubicInterpolationMode: 'monotone',
        fill: false,
        data: dataFromCalculation.genotypeValues[numberOfGenotypes]
      };
    }
    state.genotypesDatasets = temporaryDataset;
  },
  setGenotypeLabels: (state, numberOfGenerations) => {
    let labels = [];
    for (let generationLabel = 0; generationLabel < numberOfGenerations; generationLabel++) {
      labels.push(generationLabel);
    }
    state.genotypesLabels = labels;
  }
};

const actions = {
  setGenotypeData: ({commit}, dataFromCalculation) => {
    commit('setGenotypeData', dataFromCalculation);
  },
  setGenotypeLabels: ({commit}, numberOfGenerations) => {
    commit('setGenotypeLabels', numberOfGenerations);
  }
};

export default{
  state,
  getters,
  mutations,
  actions
};
