var assert = chai.assert;

describe('Testing arrays', function() {
	it('should start empty', function() {
		
		// Test implementation goes here
		var arr = [];
		assert.equal(arr.length, 0);

	});

  // We can have more its here
});


describe('Acessibility', function(){
	it('Should not have accessibility errors', function(done){
	
		var acessibilityErrors = axe.run(function (err, results) {

				if ( results.violations.length != 1) {
					console.log(results.violations);
				}
			
				assert.equal(results.violations.length, 1);
				done();
				
		
		});

		
	});
});