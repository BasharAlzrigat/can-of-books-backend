
function booksHandler(req,res){
    BookModel.find({},(error,booksData)=>{
      if(error){
        res.send(error)
      }else{
        res.send(booksData)
      }
    })
  }

  module.exports = booksHandler;