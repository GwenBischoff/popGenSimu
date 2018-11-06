<template>
  <icon
    id="caret"
    :class="{'settingsContainerActive': show, 'settingsContainerInactive': !show }"
    name="caret-right"
  />
</template>

<script>
export default {
  name: 'SettingsCaretComponent',
  props: {
    show: Boolean
  }
};
</script>

<style scoped>
  .caret{
    width: auto;
    height: 1.5em;
    max-width: 100%;
    max-height: 100%;
  }
  .settingsContainerActive{
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -o-transform:rotate(90deg);
    transform: rotate(90deg);
    transition: all 500ms;
  }
  .settingsContainerInactive{
    transition: all 500ms;
  }
</style>
