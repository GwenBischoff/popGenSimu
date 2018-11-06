export class AbstractGenotypeCalculation {
  constructor (settings) {
    this.settings = settings;
  }
  calcGenotypes (dataOfGeneration) {
    let genotypesOfThisGeneration = [];
    for (let allel1 = 0; allel1 < this.settings.alleles.length; allel1++) {
      for (let allel2 = allel1; allel2 < this.settings.alleles.length; allel2++) {
        genotypesOfThisGeneration = this._setGenotypeOfThisGeneration(genotypesOfThisGeneration, dataOfGeneration, allel1, allel2);
      }
    }
    return genotypesOfThisGeneration;
  }
}
