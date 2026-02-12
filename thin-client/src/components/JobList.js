import { createJobItem } from './JobItem.js';

/**
 * Renders a list of jobs inside a container.
 * @param {HTMLElement} container - The DOM element to populate.
 * @param {Array} jobs - Array of job objects.
 */
export function renderJobList(container, jobs) {
  container.innerHTML = ''; // Clear previous
  if (!jobs || jobs.length === 0) {
    container.innerHTML = '<p class="no-jobs">Keine Stellenangebote gefunden.</p>';
    return;
  }
  jobs.forEach(job => {
    container.appendChild(createJobItem(job));
  });
}