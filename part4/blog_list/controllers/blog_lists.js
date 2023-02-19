const listsRouter = require('express').Router()
const Blog = require('../models/blog')

listsRouter.get('/', async (request, response) => {
      blogs = await Blog.find({})
      response.json(blogs)
  })
  
  listsRouter.post('/', async (request, response) => {

    if (!('likes' in request.body)){
      request.body.likes = 0
    }
    if (!('title' in request.body)){
      return response.status(400).json({
        error: 'title is missing'
    })
    }
    if (!('url' in request.body)){
      return response.status(400).json({
        error: 'url is missing'
    })
    }
  
    const blog = new Blog(request.body)
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
  })

  module.exports = listsRouter