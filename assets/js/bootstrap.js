(async function loadApplication() {
  const partials = [
    'chrome',
    'home',
    'heritage',
    'site',
    'map',
    'research',
    'academy',
    'events',
    'works',
    'story',
    'team',
    'footer'
  ];

  const shell = document.getElementById('app-shell');
  const fragments = await Promise.all(
    partials.map(async name => {
      const response = await fetch(`partials/${name}.html`);
      if (!response.ok) throw new Error(`Unable to load partial: ${name}`);
      return response.text();
    })
  );

  shell.innerHTML = fragments.join('');
  const script = document.createElement('script');
  script.src = 'assets/js/app.js';
  document.body.appendChild(script);
})();