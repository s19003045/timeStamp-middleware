module.exports = function (req, res, next) {
  let timeStamp = new Date()

  let year = timeStamp.getFullYear()
  let month = timeStamp.getMonth()
  let day = timeStamp.getDay()
  let hour = timeStamp.getHours()
  let minutes = timeStamp.getMinutes()
  let seconds = timeStamp.getSeconds()
  // let milliseconds = timeStamp.getMilliseconds()
  let stringOutput = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds + ' | ' + req.method + ' from ' + req.originalUrl

  // 存成 res.locals
  res.locals.startTime = timeStamp
  res.locals.stringOutput = stringOutput

  console.log(`Request-Time: ${res.locals.startTime}`)
  console.log(`${res.locals.stringOutput}`)

  next()
}