// Generated by CoffeeScript 1.6.2
(function() {
  var app, async, http, should, _;

  _ = require("underscore");

  should = require("should");

  async = require("async");

  app = require("../app");

  http = require("../test/support/http");

  describe('REST-Sessions Test', function() {
    before(function(done) {
      http.createServer(app, done);
    });
    after(function(done) {
      done();
    });
    it('PUT /rt/id/TestBucket/id123?score=100&tags=["tag1","tag2","all"] should return 200 and true', function(done) {
      http.request().put('/rt/id/TestBucket/id123?score=100&tags=["tag1","tag2","all"]').end(function(resp) {
        resp.statusCode.should.equal(200);
        resp.body.should.equal("true");
        done();
      });
    });
    it('DELETE /rt/id/TestBucket/id123 should return 200 ', function(done) {
      http.request()["delete"]('/rt/id/TestBucket/id123').expect(200, done);
    });
  });

}).call(this);