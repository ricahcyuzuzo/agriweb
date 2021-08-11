import bcyrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authentication {
    static generateToken(user) {
        return jwt.sign({user}, 'agriAppWeb', { expiresIn: '1h' });
    }

    static hashPassword(password){
        return bcyrpt.hashSync(password, 15);
    }

    static checkPassword(plainPassword, hashedPassword){
        return bcyrpt.compareSync(plainPassword, hashedPassword);
    }
}

export default Authentication;
