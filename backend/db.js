const mongoose = require("mongoose");
const express = require("express");
const { string, number } = require("zod");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const FDtokenSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    FDTokens : [{
        tokenID: {
            type: String,
            required: true,
            unique : true
        },
        amount: {
            type: Number,
            required: true
        },
        bank : {
            type: String,
            required: true
        },
        plan : {
            type: String,
            required: true
        },
        interestRate: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
});
// const FFDTokenSchema = new mongoose.Schema ({
//     user :{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     FDTokenId :{
//         type : mongoose.Schema.Types.ObjectId,
//         ref: 'FDToken.FDTokens.tokenID'
//     },
//     tokenName : {
//         type : string,
//         required : true,
//     },
//     volume : {
//         type : number,
//         required : true,
//     },
//     image : {
//         type : image,
//         required : true,
//     }
// })
// const listedTokenSchema = new mongoose.Schema({
//     tokenID : {
//         type: String,
//         required: true,
//         unique : true
//     },
//     tokenName : {
//         type : String,
//         required : true,
//     },
//     price : {
//         type : Number,
//         required : true,
//     },
//     RTI : {
//         type : Number,
//         required : true,
//     },
//     seller : {
//         type : String,
//         required : true,
//     },
//     maturityDate : {
//         type : Date,
//         required : true,
//     }
// })
const User = new mongoose.model("User",userSchema)
const FDToken = new mongoose.model("FDToken",FDtokenSchema)
// const listedToken = new mongoose.model("listedToken",listedTokenSchema)

module.exports = {
    User,
    FDToken,
};