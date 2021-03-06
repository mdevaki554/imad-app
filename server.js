var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articles = {
    'article-one' : {
      title: 'Article One | Manikanta Gupta',
      heading: '<h1>Article One</h1>',
      date: 'Sep 10, 2015',
      content: `
                <div>
    				<p> 
    					This is the content for my first Article. 
    				</p>`
    },
    'article-two' : {
      title: 'Article Two | Manikanta Gupta',
      heading: '<h1>Article Two</h1>',
      date: 'Sep 21, 2016',
      content: `
                <p> 
        				This is the content for my Second Article. 
        			</p>`
    },
    'article-three' : {
    title: 'Article Two | Manikanta Gupta',
      heading: '<h1>Article Two</h1>',
      date: 'Sep 20, 2017',
      content: 
                `<p> 
    				This is the content for my Third Article.  
    			</p>`
    		
    }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `<html>
    	<head>
    		<title> ${title} </title>
    		<meta name = "viewport" content = "width-device-width, initial-scale-1" />
    		<link href= "/ui/style.css" rel = "stylesheet"/>
    	</head>
    	<body>
    	    <div class = 'container'>
        		<div>
        			<a href="/">Home</a>
        		</div>
        		<hr>
        		<div>
        			${heading}
        		</div>
        		
        		<div>
        			${date}
        		</div>
        		<div>
        			${content}
        		</div>
        	  </div>
    		</body>
    	</body>
    </html>`;
    return htmlTemplate; 
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res){
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/:articleName', function(req, res) {
    
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
