import { CalculationFacade } from '../applicationLogic/CalculationFacade';
import { mapActions } from 'vuex';

export default {
  components: {
    CalculationFacade: CalculationFacade
  },
  methods: {
    ...mapActions(['setChartData']),
    calcGenerations () {
      let dataFromCalculation;
      this._setSettings();
      let calculation = new CalculationFacade(this.settings);
      if (this.calculationQueueStore.isWeightedMeanOn) {
        dataFromCalculation = calculation.calcFrequencysByWeightedMean();
      } else {
        dataFromCalculation = calculation.calcFrequencysByQueue();
      }
      this._setStoreDataAfterCalculation(dataFromCalculation);
    },
    _setStoreDataAfterCalculation (dataFromCalculation) {
      let allelesAfterCalculation = this._setAllelesForStore(dataFromCalculation);
      let genotypesAfterCalculation = this._setGenotypesForStore(dataFromCalculation);
      this._updateChartStore(allelesAfterCalculation, genotypesAfterCalculation, dataFromCalculation.length);
    },
    _setAllelesForStore (dataFromCalculation) {
      let allelesAfterCalculation = [];
      for (let numberOfAlleles = 0; numberOfAlleles < this.allelesStore.allels.length; numberOfAlleles++) {
        allelesAfterCalculation[numberOfAlleles] = dataFromCalculation.map(x => x.alleles[numberOfAlleles]);
      }
      return allelesAfterCalculation;
    },
    _setGenotypesForStore (dataFromCalculation) {
      let genotypeValues = [];
      let genotypeNames = [];

      for (let indexOfGenotype = 0; indexOfGenotype < dataFromCalculation[0].genotypes.length; indexOfGenotype++) {
        genotypeValues[indexOfGenotype] = [];
        let name = this.getWordInLanguage('genotype') + ' ' + (dataFromCalculation[0].genotypes[indexOfGenotype].allel1 + 1) + (dataFromCalculation[0].genotypes[indexOfGenotype].allel2 + 1);
        genotypeNames.push(name);

        for (let indexOfGeneration = 0; indexOfGeneration < dataFromCalculation.length; indexOfGeneration++) {
          genotypeValues[indexOfGenotype].push(dataFromCalculation[indexOfGeneration].genotypes[indexOfGenotype].value);
        }
      }
      return {genotypeNames: genotypeNames, genotypeValues: genotypeValues};
    },
    _updateChartStore (allelesAfterCalculation, genotypesAfterCalculation, numberOfGenerations) {
      this.$store.dispatch('setAllelesData', allelesAfterCalculation);
      this.$store.dispatch('setAllelesLabels', numberOfGenerations);

      this.$store.dispatch('setGenotypeData', genotypesAfterCalculation);
      this.$store.dispatch('setGenotypeLabels', numberOfGenerations);
    }
  }
};
