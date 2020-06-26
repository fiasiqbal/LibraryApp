const express = require('express');
const app = express();
const Accountdata = require('./src/model/Accountdata');

const nav = [
    {
        link:'/',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/admin/addauthor',name:'Add Author'
    }
];
const account = [
    {
        link:'/login',name:'Log in'
    },
    {
        link:'/createaccount',name:'Create Account'
    }
];
const footer = [
    {
        link:'/',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/login',name:'Log in'
    },
    {
        link:'/createaccount',name:'Create Account'
    }
];
const footericon = [
    {
        link:'https://www.facebook.com/',icon:'fb-ic',class:'fab fa-facebook-f fa-lg white-text mr-4'
    },
    {
        link:'https://www.twitter.com/',icon:'tw-ic',class:'fab fa-twitter fa-lg white-text mr-4'
    },
    {
        link:'https://aboutme.google.com/u/0/?referer=gplus',icon:'gplus-ic',class:'fab fa-google-plus-g fa-lg white-text mr-4'
    },
    {
        link:'https://www.linkedin.com/',icon:'li-ic',class:'fab fa-linkedin-in fa-lg white-text mr-4'
    },
    {
        link:'https://www.instagram.com/',icon:'ins-ic',class:'fab fa-instagram fa-lg white-text mr-4'
    },
    {
        link:'https://www.pinterest.com/',icon:'pin-ic',class:'fab fa-pinterest fa-lg white-text'
    }
];


const booksRouter = require('./src/routes/bookRoutes')(nav,account,footer,footericon);
const authorsRouter = require('./src/routes/authorRoutes')(nav,account,footer,footericon);
const adminRouter = require('./src/routes/adminRoutes')(nav,account,footer,footericon);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        account,
        home:[{link:'/books',name:'Books',img:'https://c.tribune.com.pk/2018/10/1821260-books-1539056187.jpg',description:'<i>“There is no friend as loyal as a book.”</i> ― <b>Ernest Hemingway</b><br><br>Browse through our vast collection of books.'},{link:'/authors',name:'Authors',img:'https://pulse.rs/wp-content/uploads/2018/01/pisma-kroz-civilizacije-nalivpero.jpg',description:'<br>Explore the authors we have listed out for you spanning a variety of genres and subjects, different languages, from all throughout the world and from different points of time in history.'}],
        footer,
        footericon
    });
});

// Login page
app.get('/login',function(req,res){
    res.render('login',
    {
        nav,
        footer,
        footericon
    });
});

// Create account page
app.get('/createaccount',function(req,res){
    res.render('createaccount',
    {
        nav,
        footer,
        footericon
    });
});

app.post('/createaccount/submit',function(req,res){
    var item = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }

    var account = Accountdata(item);
    account.save();
    res.redirect('/login');
})

app.post('/login/submit',function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    Accountdata.findOne({email:email,password:password},function(err,chk){
        if(!chk){
            return res.redirect('/login');
        }
        res.redirect('/');
    });
});

app.listen(5000);