var args = process.argv.slice(2);
var args2 = process.argv.slice(3);
var args3 = process.argv.slice(4);
const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

var firstname_input = args[0];
var lastname_input = args2[0];
var bd_input = args3[0];


knex('famous_people').insert({
  'first_name': firstname_input,
  'last_name': lastname_input,
  'birthdate': bd_input
  })
  // .returning()
  .then( function (result) {
      console.log(result)
       });

console.log(knex.select().from('famous_people').rows);
// knex('books')
//   .returning('*')
//   .insert({title: 'Slaughterhouse Five'})

