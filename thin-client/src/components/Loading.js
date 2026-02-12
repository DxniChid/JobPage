// src/components/Loading.js

/**
 * Creates or returns a loading spinner element.
 * @returns {HTMLElement} Div with spinner and hidden class.
 */
export function createLoadingSpinner() {
	const spinner = document.createElement('div');
	spinner.className = 'job-client-loading';
	spinner.innerHTML = `
		<div class="spinner"></div>
		<span>Lade Stellenangebote...</span>
	`;
	spinner.style.display = 'none'; // Hidden by default
	return spinner;
}