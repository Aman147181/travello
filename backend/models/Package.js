import mongoose from "mongoose";

const ItinerarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    highlights: [{
        type: String,
        required: true
    }]
});

const PackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    itinerary: [ItinerarySchema]
});

export default mongoose.model("Package", PackageSchema);
