export interface IMovie {
  id: string
  originalTitleText: { text: string }
  primaryImage: {
    caption: {
      plainText: string
    }
    height: number
    id: string
    url: string
    width: number
  }
  releaseDate: {
    day: number
    month: number
    year: number
  }
  releaseYear: {
    endYear: null
    year: number
  }
  titleText: {
    text: string
  }
  titleType: {
    canHaveEpisodes: boolean
    categories: Array<{ value: string }>
    displayableProperty: {
      value: { plainText: string }
      __typename: 'DisplayableTitleTypeProperty'
    }
    id: string
    isEpisode: boolean
    isSeries: boolean
    text: string
  }
}
