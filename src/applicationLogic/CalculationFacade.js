import {CalculationQueue} from './calculation/CalculationQueue';
import {CalculationWeightedMean} from './calculation/CalculationWeightedMean';

export class CalculationFacade {
  constructor (settings) {
    this.settings = settings;
  }

  calcFrequencysByWeightedMean () {
    let calculation = new CalculationWeightedMean(this.settings);
    return calculation.calcFrequenciesPerGeneration();
  }

  calcFrequencysByQueue () {
    let calculation = new CalculationQueue(this.settings);
    return calculation.calcFrequenciesPerGeneration();
  }
}
