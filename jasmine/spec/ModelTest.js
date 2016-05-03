describe("app", function() {
	it('-- Ext Loader Config --',function() {
    	expect(Ext.Loader.setConfig).not.toBe(null);
  	});
  	it('Ext.application - not be null',function(){
  		expect(Ext.application).not.toBeNull();
  		console.log(Ext.application);
  		console.log(Ext);
  	});
});