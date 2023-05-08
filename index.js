const express = require("express");
const app = express();

//Import the json data
const data = require("./data.json");

//home page
app.get("/", (req, res) => {
  const msg =
    "<p>boom guys api bn gyi </p> <p>api ko check krne k lye type kijiye --> http://localhost:3000/users</p>  <p> Or agr apko specific user ka data chye to ye type kren --> http://localhost:3000/users/1</p>";
  res.send(msg);
});

// define a route for getting all users
app.get("/users", (req, res) => {
  res.json(data.users);
});

// define a route for getting a specific user by
// id

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = data.users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: "User not found" });
  } else {
    res.json(user);
  }
});

// start the server

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
