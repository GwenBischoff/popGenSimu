<template>
    <div>
      <b-btn
        class="add"
        @click="newAllelAdded()">{{ getWordInLanguage('add') }}</b-btn>
      <b-btn
        v-if="moreThanTwoAlleles()"
        class="remove"
        @click="lastAllelRemoved()">{{ getWordInLanguage('remove') }}</b-btn>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ChangeAllelesNumberComponent',
  computed: {
    ...mapGetters(['getWordInLanguage']),
    ...mapState(['allelesStore', 'chartAllelesStore', 'chartGenotypesStore'])
  },
  methods: {
    ...mapActions(['addNewAllel', 'removeLastAllel', 'addNewFitness', 'removeLastFitness', 'addNewMutation',
      'removeLastMutation', 'addNewMigrationAllel', 'removeLastMigrationAllel']),
    moreThanTwoAlleles () {
      if (this.allelesStore.allels.length > 2) {
        return true;
      }
      return false;
    },
    newAllelAdded () {
      this.setColors();
      this.addNewAllel();
      this.addNewFitness(this.allelesStore.allels);
      this.addNewMutation(this.allelesStore.allels);
      this.addNewMigrationAllel(this.allelesStore.allels);
    },
    lastAllelRemoved () {
      this.removeLastAllel();
      this.removeLastFitness(this.allelesStore.allels);
      this.removeLastMutation(this.allelesStore.allels);
      this.removeLastMigrationAllel(this.allelesStore.allels);
      this.$emit('alleleRemoved');
    },
    setColors () {
      if (this.allelesStore.allels.length > 8) {
        this.chartAllelesStore.colors.push(this.getRandomColor());
      }
      if (this.allelesStore.allels.length > 2) {
        for (let numberOfColors = 0; numberOfColors < (this.allelesStore.allels.length + 1); numberOfColors++) {
          this.chartGenotypesStore.colors.push(this.getRandomColor());
        }
      }
    },
    getRandomColor () {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>

<style scoped>

</style>
