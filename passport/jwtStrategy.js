const db = require("../models");
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
require("dotenv").config();

const userStrategy = new JWTstrategy(
    {
      secretOrKey:"secretOrKey",
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async function(token, done){
            try {
                db.User.findOne({_id:token.id}, (err, user) => 
                {
                if (err) {
                  return done(err);
                }
                if (!user) {
                  return done(null, false, { message: "Incorrect username" });
                }
                  return done(null,user); 
                });
            }
            catch (error) {
                done(error);
            }
      }
    );

const adminStrategy = new JWTstrategy(
      {
        secretOrKey:process.env.JWT_KEY,
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
      },
      async function(token, done){
              try {
                  db.Admin.findOne({_id:token.id}, (err, user) => 
                  {
                  if (err) {
                    return done(err);
                  }
                  if (!user) {
                    return done(null, false, { message: "Incorrect username" });
                  }
                    return done(null,user); 
                  });
              }
              catch (error) {
                  done(error);
              }
        }
      );
  
strategy={userStrategy,adminStrategy};
module.exports = strategy;

