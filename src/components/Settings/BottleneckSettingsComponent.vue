<template>
  <div>
    <b-row class="wrapper">
      <b-col class="col-2">
        <span
          :key="'span_' + finitePopulationStore.id"
          class="name">
          {{ getWordInLanguage('populationSize') }}
        </span>
      </b-col>
      <b-col class="col-8">
        <vue-slider
          class="zIndexBack"
          ref="slider"
          :key="'slider_' + finitePopulationStore.id"
          v-model="finitePopulationStore.bottleneckPopulationSizeValue"
          :interval="finitePopulationStore.bottleneckPopulationSizeInterval"
          :max="finitePopulationStore.bottleneckPopulationSizeMax"
          :min="1"
        />
      </b-col>
      <b-col class="col-1">
        <input
          :key="'input_' + finitePopulationStore.id"
          v-model="finitePopulationStore.bottleneckPopulationSizeValue"
          class="input"
          @keypress="removeInvalidChars"
        />
      </b-col>
    </b-row>
    <b-row class="wrapper">
      <b-col class="col-2">
        <span
          :key="'span_' "
          class="name">{{ getWordInLanguage('generations') }}</span>
      </b-col>
      <b-col class="col-8">
        <vue-slider
          class="zIndexBack"
          ref="slider"
          :key="'slider_'"
          v-model="finitePopulationStore.bottleneckGenerations"
          :interval="1"
          :max="finitePopulationStore.bottleneckGenerationMax"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'BottleneckSliderComponent',
  components: {
    vueSlider
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['finitePopulationStore'])
  },
  methods: {
    removeInvalidChars (event) {
      let charCode = (event.which) ? event.which : event.keyCode;
      if ((charCode > 31 && (charCode === 46 && (charCode < 48 || charCode > 57)))) {
        event.preventDefault();
      }
    }
  }
};
</script>

<style scoped>
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
  .zIndexBack {
   z-index: 0;
  }
</style>
