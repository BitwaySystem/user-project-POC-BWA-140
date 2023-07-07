const UserModel = require("../models/UserModel");

class UserController {
    static getAllUsers = async (req, res) => {
        const users = await UserModel.find();
        return res.status(200).json(users);
    };

    static addUser = async (req, res) => {
        const user = new UserModel(req.body);
        await user.save();
        return res.status(201).json(user);
    };

    static updateUserById = async (req, res) => {
        try {
            const { id } = req.params;
            const updatedUser = await UserModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );
            if (updatedUser) {
                return res.status(200).json(updatedUser);
            } else {
                return res.status(404).json({ erro: "Usuário não encontrada" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    static deleteUserById = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUser = await UserModel.findByIdAndRemove(id);
            if (deletedUser) {
                return res.status(204).json({ message: "Usuário deletado" });
            } else {
                return res.status(404).json({ erro: "Usuário não encontrada" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
}

module.exports = UserController;
