import { Settings } from './settings/Settings';
import { SelectionSettings } from './settings/SelectionSettings';
import { AllelSettings } from './settings/AllelSettings';
import { MutationSettings } from './settings/MutationSettings';
import { MigrationSettings } from './settings/MigrationSettings';
import { MigrationFrequencySettings } from './settings/MigrationFrequencySettings';
import { FinitePopulationSettings } from './settings/FinitePopulationSettings';
import {InbreedingSettings} from './settings/InbreedingSettings';

export default {
  components: {
    Settings
  },
  data () {
    return {
      settings: new Settings()
    };
  },
  methods: {
    _setSettings () {
      this.settings = new Settings();
      this._setSettingsGenerations(this.generationsStore.value);

      this._setSettingsAllel();
      this._setSettingsSelection();
      this._setSettingsMutation();
      this._setSettingsMigration();
      this._setSettingsFinitePopulation();
      this._setSettingsInbreeding();
      this._setSettingsQueue();
    },
    _setSettingsGenerations (generations) {
      this.settings.generations = generations;
    },
    _setSettingsAllel () {
      let self = this;
      this.allelesStore.allels.forEach(function (allel) {
        let allelData = new AllelSettings(allel.id, allel.value);
        self.settings.alleles.push(allelData);
      });
    },
    _setSettingsSelection () {
      let self = this;
      this.selectionStore.fitness.forEach(function (fitness) {
        self._setSelectionParametersAsObject(fitness.allel1, fitness.allel2, fitness.value);

        if (fitness.allel1 !== fitness.allel2) {
          self._setSelectionParametersAsObject(fitness.allel2, fitness.allel1, fitness.value);
        }
      });
    },
    _setSettingsMutation () {
      let self = this;
      this.mutationStore.mutation.forEach(function (mutation) {
        self._setMutationParametersAsObject(mutation.allel1, mutation.allel2, mutation.value);
      });
    },
    _setSettingsMigration () {
      let migrationFrequencyOfAllel = [];
      this.migrationStore.migrationFrequencyOfAllel.forEach(function (migrationFrequency, index) {
        migrationFrequencyOfAllel[index] = new MigrationFrequencySettings(migrationFrequency.id, migrationFrequency.allel, migrationFrequency.value);
      });

      this.settings.migrationParameters = new MigrationSettings(this.migrationStore.generation.value, this.migrationStore.migrationRate.value, migrationFrequencyOfAllel);
    },
    _setSettingsFinitePopulation () {
      this.settings.finitePopulationParameters = new FinitePopulationSettings(this.finitePopulationStore.populationSizeValue, this.finitePopulationStore.bottleneckIsSet, this.finitePopulationStore.bottleneckPopulationSizeValue, this.finitePopulationStore.bottleneckGenerations);
    },
    _setSettingsInbreeding () {
      this.settings.inbreedingParameters = new InbreedingSettings(this.inbreedingStore.id, this.inbreedingStore.value, this.inbreedingStore.isOn);
    },
    _setSelectionParametersAsObject (allel1, allel2, value) {
      let id = 'fitness' + allel1 + allel2;
      let selection = new SelectionSettings(id, allel1, allel2, value);
      let obj = {};
      obj[id] = selection;
      this.settings.selectionParameters = Object.assign(this.settings.selectionParameters, obj);
    },
    _setMutationParametersAsObject (allel1, allel2, value) {
      let id = 'mutation' + allel1 + allel2;
      let mutation = new MutationSettings(id, allel1, allel2, value);
      let obj = {};
      obj[id] = mutation;
      this.settings.mutationParameters = Object.assign(this.settings.mutationParameters, obj);
    },
    _setSettingsQueue () {
      this.settings.calculationQueue = this.calculationQueueStore.calculationQueue;
    }
  }
};
