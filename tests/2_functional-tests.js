const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('text and locale defined', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
          text: "color",
          locale: "american-to-british"
        })
        .end(function(err,res){
          assert.equal(res.status, 200);
          assert.equal(res.body.text, "color");
          assert.equal(res.body.translation, '<span class="highlight">colour</span>')
          done();
        })
      });

      test('text and invalid locale', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
          text: "color",
          locale: "atob"
        })
        .end(function(err,res){
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"Invalid value for locale field"}')
          done();
        })
      }); 

      test('text and invalid locale', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
          locale: "american-to-british"
        })
        .end(function(err,res){
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"Required field(s) missing"}')
          done();
        })
      }); 

      test('text and invalid locale', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
          text: "color"
        })
        .end(function(err,res){
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"Required field(s) missing"}')
          done();
        })
      }); 

      test('text and invalid locale', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
            text: "",
          locale: "american-to-british"
        })
        .end(function(err,res){
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"No text to translate"}')
          done();
        })
      }); 

      test('text and invalid locale', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
            text: "hi",
          locale: "american-to-british"
        })
        .end(function(err,res){
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, "Everything looks good to me!")
          done();
        })
      }); 

});
