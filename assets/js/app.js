    /* =====================================================================
      HERITAGE BRIDGE — APPLICATION
      Brand name is centralised here. Content lives in plain data arrays so
      it can later be replaced by a CMS / API without touching the templates.
       ===================================================================== */
    const BRAND = { name: 'Heritage Bridge' };
    document.querySelectorAll('.brand-name').forEach(e => e.textContent = BRAND.name);
    document.title = BRAND.name + ' — Digital Heritage Documentation, Research & Education';

    const PX = (id, w = 1400) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    /* ---------------- DATA: HERITAGE SITES ---------------- */
    const SITES = [
      {
        id: 'al-saa-church', name: "Al-Saa'a Church", alt: 'Church of Our Lady of the Hour', location: 'Old City, Mosul', country: 'Iraq', type: 'Church', period: '19th century', year: '1866–1873', status: 'Documented', has3d: true, gallery: true, video: true, lat: 36.3432, lng: 43.1272,
        img: PX(34929898), imgs: [PX(34929898, 1800), PX(34699505), PX(19466976), PX(16779895), PX(21701123), PX(37750142, 1800)],
        short: 'A Dominican church in Mosul\'s old city, named for the clock tower gifted by Empress Eugénie. Severely damaged between 2014 and 2017; documented in three photogrammetric campaigns.',
        story: [
          "The Church of Our Lady of the Hour was built by Dominican friars between 1866 and 1873, in the dense fabric of Mosul's old city on the western bank of the Tigris. Its name came later: in 1880, Empress Eugénie of France gifted the clock that was installed in the bell tower, and the building became known simply as Al-Saa'a — 'the Clock'. For over a century the chimes structured the daily life of the surrounding Christian and Muslim neighbourhoods alike.",
          "The complex included the church, a convent, a printing press that produced some of the first Arabic and Syriac books in northern Iraq, and a school. Its architecture merges local Mosuli stone craft — the alabaster (marmar) reliefs and pointed arches — with a European basilican plan.",
          "Between 2014 and 2017 the church was occupied, looted and heavily damaged. The clock was removed; the roof partially collapsed; carved stone was defaced. When the team first entered the site in 2022, no measured record of the pre-damage building existed beyond a handful of photographs and a nineteenth-century sketch plan. Documentation began there."
        ],
        sketchfab: '5ea8aa956bd742b2acaf8c0145d78fdf',
        tech: { 'Footprint': '38.6 × 21.2 m', 'Tower height': '24.8 m (measured)', 'Capture method': 'Terrestrial photogrammetry + UAV', 'Images processed': '4,812', 'Dense cloud': '186 M points', 'Mesh': '12.4 M faces (decimated 1.2 M web)', 'Texture': '8 × 8K atlases', 'Registration RMSE': '3.1 mm', 'Georeference': 'WGS84 / UTM 38N', 'Documentation dates': 'Mar 2022 · Oct 2023 · Feb 2025', 'Software': 'Metashape · CloudCompare · Blender', 'Licence': 'CC BY-NC 4.0' },
        research: ['r1', 'r3', 'r6']
      },
      {
        id: 'mar-toma-church', name: 'Mar Toma Church', location: 'Old City, Mosul', country: 'Iraq', type: 'Church', period: 'Medieval / 18th century', status: 'Documented', has3d: true, gallery: true, lat: 36.3405, lng: 43.1300, img: PX(19466976), imgs: [PX(19466976, 1800), PX(34929898), PX(21701123)],
        short: 'Syriac Orthodox church built partly below street level, with a richly carved marble altar screen. Interior documented at high resolution in 2023.', story: ["Tradition dates a church on this site to the earliest Christian presence in Mosul; the present structure largely dates to a rebuilding in the 18th century. It sits sunk below the modern street, a common feature of Mosul's medieval churches.", "The interior alabaster reliefs of the sanctuary were the focus of the 2023 campaign, captured at sub-millimetre resolution to support future conservation."], sketchfab: '57a814d190554c7ebccbbc49a6b065e5', tech: { 'Capture method': 'Close-range photogrammetry', 'Images processed': '2,140', 'Dense cloud': '92 M points', 'Registration RMSE': '1.8 mm', 'Documentation date': 'Jun 2023' }, research: ['r3']
      },
      {
        id: 'erbil-citadel', name: 'Erbil Citadel', location: 'Erbil', country: 'Iraq', type: 'Citadel / Urban fabric', period: 'Multi-period (6th millennium BCE →)', status: 'In progress', has3d: true, gallery: true, lat: 36.1912, lng: 44.0092, img: PX(36756153), imgs: [PX(36756153, 1800), PX(14537427), PX(36756060)],
        short: 'One of the longest continuously inhabited settlements on earth. UNESCO-listed tell with an Ottoman-era street network; façade survey ongoing with the local revitalisation office.', story: ["The citadel mound rises some 30 metres above the surrounding city, the accumulated layers of at least eight thousand years of settlement. The visible fabric — the ring of tall façades, the alleys and courtyard houses — is largely 19th and early 20th century.", "Our contribution is a systematic façade survey of the southern perimeter, feeding a shared model with the High Commission for Erbil Citadel Revitalization."], sketchfab: '5ea8aa956bd742b2acaf8c0145d78fdf', tech: { 'Capture method': 'UAV photogrammetry + TLS (partner data)', 'Images processed': '9,600 (phase I)', 'Coverage': 'Southern perimeter, 420 m', 'Documentation date': '2024 – ongoing' }, research: ['r2']
      },
      {
        id: 'lalish', name: 'Lalish Temple', location: 'Shekhan, Nineveh', country: 'Iraq', type: 'Temple / Sanctuary', period: '12th century (core)', status: 'Documented', has3d: false, gallery: true, lat: 36.7736, lng: 43.3050, img: PX(16779895), imgs: [PX(16779895, 1800), PX(25785233)],
        short: 'The holiest sanctuary of the Yazidi faith, set in a narrow mountain valley. Documented with the community\'s guidance; the interior remains unrecorded by request.', story: ["Lalish is the site of the tomb of Sheikh Adi ibn Musafir and the spiritual centre of Yazidism. Its conical fluted spires and sunken courtyards follow the valley floor.", "In agreement with the community, documentation covered exterior spaces and the valley setting only. This entry is an example of documentation ethics shaping method."], tech: { 'Capture method': 'Terrestrial photography, GNSS control', 'Interior': 'Not recorded (community request)', 'Documentation date': 'Sep 2024' }, research: ['r5']
      },
      {
        id: 'al-nuri-minaret', name: 'Al-Nuri Mosque & Al-Hadba Minaret', location: 'Old City, Mosul', country: 'Iraq', type: 'Mosque', period: '12th century', status: 'Planned', has3d: false, gallery: false, lat: 36.3428, lng: 43.1261, img: PX(34699505), imgs: [PX(34699505, 1800)],
        short: 'The leaning minaret that defined Mosul\'s skyline for 850 years, destroyed in 2017 and rebuilt by 2024. Comparative documentation of the reconstruction is planned.', story: ["Al-Hadba — 'the hunchback' — was completed in 1172 and leaned visibly for centuries. Its destruction in June 2017 and reconstruction under UNESCO's Revive the Spirit of Mosul programme make it a rare case for before/after comparative documentation."], tech: { 'Status': 'Planned — access under negotiation' }, research: []
      },
      {
        id: 'mar-behnam', name: 'Mar Behnam Monastery', location: 'Nineveh Plains', country: 'Iraq', type: 'Monastery', period: '4th / 12th century', status: 'In progress', has3d: true, gallery: true, lat: 36.1467, lng: 43.4028, img: PX(21701123), imgs: [PX(21701123, 1800), PX(18416945)],
        short: 'Syriac Catholic monastery famed for its carved mausoleum. Partially destroyed in 2015 and since restored; the mausoleum interior was modelled in 2024.', story: ["The monastery's 12th-century mausoleum of Mar Behnam contains some of the finest medieval stone carving in Iraq, including Syriac, Arabic and Uighur inscriptions."], sketchfab: '57a814d190554c7ebccbbc49a6b065e5', tech: { 'Capture method': 'Close-range photogrammetry', 'Images processed': '3,300', 'Documentation date': 'Nov 2024' }, research: []
      },
      {
        id: 'geghard', name: 'Geghard Monastery', location: 'Kotayk Province', country: 'Armenia', type: 'Monastery (rock-hewn)', period: '4th–13th century', status: 'Documented', has3d: true, gallery: true, lat: 40.1403, lng: 44.8183, img: PX(35665429), imgs: [PX(35665429, 1800), PX(36096774), PX(17550070)],
        short: 'UNESCO-listed monastery partly carved from the living rock of the Azat gorge. Rock-cut chambers documented for acoustic and geometric study in 2024.', story: ["Geghard's rock-hewn churches were cut downward into the cliff in the 13th century, leaving interiors of astonishing geometric precision. The team recorded the two rock chambers and the upper jamatun, producing the first openly available model of their vaulting."], sketchfab: '5ea8aa956bd742b2acaf8c0145d78fdf', tech: { 'Capture method': 'Photogrammetry (interior, low light)', 'Images processed': '5,100', 'Dense cloud': '210 M points', 'Documentation date': 'Jul 2024' }, research: ['r4']
      },
      {
        id: 'tatev', name: 'Tatev Monastery', location: 'Syunik Province', country: 'Armenia', type: 'Monastery', period: '9th–13th century', status: 'Documented', has3d: true, gallery: true, lat: 39.3793, lng: 46.2500, img: PX(36096774), imgs: [PX(36096774, 1800), PX(35665429)],
        short: 'Fortified monastic complex on a basalt plateau above the Vorotan gorge; once a medieval university. Exterior UAV survey completed 2024.', story: ["Tatev housed one of the most important medieval Armenian universities. The 2024 survey focused on the defensive walls and the swinging Gavazan column, an 8th-century seismic indicator."], sketchfab: '5ea8aa956bd742b2acaf8c0145d78fdf', tech: { 'Capture method': 'UAV photogrammetry', 'Images processed': '2,900', 'Documentation date': 'Aug 2024' }, research: ['r4']
      },
      {
        id: 'sevanavank', name: 'Sevanavank', location: 'Lake Sevan, Gegharkunik', country: 'Armenia', type: 'Monastery', period: '9th century', status: 'Documented', has3d: false, gallery: true, lat: 40.5636, lng: 45.0111, img: PX(17550070), imgs: [PX(17550070, 1800), PX(39243256)],
        short: 'Twin churches of 874 on a former island peninsula. Khachkar collection photographed and catalogued.', story: ["Founded in 874 by Princess Mariam, Sevanavank's two surviving churches stand on what was an island until Soviet-era lake drainage. The team catalogued its khachkars (cross-stones) in 2024."], tech: { 'Capture method': 'Photographic catalogue', 'Items': '46 khachkars', 'Documentation date': 'Aug 2024' }, research: []
      },
      {
        id: 'khor-virap', name: 'Khor Virap', location: 'Ararat Province', country: 'Armenia', type: 'Monastery', period: '7th / 17th century', status: 'In progress', has3d: false, gallery: true, lat: 39.8783, lng: 44.5761, img: PX(39152791), imgs: [PX(39152791, 1800), PX(39152783)],
        short: 'Monastery on the Ararat plain marking the pit where Gregory the Illuminator was imprisoned. Landscape and setting survey underway.', story: ["Khor Virap's significance is as much its setting — directly beneath Mount Ararat, metres from the closed border — as its 17th-century church. Documentation here treats the landscape as the monument."], tech: { 'Capture method': 'UAV landscape survey', 'Documentation date': '2025 – ongoing' }, research: []
      },
      {
        id: 'zvartnots', name: 'Zvartnots Cathedral', location: 'Armavir Province', country: 'Armenia', type: 'Archaeological site', period: '7th century', status: 'Planned', has3d: false, gallery: false, lat: 40.1600, lng: 44.3367, img: PX(37845037), imgs: [PX(37845037, 1800)],
        short: 'Ruins of a circular 7th-century cathedral, collapsed in the 10th century. Digital anastylosis study planned with Yerevan State University.', story: ["Zvartnots was a three-tiered circular cathedral of extraordinary ambition. A hypothetical digital reconstruction from the surviving fragments is planned as a joint academic project."], tech: { 'Status': 'Planned — 2026' }, research: []
      },
      {
        id: 'garni', name: 'Garni Temple', location: 'Kotayk Province', country: 'Armenia', type: 'Temple', period: '1st century CE', status: 'Documented', has3d: true, gallery: true, lat: 40.1124, lng: 44.7300, img: PX(34901316), imgs: [PX(34901316, 1800), PX(38492868)],
        short: 'The only standing Greco-Roman colonnaded building in the former Soviet Union, reconstructed in the 1970s. Column-by-column photogrammetric record.', story: ["Garni's Ionic temple was rebuilt from its collapsed blocks between 1969 and 1975. Each of the 24 columns was documented individually to distinguish original from replacement stone."], sketchfab: '57a814d190554c7ebccbbc49a6b065e5', tech: { 'Capture method': 'Photogrammetry', 'Images processed': '3,850', 'Documentation date': 'Jul 2024' }, research: []
      }
    ];
    const siteById = id => SITES.find(s => s.id === id);

    /* ---------------- DATA: RESEARCH ---------------- */
    const RESEARCH = [
      { id: 'r1', title: "Photogrammetric Documentation of Al-Saa'a Church: Methodology and Accuracy Assessment", type: 'Research Paper', authors: 'L. Yousif, A. Petrosyan, S. Hamid', date: '2025-02', country: 'Iraq', site: 'al-saa-church', topic: 'Photogrammetry', tags: ['photogrammetry', 'accuracy', 'Mosul', 'churches'], img: PX(34929898, 900), abstract: 'Presents the three-campaign documentation of the church, comparing terrestrial and UAV image networks, and evaluating registration accuracy against total-station control. Discusses the practical constraints of working in a partially collapsed structure.' },
      { id: 'r2', title: 'Façade Survey Protocol for Dense Historic Urban Fabric: Erbil Citadel Phase I', type: 'Technical Documentation', authors: 'S. Hamid, D. Barzani', date: '2024-11', country: 'Iraq', site: 'erbil-citadel', topic: 'Survey methods', tags: ['survey', 'urban heritage', 'protocol'], img: PX(36756153, 900), abstract: 'A reproducible field protocol for façade documentation in narrow alleys: image overlap planning, lighting windows, control point placement and data naming conventions for hand-over to partner institutions.' },
      { id: 'r3', title: "Mosul's Alabaster Reliefs: Digital Recording of Carved Stone Before and After Conflict", type: 'Case Study', authors: 'N. Karim, L. Yousif', date: '2024-06', country: 'Iraq', site: 'mar-toma-church', topic: 'Conservation', tags: ['stone', 'conservation', 'Mosul', 'case study'], img: PX(19466976, 900), abstract: 'Compares sub-millimetre models of alabaster reliefs from Mar Toma and Al-Saa\'a with archival photographs to quantify loss, and proposes a workflow for conservators to annotate damage directly on 3D surfaces.' },
      { id: 'r4', title: 'Rock-Cut Vaulting at Geghard: Geometry, Acoustics and Documentation in Low Light', type: 'Research Paper', authors: 'A. Petrosyan, M. Grigoryan', date: '2024-10', country: 'Armenia', site: 'geghard', topic: 'Photogrammetry', tags: ['rock-cut', 'acoustics', 'Armenia', 'low light'], img: PX(35665429, 900), abstract: 'Documents the two rock-hewn chambers of Geghard and the medieval jamatun, addressing photogrammetry in near-dark interiors and using the resulting geometry for a preliminary acoustic simulation.' },
      { id: 'r5', title: 'Documenting Sacred Space with Consent: A Field Report from Lalish', type: 'Field Report', authors: 'D. Barzani, N. Karim', date: '2024-09', country: 'Iraq', site: 'lalish', topic: 'Ethics', tags: ['ethics', 'community', 'Yazidi', 'field report'], img: PX(16779895, 900), abstract: 'A reflective field report on negotiating documentation boundaries with a living religious community, and on what a partial record can still contribute to preservation.' },
      { id: 'r6', title: "Al-Saa'a Church — Condition Report and Digital Baseline 2025", type: 'Report', authors: BRAND.name + ' Documentation Unit', date: '2025-03', country: 'Iraq', site: 'al-saa-church', topic: 'Conservation', tags: ['report', 'condition', 'baseline'], img: PX(34699505, 900), abstract: 'Formal condition report structured around the 2025 model: structural observations, material loss mapping, and recommended monitoring points for the ongoing restoration.' },
      { id: 'r7', title: 'Teaching Photogrammetry to First-Year Architecture Students: Outcomes from Two Workshops', type: 'Study', authors: 'M. Grigoryan, S. Hamid', date: '2024-12', country: 'Armenia', site: '', topic: 'Education', tags: ['education', 'workshop', 'pedagogy'], img: PX(8369660, 900), abstract: 'Evaluates learning outcomes from workshops in Yerevan and Erbil, comparing task-based and lecture-based approaches and informing the structure of the Academy curriculum.' },
      { id: 'r8', title: 'An Open Data Model for Heritage Site Records', type: 'Technical Documentation', authors: 'S. Hamid', date: '2025-01', country: '', site: '', topic: 'Data', tags: ['data model', 'open data', 'archive'], img: PX(37750142, 900), abstract: 'Specifies the schema behind the site profiles on this platform: identifiers, spatial data, documentation status, 3D asset references and research links, designed for export to CIDOC-CRM.' }
    ];

    /* ---------------- DATA: WORKS ---------------- */
    const WORKS = [
      { id: 'clock-tower', cat: 'Games', name: 'The Hour of Mosul', type: 'Narrative exploration game', tech: 'Unity · C# · Photogrammetry assets', img: PX(34929898, 1400), imgs: [PX(34699505), PX(19466976)], short: 'Walk through Al-Saa\'a Church across three moments in time — 1880, 2013 and 2025 — guided by the people who kept its clock.', overview: 'A first-person narrative game set entirely inside the documented model of Al-Saa\'a Church. Players move between three time layers, each reconstructed from archival and photogrammetric data.', why: 'Documentation reaches researchers. We wanted the same geometry to reach a sixteen-year-old in Mosul, Yerevan or Marseille.', problem: 'Heritage games usually invent their architecture. Ours had to be faithful to the survey while remaining playable.', concept: 'The real 2025 model is the ground truth; earlier periods are shown as procedurally "healed" geometry with clear visual honesty about what is documented versus interpreted.', features: ['Three time layers built on measured geometry', 'Oral-history audio from former parishioners', 'Documentation mode revealing point-cloud origins', 'Arabic, Armenian, English and French'], results: 'Shortlisted at the 2025 Heritage in Motion awards; used in two Mosul secondary schools as a history resource.', links: { demo: '#', github: '#' } },
      { id: 'khachkar-app', cat: 'Applications', name: 'Khachkar Field Guide', type: 'Mobile cataloguing application', tech: 'Flutter · SQLite · Offline-first', img: PX(17550070, 1400), imgs: [PX(39243256), PX(36096774)], short: 'An offline app for recording Armenian cross-stones in the field: photograph, locate, describe, and sync to the archive later.', overview: 'Built for the Sevanavank catalogue and generalised for any khachkar collection, the app structures a field record into a consistent schema.', why: 'Khachkars are numerous, dispersed and undocumented. The bottleneck was never enthusiasm; it was consistency.', problem: 'Volunteers recorded stones in notebooks and phone galleries, producing data that could not be merged.', concept: 'A single guided form per stone, working without connectivity, exporting clean records with coordinates and images.', features: ['Offline-first with later sync', 'Guided typology and condition fields', 'GNSS capture with accuracy display', 'Export to CSV / GeoJSON'], results: '46 stones recorded at Sevanavank in one day by four volunteers; adopted by a student group at Yerevan State University.', links: { demo: '#', github: '#' } },
      { id: 'archive-platform', cat: 'Web Projects', name: 'Open Heritage Record', type: 'Web archive platform', tech: 'Next.js · PostGIS · Sketchfab API', img: PX(37750142, 1400), imgs: [PX(18416945), PX(36756060)], short: 'The data platform behind this website: structured site records, spatial search and embedded 3D, exportable to standard heritage schemas.', overview: 'A reference implementation of the open data model described in the Research Library, powering the archive, the map and the site profiles.', why: 'Every heritage project builds its own database and loses it when funding ends. We wanted one that could be handed over.', problem: 'No lightweight open platform existed that combined spatial records, 3D references and research links.', concept: 'A small, documented schema; a clean API; an interface that treats each site as a case study rather than a database row.', features: ['Site, asset and research entities', 'Spatial search and country modules', 'Sketchfab and IIIF integration', 'CIDOC-CRM export'], results: 'In production for this initiative; two institutions evaluating deployment.', links: { web: '#', github: '#' } },
      { id: 'nineveh-quest', cat: 'Games', name: 'Nineveh Plains: Stones & Stories', type: 'Educational puzzle game', tech: 'Godot · GDScript', img: PX(21701123, 1400), imgs: [PX(18416978)], short: 'A puzzle game for ages 10+ in which reassembling carved fragments unlocks the history of the Nineveh Plains monasteries.', overview: 'Players reassemble fragmented reliefs — based on real documented carvings — to progress through the story of the region\'s monasteries.', why: 'To connect younger audiences with heritage they may live beside but rarely enter.', problem: 'Educational games often talk down to players; the material here is genuinely complex.', concept: 'Real fragment geometry as puzzle pieces; historical text unlocked only through play.', features: ['Real fragment geometry', 'Curriculum-aligned content', 'Arabic and English'], results: 'Piloted in a Nineveh Plains school; 2026 public release planned.', links: { demo: '#' } },
      { id: 'scan-companion', cat: 'Applications', name: 'Capture Planner', type: 'Desktop planning tool', tech: 'Electron · Three.js', img: PX(33880365, 1400), imgs: [PX(25478733)], short: 'Plan a photogrammetric capture before the field visit: overlap, camera stations, lighting windows and image counts from a rough footprint.', overview: 'A desktop tool that turns a building footprint and height into a capture plan, reducing wasted field time.', why: 'Our early campaigns wasted days re-shooting. Planning is the cheapest form of accuracy.', problem: 'Students underestimate image counts and overlap needs.', concept: 'Sketch a footprint, set the camera, receive a station plan and a printable field checklist.', features: ['Station and overlap calculation', 'Sun-path lighting windows', 'Printable field checklist'], results: 'Used in all Academy field tasks.', links: { github: '#' } },
      { id: 'map-explorer', cat: 'Web Projects', name: 'Heritage Map Explorer', type: 'Interactive web map', tech: 'MapLibre · GeoJSON', img: PX(25478733, 1400), imgs: [PX(38492868)], short: 'The standalone version of the map on this site, embeddable by partner institutions with their own datasets.', overview: 'An embeddable, themeable heritage map with survey-style markers and site previews.', why: 'Partners asked to show their own documented sites in the same visual language.', problem: 'Institutional maps are often heavy, generic and closed.', concept: 'A tiny embeddable script, a GeoJSON file, and the point-cloud marker system.', features: ['Embed with one script tag', 'Light/dark theming', 'Country modules'], results: 'Deployed on this platform; embeddable release in 2026.', links: { web: '#', github: '#' } }
    ];

    /* ---------------- DATA: EVENTS ---------------- */
    const EVENTS = [
      { id: 'e1', year: 2025, date: '12–14 Sep 2025', name: 'Digital Heritage Summer School, Yerevan', location: 'Yerevan, Armenia', type: 'Workshop', img: PX(8369660, 1400), short: 'Three days of photogrammetry, archival research and storytelling with 32 students from four countries.', detail: 'Co-organised with Yerevan State University, the summer school took participants from a first field capture at Garni to a published model in seventy-two hours. The Academy curriculum was tested here before release.' },
      { id: 'e2', year: 2025, date: '3 May 2025', name: 'Heritage in Motion — Shortlist', location: 'Utrecht, Netherlands', type: 'Award', img: PX(18999478, 1400), short: '"The Hour of Mosul" shortlisted in the Games & Apps category of the European heritage multimedia awards.', detail: 'The nomination recognised the use of measured survey data as the foundation for a narrative game. Two team members presented the project to the jury and an audience of museum professionals.' },
      { id: 'e3', year: 2025, date: '14–21 Feb 2025', name: "Al-Saa'a Church — Third Campaign", location: 'Mosul, Iraq', type: 'Field trip', img: PX(27946497, 1400), short: 'Final photogrammetric campaign following the restoration works; baseline model for future monitoring.', detail: 'A week on site with the restoration team, capturing the completed works and establishing permanent control points for annual monitoring. The campaign produced the 2025 condition report.' },
      { id: 'e4', year: 2024, date: '8–10 Nov 2024', name: 'Erbil Heritage Hackathon', location: 'Erbil, Iraq', type: 'Hackathon', img: PX(15141200, 1400), short: '48-hour hackathon on open heritage data; the Capture Planner tool was born here.', detail: 'Forty participants, six teams, one shared dataset from the Citadel façade survey. The winning concept became the Capture Planner desktop tool, now used in Academy field tasks.' },
      { id: 'e5', year: 2024, date: '22 Jul – 6 Aug 2024', name: 'Armenia Field Season', location: 'Geghard · Tatev · Garni · Sevan', type: 'International programme', img: PX(36096774, 1400), short: 'Two weeks documenting four sites across Armenia with students from Yerevan and Mosul working side by side.', detail: 'The first international programme of the initiative. Mixed teams of Iraqi and Armenian students documented rock-cut, fortified and classical architecture, and returned with over 14,000 images.' },
      { id: 'e6', year: 2024, date: '16 Apr 2024', name: 'CIPA Heritage Documentation — Student Session', location: 'Online', type: 'Conference', img: PX(18999455, 1400), short: 'First conference presentation: methodology of the Mosul documentation campaigns.', detail: 'A twenty-minute paper and a poster on working in partially collapsed structures. The feedback shaped the accuracy assessment later published in the Research Library.' },
      { id: 'e7', year: 2023, date: '2–9 Oct 2023', name: "Al-Saa'a Church — Second Campaign", location: 'Mosul, Iraq', type: 'Field trip', img: PX(34929898, 1400), short: 'First campaign with UAV access; tower and roofscape documented.', detail: 'With permissions secured for aerial capture, the second campaign completed the roof and tower geometry that the first, ground-only campaign could not reach.' },
      { id: 'e8', year: 2022, date: '11–13 Mar 2022', name: 'First documentation — three afternoons', location: 'Mosul, Iraq', type: 'Field trip', img: PX(34699505, 1400), short: 'Where it started: a borrowed camera, three afternoons, one imperfect model.', detail: 'The founding moment of the initiative. The model was rough, but it was the first measurable record of the building and proved that the approach was viable with minimal equipment.' }
    ];

    /* ---------------- DATA: TEAM ---------------- */
    const TEAM = [
      { name: 'Lina Yousif', role: 'Co-founder · Documentation lead', inst: 'University of Mosul · Architecture', spec: 'Photogrammetry & survey', skills: ['Metashape', 'Total station', 'Drawing'], img: PX(15626630, 800), links: { LinkedIn: '#', ORCID: '#' }, story: 'Lina grew up three streets from Al-Saa\'a Church and never went inside until the first documentation day. She now leads every field campaign and insists that no model is published without a measured control network behind it.' },
      { name: 'Aram Petrosyan', role: 'Co-founder · 3D & research', inst: 'Yerevan State University · Geodesy', spec: '3D reconstruction, accuracy', skills: ['CloudCompare', 'Python', 'GNSS'], img: PX(31409070, 800), links: { LinkedIn: '#', GitHub: '#' }, story: 'Aram joined after seeing the first Mosul model online and writing to ask why the scale was wrong. He fixed it. He opened the Armenian chapter of the initiative and cares most about data that other researchers can actually verify.' },
      { name: 'Sara Hamid', role: 'Platform & data', inst: 'Salahaddin University · Software Eng.', spec: 'Web platforms, data models', skills: ['TypeScript', 'PostGIS', 'APIs'], img: PX(27086761, 800), links: { GitHub: '#' }, story: 'Sara built the first archive on a weekend because the team was storing models in chat threads. She designed the open data model and believes the most fragile part of any heritage project is its database.' },
      { name: 'Nour Karim', role: 'Historian & conservation', inst: 'University of Baghdad · History', spec: 'Archival research, stone', skills: ['Archives', 'Syriac', 'Condition survey'], img: PX(20001072, 800), links: { ORCID: '#' }, story: 'Nour writes the site histories and reads the inscriptions the rest of the team photographs. She came to the project through the Mosul printing press archive and stayed for the carved stone.' },
      { name: 'Dilan Barzani', role: 'Field coordination & ethics', inst: 'University of Kurdistan Hewlêr', spec: 'Community liaison, permissions', skills: ['Kurdish, Arabic, English', 'Negotiation', 'Logistics'], img: PX(8276133, 800), links: { LinkedIn: '#' }, story: 'Dilan makes the fieldwork possible: permissions, transport, and the conversations with communities that decide what gets recorded and what does not. The Lalish field report is his.' },
      { name: 'Mariam Grigoryan', role: 'Academy & education', inst: 'Yerevan State Univ. · Education', spec: 'Curriculum, workshops', skills: ['Pedagogy', 'Workshops', 'Writing'], img: PX(39207356, 800), links: { LinkedIn: '#' }, story: 'Mariam turned a folder of field notes into the Academy. She ran the first workshops in Yerevan and Erbil and measured what students actually learned — the results shaped every lesson on this site.' }
    ];

    /* ---------------- DATA: MILESTONES ---------------- */
    const MILESTONES = [
      { y: '2022', t: 'First model of Al-Saa\'a Church', d: 'Three afternoons, one borrowed camera. Proof that minimal equipment could still produce a measurable record.', img: PX(34699505, 900) },
      { y: '2023', t: 'Second Mosul campaign & Mar Toma interior', d: 'UAV access completes the tower; sub-millimetre recording of alabaster reliefs begins.', img: PX(19466976, 900) },
      { y: '2024', t: 'Armenia chapter opens', d: 'Four sites in two weeks with mixed Iraqi–Armenian student teams. First conference paper. First hackathon.', img: PX(36096774, 900) },
      { y: '2025', t: 'Academy launches · Award shortlist', d: 'Open curriculum published; "The Hour of Mosul" shortlisted at Heritage in Motion; 2025 baseline report delivered.', img: PX(8369660, 900) },
      { y: '2026', t: 'Platform hand-over pilots', d: 'Two institutions evaluate the Open Heritage Record; Zvartnots digital anastylosis study begins.', img: PX(37845037, 900) }
    ];

    /* ---------------- DATA: COURSE ---------------- */
    const COURSE = {
      id: 'dhd', title: 'Digital Heritage Documentation', img: PX(33880365, 1200), modules: [
        {
          title: 'Introduction', lessons: [
            { id: '1-1', title: 'What is digital heritage documentation?', dur: '12 min', p: ['Documentation is the act of producing a reliable record of a place: its geometry, materials, condition and meaning. Digital documentation adds measurability and shareability to that record. It does not replace conservation; it informs it.', 'In this course you will follow the full workflow used by the initiative — from a first site visit to a published, georeferenced 3D model with a written record. Every lesson ends with a practical task; do them.'], task: 'Choose a building near you that you can visit at least twice. Write three sentences: why it matters, what is at risk, and what a good record of it would contain.', quiz: { q: 'The primary purpose of heritage documentation is to…', opts: ['Create attractive images for tourism', 'Produce a reliable, measurable record that informs care', 'Replace physical conservation'], a: 1 }, res: [['PDF', 'Principles for the Recording of Monuments (ICOMOS, 1996)'], ['LINK', 'Open Heritage 3D data repository'], ['PDF', 'Course syllabus & reading list']] },
            { id: '1-2', title: 'Ethics, consent and access', dur: '15 min', p: ['A record is never neutral. Who asked for it, who owns it and who can see it are documentation decisions as important as camera settings. Before any capture, the team agrees with custodians what will be recorded, at what resolution, and how it will be published.', 'Read the Lalish field report in the Research Library for a case where those boundaries shaped method: the interior of a living sanctuary was deliberately left unrecorded.'], task: 'Draft a one-page consent note for your chosen site: what you will capture, how it will be stored, and who decides on publication.', quiz: { q: 'Which of these is a documentation decision?', opts: ['Lens focal length', 'Whether an interior is recorded at all', 'Both of the above'], a: 2 }, res: [['PDF', 'Field report: Documenting Sacred Space with Consent'], ['LINK', 'FAIR & CARE data principles']] }
          ]
        },
        {
          title: 'Heritage Documentation', lessons: [
            { id: '2-1', title: 'Reading a building before measuring it', dur: '18 min', p: ['Walk the site first without a camera. Identify construction phases, materials, damage patterns and the elements that carry meaning — an inscription, a carved doorway, a tower. This reading determines where resolution should be spent.', 'Produce a quick annotated sketch plan. It does not need to be accurate; it needs to be complete. It will become the map for your capture plan.'], task: 'Sketch a plan and one elevation of your site with annotations for materials, phases and damage.', quiz: { q: 'A sketch plan made before capture should prioritise…', opts: ['Metric accuracy', 'Completeness and annotation', 'Artistic quality'], a: 1 }, res: [['PDF', 'Annotated sketch examples from Al-Saa\'a Church'], ['LINK', 'Historic England: Understanding Historic Buildings']] },
            { id: '2-2', title: 'Archives, oral history and the written record', dur: '14 min', p: ['Digital models gain meaning through context. Newspapers, mission records, land registers, family photographs and interviews all locate a building in time. The clock at Al-Saa\'a Church, for instance, is dated by a French diplomatic letter, not by the building itself.', 'Structure your research as a timeline with sources. Note uncertainty honestly.'], task: 'Find three independent sources about your site and place them on a timeline with citations.', quiz: { q: 'Oral history interviews should be…', opts: ['Treated as exact dates', 'Recorded with consent and cited like any other source', 'Avoided in documentation'], a: 1 }, res: [['LINK', 'Oral History Association — best practices'], ['PDF', 'Source citation template']] }
          ]
        },
        {
          title: 'Photogrammetry', lessons: [
            { id: '3-1', title: 'How structure-from-motion works', dur: '20 min', p: ['Photogrammetry reconstructs 3D geometry from overlapping photographs by identifying matching features across images and solving for camera positions and point locations simultaneously. The result is scale-free until you introduce known measurements.', 'Understanding this explains every field rule: overlap, sharpness, consistent lighting and avoiding reflective or textureless surfaces.'], task: 'Photograph a small object (a carved stone, a shoe) with 30+ images following the overlap rules, and note which surfaces you expect to fail.', quiz: { q: 'Why does photogrammetry struggle with plain white walls?', opts: ['Too much light', 'No distinctive features to match between images', 'Cameras cannot focus on white'], a: 1 }, res: [['VIDEO', 'SfM explained in 6 minutes'], ['LINK', 'Metashape documentation']] },
            { id: '3-2', title: 'Cameras, lenses and settings', dur: '16 min', p: ['Any camera can work; a consistent one works better. Fix focal length, use aperture priority around f/8, keep ISO low and shutter fast enough to avoid blur. Turn off image stabilisation for tripod work and shoot RAW when storage allows.', 'Drones follow the same rules with added attention to overlap between flight lines and to oblique coverage for façades.'], task: 'Write your camera preset card: mode, aperture, ISO ceiling, minimum shutter, focus behaviour.', quiz: { q: 'A fixed focal length is preferred because…', opts: ['Zoom lenses are heavier', 'Camera calibration remains constant across images', 'It looks more professional'], a: 1 }, res: [['PDF', 'Camera preset card template'], ['LINK', 'UAV overlap calculator']] }
          ]
        },
        {
          title: 'Data Collection', lessons: [
            { id: '4-1', title: 'Planning the capture', dur: '15 min', p: ['Good capture is planned, not improvised. From your sketch plan, define camera stations at 60–80% overlap, plan rings at multiple heights, and identify lighting windows when façades are evenly lit.', 'Use the Capture Planner tool from Digital Works to generate a station plan and checklist.'], task: 'Produce a capture plan for one façade: stations, heights, estimated image count, time window.', quiz: { q: 'Recommended forward overlap for close-range photogrammetry is around…', opts: ['20–30%', '60–80%', '100%'], a: 1 }, res: [['APP', 'Capture Planner (Digital Works)'], ['PDF', 'Field checklist']] },
            { id: '4-2', title: 'Control, scale and georeferencing', dur: '18 min', p: ['Without control, a model is a shape. With control, it is a measurement. Place coded targets or mark natural points, measure them with tape, total station or GNSS, and record everything in a control sheet.', 'At minimum, measure several distances between clearly identifiable points to scale the model. For georeferencing, GNSS positions on at least three well-distributed points are needed.'], task: 'Establish and measure at least four control points on your site; produce a control sheet with photos of each.', quiz: { q: 'The minimum to give a model correct scale is…', opts: ['One known distance', 'A drone', 'A laser scanner'], a: 0 }, res: [['PDF', 'Control sheet template'], ['LINK', 'Registration accuracy explained']] }
          ]
        },
        {
          title: '3D Reconstruction', lessons: [
            { id: '5-1', title: 'Processing: from images to dense cloud', dur: '22 min', p: ['Import, align, inspect. Reject blurred images before alignment. Check the sparse cloud for doubled surfaces (bad alignment) before building the dense cloud. Apply control points and check residuals — anything above a few millimetres for close-range work needs investigation.', 'Processing is iterative. Keep a log: what settings, what result, what changed.'], task: 'Process your capture to a dense cloud; record alignment statistics and control residuals in a processing log.', quiz: { q: 'A doubled surface in the sparse cloud usually indicates…', opts: ['Alignment error', 'Too many images', 'Correct result'], a: 0 }, res: [['PDF', 'Processing log template'], ['VIDEO', 'Alignment troubleshooting walkthrough']] },
            { id: '5-2', title: 'Mesh, texture and web optimisation', dur: '18 min', p: ['Build the mesh at a resolution appropriate to purpose — archival meshes can be tens of millions of faces; web meshes should stay near one million with high-quality textures. Clean floating geometry and fill holes only where they are genuinely artefacts.', 'Export an archival copy (OBJ/PLY with full resolution) and a web copy (GLB), and document both.'], task: 'Produce an archival mesh and a web-optimised version; upload the web version to Sketchfab with a complete description.', quiz: { q: 'The web copy of a model should prioritise…', opts: ['Maximum face count', 'Balanced size and visual fidelity', 'No textures'], a: 1 }, res: [['LINK', 'Sketchfab publishing guidelines'], ['PDF', 'Export settings sheet']] }
          ]
        },
        {
          title: 'Documentation & Preservation', lessons: [
            { id: '6-1', title: 'Writing the technical record', dur: '14 min', p: ['A model without metadata is an orphan. Record dates, equipment, image counts, software versions, accuracy statistics, coordinate systems, licence and people. Use the site profile structure on this platform as a template.', 'Write for a reader in twenty years who has never met you.'], task: 'Complete a full technical record for your site using the template, and write a 300-word site history from your sources.', quiz: { q: 'Which item is essential metadata?', opts: ['Weather mood', 'Coordinate reference system', 'Team lunch'], a: 1 }, res: [['PDF', 'Technical record template'], ['LINK', 'Open data model specification']] },
            { id: '6-2', title: 'Archiving, licensing and sharing', dur: '12 min', p: ['Store archival data in at least two places, one institutional. Choose an open licence where custodians agree; CC BY-NC is the initiative\'s default. Publish the web model with a link back to the full record.', 'Congratulations — by the end of this task you will have produced a complete digital heritage record.'], task: 'Deposit your archival package (images, cloud, mesh, record) in a repository and publish the web model with licence and attribution.', quiz: { q: 'The initiative\'s default licence for published models is…', opts: ['All rights reserved', 'CC BY-NC 4.0', 'Public domain only'], a: 1 }, res: [['LINK', 'Zenodo — research data repository'], ['PDF', 'Course completion certificate (self-issued)']] }
          ]
        }
      ]
    };
    const ALL_LESSONS = COURSE.modules.flatMap((m, mi) => m.lessons.map(l => ({ ...l, mi, mtitle: m.title })));

    /* ---------------- NAVIGATION (modular) ---------------- */
    const NAV = [
      { label: 'Explore', href: '#/heritage', desc: 'The heritage archive: documented sites, an interactive map and every 3D model in one place.', img: PX(35665429, 600), imgCap: 'Geghard Monastery — rock-cut chambers, 2024', items: [['Heritage Sites', '#/heritage', 'Archive of documented places'], ['Heritage Map', '#/map', 'Iraq & Armenia, expanding'], ['3D Archive', '#/heritage?3d=1', 'Sites with interactive models']] },
      { label: 'Research', href: '#/research', desc: 'Papers, reports, case studies and technical documentation — all openly accessible.', img: PX(37750142, 600), imgCap: 'Research Library', items: [['Research Library', '#/research', 'All publications'], ['Reports', '#/research?type=Report', 'Condition & field reports'], ['Case Studies', '#/research?type=Case%20Study', 'Applied documentation'], ['Documentation', '#/research?type=Technical%20Documentation', 'Protocols & data models']] },
      { label: 'Learn', href: '#/academy', desc: 'A structured, open academy for digital heritage documentation.', img: PX(8369660, 600), imgCap: 'Summer School, Yerevan 2025', items: [['Academy', '#/academy', 'Overview'], ['Learning Paths', '#/academy', 'Structured progression'], ['Courses', '#/academy/lesson/1-1', 'Start: Digital Heritage Documentation']] },
      { label: 'Experiences', href: '#/events', desc: 'Events, competitions and the digital works the team produces.', img: PX(18999478, 600), imgCap: 'Heritage in Motion, 2025', items: [['Events', '#/events', 'Timeline of fieldwork & events'], ['Games', '#/works?tab=Games', 'Historical & cultural games'], ['Applications', '#/works?tab=Applications', 'Field & cultural apps'], ['Web Projects', '#/works?tab=Web%20Projects', 'Platforms & tools']] },
      { label: 'About', href: '#/story', desc: 'How the initiative began, who is behind it, and who we work with.', img: PX(27946497, 600), imgCap: 'Fieldwork', items: [['Our Story', '#/story', 'Origins & vision'], ['Team', '#/team', 'People & personal stories'], ['Partners', '#/story#partners', 'Institutions']] }
    ];
    document.getElementById('navLinks').innerHTML = NAV.map(n => `<li><a href="${n.href}" data-nav="${n.label}">${n.label}<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 3.5l3 3 3-3"/></svg></a>
  <div class="mega"><div class="col"><h5>${n.label}</h5>${n.items.map(i => `<a href="${i[1]}">${i[0]}<small>${i[2]}</small></a>`).join('')}</div>
  <div class="col"><h5>About this section</h5><p class="desc">${n.desc}</p><a href="${n.href}" class="link-u" style="margin-top:8px">Open ${n.label} <span class="arr">→</span></a></div>
  <a href="${n.href}" class="feat"><img src="${n.img}" alt="" loading="lazy"><span>${n.imgCap}</span></a></div></li>`).join('');

    /* ---------------- THEME ---------------- */
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('hb_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.dataset.theme = savedTheme;
    document.getElementById('themeToggle').addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('hb_theme', root.dataset.theme);
      updateTiles();
    });

    /* ---------------- LOADER (point-cloud reconstruction) ---------------- */
    (function loader() {
      const el = document.getElementById('loader'), cv = document.getElementById('loaderCanvas'), meta = document.getElementById('loaderMeta');
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) { el.classList.add('done'); onLoaded(); return; }
      const ctx = cv.getContext('2d'); let W, H; const N = 640; const pts = [];
      const resize = () => { W = cv.width = innerWidth * devicePixelRatio; H = cv.height = innerHeight * devicePixelRatio; }; resize();
      const cx = () => W / 2, cy = () => H * 0.5, R = () => Math.min(W, H) * 0.28;
      for (let i = 0; i < N; i++) {
        const t = Math.random(); let tx, ty;
        if (i < N * 0.7) { const a = Math.PI + t * Math.PI; tx = cx() + Math.cos(a) * R() * (0.85 + Math.random() * 0.3); ty = cy() + Math.sin(a) * R() * (0.85 + Math.random() * 0.3) + R() * 0.2; }
        else { const side = Math.random() < .5 ? -1 : 1; tx = cx() + side * R() * (0.85 + Math.random() * 0.3); ty = cy() + R() * 0.2 + Math.random() * R() * 0.7; }
        pts.push({ x: Math.random() * W, y: Math.random() * H, tx, ty, d: Math.random() * 0.5, clay: Math.random() < 0.06 });
      }
      const t0 = performance.now(); const dur = 1500;
      const ease = t => 1 - Math.pow(1 - t, 4);
      function frame(now) {
        const p = Math.min(1, (now - t0) / dur); ctx.clearRect(0, 0, W, H);
        let settled = 0;
        for (const q of pts) {
          const lp = Math.max(0, Math.min(1, (p - q.d * 0.5) / (1 - q.d * 0.5))); const e = ease(lp); if (lp > 0.98) settled++;
          const x = q.x + (q.tx - q.x) * e, y = q.y + (q.ty - q.y) * e; ctx.fillStyle = q.clay ? 'rgba(198,95,59,.95)' : `rgba(222,211,192,${0.25 + e * 0.6})`; ctx.beginPath(); ctx.arc(x, y, (1 + e * 0.6) * devicePixelRatio, 0, 7); ctx.fill();
        }
        meta.textContent = `Reconstructing · ${String(settled).padStart(3, '0')} / ${N} points`;
        if (p < 1) requestAnimationFrame(frame); else { meta.textContent = 'Reconstruction complete'; setTimeout(() => { el.classList.add('done'); onLoaded(); }, 350); }
      }
      requestAnimationFrame(frame);
    })();
    function onLoaded() { countUp(); }

    /* ---------------- HERO POINT CLOUD (subtle 3D) ---------------- */
    (function heroCloud() {
      const cv = document.getElementById('heroCloud'); if (!cv) return; const ctx = cv.getContext('2d');
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      let W, H; const pts = []; const N = 900;
      for (let i = 0; i < N; i++) {
        const r = Math.random(); let x, y, z;
        if (i < N * 0.55) { const a = Math.PI * (0.05 + Math.random() * 0.9); const rr = 1 + (Math.random() - .5) * 0.18; x = Math.cos(a) * rr; y = -Math.sin(a) * rr * 0.9; z = (Math.random() - .5) * 0.5; }
        else { const s = Math.random() < .5 ? -1 : 1; x = s * (1 + (Math.random() - .5) * 0.18); y = Math.random() * 1.1; z = (Math.random() - .5) * 0.5; }
        pts.push({ x, y, z, c: Math.random() < 0.05 });
      }
      const resize = () => { W = cv.width = cv.clientWidth * devicePixelRatio; H = cv.height = cv.clientHeight * devicePixelRatio; }; resize(); addEventListener('resize', resize);
      let mx = 0, my = 0; addEventListener('mousemove', e => { mx = (e.clientX / innerWidth - .5); my = (e.clientY / innerHeight - .5); }, { passive: true });
      let rot = 0; function frame() {
        if (document.body.dataset.page !== 'home') { requestAnimationFrame(frame); return; }
        ctx.clearRect(0, 0, W, H); rot += reduce ? 0 : 0.0016; const ry = rot + mx * 0.4, rx = 0.25 + my * 0.2; const S = Math.min(W, H) * 0.33; const ox = W * 0.55, oy = H * 0.52;
        for (const p of pts) {
          let x = p.x * Math.cos(ry) + p.z * Math.sin(ry), z = -p.x * Math.sin(ry) + p.z * Math.cos(ry); let y = p.y * Math.cos(rx) - z * Math.sin(rx); z = p.y * Math.sin(rx) + z * Math.cos(rx);
          const per = 1 / (1 + z * 0.35); const X = ox + x * S * per, Y = oy + y * S * per; const a = 0.15 + (z + 0.8) * 0.35;
          ctx.fillStyle = p.c ? `rgba(198,95,59,${Math.min(1, a + .3)})` : `rgba(222,211,192,${a})`; ctx.beginPath(); ctx.arc(X, Y, (0.9 + per * 0.9) * devicePixelRatio, 0, 7); ctx.fill();
        }
        if (!reduce) requestAnimationFrame(frame);
      } frame();
    })();

    /* ---------------- COUNT UP ---------------- */
    let counted = false;
    function countUp() { if (counted) return; counted = true; document.querySelectorAll('[data-count]').forEach(el => { const end = +el.dataset.count; const t0 = performance.now(); const step = n => { const p = Math.min(1, (n - t0) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }); }

    /* ---------------- HERO BG ---------------- */
    const hm = document.getElementById('hero-media'); hm.style.backgroundImage = `url('${hm.dataset.bg}')`;

    /* ---------------- NAV SCROLL ---------------- */
    const nav = document.getElementById('nav'); let forceCompact = false;
    addEventListener('scroll', () => { nav.classList.toggle('compact', forceCompact || scrollY > 40); }, { passive: true });
    setTimeout(() => { const l = document.getElementById('loader'); if (!l.classList.contains('done')) { l.classList.add('done'); onLoaded(); } }, 3200);
    (function () { const wm = document.querySelector('.f-wm'); wm.classList.remove('brand-name'); wm.textContent = BRAND.name.split(' ')[0]; })();
    document.getElementById('burger').addEventListener('click', () => { const l = document.querySelector('.nav-links'); l.style.display = l.style.display === 'flex' ? 'none' : 'flex'; l.style.flexDirection = 'column'; l.style.position = 'absolute'; l.style.top = '64px'; l.style.left = '0'; l.style.right = '0'; l.style.background = 'var(--surface)'; l.style.padding = '16px'; l.style.color = 'var(--ink)'; });

    /* ---------------- REVEAL ---------------- */
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    function observeReveals(scope = document) { scope.querySelectorAll('.reveal:not(.in), .tl-item:not(.in)').forEach(el => io.observe(el)); }

    /* ---------------- RENDER HELPERS ---------------- */
    const statusTag = s => `<span class="tag ${s === 'Documented' ? 'fill' : s === 'In progress' ? 'accent' : ''}">${s === 'In progress' ? '<span class="dot"></span>' : ''}${s}</span>`;
    const siteCard = (s, cls, i) => `<a href="#/site/${s.id}" class="fcard ${cls} hover-zoom reveal img-reveal">
  <div class="img-wrap"><img src="${s.img}" alt="${esc(s.name)}" loading="lazy"><div class="cap">${esc(s.location)} · ${s.period}</div></div>
  <div class="tags">${s.has3d ? '<span class="tag on-img">3D</span>' : ''}<span class="tag on-img">${s.country}</span></div>
  <div class="meta"><div><span class="idx">${String(i + 1).padStart(2, '0')}</span><h3 class="serif" style="margin-top:6px">${esc(s.name)}</h3><div class="loc">${esc(s.location)} — ${s.type}</div>${cls === 'big' || cls.startsWith('wide') ? `<p>${esc(s.short)}</p>` : ''}</div><div class="status">${statusTag(s.status)}</div></div></a>`;

    /* HOME */
    (function renderHome() {
      const feat = ['al-saa-church', 'geghard', 'erbil-citadel', 'tatev', 'lalish'].map(siteById);
      document.getElementById('featGrid').innerHTML = siteCard(feat[0], 'big', 0) + siteCard(feat[1], 'tall', 1) + siteCard(feat[2], 'small', 2) + siteCard(feat[3], 'wideA', 3) + siteCard(feat[4], 'wideB', 4);
      const work = [['Digital documentation', 'Systematic photographic, metric and written recording of heritage sites — planned with custodians, executed with survey control.', ['Photogrammetry', 'UAV', 'GNSS', 'Total station']], ['3D preservation', 'Archival-grade meshes and point clouds, published as open, web-ready models with full technical metadata.', ['Dense clouds', 'Meshing', 'Sketchfab', 'Open formats']], ['Research', 'Papers, reports and case studies that make the documentation legible to conservators, historians and institutions.', ['Condition reports', 'Accuracy studies', 'Archival research']], ['Cultural technology', 'Games, applications and platforms that carry documented heritage to audiences beyond the archive.', ['Unity', 'Godot', 'Web platforms', 'Open data']]];
      document.getElementById('workList').innerHTML = work.map((w, i) => `<div class="work-row reveal"><div class="no">0${i + 1}</div><h3 class="serif">${w[0]}</h3><p>${w[1]}</p><div class="tools">${w[2].map(t => `<span class="tag">${t}</span>`).join('')}</div></div>`).join('');
      document.getElementById('homeResearch').innerHTML = ['r1', 'r4', 'r3', 'r8'].map(id => RESEARCH.find(r => r.id === id)).map(r => `<a href="#/research?open=${r.id}" class="res-row reveal"><div class="d">${fmtDate(r.date)}<br>${r.country || 'Cross-site'}</div><div><div class="rt">${esc(r.title)}</div><div class="au">${esc(r.authors)}</div></div><div class="ty"><span class="tag">${r.type}</span><small>${r.site ? siteById(r.site).name : 'Platform'}</small></div><div class="go">→</div></a>`).join('');
      document.getElementById('homeProjects').innerHTML = ['clock-tower', 'khachkar-app', 'archive-platform'].map(id => WORKS.find(w => w.id === id)).map((w, i) => `<a href="#/works/case/${w.id}" class="pcard hover-zoom reveal img-reveal" style="grid-column:${i === 0 ? '1/8' : i === 1 ? '8/13' : '1/6'}"><div class="img-wrap" style="aspect-ratio:${i === 0 ? '16/9' : i === 1 ? '4/4.6' : '16/10'}"><img src="${w.img}" alt="${esc(w.name)}" loading="lazy"></div><div class="meta"><div class="row"><span class="tag accent">${w.cat}</span><span class="tech">${w.tech.split('·')[0]}</span></div><h3 class="serif">${esc(w.name)}</h3><p>${esc(w.short)}</p></div></a>`).join('');
      document.getElementById('homeEvents').innerHTML = EVENTS.slice(0, 3).map((e, i) => `<div class="ev-item reveal" data-delay="${i}" onclick="openEvent('${e.id}')" style="cursor:pointer"><span class="date">${e.date} · ${e.type}</span><h3 class="serif">${esc(e.name)}</h3><div class="img-wrap hover-zoom"><img src="${e.img}" alt="" loading="lazy"></div><p>${esc(e.short)}</p><span class="link-u">Read more <span class="arr">→</span></span></div>`).join('');
      document.getElementById('homeTeam').innerHTML = TEAM.slice(0, 4).map((m, i) => `<a href="#/team" class="member hover-zoom reveal img-reveal" data-delay="${i}"><div class="img-wrap"><img src="${m.img}" alt="${esc(m.name)}" loading="lazy"></div><h4 class="serif">${m.name}</h4><div class="role">${m.role}</div><div class="inst">${m.inst}</div></a>`).join('');
    })();
    function fmtDate(d) { const [y, m] = d.split('-'); return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][+m - 1] + ' ' + y; }

    /* HERITAGE ARCHIVE */
    const H = { q: '', country: '', type: '', period: '', status: '', d3: false, gal: false };
    (function initArchive() {
      const types = [...new Set(SITES.map(s => s.type))], periods = [...new Set(SITES.map(s => s.period))];
      document.getElementById('hType').innerHTML += types.map(t => `<option>${t}</option>`).join('');
      document.getElementById('hPeriod').innerHTML += periods.map(t => `<option>${t}</option>`).join('');
      const bind = (id, k) => document.getElementById(id).addEventListener('input', e => { H[k] = e.target.value; renderArchive(); });
      bind('hSearch', 'q'); bind('hCountry', 'country'); bind('hType', 'type'); bind('hPeriod', 'period'); bind('hStatus', 'status');
      document.getElementById('h3d').addEventListener('click', e => { H.d3 = !H.d3; e.target.classList.toggle('active', H.d3); renderArchive(); });
      document.getElementById('hGal').addEventListener('click', e => { H.gal = !H.gal; e.target.classList.toggle('active', H.gal); renderArchive(); });
    })();
    function renderArchive() {
      const q = H.q.toLowerCase();
      const list = SITES.filter(s => (!q || [s.name, s.location, s.type, s.period, s.short].join(' ').toLowerCase().includes(q)) && (!H.country || s.country === H.country) && (!H.type || s.type === H.type) && (!H.period || s.period === H.period) && (!H.status || s.status === H.status) && (!H.d3 || s.has3d) && (!H.gal || s.gallery));
      document.getElementById('hCount').textContent = `${list.length} of ${SITES.length} sites`;
      document.getElementById('archGrid').innerHTML = list.length ? list.map(s => `<a href="#/site/${s.id}" class="acard hover-zoom reveal img-reveal"><div class="img-wrap"><img src="${s.img}" alt="${esc(s.name)}" loading="lazy"><div class="cap">${s.period}</div></div><div class="tags">${s.has3d ? '<span class="tag on-img">3D</span>' : ''}${s.gallery ? '<span class="tag on-img">Gallery</span>' : ''}</div><div class="meta"><div><h3 class="serif">${esc(s.name)}</h3><div class="loc">${esc(s.location)} · ${s.country} — ${s.type}</div><p>${esc(s.short)}</p></div><div class="st"><b>${s.status}</b>${s.has3d ? '3D model' : 'No 3D yet'}<br>${s.period}</div></div></a>`).join('') : '<div class="empty">No sites match these filters.</div>';
      observeReveals(document.getElementById('page-heritage'));
    }

    /* SITE PROFILE */
    function renderSite(id) {
      const s = siteById(id) || SITES[0]; const v = document.getElementById('siteView');
      const rel = SITES.filter(x => x.id !== s.id && (x.country === s.country || x.type === s.type)).slice(0, 3);
      const research = RESEARCH.filter(r => r.site === s.id);
      const toc = [['story', 'The Story'], s.has3d ? ['3d', 'Explore in 3D'] : null, ['doc', 'Documentation'], ['tech', 'Technical Record'], s.gallery ? ['gallery', 'Visual Archive'] : null, s.video ? ['video', 'Video'] : null, research.length ? ['research', 'Research'] : null, ['related', 'Related Sites']].filter(Boolean);
      v.innerHTML = `
  <div class="p-hero tall"><div class="bg" style="background-image:url('${s.imgs[0]}')"></div><div class="veil"></div>
    <div class="wrap"><a href="#/heritage" class="link-u" style="color:#A69C88;margin-bottom:26px">← Heritage Archive</a><br>
      <span class="eyebrow">${s.type} · ${s.period}</span><h1 class="serif display-xl">${esc(s.name)}</h1>
      <p class="lead">${esc(s.short)}</p>
      <div class="meta-line"><div>Location<b>${esc(s.location)}</b></div><div>Country<b>${s.country}</b></div><div>Status<b>${s.status}</b></div><div>3D model<b>${s.has3d ? 'Available' : 'Not yet'}</b></div><div>Coordinates<b class="mono" style="font-size:12px">${s.lat.toFixed(4)}° N, ${s.lng.toFixed(4)}° E</b></div></div>
    </div></div>
  <div class="site-toc"><div class="wrap">${toc.map(t => `<a href="javascript:void(0)" data-to="s-${t[0]}">${t[1]}</a>`).join('')}</div></div>
  <div class="wrap section" id="s-story"><div class="grid-12"><div class="reveal" style="grid-column:1/5"><span class="eyebrow">The Story</span><h2 class="serif display-m" style="margin:18px 0 28px">${s.alt ? esc(s.alt) : 'Historical background'}</h2><div class="side-note"><b>Period</b>${s.period}${s.year ? '<br>Built ' + s.year : ''}</div><div class="side-note" style="margin-top:20px"><b>Documented by</b>${BRAND.name} Documentation Unit<br>${s.tech['Documentation date'] || s.tech['Documentation dates'] || '—'}</div></div><div class="prose reveal" data-delay="1" style="grid-column:6/12">${s.story.map((p, i) => `<p class="${i === 0 ? 'dropcap' : ''}">${esc(p)}</p>`).join('')}</div></div></div>
  ${s.has3d ? `<div class="viewer-band section" id="s-3d"><div class="wrap"><div class="section-head" style="margin-bottom:36px"><div class="l reveal"><span class="eyebrow">Explore in 3D</span><h2 class="serif display-l">Turn it. Measure it.<br>Look <i>closer</i>.</h2></div><div class="r reveal" data-delay="1"><p style="margin:0;opacity:.75;font-weight:300">An interactive model produced from ${s.tech['Images processed'] || 'field'} photographs. Drag to rotate, scroll to zoom, double-click to focus. The web model is decimated; the archival mesh is available on request.</p></div></div>
    <div class="viewer-frame reveal"><span class="viewer-corner tl"></span><span class="viewer-corner tr"></span><span class="viewer-corner bl"></span><span class="viewer-corner br"></span><iframe title="${esc(s.name)} — 3D model" data-sketchfab="${s.sketchfab}" src="https://sketchfab.com/models/${s.sketchfab}/embed?autostart=0&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_watermark_link=0&dnt=1" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen loading="lazy"></iframe></div>
    <div class="callouts reveal"><div><div class="k">Dense cloud</div><div class="v">${s.tech['Dense cloud'] || '—'}</div></div><div><div class="k">Registration</div><div class="v">${s.tech['Registration RMSE'] || '—'}<small>RMSE</small></div></div><div><div class="k">Capture</div><div class="v" style="font-size:18px">${s.tech['Capture method'] || '—'}</div></div><div><div class="k">Licence</div><div class="v" style="font-size:18px">${s.tech['Licence'] || 'CC BY-NC 4.0'}</div></div></div></div></div>` : ''}
  <div class="wrap section" id="s-doc"><div class="section-head"><div class="l reveal"><span class="eyebrow">Documentation</span><h2 class="serif display-l">How the record<br>was made</h2></div><div class="r reveal" data-delay="1"><p class="body-muted" style="margin:0;font-weight:300">The documentation follows the five-stage method taught in the Academy: planning, capture, control, processing and record. Each stage is logged and archived with the model.</p><a href="#/academy" class="link-u">Learn this method <span class="arr">→</span></a></div></div>
    <div class="method-steps reveal">${[['Planning', 'Site reading, sketch plan, consent with custodians, capture plan from footprint and lighting windows.'], ['Photogrammetry', 'Overlapping image networks at multiple heights; UAV coverage for roofs and towers where permitted.'], ['Data collection', 'Coded targets and natural points measured with total station and GNSS for scale and georeference.'], ['Processing', 'Alignment, control residual checks, dense cloud, mesh and texture; iterative processing log kept.'], ['Preservation', 'Archival package deposited in two locations; web model published with full technical record.']].map((m, i) => `<div><span class="n">0${i + 1}</span><h4 class="serif">${m[0]}</h4><p>${m[1]}</p></div>`).join('')}</div></div>
  <div class="wrap section-tight" id="s-tech"><div class="section-head"><div class="l reveal"><span class="eyebrow">Technical Record</span><h2 class="serif display-m">Metadata</h2></div></div><div class="tech-table reveal">${Object.entries(s.tech).map(([k, val]) => `<div><span>${k}</span><span>${val}</span></div>`).join('')}</div></div>
  ${s.gallery ? `<div class="wrap section" id="s-gallery"><div class="section-head"><div class="l reveal"><span class="eyebrow">Visual Archive</span><h2 class="serif display-l">Photographs from<br>the campaigns</h2></div></div><div class="gallery">${[...s.imgs, ...s.imgs].slice(0, 6).map((im, i) => `<div class="g img-wrap hover-zoom reveal img-reveal" data-delay="${i % 3}"><img src="${im}" alt="" loading="lazy"><div class="cap">${esc(s.name)} · Frame ${String(i + 1).padStart(3, '0')}</div></div>`).join('')}</div></div>` : ''}
  ${s.video ? `<div class="wrap section-tight" id="s-video"><div class="section-head"><div class="l reveal"><span class="eyebrow">Video</span><h2 class="serif display-m">Documentation film</h2></div></div><div class="img-wrap reveal" style="aspect-ratio:21/9;border-radius:var(--radius);display:grid;place-items:center;cursor:pointer" onclick="this.innerHTML='<iframe src=&quot;https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&quot; style=&quot;position:absolute;inset:0;width:100%;height:100%;border:0&quot; allow=&quot;autoplay; fullscreen&quot;></iframe>'"><img src="${s.imgs[1]}" alt="" style="position:absolute;inset:0"><div style="position:relative;z-index:2;width:84px;height:84px;border-radius:50%;border:1px solid rgba(233,225,209,.7);display:grid;place-items:center;color:#E9E1D1;backdrop-filter:blur(6px)"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div></div>` : ''}
  ${research.length ? `<div class="wrap section-tight" id="s-research"><div class="section-head"><div class="l reveal"><span class="eyebrow">Research</span><h2 class="serif display-m">Published on this site</h2></div><div class="r reveal" data-delay="1"><a href="#/research?site=${s.id}" class="link-u">All research for ${esc(s.name)} <span class="arr">→</span></a></div></div><div>${research.map(r => `<a href="#/research?open=${r.id}" class="res-row reveal"><div class="d">${fmtDate(r.date)}</div><div><div class="rt">${esc(r.title)}</div><div class="au">${esc(r.authors)}</div></div><div class="ty"><span class="tag">${r.type}</span></div><div class="go">→</div></a>`).join('')}</div></div>` : ''}
  <div class="wrap section" id="s-related"><div class="section-head"><div class="l reveal"><span class="eyebrow">Related Sites</span><h2 class="serif display-m">Continue exploring</h2></div></div><div class="related">${rel.map((r, i) => `<a href="#/site/${r.id}" class="pcard hover-zoom reveal img-reveal" data-delay="${i}"><div class="img-wrap" style="aspect-ratio:4/3"><img src="${r.img}" alt="" loading="lazy"></div><div class="meta"><div class="row"><span class="tag">${r.country}</span><span class="tech">${r.type}</span></div><h3 class="serif">${esc(r.name)}</h3><p>${esc(r.location)}</p></div></a>`).join('')}</div></div>`;
      v.querySelectorAll('[data-to]').forEach(a => a.addEventListener('click', () => { const t = document.getElementById(a.dataset.to); if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 120, behavior: 'smooth' }); }));
      // toc active tracking
      const secs = toc.map(t => document.getElementById('s-' + t[0])); const links = [...v.querySelectorAll('[data-to]')];
      const tio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { links.forEach(l => l.classList.toggle('cur', l.dataset.to === e.target.id)); } }), { rootMargin: '-30% 0px -60% 0px' }); secs.forEach(sc => sc && tio.observe(sc));
      observeReveals(v);
    }

    /* RESEARCH LIBRARY */
    const R = { q: '', type: '', country: '', site: '', topic: '', sort: 'new' };
    (function initLib() {
      const types = [...new Set(RESEARCH.map(r => r.type))], topics = [...new Set(RESEARCH.map(r => r.topic))];
      document.getElementById('rType').innerHTML += types.map(t => `<option>${t}</option>`).join('');
      document.getElementById('rTopic').innerHTML += topics.map(t => `<option>${t}</option>`).join('');
      document.getElementById('rSite').innerHTML += SITES.filter(s => RESEARCH.some(r => r.site === s.id)).map(s => `<option value="${s.id}">${s.name}</option>`).join('');
      const bind = (id, k) => document.getElementById(id).addEventListener('input', e => { R[k] = e.target.value; renderLib(); });
      bind('rSearch', 'q'); bind('rType', 'type'); bind('rCountry', 'country'); bind('rSite', 'site'); bind('rTopic', 'topic'); bind('rSort', 'sort');
    })();
    function renderLib() {
      const q = R.q.toLowerCase();
      let list = RESEARCH.filter(r => (!q || [r.title, r.authors, r.abstract, r.tags.join(' ')].join(' ').toLowerCase().includes(q)) && (!R.type || r.type === R.type) && (!R.country || r.country === R.country) && (!R.site || r.site === R.site) && (!R.topic || r.topic === R.topic));
      list.sort((a, b) => R.sort === 'az' ? a.title.localeCompare(b.title) : R.sort === 'old' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
      document.getElementById('rCount').textContent = `${list.length} of ${RESEARCH.length} items`;
      const f = list[0];
      document.getElementById('libFeature').innerHTML = f ? `<div class="lib-feature hover-zoom reveal img-reveal" onclick="openResearch('${f.id}')" style="cursor:pointer"><div class="img-wrap"><img src="${f.img}" alt=""><div class="cap">Featured · ${f.type}</div></div><div><span class="eyebrow">Featured · ${f.type}</span><h3 class="serif">${esc(f.title)}</h3><p>${esc(f.abstract)}</p><div class="lib-meta"><div>Authors<b>${esc(f.authors)}</b></div><div>Date<b>${fmtDate(f.date)}</b></div><div>Site<b>${f.site ? siteById(f.site).name : '—'}</b></div></div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:18px">${f.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div><span class="btn btn-ghost" style="margin-top:28px">Read / View Report <span class="arr">→</span></span></div></div>` : '<div class="empty">No research matches these filters.</div>';
      document.getElementById('libList').innerHTML = list.slice(1).map(r => `<div class="lib-row reveal" onclick="openResearch('${r.id}')"><div class="img-wrap cov"><img src="${r.img}" alt="" loading="lazy"></div><div><h3 class="serif">${esc(r.title)}</h3><div class="au">${esc(r.authors)}</div><div class="tg">${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div></div><div class="ab">${esc(r.abstract)}</div><div class="mt"><b>${r.type}</b><br>${fmtDate(r.date)}<br>${r.country || 'Cross-site'}<br>${r.site ? siteById(r.site).name : 'Platform'}</div><div class="go">→</div></div>`).join('');
      observeReveals(document.getElementById('page-research'));
    }
    function openResearch(id) {
      const r = RESEARCH.find(x => x.id === id); const s = r.site ? siteById(r.site) : null;
      openOverlay(`<div class="hero"><img src="${r.img}" alt=""></div><div class="bd"><span class="eyebrow">${r.type} · ${fmtDate(r.date)}</span><h2 class="serif display-m" style="margin:16px 0 10px">${esc(r.title)}</h2><p class="body-muted">${esc(r.authors)}</p>
  <div class="kv"><div>Topic<b>${r.topic}</b></div><div>Location<b>${r.country || 'Cross-site'}</b></div><div>Heritage site<b>${s ? `<a href="#/site/${s.id}" class="link-u" onclick="closeOverlay()">${esc(s.name)}</a>` : '—'}</b></div></div>
  <h4 class="mono" style="font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:0 0 10px">Abstract</h4><div class="prose"><p>${esc(r.abstract)}</p><p>Full text, figures and downloadable data are attached to the archival record. Where a report relates to a specific site, the underlying 3D model and technical record can be opened from the site profile.</p></div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 28px">${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  <div style="display:flex;gap:12px;flex-wrap:wrap"><a href="#" class="btn btn-primary" onclick="event.preventDefault()">Read / View Report (PDF) <span class="arr">→</span></a><a href="#" class="btn btn-ghost" onclick="event.preventDefault()">Cite</a></div></div>`);
    }

    /* MAPS */
    let mapPrev, mapMain, tilePrev, tileMain, mainMarkers = {}, mapCountry = '';
    const tileUrl = () => `https://{s}.basemaps.cartocdn.com/${root.dataset.theme === 'dark' ? 'dark_nolabels' : 'light_nolabels'}/{z}/{x}/{y}{r}.png`;
    const ATTR = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · © CARTO';
    function markerFor(s) { return L.marker([s.lat, s.lng], { icon: L.divIcon({ className: '', html: `<div class="pc-marker ${s.country.toLowerCase()}"><span class="r"></span><span class="c"></span><span class="p"></span><span class="p"></span><span class="p"></span><span class="p"></span><span class="p"></span></div>`, iconSize: [34, 34], iconAnchor: [17, 17] }) }).bindTooltip(`<img src="${s.img.replace('w=1400', 'w=500')}" alt=""><div class="t"><b>${esc(s.name)}</b><span>${esc(s.location)} · ${s.type}</span></div>`, { className: 'hb-tip', direction: 'top', offset: [0, -18], opacity: 1 }).on('click', () => { location.hash = '#/site/' + s.id; }); }
    function initPreviewMap() { if (mapPrev) { setTimeout(() => mapPrev.invalidateSize(), 50); return; } mapPrev = L.map('mapPreview', { scrollWheelZoom: false, zoomControl: false, attributionControl: true }).setView([38.6, 44.2], 5); tilePrev = L.tileLayer(tileUrl(), { attribution: ATTR, subdomains: 'abcd', maxZoom: 18 }).addTo(mapPrev); SITES.forEach(s => markerFor(s).addTo(mapPrev)); L.control.zoom({ position: 'topright' }).addTo(mapPrev); }
    function initMainMap() { if (!mapMain) { mapMain = L.map('mapMain', { zoomControl: false }).setView([38.6, 44.2], 5); tileMain = L.tileLayer(tileUrl(), { attribution: ATTR, subdomains: 'abcd', maxZoom: 18 }).addTo(mapMain); L.control.zoom({ position: 'topright' }).addTo(mapMain); SITES.forEach(s => { mainMarkers[s.id] = markerFor(s).addTo(mapMain); }); renderMapSide(); } setTimeout(() => mapMain.invalidateSize(), 60); }
    function renderMapSide() {
      const countries = ['', 'Iraq', 'Armenia']; document.getElementById('mapCountries').innerHTML = countries.map(c => `<button class="chip ${mapCountry === c ? 'active' : ''}" onclick="setMapCountry('${c}')">${c || 'All countries'}</button>`).join('') + '<button class="chip" disabled style="opacity:.45">+ More soon</button>';
      const list = SITES.filter(s => !mapCountry || s.country === mapCountry); document.getElementById('mapCount').textContent = `${list.length} documented locations`;
      document.getElementById('mapList').innerHTML = list.map(s => `<div class="site-li" onmouseenter="mainMarkers['${s.id}'].openTooltip()" onmouseleave="mainMarkers['${s.id}'].closeTooltip()" onclick="location.hash='#/site/${s.id}'"><img src="${s.img.replace('w=1400', 'w=300')}" alt=""><div><b>${esc(s.name)}</b><span>${esc(s.location)} · ${s.type}${s.has3d ? ' · 3D' : ''}</span></div><span class="go">→</span></div>`).join('');
    }
    function setMapCountry(c) { mapCountry = c; renderMapSide(); const list = SITES.filter(s => !c || s.country === c); mapMain.flyToBounds(L.latLngBounds(list.map(s => [s.lat, s.lng])).pad(0.25), { duration: 1.2 }); }
    function updateTiles() { if (tilePrev) tilePrev.setUrl(tileUrl()); if (tileMain) tileMain.setUrl(tileUrl()); }

    /* ACADEMY */
    const progress = new Set(JSON.parse(localStorage.getItem('hb_progress') || '[]'));
    const saveProg = () => localStorage.setItem('hb_progress', JSON.stringify([...progress]));
    function renderPathCard() {
      const done = ALL_LESSONS.filter(l => progress.has(l.id)).length; const pct = Math.round(done / ALL_LESSONS.length * 100);
      document.getElementById('pathCard').innerHTML = `<div class="body"><span class="eyebrow">Course 01 · ${COURSE.modules.length} modules · ${ALL_LESSONS.length} lessons</span><h3 class="serif">${COURSE.title}</h3><p>Learn the complete workflow of the initiative: reading and researching a site, planning capture, photogrammetry, survey control, 3D reconstruction and the written record.</p>
  <div style="display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:26px 0 8px"><span>Your progress</span><span>${done}/${ALL_LESSONS.length} · ${pct}%</span></div><div class="prog"><i style="width:${pct}%"></i></div>
  <div class="mods">${COURSE.modules.map((m, i) => `<a href="#/academy/lesson/${m.lessons[0].id}"><small>M0${i + 1}</small>${m.title}<em>${m.lessons.filter(l => progress.has(l.id)).length}/${m.lessons.length}</em></a>`).join('')}</div>
  <div style="display:flex;gap:12px;margin-top:28px;flex-wrap:wrap"><a href="#/academy/lesson/${(ALL_LESSONS.find(l => !progress.has(l.id)) || ALL_LESSONS[0]).id}" class="btn btn-primary">${done ? 'Continue learning' : 'Start the course'} <span class="arr">→</span></a><a href="#/academy/lesson/1-1" class="btn btn-ghost">Syllabus</a></div></div>
  <div class="img-wrap"><img src="${COURSE.img}" alt=""></div>`;
    }
    function renderLesson(id) {
      const l = ALL_LESSONS.find(x => x.id === id) || ALL_LESSONS[0]; const idx = ALL_LESSONS.indexOf(l); const prev = ALL_LESSONS[idx - 1], next = ALL_LESSONS[idx + 1]; const done = ALL_LESSONS.filter(x => progress.has(x.id)).length; const pct = Math.round(done / ALL_LESSONS.length * 100);
      document.getElementById('academyHome').style.display = 'none'; const v = document.getElementById('lessonView'); v.style.display = 'block';
      v.innerHTML = `<div class="lesson-layout">
  <aside class="lesson-side"><div class="hd"><a href="#/academy" class="link-u" style="color:var(--muted)">← Academy</a><b>${COURSE.title}</b><div class="pr"><span>Progress</span><span>${pct}%</span></div><div class="prog"><i style="width:${pct}%"></i></div></div>
    ${COURSE.modules.map((m, mi) => `<div class="mod-group"><b>Module 0${mi + 1} — ${m.title}</b>${m.lessons.map(x => `<a href="#/academy/lesson/${x.id}" class="${x.id === l.id ? 'cur' : ''} ${progress.has(x.id) ? 'done' : ''}"><span class="ck">${progress.has(x.id) ? '✓' : ''}</span><span>${x.title}</span><span class="dur">${x.dur}</span></a>`).join('')}</div>`).join('')}
    <div style="padding:20px 24px;font-size:12px;color:var(--muted);border-top:1px solid var(--line);margin-top:10px;line-height:1.6">Progress is stored in this browser. Accounts, saved progress and certificates are planned for a future version.</div></aside>
  <div class="lesson-main"><div class="crumb"><span>Module 0${l.mi + 1}</span><span>/</span><span>${l.mtitle}</span><span>/</span><span>Lesson ${l.id}</span><span style="margin-left:auto">${l.dur}</span></div><h1 class="serif display-m">${esc(l.title)}</h1>
    <div class="prose">${l.p.map(p => `<p>${esc(p)}</p>`).join('')}
      <div class="block"><div class="bk">◫ Figure</div><figure><div class="img-wrap"><img src="${[PX(27946497), PX(33880365), PX(35665429), PX(18416945), PX(25478733), PX(37750142)][l.mi]}" alt=""></div><figcaption>Fig. ${l.id} — Field reference for this lesson. Replace with lesson-specific diagram or capture.</figcaption></figure></div>
      <h3>Practical task</h3>
      <div class="block task"><div class="bk">▣ Task ${l.id}</div><p style="margin:0;font-weight:400;color:var(--ink)">${esc(l.task)}</p><p style="margin:12px 0 0;font-size:13px;color:var(--muted)">Keep your outputs — later lessons build on them. Share them with the community channel for feedback.</p></div>
      <h3>Check your understanding</h3>
      <div class="block quiz" id="quiz"><div class="bk">? Quick check</div><p style="margin:0 0 6px;font-weight:500;color:var(--ink)">${esc(l.quiz.q)}</p>${l.quiz.opts.map((o, i) => `<label><input type="radio" name="q" value="${i}"><span>${esc(o)}</span></label>`).join('')}<p id="quizMsg" style="margin:12px 0 0;font-size:13px;color:var(--muted)"></p></div>
    </div>
    <button class="btn ${progress.has(l.id) ? 'btn-primary is-done' : 'btn-ghost'} mark-done" id="markDone">${progress.has(l.id) ? '✓ Lesson completed — mark as incomplete' : 'Mark lesson as complete'}</button>
    <div class="lesson-nav">${prev ? `<a href="#/academy/lesson/${prev.id}"><small>← Previous</small>${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a href="#/academy/lesson/${next.id}" class="nx"><small>Next →</small>${esc(next.title)}</a>` : `<a href="#/academy" class="nx"><small>Finish</small>Back to Academy</a>`}</div></div>
  <aside class="lesson-res"><h6>Resources</h6>${l.res.map(r => `<a href="#" onclick="event.preventDefault()"><i>${r[0]}</i><span>${esc(r[1])}</span></a>`).join('')}<h6 style="margin-top:32px">Notes</h6><textarea placeholder="Your notes for this lesson (saved locally)" style="width:100%;min-height:140px;background:var(--surface);border:1px solid var(--line);padding:12px;font-family:inherit;font-size:13px;color:var(--ink);border-radius:var(--radius);resize:vertical;outline:none" id="noteBox">${localStorage.getItem('hb_note_' + l.id) || ''}</textarea><h6 style="margin-top:32px">References</h6><p style="font-size:12px;color:var(--muted);line-height:1.6;margin:0">See the Research Library for published methods; field templates are linked above.</p></aside></div>`;
      document.getElementById('markDone').addEventListener('click', () => { progress.has(l.id) ? progress.delete(l.id) : progress.add(l.id); saveProg(); renderLesson(l.id); window.scrollTo({ top: 0, behavior: 'smooth' }); });
      document.getElementById('noteBox').addEventListener('input', e => localStorage.setItem('hb_note_' + l.id, e.target.value));
      document.querySelectorAll('#quiz input').forEach(inp => inp.addEventListener('change', e => { const ok = +e.target.value === l.quiz.a; document.querySelectorAll('#quiz label').forEach(lb => lb.classList.remove('ok', 'bad')); e.target.closest('label').classList.add(ok ? 'ok' : 'bad'); document.getElementById('quizMsg').textContent = ok ? 'Correct — you can mark this lesson complete.' : 'Not quite. Re-read the lesson and try again.'; }));
      observeReveals(v);
    }
    function showAcademyHome() { document.getElementById('academyHome').style.display = 'block'; document.getElementById('lessonView').style.display = 'none'; renderPathCard(); }

    /* EVENTS */
    (function renderTimeline() { const years = [...new Set(EVENTS.map(e => e.year))]; document.getElementById('timeline').innerHTML = years.map(y => `<div class="tl-year"><span>${y}</span></div>` + EVENTS.filter(e => e.year === y).map(e => `<div class="tl-item hover-zoom" onclick="openEvent('${e.id}')"><div class="dt">${e.date}<br><span style="color:var(--accent)">${e.type}</span></div><span class="dot"></span><div class="bd"><h3 class="serif">${esc(e.name)}</h3><div class="lc"><span>◎ ${esc(e.location)}</span></div><p>${esc(e.short)}</p><span class="link-u" style="margin-top:18px">Open event <span class="arr">→</span></span></div><div class="im"><div class="img-wrap"><img src="${e.img}" alt="" loading="lazy"><div class="cap">${esc(e.location)}</div></div></div></div>`).join('')).join(''); })();
    function openEvent(id) { const e = EVENTS.find(x => x.id === id); openOverlay(`<div class="hero"><img src="${e.img}" alt=""></div><div class="bd"><span class="eyebrow">${e.type} · ${e.year}</span><h2 class="serif display-m" style="margin:16px 0 0">${esc(e.name)}</h2><div class="kv"><div>Date<b>${e.date}</b></div><div>Location<b>${esc(e.location)}</b></div><div>Type<b>${e.type}</b></div></div><div class="prose"><p>${esc(e.short)}</p><p>${esc(e.detail)}</p></div><div class="grid-12" style="margin-top:24px"><div class="img-wrap" style="grid-column:1/8;aspect-ratio:16/10;border-radius:var(--radius)"><img src="${EVENTS[(EVENTS.indexOf(e) + 1) % EVENTS.length].img}" alt=""></div><div class="img-wrap" style="grid-column:8/13;aspect-ratio:4/5;border-radius:var(--radius)"><img src="${EVENTS[(EVENTS.indexOf(e) + 2) % EVENTS.length].img}" alt=""></div></div><div style="display:flex;gap:12px;margin-top:32px;flex-wrap:wrap"><a href="#/events" class="btn btn-ghost" onclick="closeOverlay()">All events</a><a href="#/heritage" class="btn btn-primary" onclick="closeOverlay()">Related heritage <span class="arr">→</span></a></div></div>`); }

    /* DIGITAL WORKS */
    let worksTab = 'Games';
    function renderWorks(tab) {
      if (tab) worksTab = tab; document.getElementById('worksHome').style.display = 'block'; document.getElementById('caseView').style.display = 'none';
      const cats = ['Games', 'Applications', 'Web Projects']; document.getElementById('worksTabs').innerHTML = cats.map(c => `<button class="${c === worksTab ? 'active' : ''}" onclick="renderWorks('${c}')">${c}<small>${WORKS.filter(w => w.cat === c).length}</small></button>`).join('');
      document.getElementById('worksGrid').innerHTML = WORKS.filter(w => w.cat === worksTab).map((w, i) => `<div class="wcard hover-zoom reveal img-reveal" data-delay="${i}" onclick="location.hash='#/works/case/${w.id}'"><div class="img-wrap"><img src="${w.img}" alt="" loading="lazy"><div class="cap">${w.type}</div></div><div class="meta"><span class="tag accent">${w.cat}</span><h3 class="serif">${esc(w.name)}</h3><p>${esc(w.short)}</p><div class="tech">${w.tech}</div></div></div>`).join('');
      observeReveals(document.getElementById('page-works'));
    }
    function renderCase(id) {
      const w = WORKS.find(x => x.id === id) || WORKS[0]; document.getElementById('worksHome').style.display = 'none'; const v = document.getElementById('caseView'); v.style.display = 'block'; const rel = WORKS.filter(x => x.id !== w.id).slice(0, 3);
      v.innerHTML = `<div class="p-hero tall"><div class="bg" style="background-image:url('${w.img}')"></div><div class="veil"></div><div class="wrap"><a href="#/works?tab=${encodeURIComponent(w.cat)}" class="link-u" style="color:#A69C88;margin-bottom:26px">← ${w.cat}</a><br><span class="eyebrow">${w.cat} · ${w.type}</span><h1 class="serif display-xl">${esc(w.name)}</h1><p class="lead">${esc(w.short)}</p><div class="meta-line"><div>Medium<b>${w.type}</b></div><div>Technology<b>${w.tech}</b></div><div>Status<b>${w.results.split('.')[0].length < 60 ? w.results.split('.')[0] : 'Released'}</b></div></div></div></div>
  <div class="wrap section"><div class="cs-grid"><div class="l"><div class="cs-side reveal"><div><div class="k">Type</div><div class="v">${w.type}</div></div><div><div class="k">Technology / medium</div><div class="v">${w.tech}</div></div><div><div class="k">Links</div><div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">${w.links.demo ? '<a href="#" class="link-u" onclick="event.preventDefault()">Play demo →</a>' : ''}${w.links.web ? '<a href="#" class="link-u" onclick="event.preventDefault()">Visit website →</a>' : ''}${w.links.github ? '<a href="#" class="link-u" onclick="event.preventDefault()">GitHub repository →</a>' : ''}</div></div><div><div class="k">Related heritage</div><div class="v"><a href="#/heritage" class="link-u">Open the archive →</a></div></div></div></div>
  <div class="r"><div class="prose reveal"><p class="dropcap" style="font-size:19px">${esc(w.overview)}</p></div>
    ${[['Why we created it', w.why], ['Cultural & historical purpose', w.why + ' The work is built directly on documented material, so every historical claim in it can be traced back to a site record or a source in the Research Library.'], ['The problem', w.problem], ['Concept', w.concept]].map(s => `<div class="cs-sec reveal"><h2 class="serif">${s[0]}</h2><div class="prose"><p>${esc(s[1])}</p></div></div>`).join('')}
    <div class="cs-sec reveal"><h2 class="serif">Features</h2><ul class="feat-list">${w.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>
    <div class="cs-sec reveal"><h2 class="serif">Screenshots</h2><div class="cs-shots"><div class="img-wrap"><img src="${w.imgs[0]}" alt=""></div><div class="img-wrap"><img src="${w.imgs[1] || w.img}" alt=""></div></div></div>
    <div class="cs-sec reveal"><h2 class="serif">Video</h2><div class="img-wrap" style="aspect-ratio:16/9;border-radius:var(--radius);display:grid;place-items:center;cursor:pointer" onclick="this.innerHTML='<iframe src=&quot;https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&quot; style=&quot;position:absolute;inset:0;width:100%;height:100%;border:0&quot; allow=&quot;autoplay; fullscreen&quot;></iframe>'"><img src="${w.img}" alt="" style="position:absolute;inset:0"><div style="position:relative;z-index:2;width:76px;height:76px;border-radius:50%;border:1px solid rgba(233,225,209,.7);display:grid;place-items:center;color:#E9E1D1;backdrop-filter:blur(6px)"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div></div>
    <div class="cs-sec reveal"><h2 class="serif">Results</h2><div class="prose"><p>${esc(w.results)}</p></div><div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px">${w.links.demo ? '<a href="#" class="btn btn-primary" onclick="event.preventDefault()">Open demo <span class="arr">→</span></a>' : ''}${w.links.web ? '<a href="#" class="btn btn-ghost" onclick="event.preventDefault()">Website</a>' : ''}${w.links.github ? '<a href="#" class="btn btn-ghost" onclick="event.preventDefault()">GitHub</a>' : ''}</div></div>
  </div></div></div>
  <div class="wrap section-tight" style="border-top:1px solid var(--line)"><div class="section-head"><div class="l reveal"><span class="eyebrow">Related projects</span><h2 class="serif display-m">More digital works</h2></div></div><div class="related">${rel.map((r, i) => `<a href="#/works/case/${r.id}" class="pcard hover-zoom reveal img-reveal" data-delay="${i}"><div class="img-wrap" style="aspect-ratio:4/3"><img src="${r.img}" alt="" loading="lazy"></div><div class="meta"><div class="row"><span class="tag accent">${r.cat}</span><span class="tech">${r.tech.split('·')[0]}</span></div><h3 class="serif">${esc(r.name)}</h3><p>${esc(r.short)}</p></div></a>`).join('')}</div></div>`;
      observeReveals(v);
    }

    /* STORY & TEAM */
    document.getElementById('milestones').innerHTML = MILESTONES.map(m => `<div class="ms reveal"><div class="y">${m.y}</div><div><h4 class="serif">${esc(m.t)}</h4><p>${esc(m.d)}</p></div><div class="img-wrap hover-zoom"><img src="${m.img}" alt="" loading="lazy"></div></div>`).join('');
    document.getElementById('teamFull').innerHTML = TEAM.map((m, i) => `<div class="tm reveal img-reveal hover-zoom" data-delay="${i % 3}" onclick="this.classList.toggle('open')"><div class="img-wrap"><img src="${m.img}" alt="${esc(m.name)}" loading="lazy"></div><div class="body"><h4 class="serif">${m.name}</h4><div class="role">${m.role}</div><div class="inst">${m.inst} · ${m.spec}</div><div class="sk">${m.skills.map(s => `<span class="tag">${s}</span>`).join('')}</div><div class="story"><p style="margin:0">${esc(m.story)}</p></div><span class="more">Personal story <span class="arr">↓</span></span><div class="links">${Object.keys(m.links).map(k => `<a href="#" onclick="event.stopPropagation();event.preventDefault()">${k}</a>`).join('')}</div></div></div>`).join('');

    /* OVERLAY */
    function openOverlay(html) { document.getElementById('ovPanel').innerHTML = `<button class="ov-close" onclick="closeOverlay()" aria-label="Close">✕</button>` + html; document.getElementById('overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeOverlay() { document.getElementById('overlay').classList.remove('open'); document.body.style.overflow = ''; }
    document.getElementById('overlay').addEventListener('click', e => { if (e.target.id === 'overlay') closeOverlay(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });

    /* ---------------- ROUTER ---------------- */
    function route() {
      const raw = location.hash.replace(/^#/, '') || '/'; const [path, qs] = raw.split('?'); const seg = path.split('/').filter(Boolean); const q = new URLSearchParams(qs || ''); let page = seg[0] || 'home';
      const known = ['home', 'heritage', 'site', 'map', 'research', 'academy', 'events', 'works', 'story', 'team']; if (!known.includes(page)) page = 'home';
      closeOverlay();
      if (page === 'site') renderSite(seg[1]);
      if (page === 'heritage') { if (q.get('3d')) { H.d3 = true; document.getElementById('h3d').classList.add('active'); } renderArchive(); }
      if (page === 'research') { if (q.get('type')) { R.type = q.get('type'); document.getElementById('rType').value = R.type; } if (q.get('site')) { R.site = q.get('site'); document.getElementById('rSite').value = R.site; } renderLib(); if (q.get('open')) setTimeout(() => openResearch(q.get('open')), 300); }
      if (page === 'academy') { seg[1] === 'lesson' ? renderLesson(seg[2]) : showAcademyHome(); }
      if (page === 'works') { seg[1] === 'case' ? renderCase(seg[2]) : renderWorks(q.get('tab') || worksTab); }
      document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + page));
      const isLesson = page === 'academy' && seg[1] === 'lesson', isCase = page === 'works' && seg[1] === 'case';
      document.body.dataset.page = isLesson ? 'lesson' : isCase ? 'case' : page;
      const navMap = { heritage: 'Explore', site: 'Explore', map: 'Explore', research: 'Research', academy: 'Learn', events: 'Experiences', works: 'Experiences', story: 'About', team: 'About' };
      document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === navMap[page]));
      window.scrollTo(0, 0); forceCompact = (page === 'map' || isLesson); nav.classList.toggle('compact', forceCompact);
      if (page === 'home') initPreviewMap(); if (page === 'map') initMainMap();
      if (page === 'story' && location.hash.includes('#partners')) setTimeout(() => document.getElementById('partners').scrollIntoView({ behavior: 'smooth' }), 300);
      observeReveals(document.getElementById('page-' + page));
    }
    addEventListener('hashchange', route); route();
