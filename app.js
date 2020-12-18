const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/note');
const Program = require('./models/programs');

// express app
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://admin:23bohr@cluster0.qtjk8.mongodb.net/ptapp?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
// register view engine
app.set('view engine', 'ejs');


// static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/programs', (req, res) => {
  const program = new Program(req.body)
});


  //blog routes
  app.get('/blogs', (req, res) => {
    Note.find()
      .then((result) => {

      })
  })

  app.post('/notes', (req, res) => {
  const note = new Note(req.body);

  note.save()
    .then((result) => {
      res.redirect('/frontpage.html');
    })
    .catch((err) => {
      console.log(err);
    })
  });



//routes
app.get('/login.html', (req, res) => {
  res.render('login');
});

app.get('/createaccount.html', (req, res) => {
  res.render('createaccount');
});

app.get('/frontpage.html', (req, res) => {
  res.render('frontpage');
});

app.get('/notes.html', (req, res) => {
  res.render('note');
});

app.get('/message.html', (req, res) => {
  res.render('message');
});

app.get('/progress.html', (req, res) => {
  res.render('progress');
});

app.get('/trainingprograms.html', (req, res) => {
  res.render('trainingprograms');
});

app.get('/food.html', (req, res) => {
  res.render('food');
});


app.get('/calendar.html', (req, res) => {
  res.render('calendar');
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404')
});
