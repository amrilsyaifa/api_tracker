module.exports = async function(req, res, next) {
  if (!req.headers || !req.headers.authorization) {
    return res.badRequest({ error: "authorization header kosong" });
  }
  const tokenParam = req.headers.authorization.split(" ")[1];
  var parts = req.headers.authorization.split(" ");
  if (parts.length == 2) {
    var scheme = parts[0],
      credentials = parts[1];

    if (/^Bearer$/i.test(scheme)) {
      token = credentials;
    }
  } else {
    return res.json(401, { err: "Format is Authorization: Bearer [token]" });
  }
  const decodedToken = JWTService.verify(tokenParam);
  const account = await Account.findOne({
    id: decodedToken.account
  });
  if (!account) {
    return next({ error: "credentials tidak valid" });
  }
  req.account = account.id;
  next();
};
