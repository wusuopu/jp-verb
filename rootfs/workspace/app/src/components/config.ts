import _ from 'lodash';

const LABELS: string[] = [ "jlpt-1", "jlpt-2", "jlpt-3", "jlpt-4", "jlpt-5" ]

const CONJUGATION_ENUM = {
  PRESENT: 0,
  NEGATIVE: 1,
  PAST: 2,
  PAST_NEGATIVE: 3,
  TE_FORM: 4,
  TAI_FORM: 5,
  VOLITIONAL: 6,
  IMPERATIVE: 7,
  PASSIVE: 8,
  CONDITIONAL: 9,
  PROVISIONAL_CONDITIONAL: 10,
  CAUSATIVE: 11,
  POTENTIAL: 12,
}
const CONJUGATION_NAME = {
  0: '辞書形',          // Present
  1: 'ない形',          // Negative
  2: 'た形',            // Past
  3: '过去否定',        // Past Negative
  4: 'て形',            // Te form
  5: 'たい形',          // Tai form
  6: '意志形',          // Volitional
  7: '命令形',          // Imperative
  8: '被动形（れる）',  // Passive
  //9: '条件形（たら）',  // Conditional
  10: '假定形（ば）',   // Provisional conditional
  11: '使役形（せる）', // Causative
  12: '可能形'          // Potential
}

const CONJUGATION_KEIGO_NAME = _.assign({}, CONJUGATION_NAME,
  {
    0: 'ます形',          // Present
  }
)

export default {
  LABELS,
  CONJUGATION_ENUM,
  CONJUGATION_NAME,
  CONJUGATION_KEIGO_NAME,
}
