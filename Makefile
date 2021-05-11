.PHONY: docs
docs: # Create the /docs/v4 directory with compiled files.
	npm run dev
	rm -rf docs/v4/*
	cp -a public/build/. docs/v4
