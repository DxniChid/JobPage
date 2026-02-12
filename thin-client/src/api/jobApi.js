// src/api/jobApi.js
import { mockJobs } from './mockJobs.js';

const DEFAULT_API_URL = 'https://api.jobs.bfo.ch';

/**
 * Fetches job listings from the configured API.
 * Falls back to mock data if the fetch fails (or if useMock = true).
 * @param {string} apiUrl - Base URL of the job API.
 * @param {boolean} useMock - Force use of mock data (for testing).
 * @returns {Promise<Array>} Array of job objects.
 */
export async function fetchJobs(apiUrl = DEFAULT_API_URL, useMock = false) {
	if (useMock) {
		console.log('🔧 Using mock job data (testing mode)');
		return [...mockJobs];
	}

	try {
		const response = await fetch(`${apiUrl}/jobs`);
		if (!response.ok) {
			throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
		}
		const jobs = await response.json();
		return jobs;
	} catch (error) {
		console.warn('⚠️ API fetch failed, falling back to mock data:', error);
		return [...mockJobs];
	}
}