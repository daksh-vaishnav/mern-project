import { errors } from 'jose';
import { verifyJWT } from '#helpers/utils';
import { User } from '#models/user'

export const authentication = async (req, res, next) => {
    const publicURLs = ['signin', 'signup'];
    const originalUrl = req.originalUrl;

    if (publicURLs.some(url => originalUrl.includes(url))) {
        return next();
    }

    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization token missing or malformed' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const { payload: { id: userId } } = await verifyJWT(token);
        const user = await User.findById(userId).select('name email role is_active');

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        req.user = { userId, ...user.toObject() };
        next();

    } catch (error) {
        console.error('Authentication error:', error);

        if (error instanceof errors.JWTExpired) {
            return res.status(401).json({ error: 'Token has expired' });
        }

        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};
