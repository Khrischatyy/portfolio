import { useState, useEffect } from "react";

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  description_ru: string;
  image_url: string;
  site_url: string;
  tags: string[];
  order: number;
}

const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Recap After Use",
    slug: "recap-after-use",
    description:
      "A designer portfolio centered on visual storytelling and interactivity. We engineered a complex scroll-driven experience where interface behavior is tightly coupled with user actions, requiring precise synchronization of animations and state transitions.",
    description_ru:
      "Портфолио-дизайнера с акцентом на визуальный сторителлинг и интерактив. Работали над реализацией сложного скролл-опыта, где поведение интерфейса тесно связано с действиями пользователя и требует точной синхронизации анимаций и состояний.",
    image_url: "/src/assets/recap.jpg",
    site_url: "https://www.recapafteruse.co.uk/",
    tags: ["Scroll Animation", "Interactive", "Portfolio"],
    order: 1,
  },
  {
    id: 2,
    title: "Red Collar",
    slug: "red-collar",
    description:
      "A digital agency known for creative and tech-forward web products. We built a visually rich site with a complex interaction layer, balancing expressive animation with rock-solid performance and stability.",
    description_ru:
      "Digital-агентство, специализирующееся на креативных и технологичных веб-продуктах. Работали над сайтом с насыщенным визуальным слоем и сложной системой взаимодействий, где важно было сохранить баланс между выразительной анимацией и стабильной работой.",
    image_url: "/src/assets/redcollar.jpg",
    site_url: "https://redcollar.ru/",
    tags: ["Animation", "Creative", "Agency"],
    order: 2,
  },
  {
    id: 3,
    title: "AIC",
    slug: "aic",
    description:
      "A digital studio delivering corporate and product solutions for enterprise. We developed a site with deep structural complexity where interface consistency, scalability, and predictable user flows were paramount.",
    description_ru:
      "Digital-студия, создающая корпоративные и продуктовые решения для бизнеса. Работали над сайтом со сложной структурой и логикой, где ключевую роль играли согласованность интерфейса, масштабируемость и предсказуемость пользовательских сценариев.",
    image_url: "/src/assets/aic.jpg",
    site_url: "https://aic.ru/",
    tags: ["Corporate", "UX Architecture", "Scalable"],
    order: 3,
  },
  {
    id: 4,
    title: "DupliTrade",
    slug: "duplitrade",
    description:
      "An automated copy-trading platform built for investors. We architected a high-load system with multi-layered business logic handling real-time user synchronization and risk management at scale.",
    description_ru:
      "Платформа для автоматического копирования сделок трейдеров, ориентированная на инвесторов. Работали над системой с высокой нагрузкой и многослойной бизнес-логикой, связанной с синхронизацией действий пользователей и управлением рисками в реальном времени.",
    image_url: "/src/assets/duplitrade.jpg",
    site_url: "https://duplitrade.com/",
    tags: ["FinTech", "Real-time", "High-load"],
    order: 4,
  },
];

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/v1/projects");
        if (!res.ok) throw new Error("API unavailable");
        const data = await res.json();
        if (data.length > 0) setProjects(data);
      } catch {
        setError("Using fallback data");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return { projects, loading, error };
}
