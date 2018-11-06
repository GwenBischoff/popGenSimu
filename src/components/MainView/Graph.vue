<script>
import {Line, mixins} from 'vue-chartjs';
export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    options: {
      type: Object
    },
    'language': String
  },
  mounted () {
    this.renderMyChart();
  },
  watch: {
    language: function () {
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
      this.renderMyChart();
    }
  },
  methods: {
    renderMyChart () {
      this.renderChart(this.chartData, this.options);
    }
  }
};
</script>
