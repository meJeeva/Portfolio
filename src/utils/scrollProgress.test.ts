import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateScrollProgress } from './scrollProgress';

test('calculateScrollProgress returns 0 at top or when page is non-scrollable', () => {
  assert.equal(calculateScrollProgress(0, 2000, 900), 0);
  assert.equal(calculateScrollProgress(-20, 2000, 900), 0);
  assert.equal(calculateScrollProgress(100, 900, 900), 0);
  assert.equal(calculateScrollProgress(50, 700, 900), 0);
});

test('calculateScrollProgress returns proportional ratio and clamps at 1', () => {
  assert.equal(calculateScrollProgress(550, 2000, 900), 0.5);
  assert.equal(calculateScrollProgress(1100, 2000, 900), 1);
  assert.equal(calculateScrollProgress(1400, 2000, 900), 1);
});
