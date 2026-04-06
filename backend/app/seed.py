import asyncio

from sqlalchemy import select

from app.database import async_session
from app.models.project import Project


async def seed():
    async with async_session() as db:
        existing = await db.execute(select(Project))
        if existing.scalars().first():
            print("Projects already seeded.")
            return

        projects_data = [
            {
                "title": "Recap After Use",
                "slug": "recap-after-use",
                "description": "Designer portfolio with focus on visual storytelling and interactivity.",
                "description_ru": "Портфолио-дизайнера с акцентом на визуальный сторителлинг и интерактив. Работали над реализацией сложного скролл-опыта, где поведение интерфейса тесно связано с действиями пользователя и требует точной синхронизации анимаций и состояний.",
                "image_url": "/assets/recap.jpg",
                "site_url": "https://www.recapafteruse.co.uk/",
                "tags": ["Scroll Animation", "Interactive", "Portfolio"],
                "order": 1,
            },
            {
                "title": "Red Collar",
                "slug": "red-collar",
                "description": "Digital agency specializing in creative and technological web products.",
                "description_ru": "Digital-агентство, специализирующееся на креативных и технологичных веб-продуктах. Работали над сайтом с насыщенным визуальным слоем и сложной системой взаимодействий, где важно было сохранить баланс между выразительной анимацией и стабильной работой.",
                "image_url": "/assets/redcollar.jpg",
                "site_url": "https://redcollar.ru/",
                "tags": ["Animation", "Creative", "Agency"],
                "order": 2,
            },
            {
                "title": "AIC",
                "slug": "aic",
                "description": "Digital studio creating corporate and product solutions for business.",
                "description_ru": "Digital-студия, создающая корпоративные и продуктовые решения для бизнеса. Работали над сайтом со сложной структурой и логикой, где ключевую роль играли согласованность интерфейса, масштабируемость и предсказуемость пользовательских сценариев.",
                "image_url": "/assets/aic.jpg",
                "site_url": "https://aic.ru/",
                "tags": ["Corporate", "UX Architecture", "Scalable"],
                "order": 3,
            },
            {
                "title": "DupliTrade",
                "slug": "duplitrade",
                "description": "Automated copy trading platform for investors.",
                "description_ru": "Платформа для автоматического копирования сделок трейдеров, ориентированная на инвесторов. Работали над системой с высокой нагрузкой и многослойной бизнес-логикой, связанной с синхронизацией действий пользователей и управлением рисками в реальном времени.",
                "image_url": "/assets/duplitrade.jpg",
                "site_url": "https://duplitrade.com/",
                "tags": ["FinTech", "Real-time", "High-load"],
                "order": 4,
            },
        ]

        for data in projects_data:
            db.add(Project(**data))

        await db.commit()
        print("Seeded 4 projects.")


if __name__ == "__main__":
    asyncio.run(seed())
