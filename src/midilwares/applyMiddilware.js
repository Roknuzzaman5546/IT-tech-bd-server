const express = require('express');
const cors = require('cors');
const { LOCAL_CLINT } = require('../config/defoult');

const applyMidlwares = (app) => {
    app.use(cors({
        origin: [
            LOCAL_CLINT,
        ],
    }))
    app.use(express.json())
}

module.exports = applyMidlwares