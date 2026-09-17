const API_URL = window.TURISMO360_API_URL || '/api';

const translations = {
  pt: {
    nav_home:'Home', nav_about:'Sobre', nav_projects:'Explorar', nav_profile:'Perfil', nav_settings:'Configurações', nav_contact:'Contato', nav_register:'Cadastre-se', nav_login:'Entrar', nav_logout:'Sair',
    hero_title:'Descubra Candeias de um jeito novo', hero_text:'Explore pontos turísticos, eventos e histórias da cidade com uma experiência digital moderna.',
    featured:'Evento em destaque', festival_title:'Festival Cultural de Candeias', festival_text:'Música, cultura e gastronomia local reunidas em um só lugar.', explore_btn:'Explorar agora',
    explore_title:'Explore', events:'Eventos', events_desc:'Festas, cultura e programação local.', places:'Lugares', places_desc:'Pontos turísticos e locais para conhecer.', history:'História', history_desc:'Conheça a trajetória e a identidade de Candeias.',
    about_title:'Sobre', objective:'Objetivo', objective_text:'O Turismo 360° foi criado para ajudar moradores e visitantes a descobrir Candeias de forma simples, reunindo em um único lugar informações sobre turismo, cultura, serviços e pontos úteis da cidade.', team:'Equipe', team_text:'Geovanna Almeida, Etony Guedes, Nicolle Borges e Eric das Mercês.', how_it_works:'Como funciona', how_text:'Na aba Explorar, você pode pesquisar e filtrar pontos turísticos, espaços religiosos, hotéis, restaurantes, mercados, áreas de lazer e eventos. Cada local possui detalhes e um botão que abre sua localização no Google Maps. Também é possível favoritar lugares, mudar o idioma, ajustar preferências e utilizar as áreas de contato e perfil.',
    projects_title:'Explorar Candeias', explore_intro:'Encontre lugares reais da cidade e, se algo não estiver no catálogo, pesquise serviços de Candeias pelo Google Maps.', search_placeholder:'Pesquisar em Candeias: farmácia, hotel, academia...', all:'Todos', places_filter:'Lugares', events_filter:'Eventos', cat_tourism:'Turismo', cat_religious:'Religioso', cat_hotels:'Hotéis', cat_restaurants:'Restaurantes', cat_markets:'Mercados', cat_leisure:'Lazer', address:'Endereço', loading:'Carregando informações...', no_results:'Nenhum resultado no catálogo.', api_error:'Não foi possível carregar a API. Verifique se o backend está rodando.', details:'Ver detalhes', close:'Fechar', favorite:'Favoritar', favorited:'Favoritado', map:'Abrir no Google Maps', city_services:'Serviços em Candeias', city_services_desc:'Use os atalhos ou digite o que procura. Quando não houver no catálogo, o Turismo 360° consulta o Google Places se a chave estiver configurada.', search_maps:'Pesquisar no Google Maps', maps_results:'Resultados do Google Maps', maps_loading:'Buscando em Candeias...', maps_no_key:'A busca interna do Google Places ainda não está configurada. Você pode abrir esta pesquisa diretamente no Google Maps.', maps_no_results:'Nenhum estabelecimento encontrado nessa busca.', rating:'Avaliação', open_now:'Aberto agora', closed_now:'Fechado agora', svc_pharmacy:'Farmácias', svc_health:'Hospitais e clínicas', svc_fuel:'Postos', svc_gym:'Academias', svc_bakery:'Padarias', svc_bank:'Bancos e caixas', svc_pet:'Pet shops e veterinários', svc_transport:'Transporte', svc_auto:'Oficinas', svc_beauty:'Salões e barbearias', svc_shopping:'Lojas e comércio', svc_pizza:'Pizzarias e lanchonetes',
    profile_title:'Perfil', profile_info:'Informações', edit_profile:'Editar perfil', edit_data:'Salvar alterações', support:'Suporte', support_btn:'Falar com suporte', name:'Nome', email:'E-mail', choose_photo:'Escolher foto', login_required:'Faça login para acessar seu perfil.',
    settings_title:'Configurações', language:'Idioma', preferences:'Preferências', dark_mode:'Modo escuro', notifications:'Notificações', accessibility:'Acessibilidade', bigger_font:'Aumentar fonte', adjustments:'Ajustes', reset:'Resetar configurações',
    contact_title:'Contato', contact_intro:'Envie uma mensagem para dúvidas, sugestões ou feedback sobre o projeto.', message:'Mensagem', name_placeholder:'Digite seu nome', email_placeholder:'Digite seu e-mail', message_placeholder:'Digite sua mensagem', attach:'Anexar imagem', send:'Enviar mensagem', required:'Preencha todos os campos obrigatórios.', sent:'Mensagem enviada com sucesso!',
    register_title:'Cadastre-se', register_intro:'Crie sua conta e comece a explorar Candeias.', password:'Senha', password_placeholder:'Digite sua senha', register:'Cadastrar', already_account:'Já tem uma conta?', enter:'Entrar', back_home:'Voltar para o início', min_password:'A senha precisa ter no mínimo 6 caracteres.',
    login_title:'Entrar', no_account:'Não possui conta?', create_account:'Cadastre-se', login_success:'Login realizado com sucesso!', invalid_login:'E-mail ou senha incorretos.', server_error:'Não foi possível conectar ao servidor.',
    footer:'© 2026 Projeto desenvolvido por: Geovanna Almeida • Etony Guedes • Nicolle Borges • Eric das Mercês', steam:'Desenvolvido para a Mostra STEAM',
    menu:'Abrir menu', history_title:'História de Candeias', history_body:'A história de Candeias está profundamente ligada à fé e ao desenvolvimento do Recôncavo Baiano. Segundo o registro histórico divulgado pela Prefeitura, por volta de 1640 surgiu a tradição de um milagre em um córrego que atravessava o Engenho Pitanga. O local passou a ser conhecido como Fonte dos Milagres e atraiu romeiros, que começaram a se estabelecer ao redor da área. A devoção a Nossa Senhora das Candeias fortaleceu a identidade religiosa do povoado e permanece viva até hoje, especialmente nas celebrações de 2 de fevereiro. Mais tarde, a descoberta e exploração do petróleo aceleraram o crescimento populacional e econômico da região. Em 1958, Candeias tornou-se município. Ao longo do tempo, a cidade também ganhou importância industrial e portuária, sem perder seus marcos históricos, religiosos e culturais, como o Santuário de Nossa Senhora das Candeias, a Fonte Milagrosa e o Museu Wanderley de Pinho.', quick_access:'Acesso rápido', view_places:'Ver lugares', view_events:'Ver eventos'
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_projects:'Explore', nav_profile:'Profile', nav_settings:'Settings', nav_contact:'Contact', nav_register:'Sign up', nav_login:'Sign in', nav_logout:'Log out',
    hero_title:'Discover Candeias in a new way', hero_text:'Explore tourist attractions, events and local stories through a modern digital experience.',
    featured:'Featured event', festival_title:'Candeias Cultural Festival', festival_text:'Music, culture and local cuisine together in one place.', explore_btn:'Explore now',
    explore_title:'Explore', events:'Events', events_desc:'Festivals, culture and local activities.', places:'Places', places_desc:'Tourist attractions and places worth visiting.', history:'History', history_desc:'Discover the story and identity of Candeias.',
    about_title:'About', objective:'Goal', objective_text:'Turismo 360° was created to help residents and visitors discover Candeias more easily by bringing tourism, culture, services and useful local information together in one place.', team:'Team', team_text:'Geovanna Almeida, Etony Guedes, Nicolle Borges and Eric das Mercês.', how_it_works:'How it works', how_text:'On the Explore page, you can search and filter tourist attractions, religious sites, hotels, restaurants, markets, leisure areas and events. Each place includes details and a button that opens its location in Google Maps. You can also save favorites, change the language, adjust preferences and use the contact and profile areas.',
    projects_title:'Explore Candeias', explore_intro:'Find real places in the city and, when something is not in the catalog, search Candeias services through Google Maps.', search_placeholder:'Search Candeias: pharmacy, hotel, gym...', all:'All', places_filter:'Places', events_filter:'Events', cat_tourism:'Tourism', cat_religious:'Religious', cat_hotels:'Hotels', cat_restaurants:'Restaurants', cat_markets:'Markets', cat_leisure:'Leisure', address:'Address', loading:'Loading information...', no_results:'No catalog results.', api_error:'The API could not be loaded. Make sure the backend is running.', details:'View details', close:'Close', favorite:'Favorite', favorited:'Favorited', map:'Open in Google Maps', city_services:'Services in Candeias', city_services_desc:'Use the shortcuts or type what you need. When it is not in the catalog, Turismo 360° queries Google Places if the key is configured.', search_maps:'Search on Google Maps', maps_results:'Google Maps results', maps_loading:'Searching in Candeias...', maps_no_key:'Google Places internal search is not configured yet. You can open this search directly in Google Maps.', maps_no_results:'No businesses were found for this search.', rating:'Rating', open_now:'Open now', closed_now:'Closed now', svc_pharmacy:'Pharmacies', svc_health:'Hospitals and clinics', svc_fuel:'Gas stations', svc_gym:'Gyms', svc_bakery:'Bakeries', svc_bank:'Banks and ATMs', svc_pet:'Pet shops and vets', svc_transport:'Transport', svc_auto:'Auto services', svc_beauty:'Salons and barbers', svc_shopping:'Shops and retail', svc_pizza:'Pizza and snack bars',
    profile_title:'Profile', profile_info:'Information', edit_profile:'Edit profile', edit_data:'Save changes', support:'Support', support_btn:'Contact support', name:'Name', email:'Email', choose_photo:'Choose photo', login_required:'Sign in to access your profile.',
    settings_title:'Settings', language:'Language', preferences:'Preferences', dark_mode:'Dark mode', notifications:'Notifications', accessibility:'Accessibility', bigger_font:'Increase font size', adjustments:'Adjustments', reset:'Reset settings',
    contact_title:'Contact', contact_intro:'Send a message with questions, suggestions or feedback about the project.', message:'Message', name_placeholder:'Enter your name', email_placeholder:'Enter your email', message_placeholder:'Enter your message', attach:'Attach image', send:'Send message', required:'Fill in all required fields.', sent:'Message sent successfully!',
    register_title:'Sign up', register_intro:'Create your account and start exploring Candeias.', password:'Password', password_placeholder:'Enter your password', register:'Create account', already_account:'Already have an account?', enter:'Sign in', back_home:'Back to home', min_password:'Password must be at least 6 characters long.',
    login_title:'Sign in', no_account:"Don't have an account?", create_account:'Sign up', login_success:'Signed in successfully!', invalid_login:'Incorrect email or password.', server_error:'Could not connect to the server.',
    footer:'© 2026 Project developed by: Geovanna Almeida • Etony Guedes • Nicolle Borges • Eric das Mercês', steam:'Developed for the STEAM Fair',
    menu:'Open menu', history_title:'History of Candeias', history_body:'The history of Candeias is closely connected to faith and to the development of Bahia’s Recôncavo region. According to the historical account published by the city government, around 1640 a tradition emerged about a miracle in a stream that crossed Engenho Pitanga. The site became known as the Fountain of Miracles and attracted pilgrims, who gradually settled nearby. Devotion to Our Lady of Candeias became an important part of the town’s identity and remains strong today, especially during the February 2 celebrations. Later, the discovery and exploitation of oil accelerated population and economic growth. In 1958, Candeias became a municipality. Over time, the city also gained industrial and port importance while preserving historic, religious and cultural landmarks such as the Sanctuary of Our Lady of Candeias, the Miraculous Fountain and the Wanderley de Pinho Museum.', quick_access:'Quick access', view_places:'View places', view_events:'View events'
  }
};

