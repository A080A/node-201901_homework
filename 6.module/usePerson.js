var person = require('./person')
console.log(require)
delete require.cache[require.resolve('./person')]
var person = require('./person')

person.welcome('welcome');
person.welcome('zfpx');