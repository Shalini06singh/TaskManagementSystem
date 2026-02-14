import jwt from "jsonwebtoken";

export function generateAccessToken(payload: object) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
}

export function generateRefreshToken(payload: object) {
  if (!process.env.REFRESH_SECRET) {
    throw new Error("REFRESH_SECRET is not defined");
  }

  return jwt.sign(payload, process.env.REFRESH_SECRET, {
    expiresIn: "7d",
  });
}