function lang(){ return localStorage.getItem('idioma') || 'pt'; }
function t(key){ return translations[lang()]?.[key] || translations.pt[key] || key; }

function applyTranslations(){
  document.documentElement.lang = lang() === 'en' ? 'en' : 'pt-BR';
  document.querySelectorAll('[data-i18n]').forEach(el => { const value=t(el.dataset.i18n); if(value) el.textContent=value; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder=t(el.dataset.i18nPlaceholder); });
  const select=document.getElementById('idioma'); if(select) select.value=lang();
  document.dispatchEvent(new CustomEvent('languageChanged'));
}

function setupShell(){
  const nav=document.querySelector('.nav-links');
  const menu=document.getElementById('menuToggle');
  if(menu && nav){ menu.addEventListener('click',()=>{ nav.classList.toggle('open'); menu.setAttribute('aria-expanded', nav.classList.contains('open')); }); }
  const current=(location.pathname.split('/').pop() || 'home.html');
  document.querySelectorAll('.nav-links a').forEach(a=>{ if(a.getAttribute('href')===current) a.classList.add('active'); });
  const logged=!!getUser();
  document.querySelectorAll('[data-auth="guest"]').forEach(el=>el.hidden=logged);
  document.querySelectorAll('[data-auth="user"]').forEach(el=>el.hidden=!logged);
  document.querySelectorAll('[data-action="logout"]').forEach(el=>el.addEventListener('click',()=>{ localStorage.removeItem('usuarioLogado'); location.href='home.html'; }));
}

