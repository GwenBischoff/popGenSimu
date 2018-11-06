import {AbstractEvolutionFactor} from './AbstractEvolutionFactor';

export class MigrationCalculation extends AbstractEvolutionFactor {
  calcAlleleFrequencies (dataOfGeneration, generation) {
    if (this.settings.migrationParameters.migrationGeneration === generation) {
      for (let allel = 0; allel < this.settings.alleles.length; allel++) {
        dataOfGeneration.alleles[allel] = this._getFractionOfModelPopulation(dataOfGeneration, allel) + this._getFractionOfOtherPopulation(allel);
      }
    }
    return dataOfGeneration;
  }

  _calcForGeneration (generation) {
    return this.settings.migrationParameters.migrationGeneration === generation;
  }

  _getFractionOfModelPopulation (dataOfGeneration, allel) {
    return (1 - this.settings.migrationParameters.migrationRate) * dataOfGeneration.alleles[allel];
  }

  _getFractionOfOtherPopulation (allel) {
    return this.settings.migrationParameters.migrationRate * this.settings.migrationParameters.migrationAllelFrequencys[allel].allelFrequency;
  }
}
