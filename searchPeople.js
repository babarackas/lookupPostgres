var args = process.argv.slice(2);
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

var name = args[0];

knex.select('*')
.from('famous_people')
.where('last_name', name)
.orWhere('first_name', name)
.then(function(rows) {
  outPut(rows);
});

function outPut(rows){
  for(var i = 0; i < rows.length; i++){
    let lastName = `${rows[i].last_name}`
    console.log(`Searching... ${lastName}`);
  }
}