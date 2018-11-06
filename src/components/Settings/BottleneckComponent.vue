<template>
  <div>
    <b-row>
      <b-col class="col-3">
        <b-row>
          <b-col
            class="col-1"
            @click="showPopulationBottleneck = !showPopulationBottleneck"
          />
          <b-col
            class="col-1"
            @click="showPopulationBottleneck = !showPopulationBottleneck">
            <SettingsCaretComponent
              :show="showPopulationBottleneck"
            />
          </b-col>
          <b-col
            class="col-1"
            @click="showPopulationBottleneck = !showPopulationBottleneck"
          />
        </b-row>
      </b-col>
      <b-col
        class="col-6"
        @click="showPopulationBottleneck = !showPopulationBottleneck">{{ getWordInLanguage('populationBottleneck') }}</b-col>
      <b-col class="col-3">
        <b-button
          id="button"
          :class="{'calculationOn': finitePopulationStore.bottleneckIsSet, 'calculationOff': !finitePopulationStore.bottleneckIsSet, 'disabled': !fintePopulationisActive}"
          @click="changeFinitePopulationStore">{{ getButtonText() }}</b-button>
      </b-col>
    </b-row>
    <div
      v-if="showPopulationBottleneck"
      id="populationBottleneckSettings">
      <hr>
      <ModalComponent
        :modalName="getWordInLanguage('populationBottleneck')"
        :modalDescription="getWordInLanguage('populationBottleneckDescription')"
      />
      <BottleneckSettingsComponent/>
    </div>
  </div>
</template>

<script>
import SliderComponent from '../MultiUse/SliderComponent';
import BottleneckSettingsComponent from './BottleneckSettingsComponent';
import SettingsCaretComponent from '../MultiUse/SettingsCaretComponent';
import ModalComponent from '../MultiUse/ModalComponent';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'FinitePopulationComponent',
  components: {
    SliderComponent,
    BottleneckSettingsComponent,
    SettingsCaretComponent,
    ModalComponent
  },
  props: {
    fintePopulationisActive: Boolean
  },
  data () {
    return {
      showPopulationBottleneck: false
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['finitePopulationStore'])
  },
  methods: {
    changeFinitePopulationStore () {
      if (this.fintePopulationisActive) {
        this.finitePopulationStore.bottleneckIsSet = !this.finitePopulationStore.bottleneckIsSet;
        if (this.finitePopulationStore.bottleneckIsSet) {
          this.showPopulationBottleneck = true;
        } else {
          this.showPopulationBottleneck = false;
        }
      }
    },
    getButtonText () {
      if (this.finitePopulationStore.bottleneckIsSet) {
        return this.getWordInLanguage('on');
      } else {
        return this.getWordInLanguage('off');
      }
    }
  }
};
</script>

<style scoped>
  .calculationOn {
    background-color: #3a9284;
  }
  .calculationOff {
    background-color: #f45941;
  }
  #button {
    padding: 2px;
    height: 100%;
    width: 100%
  }
</style>
