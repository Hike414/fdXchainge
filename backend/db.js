const mongoose = require("mongoose");
const express = require("express");
const { string, number, boolean } = require("zod");


mongoose.connect("mongodb+srv://Rahul:Rahul6255@cluster0.uera1.mongodb.net/fdxchainge")

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
        },
        fractionalised : {
            type: Boolean,
            default: false,
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
        },
        maturityDate : {
            type:Date,
            required : true
        }
    }]
});
const FFDTokenSchema = new mongoose.Schema ({
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    FFDTokens : [{
        FDTokenId :{
            type : String,
            required : true
        },
        listed :{
            type : Boolean,
            default : false,
        },
        amount : {
            type : Number,
            required : true,
        },
        tokenName : {
            type : String,
            required : true,
        },
        volume : {
            type : Number,
            required : true,
        },
        image : {
            filename : {
                type : String,
                required : true,
            },
            path : {
                type : String,
                required : true,
            }
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        maturityDate : {
            type:Date,
            required : true
        },
        interestRate: {
            type: Number,
            required: true
        }
    }]
})
const listedTokenSchema = new mongoose.Schema({
    tokenID : {
        type: String,
        required: true,
        unique : true
    },
    sold : {
        type : Boolean,
        default : false,
    },
    tokenName : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    RTI : {
        type : Number,
        required : true,
    },
    seller : {
        type : String,
        required : true,
    },
    owner : {
        type : String,
        required : true,
    },
    maturityDate : {
        type : Date,
        required : true,
    },
    fileName : {
        type : String,
        required : true
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});




const User = new mongoose.model("User",userSchema)
const FDToken = new mongoose.model("FDToken",FDtokenSchema)
const FFDToken = new mongoose.model("FFDToken",FFDTokenSchema)
const listedToken = new mongoose.model("listedToken",listedTokenSchema)
const Account = new mongoose.model("Account",accountSchema)

module.exports = {
    User,
    FDToken,
    FFDToken,
    listedToken,
    Account
};