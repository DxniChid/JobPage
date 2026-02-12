/**
 * Creates a DOM element representing a single job.
 * @param {Object} job - Job data.
 * @returns {HTMLElement} Article element with job details.
 */
export function createJobItem(job) {
	const article = document.createElement('article');
	article.className = 'job-item';
	article.dataset.jobId = job.id;

	article.innerHTML = `
		<h3 class="job-title">${escapeHTML(job.title || '')}</h3>
		<div class="job-company">${escapeHTML(job.company || '')}</div>
		<div class="job-location">${escapeHTML(job.location || '')}</div>
		<div class="job-meta">
			<span class="job-category">${escapeHTML(job.category || '')}</span>
			<span class="job-region">${escapeHTML(job.region || '')}</span>
			${job.homeOffice ? '<span class="badge">Home Office</span>' : ''}
			${job.language ? `<span class="badge">${escapeHTML(job.language)}</span>` : ''}
		</div>
		<p class="job-description">${escapeHTML(job.description || '').substring(0, 200)}…</p>
		<a href="${escapeHTML(job.url || '#')}" class="job-link" target="_blank">mehr erfahren</a>
	`;
	return article;
}

// Simple escape to prevent XSS
function escapeHTML(str) {
	return String(str).replace(/[&<>"]/g, function(match) {
		if (match === '&') return '&amp;';
		if (match === '<') return '&lt;';
		if (match === '>') return '&gt;';
		if (match === '"') return '&quot;';
		return match;
	});
}