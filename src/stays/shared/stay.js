import { Country } from '@/countries/shared/country'

export class Stay {
  constructor({ id, title, startDate, endDate, country, daysDuration, durations }) {
    this.id = id
    this.title = title
    this.startDate = new Date(startDate)
    this.endDate = endDate ? new Date(endDate) : new Date()
    this.country = new Country(country)
    this.daysDuration = daysDuration
    this.durations = durations
  }

  get startIsoDate() {
    return this.startDate.toISOString().split('T').shift()
  }

  get endIsoDate() {
    return this.endDate.toISOString().split('T').shift()
  }
}
