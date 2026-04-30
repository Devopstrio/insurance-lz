from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, landingzones, compliance, risk, cost, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(landingzones.router, prefix="/landingzones", tags=["landingzones"])
api_router.include_router(compliance.router, prefix="/compliance", tags=["compliance"])
api_router.include_router(risk.router, prefix="/risk", tags=["risk"])
api_router.include_router(cost.router, prefix="/cost", tags=["cost"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
