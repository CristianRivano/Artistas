const categories = ['Cerámica y objeto', 'Arte sonoro', 'Performance y cuerpo', 'Audiovisual', 'Arte textil', 'Grabado', 'Arte digital', 'Escultura e instalación'];
const regions = ['Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 'Valparaíso', 'Metropolitana', "O’Higgins", 'Maule', 'Ñuble', 'Biobío', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'];
const modalities = ['Presencial', 'Online', 'Híbrido'];
const profileTypes = [
  { value: 'visual', label: 'Artista visual' },
  { value: 'graduate', label: 'Licenciado/a en Arte' },
  { value: 'both', label: 'Ambos perfiles' }
];

const artists = [
  {
    id: 'amaya-soto', name: 'Amaya Soto', category: 'Cerámica y objeto', profileTypes: ['visual'],
    qualification: 'Práctica independiente · cerámica contemporánea', region: 'Coquimbo', city: 'La Serena', modality: 'Presencial',
    summary: 'Cerámica de pequeña escala inspirada en la costa y sus formas.',
    bio: 'Artista ficticia dedicada a la cerámica contemporánea. Su práctica explora formas orgánicas, arcillas y piezas pensadas para el uso cotidiano.',
    specialties: ['Cerámica', 'Obra objetual', 'Piezas por encargo'], image: '/manus-storage/async-images/xQsBmZkHSp0HqplUFRoMrn/image-2.webp', initials: 'AS', tone: 'sand', featured: true, recent: 2,
    socialHandle: '@amaya.soto.demo', portfolioLabel: 'amayasoto.demo'
  },
  {
    id: 'elias-mardones', name: 'Elías Mardones', category: 'Arte sonoro', profileTypes: ['graduate'],
    qualification: 'Licenciatura en Arte · práctica sonora e intermedia', region: 'Los Lagos', city: 'Puerto Varas', modality: 'Híbrido',
    summary: 'Arte sonoro: guitarra, memoria y paisaje como materia de exploración.',
    bio: 'Perfil ficticio de artista visual y licenciado en arte que cruza sonido, instrumento y paisaje. Disponible para colaboraciones editoriales y proyectos culturales.',
    specialties: ['Arte sonoro', 'Composición', 'Instalación sonora'], image: '/manus-storage/async-images/xQsBmZkHSp0HqplUFRoMrn/image-3.webp', initials: 'EM', tone: 'blue', featured: true, recent: 4,
    socialHandle: '@elias.mardones.demo', portfolioLabel: 'eliasmardones.demo'
  },
  {
    id: 'emilia-vera', name: 'Emilia Vera', category: 'Performance y cuerpo', profileTypes: ['visual', 'graduate'],
    qualification: 'Licenciatura en Arte · práctica interdisciplinaria', region: 'Valparaíso', city: 'Valparaíso', modality: 'Presencial',
    summary: 'Prácticas de cuerpo, gesto y composición para escena y espacios abiertos.',
    bio: 'Artista visual ficticia y licenciada en arte. Su práctica interdisciplinaria investiga el movimiento, la improvisación y las posibilidades del cuerpo en diálogo con el espacio.',
    specialties: ['Performance', 'Arte del cuerpo', 'Laboratorios'], image: '/manus-storage/async-images/xQsBmZkHSp0HqplUFRoMrn/image-4.webp', initials: 'EV', tone: 'rose', featured: true, recent: 6,
    socialHandle: '@emilia.vera.demo', portfolioLabel: 'emiliavera.demo'
  },
  {
    id: 'diego-yanez', name: 'Diego Yáñez', category: 'Audiovisual', profileTypes: ['graduate'],
    qualification: 'Licenciatura en Arte · medios audiovisuales', region: 'Metropolitana', city: 'Santiago', modality: 'Online',
    summary: 'Realización y montaje de piezas documentales y proyectos culturales.',
    bio: 'Creador audiovisual ficticio y licenciado en arte, enfocado en el relato documental, la edición y la memoria cotidiana. Colabora desde la investigación hasta el montaje.',
    specialties: ['Realización', 'Montaje', 'Documental'], image: '/manus-storage/async-images/xQsBmZkHSp0HqplUFRoMrn/image-5.webp', initials: 'DY', tone: 'sage', featured: false, recent: 5,
    socialHandle: '@diego.yanez.demo', portfolioLabel: 'diego-yanez.demo'
  },
  {
    id: 'mara-del-rio', name: 'Mara del Río', category: 'Arte textil', profileTypes: ['visual'],
    qualification: 'Práctica visual interdisciplinaria · arte textil', region: 'La Araucanía', city: 'Temuco', modality: 'Híbrido',
    summary: 'Textil, dibujo y mediación desde el color y la observación.',
    bio: 'Perfil visual ficticio que reúne arte textil, dibujo y experiencias de mediación. Su trabajo invita a mirar de nuevo los objetos y paisajes de la vida diaria.',
    specialties: ['Arte textil', 'Dibujo', 'Mediación'], image: '', initials: 'MR', tone: 'sage', featured: false, recent: 1,
    socialHandle: '@mara.delrio.demo', portfolioLabel: 'maradelrio.demo'
  },
  {
    id: 'simon-toledo', name: 'Simón Toledo', category: 'Grabado', profileTypes: ['graduate'],
    qualification: 'Licenciatura en Arte · gráfica y grabado', region: 'Maule', city: 'Talca', modality: 'Online',
    summary: 'Grabado y edición de obra gráfica en series pequeñas.',
    bio: 'Artista ficticio y licenciado en arte dedicado al grabado y la gráfica contemporánea. Comparte procesos y desarrolla talleres de impresión para públicos diversos.',
    specialties: ['Grabado', 'Obra gráfica', 'Talleres'], image: '', initials: 'ST', tone: 'blue', featured: false, recent: 3,
    socialHandle: '@simon.toledo.demo', portfolioLabel: 'simontoledo.demo'
  },
  {
    id: 'luz-cardenas', name: 'Luz Cárdenas', category: 'Arte digital', profileTypes: ['visual', 'graduate'],
    qualification: 'Licenciatura en Arte · imagen y nuevos medios', region: 'Tarapacá', city: 'Iquique', modality: 'Híbrido',
    summary: 'Imagen digital e instalaciones para proyectos con propósito.',
    bio: 'Artista visual ficticia y licenciada en arte. Desarrolla imágenes, piezas interactivas e instalaciones para espacios culturales y comunitarios.',
    specialties: ['Arte digital', 'Instalación', 'Nuevos medios'], image: '', initials: 'LC', tone: 'rose', featured: false, recent: 8,
    socialHandle: '@luz.cardenas.demo', portfolioLabel: 'luzcardenas.demo'
  },
  {
    id: 'nicolas-pinto', name: 'Nicolás Pinto', category: 'Escultura e instalación', profileTypes: ['visual'],
    qualification: 'Práctica independiente · escultura y montaje', region: 'Biobío', city: 'Concepción', modality: 'Presencial',
    summary: 'Materiales recuperados, escultura y objetos hechos a mano.',
    bio: 'Perfil ficticio de artista visual que trabaja con escultura e instalación. Investiga materiales cotidianos y construye obras para espacios expositivos y comunitarios.',
    specialties: ['Escultura', 'Instalación', 'Materiales'], image: '', initials: 'NP', tone: 'sand', featured: false, recent: 7,
    socialHandle: '@nicolas.pinto.demo', portfolioLabel: 'nicolaspinto.demo'
  }
];

