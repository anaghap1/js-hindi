const user = {
    username: "hitesh",
    price: 999,

    welcomMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomMessage()
user.username = "sam"