function getUser(){ try{return JSON.parse(localStorage.getItem('usuarioLogado'));}catch{return null;} }
async function api(path, options={}){
  const response=await fetch(`${API_URL}${path}`, { headers:{'Content-Type':'application/json', ...(options.headers||{})}, ...options });
  const data=await response.json().catch(()=>({}));
  if(!response.ok){ const err=new Error(data.erro || data.error || `HTTP ${response.status}`); Object.assign(err,data); err.status=response.status; throw err; }
  return data;
}

function setupPreferences(){
  const dark=localStorage.getItem('dark')==='true';
  const big=localStorage.getItem('fonte')==='true';
  document.body.classList.toggle('dark',dark); document.body.classList.toggle('big-text',big);
  const darkBox=document.getElementById('modoEscuro'); if(darkBox){ darkBox.checked=dark; darkBox.addEventListener('change',()=>{localStorage.setItem('dark',darkBox.checked);document.body.classList.toggle('dark',darkBox.checked);}); }
  const fontBox=document.getElementById('aumentarFonte'); if(fontBox){ fontBox.checked=big; fontBox.addEventListener('change',()=>{localStorage.setItem('fonte',fontBox.checked);document.body.classList.toggle('big-text',fontBox.checked);}); }
  const notif=document.getElementById('notificacoes'); if(notif){notif.checked=localStorage.getItem('notificacoes')==='true';notif.addEventListener('change',()=>localStorage.setItem('notificacoes',notif.checked));}
  const language=document.getElementById('idioma'); if(language) language.addEventListener('change',()=>{localStorage.setItem('idioma',language.value);applyTranslations();renderExplore();renderSlides();});
  const reset=document.getElementById('btnReset'); if(reset) reset.addEventListener('click',()=>{['dark','fonte','notificacoes','idioma'].forEach(k=>localStorage.removeItem(k));location.reload();});
}

