const jwt = require('jsonwebtoken');

const generateJsonWebToken = ( uidPerson ) => {

    return new Promise(( resolve, reject ) => {

        const payload = { uidPerson };

        jwt.sign( payload, process.env.APP_KEY_JWT, {
            expiresIn: '12h'
        }, (err, token) => {
            
            if( !err ) resolve ( token );
            else reject( 'Error Generate a Token' );
        });

    });

}

module.exports = generateJsonWebToken