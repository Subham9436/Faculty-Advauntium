module.exports = (sequelize, DataTypes) => {
    const Faculty = sequelize.define('Faculty', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        achievements: {
            type: DataTypes.JSON, // MySQL supports JSON data type
            allowNull: true
        },
        publications: {
            type: DataTypes.JSON, // MySQL supports JSON data type
            allowNull: true
        },
        certifications: {
            type: DataTypes.JSON, // MySQL supports JSON data type
            allowNull: true
        },
        teaching_experience: {
            type: DataTypes.JSON, // MySQL supports JSON data type
            allowNull: true
        },
        google_scholar_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        scopus_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        research_gate_id: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'Faculty', // Specify the table name if it differs from the model name
        timestamps: false // Set to true if you want to include createdAt and updatedAt fields
    });

    return Faculty;
};