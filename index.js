const express = require('express')
const app = express()
const port = 3000
let turn = 1
const coefficient = 17
let totalCost = 0
const mustProfit = 50
const histories = []
app.get('/', (req, res) => {
    const number1 = Math.floor(Math.random() * 100)
    const number2 = Math.floor(Math.random() * 100)
    let must = Math.ceil(((totalCost + mustProfit) / coefficient))
    if (must < 10) must = 10
    const profit = must * coefficient - totalCost
    totalCost += must
    const response = { number1, number2, turn, must, totalCost, profit, histories: histories }
    histories.push({ number1, number2, turn, must, totalCost, profit })
    res.status(200).send(response)
    turn++
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})