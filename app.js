// Lógica de la aplicación web - Portfolio de Pintor con Soporte Multi-Idioma

// Base de datos estática de las obras de arte (rutas y dimensiones)
const RAW_PAINTINGS = [
    { id: "painting-0", file: "always-remember-us-this-way Acrílico 54X73 Año 2021.jpg", year: "2021", status: "Disponible" },
    { id: "painting-1", file: "angelita Acrílico 55X46 Año 2019.jpg", year: "2019", status: "No disponible" },
    { id: "painting-2", file: "aquilino Acrilico 55×46  Año 2019.jpg", year: "2019", status: "No disponible" },
    { id: "painting-3", file: "autorretrato  Acrílico 73X54 Año 2025 .jpg", year: "2025", status: "No disponible" },
    { id: "painting-4", file: "baco Acrílico 61X46 Año 2023 .jpg", year: "2023", status: "No disponible" },
    { id: "painting-5", file: "COMANDANTE Acrílico 73X54 Año 2021.jpg", year: "2021", status: "Disponible" },
    { id: "painting-6", file: "COMPLICIDAD Acrílico 54X73 Año 2019.jpg", year: "2019", status: "No disponible" },
    { id: "painting-7", file: "DANZA ESMERALDA Acrílico 73X54 Año 2024 .jpg", year: "2024", status: "No disponible" },
    { id: "painting-8", file: "DUALIDAD Acrílico 55X46 Año 2020.jpg", year: "2020", status: "No disponible" },
    { id: "painting-9", file: "EN BUSCA DE RESPUESTAS Acrílico 81X60 Año 2024 .jpg", year: "2024", status: "No disponible" },
    { id: "painting-10", file: "EYES NEVER LIE Acrílico 73X54 Año 2021.jpg", year: "2021", status: "No disponible" },
    { id: "painting-11", file: "FELISA Acrílico 73X54 Año 2021.jpg", year: "2021", status: "No disponible" },
    { id: "painting-12", file: "FLOTANDO EN LA SERENIDAD Acrílico 54X73 Año 2024 .jpg", year: "2024", status: "Disponible" },
    { id: "painting-13", file: "FRAGMENTOS DE UN ALMA ROTA Acrílico 81X60 Año 2025.jpg", year: "2025", status: "Disponible" },
    { id: "painting-14", file: "FRIDA Acrílico 73X60 Año 2023.jpg", year: "2023", status: "No disponible" },
    { id: "painting-15", file: "GENI Acrílico 55X46 Año 2019.jpg", year: "2019", status: "No disponible" },
    { id: "painting-16", file: "GIOCONDA Acrílico 81X60 Año 2023.jpg", year: "2023", status: "Disponible" },
    { id: "painting-17", file: "IMAGINE Acrílico 81X60 Año 2023 .jpg", year: "2023", status: "Disponible" },
    { id: "painting-18", file: "J.K. ROWLING Acrílico 73X54 Año 2021 .jpg", year: "2021", status: "No disponible" },
    { id: "painting-19", file: "JE NE SAIS QUOI Acrílico 73X54 Año 2020.jpg", year: "2020", status: "No disponible" },
    { id: "painting-20", file: "JHON Acrílico 55X46 Año 2018 .jpg", year: "2018", status: "No disponible" },
    { id: "painting-21", file: "JOKER I Acrílico 73X54 Año 2023.jpg", year: "2023", status: "Disponible" },
    { id: "painting-22", file: "JOKER II Acrílico 73X54 Año 2023 .jpg", year: "2023", status: "Disponible" },
    { id: "painting-23", file: "JOKER Acrílico 73X54 Año 2021 .jpg", year: "2021", status: "Disponible" },
    { id: "painting-24", file: "LA JOVEN DE LA PERLA Acrilico 81X60 Año 2023.jpg", year: "2023", status: "Disponible" },
    { id: "painting-25", file: "LADY GAGA Acrílico 81X60 Año 2024 .jpg", year: "2024", status: "Disponible" },
    { id: "painting-26", file: "MAR Y PROMESAS Acrílico 81X60 Año 2025.jpg", year: "2025", status: "No disponible" },
    { id: "painting-27", file: "MARIBEL Acrílico 73X46 Año 2022.jpg", year: "2022", status: "No disponible" },
    { id: "painting-28", file: "MARILYN Acrílico 73X54 Año 2021.jpg", year: "2021", status: "No disponible" },
    { id: "painting-29", file: "NINJA 54X73 Año 2022.jpg", year: "2022", status: "Disponible" },
    { id: "painting-30", file: "NORMA JEANE Acrílico 81X60 Año 2023.jpg", year: "2023", status: "Disponible" },
    { id: "painting-31", file: "NUR Acrílico 73X54 Año 2022.jpg", year: "2022", status: "No disponible" },
    { id: "painting-32", file: "OLENEVOD Acrílico 54X73 Año 2021 .jpg", year: "2021", status: "Disponible" },
    { id: "painting-33", file: "PEAKY BLINDERS Acrílico 73X54 Año 2022.jpg", year: "2022", status: "No disponible" },
    { id: "painting-34", file: "REFLEJOS DE CASABLANCA Acrílico 50X65 Año 2019 .jpg", year: "2019", status: "No disponible" },
    { id: "painting-35", file: "REFUGEES Acrílico 100X81 Año 2023.jpg", year: "2023", status: "Disponible" },
    { id: "painting-36", file: "SHALLOW Acrílico 54X73 Año 2020.jpg", year: "2020", status: "Disponible" },
    { id: "painting-37", file: "SINFONÍA MARINA Acrílico 81X60 Año 2024 .jpg", year: "2024", status: "Disponible" },
    { id: "painting-38", file: "SOSIEGO Acrílico 73X54 Año 2020 .jpg", year: "2020", status: "Disponible" },
    { id: "painting-39", file: "SURI Acrílico 73X54 Año 2021 .jpg", year: "2021", status: "No disponible" },
    { id: "painting-40", file: "VENTANA AL ALMA Acrílico 81X60 Año 2024.jpg", year: "2024", status: "Disponible" },
    { id: "painting-41", file: "VOZ INDOMABLE Acrílico 81X60 Año 2025 .jpg", year: "2025", status: "Disponible" },
    { id: "painting-dali", file: "DALI Acrílico 81X60 Año 2023.jpg", year: "2023", status: "Disponible" },
    { id: "painting-el-padrino", file: "EL PADRINO Acrílico 73X54 Año 2022.jpg", year: "2022", status: "Disponible" },
    { id: "painting-itxaropena", file: "ITXAROPENA Acrílico 73X54 Año 2022.jpg", year: "2022", status: "No disponible" },
    { id: "painting-42", file: "EL NIÑO INTERIOR Acrílico 81X60 Año 2026.jpg", year: "2026", status: "Disponible" },
    { id: "painting-43", file: "INMA Acrílico 81X60 Año 2026.jpg", year: "2026", status: "Disponible" },
    { id: "painting-44", file: "TU SONRISA, MI REFUGIO Acrílico 81X60 Año 2026.jpg", year: "2026", status: "Disponible" }
];

