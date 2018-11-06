<template>
  <b-list-group class="list-unstyled components">
    <b-list-group-item>
      <SelectionComponent/>
    </b-list-group-item>
    <b-list-group-item>
      <MutationComponent/>
    </b-list-group-item>
    <b-list-group-item>
      <MigrationComponent/>
    </b-list-group-item>
    <b-list-group-item>
      <FinitePopulationComponent/>
    </b-list-group-item>
    <b-list-group-item>
      <InbreedingComponent/>
    </b-list-group-item>
    <b-list-group-item>
      <AlgorithmComponent/>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import SelectionComponent from './Settings/SelectionComponent';
import MutationComponent from './Settings/MutationComponent';
import MigrationComponent from './Settings/MigrationComponent';
import FinitePopulationComponent from './Settings/FinitePopulationComponent';
import InbreedingComponent from './Settings/InbreedingComponent';
import AlgorithmComponent from './Settings/AlgorithmComponent';

export default {
  name: 'SettingsComponent',
  components: {
    SelectionComponent,
    MutationComponent,
    MigrationComponent,
    FinitePopulationComponent,
    InbreedingComponent,
    AlgorithmComponent
  }
};
</script>
