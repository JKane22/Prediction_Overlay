// routes.js
const express = require('express');
const axios = require('axios');
const codeSchema = require('../model/code');

const router = express.Router();

const client_ID = 'TWITCH_APP_CLIENT_ID';
const client_SECRET = 'TWITCH_APP_CLIENT_SECRET';
const redirectUri = 'http://localhost:3001/callback';
const scope = 'channel:read:predictions';

const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${client_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}`;

async function getAccessToken(code) {
    try {
        const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
            params: {
                user_id: '',
                client_id: client_ID,
                client_secret: client_SECRET,
                code: code,
                grant_type: 'authorization_code',
                redirect_uri: redirectUri
            }
        });

        const { access_token: accessToken, refresh_token: refreshToken } = response.data;

        // Update the Access Token and Refresh Token
        await codeSchema.findOneAndUpdate({ code }, { accessToken, refreshToken });

        // Get the User ID
        const data = await codeSchema.findOne({ code });
        const responseUserID = await axios.get('https://api.twitch.tv/helix/users', {
            params: { login: 'jynxzi' },
            headers: {
                'Authorization': `Bearer ${data.accessToken}`,
                'Client-ID': client_ID
            }
        });

        const userID = responseUserID.data.data[0].id;
        await codeSchema.findOneAndUpdate({ code }, { user_id: userID });
    } catch (error) {
        console.log('Error:', error);
    }
}

router.get('/', (req, res) => {
    res.redirect(authUrl);
});

router.get('/callback', async (req, res, next) => {
    const code = req.query.code;

    try {
        const data = await codeSchema.findOne({ code });

        if (data) {
            await getAccessToken(code);
        } else {
            await codeSchema.create({
                _id: new mongoose.Types.ObjectId(),
                code,
                user_id: '',
                createdAt: Date.now(),
                accessToken: '',
                refreshToken: ''
            });

            await getAccessToken(code);
        }

        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

module.exports = router;