exports.getAllUsers = (req, res) => {
    res.json({ message: 'Get all users' });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Get user with ID ${userId}` });
};
