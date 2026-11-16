import type { ProjectCategory, ProjectItem, SkillGroup } from '../data/resumeData';

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormValues, string>>;
}

export function filterProjectsByCategory(
  projects: ProjectItem[],
  category: ProjectCategory,
): ProjectItem[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function filterSkillsByQuery(
  groups: SkillGroup[],
  activeGroupId: string,
  query: string,
): { name: string; context: string; groupLabel: string }[] {
  const normalized = query.trim().toLowerCase();

  if (normalized.length > 0) {
    const matches: { name: string; context: string; groupLabel: string }[] = [];
    for (const group of groups) {
      for (const skill of group.skills) {
        if (
          skill.name.toLowerCase().includes(normalized) ||
          skill.context.toLowerCase().includes(normalized)
        ) {
          matches.push({
            name: skill.name,
            context: skill.context,
            groupLabel: group.label,
          });
        }
      }
    }
    return matches;
  }

  const selectedGroup = groups.find((g) => g.id === activeGroupId) ?? groups[0];
  if (!selectedGroup) {
    return [];
  }

  return selectedGroup.skills.map((skill) => ({
    name: skill.name,
    context: skill.context,
    groupLabel: selectedGroup.label,
  }));
}

export function validateContactForm(values: ContactFormValues): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailTrimmed = values.email.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailTrimmed)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (values.subject.trim().length < 3) {
    errors.subject = 'Please include a short topic or project subject.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Please share a brief message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
