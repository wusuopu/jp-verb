
export type FormDataType = {
  labels: string[];
  conjugations: number[];
  count: number;
}
export type ConjugationInstanceType = {
  id: number;
  text: string;
  conjugation: number;
  keigo: boolean;
  pronunciation?: string;
}
export type WordInstanceType = ConjugationInstanceType & {
  dictId: number;
}
export type Entity = {
  id: number;
  text: string;
  conjugation: number;
  keigo: boolean;
  conjugations: {
    plain: {
      [key:string]: ConjugationInstanceType
    },
    keigo: {
      [key:string]: ConjugationInstanceType
    }
  }
}

export type Answers = {
  [key:number]: {
    [key:number]: string
  }
}