const categoryFilter = document.querySelector('#categoryFilter');
const profileTypeFilter = document.querySelector('#profileTypeFilter');
const regionFilter = document.querySelector('#regionFilter');
const modalityFilter = document.querySelector('#modalityFilter');
const searchInput = document.querySelector('#searchInput');
const sortSelect = document.querySelector('#sortSelect');
const artistGrid = document.querySelector('#artistGrid');
const resultCount = document.querySelector('#resultCount');
const emptyState = document.querySelector('#emptyState');
const categoryButtons = document.querySelector('#categoryButtons');
const artistDialog = document.querySelector('#artistDialog');
const contactDialog = document.querySelector('#contactDialog');
const applicationDialog = document.querySelector('#applicationDialog');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function normalizeText(value) {
  return String(value).toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function fillOptions(select, options, valueOf = option => option, labelOf = option => option) {
  options.forEach(option => {
    const element = document.createElement('option');
    element.value = valueOf(option);
    element.textContent = labelOf(option);
    select.append(element);
  });
}

function profileLabel(artist) {
  const hasVisual = artist.profileTypes.includes('visual');
  const hasDegree = artist.profileTypes.includes('graduate');
  if (hasVisual && hasDegree) return 'Artista visual · Licenciado/a en Arte';
  return hasVisual ? 'Artista visual' : 'Licenciado/a en Arte';
}

fillOptions(categoryFilter, categories);
fillOptions(profileTypeFilter, profileTypes, item => item.value, item => item.label);
fillOptions(regionFilter, regions);
fillOptions(modalityFilter, modalities);
fillOptions(document.querySelector('#artistDiscipline'), categories);
fillOptions(document.querySelector('#artistProfileType'), profileTypes, item => item.value, item => item.label);
fillOptions(document.querySelector('#artistRegion'), regions);
fillOptions(document.querySelector('#artistModality'), modalities);

function createCategoryButtons() {
  categoryButtons.innerHTML = categories.map(category => `<button class="category-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="false">${escapeHtml(category)} <span aria-hidden="true">↘</span></button>`).join('');
}

function visualFor(artist) {
  if (artist.image) {
    return `<div class="card-art card-art--${escapeHtml(artist.tone)}"><img src="${artist.image}" alt="Imagen editorial de muestra para ${escapeHtml(artist.name)}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('is-fallback'); this.parentElement.insertAdjacentHTML('afterbegin', '<span>${escapeHtml(artist.initials)}</span>');" /><span class="card-label">${escapeHtml(artist.category)}</span><span class="card-arrow" aria-hidden="true">↗</span></div>`;
  }
  return `<div class="card-art card-art--${artist.tone}"><span>${escapeHtml(artist.initials)}</span><span class="card-label">${escapeHtml(artist.category)}</span><span class="card-arrow" aria-hidden="true">↗</span></div>`;
}

function cardMarkup(artist) {
  return `<article class="artist-card">
    <a class="card-art-link" href="#ficha-${escapeHtml(artist.id)}" data-artist-id="${escapeHtml(artist.id)}" aria-label="Ver ficha de ${escapeHtml(artist.name)}">
      ${visualFor(artist)}
    </a>
    <div class="artist-card-body">
      <div class="artist-meta"><span>${escapeHtml(artist.category)}</span><span class="meta-dot" aria-hidden="true"></span><span>${escapeHtml(profileLabel(artist))}</span></div>
      <h3>${escapeHtml(artist.name)}</h3>
      <p class="card-location">${escapeHtml(artist.city)}, ${escapeHtml(artist.region)}</p>
      <p class="card-qualification">${escapeHtml(artist.qualification)}</p>
      <p class="card-summary">${escapeHtml(artist.summary)}</p>
      <button class="card-open" type="button" data-artist-id="${escapeHtml(artist.id)}">Ver ficha <span aria-hidden="true">→</span></button>
    </div>
  </article>`;
}

function currentResults() {
  const query = normalizeText(searchInput.value.trim());
  let result = artists.filter(artist => {
    const searchable = normalizeText([artist.name, artist.category, artist.region, artist.city, artist.summary, artist.bio, artist.qualification, profileLabel(artist), ...artist.specialties].join(' '));
    const typeMatches = !profileTypeFilter.value
      || (profileTypeFilter.value === 'both'
        ? artist.profileTypes.includes('visual') && artist.profileTypes.includes('graduate')
        : artist.profileTypes.includes(profileTypeFilter.value));
    return (!query || searchable.includes(query))
      && (!categoryFilter.value || artist.category === categoryFilter.value)
      && typeMatches
      && (!regionFilter.value || artist.region === regionFilter.value)
      && (!modalityFilter.value || artist.modality === modalityFilter.value);
  });
  if (sortSelect.value === 'az') result = result.slice().sort((a, b) => a.name.localeCompare(b.name, 'es'));
  else if (sortSelect.value === 'recent') result = result.slice().sort((a, b) => a.recent - b.recent);
  else result = result.slice().sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name, 'es'));
  return result;
}

