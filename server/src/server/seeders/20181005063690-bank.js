module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Banks', [
            {
                number: '0000000000000001',
                expiry: '01/25',
                cvc: '666',
            },
            {
                number: '0000000000000002',
                expiry: '01/25',
                cvc: '666',
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
