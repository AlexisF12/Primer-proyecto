const express = require('express');
const db = require('./db/models');
const app = express();
const { userRouter, roulesRoute } = require('./routes');
const PORT = process.env.PORT || 3001;

app.use(express.json()); 
app.use("/user", userRouter);
app.use("/rol", roulesRoute);

app.listen(PORT, async () => {
  console.log(`La app arrancó en el puerto ${PORT}.`);
  await db.sequelize.sync({ force: true });
});


