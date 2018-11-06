<template>
  <b-col
    id="lang"
    class="col-3">
    <b-row>
      <b-btn v-for="(language, index) in languageStore.languages"
        :key="index"
        :class="{'isSet': isSet(language)}"
        class="langButton"
        variant="outline-* sm"
        @click="setLanguage(language)">
        {{language.toUpperCase()}}
      </b-btn>
    </b-row>
  </b-col>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'LanguageComponent',
  computed: mapState(['languageStore']),
  methods: {
    setLanguage (lang) {
      this.languageStore.languageSelected = lang;
    },
    isSet (lang) {
      if (lang === this.languageStore.languageSelected) {
        return true;
      }
    }
  }
};
</script>

<style scoped>
  #lang{
    margin: -30px 0 10px 0;
  }
  .langButton{
    margin: 0 5px;
    padding: 5px;
    font-size: 0.8em;
    color: #3a9284;
    border-color: #3a9284;
    background-color: #fff;;
  }
  .langButton:hover {
    color: #fff;
    background-color: #3a9284;
  }
  .isSet {
    color: #fff;
    background-color: #3a9284;
  }
  .btn-outline-success:focus, .btn-outline-success.focus{
    box-shadow: 0 0 0 0.2rem rgba(23, 57, 52, 0.5);
  }
</style>
