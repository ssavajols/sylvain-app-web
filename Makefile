BASE_DIR=sylvain-app

build-prod:
	cd ${BASE_DIR} && npm run build -- --prod --base-href /sylvain-app-web/

start:
	cd ${BASE_DIR} && npm start

test:
	cd ${BASE_DIR} && npm run test -- --code-coverage
	
test-integration:
	cd ${BASE_DIR} && npm run e2e