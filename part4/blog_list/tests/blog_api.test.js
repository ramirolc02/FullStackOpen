const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
})

test('blogs are returned as json and have length as DB', async () => {
    const allBlogs = await api
         .get('/api/blogs')
         .expect(200)
         .expect('Content-Type', /application\/json/)

         expect(allBlogs.body).toHaveLength(2)
}, 100000) // error ms timeout

test('unique identifier is named id', async () => {
    const res = await api.get('/api/blogs')
    res.body.forEach(blog => {
        expect(blog.id).toBeDefined()
    })
})

afterAll(async () => {
  await mongoose.connection.close()
})