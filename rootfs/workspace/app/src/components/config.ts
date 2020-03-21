import _ from 'lodash';

const LABELS = [ "jlpt-1", "jlpt-2", "jlpt-3", "jlpt-4", "jlpt-5" ]

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
  CONJUGATION_NAME,
  CONJUGATION_KEIGO_NAME,
}
