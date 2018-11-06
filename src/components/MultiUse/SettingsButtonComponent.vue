<template>
  <b-button
    id="button"
    :class="{'calculationOn': calculationOn, 'calculationOff': !calculationOn}"
    @click="changeCalculationQueue">
    {{ getButtonText() }}
  </b-button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CaculationButtonComponent',
  props: {calculationQueueData: Object},
  data () {
    return {
      calculationOn: false
    };
  },
  computed: {
    ...mapGetters(['isCalculationActive', 'getWordInLanguage'])
  },
  beforeMount () {
    this.isButtonActive();
  },
  methods: {
    ...mapActions(['addCalculationToQueue', 'removeCalculationFromQueue']),
    changeCalculationQueue () {
      this.calculationOn = !this.calculationOn;
      if (this.calculationOn) {
        this.addCalculationToQueue(this.calculationQueueData);
      } else {
        this.removeCalculationFromQueue(this.calculationQueueData);
      }
      this.$emit('childButtonChanged', this.calculationOn);
    },
    isButtonActive () {
      let isActive = this.isCalculationActive(this.calculationQueueData);
      this.calculationOn = isActive;
      this.$emit('childButtonChanged', this.calculationOn);
    },
    getButtonText () {
      if (this.calculationOn) {
        return this.getWordInLanguage('on');
      } else {
        return this.getWordInLanguage('off');
      }
    }
  }
};
</script>

<style scoped>
  #button {
    padding: 2px;
    height: 100%;
    width: 100%
  }
  .calculationOn {
    background-color: #3a9284;
  }
  .calculationOff {
    background-color: #f45941;
  }
</style>
