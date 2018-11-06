<template>
  <b-col class="zIndexBack">
    <b-row>
      <div id="spanToggleOff">
        <span>{{ nameToggleOff }}</span>
      </div>
      <div id="divToggleSwitch">
        <label class="toggleswitch">
          <input
            type="checkbox"
            @click="changeIsToggleOn">
          <span class="slider"/>
        </label>
      </div>
      <div id="spanToggleOn">
        <span>{{ nameToggleOn }}</span>
      </div>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'ToggleButtonComponent',
  props: {
    nameToggleOn: String,
    nameToggleOff: String,
    isOn: Boolean
  },
  data: function () {
    return {
      isToggleOn: this.isOn
    };
  },
  methods: {
    changeIsToggleOn () {
      this.isToggleOn = !this.isToggleOn;
      this.$emit('childToggleChanged', this.isToggleOn);
    }
  }
};
</script>

<style scoped>
  #spanToggleOff{
    width: 30%;
  }
  #divToggleSwitch{
    width: 30%;
    z-index: 999;
  }
  #spanToggleOn{
    width: 40%;
  }
  .toggleswitch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  .toggleswitch input {display:none;}

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 5px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .3s;
    transition: .3s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #3498db;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #3498db;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
  .zIndexBack {
    z-index: 1;
  }
</style>
