#!/usr/bin/env node

'use strict'

var express = require('express')
var serveStatic = require('serve-static')
var serveIndex = require('serve-index')
var morgan = require('morgan') // logger
var layouts = require('express-ejs-layouts')

var data = {
  things: [
    {name: 'a', value: 'lorem'},
    {name: 'b', value: 'ipsum'},
    {name: 'c', value: 'dolor'},
    {name: 'd', value: 'sit'},
    {name: 'e', value: 'amet'},
  ],
}

var app = express()

app
  .set('view engine', 'ejs')
  .set('views', './views')
  .set('layout', 'layout')
  .use(layouts)
  .use(morgan('dev'))

app.get('/', function(req, res) {
  res.render('index', data)
})

app
  .use(serveStatic('.'))
  .use(serveIndex('.'))
  .listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0')