const slides={
  pt:[
    {imagem:'img/museu.jpg',titulo:'História e natureza em um só lugar',texto:'Conheça pontos marcantes de Candeias com uma experiência moderna e interativa.'},
    {imagem:'img/igreja.jpg',titulo:'Fé, cultura e tradição',texto:'Explore igrejas, monumentos e lugares que fazem parte da identidade da cidade.'},
    {imagem:'img/fonte.jpg',titulo:'Fé e memória na Fonte Milagrosa',texto:'Conheça um dos espaços religiosos ligados à origem e à tradição de Candeias.'}
  ],
  en:[
    {imagem:'img/museu.jpg',titulo:'History and nature in one place',texto:'Discover remarkable places in Candeias through a modern, interactive experience.'},
    {imagem:'img/igreja.jpg',titulo:'Faith, culture and tradition',texto:'Explore churches, monuments and places that are part of the city’s identity.'},
    {imagem:'img/fonte.jpg',titulo:'Faith and memory at the Miraculous Fountain',texto:'Discover one of the religious sites connected to the origins and traditions of Candeias.'}
  ]
};
let slideIndex=0, slideTimer;
function renderSlides(){const img=document.getElementById('banner-img'); if(!img)return; const s=slides[lang()][slideIndex];img.src=s.imagem;document.getElementById('banner-title').textContent=s.titulo;document.getElementById('banner-text').textContent=s.texto;}
function setupBanner(){const next=document.getElementById('next'),prev=document.getElementById('prev');if(!next||!prev)return;const move=d=>{slideIndex=(slideIndex+d+slides[lang()].length)%slides[lang()].length;renderSlides();clearInterval(slideTimer);slideTimer=setInterval(()=>moveSilent(1),5000);};const moveSilent=d=>{slideIndex=(slideIndex+d+slides[lang()].length)%slides[lang()].length;renderSlides();};next.addEventListener('click',()=>move(1));prev.addEventListener('click',()=>move(-1));renderSlides();slideTimer=setInterval(()=>moveSilent(1),5000);}

