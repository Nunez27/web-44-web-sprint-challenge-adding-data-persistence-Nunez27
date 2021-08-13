// build your `Project` model here
const db = require('../../data/dbConfig');


async function get() {
    return db('posts');
}

async function getById(id) {
    return db('posts').where('id', id).first()
}

async function create({title, contents}) {
    const [id] = await  db('posts').insert({title, contents})
    const newPost = await getById(id)
    return newPost
}

function update(id, {title, contents}) {
    return db('post').where('id', id).update({title, contents})
     .then(() => {
       return getById(id)
     })
 }

 async function remove(id) {
    return db('post').where('id', id).delete()
  }

  module.exports = {
    get,
    getById,
    create,
    update,
    remove
}