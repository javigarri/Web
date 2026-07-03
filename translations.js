// Diccionario de traducciones para soporte multi-idioma (ES, EN, FR, EU)

const TRANSLATIONS = {
    es: {
        nav: {
            inicio: "Inicio",
            miObra: "Mi Obra",
            sobreMi: "Sobre Mí",
            exposiciones: "Exposiciones",
            contacto: "Contacto",
            studio: "Estudio de Arte"
        },
        welcome: {
            tag: "Presentación",
            title: "Bienvenid@s a mi espacio",
            desc: "El objetivo de esta web es ofrecer un recorrido por mis creaciones. Una colección de caras, algunas conocidas y otras anónimas, pero todas llenas de historias que contar, las cuales he tratado de plasmar en mis cuadros. Espero que os transmitan todas esas emociones y experiencias.",
            footer: "¡Disfrutad del viaje…!"
        },
        slider: {
            tag: "Obra Destacada",
            tagNew: "Novedad",
            tagSelected: "Obra Seleccionada",
            tagExclusive: "Colección Exclusiva",
            explore: "Explorar Obra",
            hoverTip: "Ver Detalle"
        },
        miObra: {
            subtitle: "Galería",
            title: "Mi Obra",
            filterAll: "Todos",
            filterOleo: "Óleos",
            filterAcrilico: "Acrílicos",
            filterMixta: "Técnica Mixta"
        },
        techs: {
            acrilico: "Acrílico sobre lienzo"
        },
        sobreMi: {
            subtitle: "Trayectoria",
            title: "Sobre Mí",
            quote: "«Si pudieras decirlo con palabras, no habría razón para pintarlo.»",
            quoteAuthor: "Edward Hopper",
            p1: "Mi nombre es Javi. Nací en Vitoria-Gasteiz en 1963, aunque pasé mi infancia en Apellániz, donde vivía toda mi familia.",
            p2: "Una vez finalizados mis estudios, me trasladé a Valencia donde residí tres años. Durante aquella estancia se despertó en mí el interés por el arte, ya que conocí de cerca el trabajo de Paco Sena, pintor amateur cuya obra estaba inspirada en Sorolla.",
            p3: "Al regresar a Vitoria, trabajé durante veinte años en la industria aeronáutica. En 2010 me desplacé a Monaghan (Irlanda), donde viví un año. Allí cooperé en «Solas Drop-in Centre», un centro de acogida a personas en riesgo de exclusión social. Fue en esa etapa cuando empezó mi andadura en el mundo de la pintura. En aquel nuevo entorno, los sentimientos y las emociones que me rodeaban fueron la inspiración para mis primeros bocetos.",
            p4: "Después de un tiempo alejado del arte, me reencontré con aquello que me sirvió hace unos años para evadirme, la pintura. Esta web es un reflejo de todo aquello que he ido aprendiendo y creando.",
            signature: "Espero que os guste…"
        },
        exposiciones: {
            subtitle: "Agenda",
            title: "Exposiciones",
            items: {
                "expo-0": { title: "Fundación San Prudencio", venue: "Fundación San Prudencio, Vitoria-Gasteiz", dates: "2026" },
                "expo-1": { title: "Apellániz", venue: "Apellániz, Álava", dates: "2025" },
                "expo-2": { title: "Centro Cívico Hegoalde", venue: "Centro Cívico Hegoalde, Vitoria-Gasteiz", dates: "2025" },
                "expo-3": { title: "Bizan Arana", venue: "Bizan Arana, Vitoria-Gasteiz", dates: "2024" },
                "expo-4": { title: "Residencia Ajuria", venue: "Residencia Ajuria, Vitoria-Gasteiz", dates: "2024" },
                "expo-5": { title: "Residencia Caser", venue: "Residencia Caser, Vitoria-Gasteiz", dates: "2024" },
                "expo-6": { title: "Bizan San Cristóbal", venue: "Bizan San Cristóbal, Vitoria-Gasteiz", dates: "2023" },
                "expo-7": { title: "Centro Cívico Zabalgana", venue: "Centro Cívico Zabalgana, Vitoria-Gasteiz", dates: "2023" },
                "expo-8": { title: "Centro Cívico Salburua", venue: "Centro Cívico Salburua, Vitoria-Gasteiz", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "Conversaciones",
            title: "Contacto",
            desc: "Si deseas adquirir una de las obras, programar una visita privada a mi taller en Madrid, o discutir una comisión a medida, por favor escríbeme. Estaré encantado de recibirte.",
            labelAddress: "Taller / Dirección",
            labelEmail: "Email",
            labelPhone: "Teléfono",
            formName: "Nombre Completo",
            formEmail: "Correo Electrónico",
            formSubject: "Asunto (Ej: Interés en obra o visita)",
            formMessage: "Mensaje",
            formBtn: "Enviar Mensaje",
            formSuccess: "¡Gracias, {name}! Tu mensaje ha sido enviado correctamente. Responderé lo antes posible.",
            formError: "Por favor, rellena todos los campos requeridos.",
            formSending: "Enviando..."
        },
        lightbox: {
            year: "Año",
            tech: "Técnica",
            size: "Dimensiones",
            status: "Estado",
            available: "Disponible",
            privateCol: "No disponible",
            btnInquire: "Consultar disponibilidad",
            btnPrev: "← Anterior",
            btnNext: "Siguiente →",
            inquireSubject: "Consulta de obra: \"{title}\"",
            inquireMessage: "Hola, estoy interesado/a en conocer más detalles (precios, visitas) sobre el cuadro \"{title}\" ({year}, {tech}, {size}). Quedo a la espera."
        },
        paintings: {
            "painting-0": {
                title: "Always remember us this way",
                tech: "Óleo sobre lienzo",
                desc: "Una obra íntima que explora las profundidades de la introspección humana mediante veladuras superpuestas de azul cobalto, siena tostada y oro. Las pinceladas cargadas representan el estrato de las vivencias del alma."
            },
            "painting-1": {
                title: "Angelita",
                tech: "Acrílico y texturas sobre tabla",
                desc: "Esta pintura presenta una audaz intersección de planos geométricos y texturas densas creadas con pasta de mármol. Simboliza la búsqueda constante de equilibrio y estructura frente al aparente desorden de la existencia."
            },
            "painting-2": {
                title: "Aquilino",
                tech: "Técnica mixta sobre lienzo",
                desc: "La fusión de grafito, carboncillo, acrílico y finas capas de pintura al óleo diluida crea una atmósfera enigmática. Sugiere la transitoriedad y la belleza melancólica de los recuerdos desvanecidos por el tiempo."
            },
            "painting-3": {
                title: "Autorretrato",
                tech: "Óleo con espátula sobre lienzo",
                desc: "Trabajada íntegramente con espátulas metálicas, esta obra captura la energía y los contrastes cromáticos de la vida urbana. Capas gruesas de óleo crean una topografía de colores intensos y contrastados."
            },
            "painting-4": {
                title: "Baco",
                tech: "Óleo sobre lino",
                desc: "Un ejercicio minimalista de contemplación marina. La extrema sutileza cromática evoca el amanecer de una costa brumosa, donde el cielo y el océano se funden en una sola y serena vibración visual."
            },
            "painting-5": {
                title: "Comandante",
                tech: "Acrílico sobre lienzo",
                desc: "Una explosión de rojos, ocres y violetas que abstraen el fenómeno de la luz en el ocaso. Las pinceladas gestuales libres aportan un ritmo dinámico y apasionado a la composición general."
            },
            "painting-6": {
                title: "Complicidad",
                tech: "Técnica mixta y pan de oro",
                desc: "Una pieza inspirada en el norte, la soledad y la comunión con la naturaleza hostil. La textura rugosa de arena e hilo en el lienzo contrasta con la finura brillante del pan de oro de 22K que resalta los puntos de luz."
            }
        }
    },
    en: {
        nav: {
            inicio: "Home",
            miObra: "My Work",
            sobreMi: "About Me",
            exposiciones: "Exhibitions",
            contacto: "Contact",
            studio: "Art Studio"
        },
        welcome: {
            tag: "Introduction",
            title: "Welcome to my space",
            desc: "The purpose of this website is to offer a journey through my creations. A collection of faces, some familiar and others anonymous, but all full of stories to tell, which I have tried to express in my paintings. I hope they convey all these emotions and experiences to you.",
            footer: "Enjoy the journey…!"
        },
        slider: {
            tag: "Featured Work",
            tagNew: "New Release",
            tagSelected: "Selected Work",
            tagExclusive: "Exclusive Collection",
            explore: "Explore Work",
            hoverTip: "View Details"
        },
        miObra: {
            subtitle: "Gallery",
            title: "My Work",
            filterAll: "All",
            filterOleo: "Oils",
            filterAcrilico: "Acrylics",
            filterMixta: "Mixed Media"
        },
        techs: {
            acrilico: "Acrylic on canvas"
        },
        sobreMi: {
            subtitle: "Career",
            title: "About Me",
            quote: "«If you could say it in words, there would be no reason to paint it.»",
            quoteAuthor: "Edward Hopper",
            p1: "My name is Javi. I was born in Vitoria-Gasteiz in 1963, although I spent my childhood in Apellániz, where all my family lived.",
            p2: "Once my studies were completed, I moved to Valencia where I lived for three years. During that stay my interest in art was awakened, as I got to know first-hand the work of Paco Sena, an amateur painter whose work was inspired by Sorolla.",
            p3: "Upon returning to Vitoria, I worked for twenty years in the aeronautical industry. In 2010 I moved to Monaghan (Ireland), where I lived for a year. There I cooperated at 'Solas Drop-in Centre', a shelter for people at risk of social exclusion. It was during this stage that my journey in the world of painting began. In that new environment, the feelings and emotions that surrounded me were the inspiration for my first sketches.",
            p4: "After some time away from art, I reunited with what had served me a few years ago to escape, painting. This website is a reflection of all that I have learned and created.",
            signature: "Hope you like it…"
        },
        exposiciones: {
            subtitle: "Schedule",
            title: "Exhibitions",
            items: {
                "expo-0": { title: "San Prudencio Foundation", venue: "San Prudencio Foundation, Vitoria-Gasteiz", dates: "2026" },
                "expo-1": { title: "Apellániz", venue: "Apellániz, Álava", dates: "2025" },
                "expo-2": { title: "Hegoalde Civic Centre", venue: "Hegoalde Civic Centre, Vitoria-Gasteiz", dates: "2025" },
                "expo-3": { title: "Bizan Arana", venue: "Bizan Arana, Vitoria-Gasteiz", dates: "2024" },
                "expo-4": { title: "Ajuria Residence", venue: "Ajuria Residence, Vitoria-Gasteiz", dates: "2024" },
                "expo-5": { title: "Caser Residence", venue: "Caser Residence, Vitoria-Gasteiz", dates: "2024" },
                "expo-6": { title: "Bizan San Cristóbal", venue: "Bizan San Cristóbal, Vitoria-Gasteiz", dates: "2023" },
                "expo-7": { title: "Zabalgana Civic Centre", venue: "Zabalgana Civic Centre, Vitoria-Gasteiz", dates: "2023" },
                "expo-8": { title: "Salburua Civic Centre", venue: "Salburua Civic Centre, Vitoria-Gasteiz", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "Conversations",
            title: "Contact",
            desc: "If you wish to purchase one of the works, schedule a private visit to my studio in Madrid, or discuss a custom commission, please write to me. I will be delighted to welcome you.",
            labelAddress: "Studio / Address",
            labelEmail: "Email",
            labelPhone: "Phone",
            formName: "Full Name",
            formEmail: "Email Address",
            formSubject: "Subject (e.g. Interest in work or visit)",
            formMessage: "Message",
            formBtn: "Send Message",
            formSuccess: "Thank you, {name}! Your message has been sent successfully. I will reply as soon as possible.",
            formError: "Please fill in all required fields.",
            formSending: "Sending..."
        },
        lightbox: {
            year: "Year",
            tech: "Technique",
            size: "Dimensions",
            status: "Status",
            available: "Available",
            privateCol: "Not available",
            btnInquire: "Inquire availability",
            btnPrev: "← Previous",
            btnNext: "Next →",
            inquireSubject: "Inquiry about work: \"{title}\"",
            inquireMessage: "Hello, I am interested in knowing more details (pricing, visits) about the painting \"{title}\" ({year}, {tech}, {size}). Looking forward to your reply."
        },
        paintings: {
            "painting-0": {
                title: "Always remember us this way",
                tech: "Oil on canvas",
                desc: "An intimate work that explores the depths of human introspection through superimposed glazes of cobalt blue, burnt sienna, and gold. The heavy brushstrokes represent the layers of life's experiences."
            },
            "painting-1": {
                title: "Angelita",
                tech: "Acrylic and textures on wood",
                desc: "This painting presents a bold intersection of geometric planes and dense textures created with marble paste. It symbolizes the constant search for balance and structure against the apparent disorder of existence."
            },
            "painting-2": {
                title: "Aquilino",
                tech: "Mixed media on canvas",
                desc: "The fusion of graphite, charcoal, acrylic, and thin layers of diluted oil paint creates an enigmatic atmosphere. It suggests the transience and melancholic beauty of memories faded by time."
            },
            "painting-3": {
                title: "Self-Portrait",
                tech: "Oil with palette knife on canvas",
                desc: "Worked entirely with metal palette knives, this piece captures the energy and chromatic contrasts of urban life. Thick layers of oil paint create a topography of intense and contrasting colors."
            },
            "painting-4": {
                title: "Baco",
                tech: "Oil on linen",
                desc: "A minimalist exercise in marine contemplation. The extreme chromatic subtlety evokes the dawn of a misty coast, where the sky and the ocean merge in a single, serene visual vibration."
            },
            "painting-5": {
                title: "Comandante",
                tech: "Acrylic on canvas",
                desc: "An explosion of reds, ochres, and purples abstracting the light during twilight. The free gestural brushstrokes bring a dynamic and passionate rhythm to the overall composition."
            },
            "painting-6": {
                title: "Complicidad",
                tech: "Mixed media and gold leaf",
                desc: "A piece inspired by the far north, solitude, and communion with a hostile nature. The rough texture of sand and thread on the canvas contrasts with the brilliant refinement of the 22K gold leaf."
            }
        }
    },
    fr: {
        nav: {
            inicio: "Accueil",
            miObra: "Mon Œuvre",
            sobreMi: "À Propos",
            exposiciones: "Expositions",
            contacto: "Contact",
            studio: "Atelier d'Art"
        },
        welcome: {
            tag: "Présentation",
            title: "Bienvenue dans mon espace",
            desc: "L'objectif de ce site est de proposer un parcours à travers mes créations. Une collection de visages, certains familiers et d'autres anonymes, mais tous chargés d'histoires à raconter, que j'ai essayé d'exprimer dans mes tableaux. J'espère qu'ils vous transmettront toutes ces émotions et expériences.",
            footer: "Bon voyage…!"
        },
        slider: {
            tag: "Œuvre Vedette",
            tagNew: "Nouveauté",
            tagSelected: "Œuvre Sélectionnée",
            tagExclusive: "Collection Exclusive",
            explore: "Explorer l'Œuvre",
            hoverTip: "Voir Détails"
        },
        miObra: {
            subtitle: "Galerie",
            title: "Mon Œuvre",
            filterAll: "Tous",
            filterOleo: "Huiles",
            filterAcrilico: "Acryliques",
            filterMixta: "Technique Mixte"
        },
        techs: {
            acrilico: "Acrylique sur toile"
        },
        sobreMi: {
            subtitle: "Parcours",
            title: "À Propos de Moi",
            quote: "«Si vous pouviez le dire avec des mots, il n'y aurait aucune raison de le peindre.»",
            quoteAuthor: "Edward Hopper",
            p1: "Je m'appelle Javi. Je suis né à Vitoria-Gasteiz en 1963, bien que j'aie passé mon enfance à Apellániz, où vivait toute ma famille.",
            p2: "Une fois mes études terminées, je me suis installé à Valence où j'ai résidé pendant trois ans. C'est durant ce séjour que s'est éveillé mon intérêt pour l'art, car j'ai découvert de près le travail de Paco Sena, peintre amateur dont l'œuvre s'inspirait de Sorolla.",
            p3: "À mon retour à Vitoria, j'ai travaillé pendant vingt ans dans l'industrie aéronautique. En 2010, je me suis installé à Monaghan (Irlande), où j'ai vécu un an. J'y ai collaboré avec le « Solas Drop-in Centre », un centre d'accueil pour personnes en risque d'exclusion sociale. C'est à cette époque que mon parcours dans le monde de la peinture a débuté. Dans ce nouvel environnement, les sentiments et les émotions qui m'entouraient ont été l'inspiration de mes premières esquisses.",
            p4: "Après avoir passé quelque temps loin de l'art, j'ai renoué avec ce qui m'avait servi quelques années auparavant à m'évader : la peinture. Ce site est le reflet de tout ce que j'ai appris et créé.",
            signature: "J'espère que vous l'aimerez…"
        },
        exposiciones: {
            subtitle: "Agenda",
            title: "Expositions",
            items: {
                "expo-0": { title: "Fondation San Prudencio", venue: "Fondation San Prudencio, Vitoria-Gasteiz", dates: "2026" },
                "expo-1": { title: "Apellániz", venue: "Apellániz, Álava", dates: "2025" },
                "expo-2": { title: "Centre Civique Hegoalde", venue: "Centre Civique Hegoalde, Vitoria-Gasteiz", dates: "2025" },
                "expo-3": { title: "Bizan Arana", venue: "Bizan Arana, Vitoria-Gasteiz", dates: "2024" },
                "expo-4": { title: "Résidence Ajuria", venue: "Résidence Ajuria, Vitoria-Gasteiz", dates: "2024" },
                "expo-5": { title: "Résidence Caser", venue: "Résidence Caser, Vitoria-Gasteiz", dates: "2024" },
                "expo-6": { title: "Bizan San Cristóbal", venue: "Bizan San Cristóbal, Vitoria-Gasteiz", dates: "2023" },
                "expo-7": { title: "Centre Civique Zabalgana", venue: "Centre Civique Zabalgana, Vitoria-Gasteiz", dates: "2023" },
                "expo-8": { title: "Centre Civique Salburua", venue: "Centre Civique Salburua, Vitoria-Gasteiz", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "Conversations",
            title: "Contact",
            desc: "Si vous souhaitez acquérir l'une des œuvres, planifier une visite privée de mon atelier à Madrid ou discuter d'une commande sur mesure, n'hésitez pas à m'écrire. Je serai ravi de vous accueillir.",
            labelAddress: "Atelier / Adresse",
            labelEmail: "Email",
            labelPhone: "Téléphone",
            formName: "Nom Complet",
            formEmail: "Adresse E-mail",
            formSubject: "Objet (Ex: Intérêt pour une œuvre o visite)",
            formMessage: "Message",
            formBtn: "Envoyer le message",
            formSuccess: "Merci, {name}! Votre message a été envoyé avec succès. Je répondrai dès que possible.",
            formError: "Veuillez remplir tous les champs obligatoires.",
            formSending: "Envoi en cours..."
        },
        lightbox: {
            year: "Année",
            tech: "Technique",
            size: "Dimensions",
            status: "Statut",
            available: "Disponible",
            privateCol: "Non disponible",
            btnInquire: "Consulter la disponibilité",
            btnPrev: "← Précédent",
            btnNext: "Suivant →",
            inquireSubject: "Demande d'information: \"{title}\"",
            inquireMessage: "Bonjour, je serais intéressé(e) d'en savoir plus (prix, visites) sur le tableau \"{title}\" ({year}, {tech}, {size}). Dans l'attente de votre réponse."
        },
        paintings: {
            "painting-0": {
                title: "Always remember us this way",
                tech: "Huile sur toile",
                desc: "Une œuvre intime explorant les profondeurs de l'introspection humaine à travers des couches superposées de bleu cobalt, de terre de Sienne brûlée et d'or. Les coups de pinceau denses représentent les couches de l'expérience de la vie."
            },
            "painting-1": {
                title: "Angelita",
                tech: "Acrylique et textures sur panneau",
                desc: "Cette peinture présente une intersection audacieuse de plans géométriques et de textures épaisses créées avec de la pâte de marbre. Elle symbolise la recherche constante de l'ordre face au désordre apparent de la vie."
            },
            "painting-2": {
                title: "Aquilino",
                tech: "Technique mixte sur toile",
                desc: "La fusion du graphite, du fusain, de l'acrylique et de fines couches de peinture à l'huile diluée crée une atmosphère énigmatique. Elle suggère le caractère éphémère et la beauté mélancolique des souvenirs effacés par le temps."
            },
            "painting-3": {
                title: "Autoportrait",
                tech: "Huile au couteau sur toile",
                desc: "Travaillée entièrement au couteau, cette œuvre capte l'énergie et les contrastes de couleurs de la vie urbaine. Les épaisses couches de peinture créent une véritable topographie de teintes vives."
            },
            "painting-4": {
                title: "Baco",
                tech: "Huile sur lin",
                desc: "Un exercice minimaliste de contemplation marine. La subtilité des couleurs évoque l'aube sur une côte brumeuse, où le ciel et l'océan se fondent dans une même vibration visuelle sereine."
            },
            "painting-5": {
                title: "Comandante",
                tech: "Acrylique sur toile",
                desc: "Une explosion de rouges, d'ocres et de violets qui capture la lumière éphémère du crépuscule. Les coups de pinceau dynamiques et libres confèrent un rythme passionné à la composition."
            },
            "painting-6": {
                title: "Complicidad",
                tech: "Technique mixte et feuille d'or",
                desc: "Une pièce inspirée par le Grand Nord, la solitude et la communion avec une nature sauvage. La texture rugueuse du sable sur la toile contraste avec l'éclat délicat de la feuille d'or 22 carats."
            }
        }
    },
    eu: {
        nav: {
            inicio: "Hasiera",
            miObra: "Nire Lana",
            sobreMi: "Niri Buruz",
            exposiciones: "Erakusketak",
            contacto: "Kontaktua",
            studio: "Arte Lantegia"
        },
        welcome: {
            tag: "Aurkezpena",
            title: "Ongi etorri nire gunera",
            desc: "Webgune honen helburua nire sorkuntzetan zehar ibilbide bat eskaintzea da. Aurpegien bilduma bat, batzuk ezagunak eta beste batzuk anonimoak, baina guztiak kontatzeko istorioz beteak, nire margolanetan islatzen ahalegindu naizenak. Sentimendu eta esperientzia horiek guztiak helaraziko dizkizuelakoan nago.",
            footer: "Gozatu bidaiaz…!"
        },
        slider: {
            tag: "Obra Nabarmentzailea",
            tagNew: "Berria",
            tagSelected: "Hautatutako Obra",
            tagExclusive: "Bilduma Esklusiboa",
            explore: "Ikusi Margolana",
            hoverTip: "Ikusi Xehetasuna"
        },
        miObra: {
            subtitle: "Galeria",
            title: "Nire Lana",
            filterAll: "Denak",
            filterOleo: "Olio-pinturak",
            filterAcrilico: "Akrilikoak",
            filterMixta: "Teknika Mistoa"
        },
        techs: {
            acrilico: "Akrilikoa mihise gainean"
        },
        sobreMi: {
            subtitle: "Ibilbidea",
            title: "Niri Buruz",
            quote: "«Hitzekin esan ahal bazenu, ez zatekeen margotzeko arrazoirik egongo.»",
            quoteAuthor: "Edward Hopper",
            p1: "Javi dut izena. Gasteizen jaio nintzen 1963an, nahiz eta haurtzaroa Apilaizen igaro nuen, nire familia guztia bizi zen lekuan.",
            p2: "Ikasketak amaitu ondoren, Valentziara joan nintzen eta hiru urtez bizi izan nintzen bertan. Egonaldi hartan piztu zitzaidan artearekiko interesa, gertutik ezagutu bainuen Paco Senaren lana, bere obra Sorollarengan inspiratua zuen margolari amateurra.",
            p3: "Gasteizera itzultzean, hogei urtez egin nuen lan aeronautikaren industrian. 2010ean Monaghanera (Irlanda) joan nintzen urtebetez bizitzera. Han, gizarte-bazterkeriako arriskuan zeuden pertsonei harrera egiteko «Solas Drop-in Centre» zentroan lagundu nuen. Garai hartan hasi nintzen margolaritzaren munduan. Ingurune berri hartan, nire inguruko sentimenduak eta emozioak izan ziren nire lehen zirriborroetarako inspirazio-iturri.",
            p4: "Artetik denbora batez urrun egon ondoren, duela urte batzuk ihes egiteko balio izan zidan horrekin topo egin nuen berriro: margolaritzarekin. Webgune hau ikasten eta sortzen joan naizen guztiari buruzko hausnarketa da.",
            signature: "Zuen gustukoa izatea espero dut…"
        },
        exposiciones: {
            subtitle: "Egutegia",
            title: "Erakusketak",
            items: {
                "expo-0": { title: "San Prudentzio Fundazioa", venue: "San Prudentzio Fundazioa, Vitoria-Gasteiz", dates: "2026" },
                "expo-1": { title: "Apellániz", venue: "Apellániz, Araba", dates: "2025" },
                "expo-2": { title: "Hegoalde Gizarte Etxea", venue: "Hegoalde Gizarte Etxea, Vitoria-Gasteiz", dates: "2025" },
                "expo-3": { title: "Bizan Arana", venue: "Bizan Arana, Vitoria-Gasteiz", dates: "2024" },
                "expo-4": { title: "Ajuria Egoitza", venue: "Ajuria Egoitza, Vitoria-Gasteiz", dates: "2024" },
                "expo-5": { title: "Caser Egoitza", venue: "Caser Egoitza, Vitoria-Gasteiz", dates: "2024" },
                "expo-6": { title: "Bizan San Cristóbal", venue: "Bizan San Cristóbal, Vitoria-Gasteiz", dates: "2023" },
                "expo-7": { title: "Zabalgana Gizarte Etxea", venue: "Zabalgana Gizarte Etxea, Vitoria-Gasteiz", dates: "2023" },
                "expo-8": { title: "Salburua Gizarte Etxea", venue: "Salburua Gizarte Etxea, Vitoria-Gasteiz", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "Elkarrizketak",
            title: "Kontaktua",
            desc: "Margolanen bat erosi nahi baduzu, Madrilgo nire tailerrera bisita pribatu bat antolatu nahi baduzu, edo enkarguzko lan bat adostu nahi baduzu, idatz iezadazu. Pozik hartuko zaitut.",
            labelAddress: "Lantegia / Helbidea",
            labelEmail: "Emaila",
            labelPhone: "Telefonoa",
            formName: "Izen-abizenak",
            formEmail: "Posta elektronikoa",
            formSubject: "Gaia (Adib: Lanarekiko interesa edo bisita)",
            formMessage: "Mezua",
            formBtn: "Mezua Bidali",
            formSuccess: "Eskerrik asko, {name}! Zure mezua ondo bidali da. Ahalik eta azkarren erantzungo dizut.",
            formError: "Mesedez, bete eskatutako eremu guztiak.",
            formSending: "Bidaltzen..."
        },
        lightbox: {
            year: "Urtea",
            tech: "Teknika",
            size: "Neurriak",
            status: "Egoera",
            available: "Eskuragarri",
            privateCol: "Ez eskuragarri",
            btnInquire: "Galdetu eskuragarritasunaz",
            btnPrev: "← Aurrekoa",
            btnNext: "Hurrengoa →",
            inquireSubject: "Lanari buruzko galdera: \"{title}\"",
            inquireMessage: "Kaixo, interesatuta nago \"{title}\" ({year}, {tech}, {size}) margolanari buruzko xehetasun gehiago (prezioak, bisitak) jakiteko. Erantzunaren zain geratzen naiz."
        },
        paintings: {
            "painting-0": {
                title: "Always remember us this way",
                tech: "Olio-pintura oihal gainean",
                desc: "Gizakiaren barne-hausnarketaren sakontasuna aztertzen duen obra sakona, kobalto urdin, siena erre eta urrezko geruza gainjarrien bidez. Pincelada sendoek bizitzako esperientzien geruzak irudikatzen dituzte."
            },
            "painting-1": {
                title: "Angelita",
                tech: "Akrilikoa eta testurak taula gainean",
                desc: "Margolan honek plano geometrikoen eta marmol orearekin sortutako testura trinkoen arteko elkargune ausarta erakusten du. Izatearen nahaspilaren aurrean oreka eta egitura bilatzea irudikatzen du."
            },
            "painting-2": {
                title: "Aquilino",
                tech: "Teknika mistoa oihal gainean",
                desc: "Grafiloaren, egur-ikatza, akrilikoaren eta olio-pintura diluituaren geruza finen batzeak atmosfera enigmatikoa sortzen du. Denborak lausotutako oroitzapenen iragankortasuna eta edertasun melankolikoa iradokitzen du."
            },
            "painting-3": {
                title: "Autoportret",
                tech: "Olioa espatularekin oihal gainean",
                desc: "Espatula metalikoekin osorik landua, lan honek hiri-bizitzaren indarra eta kolore-kontrasteak jasotzen ditu. Olio geruza lodiek kolore bizien topografia bat sortzen dute."
            },
            "painting-4": {
                title: "Baco",
                tech: "Olio-pintura liho gainean",
                desc: "Itsasoaren kontenplaziorako ariketa minimalista bat. Kolore-sutiltasun handiak kostalde lainotsu bateko egunsentia gogorarazten du, non zeruak eta ozeanoak bat egiten duten ikus-bibrazio lasai batean."
            },
            "painting-5": {
                title: "Comandante",
                tech: "Akrilikoa oihal gainean",
                desc: "Ilunabarreko argiaren fenomenoa laburbiltzen duen gorrien, okreen eta bioleten leherketa. Pincelada gestual libreek erritmo dinamiko eta sutsua ematen diote konposizioari."
            },
            "painting-6": {
                title: "Complicidad",
                tech: "Teknika mistoa eta urrezko hostoa",
                desc: "Iparraldean, bakardadean eta natura etsai batekin bat egitean inspiratutako pieza. Harearen eta hariaren testura zakarrak 22K-ko urrezko hostoaren distira dotorearekin kontrastatzen du."
            }
        }
    }
    ,
    ca: {
        nav: {
            inicio: "Inici",
            miObra: "La meva Obra",
            sobreMi: "Sobre mi",
            exposiciones: "Exposicions",
            contacto: "Contacte",
            studio: "Estudi d'Art"
        },
        welcome: {
            tag: "Presentació",
            title: "Benvinguts al meu espai",
            desc: "L'objectiu d'aquest web és oferir un recorregut per les meves creacions. Una col·lecció de rostres, alguns coneguts i d'altres anònims, però tots plens d'històries per explicar, les quals he intentat plasmar en els meus quadres. Espero que us transmetin totes aquestes emocions i experiències.",
            footer: "Gaudiu del viatge…!"
        },
        slider: {
            tag: "Obra Destacada",
            tagNew: "Novetat",
            tagSelected: "Obra Seleccionada",
            tagExclusive: "Col·lecció Exclusiva",
            explore: "Explorar Obra",
            hoverTip: "Veure Detall"
        },
        miObra: {
            subtitle: "Galeria",
            title: "La meva Obra",
            filterAll: "Tots",
            filterOleo: "Olis",
            filterAcrilico: "Acrílics",
            filterMixta: "Tècnica Mixta"
        },
        techs: {
            acrilico: "Acrílic sobre llenç"
        },
        sobreMi: {
            subtitle: "Trajectòria",
            title: "Sobre mi",
            quote: "«Si ho poguessis dir amb paraules, no hi hauria cap raó per pintar-ho.»",
            quoteAuthor: "Edward Hopper",
            p1: "Em dic Javi. Vaig néixer a Vitoria-Gasteiz el 1963, tot i que vaig passar la meva infància a Apellániz, on vivia tota la meva família.",
            p2: "Un cop finalitzats els meus estudis, em vaig traslladar a València on vaig residir tres anys. Durant aquela estada es va despertar en mi l'interès per l'art, ja que vaig conèixer de prop el treball de Paco Sena, pintor amateur l'obra del qual estava inspirada en Sorolla.",
            p3: "En tornar a Vitòria, vaig treballar durant vint anys en la indústria aeronàutica. El 2010 em vaig traslladar a Monaghan (Irlanda), on vaig viure un any. Allà vaig cooperar a «Solas Drop-in Centre», un centre d'acollida a persones en risc d'exclusió social. Va ser en aquela etapa quan va començar la meva trajectòria en el món de la pintura. En aquell nou entorn, els sentiments i les emocions que m'envoltaven van ser la inspiració per als meus primers esbossos.",
            p4: "Després d'un temps allunyat de l'art, em vaig retrobar amb allò que em va servir fa uns anys per evadir-me, la pintura. Aquest web és un reflex de tot allò que he anat aprenent i creant.",
            signature: "Espero que us agradi…"
        },
        exposiciones: {
            subtitle: "Agenda",
            title: "Exposicions",
            items: {
                "expo-0": { title: "Fundació San Prudencio", venue: "Fundació San Prudencio, Vitoria-Gasteiz", dates: "2026" },
                "expo-1": { title: "Apellániz", venue: "Apellániz, Àlaba", dates: "2025" },
                "expo-2": { title: "Centre Cívic Hegoalde", venue: "Centre Cívic Hegoalde, Vitoria-Gasteiz", dates: "2025" },
                "expo-3": { title: "Bizan Arana", venue: "Bizan Arana, Vitoria-Gasteiz", dates: "2024" },
                "expo-4": { title: "Residència Ajuria", venue: "Residència Ajuria, Vitoria-Gasteiz", dates: "2024" },
                "expo-5": { title: "Residència Caser", venue: "Residència Caser, Vitoria-Gasteiz", dates: "2024" },
                "expo-6": { title: "Bizan San Cristóbal", venue: "Bizan San Cristóbal, Vitoria-Gasteiz", dates: "2023" },
                "expo-7": { title: "Centre Cívic Zabalgana", venue: "Centre Cívic Zabalgana, Vitoria-Gasteiz", dates: "2023" },
                "expo-8": { title: "Centre Cívic Salburua", venue: "Centre Cívic Salburua, Vitoria-Gasteiz", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "Converses",
            title: "Contacte",
            desc: "Si vols adquirir una de les obres, programar una visita privada al meu taller a Madrid, o discutir una comissió a mida, per favor escriu-me. Estaré encantat de rebre't.",
            labelAddress: "Taller / Adreça",
            labelEmail: "Email",
            labelPhone: "Telèfon",
            formName: "Nom Complet",
            formEmail: "Correu Electrònic",
            formSubject: "Assumpte (Ex: Interès en obra o visita)",
            formMessage: "Missatge",
            formBtn: "Enviar Missatge",
            formSuccess: "Gràcies, {name}! El teu missatge s'ha enviat correctament. Et respondré al més aviat possible.",
            formError: "Si us plau, omple tots els camps requerits.",
            formSending: "Enviant..."
        },
        lightbox: {
            year: "Any",
            tech: "Tècnica",
            size: "Dimensions",
            status: "Estat",
            available: "Disponible",
            privateCol: "No disponible",
            btnInquire: "Consultar disponibilitat",
            btnPrev: "← Anterior",
            btnNext: "Següent →",
            inquireSubject: "Consulta d'obra: \"{title}\"",
            inquireMessage: "Hola, estic interessat/da en conèixer més detalls (preus, visites) sobre o quadre \"{title}\" ({year}, {tech}, {size}). Resto a l'espera."
        },
        paintings: {
            "painting-0": { title: "Always remember us this way", tech: "Oli sobre llenç", desc: "Una obra íntima que explora les profunditats de la introspecció humana..." },
            "painting-1": { title: "Angelita", tech: "Acrílic i textures sobre taula", desc: "Aquesta pintura presenta una audaç intersecció de plànols geomètrics..." },
            "painting-2": { title: "Aquilino", tech: "Tècnica mixta sobre llenç", desc: "La fusió de grafit, carbonet, acrílic i fines capes de pintura..." },
            "painting-3": { title: "Autorretrat", tech: "Tècnica mixta sobre llenç", desc: "Una expressió poètica del moviment i la solitud de les metròpolis..." },
            "painting-4": { title: "Baco", tech: "Acrílic sobre llenç", desc: "Un retrat expressiu enfocat en la potència de la mirada..." },
            "painting-5": { title: "Comandante", tech: "Acrílic sobre taula", desc: "Línies verticals i horitzontals que s'entrellacen creant camins..." },
            "painting-6": { title: "Complicidad", tech: "Oli sobre llenç", desc: "Una representació minimalista de la línia del mar i el cel..." }
        }
    },
    gl: {
        nav: {
            inicio: "Inicio",
            miObra: "A miña Obra",
            sobreMi: "Sobre Min",
            exposiciones: "Exposicións",
            contacto: "Contacto",
            studio: "Estudio de Arte"
        },
        welcome: {
            tag: "Presentación",
            title: "Benvidos ao meu espazo",
            desc: "O obxectivo desta web é ofrecer un percorrido polas miñas creacións. Unha colección de rostros, algúns coñecidos e outros anónimos, pero todos cheos de historias que contar, as cales tentei plasmar nos meus cadros. Espero que vos transmitan todas esas emocións e experiencias.",
            footer: "Desfrutade da viaxe…!"
        },
        slider: {
            tag: "Obra Destacada",
            tagNew: "Novidade",
            tagSelected: "Obra Seleccionada",
            tagExclusive: "Colección Exclusiva",
            explore: "Explorar Obra",
            hoverTip: "Ver Detalle"
        },
        miObra: {
            subtitle: "Galería",
            title: "A miña Obra",
            filterAll: "Todos",
            filterOleo: "Óleos",
            filterAcrilico: "Acrílicos",
            filterMixta: "Técnica Mixta"
        },
        techs: {
            acrilico: "Acrílico sobre lenzo"
        },
        sobreMi: {
            subtitle: "Traxectoria",
            title: "Sobre Min",
            quote: "«Se puideses dicilo con palabras, non habería razón para pintalo.»",
            quoteAuthor: "Edward Hopper",
            p1: "O meu nome é Javi. Nacín en Vitoria-Gasteiz en 1963, aínda que pasei a miña infancia en Apellániz, onde vivía toda a miña familia.",
            p2: "Unha vez rematados os meus estudos, trasladeime a Valencia onde residín tres anos. Durante aquela estancia espertou en min o interese polo arte, xa que coñecín de preto o traballo de Paco Sena, pintor amateur cuxa obra estaba inspirada en Sorolla.",
            p3: "Ao regresar a Vitoria, traballei durante vinte anos na industria aeronáutica. En 2010 desplaceime a Monaghan (Irlanda), onde vivín un ano. Alí cooperei en «Solas Drop-in Centre», un centro de acollida a persoas en risco de exclusión social. Foi nesa etapa cando comezou a miña andaina no mundo da pintura. Nese novo contorno, os sentimentos e as emocións que me rodeaban foron a inspiración para os meus primeiros bosquexos.",
            p4: "Despois dun tempo afastado do arte, reencontreime con aquilo que me serviu hai uns anos para evadirme, a pintura. Esta web é un reflexo de todo aquilo que fun aprendendo e creando.",
            signature: "Espero que vos guste…"
        },
        exposiciones: {
            subtitle: "Axenda",
            title: "Exposicións",
            items: {
                "expo-0": { title: "Fundación San Prudencio", venue: "Fundación San Prudencio, Vitoria-Gasteiz", dates: "2026" },
                "expo-1": { title: "Apellániz", venue: "Apellániz, Araba", dates: "2025" },
                "expo-2": { title: "Centro Cívico Hegoalde", venue: "Centro Cívico Hegoalde, Vitoria-Gasteiz", dates: "2025" },
                "expo-3": { title: "Bizan Arana", venue: "Bizan Arana, Vitoria-Gasteiz", dates: "2024" },
                "expo-4": { title: "Residencia Ajuria", venue: "Residencia Ajuria, Vitoria-Gasteiz", dates: "2024" },
                "expo-5": { title: "Residencia Caser", venue: "Residencia Caser, Vitoria-Gasteiz", dates: "2024" },
                "expo-6": { title: "Bizan San Cristóbal", venue: "Bizan San Cristóbal, Vitoria-Gasteiz", dates: "2023" },
                "expo-7": { title: "Centro Cívico Zabalgana", venue: "Centro Cívico Zabalgana, Vitoria-Gasteiz", dates: "2023" },
                "expo-8": { title: "Centro Cívico Salburua", venue: "Centro Cívico Salburua, Vitoria-Gasteiz", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "Conversas",
            title: "Contacto",
            desc: "Se desexas adquirir unha das obras, programar unha visita privada ao meu taller en Madrid, ou discutir unha comisión a medida, por favor escríbeme. Estarei encantado de recibirte.",
            labelAddress: "Taller / Dirección",
            labelEmail: "Email",
            labelPhone: "Teléfono",
            formName: "Nome Completo",
            formEmail: "Correo Electrónico",
            formSubject: "Asunto (Ex: Interese en obra ou visita)",
            formMessage: "Mensaxe",
            formBtn: "Enviar Mensaxe",
            formSuccess: "Grazas, {name}! A túa mensaxe enviouse correctamente. Responderei o antes posible.",
            formError: "Por favor, enche todos os campos requiridos.",
            formSending: "Enviando..."
        },
        lightbox: {
            year: "Ano",
            tech: "Técnica",
            size: "Dimensións",
            status: "Estado",
            available: "Dispoñible",
            privateCol: "Non dispoñible",
            btnInquire: "Consultar dispoñibilidade",
            btnPrev: "← Anterior",
            btnNext: "Seguinte →",
            inquireSubject: "Consulta de obra: \"{title}\"",
            inquireMessage: "Ola, estou interesado/a en coñecer máis detalles (prezos, visitas) sobre o cadro \"{title}\" ({year}, {tech}, {size}). Quedo á espera."
        },
        paintings: {
            "painting-0": { title: "Always remember us this way", tech: "Óleo sobre lenzo", desc: "Unha obra íntima que explora as profundidades da introspección..." },
            "painting-1": { title: "Angelita", tech: "Acrílico e texturas sobre táboa", desc: "Esta pintura presenta unha audaz intersección de planos..." },
            "painting-2": { title: "Aquilino", tech: "Técnica mixta sobre lenzo", desc: "A fusión de grafito, carbón, acrílico e finas capas..." },
            "painting-3": { title: "Autorretrato", tech: "Técnica mixta sobre lenzo", desc: "Unha expresión poética do movemento e a soidade..." },
            "painting-4": { title: "Baco", tech: "Acrílico sobre lenzo", desc: "Un retrato expresivo enfocado na potencia da mirada..." },
            "painting-5": { title: "Comandante", tech: "Acrílico sobre táboa", desc: "Liñas que se entrecruzan creando camiños..." },
            "painting-6": { title: "Complicidad", tech: "Óleo sobre lenzo", desc: "Unha representación minimalista do mar e o ceo..." }
        }
    },
    ar: {
        nav: {
            inicio: "الرئيسية",
            miObra: "أعمالي",
            sobreMi: "من أنا",
            exposiciones: "المعارض",
            contacto: "اتصل بي",
            studio: "مرسم الفن"
        },
        welcome: {
            tag: "مقدمة",
            title: "أهلاً بكم في عالمي الفني",
            desc: "الهدف من هذا الموقع هو تقديم جولة في إبداعاتي الفنية. مجموعة من الوجوه، بعضها معروف والآخر مجهول، ولكنها جميعاً مليئة بالقصص لترويها، والتي حاولت تجسيدها في لوحاتي. آمل أن تنقل إليكم كل هذه المشاعر والتجارب.",
            footer: "أتمنى لكم رحلة ممتعة…!"
        },
        slider: {
            tag: "عمل متميز",
            tagNew: "جديد",
            tagSelected: "لوحة مختارة",
            tagExclusive: "مجموعة حصرية",
            explore: "استكشف العمل",
            hoverTip: "عرض التفاصيل"
        },
        miObra: {
            subtitle: "المعرض",
            title: "أعمالي",
            filterAll: "الكل",
            filterOleo: "زيتية",
            filterAcrilico: "أكريليك",
            filterMixta: "وسائط مختلطة"
        },
        techs: {
            acrilico: "أكريليك على قماش كنفاص"
        },
        sobreMi: {
            subtitle: "مسيرتي",
            title: "من أنا",
            quote: "«لو كان بإمكانك قول ذلك بالكلمات، لما كان هناك داعٍ لرسمه.»",
            quoteAuthor: "إدوارد هوبر",
            p1: "اسمي خافي. ولدت في فيتوريا-غاستيز عام 1963، وقضيت طفولتي في أپيلانيز، حيث عاشت عائلتي بأكملها.",
            p2: "بعد الانتهاء من دراستي، انتقلت إلى فالنسيا حيث عشت ثلاث سنوات. خلال تلك الإقامة، استيقظ فيّ الاهتمام بالفن، حيث تعرفت عن قرب على أعمال باكو سينا، وهو رسام هاوٍ استلهم أعماله من سورولا.",
            p3: "عند عودتي إلى فيتوريا، عملت لمدة عشرين عاماً في صناعة الطيران. في عام 2010 انتقلت إلى موناغان (أيرلندا)، حيث عشت لمدة عام. هناك تعاونت مع «Solas Drop-in Centre»، وهو مركز لاستقبال الأشخاص المعرضين لخطر الإقصاء الاجتماعي. في تلك المرحلة بدأت مسيرتي في عالم الرسم. في تلك البيئة الجديدة، كانت المشاعر والعواطف المحيطة بي مصدر إلهام لرسوماتي الأولى.",
            p4: "بعد فترة من الابتعاد عن الفن، أعدت الاتصال بالشيء الذي ساعدني منذ سنوات على الهروب من الواقع: الرسم. هذا الموقع هو انعكاس لكل ما تعلمته وابتكرته.",
            signature: "أتمنى أن تنال إعجابكم…"
        },
        exposiciones: {
            subtitle: "الأجندة",
            title: "المعارض",
            items: {
                "expo-0": { title: "مؤسسة سان برودينسيو", venue: "مؤسسة سان برودينسيو، فيتوريا-غاستيز", dates: "2026" },
                "expo-1": { title: "أپيلانيز", venue: "أپيلانيز، ألافا", dates: "2025" },
                "expo-2": { title: "المركز الثقافي هيغوالدي", venue: "المركز الثقافي هيغوالدي، فيتوريا-غاستيز", dates: "2025" },
                "expo-3": { title: "بيزان أرانا", venue: "بيزان أرانا، فيتوريا-غاستيز", dates: "2024" },
                "expo-4": { title: "دار رعاية أخوريا", venue: "دار رعاية أخوريا، فيتوريا-غاستيز", dates: "2024" },
                "expo-5": { title: "دار رعاية كاسير", venue: "دار رعاية كاسير، فيتوريا-غاستيز", dates: "2024" },
                "expo-6": { title: "بيزان سان كريستوبال", venue: "بيزان سان كريستوبال، فيتوريا-غاستيز", dates: "2023" },
                "expo-7": { title: "المركز الثقافي زابالغانا", venue: "المركز الثقافي زابالغانا، فيتوريا-غاستيز", dates: "2023" },
                "expo-8": { title: "المركز الثقافي سالبوروا", venue: "المركز الثقافي سالبوروا، فيتوريا-غاستيز", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "حوارات",
            title: "اتصل بي",
            desc: "إذا كنت ترغب في اقتناء أحد الأعمال الفنية، أو حجز زيارة خاصة لمرسمي في مدريد، أو مناقشة عمل بتكليف خاص، يرجى الكتابة إليّ. سأكون سعيداً باستقبالك.",
            labelAddress: "المرسم / العنوان",
            labelEmail: "البريد الإلكتروني",
            labelPhone: "الهاتف",
            formName: "الاسم الكامل",
            formEmail: "البريد الإلكتروني",
            formSubject: "الموضوع (مثال: اهتمام بلوحة أو حجز زيارة)",
            formMessage: "الرسالة",
            formBtn: "إرسال الرسالة",
            formSuccess: "شكرًا لك يا {name}! تم إرسال رسالتك بنجاح. سأرد عليك في أقرب وقت ممكن.",
            formError: "يرجى ملء جميع الحقول المطلوبة.",
            formSending: "جاري الإرسال..."
        },
        lightbox: {
            year: "السنة",
            tech: "التقنية",
            size: "المقاسات",
            status: "الحالة",
            available: "متوفر",
            privateCol: "غير متوفر",
            btnInquire: "الاستفسار عن التوفر",
            btnPrev: "السابق →",
            btnNext: "← التالي",
            inquireSubject: "استفسار عن لوحة: \"{title}\"",
            inquireMessage: "مرحبًا، أنا مهتم بمعرفة المزيد من التفاصيل (الأسعار، الزيارات) حول لوحة \"{title}\" ({year}، {tech}، {size}). أنا بانتظار ردكم."
        },
        paintings: {
            "painting-0": { title: "Always remember us this way", tech: "زيت على قماش", desc: "عمل فني عميق يستكشف خبايا النفس البشرية..." },
            "painting-1": { title: "Angelita", tech: "أكريليك على لوح خشبي", desc: "لوحة تجسد التقاطع الجريء للأشكال الهندسية..." },
            "painting-2": { title: "Aquilino", tech: "وسائط مختلطة على قماش", desc: "مزيج من الفحم والأكريليك والزيت يخلق جواً غامضاً..." },
            "painting-3": { title: "بورتريه شخصي", tech: "وسائط مختلطة على قماش", desc: "تعبير شعري عن الحركة والعزلة في المدن الكبرى..." },
            "painting-4": { title: "Baco", tech: "أكريليك على قماش", desc: "بورتريه تعبيري يركز على قوة النظرات..." },
            "painting-5": { title: "Comandante", tech: "أكريليك على لوح خشبي", desc: "خطوط متقاطعة تعبر عن دروب الحياة..." },
            "painting-6": { title: "Complicidad", tech: "زيت على قماش", desc: "تمثيل تبسيطي لخط التقاء البحر والسماء..." }
        }
    },
    he: {
        nav: {
            inicio: "בית",
            miObra: "היצירות שלי",
            sobreMi: "קצת עלי",
            exposiciones: "תערוכות",
            contacto: "צור קשר",
            studio: "סטודיו לאמנות"
        },
        welcome: {
            tag: "הצגה עצמית",
            title: "ברוכים הבאים למרחב שלי",
            desc: "מטרת האתר היא להציע סיור ביצירותיי. אוסף של פנים, חלקן מוכרות וחלקן אנונימיות, אך כולן מלאות בסיפורים לספר, אותם ניסיתי להביע בציוריי. אני מקווה שהם יעבירו לכם את כל הרגשות והחוויות הללו.",
            footer: "תהנו מהמסע…!"
        },
        slider: {
            tag: "יצירה נבחרת",
            tagNew: "חדש",
            tagSelected: "יצירה שנבחרה",
            tagExclusive: "אוסף בלעדי",
            explore: "לחקור את היצירה",
            hoverTip: "צפה בפרטים"
        },
        miObra: {
            subtitle: "גלריה",
            title: "היצירות שלי",
            filterAll: "הכל",
            filterOleo: "שמן",
            filterAcrilico: "אקריליק",
            filterMixta: "טכניקה מעורבת"
        },
        techs: {
            acrilico: "אקריליק על קנבס"
        },
        sobreMi: {
            subtitle: "קריירה",
            title: "קצת עלי",
            quote: "«אילו יכולת לומר זאת במילים, לא הייתה שום סיבה לצייר זאת.»",
            quoteAuthor: "אדוארד הופר",
            p1: "שמי חאבי. נולדתי בויטוריה-גסטייז בשנת 1963, אם כי את ילדותי העברתי באפיינאיז, שם התגוררה כל משפחתי.",
            p2: "לאחר סיום לימודיי, עברתי לוולנסיה שם התגוררתי שלוש שנים. במהלך שהות זו התעורר בי העניין באמנות, שכן הכרתי מקרוב את עבודתו של פאקו סנה, צייר חובב שיצירתו נכתבה בהשראת סורולה.",
            p3: "כשחזרתי לויטוריה, עבדתי במשך עשרים שנה בתעשיית האווירונאוטיקה. בשנת 2010 עברתי למונאהן (אירלנד), שם גרתי שנה. שם שיתפתי פעולה ב-«Solas Drop-in Centre», מרכז קליטה לאנשים בסיכון להדרה חברתית. בשלב זה החל דרכי בעולם הציור. בסביבה החדשה הזו, הרגשות והחוויות שהקיפו אותי היוו השראה לסקיצות הראשונות שלי.",
            p4: "לאחר תקופה רחוקה מהאמנות, התחברתי מחדש למה ששימש אותי לפני כמה שנים כדי לברוح: הציור. אתר זה הוא השתקפות של כל מה שלמדתי ויצרתי.",
            signature: "מקווה שתאהבו…"
        },
        exposiciones: {
            subtitle: "לוח אירועים",
            title: "תערוכות",
            items: {
                "expo-0": { title: "קרן סן פרודנשיו", venue: "קרן סן פרודנשיו, ויטוריה-גסטייז", dates: "2026" },
                "expo-1": { title: "אפיינאיז", venue: "אפיינאיז, אלבה", dates: "2025" },
                "expo-2": { title: "מרכז קהילתי הגואלדה", venue: "מרכז קהילתי הגואלדה, ויטוריה-גסטייז", dates: "2025" },
                "expo-3": { title: "ביזאן ארנה", venue: "ביזאן ארנה, ויטוריה-גסטייז", dates: "2024" },
                "expo-4": { title: "בית אבות אחווריה", venue: "בית אבות אחווריה, ויטוריה-גסטייז", dates: "2024" },
                "expo-5": { title: "בית אבות קאסר", venue: "בית אבות קאסר, ויטוריה-גסטייز", dates: "2024" },
                "expo-6": { title: "ביזאן סן קriסטובل", venue: "ביזאן סן קריסטובل, ויטוריה-גסטייז", dates: "2023" },
                "expo-7": { title: "מרכז קהילתי זאבלגאנה", venue: "מרכז קהילתי זאבלגאנה, ויטוריה-גסטייז", dates: "2023" },
                "expo-8": { title: "מרכז קהילתי סלבורואה", venue: "מרכז קהילתי סלבורואה, ויטוריה-גסטייז", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "שיחות",
            title: "צור קשר",
            desc: "אם ברצונך לרכוש את אחת היצירות, לתאם ביקור פרטי בסטודיו שלי במדריד, או לדון בהזמנה אישית, אנא כתוב לי. אשמח לארח אותך.",
            labelAddress: "סטודיו / כתובת",
            labelEmail: "דוא\"ל",
            labelPhone: "טלפון",
            formName: "שם מלא",
            formEmail: "כתובת אימייל",
            formSubject: "נושא (למשל: עניין ביצירה או ביקור)",
            formMessage: "הודעה",
            formBtn: "שלח הודעה",
            formSuccess: "תודה, {name}! ההודעה שלך נשלחה בהצלحة. אענה בהקדם האפשري.",
            formError: "אנא מלא את כל השדות הנדרשים.",
            formSending: "שולח..."
        },
        lightbox: {
            year: "שנה",
            tech: "טכניקה",
            size: "מידות",
            status: "מצב",
            available: "זמין",
            privateCol: "לא זמין",
            btnInquire: "בדוק זמינות",
            btnPrev: "הקודם →",
            btnNext: "← הבא",
            inquireSubject: "בירור לגבי יצירה: \"{title}\"",
            inquireMessage: "שלום, אני מעוניין לדעת פרטים נוספים (מחירים, ביקורים) לגבי הציור \"{title}\" ({year}, {tech}, {size}). אני ממתין לתשובתכם."
        },
        paintings: {
            "painting-0": { title: "Always remember us this way", tech: "שמן על קנבס", desc: "עבודה אינטימית החוקרת את מעמקי הנפש..." },
            "painting-1": { title: "Angelita", tech: "אקריליק וטקסטורות על עץ", desc: "ציור זה מציג מפגש נועז של מישורים..." },
            "painting-2": { title: "Aquilino", tech: "טכניקה מעורבת על קנבס", desc: "שילוב של פחם, אקריליק ושמן ליצירת אווירה מסתורية..." },
            "painting-3": { title: "דיוקן עצמי", tech: "טכניקה מעורבת על קנבס", desc: "ביטוי פואטי של תנועה ובדידות בכרך הגדול..." },
            "painting-4": { title: "Baco", tech: "אקריליק על קנבס", desc: "דיוקן אקספרסיבי המתמקד בעוצמת המבט..." },
            "painting-5": { title: "Comandante", tech: "אקריליק על לוח עץ", desc: "קווים המצטלבים ומייצגים את שבילי החיים..." },
            "painting-6": { title: "Complicidad", tech: "שמן על קנבס", desc: "ייצוג מינימליסטי של קו המפגש בין ים לשמים..." }
        }
    }
    ,
    de: {
        nav: {
            inicio: "Startseite",
            miObra: "Mein Werk",
            sobreMi: "Über mich",
            exposiciones: "Ausstellungen",
            contacto: "Kontakt",
            studio: "Kunststudio"
        },
        welcome: {
            tag: "Präsentation",
            title: "Willkommen in meinem Bereich",
            desc: "Das Ziel dieser Website ist es, einen Rundgang durch meine Kreationen zu bieten. Eine Sammlung von Gesichtern, einige bekannt und andere anonym, aber alle voller Geschichten, die ich in meinen Bildern zum Ausdruck bringen wollte. Ich hoffe, sie vermitteln Ihnen all diese Gefühle und Erfahrungen.",
            footer: "Genießen Sie die Reise…!"
        },
        slider: {
            tag: "Herausragendes Werk",
            tagNew: "Neuheit",
            tagSelected: "Ausgewähltes Werk",
            tagExclusive: "Exklusive Kollektion",
            explore: "Werk erkunden",
            hoverTip: "Details anzeigen"
        },
        miObra: {
            subtitle: "Galerie",
            title: "Mein Werk",
            filterAll: "Alle",
            filterOleo: "Ölgemälde",
            filterAcrilico: "Acrylgemälde",
            filterMixta: "Mischtechnik"
        },
        techs: {
            acrilico: "Acryl auf Leinwand"
        },
        sobreMi: {
            subtitle: "Werdegang",
            title: "Über mich",
            quote: "«Wenn man es in Worten ausdrücken könnte, gäbe es keinen Grund, es zu malen.»",
            quoteAuthor: "Edward Hopper",
            p1: "Mein Name ist Javi. Ich wurde 1963 in Vitoria-Gasteiz geboren, verbrachte meine Kindheit jedoch in Apellániz, wo meine gesamte Familie lebte.",
            p2: "Nach Abschluss meines Studiums zog ich nach Valencia, wo ich drei Jahre lang lebte. Während dieses Aufenthalts erwachte mein Interesse an der Kunst, da ich die Arbeit von Paco Sena aus nächster Nähe kennenlernte, einem Hobbymaler, dessen Werk von Sorolla inspiriert war.",
            p3: "Nach meiner Rückkehr nach Vitoria arbeitete ich zwanzig Jahre lang in der Luftfahrtindustrie. Im Jahr 2010 zog ich nach Monaghan (Irland), wo ich ein Jahr lebte. Dort engagierte ich mich im «Solas Drop-in Centre», einer Anlaufstelle für Menschen, die von sozialer Ausgrenzung bedroht sind. In dieser Phase begann mein Weg in die Welt der Malerei. In dieser neuen Umgebung waren die Gefühle und Emotionen um mich herum die Inspiration für meine ersten Entwürfe.",
            p4: "Nach einer Zeit der Abwesenheit von der Kunst fand ich zu dem zurück, was mir vor einigen Jahren zur Flucht aus dem Alltag diente: der Malerei. Diese Website ist ein Spiegelbild dessen, was ich gelernt und geschaffen habe.",
            signature: "Ich hoffe, es gefällt Ihnen…"
        },
        exposiciones: {
            subtitle: "Kalender",
            title: "Ausstellungen",
            items: {
                "expo-0": { title: "Fundación San Prudencio", venue: "Fundación San Prudencio, Vitoria-Gasteiz", dates: "2026" },
                "expo-1": { title: "Apellániz", venue: "Apellániz, Álava", dates: "2025" },
                "expo-2": { title: "Centro Cívico Hegoalde", venue: "Centro Cívico Hegoalde, Vitoria-Gasteiz", dates: "2025" },
                "expo-3": { title: "Bizan Arana", venue: "Bizan Arana, Vitoria-Gasteiz", dates: "2024" },
                "expo-4": { title: "Residencia Ajuria", venue: "Residencia Ajuria, Vitoria-Gasteiz", dates: "2024" },
                "expo-5": { title: "Residencia Caser", venue: "Residencia Caser, Vitoria-Gasteiz", dates: "2024" },
                "expo-6": { title: "Bizan San Cristóbal", venue: "Bizan San Cristóbal, Vitoria-Gasteiz", dates: "2023" },
                "expo-7": { title: "Centro Cívico Zabalgana", venue: "Centro Cívico Zabalgana, Vitoria-Gasteiz", dates: "2023" },
                "expo-8": { title: "Centro Cívico Salburua", venue: "Centro Cívico Salburua, Vitoria-Gasteiz", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "Gespräche",
            title: "Kontakt",
            desc: "Wenn Sie eines der Werke erwerben, einen privaten Besuch in meinem Atelier in Madrid vereinbaren oder einen individuellen Auftrag besprechen möchten, schreiben Sie mir bitte. Ich freue mich auf Sie.",
            labelAddress: "Atelier / Adresse",
            labelEmail: "E-Mail",
            labelPhone: "Telefon",
            formName: "Vollständiger Name",
            formEmail: "E-Mail-Adresse",
            formSubject: "Betreff (z. B. Interesse an einem Werk oder Besuch)",
            formMessage: "Nachricht",
            formBtn: "Nachricht senden",
            formSuccess: "Vielen Dank, {name}! Ihre Nachricht wurde erfolgreich gesendet. Ich werde so schnell wie möglich antworten.",
            formError: "Bitte füllen Sie alle erforderlichen Felder aus.",
            formSending: "Wird gesendet..."
        },
        lightbox: {
            year: "Jahr",
            tech: "Technik",
            size: "Abmessungen",
            status: "Status",
            available: "Verfügbar",
            privateCol: "Nicht verfügbar",
            btnInquire: "Verfügbarkeit anfragen",
            btnPrev: "← Zurück",
            btnNext: "Weiter →",
            inquireSubject: "Anfrage zum Werk: \"{title}\"",
            inquireMessage: "Hallo, ich bin daran interessiert, mehr Details (Preise, Besichtigungen) über das Gemälde \"{title}\" ({year}, {tech}, {size}) zu erfahren. Ich freue mich auf Ihre Rückmeldung."
        },
        paintings: {
            "painting-0": { title: "Always remember us this way", tech: "Öl auf Leinwand", desc: "Ein intimes Werk, das die Tiefen der menschlichen Selbstbeobachtung erforscht..." },
            "painting-1": { title: "Angelita", tech: "Acryl und Texturen auf Holz", desc: "Dieses Bild zeigt eine kühne Überschneidung geometrischer Ebenen..." },
            "painting-2": { title: "Aquilino", tech: "Mischtechnik auf Leinwand", desc: "Die Verschmelzung von Graphit, Kohle, Acryl und feinen Ölschichten..." },
            "painting-3": { title: "Selbstporträt", tech: "Mischtechnik auf Leinwand", desc: "Ein poetischer Ausdruck der Bewegung und Einsamkeit der Metropolen..." },
            "painting-4": { title: "Baco", tech: "Acryl auf Leinwand", desc: "Ein ausdrucksstarkes Porträt, das sich auf die Kraft des Blicks konzentriert..." },
            "painting-5": { title: "Comandante", tech: "Acryl auf Holz", desc: "Sich kreuzende Linien, die die Wege des Lebens darstellen..." },
            "painting-6": { title: "Complicidad", tech: "Öl auf Leinwand", desc: "Eine minimalistische Darstellung des Treffens von Meer und Himmel..." }
        }
    },
    zh: {
        nav: {
            inicio: "首页",
            miObra: "我的作品",
            sobreMi: "关于我",
            exposiciones: "展览",
            contacto: "联系我",
            studio: "艺术工作室"
        },
        welcome: {
            tag: "简介",
            title: "欢迎来到我的艺术空间",
            desc: "本网站的目的在于带领大家走近我的创作。这是一本肖像集，其中有些是熟面孔，有些是匿名者，但每一幅都饱含着故事，我试图将它们融入我的画作中。我希望它们能向您传递这些情感和体验。",
            footer: "愿旅途愉快…!"
        },
        slider: {
            tag: "杰出作品",
            tagNew: "新品",
            tagSelected: "选定作品",
            tagExclusive: "独家收藏",
            explore: "探索作品",
            hoverTip: "查看详情"
        },
        miObra: {
            subtitle: "画廊",
            title: "我的作品",
            filterAll: "全部",
            filterOleo: "油画",
            filterAcrilico: "丙烯画",
            filterMixta: "混合媒介"
        },
        techs: {
            acrilico: "布面丙烯"
        },
        sobreMi: {
            subtitle: "历程",
            title: "关于我",
            quote: "“如果能用语言表达，那就没有理由画出来了。”",
            quoteAuthor: "爱德华·霍普",
            p1: "我叫哈维。我于1963年出生在维多利亚-加斯泰斯，但我的童年是在阿佩利亚尼斯度过的，我的整个家族都曾住在那里。",
            p2: "毕业后，我搬到了瓦伦西亚并居住了三年。在此期间，我开始对艺术产生浓厚兴趣，因为我近距离接触了业余画家巴科·塞纳的作品，他的创作灵感来自索罗拉。",
            p3: "回到维多利亚后，我在航空航天业工作了二十年。2010年，我搬到了爱尔兰的莫纳汉，并在那里生活了一年。期间我参与了“Solas Drop-in Centre”的志愿工作，这是一个服务于面临社会排斥风险人群的收容中心。正是在那个阶段，我开始了在绘画世界的探索。在那个全新的环境中，我身边的情感与心绪成为了我最初素描稿의灵感源泉。",
            p4: "在离开艺术一段时间后，我重新找回了曾帮我逃离繁杂现实的寄托——绘画。这个网站是我一路上学习与创作的缩影。",
            signature: "希望你们会喜欢…"
        },
        exposiciones: {
            subtitle: "日程",
            title: "展览",
            items: {
                "expo-0": { title: "圣普鲁登西奥基金会", venue: "圣普鲁登西奥基金会，维多利亚-加斯泰斯", dates: "2026" },
                "expo-1": { title: "阿佩利亚尼斯", venue: "阿佩利亚尼斯，阿拉瓦", dates: "2025" },
                "expo-2": { title: "赫戈阿尔德社区中心", venue: "赫戈阿尔德社区中心，维多利亚-加斯泰斯", dates: "2025" },
                "expo-3": { title: "比赞·阿拉纳", venue: "比赞·阿拉纳，维多利亚-加斯泰斯", dates: "2024" },
                "expo-4": { title: "阿霍里亚安老院", venue: "阿霍里亚安老院，维多利亚-加斯泰斯", dates: "2024" },
                "expo-5": { title: "卡塞尔安老院", venue: "卡塞尔安老院，维多利亚-加斯泰斯", dates: "2024" },
                "expo-6": { title: "比赞·圣克里斯托瓦尔", venue: "比赞·圣克里斯托瓦尔，维多利亚-加斯泰斯", dates: "2023" },
                "expo-7": { title: "扎巴尔加纳社区中心", venue: "扎巴尔加纳社区中心，维多利亚-加斯泰斯", dates: "2023" },
                "expo-8": { title: "萨尔布鲁阿社区中心", venue: "萨尔布鲁阿社区中心，维多利亚-加斯泰斯", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "交流",
            title: "联系我",
            desc: "如果您想购买作品、预约私人参观我位于马德里的工作室，或商讨定制委托，请随时写信给我。我将非常高兴接待您。",
            labelAddress: "工作室 / 地址",
            labelEmail: "电子邮件",
            labelPhone: "电话",
            formName: "姓名",
            formEmail: "电子邮箱",
            formSubject: "主题（例如：对作品感兴趣或预约参观）",
            formMessage: "留言",
            formBtn: "发送消息",
            formSuccess: "谢谢，{name}！您的消息已成功发送。我会尽快给您答复。",
            formError: "请填写所有必填字段。",
            formSending: "正在发送..."
        },
        lightbox: {
            year: "年份",
            tech: "媒介",
            size: "尺寸",
            status: "状态",
            available: "可售",
            privateCol: "已售/不可售",
            btnInquire: "咨询作品详情",
            btnPrev: "← 上一幅",
            btnNext: "下一幅 →",
            inquireSubject: "作品咨询：“{title}”",
            inquireMessage: "您好，我希望能了解更多关于画作“{title}”（{year}，{tech}，{size}）的详细信息（如价格、参观事宜）。静候您的回复。"
        },
        paintings: {
            "painting-0": { title: "Always remember us this way", tech: "布面油画", desc: "探索人类自省深处的亲密作品..." },
            "painting-1": { title: "Angelita", tech: "木板丙烯与肌理", desc: "这幅画呈现了几何平面与厚重肌理的交织..." },
            "painting-2": { title: "Aquilino", tech: "布面混合媒介", desc: "木炭、丙烯与薄油画颜料的融合创造了神秘的氛围..." },
            "painting-3": { title: "自画像", tech: "布面混合媒介", desc: "大都市运动与孤独的诗意表达..." },
            "painting-4": { title: "Baco", tech: "布面丙烯", desc: "聚焦于目光力量的表现主义肖像..." },
            "painting-5": { title: "Comandante", tech: "木板丙烯", desc: "交织的线条代表生命的路径..." },
            "painting-6": { title: "Complicidad", tech: "布面油画", desc: "海天交汇处的极简主义呈现..." }
        }
    },
    ja: {
        nav: {
            inicio: "ホーム",
            miObra: "作品ギャラリー",
            sobreMi: "プロフィール",
            exposiciones: "展示会",
            contacto: "お問い合わせ",
            studio: "アートスタジオ"
        },
        welcome: {
            tag: "はじめに",
            title: "マイ・アートスペースへようこそ",
            desc: "このウェブサイトの目的は、私の創作活動の軌跡をご案内することです。親しみのある顔から無名の人々まで、それぞれの物語を秘めた表情を、キャンバスに表現しようと試みました。これらの作品が、皆様に豊かな感情と経験を伝えることができれば幸いです。",
            footer: "心ゆくまで旅をお楽しみください…!"
        },
        slider: {
            tag: "注目の作品",
            tagNew: "新作",
            tagSelected: "セレクション作品",
            tagExclusive: "限定コレクション",
            explore: "作品を詳しく見る",
            hoverTip: "詳細を表示"
        },
        miObra: {
            subtitle: "ギャラリー",
            title: "作品ギャラリー",
            filterAll: "すべて",
            filterOleo: "油絵",
            filterAcrilico: "アクリル画",
            filterMixta: "ミクストメディア"
        },
        techs: {
            acrilico: "キャンバスにアクリル"
        },
        sobreMi: {
            subtitle: "バイオグラフィー",
            title: "プロフィール",
            quote: "「言葉で表現できるなら、絵を描く必要はない。」",
            quoteAuthor: "エドワード・ホッパー",
            p1: "私の名前はハビ。1963年にビトリア＝ガステイスで生まれましたが、幼少期は家族が住んでいたアペジャニスで過ごしました。",
            p2: "学業を修めた後、バレンシアに移り3年間滞在しました。その滞在期間中、ソローヤにインスピレーションを得て制作活動を行っていたアマチュア画家パコ・セナの仕事を間近で見たことで、アートへの関心が芽生えました。",
            p3: "ビトリアに戻った後、航空宇宙産業で20年間働きました。2010年にアイルランドのモナハンへ移住し、1年間暮らしました。現地では、社会的排斥の危機にある人々を支援する「Solas Drop-in Centre」にてボランティアとして協力しました。この頃から絵画の世界への本格的な歩みが始まりました。その新しい環境で感じた感情や身の回りの人々の様子が、最初のスケッチの着想源となりました。",
            p4: "しばらくアートから離れた後、数年前に現実から解放される手段であった絵画と再び向き合うことにしました。このウェブサイトは、私が学んできたこと、そして創り出してきたすべての結晶です。",
            signature: "皆様に楽しんでいただけますように…"
        },
        exposiciones: {
            subtitle: "スケジュール",
            title: "展示会",
            items: {
                "expo-0": { title: "サン・プルデンシオ財団", venue: "サン・プルデンシオ財団、ビトリア＝ガステイス", dates: "2026" },
                "expo-1": { title: "アペジャニス", venue: "アペジャニス、アラバ", dates: "2025" },
                "expo-2": { title: "エゴアルデ市民センター", venue: "エゴアルデ市民センター、ビトリア＝ガステイス", dates: "2025" },
                "expo-3": { title: "ビザン・アラナ", venue: "ビザン・アラナ、ビトリア＝ガステイス", dates: "2024" },
                "expo-4": { title: "アジュリア老人ホーム", venue: "アジュリア老人ホーム、ビトリア＝ガステイス", dates: "2024" },
                "expo-5": { title: "カセル老人ホーム", venue: "カセル老人ホーム、ビトリア＝ガステイス", dates: "2024" },
                "expo-6": { title: "ビザン・サン・クリストバル", venue: "ビザン・サン・クリストバル、ビトリア＝ガステイス", dates: "2023" },
                "expo-7": { title: "ザバルガナ市民センター", venue: "ザバルガナ市民センター、ビトリア＝ガステイス", dates: "2023" },
                "expo-8": { title: "サルブルア市民センター", venue: "サルブルア市民センター、ビトリア＝ガステイス", dates: "2021" }
            }
        },
        contacto: {
            subtitle: "ダイアログ",
            title: "お問い合わせ",
            desc: "作品の購入をご希望の方、マドリードのアトリエへの個別訪問をご希望の方、またはオーダーメイドの制作についてご相談されたい方は、どうぞお気軽にご連絡ください。皆様のお越しを心よりお待ちしております。",
            labelAddress: "アトリエ / 住所",
            labelEmail: "メール",
            labelPhone: "電話",
            formName: "お名前 (フルネーム)",
            formEmail: "メールアドレス",
            formSubject: "件名 (例: 作品への興味、アトリエ訪問希望など)",
            formMessage: "メッセージ",
            formBtn: "送信する",
            formSuccess: "ありがとうございます、{name}様！メッセージは正常に送信されました。できるだけ早くお返事いたします。",
            formError: "必須項目をすべて入力してください。",
            formSending: "送信中..."
        },
        lightbox: {
            year: "制作年",
            tech: "技法",
            size: "サイズ",
            status: "状態",
            available: "購入可能",
            privateCol: "売却済/非売品",
            btnInquire: "問い合わせる",
            btnPrev: "← 前の作品",
            btnNext: "次の作品 →",
            inquireSubject: "作品に関する問い合わせ: 「{title}」",
            inquireMessage: "こんにちは。作品「{title}」（{year}、{tech}、{size}）について、価格や見学などの詳細を知りたいです。ご連絡をお待ちしております。"
        },
        paintings: {
            "painting-0": { title: "Always remember us this way", tech: "キャンバスに油彩", desc: "人間の自己観察の深淵を探求する親密な作品..." },
            "painting-1": { title: "Angelita", tech: "木板にアクリルとテクスチャ", desc: "幾何学的な平面と重厚なテクスチャの交差を表現した作品..." },
            "painting-2": { title: "Aquilino", tech: "キャンバスにミクストメディア", desc: "木炭、アクリル、薄い油絵の具の融合が神秘的な雰囲気を醸し出す..." },
            "painting-3": { title: "自画像", tech: "キャンバスにミクストメディア", desc: "大都市のダイナミズムと孤独を詩的に表現した作品..." },
            "painting-4": { title: "Baco", tech: "キャンバスにアクリル", desc: "眼差しの力に焦点を当てた表現主義的な肖像画..." },
            "painting-5": { title: "Comandante", tech: "木板にアクリル", desc: "人生の岐路を表す交差する線の表現..." },
            "painting-6": { title: "Complicidad", tech: "キャンバスに油彩", desc: "空と海の出会いを極限までシンプルに描いた作品..." }
        }
    }
};