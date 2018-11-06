import { AbstractCalculation } from './AbstractCalculation';

export class CalculationQueue extends AbstractCalculation {
  calcFrequenciesPerGeneration () {
    this.dataOfAllGenerations[0] = this._getFirstGeneration();
    this._setGenotypes(0);
    for (var generation = 1; generation <= this.settings.generations; generation++) {
      this._calcFrequenciesOfThisGeneration(generation, self);
      this._setGenotypes(generation);
    }
    return this.dataOfAllGenerations;
  };

  _calcFrequenciesOfThisGeneration (generation) {
    var self = this;
    this.dataOfAllGenerations[generation] = this._getNextGeneration(this.dataOfAllGenerations[generation - 1].alleles);
    this.calculationQueue.forEach(function (elementOfQueue) {
      self.dataOfAllGenerations[generation] = self.evolutionFactors[elementOfQueue.id].calcAlleleFrequencies(self.dataOfAllGenerations[generation], generation);
    });
  }
};
