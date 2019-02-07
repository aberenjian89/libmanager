// const express = require("express");
// const path = require("path");
// const http = require("http");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const cookie_parser = require("cookie-parser");
// const session = require("express-session");

import express from 'express'
import path from 'path'
import http from 'http'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cookie_parser from 'cookie-parser'
import session from 'express-session'

require("dotenv").load();
app = express();

if (
  process.env.ENVIRONMENT === "development" ||
  process.env.ENVIRONMENT === "staging"
) {
  mongoose.connect("mongodb://localhost/libmanager_development", {
    useNewUrlParser: true
  });
} else {
  mongoose.connect("mongodb://localhost/libmanager_production", {
    useNewUrlParser: true
  });
}

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("Connected to local Database");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookie_parser());
app.use(
  session({
    secret: "fghdgdsfsf243D$32",
    resave: false,
    saveUninitialized: true,
    cookie: { secret: true }
  })
);
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "./dist/libmanager")));
app.use(express.static(path.join(__dirname, "./dist/libmanager/assets")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./dist/libmanager/index.html"));
});

const port = process.env.PORT || "3000";

const server = http.createServer(app);

server.listen(port, "localhost", function() {
  console.log(`Starting Server on Port ${port}`);
});
