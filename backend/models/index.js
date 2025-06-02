const sequelize = require('../config/db');
const User = require('./user')(sequelize);
const Station = require('./station')(sequelize);

sequelize.sync();

module.exports = { sequelize, User, Station };
