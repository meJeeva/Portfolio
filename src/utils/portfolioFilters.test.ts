import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS, SKILL_GROUPS } from '../data/resumeData';
import {
  filterProjectsByCategory,
  filterSkillsByQuery,
  validateContactForm,
} from './portfolioFilters';

test('filterProjectsByCategory returns all projects for All and filters specific domains', () => {
  assert.equal(filterProjectsByCategory(PROJECTS, 'All').length, 3);
  const healthcare = filterProjectsByCategory(PROJECTS, 'Healthcare');
  assert.equal(healthcare.length, 1);
  assert.equal(healthcare[0].id, 'tanjer');

  const erp = filterProjectsByCategory(PROJECTS, 'ERP & Retail');
  assert.equal(erp.length, 1);
  assert.equal(erp[0].id, 'zinger');
});

test('filterSkillsByQuery filters across all groups when query is non-empty', () => {
  const razorpayMatches = filterSkillsByQuery(SKILL_GROUPS, 'mobile', 'Razorpay');
  assert.equal(razorpayMatches.length, 1);
  assert.equal(razorpayMatches[0].name, 'Razorpay Payment Gateway');
  assert.equal(razorpayMatches[0].groupLabel, 'Web, Backend & Payments');
});

test('filterSkillsByQuery returns selected group skills when query is empty', () => {
  const mobileSkills = filterSkillsByQuery(SKILL_GROUPS, 'mobile', '   ');
  assert.equal(mobileSkills.length, 6);
  assert.equal(mobileSkills[0].name, 'React Native');
});

test('validateContactForm catches invalid inputs and accepts complete inquiries', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    subject: 'Hi',
    message: 'Short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Karthik Rajan',
    email: 'karthik@example.com',
    subject: 'React Native Lead Opportunity',
    message: 'We are building a telehealth mobile app and would love to collaborate.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});
