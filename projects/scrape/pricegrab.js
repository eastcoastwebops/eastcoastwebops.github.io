console.log('\033[2J');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var file = 'price.csv';
fs.exists(file, function(exists) {
	if (exists) {
		fs.unlink(file);
		// fs.appendFileSync(file, '"Product",Price, Company, "Name On Site",URL\n');
	} else {
		//  fs.appendFileSync(file, '"Product",Price, Company, "Name On Site",URL\n');
	}
});
try {
	var data = fs.readFileSync('products-url.txt', 'utf8');
	// console.log(data);    
} catch (e) {
	console.log('Error:', e.stack);
}
var products = data.split("\n");
var niceName = "FooBar";
var howmany = products.length;
var newCount = 0;
var count = 0;
var cost = 0;
var done = "false";
for (i = 0; i < howmany;) {
	var theUrl = products[i];
	theUrl = theUrl.replace(/[\n\r]+/g, '');
	var theTarget = "";
	var theTitle = "";
	var theCompany = "";
	var checkUrl = theUrl.startsWith("#");
	var checkCost = theUrl.startsWith("$");
	if (checkUrl) {
		niceName = products[i].replace('#', '');
		niceName = niceName.replace(/[\n\r]+/g, '');
	}
		if (checkCost) {
		cost = products[i].replace('$', '');
		cost = cost.replace(/[\n\r]+/g, '');
		//console.log (cost);
	}
	exports = function(name,ourcost) {
		var domain = theUrl.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
		var newName = name;
		var newCost = ourcost;
		switch (domain) {
			
			case 'www.thinkvacuums.com':
				var theTarget = ".text-final";
				var theCompany = domain;
				var whatName = newName;
				var whatCost = newCost;
				var url = theUrl.replace(/[\n\r]+/g, '');
				var theTitle = "h1.productname";
				break;
			case 'www.centralvacuumstores.com':
				var theTarget = "span[class^='price-val']";
				var theCompany = domain;
				var whatName = newName;
				var whatCost = newCost;
				var url = theUrl.replace(/[\n\r]+/g, '');
				var theTitle = 'h1[itemprop="name"]';
				break;
			case 'evacuumstore.com':
				var theTarget = "";
				var theAtt = "content";
				var theProp = "meta[itemprop='price']";
				var theCompany = domain;
				var whatName = newName;
				var whatCost = newCost;
				var url = theUrl.replace(/[\n\r]+/g, '');
				var theTitle = 'h1[itemprop="name"]';
				break;
			default:
				var theTarget = "";
				var theCompany = "none";
				var whatname = newName;
				var whatCost = newCost;
				var url = theUrl;
				var theTitle = 'No Title';
				// console.log('Sorry');
		}
		request(theUrl, function(error, response, body) {
			var $ = cheerio.load(body);
			var price = "";
			var o = i;
			if (theAtt) {
				price = $(theProp).attr(theAtt);
			} else {
				price = $('body').find(theTarget).text().trim();
			}
			if (price) {
			price = price.replace(/\$|,/g, "");
			}
			else {price = 0;}
			var productTitle = "";
			productTitle = $('body').find(theTitle).text().trim();
			price = parseFloat(price);
			price = price.toFixed(2);
			count = count + 1;
			console.log('#' + count + ' - getting price for  -->  ' + whatName + '    -->     ' + theCompany);
			fs.appendFileSync(file, '"' + whatName + '","' +  whatCost + '","' + price + '","' + theCompany + '","' + productTitle + '",<a href=' + url + ' target=_blank>' + productTitle + '</a>\n');
			if (count >= newCount) {
				done = "true";
				if (done == "true") {
					console.log(done);
				}
			}
		});
	};
	if ((!checkUrl) && (theUrl !== "") && (!checkCost) ) {
		console.log(cost);
		exports(niceName,cost); // send name and cost which are not url dependent
		newCount = newCount + 1;
	}
	i++;
}; // foreach