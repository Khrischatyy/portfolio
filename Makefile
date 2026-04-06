.PHONY: help dev dev-build dev-down prod prod-build prod-down db-migrate db-upgrade db-seed logs logs-back logs-front restart clean shell-back shell-front

help:
	@echo "Portfolio Management"
	@echo "==================="
	@echo ""
	@echo "Development:"
	@echo "  make dev          - Start development environment"
	@echo "  make dev-build    - Build and start dev environment"
	@echo "  make dev-down     - Stop development environment"
	@echo ""
	@echo "Production:"
	@echo "  make prod         - Start production environment"
	@echo "  make prod-build   - Build and start prod environment"
	@echo "  make prod-down    - Stop production environment"
	@echo ""
	@echo "Database:"
	@echo "  make db-migrate m=message - Create new migration"
	@echo "  make db-upgrade   - Run migrations"
	@echo "  make db-seed      - Seed database with projects"
	@echo ""
	@echo "Utilities:"
	@echo "  make logs         - View all logs"
	@echo "  make logs-back    - View backend logs"
	@echo "  make logs-front   - View frontend logs"
	@echo "  make restart      - Restart all services"
	@echo "  make clean        - Remove all containers, volumes"
	@echo "  make shell-back   - Shell into backend container"
	@echo "  make shell-front  - Shell into frontend container"

# Development
dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up

dev-build:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build

dev-down:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml down

# Production
prod:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

prod-build:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

prod-down:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml down

# Database
db-migrate:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml exec backend alembic revision --autogenerate -m "$(m)"

db-upgrade:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml exec backend alembic upgrade head

db-seed:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml exec backend python -m app.seed

# Logs
logs:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml logs -f

logs-back:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml logs -f backend

logs-front:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml logs -f frontend

# Utilities
restart:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml restart

clean:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml down -v --remove-orphans
	docker compose -f docker-compose.yml -f docker-compose.prod.yml down -v --remove-orphans

shell-back:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml exec backend bash

shell-front:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml exec frontend sh
