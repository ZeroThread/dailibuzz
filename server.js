const dotenv = require('dotenv');
const app = require('./src/index');
const { sequelize } = require('./models');

dotenv.config();
const port = process.env.PORT;
app.listen(port, async () => {
  console.log(`App is running on port ${port}`);
  await sequelize.authenticate();
  console.log('Database connected successfully');
});
