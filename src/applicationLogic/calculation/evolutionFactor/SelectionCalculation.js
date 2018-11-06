import {AbstractEvolutionFactor} from './AbstractEvolutionFactor';

export class SelectionCalculation extends AbstractEvolutionFactor {
  calcAlleleFrequencies (dataOfGeneration, generation) {
    let meanFitnessOfPopulation = this._calcMeanFitness(dataOfGeneration);
    let allelFrequencyOfNextGeneration = this._calcNextAllelFrequency(dataOfGeneration, meanFitnessOfPopulation);
    return this._setDataOfGeneration(dataOfGeneration, allelFrequencyOfNextGeneration);
  }

  _calcMeanFitness (dataOfGeneration) {
    let meanFitness = 0;
    for (let allel1 = 0; allel1 < this.settings.alleles.length; allel1++) {
      for (let allel2 = 0; allel2 < this.settings.alleles.length; allel2++) {
        let fitnessOfGenotype = this._getFitness(allel1, allel2);
        meanFitness += dataOfGeneration.alleles[allel1] * dataOfGeneration.alleles[allel2] * fitnessOfGenotype;
      }
    }
    return meanFitness;
  }

  _calcMarginalFitnessOfAllel (thisAllel, dataOfGeneration) {
    let fitnessOfAllel = 0;
    for (let otherAllels = 0; otherAllels < this.settings.alleles.length; otherAllels++) {
      let fitnessOfGenotype = this._getFitness(thisAllel, otherAllels);
      fitnessOfAllel += dataOfGeneration.alleles[otherAllels] * fitnessOfGenotype;
    }
    return fitnessOfAllel;
  }

  _calcNextAllelFrequency (dataOfGeneration, meanFitnessOfPopulation) {
    let allelFrequencyOfNextGeneration = [];
    for (let allel = 0; allel < this.settings.alleles.length; allel++) {
      let lastFrequencyOfThisAllel = dataOfGeneration.alleles[allel];
      let fitnessOfThisAllel = this._calcMarginalFitnessOfAllel(allel, dataOfGeneration);
      allelFrequencyOfNextGeneration[allel] = (lastFrequencyOfThisAllel * fitnessOfThisAllel) / meanFitnessOfPopulation;
    }
    return allelFrequencyOfNextGeneration;
  }

  _getFitness (id1, id2) {
    let id = 'fitness' + id1 + id2;
    return this.settings.selectionParameters[id].value;
  }
}
