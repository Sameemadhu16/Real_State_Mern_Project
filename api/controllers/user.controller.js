import { json } from "express";

export const test = (req,res)=>{
    res.json({
        message: 'API route is working',
    });
};