const PAINTINGS_DATA = RAW_PAINTINGS.map(item => {
    const baseName = item.file.substring(0, item.file.lastIndexOf('.'));
    // Match dimensions: e.g. 54X73, 55×46 (both X, x, and ×)
    const sizeMatch = baseName.match(/(\d+)\s*[xX×]\s*(\d+)/);
    const size = sizeMatch ? `${sizeMatch[1]} x ${sizeMatch[2]} cm` : "Dimensiones Desconocidas";
    
    // Extract year dynamically from the filename (e.g. Año 2021)
    const yearMatch = baseName.match(/Año\s*(\d{4})/i);
    const year = yearMatch ? yearMatch[1] : item.year;
    
    // Extract raw title (everything before size match)
    let rawTitle = sizeMatch ? baseName.substring(0, sizeMatch.index).trim() : baseName;
    
    // Remove technique suffix
    rawTitle = rawTitle.replace(/\s*(Acrílico|Acrilico|Acrílica|Acrilica)\s*$/gi, '').trim();
    
    // Format Title in Title Case (e.g., ALWAYS REMEMBER US -> Always Remember Us)
    // while keeping Roman numerals (I, II) and abbreviations (J.K.)
    const formattedTitle = rawTitle.split(/\s+/).map(word => {
        if (!word) return '';
        if (/^[IVXLCDM]+$/i.test(word)) {
            return word.toUpperCase();
        }
        if (word.includes('.')) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    return {
        id: item.id,
        image: `Cuadros 2/${item.file}`,
        category: "acrilico", // Set category to acrilico for all paintings
        year: year,
        size: size,
        status: item.status,
        rawTitle: formattedTitle
    };
});

// Ordenar de más nuevo a más viejo (año descendente) y por título alfabético si es el mismo año
PAINTINGS_DATA.sort((a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    
    if (yearB !== yearA) {
        return yearB - yearA; // Año descendente (más nuevo a más viejo)
    }
    return a.rawTitle.localeCompare(b.rawTitle, 'es', { sensitivity: 'base' }); // Título alfabético
});

const EXHIBITIONS_DATA = [
    {
        id: "expo-0",
        image: "Exposiciones/Fundacion San Prudencio 2026.jpg",
        title: "Fundación San Prudencio",
        year: 2026,
        venue: "Fundación San Prudencio, Vitoria-Gasteiz"
    },
    {
        id: "expo-1",
        image: "Exposiciones/Apellaniz 2025.jpg",
        title: "Apellániz",
        year: 2025,
        venue: "Apellániz, Álava"
    },
    {
        id: "expo-2",
        image: "Exposiciones/Centro Civico Hegoalde 2025.jpg",
        title: "Centro Cívico Hegoalde",
        year: 2025,
        venue: "Centro Cívico Hegoalde, Vitoria-Gasteiz"
    },
    {
        id: "expo-3",
        image: "Exposiciones/Bizan Arana 2024.jpg",
        title: "Bizan Arana",
        year: 2024,
        venue: "Bizan Arana, Vitoria-Gasteiz"
    },
    {
        id: "expo-4",
        image: "Exposiciones/Residencia Ajuria 2024.jpg",
        title: "Residencia Ajuria",
        year: 2024,
        venue: "Residencia Ajuria, Vitoria-Gasteiz"
    },
    {
        id: "expo-5",
        image: "Exposiciones/Residencia Caser 2024.jpg",
        title: "Residencia Caser",
        year: 2024,
        venue: "Residencia Caser, Vitoria-Gasteiz"
    },
    {
        id: "expo-6",
        image: "Exposiciones/Bizan San cristobal 2023.jpg",
        title: "Bizan San Cristóbal",
        year: 2023,
        venue: "Bizan San Cristóbal, Vitoria-Gasteiz"
    },
    {
        id: "expo-7",
        image: "Exposiciones/Zabalgana 2023.jpg",
        title: "Centro Cívico Zabalgana",
        year: 2023,
        venue: "Centro Cívico Zabalgana, Vitoria-Gasteiz"
    },
    {
        id: "expo-8",
        image: "Exposiciones/Centro Civico Salburua 2021.jpg",
        title: "Centro Cívico Salburua",
        year: 2021,
        venue: "Centro Cívico Salburua, Vitoria-Gasteiz"
    }
];

// Estado global de la aplicación
const state = {
    activeSection: 'inicio',
    currentSlide: 0,
    slideInterval: null,
    currentLightboxId: null,
    filteredPaintings: [...PAINTINGS_DATA],
    currentLang: 'es'
};

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // Desactivar la restauración automática del scroll en el historial
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    initNavigation();
    initLanguageSwitcher();
    initSlider();
    initGalleryFilters();
    initLightbox();
    initContactForm();
    handleHashNavigation();
    
    // Iniciar con el idioma por defecto (Español)
    setLanguage('es');
});

