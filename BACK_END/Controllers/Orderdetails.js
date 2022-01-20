const Orderdetails = require('../Models/Orderdetails');

exports.getorderdetails= (req, res) => {

    const {
        userID,
        restaurantId,
        orderDetails,
        Totalprice,
        orderstatus,
        userAddress
    } = req.body;

    const userObj = new Orderdetails(
        {
            userID : userID,
            restaurantId : restaurantId,
            orderDetails : orderDetails,
            Totalprice : Totalprice,
            orderstatus : orderstatus,
            userAddress  : userAddress  
        }
    );

    userObj.save().then(response => {
        res.status(200).json({
            message: "Order is Recevied",
            user: response
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}

