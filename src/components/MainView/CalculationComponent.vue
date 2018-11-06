<template>
  <div id="calc">
    <b-alert
      class="alert zIndexBack"
      variant="danger"
      :show="calcButtonDisabled">
      {{getWordInLanguage('alleleSum')}}
      </b-alert>
    <b-btn
      id="calcBtn"
      :disabled="isDisabled()"
      class="btn"
      @click="startCalculation">
      <icon
        :class="{'displayNone': isCalculating}"
        class="calcIcon"
        name="line-chart"
      />
      <icon
        class="calcIcon spin"
        :class="{'displayNone': !isCalculating}"
        name="spinner"
      />
    </b-btn>
    <div>{{getWordInLanguage('generate')}}</div>
  </div>
</template>
<script>
import calculationMixin from '../../mixins/calculationMixin';
import settingsMixin from '../../mixins/settingsMixin';

import { mapState, mapGetters } from 'vuex';
export default {
  name: 'CalculationComponent',
  mixins: [ settingsMixin, calculationMixin ],
  data () {
    return {
      calcButtonDisabled: false,
      isCalculating: false
    };
  },
  computed: {
    ...mapGetters(['isCalculationActive', 'getWordInLanguage']),
    ...mapState(['generationsStore', 'allelesStore', 'selectionStore', 'mutationStore', 'migrationStore', 'finitePopulationStore', 'inbreedingStore', 'chartAllelesStore', 'calculationQueueStore'])
  },
  methods: {
    startCalculation () {
      this.isCalculating = true;
      setTimeout(function () {
        this.calcGenerations();
        this.isCalculating = false;
      }.bind(this), 50);
    },
    isDisabled () {
      let migrationIsActive = this.isCalculationActive({id: 'migration'});
      if (this.isCalculating) {
        return true;
      }
      if (!this.allelesStore.isAllelesSumOne || (!this.migrationStore.isAllelesSumOne && migrationIsActive)) {
        this.calcButtonDisabled = true;
        return true;
      }
      this.calcButtonDisabled = false;
      return false;
    }
  }
};
</script>

<style scoped>
  #calc{
    margin: -50px 0 25px 0;
    float:right;
  }
  .calcIcon {
    margin: 0 -3px -6px -4px;
    width: auto;
    height: 1.6em;
    max-width: 100%;
    max-height: 100%;
  }
  .alert{
    z-index: 10;
    margin: -100px 0 0 -100px;
    position: absolute;
  }
  .alert:after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    right: 50px;
    top: 73px;
    border: 13px solid;
    border-color: #f8d7da #f8d7da transparent transparent;
  }
  .spin{
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .displayNone {
    display: none
  }
  .zIndexBack{
    z-index: 0;
  }
</style>
