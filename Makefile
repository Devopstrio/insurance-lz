.PHONY: help build up down test lint migrate provision-lz compliance-scan risk-audit

help:
	@echo "Insurance Landing Zone - Management Commands"
	@echo "------------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "provision-lz    : Trigger insurance landing zone provisioning"
	@echo "compliance-scan : Run regulatory compliance scan (IRDAI/GDPR)"
	@echo "risk-audit      : Generate insurance risk audit report"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

provision-lz:
	docker-compose exec api python scripts/deploy/provision_core.py

compliance-scan:
	docker-compose exec api python scripts/compliance-check/regulatory_scan.py

risk-audit:
	docker-compose exec api python scripts/reports/risk_assessment.py
