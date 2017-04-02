build :
	mkdir -p app
	cp -r ../../suggest.js ../../srv app
	docker build -t nodezoo-suggest:1 .
	docker build -t nodezoo-suggest-prod:1 -f Dockerfile-prod .

clean :
	rm *~

.PHONY : build clean
