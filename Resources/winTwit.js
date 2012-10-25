var win = Titanium.UI.currentWindow;

function loadTweets() {
	// the array that will hold the tweets
	var tweetsDat = [];
	
	var loader = Titanium.Network.createHTTPClient();
	
	loader.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name=mobtuts");
	
	loader.onload = function() {
		
		// evaluate the JSON we are receiving
		var tweets = eval('('+this+responseText+')');
		
		// loop the data
		for (var i = 0; i < tweets.length; i++) {
			
			var tweet = tweets[i].text; // the tweet
			var user = tweets[i].user.screen_name; // the users screen name
			var avatar = tweets[i].user.profile_image_url;
			
			// row for the tweet
			var tweetRow = Titanium.UI.createTableViewRow({
				height: 'auto',
				width: '100%'
			});
			
			// the tweet view
			var tweetView = Titanium.UI.createView({
				height: 'auto',
				layout: 'vertical',
				top: '5',
				right: '5',
				bottom: '5',
				left: '5'
			});
			
			// image view for the profile pic
			var avatarHold = Titanium.UI.createImageView({
				url: avatar,
				top: 0,
				left: 0,
				height: 48,
				width: 48
			});
			
			tweetView.add(avatarHold);
			
			// label for the user name
			var nameHold = Titanium.UI.createLabel({
				text: user,
				top: -48,
				left: 54,
				bottom: 2,
				height: 16,
				width: 120,
				textAlign: 'left',
				color: '#444',
				font:{
					fontFamily: 'Arial',
					fontSize: 14,
					fontWeight: 'bold'
				}
			});
			
			tweetView.add(nameHold);
			
			// label for the user name
			var tweetHold = Titanium.UI.createLabel({
				text: tweet,
				top: 0,
				left: 54,
				bottom: 2,
				height: 'auto',
				width: '100%',
				textAlign: 'left',
				color: '#444',
				font:{
					fontFamily: 'Arial',
					fontSize: 14
				}
			});
			
			tweetView.add(tweetHold);
			
			// adding the tweetView to the tweetsDat array
			tweetRow.add(tweetView);
			// giving each tweetsDat array a classname to refer to later on
			tweetRow.classname = "tweet" + i;
			// adding to the array
			tweetsDat[i] = tweetRow;
			
		}
		
		// creating the table for the data
		var tweetTable = Titanium.UI.createTableView({ data: tweetsDat });
		
		// adding the table to the win
		win.add(tweetTable);
		
	};
	
	loader.send();
	
}

loadTweets();