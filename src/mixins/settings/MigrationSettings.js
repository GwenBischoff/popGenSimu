export class MigrationSettings {
  constructor (generations, migrationRate, migrationAllelFrequencys) {
    this.migrationGeneration = generations;
    this.migrationRate = migrationRate;
    this.migrationAllelFrequencys = migrationAllelFrequencys;
  }
}
