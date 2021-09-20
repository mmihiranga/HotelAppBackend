const Reception = require("../model/reception.model");




//Create a conference
const addReception = async (req,res)=>{
    if(req.body){
      
            const data={
                userId : req.body.userId,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                receptionName: req.body.receptionName,
                status: req.body.status,
                capacity :  req.body.capacity,
                entType :  req.body.entType,
                category :  req.body.category,
                funcDate:  req.body.funcDate,
                addDate: req.body.addDate,
                photoPath:req.body.photoPath,
                menu:  req.body.menu,
                remarks:  req.body.remarks
            
            }
            const reception = new Reception(data);
          
            await reception.save()
                .then(data=>res.status(200).send({data:data}))
                .catch(err=>res.send(err));
        
    }
}
//get All Room
const getAllReception = async (req, res) => {
    await Reception.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}


//Search
const SearchReception = async (req, res) => {
    
    await Reception.find({'receptionName': { $regex: '.*' + req.params.id + '.*' } },(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
};






// get Reception with userID
const getReceptionID = async (req, res) => {
    // console.log(req.params.id)
    await Reception.find({'userId': req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
};
//update Reception with id
const updateReception = async (req,res)=>{
    if(req.body){
        let id = req.body._id;
      
            const data={
                userId : req.body.userId,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                receptionName: req.body.receptionName,
                status: req.body.status,
                capacity :  req.body.capacity,
                entType :  req.body.entType,
                category :  req.body.category,
                funcDate:  req.body.funcDate,
                addDate: req.body.addDate,
                photoPath:req.body.photoPath,
                menu:  req.body.menu,
                remarks:  req.body.remarks
            
            }
            
            const reception = await Reception.findById(id);
         
            await Reception.findByIdAndUpdate(id,data)
                .then(data=>{
                    res.status(200).send(data)
                })
                .catch(err=>{res.send(err)});
        
    }
}
//delete Research
const deleteReception = async (req, res) => {
    if (req.params.id) {
        const reception = await Reception.findById(req.params.id);
        if(reception){
           
            //delete proposal data
            await Reception.findByIdAndDelete(req.params.id, (err, result) => {
                if (err) return res.status(500).send(err);
                return res.status(200).send(result);
            });
        }
    }
}

module.exports = {
 
    addReception,
    getReceptionID,
    getAllReception,
    deleteReception,
    updateReception,
    SearchReception
}