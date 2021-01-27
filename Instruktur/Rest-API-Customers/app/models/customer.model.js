// Memanggil Modul db.js
const sql = require('./db');

// Konstruktor data dari Database
const Customer = function (customer) {
    this.email = customer.email;
    this.nama_lengkap = customer.nama_lengkap;
    this.aktif = customer.aktif;
};

Customer.create = (newCustomer, result) => {
    let sql_query = `INSERT INTO customers SET ?`;
    sql.query(sql_query, newCustomer, (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
            return;
        }

        console.log('Data Customer dibuat: ', { id: res.insertId, ...newCustomer });
        result(null, { id: res.insertId, ...newCustomer });
    });
};

Customer.findById = (customerId, result) => {
    let sql_query = `SELECT * FROM customers WHERE id = ${customerId}`;
    sql.query(sql_query, (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
            return;
        }

        // Jika Data ditemukan
        if (res) {
            console.log('Customer ditemukan: ', res[0]);
            result(null, res[0]);
            return;
        }

        // Jika data tidak ada
        result({ kind: 'data tidak ditemukan' }, null);
    });
}

Customer.getAll = result => {
    let sql_query = `SELECT * FROM customers`;
    sql.query(sql_query, (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
            return;
        }

        console.log('Customers: ', res);
        result(null, res);
    });
};

Customer.updateById = (id, customer, result) => {
    let sql_query = `UPDATE customers SET email = ?, nama_lengkap = ?, aktif = ? WHERE id = ?`;
    sql.query(sql_query, [customer.email, customer.nama_lengkap, customer.aktif, id], (err, res) =>{
        if(err) {
            console.log('Error: ', err);
            result(err, null);
            return;
        }

        // Jika data dengan ID = ?, tidak ditemukan
        if(res.effectedRow == 0) {
            result({ kind: 'Data Customer tidak temukan'}, null);
            return;
        }

        // Jika data ditemukan dan berhasil du update
        console.log('Update data custumer id:', {id: id, ...customer});
        result(null, {id: id, ...customer});
    });
};

Customer.remove = (id, result) => {
    let sql_query = `DELETE FROM customers WHERE id = ?`;
    sql.query(sql_query, id, (err, res) =>{
        if(err) {
            console.log('Error: ', err);
            result(err, null);
            return;
        }

        // Jika data dengan ID = ?, tidak ditemukan
        if(res.effectedRow == 0) {
            result({ kind: 'Data Customer tidak temukan'}, null);
            return;
        }

        // Jika data ditemukan dan berhasil di Hapus
        console.log('Data Custumer dihapus dengan id:', id);
        result(null, res);
    });
};

Customer.removeAll = result => {
    let sql_query = `TRUNCATE TABLE customers`;
    sql.query(sql_query, (err, res) =>{
        if(err) {
            console.log('Error: ', err);
            result(err, null);
            return;
        }

        // Jika data ditemukan dan berhasil di hapus
        console.log(`${res.affectedRows} Data custumers telah dihapus!`);
        result(null, res);
    });
};

module.exports = Customer;