const express = require('express');
const authorsRouter = express.Router();

function router(nav){
    var authors = [
        {
            name:'William Shakespeare',
            description:"William Shakespeare, often called England's national poet, is considered the greatest dramatist of all time. His works are loved throughout the world.",
            img:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg'
        },
        {
            name:'Arthur Conan Doyle',
            description:'Author Arthur Conan Doyle wrote 60 mystery stories featuring the wildly popular detective character Sherlock Holmes and his loyal assistant Watson.',
            img:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MjA1NDUwNzYz/sir-arthur-conan-doyle-9278600-1-402.jpg'
        },
        {
            name:'Dale Carnegie',
            description:"Dale Carnegie was the author of 'How to Win Friends and Influence People,' one of the best-selling self-help books of all time.",
            img:'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTc1ODI4NDkx/dale-carnegie-9238769-1-402.jpg'
        },
        {
            name:'J.K. Rowling',
            description:"J.K. Rowling is the creator of the 'Harry Potter' fantasy series, one of the most popular book and film franchises in history.",
            img:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxMzcxNTYyNTA5/jk-rowling-40998-1-402.jpg'
        },
        {
            name:'Stephen Hawking',
            description:"Stephen Hawking was a scientist known for his work with black holes and relativity, and the author of popular science books like 'A Brief History of Time.'",
            img:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU1NDM3Mzg4NTcyMzM0/stephen-hawking-on-october-10-1979-in-princeton-new-jersey-photo-by-santi-visalligetty-images.jpg'
        },
        {
            name:'Chetan Bhagat',
            description:"Chetan Bhagat is an Indian author and columnist, known for his Indian-English novels about young middle-class Indians. Bhagat was included in Time magazine's list of World's 100 Most Influential People in 2010.",
            img:'/images/chetan.jpg'
        },
        {
            name:'A.P.J. Abdul Kalam',
            description:'A.P.J. Abdul Kalam was an aerospace scientist who served as the 11th President of India from 2002 to 2007. His focus and greatest ambition was transforming India into a developed nation.',
            img:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE1OTI3MTg0OTA3/apj-abdul-kalam-39325-1-402.jpg'
        },
        {
            name:'Dan Brown',
            description:'Dan Brown is an American author who wrote well-researched novels that centred on secret organizations and had intricate plots. He is best known for the Robert Langdon series.',
            img:'/images/dan.jpg'
        },
        {
            name:'Ernest Hemingway',
            description:"Nobel Prize winner Ernest Hemingway is seen as one of the great American 20th century novelists, and is known for works like 'A Farewell to Arms' and 'The Old Man and the Sea.'",
            img:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzODM5NjUwMzE2/ernest-hemingway-9334498-1-402.jpg'
        },
        {
            name:'Leo Tolstoy',
            description:"Russian author Leo Tolstoy wrote the acclaimed novels 'War and Peace,' 'Anna Karenina' and 'The Death of Ivan Ilyich,' and ranks among the world's top writers.",
            img:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzI0OTQxMDA2MzQ3/leo-tolstoyjpg.jpg'
        }
    ];
    
    authorsRouter.get('/',function(req,res){
        res.render('authors',
        {
            nav,
            account:[{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
            authors,
            footer:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
            footericon:[{link:'https://www.facebook.com/',icon:'fb-ic',class:'fab fa-facebook-f fa-lg white-text mr-4'},{link:'https://www.twitter.com/',icon:'tw-ic',class:'fab fa-twitter fa-lg white-text mr-4'},{link:'https://aboutme.google.com/u/0/?referer=gplus',icon:'gplus-ic',class:'fab fa-google-plus-g fa-lg white-text mr-4'},{link:'https://www.linkedin.com/',icon:'li-ic',class:'fab fa-linkedin-in fa-lg white-text mr-4'},{link:'https://www.instagram.com/',icon:'ins-ic',class:'fab fa-instagram fa-lg white-text mr-4'},{link:'https://www.pinterest.com/',icon:'pin-ic',class:'fab fa-pinterest fa-lg white-text'}]
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('author',
        {
            nav,
            account:[{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
            author: authors[id],
            footer:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
            footericon:[{link:'https://www.facebook.com/',icon:'fb-ic',class:'fab fa-facebook-f fa-lg white-text mr-4'},{link:'https://www.twitter.com/',icon:'tw-ic',class:'fab fa-twitter fa-lg white-text mr-4'},{link:'https://aboutme.google.com/u/0/?referer=gplus',icon:'gplus-ic',class:'fab fa-google-plus-g fa-lg white-text mr-4'},{link:'https://www.linkedin.com/',icon:'li-ic',class:'fab fa-linkedin-in fa-lg white-text mr-4'},{link:'https://www.instagram.com/',icon:'ins-ic',class:'fab fa-instagram fa-lg white-text mr-4'},{link:'https://www.pinterest.com/',icon:'pin-ic',class:'fab fa-pinterest fa-lg white-text'}]
        });
    });

    return authorsRouter;
}

module.exports = router;