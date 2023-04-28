export const getTimeDay = (arr, len) => {
  try {
    if (len === 'long') {
      return arr[2] + '/' + arr[1] + '/' + arr[3][2] + arr[3][3]
    } else {
      // short
      return arr[2] + '/' + arr[1][0] + '/' + arr[3][2] + arr[3][3]
    }
  } catch (error) {
    return 'wrong data'
  }
}

export const getTimeClock = (arr) => {
  try {
    return arr[4].split(':')[0] + '-' + arr[4].split(':')[1]
  } catch (error) {
    return 'wrong data'
  }
}

export const getDataUTC = () => {
  let date = new Date()
  let dateUTC = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
  return dateUTC
}
