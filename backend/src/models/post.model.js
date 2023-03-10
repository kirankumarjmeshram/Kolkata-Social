const mongoose = require('mongoose');
const Profile = require('./profile.model');

const postSchema = new mongoose.Schema(
  {
    createdAt: {type: Date, default: Date.now,},
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile',},
    caption: {type: String, trim: true,},
    location: {type: String,},
    hashtag: Array,
    likes: [{ type: mongoose.Schema.Types.ObjectId,ref: 'Profile',},],
    image: Array,
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
);


postSchema.pre('save', function (next) {
  let caption = this.caption.replace(/\s/g, '');
  console.log(caption);
  let hashTagIndex = caption.indexOf('#');
  if (hashTagIndex === -1) {
    this.hashtag = undefined;
    return next();
  }
  let hashTagSplice = caption.slice(hashTagIndex);
  //let res= hashTagSplice.replace(/#/, '').split('#');

  this.hashtag = hashTagSplice.replace(/#/, '').split('#');
  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;