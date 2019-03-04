module.exports = {
    handleError: function(err) {
        console.log(err);
        res.send("ERROR HAPPENED");
    }
};