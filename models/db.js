const mongoose = require('mongoose');

mongoose.connect('mongodb://kunwarsingh:kunwar123@ds029565.mlab.com:29565/app2database', {useNewUrlParser :true}, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
