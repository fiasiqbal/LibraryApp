const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav,account,footer,footericon) {
    // var books = [
    //     {
    //         name:'Making Of A Ceo',
    //         author:'Sandeep K. Krishnan',
    //         description:'The Making of a CEO is a illuminating result of interviews and analysis of top level CEOs across various sectors. The genesis of the book was in a popular course Krishnan taught at IIM Bangalore.',
    //         img:'making_of_a_ceo.jpg'
    //     },
    //     {
    //         name:'Designing Destiny',
    //         author:'Kamlesh Patel',
    //         description:'What does destiny mean in the course of our lives? What is fixed and what can change? How can we design our own destiny? These are questions that some...',
    //         img:'designing destiny.jpg'
    //     },
    //     {
    //         name:'Artemis',
    //         author:'Andy Weir',
    //         description:'The author of the smash-hit The Martian, adapted into the Oscar-nominated blockbuster movie, returns to outer space—this time swapping Mars for the Moon as the setting',
    //         img:'artemis.jpg'
    //     },
    //     {
    //         name:'The Merchant Of Venice',
    //         author:'William Shakespeare',
    //         description:'This early work of Shakespeare is considered to be the finest and most thought-provoking of all comedies of his time. Being so, it carries the universal theme of...',
    //         img:'merchant of venice.jpg'
    //     },
    //     {
    //         name:'The Adventures of Sherlock Holmes',
    //         author:'Arthur Conan Doyle',
    //         description:'There Is Nothing More Deceptive Than An Obvious Fact. He Has No Knowledge Of Literature, Philosophy, Or Astronomy. But His Chemistry Is Strong',
    //         img:'sherlock holmes.jpg'
    //     },
    //     {
    //         name:'How to Win Friends and Influence People',
    //         author:'Dale Carnegie',
    //         description:'A bestselling book that helps you make people like you by making changes to the way you interact with them. The techniques in the book help you to win friends',
    //         img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRmGgDkvMzTLuWWSdAcZU4TM2QJsSspJKymaz8iUo3ijceENDh4PQUPVyXk9A2q1aiOFZ_B67OEbotqpKAnFCzv-EzC4qW99je6IN_Ot5jEPY3LfhbBHxr-&usqp=CAE'
    //     },
    //     {
    //         name:'The Da Vinci Code',
    //         author:'Dan Brown',
    //         description:'Harvard Professor Robert Langton, visiting Paris, is called in when the curator of the Louvre is murdered. Alongside the body is a series of baffling ciphers. Langton and a gifted French...',
    //         img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYf10fZrE30L_8WIStbwfeQJFSAckfsjoNOEu_fktOGsfIVliHgUGbbGkDLRumXAzq3bs3NGyBGJaWyyPnCrIoZijQUu0wwvAbguze6xCFsmQ-6oAnZH0v&usqp=CAE'
    //     },
    //     {
    //         name:'Wings of Fire',
    //         author:'A P J Abdul Kalam',
    //         description:'One of the most inspiring and popular autobiographies to read is Late Abdul Kalam’s Wings of Fire. In this book, the former president shares his personal experiences and minutest details of his life',
    //         img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXlhKUQ6QEh1DhSE9llvDuGI_SDMfhS179qtmtVQagkBPrSaUwiIBHTZMhH1THl4N6_HN3AZOaivZiu1dwLiKRmRg2PWNbjuhfbqVfBEIXUydgT7oJMBR7&usqp=CAE'
    //     },
    //     {
    //         name:'A Brief History Of Time',
    //         author:'Stephen Hawking',
    //         description:"'A Brief History of Time' poses some interesting and unanswered questions, like if there had been any beginning of time or if time can run backwards or if there is any boundary to the universe itself",
    //         img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnzCp4PvZtJwx9sss-p5RB0ExR0rXy3KrZhSLXOaSjrm314GN9ZnFENTXzbQJ3nZulwqp-SZXBPkRoD_mL-x28mtzNUONNCm5MA-mG2pBSNgSBRE3c1Da8&usqp=CAE'
    //     },
    //     {
    //         name:'Half Girlfriend',
    //         author:'Chetan Bhagat',
    //         description:'Half Girlfriend is a story of Bihari boy Madhav, a Hindi speaking Bihari who falls in love with Riya, an influential Delhi girl on the campus of prestigious St. Stephens creative writing has made it a unique love story',
    //         img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7juQwm_mLVFosyl70k3EnVvR5XuDuyj_zHjv10fNlXVvSSy9ZH1Dx9X-FfS9RZY1WKtLj3Z2KyacbB8crQI59-D9V7Xix2AgrmShCLRuM&usqp=CAY'
    //     }
    // ];
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('books',
            {
                nav,
                account,
                books,
                footer,
                footericon
            });
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',
            {
                nav,
                account,
                book,
                footer,
                footericon
            });
        });
    });

    return booksRouter;
}

module.exports = router;