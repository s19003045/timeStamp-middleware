const express = require('express')
const app = express()
const port = 3000
const timeStamp = require('./libs/timeStampe.js')


// use timeStamp middleware
app.use(timeStamp)

app.use((req, res, next) => {

  // Emitted when the response has been sent. 
  res.on('finish', () => {
    const endTime = new Date()
    res.locals.endTime = endTime
    res.locals.duration = res.locals.endTime - res.locals.startTime
    console.log(`Response time:${res.locals.endTime}`)
    console.log(`${res.locals.stringOutput}  |  Total time: ${res.locals.duration}ms`)
  })

  // Indicates that the underlying connection was terminated.
  // res.on('close', () => {
  //   const endTime = new Date()
  //   res.locals.endTime = endTime
  //   res.locals.duration = res.locals.endTime - res.locals.startTime
  //   console.log(`Response time:${res.locals.endTime}`)
  //   console.log(`${res.locals.stringOutput}  |  Total time: ${res.locals.duration}ms`)
  // })

  next()
})



// 列出全部 Todo
app.get('/', (req, res) => {
  for (i = 0; i < 10; i++) {
    console.log(`${i} cat`)
  }
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

// 編輯 Todo 頁面
app.get('/:id/edit', (req, res) => {
  res.send('編輯 Todo 頁面')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})