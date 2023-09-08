// import express from "express";

const Department =require('../models/department');

const express= require('express')
const departmentRouter = express.Router();

departmentRouter.get("/departments",async (req, res) => {
    try {
        const dept = new Department.find();
        //await dept.save();
        res.status(200).json(dept);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
module.exports = departmentRouter;