// --- SISTEMA DE TRADUCCIÓN ---
function getNestedValue(obj, keyPath) {
    return keyPath.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
}

function initLanguageSwitcher() {
    const langSelect = document.getElementById('lang-selector');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
}

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    state.currentLang = lang;

    // Sincronizar el valor del selector desplegable
    const langSelect = document.getElementById('lang-selector');
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }

    // Cambiar atributo lang y dir del HTML para soporte RTL (árabe y hebreo)
    document.documentElement.lang = lang;
    if (lang === 'ar' || lang === 'he') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }

    // Traducir todos los elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(TRANSLATIONS[lang], key);
        if (value) {
            el.textContent = value;
        }
    });

    // Re-renderizar la galería, el carrusel y las exposiciones con los textos traducidos
    renderGallery();
    renderSlider();
    renderExhibitions();

    // Actualizar Lightbox si está abierto
    if (state.currentLightboxId) {
        updateLightboxTexts(state.currentLightboxId);
    }
}

// --- SISTEMA DE NAVEGACIÓN (SPA) ---
function initNavigation() {
    const navLinks = document.querySelectorAll('[data-target]');
    const sidebar = document.getElementById('app-sidebar');
    const menuToggle = document.getElementById('mobile-menu-toggle');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            navigateToSection(targetId);

            // Cerrar menú móvil al navegar
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Menú móvil hamburguesa
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
}

