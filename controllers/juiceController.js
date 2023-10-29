const express = require('express');
const app = require('../app')
const juiceArr = require('../models/juice')
//setting up router for our juice
const juice = express.Router();




//get all the juices
juice.get('/', (req, res, next) => {
    res.json(juiceArr)
})

//get one of the juices
// ':id' means the path gets a varibale as the parameter
juice.get('/:id', (req, res, next) => {
    const id = req.params.id
    res.json(juiceArr[id])
})

//Post a new juice to the juiceArr
juice.post('/', (req, res) => {
    juiceArr.push(req.body)
    res.json(juiceArr)

})
// put(update) a single juice with the info from the request body
juice.put('/:id', (req, res, next) => {
    const id = req.params.id
    juiceArr.splice(id, 1, req.body)
    res.json(juiceArr)
})
//delete one of the juices
juice.delete('/:id', (req, res, next) => {
    const id = req.params.id
    //splice helps us to remove an element that is not at the end or the beginning of the array
    juiceArr.splice(id, 1)
    res.json(juiceArr)      
})


module.exports = juice;