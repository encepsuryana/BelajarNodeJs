const Customer = require('../models/customer.model');

// Create & Save customer baru
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content tidak boleh kosong!'
        })
    }

    // Create Customer
    const customer = new Customer({
        email: req.body.email,
        nama_lengkap: req.body.nama_lengkap,
        aktif: req.body.aktif
    })

    // Save Customer ke databae
    Customer.create(customer, (err, data) => {
        if (err) res.status(500).send({
            message: err.message || 'Internal Server Error!, Menambahkan data Customer'
        });
        else res.send(data);
    });
};


// Menampilkan seluruh data customer dari database
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
        if (err) res.status(500).send({
            message: err.message || 'Internal Server Error!, Mengambil seluruh data Customer'
        });
        else res.send(data);
    });
};

// Menampilkan satu data customer dari database
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === 'Tidak ditemukan!') {
                res.status(404).send({
                    message: `Customer dengan Id ${req.params.customerId} tidak ditemukan!`
                });
            } else {
                res.status(500).send({
                    message: 'Internal Server Error!, Customer Id ' + req.params.customerId
                });
            };
        }
        else res.send(data);
    });
};


// Update data customer by Id
exports.update = (req, res) => {

    // Validasi Request
    if (!req.body) {
        res.status(400).send({
            message: 'Data Tidak boleh Kosong!'
        });
    }

    console.log(req.body);

    Customer.updateById(req.params.customerId, new Customer(req.body), (err, data) => {
        if (err) {
            if (err.kind === 'Tidak ditemukan!') {
                res.status(404).send({
                    message: `Customer dengan Id ${req.params.customerId} tidak ditemukan!`
                });
            } else {
                res.status(500).send({
                    message: 'Internal Server Error!, Customer Id' + req.params.customerId
                });
            };
        }
        else res.send(data);
    });
};

// Delete data customer by Id
exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === 'Tidak ditemukan!') {
                res.status(404).send({
                    message: 'Customer dengan Id ${req.params.customerId} tidak ditemukan!'
                });
            } else {
                res.status(500).send({
                    message: 'Internal Server Error!, Customer Id ' + req.params.customerId
                });
            };
        }
        else res.send({
            message: `Data customer dengan Id : ${req.params.customerId} telah dihapus!`
        });
    });
};

// Menghapus seluruh data customer dari database
exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
        if (err) res.status(500).send({
            message: err.message || 'Internal Server Error!, Menghapus seluruh data Customer'
        });
        else res.send({
            message: 'Seluruh data customer telah dihapus!'
        });
    });
};


// Reset data customer dari database
exports.resetData = (req, res) => {
    Customer.resetAll((err, data) => {
        if (err) res.status(500).send({
            message: err.message || 'Internal Server Error!, Menghapus seluruh data Customer'
        });
        else res.send({
            message: 'Tabel customer telah diReset!'
        });
    });
};