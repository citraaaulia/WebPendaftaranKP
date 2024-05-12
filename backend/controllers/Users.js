const Users = require("../models/UserModel.js");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");

const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id', 'name', 'NIM']
        });
        req.json(users);
    } catch (error) {
        console.log(error); 
    }
}

module.exports.Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            NIM: req.body.NIM
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const NIM = user[0].NIM;
        const accessToken = jwt.sign({userId, NIM}, process.env.ACESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, NIM}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1D'
        });
        await Users.update({refresh_token:refreshToken},{
            where:{
                id: UserId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 1000,
    });
    res.json({ accessToken });
    } catch (error) {
        req.status(404).json({msg:"NIM Tidak ditemukan"});
    }
}

exports.Logout = async(req, res) =>{
    const refreshToken = req.cookie.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(204);
        const userId = user[0].id;
        await Users.update({refresh_token: null},{
            where:{
                id: userId
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
}