build :
	mkdir -p app
	cp -r ../../suggest.js ../../srv app
	docker build -t nodezoo-suggest .

clean :
	rm *~

.PHONY : build clean
