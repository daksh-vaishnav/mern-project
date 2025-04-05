import bcrypt from "bcryptjs";

const saltRound = process.env.SALT_ROUND || 10


export const getHashPassowrd = async (password) => {
    return await bcrypt.hash(password, saltRound);
}

export const compareHashPassword = async (plainPassword, hashPassword) => {
    return await bcrypt.compare(plainPassword, hashPassword);
}