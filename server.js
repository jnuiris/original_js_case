// const http = require('http');
//
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World!');
//     response.end();
// }).listen(8888);
// var http = require('http');
// var server = http.createServer();
// server.listen(8888);

// let http = require('http');
// let onRequest = (require, response) => {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('<h1>i love u</h1>');
//     response.end();
// }
// http.createServer(onRequest).listen(8888);
// console.log('服务器已开启，请在浏览器中打开http://127.0.0.1:8888...');

// let http = require('http');
//
// let onRequest = (request, response) => {
//     console.log('Request received.');
//     response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
//     response.write('Hello,HTTP服务器已启动');
//     response.end();
// }
//
// http.createServer(onRequest).listen(8888);
//
// console.log('Server has started.');
// console.log('请在浏览器中打开 http://127.0.0.1:8888');

const http = require('http');

const start = () => {
    const onRequest = (request, response) => {
        console.log('Request received.');
        response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        response.write('Hello World');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
    console.log('请在浏览器中打开 http://127.0.0.1:8888');
}

exports.start = start



