import Vue from 'vue';
import Vuex from 'vuex';
import generationsStore from './modules/generationsStore';
import allelesStore from './modules/allelesStore';
import selectionStore from './modules/selectionStore';
import mutationStore from './modules/mutationStore';
import migrationStore from './modules/migrationStore';
import finitePopulationStore from './modules/finitePopulationStore';
import inbreedingStore from './modules/inbreedingStore';
import chartAllelesStore from './modules/chartAllelesStore';
import chartGenotypesStore from './modules/chartGenotypesStore';
import calculationQueueStore from './modules/calculationQueueStore';
import languageStore from './modules/languageStore';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    generationsStore,
    allelesStore,
    selectionStore,
    mutationStore,
    migrationStore,
    finitePopulationStore,
    inbreedingStore,
    chartAllelesStore,
    chartGenotypesStore,
    calculationQueueStore,
    languageStore
  }
});
