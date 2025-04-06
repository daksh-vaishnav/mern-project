import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from 'jose';
import dotenv from 'dotenv'
dotenv.config({})

const JWT_SECRET_TEXT = process.env.JWT_SECRET || 'asdasd@ASAVSEYT@2564'
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_TEXT);
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7h'
const SALT_ROUND = process.env.SALT_ROUND || 10


export const getHashPassowrd = async (password) => {
    return await bcrypt.hash(password, SALT_ROUND);
}

export const compareHashPassword = async (plainPassword, hashPassword) => {
    return await bcrypt.compare(plainPassword, hashPassword);
}

export const generateJWT = async (payload) => {

    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(JWT_EXPIRE)
        .sign(JWT_SECRET);
}

export const verifyJWT = async (token) => {
    return await jwtVerify(token, JWT_SECRET);
}