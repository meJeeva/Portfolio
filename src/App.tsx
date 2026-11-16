import { useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { SkillsSection } from './components/SkillsSection';
import { PROJECTS } from './data/resumeData';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject =
    PROJECTS.find((project) => project.id === selectedProjectId) ?? null;

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#0B0F19]">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection onSelectProjectModal={(id) => setSelectedProjectId(id)} />
        <ExperienceSection />
        <ProjectsSection onSelectProject={(id) => setSelectedProjectId(id)} />
        <SkillsSection />
        <ContactSection />
      </main>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}
