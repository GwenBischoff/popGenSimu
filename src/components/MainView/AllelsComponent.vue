<template>
  <div>
    <template
      v-for="(allel, index) in allelesStore.allels"
      class="grid-container">
      <SliderComponent
        :key="index"
        :name="getAllelName (index) "
        :id="allel.id"
        :sliderMax="slider.max"
        :sliderInterval="slider.interval"
        :value="allel.value"
        :isFloatAllowed="true"
        :resize="resize"
        class="slider"
        @childValueChanged="childChanged($event, index)"
      />
    </template>
    <ChangeAllelesNumberComponent @alleleRemoved="_calcAllelesSum($event)"/>
  </div>
</template>

<script>
import SliderComponent from '../MultiUse/SliderComponent';
import ChangeAllelesNumberComponent from './ChangeAllelesNumberComponent';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'AllelsComponent',
  components: {
    ChangeAllelesNumberComponent,
    SliderComponent
  },
  props: {resize: Boolean},
  data () {
    return {
      slider: {
        max: 1,
        interval: 0.01
      }
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['allelesStore'])
  },
  methods: {
    childChanged (value, index) {
      this.allelesStore.allels[index].value = Number(value);
      this._calcAllelesSum();
    },
    getAllelName (index) {
      return this.getWordInLanguage('allel') + ' ' + (this.allelesStore.allels[index].allel + 1);
    },
    _calcAllelesSum () {
      let allelesSum = 0;
      this.allelesStore.allels.forEach(function (allel) {
        allelesSum += (Math.round(allel.value * 1000) / 1000);
      });
      allelesSum = (Math.round(allelesSum * 1000) / 1000);
      if (allelesSum !== 1) {
        this.allelesStore.isAllelesSumOne = false;
      } else {
        this.allelesStore.isAllelesSumOne = true;
      }
    }
  }
};
</script>

<style scoped>
  .slider{
    grid-column: 1 / 11;
  }
  .add{
    grid-column: 2 / 5;
  }
  .remove{
    grid-column: 8 / 11;
  }
</style>
