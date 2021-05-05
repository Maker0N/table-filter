const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

const arrOfData = [
  { id: 1, date: "01.04.2021", title: "xbox", quant: "3", distance: "35" },
  { id: 2, date: "13.04.2021", title: "apple", quant: "5", distance: "76" },
  { id: 3, date: "23.04.2021", title: "samsung", quant: "2", distance: "42" },
  { id: 4, date: "28.04.2021", title: "seagate", quant: "7", distance: "13" },
  { id: 5, date: "01.04.2021", title: "xbox", quant: "12", distance: "35" },
  { id: 6, date: "13.04.2021", title: "apple", quant: "9", distance: "76" },
  { id: 7, date: "23.04.2021", title: "samsung", quant: "6", distance: "42" },
  { id: 8, date: "28.04.2021", title: "seagate", quant: "1", distance: "13" },
  { id: 9, date: "01.04.2021", title: "xbox", quant: "0", distance: "35" },
  { id: 10, date: "13.04.2021", title: "apple", quant: "17", distance: "76" },
  { id: 11, date: "23.04.2021", title: "samsung", quant: "28", distance: "42" },
  { id: 12, date: "28.04.2021", title: "seagate", quant: "2", distance: "13" },
  { id: 13, date: "01.04.2021", title: "xbox", quant: "58", distance: "35" },
  { id: 14, date: "13.04.2021", title: "apple", quant: "10", distance: "76" },
  { id: 15, date: "23.04.2021", title: "samsung", quant: "0", distance: "42" },
  { id: 16, date: "28.04.2021", title: "seagate", quant: "71", distance: "13" },
  { id: 17, date: "01.04.2021", title: "xbox", quant: "1", distance: "35" },
  { id: 18, date: "13.04.2021", title: "apple", quant: "4", distance: "76" },
  { id: 19, date: "23.04.2021", title: "samsung", quant: "31", distance: "42" },
  { id: 20, date: "28.04.2021", title: "seagate", quant: "1", distance: "13" },
  { id: 21, date: "01.04.2021", title: "xbox", quant: "4", distance: "35" },
  { id: 22, date: "13.04.2021", title: "apple", quant: "8", distance: "76" },
  { id: 23, date: "23.04.2021", title: "samsung", quant: "20", distance: "42" },
  { id: 24, date: "28.04.2021", title: "seagate", quant: "53", distance: "13" },
  { id: 25, date: "01.04.2021", title: "xbox", quant: "16", distance: "35" },
  { id: 26, date: "13.04.2021", title: "apple", quant: "9", distance: "76" },
  { id: 27, date: "23.04.2021", title: "samsung", quant: "2", distance: "42" },
  { id: 28, date: "28.04.2021", title: "seagate", quant: "27", distance: "13" },
  { id: 29, date: "01.04.2021", title: "xbox", quant: "15", distance: "35" },
  { id: 30, date: "13.04.2021", title: "apple", quant: "6", distance: "76" },
  { id: 31, date: "23.04.2021", title: "samsung", quant: "8", distance: "42" },
  { id: 32, date: "28.04.2021", title: "seagate", quant: "7", distance: "13" },
];

app.use(cors())

app.get('/', (req, res) => {
  res.send(arrOfData);
})

app.listen(PORT, () => {
  console.log(`Server working on port: ${PORT},`, new Date());
})