from datetime import datetime

from pydantic import BaseModel


class ProjectBase(BaseModel):
    title: str
    slug: str
    description: str
    description_ru: str = ""
    image_url: str = ""
    site_url: str = ""
    tags: list[str] = []
    order: int = 0


class ProjectCreate(ProjectBase):
    pass


class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}