let exploreItems=[];
let mapsTimer=null;

async function loadExplore(){
  const grid=document.getElementById('exploreGrid');
  if(!grid)return;
  try{
    const [places,events]=await Promise.all([api('/places'),api('/events')]);
    exploreItems=[...places.map(x=>({...x,type:'place'})),...events.map(x=>({...x,type:'event'}))];
    renderExplore();
  }catch(e){
    grid.innerHTML=`<div class="status-card error">${t('api_error')}<small>${e.message}</small></div>`;
  }
}

function categoryLabel(item){
  if(item.type==='event')return t('events');
  if(item.type==='maps')return item.categoria||t('places_filter');
  const map={turismo:'cat_tourism',religioso:'cat_religious',hotel:'cat_hotels',restaurante:'cat_restaurants',mercado:'cat_markets',lazer:'cat_leisure'};
  return t(map[item.categoria]||'places_filter');
}

function localMatches(){
  const q=(document.getElementById('pesquisa')?.value||'').trim().toLowerCase();
  const filter=document.querySelector('.filter-btn.active')?.dataset.filter||'all';
  return exploreItems.filter(item=>{
    const text=`${item.nome||''} ${item.nome_en||''} ${item.descricao||''} ${item.descricao_en||''} ${item.categoria||''} ${item.endereco||''}`.toLowerCase();
    const matchesFilter=filter==='all'||(filter==='event'&&item.type==='event')||(item.type==='place'&&item.categoria===filter);
    return (!q||text.includes(q))&&matchesFilter;
  });
}

