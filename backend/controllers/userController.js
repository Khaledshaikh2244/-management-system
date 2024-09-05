const User = require('../models/User');

exports.getAllUsers = async (req , res) => {
    try {
        const users = await User.find();
        if(!users){
            res.send.status(404).json({message : "user not found"});
        }

        res.json(users);

    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

exports.addUser = async (req ,res) => {
    
    try {
        const {username , password,role} = req.body;
        const newUser =  new User({username,password, role});
        await newUser.save();
        res.status(200).json({newUser});
        
    } catch (error) {
        res.status(500).json({error : error.message});
    }
 
}


exports.deleteUser = async (req,res) => {
    try {
        // first requesting the id
        const {id} = req.params;
        await User.findByIdAndDelete(id);
        
        // checking if user is not exists
        if(!User || !User.id){
            res.send.status(404).json({message : "user does not exist "});
        }

        res.send.status(200).json({message : "Deleted user succesfullly !" })
    } catch (error) {
        res.send.status(500).json({error : error.message});
    }   
};