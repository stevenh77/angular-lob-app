let child_process= require('child_process');
let request = require('request');

describe('Server', () => {

  beforeAll(function(done) {
    const cmd = 'ts-node src//server//server.ts';
    serverProcess = child_process.exec(cmd, (error, stdout, stderr) => { });
    setTimeout(function() {
      done();
    }, 4000);
  });

  afterAll(function() {
    serverProcess.kill();
  });

  it('should return 200 for films', function(done) {
    request.get('http://localhost:4201/films', {timeout: 5000}, function (error, response, body) {
      expect(error).toBeNull();
      expect(response).toBeDefined();
      if (response!=undefined) expect(response.statusCode).toBe(200);
      done();
    });
  });
});
