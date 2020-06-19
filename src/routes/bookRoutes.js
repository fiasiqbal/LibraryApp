const express = require('express');
const booksRouter = express.Router();

function router(nav) {
    var books = [
        {
            name:'Making Of A Ceo',
            author:'Sandeep K. Krishnan',
            description:'The Making of a CEO is a illuminating result of interviews and analysis of top level CEOs across various sectors. The genesis of the book was in a popular course Krishnan taught at IIM Bangalore.',
            img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWhILf_hUD5y3zNZv23fIQC7DQGYGaK90bw7uzGCzXO1Yttp3ajBhAMOsP420hcY2kfZ1v-o9jdbG0d4BGUGRHGvFsgcoGwk5Fj1j0CV6FLInH5cmynPZi&usqp=CAY'
        },
        {
            name:'Designing Destiny',
            author:'Kamlesh Patel',
            description:'What does destiny mean in the course of our lives? What is fixed and what can change? How can we design our own destiny? These are questions that some...',
            img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXaf6aRvQUC3Y_6W7mlzcJvBFfm4Mmebiw4BDfxV4u6x-DyrTgS5VEvSeAqCSvmZdpbGP3BJCVI606yL9Ge0ywRzVxxkrUxihVh-53NtCMBcgxf6Bv9tqi&usqp=CAE'
        },
        {
            name:'Artemis',
            author:'Andy Weir',
            description:'The author of the smash-hit The Martian, adapted into the Oscar-nominated blockbuster movie, returns to outer space—this time swapping Mars for the Moon as the setting',
            img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-oa8RGkAQIt9sm6-sl-GY7qJoPcbkTWcZOuStBgA-GHbRFOLEoM6-XNIQrQV39cYhLPZlKtP9nZCkW1gW0DDePUQek1gw4GpAOTjowpiv58syg_UGO5vb6Q&usqp=CAE'
        },
        {
            name:'The Merchant Of Venice',
            author:'William Shakespeare',
            description:'This early work of Shakespeare is considered to be the finest and most thought-provoking of all comedies of his time. Being so, it carries the universal theme of...',
            img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOUlQsL05SEfqew2Ejwv02UkYBCfg-kIK_wEygQXCPUy7jOGy7NBw3F4cdEnc51D5syWTBXT8SimJDvPcGzWX6pfdGuxFzhDGt1FBkLUPGL_CZYPFb6U9L0w&usqp=CAY'
        },
        {
            name:'The Adventures of Sherlock Holmes',
            author:'Arthur Conan Doyle',
            description:'There Is Nothing More Deceptive Than An Obvious Fact. He Has No Knowledge Of Literature, Philosophy, Or Astronomy. But His Chemistry Is Strong',
            img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZqHv4aN1A6-WjwxdaGzO8z6fI7ATRh0NNXAuBMdtdbL2NFXEwpLNw-NvOlYMgy4rBOJn46STHrfEzUjlSCouu3hq4rxqSj7sgLpr3JEON&usqp=CAY'
        },
        {
            name:'How to Win Friends and Influence People',
            author:'Dale Carnegie',
            description:'A bestselling book that helps you make people like you by making changes to the way you interact with them. The techniques in the book help you to win friends',
            img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRmGgDkvMzTLuWWSdAcZU4TM2QJsSspJKymaz8iUo3ijceENDh4PQUPVyXk9A2q1aiOFZ_B67OEbotqpKAnFCzv-EzC4qW99je6IN_Ot5jEPY3LfhbBHxr-&usqp=CAE'
        },
        {
            name:'The Da Vinci Code',
            author:'Dan Brown',
            description:'Harvard Professor Robert Langton, visiting Paris, is called in when the curator of the Louvre is murdered. Alongside the body is a series of baffling ciphers. Langton and a gifted French...',
            img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYf10fZrE30L_8WIStbwfeQJFSAckfsjoNOEu_fktOGsfIVliHgUGbbGkDLRumXAzq3bs3NGyBGJaWyyPnCrIoZijQUu0wwvAbguze6xCFsmQ-6oAnZH0v&usqp=CAE'
        },
        {
            name:'Wings of Fire',
            author:'A P J Abdul Kalam',
            description:'One of the most inspiring and popular autobiographies to read is Late Abdul Kalam’s Wings of Fire. In this book, the former president shares his personal experiences and minutest details of his life',
            img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXlhKUQ6QEh1DhSE9llvDuGI_SDMfhS179qtmtVQagkBPrSaUwiIBHTZMhH1THl4N6_HN3AZOaivZiu1dwLiKRmRg2PWNbjuhfbqVfBEIXUydgT7oJMBR7&usqp=CAE'
        },
        {
            name:'A Brief History Of Time',
            author:'Stephen Hawking',
            description:"'A Brief History of Time' poses some interesting and unanswered questions, like if there had been any beginning of time or if time can run backwards or if there is any boundary to the universe itself",
            img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnzCp4PvZtJwx9sss-p5RB0ExR0rXy3KrZhSLXOaSjrm314GN9ZnFENTXzbQJ3nZulwqp-SZXBPkRoD_mL-x28mtzNUONNCm5MA-mG2pBSNgSBRE3c1Da8&usqp=CAE'
        },
        {
            name:'Half Girlfriend',
            author:'Chetan Bhagat',
            description:'Half Girlfriend is a story of Bihari boy Madhav, a Hindi speaking Bihari who falls in love with Riya, an influential Delhi girl on the campus of prestigious St. Stephens creative writing has made it a unique love story',
            img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7juQwm_mLVFosyl70k3EnVvR5XuDuyj_zHjv10fNlXVvSSy9ZH1Dx9X-FfS9RZY1WKtLj3Z2KyacbB8crQI59-D9V7Xix2AgrmShCLRuM&usqp=CAY'
        }
    ];
    
    booksRouter.get('/',function(req,res){
        res.render('books',
        {
            nav,
            account:[{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
            books,
            footer:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
            footericon:[{link:'https://www.facebook.com/',icon:'fb-ic',class:'fab fa-facebook-f fa-lg white-text mr-4'},{link:'https://www.twitter.com/',icon:'tw-ic',class:'fab fa-twitter fa-lg white-text mr-4'},{link:'https://aboutme.google.com/u/0/?referer=gplus',icon:'gplus-ic',class:'fab fa-google-plus-g fa-lg white-text mr-4'},{link:'https://www.linkedin.com/',icon:'li-ic',class:'fab fa-linkedin-in fa-lg white-text mr-4'},{link:'https://www.instagram.com/',icon:'ins-ic',class:'fab fa-instagram fa-lg white-text mr-4'},{link:'https://www.pinterest.com/',icon:'pin-ic',class:'fab fa-pinterest fa-lg white-text'}]
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',
        {
            nav,
            account:[{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
            book: books[id],
            footer:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log in'},{link:'/createaccount',name:'Create Account'}],
            footericon:[{link:'https://www.facebook.com/',icon:'fb-ic',class:'fab fa-facebook-f fa-lg white-text mr-4'},{link:'https://www.twitter.com/',icon:'tw-ic',class:'fab fa-twitter fa-lg white-text mr-4'},{link:'https://aboutme.google.com/u/0/?referer=gplus',icon:'gplus-ic',class:'fab fa-google-plus-g fa-lg white-text mr-4'},{link:'https://www.linkedin.com/',icon:'li-ic',class:'fab fa-linkedin-in fa-lg white-text mr-4'},{link:'https://www.instagram.com/',icon:'ins-ic',class:'fab fa-instagram fa-lg white-text mr-4'},{link:'https://www.pinterest.com/',icon:'pin-ic',class:'fab fa-pinterest fa-lg white-text'}]
        });
    });

    return booksRouter;
}

module.exports = router;