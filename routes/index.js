import { getStatus, getStats } from '../controllers/AppController';

const express = require('express');

const app = module.exports = express();

app.get('/status', (_, res) => { getStatus(res); });
app.get('/stats', (_, res) => { getStats(res); });
