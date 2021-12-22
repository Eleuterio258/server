const response = require('express');
const pool = require('../database/mysql');
const getAllDelivery = async (req, res = response) => {

    try {

        let deliverydb = await pool.query(`CALL SP_ALL_DELIVERYS();`);

        res.json({
            resp: true,
            msg: 'Get All Delivery',
            delivery: deliverydb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}
module.exports = {
    getAllDelivery
}