#!/bin/sh

cd packages 

cd mfe-component && npm install

cd ../single-spa-child && npm install

cd ../single-spa-host && npm install