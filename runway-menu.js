// Menu Daten Struktur
const menuData = {
    fruestueck: {
        title: 'Frühstück',
        description: 'Süßes Frühstück - Muffins, Croissants und mehr',
        items: [
            { name: 'Platzhalter 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    lunch: {
        title: 'Mittagessen & Abendessen',
        description: 'Warme Gerichte und Spezialitäten',
        items: [
            { name: 'Platzhalter Gericht 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Gericht 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    sandwiches: {
        title: 'Sandwiches & Panini',
        description: 'Knusprig, frisch und mit Premium-Zutaten gefüllt',
        items: [
            { name: 'Platzhalter Sandwich 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Sandwich 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    wraps: {
        title: 'Wraps',
        description: '',
        items: [
            { name: 'Spicy, Indische Art (vegetarisch)', price: '6,90', description: '' },
            { name: 'Platzhalter Wrap 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Wrap 3', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    salate: {
        title: 'Salate',
        description: '',
        items: [
            { name: 'Platzhalter Salat 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Salat 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    getraenke: {
        title: 'Getränke',
        description: '',
        items: [
            { name: 'Platzhalter Getränk 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Getränk 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    spezial: {
        title: 'Spezial Frühstück',
        description: 'Besondere Frühstücks-Spezialitäten',
        items: [
            { name: 'Platzhalter Spezial 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Spezial 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    catering: {
        title: 'Office-/Partyservice',
        description: 'Große Bestellungen für Teams und Veranstaltungen',
        items: [
            { name: 'Platzhalter Paket 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Paket 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    }
};

function loadMenuCategory(category) {
    const modal = document.getElementById('menuModal');
    const data = menuData[category];

    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;

    const container = document.getElementById('menuItemsContainer');
    container.innerHTML = '';

    data.items.forEach(item => {
        const itemHTML = `
            <div class="menu-item">
                <div class="item-header">
                    <h3>${item.name}</h3>
                    <span class="price">€ ${item.price}</span>
                </div>
                <p class="item-description">${item.description}</p>
            </div>
        `;
        container.innerHTML += itemHTML;
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuCategory() {
    const modal = document.getElementById('menuModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Scroll-to-Top Button
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Cookie Banner
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAccept');
    const rejectBtn = document.getElementById('cookieReject');

    if (localStorage.getItem('cookieConsent')) {
        banner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.style.display = 'none';
        loadGoogleMaps();
    });

    rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'rejected');
        banner.style.display = 'none';
    });
}

function loadGoogleMaps() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
        const mapsContainer = document.getElementById('googleMapsContainer');
        if (mapsContainer && !mapsContainer.innerHTML) {
            mapsContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.457843829445!2d8.680289!3d50.110755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ef0e0e0e0e1%3A0x0!2sPlatz%20der%20Einheit%201%2C%2060327%20Frankfurt!5e0!3m2!1sde!2sde!4v1234567890" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        }
    }
}

// Modal schließen bei Escape & Hintergrund-Klick
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('menuModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeMenuCategory();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenuCategory();
        }
    });

    initCookieBanner();
    initScrollToTop();
});