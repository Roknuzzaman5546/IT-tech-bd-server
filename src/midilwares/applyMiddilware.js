const express = require('express');
const cors = require('cors');
const { LOCAL_CLINT, CLINT } = require('../config/defoult');

const applyMidlwares = (app) => {
    app.use(cors({
        origin: [
            LOCAL_CLINT,
            CLINT
            // 'https://assingment12-projects-clilnt.web.app',
            // 'http://localhost:5173'
            // // CLINT
        ],
    }))
    app.use(express.json())
}

module.exports = applyMidlwares