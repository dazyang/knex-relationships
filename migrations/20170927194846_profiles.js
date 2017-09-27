
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('image')
    t.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles')
};