function navigateToSection(sectionId, keepScroll = false) {
    const currentSection = document.getElementById('section-' + state.activeSection);
    const targetSection = document.getElementById('section-' + sectionId);

    if (!targetSection) return;
    if (state.activeSection === sectionId && !keepScroll) return;

    // Desactivar sección actual
    if (currentSection) {
        currentSection.classList.remove('active');
    }

    // Activar sección destino
    targetSection.classList.add('active');
    state.activeSection = sectionId;

    // Función auxiliar para resetear el scroll de forma robusta
    const resetScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        const mainContent = document.querySelector('.main-content');
        if (mainContent) mainContent.scrollTop = 0;
        targetSection.scrollIntoView({ block: 'start', behavior: 'instant' });
    };

    // Reset de scroll instantáneo
    if (!keepScroll) {
        resetScroll();
    }

    // Actualizar enlaces de navegación activos
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('data-target') === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Actualizar Hash de URL sin disparar scroll
    history.pushState(null, null, `#${sectionId}`);

    // Si salimos de inicio, pausamos slider. Si entramos, iniciamos.
    if (sectionId === 'inicio') {
        startSliderAutoPlay();
    } else {
        stopSliderAutoPlay();
    }

    // Re-confirmar el scroll tras el reflow del navegador en intervalos sucesivos si no mantenemos scroll
    if (!keepScroll) {
        setTimeout(resetScroll, 50);
        setTimeout(resetScroll, 150);
        setTimeout(resetScroll, 300);
        setTimeout(resetScroll, 600);
    }
}

function handleHashNavigation() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById('section-' + hash)) {
        navigateToSection(hash);
    }
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash && state.activeSection !== hash) {
        navigateToSection(hash);
    }
});

// --- LÓGICA DEL COLLAGE DE FONDO DE INICIO ---
// Nota: mantenemos los nombres de renderSlider e initSlider para preservar compatibilidad sin alterar inicializaciones externas
function renderSlider() {
    const container = document.getElementById('collage-bg-container');
    if (!container) return;
    container.innerHTML = '';

    // Renderizar exactamente 48 elementos de cuadrícula (8x6 desktop, 4x12 móvil)
    const collageSlots = 48;

    for (let i = 0; i < collageSlots; i++) {
        const painting = PAINTINGS_DATA[i % PAINTINGS_DATA.length];
        
        const img = document.createElement('img');
        img.src = painting.image;
        img.alt = painting.rawTitle;
        img.className = 'collage-img';
        img.loading = 'lazy';
        img.setAttribute('data-id', painting.id);
        
        // Al hacer clic en una obra del collage, redirigir al lightbox en Mi Obra
        img.addEventListener('click', (e) => {
            const pId = e.currentTarget.getAttribute('data-id');
            redirectToPaintingDetails(pId);
        });

        container.appendChild(img);
    }
}

function initSlider() {
    renderSlider();
}

function startSliderAutoPlay() {}
function stopSliderAutoPlay() {}

