/**
 * Filters a list of jobs based on active filters.
 * @param {Array} jobs - Full list of jobs.
 * @param {Object} filters - Current filter values (e.g., { category, region, homeOffice, language, workplace }).
 * @returns {Array} Filtered jobs.
 */
export function filterJobs(jobs, filters) {
	return jobs.filter(job => {
		if (filters.category && job.category !== filters.category) return false;
		if (filters.region && job.region !== filters.region) return false;
		if (filters.homeOffice !== undefined && job.homeOffice !== filters.homeOffice) return false;
		if (filters.language && job.language !== filters.language) return false;
		if (filters.workplace && job.workplace !== filters.workplace) return false;
		return true;
	});
}

/**
 * Extracts unique values for dynamic filter options (e.g., HomeOffice, Language, Workplace).
 * @param {Array} jobs - List of jobs.
 * @param {Array} filterNames - Array of filter names as defined in data-filter-options (e.g., ['HomeOffice', 'Language']).
 * @returns {Object} Object with filter name as key and array of possible values.
 */
export function extractFilterOptions(jobs, filterNames) {
	const options = {};
	filterNames.forEach(name => {
		const key = name.toLowerCase();
		if (key === 'homeoffice') {
			options.homeOffice = [...new Set(jobs.map(j => j.homeOffice).filter(v => v !== undefined && v !== null))];
		} else if (key === 'language') {
			options.language = [...new Set(jobs.map(j => j.language).filter(Boolean))];
		} else if (key === 'workplace') {
			options.workplace = [...new Set(jobs.map(j => j.workplace).filter(Boolean))];
		}
		// Add more filter types as needed
	});
	return options;
}

/**
 * Extracts all unique categories and regions from the job list.
 * Used to populate the category/region dropdowns if no static values are provided.
 * @param {Array} jobs 
 * @returns {Object} { categories: [], regions: [] }
 */
export function extractStaticFilterOptions(jobs) {
	return {
		categories: [...new Set(jobs.map(j => j.category).filter(Boolean))],
		regions: [...new Set(jobs.map(j => j.region).filter(Boolean))]
	};
}