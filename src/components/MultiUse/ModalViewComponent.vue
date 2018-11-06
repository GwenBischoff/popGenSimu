<template>
  <transition name="modal">
    <b-row class="modal-mask">
      <b-col class="col-2"></b-col>
      <b-col class="col-10 modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            {{ modalName }}
          </div>

          <div class="modal-body">
            {{ modalDescription }}
          </div>

          <div class="modal-footer">
            <b-btn
              class="modal-default-button"
              @click="$emit('close')">
              OK
            </b-btn>
          </div>
        </div>
      </b-col>
      <b-col class="col-2"></b-col>
    </b-row>
  </transition>
</template>

<script>
export default {
  name: 'ModalViewComponent',
  props: {
    modalName: String,
    modalDescription: String
  }
};
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
