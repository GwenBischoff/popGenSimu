import {AbstractEvolutionFactor} from './AbstractEvolutionFactor';

export class FinitePopulationCalculation extends AbstractEvolutionFactor {
  calcAlleleFrequencies (dataOfGeneration, generation) {
    let numberOfGametes;
    if (this._isBottleneckGeneration(generation)) {
      numberOfGametes = 2 * this.settings.finitePopulationParameters.bottleneckPopulationSize;
    } else {
      numberOfGametes = 2 * this.settings.finitePopulationParameters.populationSize;
    }
    let gametesPerAllele = this._calcAllelesForGametes(numberOfGametes, dataOfGeneration);
    let allelFrequencies = this._calcFrequencyByGametes(dataOfGeneration, gametesPerAllele, numberOfGametes);
    return this._setDataOfGeneration(dataOfGeneration, allelFrequencies);
  }

  _isBottleneckGeneration (generation) {
    return (this.settings.finitePopulationParameters.bottleneckIsSet && (this.settings.finitePopulationParameters.bottleneckStart <= generation && this.settings.finitePopulationParameters.bottleneckEnd >= generation));
  }

  _calcAllelesForGametes (numberOfDiploidAlleles, dataOfGeneration) {
    let gametesPerAllele = this._setIndividualNumbersToZero(dataOfGeneration);
    for (let populationIndividual = 0; populationIndividual < numberOfDiploidAlleles; populationIndividual++) {
      gametesPerAllele = this._getNewAllele(dataOfGeneration, gametesPerAllele);
    }
    return gametesPerAllele;
  }

  _getNewAllele (dataOfGeneration, gametesPerAllele) {
    let individualReproducing = this._roundToThreeDigits(Math.random());
    let allelesFrequencySum = 1;

    for (let allel = 0; allel < dataOfGeneration.alleles.length; allel++) {
      let frequencyOfThisAllel = this._roundToThreeDigits(dataOfGeneration.alleles[allel]);
      allelesFrequencySum = this._roundToThreeDigits((allelesFrequencySum - frequencyOfThisAllel));

      if ((individualReproducing >= allelesFrequencySum) && dataOfGeneration.alleles[allel] !== 0) {
        gametesPerAllele[allel]++;
        break;
      }
    }
    return gametesPerAllele;
  }

  _calcFrequencyByGametes (dataOfGeneration, sumOfIndividuals, numberOfDiploidAlleles) {
    let allelFrequencies = [];
    for (let allel = 0; allel < dataOfGeneration.alleles.length; allel++) {
      allelFrequencies[allel] = sumOfIndividuals[allel] / numberOfDiploidAlleles;
    }
    return allelFrequencies;
  }

  _setIndividualNumbersToZero (dataOfGeneration) {
    let sumOfIndividuals = [];
    for (let allel = 0; allel < dataOfGeneration.alleles.length; allel++) {
      sumOfIndividuals[allel] = 0;
    }
    return sumOfIndividuals;
  }

  _roundToThreeDigits (number) {
    return Math.round(number * 1000) / 1000;
  }
}
