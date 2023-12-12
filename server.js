const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

if (process.env.NODE_ENV === 'production') {
    app.use(cors({
        credentials: true
    }));

    app.use(express.static(path.join(__dirname, './frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './', 'frontend', 'dist', 'index.html'));
    });
} else {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));
}

const dbConnect = async () => {
    try {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Production database is connected...');
        } else {
            await mongoose.connect(process.env.LOCAL_DB_URI);
            console.log('Local database is connected...');
        }
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

const PORT = process.env.PORT || 3000; // Use a default port if PORT is not defined in the environment variables

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

dbConnect();
