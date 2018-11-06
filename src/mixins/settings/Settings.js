export class Settings {
  constructor () {
    this.generations = 0;
    this.alleles = [];
    this.selectionParameters = {};
    this.mutationParameters = {};
    this.migrationParameters = {};
    this.finitePopulationParameters = {};
    this.inbreedingParameters = {};
    this.calculationQueue = [];
  }
}
