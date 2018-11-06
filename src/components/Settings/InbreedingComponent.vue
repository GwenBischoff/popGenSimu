<template>
  <div>
    <b-row>
      <b-col class="col-3">
        <b-row @click="showInbreeding = !showInbreeding">
          <b-col class="col-4">
            <SettingsCaretComponent :show="showInbreeding"/>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="col-6"
        @click="showInbreeding = !showInbreeding">{{ getWordInLanguage('inbreeding') }}</b-col>
      <b-col class="col-3">
        <b-button
          id="button"
          :class="{'calculationOn': inbreedingStore.isOn, 'calculationOff': !inbreedingStore.isOn}"
          @click="inbreedingChanged">{{ getButtonText() }}</b-button>
      </b-col>
    </b-row>
    <div
      v-if="showInbreeding"
      id="finitePopulation">
      <hr>
      <ModalComponent
        :modalName="getWordInLanguage('inbreeding')"
        :modalDescription="getWordInLanguage('inbreedingDescription')"
      />
      <InbreedingSliderComponent/>
    </div>
  </div>
</template>

<script>
import SettingsButtonComponent from '../MultiUse/SettingsButtonComponent';
import SettingsCaretComponent from '../MultiUse/SettingsCaretComponent';
import ModalComponent from '../MultiUse/ModalComponent';
import InbreedingSliderComponent from './InbreedingSliderComponent';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'InbreedingComponent',
  components: {
    InbreedingSliderComponent,
    SettingsButtonComponent,
    SettingsCaretComponent,
    ModalComponent
  },
  data () {
    return {
      showInbreeding: false
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['inbreedingStore'])
  },
  methods: {
    getButtonText () {
      if (this.inbreedingStore.isOn) {
        return this.getWordInLanguage('on');
      } else {
        return this.getWordInLanguage('off');
      }
    },
    inbreedingChanged () {
      this.inbreedingStore.isOn = !this.inbreedingStore.isOn;
      this.showInbreeding = this.inbreedingStore.isOn;
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
  .wrapper{
    padding-bottom: 20px;
  }
  .name{
    float: left;
  }
  .input{
    width: 40px;
    float: left;
    margin-left: -25px;
  }
</style>
