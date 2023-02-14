const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const result = blogs.every( blog => 'likes' in blog)
    if (result){
        return  blogs.length===0 ? 0 : blogs.reduce ((acc,blogs) => acc+blogs.likes,0)
    }
    else{
        return 'Object with no likes property'
    }
}

const favoriteBlog = (blogs) => {
    return blogs.find(blog => blog.likes === Math.max(...blogs.map((blog) => blog.likes))) // could use three dots notation
}


const mostBlogs = (blogs) => {


    const unique = [...new Set(blogs.map(blog => blog.author))]

    const numbers = new Array(unique.length).fill(0)

    blogs.map(blog => numbers[unique.indexOf(blog.author)]++)

    return {
        author: unique[numbers.indexOf(Math.max(...numbers))],
        blogs: Math.max(...numbers)
    }
}
module.exports = { dummy , totalLikes, favoriteBlog, mostBlogs }