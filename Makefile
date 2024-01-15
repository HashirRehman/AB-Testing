
RAILS_SERVER_PORT := 3000
PARCEL_PORT := 1234

# Installation
install:
	@echo "Installing dependencies..."
	git clone https://github.com/HashirRehman/AB-Testing.git
	npm install && bundle install

# Database setup
setup-db:
	rails db:create db:migrate db:seed

# Build the frontend for production
build-frontend:
	npm run build

# Start development servers
start-frontend:
	 npm start -- --port=1234

start-backend:
	rails server -p $(RAILS_SERVER_PORT)

start-console:
	rails console

# Clean up generated files
clean:
	@echo "Cleaning up..."
	rm -rf AB-Testing/node_modules
	rm -rf AB-Testing/tmp
	rm -rf AB-Testing/public/packs
