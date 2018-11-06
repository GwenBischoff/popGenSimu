<template>
  <div>
    <b-row>
      <LanguageComponent/>
    </b-row>
    <b-col class="col-12">
      <b-row>
        <b-col class="col-12">
          <GraphComponent/>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-md-10 col-sm-9">
          <ModalComponent
            class="zIndexBack"
            id="modal"
            :modalName="getWordInLanguage('instruction')"
            :modalDescription="getWordInLanguage('mainDescription')"
          />
        </b-col>
        <b-col class="col-md-2 col-sm-3">
          <CalculationComponent/>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <GenerationsComponent :resize="displaySidebar"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12 alleles">
          <AllelsComponent :resize="displaySidebar"/>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<script>
import GraphComponent from './MainView/GraphComponent';
import CalculationComponent from './MainView/CalculationComponent';
import GenerationsComponent from './MainView/GenerationsComponent';
import AllelsComponent from './MainView/AllelsComponent';
import LanguageComponent from './MainView/LanguageComponent';
import ModalComponent from './MultiUse/ModalComponent';
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'MainViewComponent',
  components: {
    ModalComponent,
    LanguageComponent,
    GraphComponent: GraphComponent,
    CalculationComponent,
    GenerationsComponent,
    AllelsComponent
  },
  props: {
    displaySidebar: Boolean
  },
  computed: {
    ...mapState(['languageStore']),
    ...mapGetters(['getWordInLanguage'])
  }
};
</script>
<style>
  #modal{
    margin-top: -50px;
  }
  .zIndexBack {
    z-index: 0;
  }
</style>
