/**
 * install jsonwebtoken
 * jwt.sign(payload, secret, {expiresIn: '1h'})
 * token client
 * require('crypto').randomBytes(64).toString('hex')
 * 
 *





/**
 * how to store token in the client site
 * 
 * 1. memory --> ok type
 * 2. local storage --> ok type (XSS)
 * 3. cookies: http only
 */


/**
 * 1. set cookies with http only . for development secure false
 * 
 * 2. cors
 * app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
 * 3. client site axios setting
 * in axios set withCredentials : true
 */


/**
 * 1. to send  cookies form the client make sure you added withCredential: true for the api call using axios;
 * 2. use cookie parser as middleware
 */