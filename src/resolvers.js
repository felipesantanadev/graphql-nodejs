const users = [
    { id: 1, name: 'Felipe Santana', email: 'my_email@gmail.com' },
    { id: 2, name: 'Bill Gates', email: 'billgates@gmail.com' }
];

module.exports = {
    users: () => {
        console.log(users);
        console.log('AQUI');
        return users;
    },
    user: () => {
        return users[0];
    },
    createUser: () => {

    }
};