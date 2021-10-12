import AppController from '../controllers/AppController';

const express = require('express');

module.exports = express();
const app = module.exports;

app.get('/status', (_, res) => AppController.getStatus(res));
app.get('/stats', (_, res) => AppController.getStats(res));
