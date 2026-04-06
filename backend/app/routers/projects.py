from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.models.project import Project
from app.schemas.project import ProjectCreate, ProjectResponse

router = APIRouter(prefix="/projects", tags=["projects"])


@router.get("", response_model=list[ProjectResponse])
async def list_projects(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Project).order_by(Project.order))
    return result.scalars().all()


@router.get("/{slug}", response_model=ProjectResponse)
async def get_project(slug: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Project).where(Project.slug == slug))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


@router.post("", response_model=ProjectResponse, status_code=201)
async def create_project(data: ProjectCreate, db: AsyncSession = Depends(get_db)):
    project = Project(**data.model_dump())
    db.add(project)
    await db.commit()
    await db.refresh(project)
    return project


@router.post("/seed", response_model=list[ProjectResponse])
async def seed_projects(db: AsyncSession = Depends(get_db)):
    existing = await db.execute(select(Project))
    if existing.scalars().first():
        raise HTTPException(status_code=400, detail="Projects already seeded")

    projects_data = [
        {
            "title": "Recap After Use",
            "slug": "recap-after-use",
            "description": "Designer portfolio with focus on visual storytelling and interactivity. Worked on complex scroll experience implementation with precise animation synchronization.",
            "description_ru": "Портфолио-дизайнера с акцентом на визуальный сторителлинг и интерактив. Работали над реализацией сложного скролл-опыта, где поведение интерфейса тесно связано с действиями пользователя и требует точной синхронизации анимаций и состояний.",
            "image_url": "/assets/recap.jpg",
            "site_url": "https://www.recapafteruse.co.uk/",
            "tags": ["Scroll Animation", "Interactive", "Portfolio"],
            "order": 1,
        },
        {
            "title": "Red Collar",
            "slug": "red-collar",
            "description": "Digital agency specializing in creative and technological web products. Worked on a visually rich site balancing expressive animation with stable performance.",
            "description_ru": "Digital-агентство, специализирующееся на креативных и технологичных веб-продуктах. Работали над сайтом с насыщенным визуальным слоем и сложной системой взаимодействий, где важно было сохранить баланс между выразительной анимацией и стабильной работой.",
            "image_url": "/assets/redcollar.jpg",
            "site_url": "https://redcollar.ru/",
            "tags": ["Animation", "Creative", "Agency"],
            "order": 2,
        },
        {
            "title": "AIC",
            "slug": "aic",
            "description": "Digital studio creating corporate and product solutions for business. Worked on a complex site focusing on interface consistency and scalable user scenarios.",
            "description_ru": "Digital-студия, создающая корпоративные и продуктовые решения для бизнеса. Работали над сайтом со сложной структурой и логикой, где ключевую роль играли согласованность интерфейса, масштабируемость и предсказуемость пользовательских сценариев.",
            "image_url": "/assets/aic.jpg",
            "site_url": "https://aic.ru/",
            "tags": ["Corporate", "UX Architecture", "Scalable"],
            "order": 3,
        },
        {
            "title": "DupliTrade",
            "slug": "duplitrade",
            "description": "Automated copy trading platform for investors. Worked on a high-load system with complex business logic for real-time user action synchronization and risk management.",
            "description_ru": "Платформа для автоматического копирования сделок трейдеров, ориентированная на инвесторов. Работали над системой с высокой нагрузкой и многослойной бизнес-логикой, связанной с синхронизацией действий пользователей и управлением рисками в реальном времени.",
            "image_url": "/assets/duplitrade.jpg",
            "site_url": "https://duplitrade.com/",
            "tags": ["FinTech", "Real-time", "High-load"],
            "order": 4,
        },
    ]

    projects = []
    for data in projects_data:
        project = Project(**data)
        db.add(project)
        projects.append(project)

    await db.commit()
    for p in projects:
        await db.refresh(p)
    return projects
