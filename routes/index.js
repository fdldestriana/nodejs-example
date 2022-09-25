var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", (req, res) => {
  res.send("root");
});

router.get("/about", (req, res) => {
  res.send("about");
});

router.get("/random.text", (req, res) => {
  res.send("random.text");
});

router.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

router.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

router.get("/plantae/:genus.:species", (req, res) => {
  res.send(req.params);
})

router.get("/user/:userId(\\d+)", (req, res) => {
  res.send(req.params);
})

router.get("/example/a", (req, res) => {
  res.send("Hello from A!");
})

router.get("/example/b", (req, res, next) => {
  console.log("the response will be sent by the next function ...");
  next();
}, (req, res) => {
  res.send("Hello from B!");
}
)


// array of callbacks
const cb0 = function(req, res, next) {
  console.log("CB0");
  next();
}

const cb1 = function(req, res, next) {
  console.log("CB1");
  next();
}

const cb2 = function(req, res) {
  res.send("Hello from C!")
}

router.get("/example/c", [cb0, cb1, cb2])

// combination of independent function and array of functions
router.get("/example/d", [cb0, cb1], (req, res, next) => {
  console.log("the response will be sent ny the next function ...");
  next();
},
(req, res) => {
  res.send("Hello from D!");
})

module.exports = router;
