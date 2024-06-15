const { User } = require("../models/index");
const { successResponse, errorResponse } = require("../utils/response");
const {
  createAccessToken,
  createRefreshToken,
  decodeToken,
} = require("../utils/jwt");
const bcrypt = require("bcrypt");

module.exports = {
  // index: async (req, res) => {
  //   if (req.user) {
  //     return res.redirect("/");
  //   }
  //   res.render("auth/login");
  // },
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email) {
      return errorResponse(res, 400, "Email is not provided");
    }
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      return errorResponse(res, 404, "User not found");
    }
    if (password !== user.password) {
      return errorResponse(res, 400, "Password is not correct");
    }
    // const passwordHash = user.password;
    // if (!bcrypt.compareSync(password, passwordHash)) {
    //   return errorResponse(res, 400, "Invalid password");
    // }

    // tao token
    // const accessToken = createAccessToken({ id: user.id });
    // const refreshToken = createRefreshToken();
    // await UserToken.create({
    //   user_id: user.id,
    //   refresh_token: refreshToken,
    // });
    if (user.admin === "true") {
      return successResponse(
        res,
        200,
        "Success",
        user
        // user,
        //   accessToken,
        //   refreshToken,
      );
    } else {
      return errorResponse(res, 401, "Unauthorized");
    }
  },
  profile: async (req, res) => {
    const user = req.user.dataValues;
    // return successResponse(res, 200, "Success", req.user.dataValues);
    return res.status(200).json({
      status: 200,
      message: "Thành công",
      result: {
        id: user.id,
        email: user.email,
        name: user.name,
        thumbnail: user.thumbnail,
        status: user.status,
      },
    });
  },
  logout: async (req, res) => {
    const { accessToken, exp } = req.user;
    const [blacklist] = await Blacklist.findOrCreate({
      where: { token: accessToken },
      defaults: { token: accessToken, expired: exp },
    });
    if (blacklist) {
      return successResponse(res, 200, "Success");
    }
    return errorResponse(res, 500, "Server error");
  },
  refresh: async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return errorResponse(
        res,
        400,
        "Bad Request",
        "Vui lòng nhập refreshToken"
      );
    }

    try {
      decodeToken(refreshToken);
      const userToken = await UserToken.findOne({
        where: { refresh_token: refreshToken },
      });
      if (!userToken) {
        throw new Error("Token doesn't exist");
      }
      const { userId: user_id } = userToken;
      // create accessToken moi
      const accessToken = createAccessToken({ userId: userId });
      return successResponse(res, 200, "Success", {
        accessToken,
        refreshToken,
      });
    } catch (error) {
      return errorResponse(res, 401, "Unauthorize");
    }
  },
};
