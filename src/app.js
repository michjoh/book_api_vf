module.exports = (db) => {
    const express = require("express");

    const bookRoutes = require("./bookcatalog/bookRoutes")(db);
    const {notFound, errorHandler} = require("./error");

    const app = express();


    app.use(express.json());
    app.get("/", function (req, res) {
        res.send("Hello World!");
    });
    app.use("/", bookRoutes);


    app.use(notFound);
    app.use(errorHandler);

    return app;
};