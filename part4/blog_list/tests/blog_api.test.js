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

test('post creates new blog succesfully', async () => {

    const newBlog = {
        "title": "Atomic Habits",
         "author": "James Clear ",
         "url":"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj018PohIL9AhUKKewKHTFaCigQFnoECCUQAQ&url=https%3A%2F%2Fjamesclear.com%2Fatomic-habits&usg=AOvVaw0o5PGECsACPPj94i7MJHzT",
         "likes": 999
        }

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

        const title = blogsAtEnd.map(blog => blog.title)
        expect(title).toContain(
            'Atomic Habits'
        )
})

afterAll(async () => {
  await mongoose.connection.close()
})