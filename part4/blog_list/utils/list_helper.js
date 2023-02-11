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

module.exports = { dummy , totalLikes, favoriteBlog }