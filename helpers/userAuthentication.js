var fs = require("fs");
var jwt = require('jsonwebtoken');
var {jwtKey} = require('/Users/pujag/Node JS Application/myapp/config/authKey');
let userAuthController = require('../helpers/readLoginUser');

function verifyJWT(token) {
    return new Promise(function (resolve, reject) {
        jwt.verify(token, jwtKey, async function (err, decoded) {
            if (err) {
                throw new Error('Could not decode JWT')
            }

            let userFoundDB = await userAuthController(decoded.userName,'','user_auth');
            // console.log('authentication');
            // console.log(decoded.userName);
            // console.log (userFoundDB);
            resolve (userFoundDB);
        })
    }).then(function (userFound) {
        return userFound
    }).catch(function (err) {
        console.log('error Verify Token');
        console.log(err); //err = Could not decode JWT (will be here)
        return false;
    }).then(function () {
        return ('edghdf')
    })
}


function verifyJWT_second(token) {
    let userFound = false;
    return new Promise(function (resolve, reject) {
        jwt.verify(token, jwtKey, function (err, decoded) {
            if (err) {
                resolve(userFound);
            }
            if (!err) {
                let userData = fs.readFileSync('./userData.json');
                let data = JSON.parse(userData);
                //If any of the condition is satisfied, it return true, wont check further (some/all)

                userFound = data.usersData.some((user) => {
                    return user.userName == decoded.userName
                })
                resolve(userFound);
            } else {
                resolve(userFound);
            }
        });

    })
}


async function createJWT(userName) {
    try {
        let jwtToken = await new Promise(function (resolve, reject) {
            jwt.sign({
                userName: userName
            }, jwtKey, function (err, token) {
                if (err) {
                    throw new Error('Could not create JWT')
                }
                resolve(token);
            });
        }).then(function (token) {
          //  res.send(token);      : you need to return the res.send(token) always
            return token
        }).catch(function (err) {
            console.log('error while creating Token');
            console.log(err); //err = Could not create JWT (will be here)
            return null;
        });
        return (jwtToken);
    } catch (err) {
        console.log('error while creating Token');
        return (null);
    }
};


module.exports = {
    createJWT: createJWT,
    verifyJWT: verifyJWT
};
