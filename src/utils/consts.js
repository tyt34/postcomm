const textAuthIntro = `Это социальная сеть - PostComm.`

const textAuthDescr = `Тут можно создавать и комментировать
 посты. Но удалить их нельзя. Это не баг, а фича.`

function getTimeDay(arr, len) {
  if (len === 'long') {
    return arr[2]+'/'+arr[1]+'/'+arr[3][2]+arr[3][3]
  } else { // short
    return arr[2]+'/'+arr[1][0]+'/'+arr[3][2]+arr[3][3]
  }
}

function getTimeClock(arr) {
  return arr[4].split(':')[0]+'-'+arr[4].split(':')[1]
}

const timeForShowErr = 4145

function getDataUTC() {
  let date = new Date();
  let dateUTC =  Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
  return dateUTC
}

module.exports.textAuthIntro = textAuthIntro
module.exports.textAuthDescr = textAuthDescr
module.exports.getTimeDay = getTimeDay
module.exports.getTimeClock = getTimeClock
module.exports.timeForShowErr = timeForShowErr
module.exports.getDataUTC = getDataUTC
