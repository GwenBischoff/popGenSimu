<template>
  <b-row class="wrapper">
    <b-col class="col-2">
      <span
        :key="'span_' + id"
        class="name">
        {{ name }}
      </span>
    </b-col>
    <b-col class="col-8 zIndexBack">
      <vue-slider
        ref="slider"
        :key="'slider_' + id"
        v-model="newValue"
        :interval="sliderInterval"
        :max="sliderMax"
        :min="sliderMin"
        @callback="valueChanged"
      />
    </b-col>
    <b-col class="col-1">
      <input
        :key="'input_' + id"
        v-model="newValue"
        class="input"
        @keyup="valueChanged"
        @keypress="removeInvalidChars"
      />
    </b-col>
  </b-row>
</template>

<script>
import vueSlider from 'vue-slider-component';

export default {
  name: 'SliderComponent',
  components: {
    vueSlider
  },
  data () {
    return {
      newValue: 0
    };
  },
  props: {
    name: String,
    id: String,
    sliderMax: Number,
    sliderMin: Number,
    sliderInterval: Number,
    value: Number,
    resize: Boolean,
    isFloatAllowed: Boolean
  },
  watch: {
    resize: function (newVal, oldVal) {
      let self = this;
      setTimeout(function () {
        self.$refs.slider.refresh();
      }, 500);
    }
  },
  created () {
    this.newValue = this.value;
  },
  methods: {
    valueChanged () {
      this.$emit('childValueChanged', this.newValue);
    },
    removeInvalidChars (event) {
      let charCode = (event.which) ? event.which : event.keyCode;
      let numberOfDots = this.newValue.toString().split('.').length - 1;
      if (this.isFloatAllowed && ((charCode > 31 && (charCode !== 46 && (charCode < 48 || charCode > 57))) || (charCode === 46 && numberOfDots >= 1))) {
        event.preventDefault();
      } else if (!this.isFloatAllowed && (charCode > 31 && (charCode === 46 && (charCode < 48 || charCode > 57)))) {
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
