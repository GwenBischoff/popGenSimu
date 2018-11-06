<template>
  <b-row id="row">
    <b-col class="col-10"/>
    <b-col class="col-2">
      <b-btn
        id="questionBtn"
        @click="showModal = true">
        <icon
          class="questionIcon"
          name="question"
        />
      </b-btn>
      <ModalViewComponent
        v-if="showModal"
        @close="showModal = false"
        :modalName="modalName"
        :modalDescription="modalDescription"
      />
    </b-col>
  </b-row>
</template>

<script>
import ModalViewComponent from './ModalViewComponent';
export default {
  name: 'ModalComponent',
  components: {
    ModalViewComponent
  },
  data () {
    return {
      showModal: false
    };
  },
  props: {
    modalName: String,
    modalDescription: String
  }
};
</script>

<style scoped>
  #row{
    padding: 0px 0 10px 0;
  }
  #questionBtn{
    padding: 0 8px 0 8px;
    float: right;
  }
  .questionIcon {
    margin: 0 -3px -6px -4px;
    width: auto;
    height: 1.5em;
    max-width: 100%;
    max-height: 100%;
  }
</style>
