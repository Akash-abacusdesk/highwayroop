(() => {
  const body = document.body;
  const root = body.dataset.root || './';
  const page = body.dataset.page || '';
  const active = (key) => page === key || page.startsWith(`${key}/`) ? ' class="active"' : '';
  const liveSite = 'https://highwayroop.vercel.app/';
  const href = (path) => {
    if (path === 'investors/annual-reports/') return './';
    if (path.startsWith('assets/')) return `${root}${path}`;
    return `${liveSite}${path}`;
  };

  const header = document.querySelector('[data-site-header]');
  header.innerHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <div class="utility"><div class="shell"><span>Engineering precision. Delivering performance.</span><a href="${href('contact/corporate-office/')}">Contact</a></div></div>
    <header class="site-header">
      <div class="shell header-row">
        <a class="brand" href="https://highwayroop.vercel.app/" aria-label="Highway Roop home"><img src="${href('assets/highway-roop-logo.png')}" alt="Highway Roop"></a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          <a href="https://highwayroop.vercel.app/">Home</a>
          <div class="nav-group${page === 'technology' || page === 'products-solutions' ? ' active' : ''}">
            <button type="button" aria-expanded="false">Businesses</button>
            <div class="mega"><div><span>DRIVELINE</span><a href="${href('technology/')}">Technology &amp; Manufacturing</a><a href="${href('products-solutions/')}">Products &amp; Solutions</a></div></div>
          </div>
          <a${active('sustainability')} href="${href('sustainability/esg-overview/')}">Sustainability</a>
          <div class="nav-group${page.startsWith('investors') ? ' active' : ''}">
            <button type="button" aria-expanded="false">Investors</button>
            <div class="mega"><div><span>INVESTORS</span><a href="${href('investors/annual-reports/')}">Annual Reports</a></div></div>
          </div>
          <a${active('careers')} href="${href('careers/')}">Careers</a>
          <a${active('contact')} href="${href('contact/corporate-office/')}">Contact</a>
        </nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Open navigation"><span></span><span></span></button>
      </div>
      <nav class="mobile-nav" aria-label="Mobile navigation">
        <a href="https://highwayroop.vercel.app/">Home</a><a href="${href('technology/')}">Technology &amp; Manufacturing</a><a href="${href('products-solutions/')}">Products &amp; Solutions</a><a href="${href('sustainability/esg-overview/')}">Sustainability</a><a href="${href('investors/annual-reports/')}">Investors — Annual Reports</a><a href="${href('careers/')}">Careers</a><a href="${href('contact/corporate-office/')}">Contact</a>
      </nav>
    </header>`;

  const footer = document.querySelector('[data-site-footer]');
  footer.innerHTML = `
    <section class="connect"><div class="shell connect-grid"><div><p class="eyebrow">CONNECT WITH HIGHWAY ROOP</p><h2>Bring us your<br><em>next programme.</em></h2></div><div class="connect-action"><p>From product development to industrial-scale manufacturing, our teams are ready to discuss your requirement.</p><a class="button light" href="${href('contact/business-enquiries/')}">Start an enquiry <span>→</span></a><div class="connect-meta"><a href="tel:+918396999592">+91 83969 99592</a><a href="mailto:info@highwayroop.com">info@highwayroop.com</a></div></div></div></section>
    <footer class="footer"><div class="shell footer-grid"><div><img src="${href('assets/highway-roop-logo.png')}" alt="Highway Roop"><p>Highway Roop Precision Technologies Limited<br>135-R, Sector 36, Narsinghpur,<br>Gurugram, Haryana 122004, India</p></div><div><strong>Businesses</strong><a href="${href('technology/')}">Technology &amp; Manufacturing</a><a href="${href('products-solutions/')}">Products &amp; Solutions</a></div><div><strong>Company</strong><a href="${href('sustainability/esg-overview/')}">Sustainability</a><a href="${href('investors/annual-reports/')}">Annual Reports</a><a href="${href('careers/')}">Careers</a><a href="${href('contact/corporate-office/')}">Contact</a></div></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Highway Roop Precision Technologies Limited</span><span>Precision engineering. Global execution.</span></div></footer>`;

  const toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('[data-product-group]').forEach((item) => {
      item.hidden = button.dataset.filter !== 'all' && item.dataset.productGroup !== button.dataset.filter;
    });
  }));

  document.querySelectorAll('[data-demo-form]').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.querySelector('.form-status').textContent = 'Form layout is ready for backend integration.';
  }));

  if (page === 'sustainability/governance') {
    document.querySelectorAll('.certification-grid article').forEach((card) => {
      card.insertAdjacentHTML('afterbegin', '<div class="certificate-image-slot"><span>CERTIFICATE</span><small>Approved image / PDF preview</small></div>');
      card.insertAdjacentHTML('beforeend', '<button class="document-action" type="button" disabled>View certificate</button>');
    });
  }

  document.querySelectorAll('.document-list > div').forEach((row) => {
    const actions = document.createElement('div');
    actions.className = 'document-actions';
    actions.innerHTML = '<button type="button" disabled>View</button><button type="button" disabled>Download</button>';
    row.appendChild(actions);
  });

  document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });

  const reportFilter = document.querySelector('[data-report-filter]');
  if (reportFilter) {
    const reports = [...document.querySelectorAll('[data-report-year]')];
    const result = document.querySelector('[data-report-results]');
    const years = [...new Set(reports.map((report) => report.dataset.reportYear))];

    years.forEach((year) => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = `FY ${year}`;
      reportFilter.appendChild(option);
    });

    const updateReports = () => {
      const selectedYear = reportFilter.value;
      let visibleCount = 0;
      reports.forEach((report) => {
        const visible = selectedYear === 'all' || report.dataset.reportYear === selectedYear;
        report.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      result.textContent = selectedYear === 'all'
        ? `${visibleCount} reports available`
        : `${visibleCount} report for FY ${selectedYear}`;
    };

    reportFilter.addEventListener('change', updateReports);
    updateReports();
  }
})();
