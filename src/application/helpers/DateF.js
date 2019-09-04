class DateF {
  static formatedDateNow () {
    const data = new Date()
    // return new Date(data.valueOf() - data.getTimezoneOffset() * 60000)
    return new Date(data.valueOf())
  }

  static formatExpireAt () {
    const date = new Date()
    const after = new Date(date.setDate(date.getDate() + 3))
    const month = this._formatZero(after.getMonth() + 1)
    const day = this._formatZero(after.getDate())
    return `${after.getFullYear()}-${month}-${day}`
  }

  static formatPlanExpireAt (period) {
    const date = new Date()
    let after
    if (period === 'anual') {
      after = new Date(date.setDate(date.getDate() + 365))
    } else {
      after = new Date(date.setDate(date.getDate() + 182))
    }

    return after
  }

  static diffInDays (startDate, endDate) {
    const date1 = new Date(startDate)
    const date2 = new Date(endDate)
    const diffTime = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays
  }

  static _formatZero (val) {
    if (val < 10 && val > 0) {
      return `0${val}`
    }

    return val
  }
}

export default DateF
