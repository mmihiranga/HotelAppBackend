const Order = require("../model/order.model");

//Create an Order
const createOrder = async (req, res) => {
    if (req.body) {
        const order = new Order(req.body);
        await order.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}

//get All Orders
const getAllOrders = async (req, res) => {
    await Order.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

//get orders from selected user
const getOrdersByUser = async (req, res) => {
    await Order.find({'userId': req.params.id}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

//update order with id
const updateOrder = async (req, res) => {
    if (req.body) {
        let id = req.body.id;
        await Order.findOneAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(err);
            });
    }
}

//delete Order
const deleteOrder = async (req, res) => {
    if (req.params.id) {
        //delete proposal data
        await Order.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(result);
        });
    }
}

module.exports = {
    createOrder,
    getOrdersByUser,
    getAllOrders,
    deleteOrder,
    updateOrder,
}