var client = ZAFClient.init();

client.on('incoming_call', function(comments) {  
	return console.log('comments in top_bar: ', comments);
});