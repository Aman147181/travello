import express from 'express';
import Package from '../models/Package.js';

const getPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getPackage = async (req, res) => {
    try {
        const foundpackage = await Package.findById(req.params.id);
        res.json(foundpackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createPackage = async (req, res) => {
    const newpackage = new Package({
        name: req.body.name,
        price: req.body.price,
        days: req.body.days,
        description: req.body.description,
        image: req.body.image,
        itinerary: req.body.itinerary
    });
    try {
        const newPackage = await newpackage.save();
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}   
export { getPackages, getPackage, createPackage };