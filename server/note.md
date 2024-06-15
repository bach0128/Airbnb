// define association here
      // quan he 1-1
      // User.hasOne(models.Phone, {
      //   foreignKey: "user_id",
      //   as: "phone",
      // });
      // quan he 1-N
      User.hasMany(models.Post, {
        foreignKey: "user_id",
        as: "posts",
      });

       Post.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      
      // quan he N-N
      User.belongsToMany(models.Course, {
        foreignKey: "user_id",
        through: "users_courses",
        as: "courses",
      });

       status: {
        type: Sequelize.INTEGER,
        // defaultValue: false,
      },
      admin: {
        type: Sequelize.STRING,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },

       npx sequelize-cli model:generate --name Places  --attributes id:integer

       npx sequelize migration:generate --name [name_of_your_migration]

       user_id: {
        allowNull: false,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
        type: Sequelize.INTEGER,
      },