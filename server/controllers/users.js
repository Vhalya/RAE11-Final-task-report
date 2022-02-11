import User from "../models/user.js";


export const getUser = async (req, res) => {
    const {id} = req.params;
    //console.log(id)
    try {
        const user = await User.findById(id);
        //console.log(user)

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



