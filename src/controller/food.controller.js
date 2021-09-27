const Food = require("../model/food.model");

//Create a Food Item
const createFood = async (req, res) => {
    if (req.body) {
        const food = new Food(req.body);
        await food.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}

//get All Food Items
const getAllFoods = async (req, res) => {
    await Food.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

const getFoodsByCategory = async (req,res)=>{
    await Food.find({'category': req.params.id}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send(result);
        }
    })
}

//search for food item
const getFoodFromCode = async (req, res) => {
    console.log(req.params.id)
    await Food.find({'itemCode': req.params.id}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result)
            res.send(result);
        }
    })
};

//update food with id
const updateFood = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.body.itemCode;
        await Food.findOneAndUpdate({itemCode:id}, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(error);
            });
    }
}

//delete Food Item
const deleteFood = async (req, res) => {
    if (req.params.id) {
        //delete proposal data
        await Food.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(result);
        });
    }
}

module.exports = {
    createFood,
    getFoodFromCode,
    getAllFoods,
    deleteFood,
    updateFood,
    getFoodsByCategory
}