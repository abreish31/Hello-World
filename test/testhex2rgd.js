var expect = require("chai").expect
var hex2rgb = require ("hex2rgb")

describe ("hex to rgb converstion", function(){

it ("should fail with less than 3 characters", function(done){

	hex2rgb("#ff", function(err){

		expect(err).to.exist;
		done();
	});
});

it ("should fail with greater than 3 characters", function(done){

	hex2rgb("#ffaabcdefg", function(err){

		expect(err).to.exist;
		done();
	});
});

it ("should convert the hex to rgb successfully", function(done){

	hex2rgb("#ffffff", function(err, rgb){

		expect(err).to.be.null;
		expect (rgb).to.deep.equal([255,255,255]);
		done();
	});
});
});