module.exports = app => {
    const customers = require("../controllers/customers.controllers");
  
    // Buat Data Customer Baru
    app.post("/customers", customers.create);
  
    // Menampilkan Seluruh data Customer
    app.get("/customers", customers.findAll);
  
    // Menampilkan Data Customer berdasarkan Id
    app.get("/customers/:customerId", customers.findOne);
  
    // Update Data Customer
    app.put("/customers/:customerId", customers.update);
  
    // Hapus Data Customer berdasarkan Id
    app.delete("/customers/:customerId", customers.delete);
  
    // Hapus Seluruh data Customer
    app.delete("/customers", customers.deleteAll);
  };