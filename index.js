const express = require("express");

const app = express();

const handlebars = require("express-handlebars").create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set("port", process.env.PORT || 3000);

app.get('/', (request, response) => {
    response.render('beginning');
});

app.get('middle', (request, response) => {
    response.render('middle');
});

app.use((request, response) => {
    response.status(end);
    response.render('The End');
});

app.listen(app.get("port"), () => {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});
