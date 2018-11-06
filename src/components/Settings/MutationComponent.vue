<template>
  <div>
    <b-row>
      <b-col class="col-3">
        <b-row @click="showMutation = !showMutation">
          <b-col class="col-4">
            <SettingsCaretComponent :show="showMutation"/>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="col-6"
        @click="showMutation = !showMutation">
        {{ getWordInLanguage('mutation') }}
      </b-col>
      <b-col class="col-3">
        <SettingsButtonComponent
          :calculationQueueData="calculationQueueData"
          @childButtonChanged="childButtonChanged($event)"
        />
      </b-col>
    </b-row>
    <div
      v-if="showMutation"
      id="mutation">
      <hr>
      <ModalComponent
        :modalName="getWordInLanguage('mutation')"
        :modalDescription="getWordInLanguage('mutationDescription')"
      />
      <template v-for="(mutation, index) in mutationStore.mutation">
        <SliderComponent
          :key="index"
          :name="getMutationName (index)"
          :id="mutation.id"
          :sliderMax="slider.max"
          :sliderInterval="slider.interval"
          :value="mutation.value"
          :isFloatAllowed="true"
          @childValueChanged="childChanged($event, index)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import SliderComponent from '../MultiUse/SliderComponent';
import SettingsButtonComponent from '../MultiUse/SettingsButtonComponent';
import SettingsCaretComponent from '../MultiUse/SettingsCaretComponent';
import ModalComponent from '../MultiUse/ModalComponent';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'MutationComponent',
  components: {
    SliderComponent,
    SettingsButtonComponent,
    SettingsCaretComponent,
    ModalComponent
  },
  data () {
    return {
      slider: {
        max: 1,
        interval: 0.001
      },
      calculationQueueData: {
        id: 'mutation',
        weight: 1
      },
      showMutation: false
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['mutationStore'])
  },
  methods: {
    childChanged (value, index) {
      this.mutationStore.mutation[index].value = Number(value);
    },
    getMutationName (index) {
      return this.getWordInLanguage('mutation') + ' ' + (this.mutationStore.mutation[index].allel1 + 1) + ' -> ' + (this.mutationStore.mutation[index].allel2 + 1);
    },
    childButtonChanged (calculationOn) {
      this.showMutation = calculationOn;
    }
  }
};
</script>
