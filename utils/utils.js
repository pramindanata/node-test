module.exports = {
    add: (a, b) => a + b,
    square: (a) => a * a,
    setName: (user, fullName) => {
        let names = fullName.split(" ");

        user.firstName = names[0];
        user.lastName = names[1];

        return user;
    }
}