<template>
  <div>
    <SliderComponent
      :key="generationsStore.id"
      :name="getWordInLanguage('generations')"
      :id="generationsStore.id"
      :sliderMax="slider.max"
      :sliderInterval="slider.interval"
      :value="generationsStore.value"
      :resize="resize"
      @childValueChanged="childChanged($event)"
    />
  </div>
</template>

<script>
import SliderComponent from '../MultiUse/SliderComponent';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'GenerationsComponent',
  components: {
    SliderComponent
  },
  data () {
    return {
      slider: {
        max: 10000,
        interval: 1
      }
    };
  },
  props: {
    resize: Boolean
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['generationsStore', 'migrationStore', 'finitePopulationStore'])
  },
  methods: {
    childChanged (value) {
      this.generationsStore.value = Number(value);
      this._setGenerationsInOtherStores(value);
    },
    _setGenerationsInOtherStores (value) {
      if (this.migrationStore.generation.value > this.generationsStore.value) {
        this.migrationStore.generation.value = Number(value);
      }
      if (this.finitePopulationStore.bottleneckGenerations[1] > this.generationsStore.value) {
        this.finitePopulationStore.bottleneckGenerations[1] = Number(value);
      }
      this.migrationStore.generation.sliderMax = Number(value);
      this.finitePopulationStore.bottleneckGenerationMax = Number(value);
    }
  }
};
</script>

<style scoped>
  .slider{
    grid-column: 1 / 11;
  }
</style>
