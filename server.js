var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-One':{
    title:'Article One| Lloyd P Babu',
    heading: 'Article one',
    date: 'Sep 5,2016',
    content:`            <p>
                This is the content for para one. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>
            <p>
                 This is the content for para two. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>
            <p>
                 This is the content for para one. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>`
},
'article-Two':{
    title:'Article Two} Lloyd P Babu',
    heading: 'Article Two',
    date: 'Sep 10,2016',
    content:`            <p>
                This is the content for para one. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>
            <p>
                 This is the content for para two. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>
            <p>
                 This is the content for para one. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>`
},
'article-Three':{
    title:'Article One | Lloyd P Babu',
    heading: 'Article Three',
    date: 'Sep 15,2016',
    content:`            <p>
                This is the content for para one. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>
            <p>
                 This is the content for para two. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>
            <p>
                 This is the content for para one. Yep its pretty random but I had to type something in so i just typed in what came though my mind.
            </p>`
}
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`
<html>
<head>
    <title>
        Article One| Lloyd P Babu
    </title>
	<meta name="viewport" content="width=device-width, initial-scale-1"/>	
    <link href="/ui/style.css" rel="stylesheet" />
	</head>
<body>
<div class="container">
    <div>
        <a href="/">Home</a> 
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
		</div>
</body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
