const {connect} = require('mongoose');

const connectDB = async () => {
    try {
        await connect("mongodb://weros:heywero1@ds037358.mlab.com:37358/heywero", {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true});
        console.log('Base de datos conectada.');
    } catch(err) {
        console.error('Error en la base de datos', err);
    }
}

module.exports = connectDB;