// Requisito especial: click en banner lleva al cuadro en Mi Obra
function redirectToPaintingDetails(paintingId) {
    // 1. Cambiar a sección Mi Obra manteniendo el scroll para evitar colisión de resets
    navigateToSection('mi-obra', true);
    
    // 2. Esperar que termine la animación de sección y abrir el Lightbox
    setTimeout(() => {
        openLightbox(paintingId);
        
        // Hacer scroll suave hacia el elemento correspondiente de la galería
        const galleryItem = document.querySelector(`[data-id="${paintingId}"]`);
        if (galleryItem) {
            galleryItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 350);
}

// --- RENDERIZADO Y FILTRO DE GALERÍA (MI OBRA) ---
function renderGallery() {
    const grid = document.getElementById('painting-gallery-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const lang = state.currentLang;

    PAINTINGS_DATA.forEach(painting => {
        const translation = TRANSLATIONS[lang].paintings[painting.id];
        const title = (translation && translation.title) ? translation.title : painting.rawTitle;
        
        const catKey = 'filter' + painting.category.charAt(0).toUpperCase() + painting.category.slice(1);
        const categoryLabel = TRANSLATIONS[lang].miObra[catKey];

        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-category', painting.category);
        item.setAttribute('data-id', painting.id);
        
        item.innerHTML = `
            <div class="gallery-item-image">
                <img src="${painting.image}" alt="${title}" loading="lazy">
            </div>
            <div class="gallery-item-info">
                <span class="item-cat">${categoryLabel}</span>
                <h3 class="item-title">${title}</h3>
            </div>
        `;

        item.addEventListener('click', () => {
            openLightbox(painting.id);
        });

        grid.appendChild(item);
    });
}

function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Activar botón en el menú
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            filterGallery(filter);
        });
    });
}

function filterGallery(filter) {
    const items = document.querySelectorAll('.gallery-item');
    
    if (filter === 'todos') {
        state.filteredPaintings = [...PAINTINGS_DATA];
    } else {
        state.filteredPaintings = PAINTINGS_DATA.filter(p => p.category === filter);
    }

    items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'todos' || cat === filter) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// --- LIGHTBOX / MODAL DE DETALLE DE OBRA ---
function initLightbox() {
    const modal = document.getElementById('art-lightbox');
    const closeBtn = document.getElementById('close-lightbox');
    const prevBtn = document.getElementById('prev-lightbox-btn');
    const nextBtn = document.getElementById('next-lightbox-btn');
    const inquireBtn = document.getElementById('inquire-painting-btn');

    closeBtn.addEventListener('click', closeLightbox);
    
    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // Navegar en Lightbox
    prevBtn.addEventListener('click', () => {
        navigateLightbox(-1);
    });
    nextBtn.addEventListener('click', () => {
        navigateLightbox(1);
    });

    // Botón consultar obra
    inquireBtn.addEventListener('click', () => {
        const painting = PAINTINGS_DATA.find(p => p.id === state.currentLightboxId);
        if (painting) {
            closeLightbox();
            navigateToSection('contacto');
            
            const lang = state.currentLang;
            const translation = TRANSLATIONS[lang].paintings[painting.id];
            const title = (translation && translation.title) ? translation.title : painting.rawTitle;
            const tech = TRANSLATIONS[lang].techs.acrilico;
            
            const subjectTemplate = TRANSLATIONS[lang].lightbox.inquireSubject;
            const messageTemplate = TRANSLATIONS[lang].lightbox.inquireMessage;

            const subject = subjectTemplate.replace('{title}', title);
            const message = messageTemplate
                .replace('{title}', title)
                .replace('{year}', painting.year)
                .replace('{tech}', tech)
                .replace('{size}', painting.size);

            // Rellenar automáticamente formulario de contacto
            const subjectField = document.getElementById('form-subject');
            const messageField = document.getElementById('form-message');
            
            if (subjectField) {
                subjectField.value = subject;
                // Simular input para mover la etiqueta en el diseño CSS float
                subjectField.dispatchEvent(new Event('input', { bubbles: true }));
            }
            if (messageField) {
                messageField.value = message;
                messageField.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // Hacer focus al campo de nombre
            setTimeout(() => {
                const nameField = document.getElementById('form-name');
                if (nameField) nameField.focus();
            }, 500);
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
        }
    });
}

function openLightbox(paintingId) {
    const painting = PAINTINGS_DATA.find(p => p.id === paintingId);
    if (!painting) return;

    state.currentLightboxId = paintingId;

    // Poblar datos e imágenes
    document.getElementById('lightbox-img').src = painting.image;
    updateLightboxTexts(paintingId);

    // Mostrar modal
    const modal = document.getElementById('art-lightbox');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 50);

    // Desactivar scroll del cuerpo
    document.body.style.overflow = 'hidden';
}

