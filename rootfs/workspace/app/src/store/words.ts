import _ from 'lodash'
import { createModel } from '@rematch/core'
import { FormDataType, Entity, WordInstanceType, ConjugationInstanceType } from '../components/types'
import timer from '../lib/timer'
import WordLabels from '../db/word_labels.json'
import Labels from '../db/labels.json'

const initState = {}

export default createModel({
  state: initState,
  selectors: (slice, createSelector, hasProps) => ({
  }),
  reducers: {

  },
  effects: {
    async randomAsync(payload: FormDataType): Promise<Entity[]> {
      let time1 = Date.now()

      let { labels, conjugations, count } = payload
      let labelIds = _.map(labels, l => Labels[l])
      let allConjugations = conjugations
      if (!_.includes(allConjugations, 0)) {
        allConjugations = [0].concat(allConjugations)
      }

      let wordIds = []    // 所有的单词集合
      _.map(labelIds, id => wordIds = wordIds.concat(WordLabels[id]))
      let questionWordsIds = _.sampleSize(wordIds, count)   // 已选择的所有题目

      const Words = await import('../db/words.json')
      const Pronuncations = await import('../db/pronunciations.json')

      let data: Entity[] = []
      for (let id of questionWordsIds) {
        let dictId: number = _.get(Words[id], 'dictId')
        let entity = {
          id,
          conjugations: {plain: {}, keigo: {}},
          ..._.pick(Words[id], ['text', 'keigo', 'conjugation'])
        }
        let allWords: ConjugationInstanceType[] = []
        _.map(Words, (o:WordInstanceType, idx: string) => {
          if (o.dictId === dictId && _.includes(allConjugations, o.conjugation)) {
            let word: ConjugationInstanceType = {
              id: parseInt(idx),
              ..._.pick(o, ['text', 'keigo', 'conjugation'])
            }
            allWords.push(word)
          }
        })
        console.log(allWords, allConjugations)

        for (let word of allWords) {
          if (word.conjugation === 0) {
            word.pronunciation = Pronuncations[word.id]
          }
          if (word.keigo) {
            entity.conjugations.keigo[word.conjugation] = word
          } else {
            entity.conjugations.plain[word.conjugation] = word
          }
        }
        data.push(entity)
        console.log(entity)
      }

      let time2 = Date.now()
      if ((time2 - time1) < 4000 && process.env.NODE_ENV !== 'development') {
        // 至少等4秒
        await timer.sleep(4000 - (time2 - time1))
      }

      return data
    }
  }
})
