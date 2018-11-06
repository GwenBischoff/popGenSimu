export class FinitePopulationSettings {
  constructor (populationSize, bottleneckIsSet, bottleneckPopulationSize, bottleneckGenerations) {
    this.populationSize = populationSize;
    this.bottleneckIsSet = bottleneckIsSet;
    this.bottleneckPopulationSize = bottleneckPopulationSize;
    this.bottleneckStart = bottleneckGenerations[0];
    this.bottleneckEnd = bottleneckGenerations[1];
  }
}
