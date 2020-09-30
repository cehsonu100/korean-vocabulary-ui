import { BasicVocabularyFormat, Vocabulary } from "../layout/LayoutModel";

export const arrayToObject = (objArray: BasicVocabularyFormat) => {
  let convertedObject: Vocabulary[] = [];
  let countkey = 0;
  for(let key in objArray) {
    const koreanRomanization = objArray[key].replace(" ", "").split('-');
    const vocab: Vocabulary = {
      itemKey: ++countkey,
      english: captalizeWord(key),
      korean: koreanRomanization[0],
      romanization: koreanRomanization[1],
      isLearned: false,
    }
    convertedObject.push(vocab);
  }
  return convertedObject;
}

export const captalizeWord = (word: string) => {
  return word.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}