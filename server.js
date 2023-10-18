const fs=require('fs')
const express= require('express')

const app=express();

const trainData= fs.readFileSync('./mnist/mnist_train.csv',"utf-8")
const trainArr= new Array(trainData)

let results=trainArr[0].split("\n")
let firstLine=results[17].split(',')
let final=firstLine.slice(1).map(d=>Number(d))
console.log(firstLine,final)

app.get('/', (req,res)=>{
    res.sendFile('./render.html',{root: __dirname})
})

app.get('/data', (req, res)=>{
    res.send(final)
})
app.listen(3000, ()=>console.log("server listening on port 3000"))

