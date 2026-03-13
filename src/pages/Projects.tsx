import Heading from '@/components/atoms/Heading';
import ProjectCard from '@/components/molecules/ProjectCard';
import { useTranslation } from '@/i18n';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section>
      <Heading level={1}>{t('projectsTitle')}</Heading>
      <p className="mb-6 text-slate-300">{t('projectsDescription')}</p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <ProjectCard
          title="Train Station"
          description="A small frontend project exploring UI and simulations for train station operations."
          link="https://github.com/Nezerpz/trainStation"
          image="/images/trainstation.png"
        >
          <p>Tags: frontend, simulation, UI</p>
        </ProjectCard>

        <ProjectCard
          title="Chaos Game"
          description="Visual/algorithmic project that generates fractal patterns using the chaos game method."
          link="https://github.com/Nezerpz/ChaosGame"
          image="/images/chaosgame.png"
        >
          <p>Tags: graphics, algorithm, demo</p>
        </ProjectCard>

        <ProjectCard
          title="Meal Manager"
          description="An app for managing meals and recipes; includes CRUD features to store and plan meals."
          link="https://github.com/Nezerpz/Meal-manager"
          image="/images/meal-manager.png"
        >
          <p>Tags: frontend, productivity, CRUD</p>
        </ProjectCard>

        <ProjectCard
          title="IDATA2304 - Course Project"
          description="Course project repository (collaboration) — see the linked repo for code and documentation."
          link="https://github.com/ludlun04/IDATA2304-Project"
          image="/images/idata2304.png"
        >
          <p>Tags: course, team project</p>
        </ProjectCard>

        <ProjectCard
          title="IDATA2301 & IDATA2306 — Course Website"
          description="A paired frontend + backend course project. Links to both repositories are provided below."
          image="/images/rentalroulette.png"
        >
          <p>
            Frontend:{' '}
            <a
              className="underline"
              href="https://github.com/Nezerpz/IDATA2301-Project-2025"
              target="_blank"
              rel="noreferrer"
            >
              IDATA2301-Project-2025
            </a>
          </p>
          <p>
            Backend:{' '}
            <a
              className="underline"
              href="https://github.com/Nezerpz/IDATA2306-Project-2025"
              target="_blank"
              rel="noreferrer"
            >
              IDATA2306-Project-2025
            </a>
          </p>
          <p>Tags: frontend, backend, course-project</p>
        </ProjectCard>
      </div>
    </section>
  );
}
