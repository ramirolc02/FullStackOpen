const listsRouter = require('express').Router()
const Blog = require('../models/blog')

listsRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
  listsRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)

    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

  module.exports = listsRouter