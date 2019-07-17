const express = require('express')
const notesController = express.Router()
const Note = require('./note')

notesController
    .get('/', async (req, res, next) => {
        console.log(res.getHeaders())
        console.log(req.headers)
        const notes = await Note.find()
        res.status(200).send(notes)
    })

notesController
    .get('/:id', async (req, res, next) => {
        const { id } = req.params
        const note = await Note.findById(id)
        res.status(200).send(note)
    })

notesController
    .post('/', async (req, res, next) => {
        const note = await new Note(req.body).save()
        res.status(200).send(note)
    })

notesController
    .put('/:id', async (req, res, next) => {
        const { id } = req.params
        const note = await Note.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
        res.status(200).send(note)
    })


notesController
    .delete('/:id', async (req, res, next) => {
        const { id } = req.params
        console.log(id)
        const note = await Note.findByIdAndDelete(id)
        console.log(note)
        res.status(200).send(note)
    })

module.exports = notesController