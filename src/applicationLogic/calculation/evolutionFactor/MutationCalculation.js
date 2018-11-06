import {AbstractEvolutionFactor} from './AbstractEvolutionFactor';

export class MutationCalculation extends AbstractEvolutionFactor {
  calcAlleleFrequencies (dataOfGeneration, generation) {
    let allelFrequencyOfNextGeneration = [];

    for (let allel = 0; allel < this.settings.alleles.length; allel++) {
      let sumForwardMutation = this._getSumForwardMutation(allel);
      let sumBackwardMutation = this._getSumBackwardMutation(allel, dataOfGeneration);
      allelFrequencyOfNextGeneration[allel] = (dataOfGeneration.alleles[allel] * (1 - sumForwardMutation)) + sumBackwardMutation;
    }
    return this._setDataOfGeneration(dataOfGeneration, allelFrequencyOfNextGeneration);
  }

  _getSumForwardMutation (allel) {
    let sumForwardMutationOfThisAllel = 0;
    for (let allelToMutateTo = 0; allelToMutateTo < this.settings.alleles.length; allelToMutateTo++) {
      if (allel !== allelToMutateTo) {
        sumForwardMutationOfThisAllel += this._getMutation(allel, allelToMutateTo);
      }
    }
    return sumForwardMutationOfThisAllel;
  }

  _getSumBackwardMutation (allel, dataOfGeneration) {
    let sumBackwardMutation = 0;
    for (let allelToMutateFrom = 0; allelToMutateFrom < this.settings.alleles.length; allelToMutateFrom++) {
      if (allel !== allelToMutateFrom) {
        let mutationSettingsForTheseAllels = this._getMutation(allelToMutateFrom, allel);
        sumBackwardMutation += dataOfGeneration.alleles[allelToMutateFrom] * mutationSettingsForTheseAllels;
      }
    }
    return sumBackwardMutation;
  }
  _getMutation (id1, id2) {
    let id = 'mutation' + id1 + id2;
    return this.settings.mutationParameters[id].value;
  }
}
