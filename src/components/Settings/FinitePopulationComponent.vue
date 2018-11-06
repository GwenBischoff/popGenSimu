<template>
  <div>
    <b-row>
      <b-col class="col-3">
        <b-row @click="showFinitePopulation = !showFinitePopulation">
          <b-col class="col-4">
            <SettingsCaretComponent :show="showFinitePopulation"/>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="col-6"
        @click="showFinitePopulation = !showFinitePopulation">{{ getWordInLanguage('finitePopulation') }}</b-col>
      <b-col class="col-3">
        <SettingsButtonComponent
          :calculationQueueData="calculationQueueData"
          @childButtonChanged="childButtonChanged($event)"
        />
      </b-col>
    </b-row>
    <div
      v-if="showFinitePopulation"
      id="finitePopulation">
      <hr>
      <ModalComponent
        :modalName="getWordInLanguage('finitePopulation')"
        :modalDescription="getWordInLanguage('finitePopulationDescription')"
      />
      <SliderComponent
        :name="getWordInLanguage('populationSize')"
        :id="finitePopulationStore.id"
        :sliderMax="finitePopulationStore.populationSizeMax"
        :sliderMin="finitePopulationStore.populationSizeMin"
        :sliderInterval="finitePopulationStore.populationSizeInterval"
        :value="finitePopulationStore.populationSizeValue"
        @childValueChanged="childGenerationChanged($event)"
      />
    </div>
    <div
      v-if="showFinitePopulation"
      id="populationBottleneck">
      <hr>
      <BottleneckComponent
        :fintePopulationisActive="isActive"
      />
    </div>
  </div>
</template>

<script>
import SliderComponent from '../MultiUse/SliderComponent';
import SettingsButtonComponent from '../MultiUse/SettingsButtonComponent';
import SettingsCaretComponent from '../MultiUse/SettingsCaretComponent';
import BottleneckComponent from './BottleneckComponent';
import ModalComponent from '../MultiUse/ModalComponent';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'FinitePopulationComponent',
  components: {
    SliderComponent,
    SettingsButtonComponent,
    BottleneckComponent,
    SettingsCaretComponent,
    ModalComponent
  },
  data () {
    return {
      calculationQueueData: {
        id: 'finitePopulation',
        weight: 1
      },
      showFinitePopulation: false,
      isActive: false
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['finitePopulationStore'])
  },
  methods: {
    childGenerationChanged (value) {
      this.finitePopulationStore.populationSizeValue = Number(value);
    },
    childButtonChanged (value) {
      this.isActive = (value === 'true' || value === true);
      this.showFinitePopulation = value;
    }
  }
};
</script>
