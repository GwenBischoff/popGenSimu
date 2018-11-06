import {GenotypeCalculation} from './genotype/GenotypeCalculation';
import {InbreedingGenotypeCalculation} from './genotype/InbreedingGenotypeCalculation';
import {DataOfGeneration} from '../DataOfGeneration';
import {SelectionCalculation} from './evolutionFactor/SelectionCalculation';
import {MigrationCalculation} from './evolutionFactor/MigrationCalculation';
import {MutationCalculation} from './evolutionFactor/MutationCalculation';
import {FinitePopulationCalculation} from './evolutionFactor/FinitePopulationCalculation';

export class AbstractCalculation {
  constructor (settings) {
    if (new.target === AbstractCalculation) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
    this.settings = settings;
    this.calculationQueue = this.settings.calculationQueue;
    this.dataOfAllGenerations = [];
    this.evolutionFactors = {
      selection: new SelectionCalculation(this.settings),
      mutation: new MutationCalculation(this.settings),
      migration: new MigrationCalculation(this.settings),
      finitePopulation: new FinitePopulationCalculation(this.settings)
    };
  }
  calcFrequenciesPerGeneration () {

  }
  _setGenotypes (generation) {
    let genotype;
    if (this.settings.inbreedingParameters.isSet) {
      genotype = new InbreedingGenotypeCalculation(this.settings);
    } else {
      genotype = new GenotypeCalculation(this.settings);
    }
    let genotypeFrequencies = genotype.calcGenotypes(this.dataOfAllGenerations[generation]);
    this.dataOfAllGenerations[generation].genotypes = genotypeFrequencies;
  }

  _getFirstGeneration () {
    let dataOfFirstGeneration = new DataOfGeneration();
    for (let allel = 0; allel < this.settings.alleles.length; allel++) {
      dataOfFirstGeneration.alleles.push(this.settings.alleles[allel].value);
    }
    return dataOfFirstGeneration;
  }

  _getNextGeneration (allelesOfLastGeneration) {
    let dataOfNextGeneration = new DataOfGeneration();
    for (let allel = 0; allel < allelesOfLastGeneration.length; allel++) {
      dataOfNextGeneration.alleles.push(allelesOfLastGeneration[allel]);
    }
    return dataOfNextGeneration;
  }
}
