<template>
  <div>
    <b-row>
      <b-col>
        <Graph
          :styles="{height: height + 'px', position: 'relative'}"
          :chart-data="datasetfull"
          :options="getOptions()"
          :language="languageStore.languageSelected"
        />
      </b-col>
    </b-row>
    <b-col class="col-4">
      <ToggleButtonComponent
        :isOn="isOn"
        :nameToggleOn="getWordInLanguage('genotypes')"
        :nameToggleOff="getWordInLanguage('alleles')"
        @childToggleChanged="childToggleChanged($event)"
      />
    </b-col>
  </div>
</template>

<script>
import Graph from './Graph';
import ToggleButtonComponent from '../MultiUse/ToggleButtonComponent';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'GraphComponent',
  components: {
    Graph,
    ToggleButtonComponent
  },
  data () {
    return {
      isOn: false,
      height: Math.round(window.innerHeight / 2)
    };
  },
  mounted () {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    ...mapState(['languageStore']),
    ...mapGetters(['allelesDatasets', 'allelesLabels', 'genotypesDatasets', 'genotypesLabels', 'getWordInLanguage']),
    datasetfull () {
      if (this.isOn) {
        return {datasets: this.genotypesDatasets, labels: this.genotypesLabels};
      } else {
        return {datasets: this.allelesDatasets, labels: this.allelesLabels};
      }
    }
  },
  methods: {
    childToggleChanged (value) {
      this.isOn = value;
    },
    handleResize (event) {
      this.height = Math.round(window.innerHeight / 2);
    },
    getOptions () {
      return {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 0.1,
              max: 1
            },
            gridLines: {
              display: true
            },
            scaleLabel: {
              display: true,
              labelString: this.getWordInLanguage('frequency')
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 20
            },
            scaleLabel: {
              display: true,
              labelString: this.getWordInLanguage('generations')
            }
          }]
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function (tooltipItems, data) {
              var multistringText = data.datasets[tooltipItems.datasetIndex].label + ' Generation: ' + tooltipItems.xLabel + ' Value: ' + Math.round(tooltipItems.yLabel * 1000) / 1000;
              return multistringText;
            }
          }
        },
        legend: {
          display: true,
          position: 'bottom'
        },
        responsive: true,
        maintainAspectRatio: false
      };
    }
  }
};
</script>
