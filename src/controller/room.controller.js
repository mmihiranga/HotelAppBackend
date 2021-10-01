const Room = require("../model/room.model");




//Create a conference
const addRoom = async (req,res)=>{
    if(req.body){
      
            const data={
                userId : req.body.userId,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                roomName: req.body.roomName,
                status: req.body.status,
                adultNo : req.body.adultNo,
                childNo : req.body.childNo,
                roomNo : req.body.roomNo,
                checkIn: req.body.checkIn,
                checkOut: req.body.checkOut,
                remarks: req.body.remarks,
                loyalty: req.body.loyalty,
                addDate: req.body.addDate,
                photoPath:req.body.photoPath,
            
            }
            const room = new Room(data);
          
            await room.save()
                .then(data=>res.status(200).send({data:data}))
                .catch(err=>res.send(err));
        
    }
}
//get All Room
const getAllRoom = async (req, res) => {
    const mySort={ addDate: -1 };
    await Room.find().sort(mySort)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}





//get Room with userID
const getRoomID = async (req, res) => {
    await Room.find({'userId': req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
};

//update Room with id
const updateRoom = async (req,res)=>{
    if(req.body){
        let id = req.body._id;
      
            const data={
                userId : req.body.userId,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                roomName: req.body.roomName,
                status: req.body.status,
                adultNo : req.body.adultNo,
                childNo : req.body.childNo,
                roomNo : req.body.roomNo,
                checkIn: req.body.checkIn,
                checkOut: req.body.checkOut,
                remarks: req.body.remarks,
                loyalty: req.body.loyalty,
                addDate: req.body.addDate,
                photoPath:req.body.photoPath,
            }
            
            const room = await Room.findById(id);
         
            await Room.findByIdAndUpdate(id,data)
                .then(data=>{
                    res.status(200).send(data)
                })
                .catch(err=>{res.send(err)});
        
    }
}
//delete Research
const deleteRoom = async (req, res) => {
    if (req.params.id) {
        const room = await Room.findById(req.params.id);
        if(room){
           
            //delete proposal data
            await Room.findByIdAndDelete(req.params.id, (err, result) => {
                if (err) return res.status(500).send(err);
                return res.status(200).send(result);
            });
        }
    }
}

//search function
const SearchRoom = async (req, res) => {

    console.log(req.params.id)

    await Room.find({'roomName': { $regex: '.*' + req.params.id + '.*' } },(err,result)=>{

        if(err){

            console.log(err);

        }else{

            res.send(result);

        }

    })

};

module.exports = {
 
    addRoom,
    getRoomID,
    getAllRoom,
    deleteRoom,
    updateRoom,
    SearchRoom
}