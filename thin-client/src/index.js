// src/index.js
import { fetchJobs } from './api/jobApi.js';
import { filterJobs, extractFilterOptions, extractStaticFilterOptions } from './services/jobService.js';
import { createLoadingSpinner } from './components/Loading.js';
import { createFilterBar } from './components/FilterBar.js';
import { renderJobList } from './components/JobList.js';

class JobWidget {
  constructor(container) {
    this.container = container;
    this.config = this.parseConfig(container);
    this.jobs = [];
    this.filteredJobs = [];
    this.filterBar = null;
    this.jobListContainer = null;
    this.loadingSpinner = null;

    this.init();
  }

  /**
   * Reads data-* attributes from the container.
   */
  parseConfig(container) {
    const config = {
      apiUrl: container.dataset.apiUrl || 'https://api.jobs.bfo.ch',
      category: container.dataset.category,
      region: container.dataset.region,
      language: container.dataset.language,   // Could be default language
      filterOptions: container.dataset.filterOptions 
        ? JSON.parse(container.dataset.filterOptions) 
        : [],
      styleEntry: container.dataset.styleEntry,
      styleSearchBar: container.dataset.styleSearchBar,
      // Allow forcing mock data via data-use-mock="true"
      useMock: container.dataset.useMock === 'true'
    };
    return config;
  }

  async init() {
    // 1. Inject custom CSS if provided
    if (this.config.styleEntry) {
      this.loadExternalCSS(this.config.styleEntry);
    }
    if (this.config.styleSearchBar) {
      this.injectInlineStyle(this.config.styleSearchBar);
    }

    // 2. Build basic DOM structure
    this.container.innerHTML = '';
    this.container.classList.add('job-client-widget');

    // 3. Add loading spinner
    this.loadingSpinner = createLoadingSpinner();
    this.container.appendChild(this.loadingSpinner);
    this.showLoading();

    // 4. Fetch jobs – mock fallback is handled inside fetchJobs
    try {
      this.jobs = await fetchJobs(this.config.apiUrl, this.config.useMock);
    } catch (error) {
      // fetchJobs already falls back to mock data on failure.
      // This catch only triggers if an unexpected error occurs after the fallback.
      console.error('Unrecoverable job fetch error:', error);
      this.container.innerHTML = `<p class="error">Fehler beim Laden der Stellenangebote. Bitte versuchen Sie es später erneut.</p>`;
      return;
    } finally {
      this.hideLoading();
    }

    // 5. Prepare filter options (static and dynamic)
    const staticOptions = extractStaticFilterOptions(this.jobs);
    const dynamicOptions = extractFilterOptions(this.jobs, this.config.filterOptions);

    // 6. Create filter bar
    this.filterBar = createFilterBar(
      this.config,
      { ...staticOptions, ...dynamicOptions },
      (filters) => this.applyFilters(filters)
    );
    this.container.appendChild(this.filterBar);

    // 7. Create container for job list
    this.jobListContainer = document.createElement('div');
    this.jobListContainer.className = 'job-list';
    this.container.appendChild(this.jobListContainer);

    // 8. Initial filter (using pre-set values from config)
    const initialFilters = {
      category: this.config.category,
      region: this.config.region,
      // dynamic filters are initially undefined
    };
    this.applyFilters(initialFilters);
  }

  applyFilters(filters) {
    this.filteredJobs = filterJobs(this.jobs, filters);
    renderJobList(this.jobListContainer, this.filteredJobs);
  }

  showLoading() {
    if (this.loadingSpinner) this.loadingSpinner.style.display = 'flex';
  }

  hideLoading() {
    if (this.loadingSpinner) this.loadingSpinner.style.display = 'none';
  }

  loadExternalCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  injectInlineStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.appendChild(style);
  }
}

// Auto-initialise all containers with id="job-client" on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('#job-client');
  containers.forEach(container => {
    // Avoid double initialisation
    if (!container._jobWidget) {
      container._jobWidget = new JobWidget(container);
    }
  });
});