// allows to load module and give access to exports
const express = require('express')
const yahooFinance = require('yahoo-finance');
const axios = require('axios')
const redis = require('redis')
const responseTime = require('response-time')
const fs = require('fs')

