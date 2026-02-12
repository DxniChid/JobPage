/**
 * Builds the filter bar DOM and attaches event listeners.
 * @param {Object} config - Widget configuration (data-* attributes).
 * @param {Object} availableOptions - Possible values for dynamic filters (from extractFilterOptions).
 * @param {Function} onFilterChange - Callback when any filter changes.
 * @returns {HTMLElement} The filter bar element.
 */
export function createFilterBar(config, availableOptions, onFilterChange) {
  const filterBar = document.createElement('div');
  filterBar.className = 'job-client-filterbar';

  // --- Category dropdown ---
  const categoryWrapper = document.createElement('div');
  categoryWrapper.className = 'filter-group';
  categoryWrapper.innerHTML = `
    <label for="filter-category">Kategorie</label>
    <select id="filter-category" name="category">
      <option value="">Alle</option>
      ${(availableOptions.categories || []).map(cat => `<option value="${cat}">${cat}</option>`).join('')}
    </select>
  `;

  // --- Region dropdown ---
  const regionWrapper = document.createElement('div');
  regionWrapper.className = 'filter-group';
  regionWrapper.innerHTML = `
    <label for="filter-region">Region</label>
    <select id="filter-region" name="region">
      <option value="">Alle</option>
      ${(availableOptions.regions || []).map(reg => `<option value="${reg}">${reg}</option>`).join('')}
    </select>
  `;

  filterBar.appendChild(categoryWrapper);
  filterBar.appendChild(regionWrapper);

  // --- Dynamic filters (e.g., HomeOffice, Language, Workplace) ---
  if (config.filterOptions) {
    config.filterOptions.forEach(filterName => {
      const key = filterName.toLowerCase();
      if (key === 'homeoffice') {
        const wrapper = document.createElement('div');
        wrapper.className = 'filter-group';
        wrapper.innerHTML = `
          <label for="filter-homeOffice">Home Office</label>
          <select id="filter-homeOffice" name="homeOffice">
            <option value="">Alle</option>
            <option value="true">Ja</option>
            <option value="false">Nein</option>
          </select>
        `;
        filterBar.appendChild(wrapper);
      } else if (key === 'language' && availableOptions.language) {
        const wrapper = document.createElement('div');
        wrapper.className = 'filter-group';
        wrapper.innerHTML = `
          <label for="filter-language">Sprache</label>
          <select id="filter-language" name="language">
            <option value="">Alle</option>
            ${availableOptions.language.map(lang => `<option value="${lang}">${lang}</option>`).join('')}
          </select>
        `;
        filterBar.appendChild(wrapper);
      } else if (key === 'workplace' && availableOptions.workplace) {
        const wrapper = document.createElement('div');
        wrapper.className = 'filter-group';
        wrapper.innerHTML = `
          <label for="filter-workplace">Arbeitsort</label>
          <select id="filter-workplace" name="workplace">
            <option value="">Alle</option>
            ${availableOptions.workplace.map(wp => `<option value="${wp}">${wp}</option>`).join('')}
          </select>
        `;
        filterBar.appendChild(wrapper);
      }
    });
  }

  // Attach event listeners – use change event for selects
  filterBar.addEventListener('change', (e) => {
    if (e.target.matches('select')) {
      const filters = getCurrentFilters(filterBar);
      onFilterChange(filters);
    }
  });

  // Preselect values from config (e.g., data-category, data-region)
  if (config.category) {
    const catSelect = filterBar.querySelector('#filter-category');
    if (catSelect) catSelect.value = config.category;
  }
  if (config.region) {
    const regSelect = filterBar.querySelector('#filter-region');
    if (regSelect) regSelect.value = config.region;
  }

  return filterBar;
}

/**
 * Reads current filter values from all selects inside the filter bar.
 * @param {HTMLElement} filterBar 
 * @returns {Object} Filter values.
 */
function getCurrentFilters(filterBar) {
  const filters = {};
  const selects = filterBar.querySelectorAll('select');
  selects.forEach(select => {
    const name = select.name;
    let value = select.value;
    if (value === '') value = undefined; // No filter
    if (name === 'homeOffice' && value !== undefined) {
      value = value === 'true'; // Convert string to boolean
    }
    filters[name] = value;
  });
  return filters;
}