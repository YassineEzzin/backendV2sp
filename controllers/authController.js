import ErrorHandler from "../middlewares/errorMiddleware.js";
import { asyncError } from "../middlewares/asyncError.js";
import database from "../database/db.js";
import bcrypt from "bcrypt";
import sendToken from "../utils/jwtToken.js"

export const register = asyncError(async (req, res, next) => {});

export const login = asyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorHandler("Please provide all required fields", 400));
  }
  const isAlreadyRegistred = await database.query(
    "SELECT * FROM users WHERE email = $1  ",
    [email],
  );

  if (isAlreadyRegistred.rows.length > 0) {
    return next(new ErrorHandler("this email is used ", 400));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await database.query(
    " INSERT INTO users (name , email, password) VALUES ($1,$2,$3) RETURNING * ",
    [name, email, hashedPassword],
  );
  sendToken(user.rows[0], 201, "User registred successfully", res);
});







export const getOneUser = asyncError(async (req, res, next) => {});

export const logout = asyncError(async (req, res, next) => {});
