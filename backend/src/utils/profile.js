const Profile = require("../models/profile.model");

const getProfileId = async (user) => {

            const { _id } = await Profile.findOne({ user: user });
            return _id;
}

module.exports = getProfileId;