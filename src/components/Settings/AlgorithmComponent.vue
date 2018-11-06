<template>
  <div>
    <b-row
      class="m1"
      @click="showAlgorithm = !showAlgorithm">
      <b-col class="col-1">
        <SettingsCaretComponent :show="showAlgorithm"/>
      </b-col>
      <b-col class="col-2"/>
      <b-col class="col-6">{{ getWordInLanguage('algorithm') }}</b-col>
      <b-col class="col-3"/>
    </b-row>
    <div
      v-if="showAlgorithm"
      id="queue">
      <hr>
      <ModalComponent
        :modalName="getWordInLanguage('algorithm')"
        :modalDescription="getWordInLanguage('algorithmDescription')"
      />
      <b-row>
        <ToggleButtonComponent
          :isOn="isWeightedMeanOn"
          :nameToggleOn="getWordInLanguage('weightedMean')"
          :nameToggleOff="getWordInLanguage('queue')"
          @childToggleChanged="childToggleChanged($event)"
        />
      </b-row>
      <b-row v-if="isWeightedMeanOn">
        <b-col class="col-12">
          <b-row>
            <b-col class="col-6">{{ getWordInLanguage('calculation') }}</b-col>
            <b-col class="col-6">{{ getWordInLanguage('weight') }}</b-col>
          </b-row>
          <hr>
          <b-row>
            <template v-for="element in calculationQueueStore.calculationQueue">
              <b-col
                :key="element.id + '_name'"
                class="col-6">
                {{ getWordInLanguage(element.id) }}
              </b-col>
              <b-col
                :key="element.id + '_WrapperWeight'"
                class="col-6">
                <input
                  :key="element.id + '_weight'"
                  v-model="element.weight"
                  class="col-6 input"
                />
              </b-col>
            </template>
          </b-row>
        </b-col>
      </b-row>
      <b-row v-else-if="!isWeightedMeanOn">
        <b-col class="col-12">
          <b-row>
            <b-col class="col-6">{{ getWordInLanguage('calculation') }}</b-col>
            <b-col class="col-6">{{ getWordInLanguage('position') }}</b-col>
          </b-row>
          <hr>
        </b-col>
        <draggable
          :options="{group:'queue'}"
          v-model="calculationQueueStore.calculationQueue"
          class="col-12"
          @start="drag=true"
          @end="drag=false">
          <template v-for="(element, index) in calculationQueueStore.calculationQueue">
            <b-row :key="element.id">
              <b-col :key="element.id + '_name'">{{ getWordInLanguage(element.id) }}</b-col>
              <b-col :key="element.id + '_index'">{{ index+1 }}</b-col>
            </b-row>
          </template>
        </draggable>
      </b-row>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import ToggleButtonComponent from '../MultiUse/ToggleButtonComponent';
import SettingsCaretComponent from '../MultiUse/SettingsCaretComponent';
import ModalComponent from '../MultiUse/ModalComponent';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'CalculationQueueComponent',
  components: {
    draggable,
    ToggleButtonComponent,
    SettingsCaretComponent,
    ModalComponent
  },
  data () {
    return {
      isWeightedMeanOn: false,
      showAlgorithm: false
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['calculationQueueStore'])
  },
  methods: {
    childToggleChanged (value) {
      this.isWeightedMeanOn = value;
      this.calculationQueueStore.isWeightedMeanOn = this.isWeightedMeanOn;
    }
  }
};
</script>
