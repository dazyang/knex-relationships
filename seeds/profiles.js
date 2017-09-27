
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('profiles').insert({user_id: 99901, image: '', url: ''}),
        knex('profiles').insert({user_id: 99902, image: '', url: ''}),
        knex('profiles').insert({user_id: 99903, image: '', url: ''}),
        knex('profiles').insert({user_id: 99904, image: '', url: ''}),
        knex('profiles').insert({user_id: 99905, image: '', url: ''}),
        knex('profiles').insert({user_id: 99906, image: '', url: ''}),
        knex('profiles').insert({user_id: 99907, image: '', url: ''}),
        knex('profiles').insert({user_id: 99908, image: '', url: ''}),
        knex('profiles').insert({user_id: 99909, image: '', url: ''}),
        knex('profiles').insert({user_id: 99910, image: '', url: ''}),
        knex('profiles').insert({user_id: 99911, image: '', url: ''}),
        knex('profiles').insert({user_id: 99912, image: '', url: ''}),
        knex('profiles').insert({user_id: 99913, image: '', url: ''}),
        knex('profiles').insert({user_id: 99914, image: '', url: ''}),
        knex('profiles').insert({user_id: 99915, image: '', url: ''}),
        knex('profiles').insert({user_id: 99916, image: '', url: ''}),
        knex('profiles').insert({user_id: 99917, image: '', url: ''}),
        knex('profiles').insert({user_id: 99918, image: '', url: ''}),
        knex('profiles').insert({user_id: 99919, image: '', url: ''}),
        knex('profiles').insert({user_id: 99920, image: '', url: ''}),
        knex('profiles').insert({user_id: 99921, image: '', url: ''}),
        knex('profiles').insert({user_id: 99922, image: '', url: ''}),
        knex('profiles').insert({user_id: 99923, image: '', url: ''}),
        knex('profiles').insert({user_id: 99924, image: '', url: ''}),
        knex('profiles').insert({user_id: 99925, image: '', url: ''}),
        knex('profiles').insert({user_id: 99926, image: '', url: ''})
      ]);
    });
};