function render() {
  const result = currentResults();
  artistGrid.innerHTML = result.map(cardMarkup).join('');
  artistGrid.hidden = result.length === 0;
  emptyState.hidden = result.length !== 0;
  resultCount.innerHTML = `<strong>${result.length}</strong> ${result.length === 1 ? 'perfil de muestra' : 'perfiles de muestra'} <span>· datos ficticios</span>`;
  categoryButtons.querySelectorAll('[data-category]').forEach(button => {
    const selected = categoryFilter.value === button.dataset.category;
    button.setAttribute('aria-pressed', String(selected));
  });
}

function renderFeatured() {
  const featuredArtists = artists.filter(artist => artist.featured).slice(0, 3);
  const featuredSection = document.createElement('section');
  featuredSection.className = 'featured-section page-wrap';
  featuredSection.setAttribute('aria-labelledby', 'featuredTitle');
  featuredSection.innerHTML = `<div class="featured-heading"><div><p class="eyebrow"><span class="eyebrow-dot"></span> UNA PRIMERA MIRADA</p><h2 id="featuredTitle">Voces para <em>descubrir.</em></h2></div><p>Perfiles ficticios de artistas visuales y licenciados/as en arte.</p></div><div class="artist-grid featured-grid">${featuredArtists.map(cardMarkup).join('')}</div>`;
  document.querySelector('#categorias').after(featuredSection);
}

