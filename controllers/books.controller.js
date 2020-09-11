const Book = require('../models/books.model');

exports.create = (req,res) =>{

    let bookObj = new Book(
        {
            bookTitle : req.body.bookTitle,
            bookEdition : req.body.bookEdition,
            bookAuthor : req.body.bookAuthor,
            bookPublisher : req.body.bookPublisher,
            bookCopies : req.body.bookCopies,
            bookCost : req.body.bookCost,
        }
    );

    bookObj.save()
    .then((data)=>{
        res.status(200).send({
            data :"Book created successfully..."
        });
    })
    .catch((err)=>{
        res.status(500).send({
            message : err.message
        });
    });
}

exports.findAll = (req,res)=> {
    console.log("call me..."+req.param.id);


    Book.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });

}

exports.update = (req,res) =>{
    /*
    Book.findByIdAndUpdate(req.param._id,{
        "bookTitle": req.param.bookTitle,
        "bookEdition": req.param.bookEdition,
        "bookAuthor": req.param.bookAuthor,
        "bookPublisher": req.param.bookPublisher,
        "bookCopies": req.param.bookCopies,
        "bookCost": req.param.bookCost,
    })
    .then((book) =>{
        if(!book) {
            return res.status(404).send({
                message:"Book not found with id "+res.param.id
            })
        }
        res.send("Book update Successfully");
    })
    .catch((err) =>{
        message : "Error occured udating book with id"+req.param._id
    });
    */


    Book.findById(req.params.id)
    .then((book)=>{
        if(!book) {
            return res.send("No Record Found " + req.params.id)
        } else {
            book.bookTitle= req.body.bookTitle;
            book.bookEdition = req.body.bookEdition;
            book.bookAuthor = req.body.bookAuthor;
            book.bookPublisher = req.body.bookPublisher;
            book.bookCopies  = req.body.bookCopies;
            book.bookCost = req.body.bookCost;

            book.save()
            .then(data => {
                res.status(200).send({
                    data :"Book updated successfully..."
                });
            })
            .catch(err =>{
                return res.status(500).send({
                    message: "Could not update book with id "+ req.param._id
                })
            })

        }
        
    })
    .catch(err =>{
        return res.status(500).send({
            message : "Could not find book with id "+req.param._id
        })
    });

}

exports.findOne = (req,res) => {

    Book.findById(req.params.id)
    .then(book =>{
        if(!book){
            return res.send
        }
        res.status(200).send({
            data :book
        });

    })
    .catch()
}

exports.deleteBook = (req,res) =>{


    console.log("delete id===>"+req.params.id);

    Book.findByIdAndDelete(req.params.id)
    .then(book =>{
        if(!book) {
            return res.send(404).send({
                message : "Record not found with id "+req.param._id
            })
        }
        res.send("Book Deleted Successfully");
    })
    .catch(err =>{
        return res.status(500).send({
            message: "Could not delete book with id "+ req.param._id
        })
    })
}