function updateLightboxTexts(paintingId) {
    const painting = PAINTINGS_DATA.find(p => p.id === paintingId);
    if (!painting) return;

    const lang = state.currentLang;
    const translation = TRANSLATIONS[lang].paintings[paintingId];
    const lightboxTrans = TRANSLATIONS[lang].lightbox;

    const title = (translation && translation.title) ? translation.title : painting.rawTitle;
    const tech = (TRANSLATIONS[lang].techs && TRANSLATIONS[lang].techs.acrilico)
        ? TRANSLATIONS[lang].techs.acrilico
        : "Acrílico sobre lienzo";
    
    const desc = (typeof DESCRIPTIONS_DATA !== 'undefined' && DESCRIPTIONS_DATA[paintingId] && DESCRIPTIONS_DATA[paintingId][lang])
        ? DESCRIPTIONS_DATA[paintingId][lang]
        : (translation && translation.desc ? translation.desc : "");

    document.getElementById('lightbox-img').alt = title;
    
    // Categoría
    const catKey = 'filter' + painting.category.charAt(0).toUpperCase() + painting.category.slice(1);
    document.getElementById('lightbox-cat').textContent = TRANSLATIONS[lang].miObra[catKey];
    
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-year').textContent = painting.year;
    document.getElementById('lightbox-tech').textContent = tech;
    document.getElementById('lightbox-size').textContent = painting.size;
    document.getElementById('lightbox-desc').textContent = desc;

    // Estado de la obra
    const statusVal = document.getElementById('lightbox-status');
    const isAvailable = painting.status === 'Disponible';
    statusVal.textContent = isAvailable ? lightboxTrans.available : lightboxTrans.privateCol;
    statusVal.style.color = isAvailable ? '#81c784' : '#e57373';
}

function closeLightbox() {
    const modal = document.getElementById('art-lightbox');
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('poster-mode');
        // Activar scroll del cuerpo
        document.body.style.overflow = '';
        state.currentLightboxId = null;
    }, 500);
}

