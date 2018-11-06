<template>
  <div>
    <b-row>
      <b-col class="col-3">
        <b-row @click="showSelection = !showSelection">
          <b-col class="col-4">
            <SettingsCaretComponent :show="showSelection"/>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="col-6"
        @click="showSelection = !showSelection">
        {{ getWordInLanguage('selection') }}
      </b-col>
      <b-col class="col-3">
        <SettingsButtonComponent
          :calculationQueueData="calculationQueueData"
          @childButtonChanged="childButtonChanged($event)"
        />
      </b-col>
    </b-row>
    <div v-if="showSelection" id="selection">
      <hr>
      <ModalComponent
        :modalName="getWordInLanguage('selection')"
        :modalDescription="getWordInLanguage('selectionDescription')"
      />
      <template v-for="(fitness, index) in selectionStore.fitness">
        <SliderComponent
          :value="fitness.value"
          :sliderInterval="slider.interval"
          :sliderMax="slider.max"
          :key="index"
          :name="getFitnessName (index)"
          :id="fitness.id"
          :isFloatAllowed="true"
          @childValueChanged="childChanged($event, index)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import SliderComponent from '../MultiUse/SliderComponent';
import SettingsButtonComponent from '../MultiUse/SettingsButtonComponent';
import SettingsCaretComponent from '../MultiUse/SettingsCaretComponent';
import { mapState, mapGetters } from 'vuex';
import ModalComponent from '../MultiUse/ModalComponent';

export default {
  name: 'SelectionComponent',
  components: {
    ModalComponent,
    SliderComponent,
    SettingsButtonComponent,
    SettingsCaretComponent
  },
  data () {
    return {
      slider: {
        max: 1,
        interval: 0.001
      },
      calculationQueueData: {
        id: 'selection',
        weight: 1
      },
      showSelection: false
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['selectionStore'])
  },
  methods: {
    childChanged (value, index) {
      this.selectionStore.fitness[index].value = Number(value);
    },
    getFitnessName (index) {
      return this.getWordInLanguage('fitness') + ' ' + (this.selectionStore.fitness[index].allel1 + 1) + (this.selectionStore.fitness[index].allel2 + 1);
    },
    childButtonChanged (calculationOn) {
      this.showSelection = calculationOn;
    }
  }
};
</script>

<style scoped>
#modal{
  float:right;
}
</style>
