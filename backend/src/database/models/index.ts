import { Sequelize } from 'sequelize';
import config = require('../config/database');

const sequelize = new Sequelize(config)

export default sequelize;