function openArtist(id) {
  const artist = artists.find(item => item.id === id);
  if (!artist) return;
  document.querySelector('#dialogArt').innerHTML = visualFor(artist).replace('card-label', 'card-label dialog-card-label').replace('card-arrow', 'card-arrow dialog-card-arrow');
  document.querySelector('#dialogCategory').innerHTML = `<span class="eyebrow-dot"></span> ${escapeHtml(artist.category)} · PERFIL DE MUESTRA`;
  document.querySelector('#artistDialogName').textContent = artist.name;
  document.querySelector('#dialogLocation').textContent = `${artist.city}, Región de ${artist.region}`;
  document.querySelector('#dialogBio').textContent = artist.bio;
  document.querySelector('#dialogSpecialties').innerHTML = artist.specialties.map(item => `<span class="tag">${escapeHtml(item)}</span>`).join('');
  document.querySelector('#dialogQualification').textContent = `${profileLabel(artist)} — ${artist.qualification}`;
  document.querySelector('#dialogModality').textContent = artist.modality;
  document.querySelector('#contactNotice').textContent = '';
  document.querySelector('#dialogLinks').innerHTML = `<button type="button" data-contact-action="${escapeHtml(artist.id)}">Enviar mensaje ↗</button><button type="button" data-social-action="${escapeHtml(artist.id)}">Instagram ${escapeHtml(artist.socialHandle)}</button><button type="button" data-portfolio-action="${escapeHtml(artist.id)}">Portafolio ${escapeHtml(artist.portfolioLabel)}</button>`;
  artistDialog.showModal();
}

function openContact(id) {
  const artist = artists.find(item => item.id === id);
  if (!artist) return;
  document.querySelector('#contactArtistName').textContent = artist.name;
  document.querySelector('#contactFeedback').textContent = '';
  const form = document.querySelector('#contactForm');
  form.dataset.artistId = artist.id;
  contactDialog.showModal();
  window.setTimeout(() => document.querySelector('#senderName').focus(), 40);
}

createCategoryButtons();
renderFeatured();
render();

[categoryFilter, profileTypeFilter, regionFilter, modalityFilter, sortSelect].forEach(control => control.addEventListener('change', render));
searchInput.addEventListener('input', render);
document.querySelector('#filters').addEventListener('submit', event => {
  event.preventDefault();
  render();
});
categoryButtons.addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  categoryFilter.value = categoryFilter.value === button.dataset.category ? '' : button.dataset.category;
  render();
  document.querySelector('#directorio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('#filters').addEventListener('reset', event => {
  event.preventDefault();
  searchInput.value = '';
  categoryFilter.value = '';
  profileTypeFilter.value = '';
  regionFilter.value = '';
  modalityFilter.value = '';
  sortSelect.value = 'featured';
  render();
});
document.querySelector('#emptyReset').addEventListener('click', () => document.querySelector('#clearFilters').click());

function openApplication() {
  document.querySelector('#formFeedback').textContent = '';
  document.querySelector('#formFeedback').classList.remove('is-error');
  applicationDialog.showModal();
  window.setTimeout(() => document.querySelector('#artistName').focus(), 40);
}
document.querySelectorAll('[data-open-application]').forEach(button => button.addEventListener('click', openApplication));

[artistGrid, document.querySelector('.featured-grid')].forEach(container => {
  container.addEventListener('click', event => {
    const opener = event.target.closest('[data-artist-id]');
    if (!opener) return;
    event.preventDefault();
    openArtist(opener.dataset.artistId);
  });
});

artistDialog.addEventListener('click', event => {
  const contactAction = event.target.closest('[data-contact-action]');
  const socialAction = event.target.closest('[data-social-action]');
  const portfolioAction = event.target.closest('[data-portfolio-action]');
  if (contactAction) openContact(contactAction.dataset.contactAction);
  if (socialAction) {
    const artist = artists.find(item => item.id === socialAction.dataset.socialAction);
    document.querySelector('#contactNotice').textContent = `Instagram simulado: ${artist.socialHandle}. No se abrirá una cuenta real.`;
  }
  if (portfolioAction) {
    const artist = artists.find(item => item.id === portfolioAction.dataset.portfolioAction);
    document.querySelector('#contactNotice').textContent = `Portafolio de muestra: ${artist.portfolioLabel}. Enlace simulado, no abre un sitio externo.`;
  }
});

document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const artist = artists.find(item => item.id === form.dataset.artistId);
  document.querySelector('#contactFeedback').textContent = `Mensaje simulado para ${artist.name}. No se envió ni guardó.`;
  form.reset();
});

document.querySelectorAll('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
[artistDialog, contactDialog, applicationDialog].forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelector('#applicationForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = document.querySelector('#formFeedback');
  if (!form.reportValidity()) return;
  feedback.classList.remove('is-error');
  feedback.textContent = 'Gracias por la propuesta. Esta versión es demostrativa: no se enviaron ni guardaron tus datos.';
  form.reset();
});

const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  mainNav.classList.toggle('is-open', !isOpen);
});
mainNav.addEventListener('click', event => {
  if (event.target.closest('a') || event.target.closest('[data-open-application]')) {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  }
});
