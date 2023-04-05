const {Sequelize} = require('sequelize');
const sequelize = require('../config/initializeDatabase');


const usersModel = require('../models/users');


const users = usersModel(sequelize,Sequelize);

sequelize
.sync({
    force: false,
    // alter : true
})
.then(() => {
    console.log(`Database & tables created here!`);
})
.catch((err) => {
    console.log("Error------", err);
});

module.exports = {
    sequelize,
    users
}
