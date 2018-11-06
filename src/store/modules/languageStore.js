const state = {
  languageSelected: 'de',
  languages: ['de', 'en'],
  alleles: {
    'de': 'Allele',
    'en': 'Alleles'
  },
  genotypes: {
    'de': 'Genotypen',
    'en': 'Genotypes'
  },
  genotype: {
    'de': 'Genotyp',
    'en': 'Genotype'
  },
  generations: {
    'de': 'Generationen',
    'en': 'Generations'
  },
  generation: {
    'de': 'Generation',
    'en': 'Generation'
  },
  generate: {
    'de': 'Generieren',
    'en': 'Generate'
  },
  allel: {
    'de': 'Allel',
    'en': 'Allele'
  },
  alleleSum: {
    'de': 'Allele müssen in Summe 1 ergeben',
    'en': 'Allele values have to sum up to 1'
  },
  add: {
    'de': 'Hinzufügen',
    'en': 'Add'
  },
  remove: {
    'de': 'Entfernen',
    'en': 'Remove'
  },
  frequency: {
    'de': 'Frequenz',
    'en': 'Frequency'
  },
  on: {
    'de': 'An',
    'en': 'On'
  },
  off: {
    'de': 'Aus',
    'en': 'Off'
  },
  selection: {
    'de': 'Selektion',
    'en': 'Selection'
  },
  selectionDescription: {
    'de': 'Die Selektion beschreibt die Weitergabe nur bestimmter Gene an die nachfolgende Generation. Als Ausgangsparameter wird der Fitnesswert der Genotypen angegeben.',
    'en': 'Selection describes the passing of selected genes to the following generation. As parameter the fitness values of the genotypes is needed.'
  },
  fitness: {
    'de': 'Fitness',
    'en': 'Fitness'
  },
  mutation: {
    'de': 'Mutation',
    'en': 'Mutation'
  },
  mutationDescription: {
    'de': 'Die Mutation beschreibt die zufällige Veränderung eines Gens. Zur Berechnung wird die Mutationsrate also die Rate mit der ein Allel zu einem anderen Allel mutiert benötigt.',
    'en': 'Mutation describes the spontaneous variation of a gene. For the calculation the mutation rate, thus the rate of one allele mutating to another allele, is needed. '
  },
  migration: {
    'de': 'Migration',
    'en': 'Migration'
  },
  migrationDescription: {
    'de': 'Unter Migration versteht man die Zuwanderung von Individuen aus anderen Populationen. Für die Berechnung wird Generation benötigt in der die Migration stattfinden soll, die Migrationsrate, sowie die Allelfrequenzen in der Population aus der migriert werden soll. Soll ein Allel migriert werden, dass in der Anfangspopulation noch nicht besteht, so ist das Allel in der Anfangspopulation auf 0 zu setzen.',
    'en': 'Migration describes the immigration of individuals from another population. For the calculation the generation, in which the migration is happening, the migration rate and the allele frequency of the population to migrate have to be given. If an allele should be migrated that does not exist in the start population, the allele should be set to 0 in the start population.'
  },
  migrationRate: {
    'de': 'Migrationsrate aus der Population in die Modelpopulation',
    'en': 'Rate of migration from the population into the model population'
  },
  rate: {
    'de': 'Rate',
    'en': 'Rate'
  },
  frequencyOtherPopulation: {
    'de': 'Allelfrequenz der Population aus der migriert wird',
    'en': 'Allele frequencies in the population to be migrated from'
  },
  finitePopulation: {
    'de': 'Definierte Populationsgröße',
    'en': 'Finite population'
  },
  finitePopulationDescription: {
    'de': 'Genetische Drift ist die zufällige Verschiebung der Genfrequenzen in einer Population. Er resultiert aus einer beschränkten Populationsgröße. Dabei ist der Effekt der genetischen Drift umso größer, je kleiner die Population ist.',
    'en': 'Genetic drift is the random drift of gene frequencies in a population. It results from a limited population size. The effect is bigger the smaller the population is. '
  },
  populationSize: {
    'de': 'Populations-größe',
    'en': 'Population size'
  },
  populationBottleneck: {
    'de': 'Flaschenhalseffekt',
    'en': 'Population bottleneck'
  },
  populationBottleneckDescription: {
    'de': 'Der Flaschenhals ist eine Verkleinerung der Population für eine bestimmte Anzahl an Generationen. In diesen Generationen wird der genetische Drift besonders sichtbar.',
    'en': 'The bottleneck effect is population reduction for certain generations. In these generations the genetic drift is especially visible. '
  },
  inbreeding: {
    'de': 'Inzucht',
    'en': 'Inbreeding'
  },
  inbreedingDescription: {
    'de': 'Unter Inzucht versteht man die Fortpflanzung von Individuen, die miteinander verwandt sind. Zur Berechnung muss der Korrelationskoeffizient, der den Verwandtschaftsgrad der Individuen angibt, gegeben sein. Da Inzucht nicht auf der Grundlage der Allelfrequenz berechnet wird, ist sie nicht bei der Auswahl des Algorithmus berücksichtigt. Sie wird berechnet nachdem alle anderen Evolutionsfaktoren berechnet wurden.',
    'en': 'Inbreeding describes the reproduction of related individuals. For the calculation the correlation coefficient, which describes the relation of the individuals, has to be given. Inbreeding is not calculated on the allele frequency. Therefore it will not be listed in the algorithm section. It will be separately calculated after the allele frequencies are set.'
  },
  inbreedingCoefficient: {
    'de': 'Korrelations-koeffizient',
    'en': 'Inbreeding coefficient'
  },
  algorithm: {
    'de': 'Algorithmus',
    'en': 'Algorithm'
  },
  algorithmDescription: {
    'de': 'Die Auswahl des Algorithmus hat Auswirkung auf die Verrechnung der Evolutionsfaktoren. Die Warteschlange berechnet alle ausgewählten Evolutionsfaktoren nacheinander und verrechnet das vorangegangene Ergebnis mit dem nächsten Evolutionsfaktor. Beim gewichteten Mittelwert werden alle Werte einzeln berechnet und anschließend entsprechend der angegeben Gewichtung verrechnet.',
    'en': 'The choice of the algorithm has an impact on the calculation of the gene frequencies. The queue calculates all settings after each other taking the previous result as basis of the next calculation. Using the weighted mean all settings are calculated separately and will afterwards be weighted according the given weights.'
  },
  queue: {
    'de': 'Warteschlange',
    'en': 'Queue'
  },
  weightedMean: {
    'de': 'Gewichteter Mittelwert',
    'en': 'Weighted mean'
  },
  calculation: {
    'de': 'Berechnung',
    'en': 'Calculation'
  },
  position: {
    'de': 'Position',
    'en': 'Position'
  },
  weight: {
    'de': 'Gewichtung',
    'en': 'Weight'
  },
  instruction: {
    'de': 'Anleitung',
    'en': 'Instruction'
  },
  mainDescription: {
    'de': 'Der Graph zeigt, solange keine Evolutionsfaktoren eingegeben, sind die Hardy-Weinberg-Regel an. Sollen Evolutionsfaktoren eingegeben werden, so können im Menü, das über das Icon rechts oben zugänglich ist, entsprechende Einstellungen vorgenommen werden. Wird dann generiert, so zeigen sich die Auswirkungen der Evolutionsfaktoren.',
    'en': 'While no evolutionary forces are active the graph shows the frequencies according the Hardy-Weinberg principle. Forces can be activated by clicking on the gear-wheel in the upper right corner. When a calculation is triggered by clicking on the generate button the forces can be seen in the graph.'
  }
};
const getters = {
  getWordInLanguage: (state) => (name) => {
    return state[name][state.languageSelected];
  }
};
export default {
  state,
  getters
};
