<template>
  <div>
    <b-row>
      <b-col class="col-3">
        <b-row @click="showMigration = !showMigration">
          <b-col class="col-4">
            <SettingsCaretComponent :show="showMigration"/>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="col-6"
        @click="showMigration = !showMigration">{{ getWordInLanguage('migration') }}</b-col>
      <b-col class="col-3">
        <SettingsButtonComponent
          :calculationQueueData="calculationQueueData"
          @childButtonChanged="childButtonChanged($event)"
        />
      </b-col>
    </b-row>
    <div
      v-if="showMigration"
      id="migration">
      <hr>
      <ModalComponent
        :modalName="getWordInLanguage('migration')"
        :modalDescription="getWordInLanguage('migrationDescription')"
      />
      <SliderComponent
        :key="'generation' + migrationStore.generation.id"
        :name="getWordInLanguage('generation')"
        :id="migrationStore.generation.id"
        :sliderMin="migrationStore.generation.sliderMin"
        :sliderMax="migrationStore.generation.sliderMax"
        :sliderInterval="migrationStore.generation.sliderInterval"
        :value="migrationStore.generation.value"
        @childValueChanged="childGenerationChanged($event)"
      />
      <hr class="horizontalLine">
      <span>{{ getWordInLanguage('migrationRate') }}</span>
      <div class="allelSettingsContainer">
        <SliderComponent
          :key="'rate' + migrationStore.migrationRate.id"
          :name="getWordInLanguage('rate')"
          :id="migrationStore.migrationRate.id"
          :sliderMax="slider.max"
          :sliderInterval="slider.interval"
          :value="migrationStore.migrationRate.value"
          :isFloatAllowed="true"
          @childValueChanged="childMigrationRateChanged($event)"
        />
      </div>
      <hr class="horizontalLine">
      <span>{{ getWordInLanguage('frequencyOtherPopulation') }}</span>
      <div class="allelSettingsContainer" >
        <template v-for="(migration, index) in migrationStore.migrationFrequencyOfAllel">
          <SliderComponent
            :key="'migrationFrequency' + index"
            :name="getMigrationFrequencyOfAllelName (index)"
            :id="migration.id"
            :sliderMax="slider.max"
            :sliderInterval="slider.interval"
            :value="migration.value"
            :isFloatAllowed="true"
            @childValueChanged="childMigrationFrequencyChanged($event, index)"
          />
        </template>
      </div>
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
  name: 'MigrationComponent',
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
        interval: 0.01
      },
      calculationQueueData: {
        id: 'migration',
        weight: 1
      },
      showMigration: false
    };
  },
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['migrationStore'])
  },
  methods: {
    childGenerationChanged (value) {
      this.migrationStore.generation.value = Number(value);
    },
    childMigrationFrequencyChanged (value, index) {
      this.migrationStore.migrationFrequencyOfAllel[index].value = Number(value);
      this.calcAllelesSum();
    },
    childMigrationRateChanged (value) {
      this.migrationStore.migrationRate.value = Number(value);
    },
    getMigrationFrequencyOfAllelName (index) {
      return this.getWordInLanguage('allel') + ' ' + (this.migrationStore.migrationFrequencyOfAllel[index].allel + 1);
    },
    calcAllelesSum () {
      let allelesSum = 0;
      this.migrationStore.migrationFrequencyOfAllel.forEach(function (allel) {
        allelesSum += (Math.round(allel.value * 1000) / 1000);
      });
      allelesSum = (Math.round(allelesSum * 1000) / 1000);
      if (allelesSum !== 1) {
        this.migrationStore.isAllelesSumOne = false;
      } else {
        this.migrationStore.isAllelesSumOne = true;
      }
    },
    childButtonChanged (calculationOn) {
      this.showMigration = calculationOn;
    }
  }
};
</script>

<style scoped>
.horizontalLine {
  margin-top: -5px;
}
.allelSettingsContainer {
  margin-top: 30px;
}
</style>
