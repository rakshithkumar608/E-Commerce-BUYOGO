exports.admin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" });
  }

  // Allow if user has admin role, OR if no role field exists yet (first-time setup)
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin access only. Update your user role to 'admin' in the database." });
  }
};