function googleMapsSearchUrl(query){
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(String(query||'').trim()+' em Candeias BA')}`;
}

function renderExplore(){
  const grid=document.getElementById('exploreGrid');
  if(!grid||!exploreItems.length)return;
  const q=(document.getElementById('pesquisa')?.value||'').trim();
  const saved=JSON.parse(localStorage.getItem('favoritos')||'[]');
  const list=localMatches();
  if(!list.length){
    const mapsHref=q?googleMapsSearchUrl(q):'#';
    grid.innerHTML=`<div class="status-card">${t('no_results')}${q?`<div style="margin-top:12px"><a class="btn" id="mapsSearchBtn" href="${mapsHref}" target="_blank" rel="noopener noreferrer">${t('search_maps')}: “${escapeHtml(q)}”</a></div>`:''}</div>`;
    if(q.length>=2){clearTimeout(mapsTimer);mapsTimer=setTimeout(()=>searchCity(q,true),550);}
    return;
  }
  grid.innerHTML=list.map(item=>{
    const title=lang()==='en'?(item.nome_en||item.nome):item.nome;
    const desc=lang()==='en'?(item.descricao_en||item.descricao):item.descricao;
    const fav=saved.includes(`${item.type}:${item.id}`);
    return `<article class="card explore-item"><img src="${item.imagem}" alt="${escapeHtml(title)}" loading="lazy" onerror="this.onerror=null;this.src='img/cidade.jpg';"><span class="tag">${categoryLabel(item)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p><div class="card-actions"><button class="btn details-btn" data-id="${item.id}" data-type="${item.type}">${t('details')}</button><button class="secondary favorite-btn" data-key="${item.type}:${item.id}">${fav?'♥ '+t('favorited'):'♡ '+t('favorite')}</button></div></article>`;
  }).join('');
  grid.querySelectorAll('.favorite-btn').forEach(btn=>btn.addEventListener('click',()=>toggleFavorite(btn)));
  grid.querySelectorAll('.details-btn').forEach(btn=>btn.addEventListener('click',()=>showDetails(btn.dataset.type,Number(btn.dataset.id))));
  document.getElementById('mapsResults').innerHTML='';
}

function escapeHtml(value=''){
  return String(value).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function renderMapsResults(data, query){
  const root=document.getElementById('mapsResults');
  if(!root)return;
  if(!data.configured){
    root.innerHTML=`<section class="maps-panel"><h2>${t('maps_results')}</h2><div class="status-card"><p>${t('maps_no_key')}</p><a class="btn" href="${data.mapsUrl}" target="_blank" rel="noopener" style="margin-top:12px">${t('search_maps')}</a></div></section>`;
    return;
  }
  if(!data.results?.length){
    root.innerHTML=`<section class="maps-panel"><h2>${t('maps_results')}</h2><div class="status-card">${t('maps_no_results')}</div></section>`;
    return;
  }
  root.innerHTML=`<section class="maps-panel"><div class="section-title"><div><h2>${t('maps_results')}</h2><p>${escapeHtml(query)} · Candeias - BA</p></div></div><div class="grid maps-grid">${data.results.map(item=>{
    const rating=item.avaliacao?`<p class="maps-meta">⭐ ${item.avaliacao}${item.total_avaliacoes?` (${item.total_avaliacoes})`:''}</p>`:'';
    const open=item.aberto_agora===true?`<span class="open-badge">${t('open_now')}</span>`:item.aberto_agora===false?`<span class="closed-badge">${t('closed_now')}</span>`:'';
    return `<article class="card explore-item maps-item"><img src="img/cidade.jpg" alt="${escapeHtml(item.nome)}"><span class="tag">${escapeHtml(item.categoria||query)}</span><h3>${escapeHtml(item.nome)}</h3><p>${escapeHtml(item.endereco||'Candeias - BA')}</p>${rating}${open}<div class="card-actions"><a class="btn" href="${item.mapa_url}" target="_blank" rel="noopener">${t('map')}</a></div></article>`;
  }).join('')}</div></section>`;
}

async function searchCity(query, automatic=false){
  query=String(query||'').trim();
  if(query.length<2)return;
  const root=document.getElementById('mapsResults');
  if(root)root.innerHTML=`<div class="status-card">${t('maps_loading')}</div>`;
  try{
    const data=await api(`/maps/search?q=${encodeURIComponent(query)}&lang=${lang()}`);
    const current=(document.getElementById('pesquisa')?.value||'').trim();
    if(automatic && current.toLowerCase()!==query.toLowerCase())return;
    renderMapsResults(data,query);
  }catch(err){
    const fallback=googleMapsSearchUrl(query);
    if(root)root.innerHTML=`<div class="status-card error">${escapeHtml(err.message)}<div style="margin-top:12px"><a class="btn" href="${fallback}" target="_blank" rel="noopener">${t('search_maps')}</a></div></div>`;
  }
}

function toggleFavorite(btn){
  let fav=JSON.parse(localStorage.getItem('favoritos')||'[]');
  const key=btn.dataset.key;
  fav=fav.includes(key)?fav.filter(x=>x!==key):[...fav,key];
  localStorage.setItem('favoritos',JSON.stringify(fav));
  renderExplore();
}

function showDetails(type,id){
  const item=exploreItems.find(x=>x.type===type&&x.id===id);if(!item)return;
  const title=lang()==='en'?(item.nome_en||item.nome):item.nome;
  const desc=lang()==='en'?(item.descricao_en||item.descricao):item.descricao;
  const modal=document.getElementById('detailsModal');
  modal.querySelector('.modal-image').src=item.imagem;
  modal.querySelector('.modal-image').onerror=()=>{modal.querySelector('.modal-image').onerror=null;modal.querySelector('.modal-image').src='img/cidade.jpg';};
  modal.querySelector('.modal-title').textContent=title;
  modal.querySelector('.modal-text').textContent=desc;
  const cat=modal.querySelector('.modal-category');if(cat)cat.textContent=categoryLabel(item);
  const addr=modal.querySelector('.modal-address');if(addr){addr.textContent=item.endereco?`${t('address')}: ${item.endereco}`:'';addr.hidden=!item.endereco;}
  const map=modal.querySelector('.map-link');if(item.mapa_url){map.href=item.mapa_url;map.hidden=false;map.textContent=t('map');}else map.hidden=true;
  modal.hidden=false;document.body.classList.add('modal-open');
}

function setupExplore(){
  const search=document.getElementById('pesquisa');
  if(search)search.addEventListener('input',()=>{renderExplore();});
  document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderExplore();
  }));
  document.querySelectorAll('.service-chip').forEach(btn=>btn.addEventListener('click',()=>{
    const q=btn.dataset.query||'';
    if(search)search.value=q;
    document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    document.querySelector('[data-filter="all"]')?.classList.add('active');
    renderExplore();
    searchCity(q);
    document.getElementById('mapsResults')?.scrollIntoView({behavior:'smooth',block:'start'});
  }));
  const modal=document.getElementById('detailsModal');
  if(modal)modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',()=>{modal.hidden=true;document.body.classList.remove('modal-open');}));
  loadExplore();
}
function showToast(text,type='success'){
  let box=document.querySelector('.toast-container');
  if(!box){box=document.createElement('div');box.className='toast-container';document.body.appendChild(box);}
  const toast=document.createElement('div');toast.className=`toast ${type==='error'?'error':''}`;toast.textContent=text;box.appendChild(toast);
  setTimeout(()=>toast.remove(),4500);
}
function maskEmail(email=''){const [u,d]=email.split('@');if(!u||!d)return email;return `${u.slice(0,3)}${'*'.repeat(Math.max(3,u.length-3))}@${d}`;}
function passwordChecks(value){return{length:value.length>=8,upper:/[A-Z]/.test(value),lower:/[a-z]/.test(value),number:/\d/.test(value),special:/[^A-Za-z0-9]/.test(value)};}
function strongPassword(value){return Object.values(passwordChecks(value)).every(Boolean);}
function setupPasswordUI(){
  document.querySelectorAll('[data-toggle-password]').forEach(btn=>btn.addEventListener('click',()=>{const input=document.getElementById(btn.dataset.togglePassword);if(!input)return;input.type=input.type==='password'?'text':'password';btn.textContent=input.type==='password'?'👁':'🙈';}));
  const senha=document.getElementById('senha'), confirm=document.getElementById('confirmarSenha');if(!senha||!confirm)return;
  const update=()=>{const checks=passwordChecks(senha.value),score=Object.values(checks).filter(Boolean).length;document.querySelectorAll('.password-rules li').forEach(li=>li.classList.toggle('ok',!!checks[li.dataset.rule]));const bar=document.getElementById('strengthBar');if(bar)bar.style.width=`${score*20}%`;const text=document.getElementById('strengthText');if(text)text.textContent=score<=2?'Força: fraca':score<5?'Força: média':'Força: forte';const match=document.getElementById('matchText');if(match){match.textContent=!confirm.value?'':confirm.value===senha.value?'✓ As senhas coincidem':'✕ As senhas não coincidem';match.className=confirm.value===senha.value?'sucesso':'erro';}};
  senha.addEventListener('input',update);confirm.addEventListener('input',update);
}
function setupAuth(){
  setupPasswordUI();
  const register=document.getElementById('cadastroForm');
  if(register)register.addEventListener('submit',async e=>{e.preventDefault();const msg=document.getElementById('mensagem');const nome=document.getElementById('nome').value.trim(),email=document.getElementById('email').value.trim(),senha=document.getElementById('senha').value,confirmar=document.getElementById('confirmarSenha').value;if(!nome||!email||!senha||!confirmar){setMessage(msg,t('required'),'erro');return;}if(!strongPassword(senha)){setMessage(msg,'Use uma senha forte cumprindo todos os requisitos.','erro');return;}if(senha!==confirmar){setMessage(msg,'As senhas não coincidem.','erro');return;}try{const data=await api('/auth/register',{method:'POST',body:JSON.stringify({nome,email,senha})});localStorage.setItem('emailPendente',data.email||email);showToast('Código enviado para seu e-mail!');location.href='verificar-email.html';}catch(err){if(err.precisaVerificar){localStorage.setItem('emailPendente',email);location.href='verificar-email.html';return;}setMessage(msg,err.message,'erro');showToast(err.message,'error');}});
  const login=document.getElementById('loginForm');if(login)login.addEventListener('submit',async e=>{e.preventDefault();const msg=document.getElementById('mensagem');const email=document.getElementById('email').value.trim();try{const data=await api('/auth/login',{method:'POST',body:JSON.stringify({email,senha:document.getElementById('senha').value})});localStorage.setItem('usuarioLogado',JSON.stringify(data.usuario));setMessage(msg,t('login_success'),'sucesso');setTimeout(()=>location.href='home.html',500);}catch(err){if(err.precisaVerificar){localStorage.setItem('emailPendente',err.email||email);location.href='verificar-email.html';return;}setMessage(msg,err.message||t('invalid_login'),'erro');}});
}
function setupEmailVerification(){
  const form=document.getElementById('verifyForm');if(!form)return;const email=localStorage.getItem('emailPendente')||new URLSearchParams(location.search).get('email')||'';if(!email){location.href='cadastro.html';return;}document.getElementById('maskedEmail').textContent=maskEmail(email);const input=document.getElementById('codigo');input.addEventListener('input',()=>input.value=input.value.replace(/\D/g,'').slice(0,6));
  form.addEventListener('submit',async e=>{e.preventDefault();const status=document.getElementById('verifyStatus');try{const data=await api('/auth/verify-email',{method:'POST',body:JSON.stringify({email,codigo:input.value})});setMessage(status,data.mensagem,'sucesso');showToast(data.mensagem);localStorage.removeItem('emailPendente');setTimeout(()=>location.href='login.html',1200);}catch(err){setMessage(status,err.message,'erro');showToast(err.message,'error');}});
  const btn=document.getElementById('resendCode');let timer;const cooldown=(seconds=60)=>{clearInterval(timer);let left=seconds;btn.disabled=true;btn.textContent=`Reenviar código em ${left}s`;timer=setInterval(()=>{left--;btn.textContent=left>0?`Reenviar código em ${left}s`:'Reenviar código';if(left<=0){clearInterval(timer);btn.disabled=false;}},1000);};cooldown(60);
  btn.addEventListener('click',async()=>{try{const data=await api('/auth/resend-code',{method:'POST',body:JSON.stringify({email})});showToast(data.mensagem);cooldown(data.retryAfter||60);}catch(err){showToast(err.message,'error');if(err.retryAfter)cooldown(err.retryAfter);}});
}
function setMessage(el,text,cls){if(el){el.textContent=text;el.className=cls;}}

function setupContact(){const form=document.getElementById('formContato');if(!form)return;const user=getUser();if(user){document.getElementById('nome').value=user.nome||'';document.getElementById('email').value=user.email||'';}const btn=form.querySelector('button[type="submit"]');let timer;const cooldown=(seconds=60)=>{clearInterval(timer);let left=seconds;btn.disabled=true;const original=t('send');btn.textContent=`Aguarde ${left}s`;timer=setInterval(()=>{left--;if(left<=0){clearInterval(timer);btn.disabled=false;btn.textContent=original;}else btn.textContent=`Aguarde ${left}s`;},1000);};form.addEventListener('submit',async e=>{e.preventDefault();const status=document.getElementById('formStatus');const body={nome:document.getElementById('nome').value.trim(),email:document.getElementById('email').value.trim(),mensagem:document.getElementById('mensagem').value.trim()};if(!body.nome||!body.email||!body.mensagem){setMessage(status,t('required'),'erro');showToast(t('required'),'error');return;}try{const data=await api('/contact',{method:'POST',body:JSON.stringify(body)});setMessage(status,data.mensagem||t('sent'),'sucesso');showToast('✓ Mensagem enviada com sucesso!');form.reset();cooldown(data.retryAfter||60);}catch(err){setMessage(status,err.message||t('server_error'),'erro');showToast(err.message||t('server_error'),'error');if(err.retryAfter)cooldown(err.retryAfter);}});}

async function setupProfile(){const root=document.getElementById('profileContent');if(!root)return;const user=getUser();const gate=document.getElementById('profileGate');if(!user){root.hidden=true;gate.hidden=false;return;}gate.hidden=true;root.hidden=false;document.getElementById('profileName').value=user.nome||'';document.getElementById('profileEmail').value=user.email||'';const photo=document.getElementById('previewFoto');const saved=localStorage.getItem(`foto_${user.email}`);if(saved)photo.src=saved;document.getElementById('fotoPerfil')?.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=ev=>{photo.src=ev.target.result;localStorage.setItem(`foto_${user.email}`,ev.target.result);};reader.readAsDataURL(file);});document.getElementById('profileForm')?.addEventListener('submit',async e=>{e.preventDefault();const status=document.getElementById('profileStatus');try{const data=await api(`/users/${user.id}`,{method:'PUT',body:JSON.stringify({nome:document.getElementById('profileName').value.trim(),email:document.getElementById('profileEmail').value.trim()})});localStorage.setItem('usuarioLogado',JSON.stringify(data.usuario));setMessage(status,data.mensagem||'OK','sucesso');}catch(err){setMessage(status,err.message,'erro');}});}

document.addEventListener('DOMContentLoaded',()=>{setupShell();setupPreferences();applyTranslations();setupBanner();setupExplore();setupAuth();setupEmailVerification();setupContact();setupProfile();});
