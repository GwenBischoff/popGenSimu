import {AbstractCalculation} from './AbstractCalculation';
import {DataOfGeneration} from '../DataOfGeneration';

export class CalculationWeightedMean extends AbstractCalculation {
  calcFrequenciesPerGeneration () {
    this.dataOfAllGenerations[0] = this._getFirstGeneration();
    this._setGenotypes(0);

    for (var generation = 1; generation <= this.settings.generations; generation++) {
      let weightedMeanData = {};
      this.dataOfAllGenerations[generation] = this._getNextGeneration(this.dataOfAllGenerations[generation - 1].alleles);
      weightedMeanData = this._calcFrequenciesOfThisGeneration(generation, weightedMeanData);
      this._calcWeightedMean(generation, weightedMeanData);
      this._setGenotypes(generation);
    }
    return this.dataOfAllGenerations;
  };

  _calcFrequenciesOfThisGeneration (generation, weightedMeanData) {
    let self = this;
    this.calculationQueue.forEach(function (elementOfQueue) {
      let calculationName = elementOfQueue.id;
      let copyOfThisGeneration = self._copyThisGeneration(generation);
      if (self.evolutionFactors[calculationName]._calcForGeneration(generation)) {
        weightedMeanData[calculationName] = self.evolutionFactors[calculationName].calcAlleleFrequencies(copyOfThisGeneration, generation);
      }
    });
    return weightedMeanData;
  }

  _copyThisGeneration (generation) {
    let dataOfThisGeneration = new DataOfGeneration();
    for (let allel = 0; allel < this.dataOfAllGenerations[generation].alleles.length; allel++) {
      dataOfThisGeneration.alleles.push(this.dataOfAllGenerations[generation].alleles[allel]);
    }
    return dataOfThisGeneration;
  }

  _calcWeightedMean (generation, weightedMeanData) {
    let totalWeight = 0;
    let meanOfAllel = this._getArrayOfAllelesLengthWithValueZero(generation);
    for (let [evolutionFactor, dataOfEvolutionFactor] of Object.entries(weightedMeanData)) {
      let weight = this._getEvolutionFactorWeight(evolutionFactor);
      meanOfAllel = this._getMeanOfAlleles(dataOfEvolutionFactor, meanOfAllel, weight);
      totalWeight += weight;
    }
    this._setAllelFrequencyByWeightedMean(generation, meanOfAllel, totalWeight);
  }

  _getMeanOfAlleles (dataOfEvolutionFactor, meanOfAllel, weight) {
    for (let nrOfAllel = 0; nrOfAllel < dataOfEvolutionFactor.alleles.length; nrOfAllel++) {
      let allelFrequency = dataOfEvolutionFactor.alleles[nrOfAllel];
      meanOfAllel[nrOfAllel] = meanOfAllel[nrOfAllel] + (allelFrequency * weight);
    }
    return meanOfAllel;
  }

  _getArrayOfAllelesLengthWithValueZero (generation) {
    let meanOfAllel = [];
    this.dataOfAllGenerations[generation].alleles.forEach(function (allel, index) {
      meanOfAllel[index] = 0;
    });
    return meanOfAllel;
  }

  _getEvolutionFactorWeight (evolutionFactorId) {
    let evolutionFactor = this.calculationQueue.find(function (element) {
      return element.id === evolutionFactorId;
    });
    return Number(evolutionFactor.weight);
  }

  _setAllelFrequencyByWeightedMean (generation, meanOfAllel, totalWeight) {
    let self = this;
    if (totalWeight !== 0) {
      this.dataOfAllGenerations[generation].alleles.forEach(function (allel, index) {
        self.dataOfAllGenerations[generation].alleles[index] = meanOfAllel[index] / totalWeight;
      });
    }
  }
};
