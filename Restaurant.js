const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    district: {
        type: String,
        required: [true, 'Please add a district']
    },
    province: {
        type: String,
        required: [true, 'Please add a province']
    },
    postalcode: {
        type: String,
        required: [true, 'Please add a postal code'],
        maxlength: [5, 'Postal code can not be more than 5 digits']
    },
    region: {
        type: String,
        required: [true, 'Please add a region']
    },
    tel:{
        type: String
    },
    opentime:{
        type: String,
        required: [true, 'Please add a Open Time']
    },
    closetime:{
        type: String,
        required: [true, 'Please add a Close Time']
    }

    },{
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    });


    //Cascade delete reservation when a Restaurant is deleted
    RestaurantSchema.pre('deleteOne', { document: true, query: false }, async function(next){
        console.log(`Reservation being removed from Restaurant ${this._id}`);
        await this.model('Reservation').deleteMany({Restaurant: this._id});
        next();
    });


    //Reverse populate with virtuals
    RestaurantSchema.virtual('reservation', {
        ref: 'Reservation',
        localField: '_id',
        foreignField: 'Restaurant',
        justOne: false
    });


module.exports = mongoose.model('Restaurant', RestaurantSchema);
