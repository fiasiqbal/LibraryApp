const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');

function router(nav,account,footer,footericon) {
    
    // Add book page
    adminRouter.get('/',function(req,res){
        res.render('addBook',
        {
            nav,
            account,
            footer,
            footericon
        });
    });

    // Add book button
    adminRouter.post('/add',function(req,res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            image: req.body.image
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });

    // Add author page
    adminRouter.get('/addauthor',function(req,res){
        res.render('addAuthor',
        {
            nav,
            account,
            footer,
            footericon
        });
    });

    // Add author button
    adminRouter.post('/addauthor/add',function(req,res){
        var item = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image
        }
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    });

    // Delete book button on book page
    adminRouter.get('/delete/:id',function(req,res){
        Bookdata.findByIdAndRemove(req.params.id, function(req,res){});
        res.redirect('/books');
    });

    // Delete author button on author page
    adminRouter.get('/addauthor/delete/:id',function(req,res){
        Authordata.findByIdAndRemove(req.params.id, function(req,res){});
        res.redirect('/authors');
    });

    // Update book page
    adminRouter.get('/updatebook/:id',function(req,res){
        Bookdata.findOne({_id:req.params.id})
        .then(function(book){
            res.render('updateBook',
            {
                nav,
                account,
                book,
                footer,
                footericon
            });
        });
    });

    // Update book button
    adminRouter.post('/updatebook/update/:id',function(req,res){
        Bookdata.update({_id:req.params.id},
            {
                $set:{
                    title: req.body.title,
                    author: req.body.author,
                    description: req.body.description,
                    image: req.body.image
                }
            },
            function(req,res){});
        res.redirect('/books');
    });

    // Update author page
    adminRouter.get('/updateauthor/:id',function(req,res){
        Authordata.findOne({_id:req.params.id})
        .then(function(author){
            res.render('updateAuthor',
            {
                nav,
                account,
                author,
                footer,
                footericon
            });
        });
    });

    // Update author button
    adminRouter.post('/updateauthor/update/:id',function(req,res){
        Authordata.update({_id:req.params.id},
            {
                $set:{
                    name: req.body.name,
                    description: req.body.description,
                    image: req.body.image
                }
            },
            function(req,res){});
        res.redirect('/authors');
    });

    return adminRouter;
}

module.exports = router;