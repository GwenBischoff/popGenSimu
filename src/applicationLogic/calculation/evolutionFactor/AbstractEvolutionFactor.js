export class AbstractEvolutionFactor {
  constructor (settings) {
    this.settings = settings;
  }
  calcAlleleFrequencies () {

  }
  _calcForGeneration (generation) {
    return true;
  }
  _setDataOfGeneration (dataOfGeneration, allelFrequencies) {
    for (let allel = 0; allel < this.settings.alleles.length; allel++) {
      dataOfGeneration.alleles[allel] = allelFrequencies[allel];
    }
    return dataOfGeneration;
  }
}
