<template>
  <b-row class="wrapper">
    <b-col class="col-2">
          <span
            :key="'span_' + inbreedingStore.id"
            class="name">{{ getWordInLanguage('inbreedingCoefficient') }}</span>
    </b-col>
    <b-col class="col-8">
      <vue-slider
        class="zIndexBack"
        ref="slider"
        :key="'slider_' + inbreedingStore.id"
        v-model="inbreedingStore.value"
        :interval="slider.interval"
        :max="slider.max"
      />
    </b-col>
    <b-col class="col-1">
      <input
        :key="'input_' + inbreedingStore.id"
        v-model="inbreedingStore.value"
        class="input"
        @keypress="removeInvalidChars"
      />
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import vueSlider from 'vue-slider-component';

export default {
  name: 'InbreedingSliderComponent',
  components: {
    vueSlider
  },
  data () {
    return {
      slider: {
        max: 1,
        interval: 0.001
      }
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['inbreedingStore'])
  },
  methods: {
    removeInvalidChars (event) {
      let charCode = (event.which) ? event.which : event.keyCode;
      let numberOfDots = this.inbreedingStore.value.toString().split('.').length - 1;
      if ((charCode > 31 && (charCode !== 46 && (charCode < 48 || charCode > 57))) || (charCode === 46 && numberOfDots >= 1)) {
        event.preventDefault();
      }
    }
  }
};
</script>

<style scoped>
  .zIndexBack {
    z-index: 0;
  }
</style>
