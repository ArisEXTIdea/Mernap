exports.createProducts = ((req, res, next) => {
    res.json({
        message : 'Get data berhasil',
        data : {
            nama: 'sabun',
            harga: 300000
        }
    });
    next()
});

exports.createCustomer = ((rew, res, next) => {
    res.json({
        message: 'Post data customer',
        data : {
            nama: 'Muhammad Aris Widaryani',
            id : 1815678
        }
    });
    next();
})