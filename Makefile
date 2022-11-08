run:
	node index.js
	git add highScore.json
	git commit -m "update: Update highScore JSON"

beautify:
	js-beautify index.js