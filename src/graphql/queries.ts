import gql from "graphql-tag";

export const listCurrencies = gql(`query ListCurrencies(
  $currency: String
){
  Currency(filter: {
    name_contains: $currency
  }) {
    _id
    name
    symbol
  }
}
`)

export const listCountries = gql(`query ListCountries(
  $name: String
  $alpha2Code: String
  $limit: Int
  $currency: String
  $language: String
  $region: String
  ) {
  Country(filter: {
    name_contains: $name,
    alpha2Code_contains: $alpha2Code,
    currencies: {
      name_contains: $currency
    },
    officialLanguages: {
      name_contains: $language
    },
    regionalBlocs: {
      name_contains: $region
    }
  }, first: $limit){
      _id
      alpha2Code
      alpha3Code
      area
      capital
      populationDensity
      demonym
      name
      nativeName
      numericCode
      population
      currencies {
        symbol
        name
      }
      officialLanguages {
        name
      }
      regionalBlocs {
        name
      }
  }
}
`)

export const listRegions = gql(`query ListRegions(
  $region: String
){
  Region(filter: {
  	name_contains: $region
  }){
    _id
    name
  }
}
`)

export const listLanguages = gql(`query ListLanguage(
  $name: String
){
  Language(filter: {
		name_contains: $name
  }){
    _id
    name
  }
}
`)