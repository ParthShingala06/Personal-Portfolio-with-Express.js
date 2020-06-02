const express = require("express");
const router = express.Router();
const { catchErrors } = require("../handlers/errorHandlers");

// The main route
router.get("/", (request, response) => {
    response.render("home", {
        title: "",

    });
});


module.exports = router;