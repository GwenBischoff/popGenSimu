import { DataOfGenotype } from '../../DataOfGenotype';
import {AbstractGenotypeCalculation} from './AbstractGenotypeCalculation';

export class InbreedingGenotypeCalculation extends AbstractGenotypeCalculation {
  _setGenotypeOfThisGeneration (genotypesOfThisGeneration, dataOfGeneration, allel1, allel2) {
    if (allel2 !== allel1) {
      return this._setHeterozygoteGenotypeInbreeding(genotypesOfThisGeneration, dataOfGeneration, allel1, allel2);
    } else {
      return this._setHomozygoteGenotypeInbreeding(genotypesOfThisGeneration, dataOfGeneration, allel1, allel2);
    }
  }
  _setHeterozygoteGenotypeInbreeding (genotypesOfThisGeneration, dataOfGeneration, allel1, allel2) {
    let correlationCoefficient = this.settings.inbreedingParameters.value;
    let genotypeFrequency = (1 - correlationCoefficient) * dataOfGeneration.alleles[allel1] * dataOfGeneration.alleles[allel2];
    genotypeFrequency = genotypeFrequency * 2;
    return this._setGenotype(genotypesOfThisGeneration, allel1, allel2, genotypeFrequency);
  }

  _setHomozygoteGenotypeInbreeding (genotypesOfThisGeneration, dataOfGeneration, allel1, allel2) {
    let correlationCoefficient = this.settings.inbreedingParameters.value;
    let genotypeFrequency = ((1 - correlationCoefficient) * (dataOfGeneration.alleles[allel1] * dataOfGeneration.alleles[allel1])) + (correlationCoefficient * dataOfGeneration.alleles[allel2]);

    return this._setGenotype(genotypesOfThisGeneration, allel1, allel2, genotypeFrequency);
  }

  _setGenotype (genotypesOfThisGeneration, allel1, allel2, value) {
    genotypesOfThisGeneration.push(new DataOfGenotype(allel1, allel2, value));
    return genotypesOfThisGeneration;
  }
}
