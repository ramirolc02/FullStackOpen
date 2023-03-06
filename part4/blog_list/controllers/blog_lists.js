const listsRouter = require('express').Router()
const { request, response } = require('../app')
const Blog = require('../models/blog')

listsRouter.get('/', async (request, response) => {
      const blogs = await Blog.find({})
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

  listsRouter.delete('/:id', async(request,response) =>{
    const blogListToDelet = await Blog.findByIdAndRemove(request.params.id);
    if (!blogListToDelet){
      return response.status(400).json({error: 'Blog does not exist '})
    }
    return response.status(204).end()
  })

  listsRouter.put('/:id', async(request,response,next)=> {
    
    const blog = request.body
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new:true})
    response.json(updatedBlog)
  })

  module.exports = listsRouter