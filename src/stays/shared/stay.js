import { Country } from '@/countries/shared/country'

export class Stay {
  constructor({ id, title, start, end, country, daysDuration, durations }) {
    this.id = id
    this.title = title
    this.start = new Date(start)
    this.end = end ? new Date(end) : new Date()
    this.country = new Country(country)
    this.daysDuration = daysDuration
    this.durations = durations
  }

  get startIsoDate() {
    return this.start.toISOString().split('T').shift()
  }

  get endIsoDate() {
    return this.end.toISOString().split('T').shift()
  }
}
