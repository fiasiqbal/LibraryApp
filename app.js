const express = require('express');
const app = express();
const nav = [
    {
        link:'/',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    }
];


const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        account:[{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
        home:[{link:'/books',name:'Books',img:'https://c.tribune.com.pk/2018/10/1821260-books-1539056187.jpg',description:'<i>“There is no friend as loyal as a book.”</i> ― <b>Ernest Hemingway</b><br><br>Browse through our vast collection of books.'},{link:'/authors',name:'Authors',img:'https://pulse.rs/wp-content/uploads/2018/01/pisma-kroz-civilizacije-nalivpero.jpg',description:'<br>Explore the authors we have listed out for you spanning a variety of genres and subjects, different languages, from all throughout the world and from different points of time in history.'}],
        footer:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
        footericon:[{link:'https://www.facebook.com/',icon:'fb-ic',class:'fab fa-facebook-f fa-lg white-text mr-4'},{link:'https://www.twitter.com/',icon:'tw-ic',class:'fab fa-twitter fa-lg white-text mr-4'},{link:'https://aboutme.google.com/u/0/?referer=gplus',icon:'gplus-ic',class:'fab fa-google-plus-g fa-lg white-text mr-4'},{link:'https://www.linkedin.com/',icon:'li-ic',class:'fab fa-linkedin-in fa-lg white-text mr-4'},{link:'https://www.instagram.com/',icon:'ins-ic',class:'fab fa-instagram fa-lg white-text mr-4'},{link:'https://www.pinterest.com/',icon:'pin-ic',class:'fab fa-pinterest fa-lg white-text'}]
    });
});

app.get('/login',function(req,res){
    res.render('login',
    {
        nav,
        footer:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
        footericon:[{link:'https://www.facebook.com/',icon:'fb-ic',class:'fab fa-facebook-f fa-lg white-text mr-4'},{link:'https://www.twitter.com/',icon:'tw-ic',class:'fab fa-twitter fa-lg white-text mr-4'},{link:'https://aboutme.google.com/u/0/?referer=gplus',icon:'gplus-ic',class:'fab fa-google-plus-g fa-lg white-text mr-4'},{link:'https://www.linkedin.com/',icon:'li-ic',class:'fab fa-linkedin-in fa-lg white-text mr-4'},{link:'https://www.instagram.com/',icon:'ins-ic',class:'fab fa-instagram fa-lg white-text mr-4'},{link:'https://www.pinterest.com/',icon:'pin-ic',class:'fab fa-pinterest fa-lg white-text'}]
    });
});

app.get('/createaccount',function(req,res){
    res.render('createaccount',
    {
        nav,
        footer:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
        footericon:[{link:'https://www.facebook.com/',icon:'fb-ic',class:'fab fa-facebook-f fa-lg white-text mr-4'},{link:'https://www.twitter.com/',icon:'tw-ic',class:'fab fa-twitter fa-lg white-text mr-4'},{link:'https://aboutme.google.com/u/0/?referer=gplus',icon:'gplus-ic',class:'fab fa-google-plus-g fa-lg white-text mr-4'},{link:'https://www.linkedin.com/',icon:'li-ic',class:'fab fa-linkedin-in fa-lg white-text mr-4'},{link:'https://www.instagram.com/',icon:'ins-ic',class:'fab fa-instagram fa-lg white-text mr-4'},{link:'https://www.pinterest.com/',icon:'pin-ic',class:'fab fa-pinterest fa-lg white-text'}]
    });
});

app.listen(5000);