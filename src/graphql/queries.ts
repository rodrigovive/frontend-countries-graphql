import gql from "graphql-tag";

export const listCurrencies = gql(`query ListCurrencies(
  $currency: String
){
  Currency(filter: {
    name_contains: $currency
  }) {
    _id
    code
    name
    symbol
    countries {
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
    }
  }
}`)

export const listCountries = gql(`query ListCountries(
  $name: String
  $alpha2Code: String
  ) {
  Country(filter: {
    name_contains: $name,
    alpha2Code_contains: $alpha2Code
  }){
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
    subregions {
      countries {
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
      }
    }
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
    iso639_1
    iso639_2
    name
    nativeName
    countries {
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
    }
  }
}`)