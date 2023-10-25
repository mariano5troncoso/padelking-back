import mongoose from 'mongoose';
let uri_link = process.env.LINK_DB
mongoose.connect(uri_link)
    .then(() => console.log('Connected to database'))
    .catch(error => console.log(error))