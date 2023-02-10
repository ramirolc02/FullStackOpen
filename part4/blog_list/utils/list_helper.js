const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const result = blogs.every( blog => 'likes' in blog)
    console.log(result)
    if (result){
        return  blogs.length===0 ? 0 : blogs.reduce ((acc,blogs) => acc+blogs.likes,0)
    }
    else{
        return 'Object with no likes property'
    }
}

module.exports = { dummy , totalLikes }