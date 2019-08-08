
module.exports = (sequelize, DataTypes) => {
    const Contests = sequelize.define('Contests', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true,
            },
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: ["Company", "Product", 'Project']
            },
        },
        typeOfVenture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        whatVentureDoes: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        targetCustomers: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        style: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });


    Contests.associate = function (models) {
        Contests.belongsTo(models.User, {foreignKey: 'userId',targetKey: 'id',})
    };

    return Contests;
};