function navigateLightbox(direction) {
    const modal = document.getElementById('art-lightbox');
    if (modal.classList.contains('poster-mode')) {
        const currentIndex = EXHIBITIONS_DATA.findIndex(e => e.id === state.currentLightboxId);
        if (currentIndex === -1) return;

        let nextIndex = currentIndex + direction;
        if (nextIndex >= EXHIBITIONS_DATA.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = EXHIBITIONS_DATA.length - 1;

        const nextPoster = EXHIBITIONS_DATA[nextIndex];
        
        const content = document.querySelector('.lightbox-content');
        content.style.transform = 'scale(0.95)';
        content.style.opacity = '0.5';

        setTimeout(() => {
            state.currentLightboxId = nextPoster.id;
            document.getElementById('lightbox-img').src = nextPoster.image;
            document.getElementById('lightbox-img').alt = nextPoster.title;
            
            content.style.transform = 'scale(1)';
            content.style.opacity = '1';
        }, 150);
        return;
    }

    // Encontrar índice actual en la lista filtrada para una navegación consistente
    const currentIndex = state.filteredPaintings.findIndex(p => p.id === state.currentLightboxId);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex + direction;
    if (nextIndex >= state.filteredPaintings.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = state.filteredPaintings.length - 1;

    const nextPainting = state.filteredPaintings[nextIndex];
    
    // Transición visual rápida al cambiar de cuadro en el modal
    const content = document.querySelector('.lightbox-content');
    content.style.transform = 'scale(0.95)';
    content.style.opacity = '0.5';

    setTimeout(() => {
        openLightbox(nextPainting.id);
        content.style.transform = 'scale(1)';
        content.style.opacity = '1';
    }, 150);
}

// --- FORMULARIO DE CONTACTO ---
function initContactForm() {
    const form = document.getElementById('artist-contact-form');
    const statusMsg = document.getElementById('form-status-msg');

    // Añadir manejadores para etiquetas flotantes de textarea/inputs pre-rellenos
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.placeholder = ' '; // Habilita el CSS selector :not(:placeholder-shown)
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const subject = document.getElementById('form-subject').value;
        const message = document.getElementById('form-message').value;
        
        const lang = state.currentLang;

        // Validaciones básicas
        if (!name || !email || !message) {
            showFormStatus(TRANSLATIONS[lang].contacto.formError, 'error');
            return;
        }

        // Simulación de envío
        const submitBtn = document.getElementById('form-submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = TRANSLATIONS[lang].contacto.formSending;

        setTimeout(() => {
            const successTemplate = TRANSLATIONS[lang].contacto.formSuccess;
            const successMsg = successTemplate.replace('{name}', name);
            
            showFormStatus(successMsg, 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = TRANSLATIONS[lang].contacto.formBtn;
            
            // Eliminar clases flotantes al resetear
            inputs.forEach(i => i.placeholder = ' ');
        }, 1500);
    });

    function showFormStatus(msg, type) {
        statusMsg.textContent = msg;
        statusMsg.className = `form-status ${type}`;
        statusMsg.style.display = 'block';

        // Ocultar mensaje de éxito después de 8 segundos
        if (type === 'success') {
            setTimeout(() => {
                statusMsg.style.opacity = '0';
                setTimeout(() => {
                    statusMsg.style.display = 'none';
                    statusMsg.style.opacity = '1';
                }, 400);
            }, 8000);
        }
    }
}

// --- FUNCIONES ADICIONALES PARA EXPOSICIONES ---
function openPosterLightbox(posterId) {
    const poster = EXHIBITIONS_DATA.find(e => e.id === posterId);
    if (!poster) return;

    state.currentLightboxId = posterId;

    // Poblar imagen
    document.getElementById('lightbox-img').src = poster.image;
    document.getElementById('lightbox-img').alt = poster.title;

    // Mostrar modal con la clase de poster-mode
    const modal = document.getElementById('art-lightbox');
    modal.classList.add('poster-mode');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 50);

    // Desactivar scroll del cuerpo
    document.body.style.overflow = 'hidden';
}

function renderExhibitions() {
    const container = document.getElementById('exhibitions-timeline-container');
    if (!container) return;

    container.innerHTML = '';
    const lang = state.currentLang;

    // Agrupar exposiciones por año
    const groupedExpos = {};
    EXHIBITIONS_DATA.forEach(expo => {
        if (!groupedExpos[expo.year]) {
            groupedExpos[expo.year] = [];
        }
        groupedExpos[expo.year].push(expo);
    });

    // Ordenar años de forma descendente (más recientes primero)
    const years = Object.keys(groupedExpos).sort((a, b) => b - a);

    years.forEach(year => {
        const yearGroup = document.createElement('div');
        yearGroup.className = 'timeline-year-group';

        const yearHeader = document.createElement('div');
        yearHeader.className = 'timeline-year-header';
        yearHeader.innerHTML = `<h3>${year}</h3>`;
        yearGroup.appendChild(yearHeader);

        const grid = document.createElement('div');
        grid.className = 'timeline-posters-grid';

        groupedExpos[year].forEach(expo => {
            const translation = (TRANSLATIONS[lang].exposiciones && TRANSLATIONS[lang].exposiciones.items)
                ? TRANSLATIONS[lang].exposiciones.items[expo.id]
                : null;
            const title = translation ? translation.title : expo.title;
            const venue = translation ? translation.venue : expo.venue;
            const dates = translation ? translation.dates : "";

            const card = document.createElement('div');
            card.className = 'poster-card';
            card.setAttribute('data-id', expo.id);
            card.innerHTML = `
                <div class="poster-image-container">
                    <img src="${expo.image}" alt="${title}" loading="lazy">
                    <div class="poster-hover-overlay">
                        <span class="zoom-icon">🔍</span>
                    </div>
                </div>
                <div class="poster-details">
                    <h4 class="poster-title">${title}</h4>
                    <p class="poster-venue">${venue}</p>
                    ${dates ? `<p class="poster-dates"><span class="calendar-icon">📅</span> ${dates}</p>` : ''}
                </div>
            `;

            card.addEventListener('click', () => {
                openPosterLightbox(expo.id);
            });

            grid.appendChild(card);
        });

        yearGroup.appendChild(grid);
        container.appendChild(yearGroup);
    });
}
