.PHONY: dist
dist: # Create the /dist/v4 directory with compiled files.
	npm run dev
	rm -rf dist/v4/*
	cp -a public/build/. dist/v4
