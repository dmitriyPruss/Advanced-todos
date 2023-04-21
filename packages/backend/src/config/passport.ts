import { PassportStatic } from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { config } from 'dotenv';
import { IUser } from '../types';
import { User } from '../entities';
import { errors } from '../errors';

config();

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const passportStrategy = (passport: PassportStatic) => {
  passport.use(
    new JWTStrategy(options, async (payload, done) => {
      try {
        const { id } = payload;

        const foundUser: IUser | null = await User.findOneBy({ id });

        return !foundUser ? done(errors.NotFoundEntityError, false) : done(null, foundUser);
      } catch (err) {
        return done({ error: err }, false);
      }
    })
  );
};

export default passportStrategy;
