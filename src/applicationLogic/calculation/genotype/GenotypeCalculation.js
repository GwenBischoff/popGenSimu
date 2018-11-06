import { DataOfGenotype } from '../../DataOfGenotype';
import {AbstractGenotypeCalculation} from './AbstractGenotypeCalculation';

export class GenotypeCalculation extends AbstractGenotypeCalculation {
  _setGenotypeOfThisGeneration (genotypesOfThisGeneration, dataOfGeneration, allel1, allel2) {
    if (allel2 !== allel1) {
      return this._setHeterozygoteGenotype(genotypesOfThisGeneration, dataOfGeneration, allel1, allel2);
    } else {
      return this._setHomozygoteGenotype(genotypesOfThisGeneration, dataOfGeneration, allel1, allel2);
    }
  }
  _setHomozygoteGenotype (genotypesOfThisGeneration, dataOfGeneration, allel1, allel2) {
    let genotypeFrequency = (dataOfGeneration.alleles[allel1] * dataOfGeneration.alleles[allel2]);
    return this._setGenotype(genotypesOfThisGeneration, allel1, allel2, genotypeFrequency);
  }

  _setHeterozygoteGenotype (genotypesOfThisGeneration, dataOfGeneration, allel1, allel2) {
    let genotypeFrequency = (dataOfGeneration.alleles[allel1] * dataOfGeneration.alleles[allel2]);
    genotypeFrequency = genotypeFrequency * 2;
    return this._setGenotype(genotypesOfThisGeneration, allel1, allel2, genotypeFrequency);
  }

  _setGenotype (genotypesOfThisGeneration, allel1, allel2, value) {
    genotypesOfThisGeneration.push(new DataOfGenotype(allel1, allel2, value));
    return genotypesOfThisGeneration;
  }
}
