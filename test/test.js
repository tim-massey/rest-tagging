// Generated by CoffeeScript 1.6.3
(function() {

  request = require('supertest');
  
  app = require("../app");

  describe('REST-Tagging Test', function() {
    
      it('GET basically responds', function(done) {
         request(app)
         .get('/')
         .expect(200, done)
      });
      
      it('PUT adding tags', function(done) {
          request(app)
              .put('/bucket/1')
              .send({"tags": ["foo", "bar", "baz"]})
              .expect(200)
              .expect('true', done)
       });
      
      
      it('GET previous tags', function(done) {
          request(app)
              .get('/bucket/1')
              .expect(200)
              .expect(["foo", "bar", "baz"], done)
          
       });
      
      it('GET top tags', function(done) {
          request(app)
              .get('/bucket/toptags/2')
              .expect(200)
              .expect(
                      { 
                          "total_items": 3, 
                          "items": [ 
                                     { "tag": "foo", "count": 1 }, 
                                     { "tag": "baz", "count": 1 } 
                                 ] }, done)
          
       });
      
//  before(function () {
//    app.listen(8181);
//  });
//
//  after(function () {
//    app.close();
//  });
      
//    before(function(done) {
//      http.createServer(app, done);
//    });
//    after(function(done) {
//      done();
//    });
    
//    it('PUT /TestBucket/id123 should return 200', function(done) {
//        request(app)
//            .put('/TestBucket/id123')
//            .set('Accept', 'application/json')
//            .expect(200, function(err, res){
//                console.log(res);
//                if (err) return done(err);
//                done()
//              });
//    });
//    it('PUT /TestBucket/id123?score=xyz should return 500', function(done) {
//      http.request().put('/TestBucket/id123?score=xyz').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(500);
//        result = JSON.parse(resp.body);
//        result.message.should.equal("Invalid score format");
//        done();
//      });
//    });
//    it('PUT /TestBucket/id123?score=100&tags=["tag1","tag2","all"] should return 200 and true', function(done) {
//      http.request().put('/TestBucket/id123?score=100&tags=["tag1","tag2","all"]').end(function(resp) {
//        resp.statusCode.should.equal(200);
//        resp.body.should.equal("true");
//        done();
//      });
//    });
//    it('PUT /TestBucket/id456?score=200&tags=["tag3","tag4","all"] should return 200 and true', function(done) {
//      http.request().put('/TestBucket/id456?score=200&tags=["tag3","tag4","all"]').end(function(resp) {
//        resp.statusCode.should.equal(200);
//        resp.body.should.equal("true");
//        done();
//      });
//    });
//    it('GET /TestBucket?tags=["all"]', function(done) {
//      http.request().get('/TestBucket/tags?tags=["all"]').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.total_items.should.equal(2);
//        result.items.should.containEql("id123");
//        result.items.should.containEql("id456");
//        done();
//      });
//    });
//    it('GET /TestBucket/tags?tags=["tag1"]', function(done) {
//      http.request().get('/TestBucket/tags?tags=["tag1"]').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.total_items.should.equal(1);
//        result.items.should.containEql("id123");
//        done();
//      });
//    });
//    it('GET /rt/tags/TestBucket?tags=["tag3"]', function(done) {
//      http.request().get('/TestBucket/tags?tags=["tag3"]').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.total_items.should.equal(1);
//        done();
//      });
//    });
//    it('GET /rt/tags/TestBucket?tags=["tag3","tag1"]', function(done) {
//      http.request().get('/TestBucket/tags?tags=["tag3","tag1"]').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.total_items.should.equal(0);
//        done();
//      });
//    });
//    it('GET /rt/tags/TestBucket?tags=["tag3","tag1"]&type=union', function(done) {
//      http.request().get('/rt/tags/TestBucket?tags=["tag3","tag1"]&type=union').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.total_items.should.equal(2);
//        result.items.should.containEql("id123");
//        result.items.should.containEql("id456");
//        done();
//      });
//    });
//    it('GET /rt/tags/TestBucket?tags=["tag3","all"]', function(done) {
//      http.request().get('/TestBucket/tags?tags=["tag3","all"]').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.total_items.should.equal(1);
//        result.items.should.containEql("id456");
//        done();
//      });
//    });
//    it('GET /TestBucket/toptags/10', function(done) {
//      http.request().get('/TestBucket/toptags/10').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.total_items.should.equal(5);
//        result.items[0].tag.should.equal("all");
//        done();
//      });
//    });
//    it('GET /TestBucket/id123', function(done) {
//      http.request().get('/TestBucket/id123').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.should.containEql("all");
//        result.should.containEql("tag1");
//        result.should.containEql("tag2");
//        done();
//      });
//    });
//    it('GET /rt/allids/TestBucket', function(done) {
//      http.request().get('/rt/allids/TestBucket').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.should.containEql("id123");
//        result.should.containEql("id456");
//        done();
//      });
//    });
//    it('GET /rt/buckets', function(done) {
//      http.request().get('/rt/buckets').end(function(resp) {
//        var result;
//        resp.statusCode.should.equal(200);
//        result = JSON.parse(resp.body);
//        result.should.containEql("TestBucket");
//        done();
//      });
//    });
//    it('DELETE /rt/id/TestBucket/id123 should return 200 ', function(done) {
//      http.request()["delete"]('/rt/id/TestBucket/id123').expect(200, done);
//    });
//    it('DELETE /rt/bucket/TestBucket should return 200 ', function(done) {
//      http.request()["delete"]('/rt/bucket/TestBucket').expect(200, done);
//    });
  });

}).call(this);
