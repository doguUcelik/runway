/* Mobile Menu Toggle */
function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.getElementById('menuToggle');
    mobileNav.classList.remove('active');
    menuToggle.classList.remove('active');
}

const menuData = {
    fruestueck: { title: 'Frühstück',
         description: 'Süßes Frühstück - Muffins, Croissants und mehr', 
         items: [
            { name: 'Buttercrossaint mit Kaffee', price: '6,90', description: 'butter crossaint with coffee' },
            { name: 'Kaffee mit 1 Muffin nach Wahl', price: '7,40', description: 'coffee with 1 muffin of your choice' },
            { name: 'Frischer Obssalat mit Joghurt', price: '4,90', description: 'fresh fruit salad with yoghurt' },
            { name: 'Frischer Obssalat mit Joghurt und Müsli', price: '5,40', description: 'fresh fruit salad with yoghurt and muesli' },
            { name: 'Joghurt mit Müsli', price: '4,50', description: 'yoghurt with muesli' },
            { name: 'Hausgemachter Milchreis', price: '3,90', description: 'homemade milk rice' }, 
        ] 
    },

    lunch: {
        title: 'Mittagessen & Abendessen',
        description: 'Warme Gerichte und Spezialitäten', 
        items: [
            { name: 'Platzhalter Gericht 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ] 
    },

    sandwiches: { 
        title: 'Sandwiches & Panini', 
        description: 'Creme nach Wahl sowie Tomatenscheiben, Gurken und Salate', 
        items: [
            { name: 'Kichererbsen mit Rohkostsalat', price: '5,50', description: 'humus with raw vegetable' },
            { name: 'Gouda', price: '5,90', description: 'gouda' },
            { name: 'Mozzarella, Tomaten, Basilikumpesto', price: '6,40', description: 'mozzarella, tomatoes, basil pesto' },
            { name: 'Salami/ Geflügelwurst/ Kochschinken', price: '6,40', description: 'salami/ turkey-sausage/ boiled ham' },
            { name: 'Serranoschinken', price: '6,90', description: 'serrano ham' },
            { name: 'Tandoori Chicken', price: '6,40', description: 'tandoori chicken' },
            { name: 'Lachs', price: '6,90', description: 'salmon' },
            { name: 'Panini mit Salami/ Geflügelwurst/ Kochschinken', price: '6,90', description: 'panini with salami/ turkey-sausage/ boiled ham' }
        ] 
    },

    wraps: { title: 'Wraps', 
        description: '', 
        items: [
            { name: 'Spicy, Indische Art (vegetarisch)', price: '6,90', description: 'spicy, indian style (vegetarian)' },
            { name: 'Feta mit Spinat', price: '7,90', description: 'feta cheese with spinach' },
            { name: 'Mozzarella', price: '7,90', description: 'mozzarella' },
            { name: 'Feta oder Gouda', price: '7,90', description: 'feta or gouda' },  
            { name: 'Chili con Carme', price: '7,90', description: 'chili con carne' },
            { name: 'Tandoori Chicken', price: '7,90', description: 'tandoori chicken' },
            { name: 'Thunfisch', price: '7,90', description: 'tuna' },
            { name: 'Lachs', price: '8,90', description: 'salmon' },
        ] 
    },

    salate: { 
        title: 'Salate', 
        description: '',
        items: [
            { name: 'Großer Haussalat', price: '8,90', description: 'large house-style salat' },
            { name: 'Gemischter Salat mit Oliven und Feta', price: '9,90', description: 'mixed salat with olives and feta cheese' },
            { name: 'Gemischter Salat mit Thunfisch und Ei', price: '9,90', description: 'mixed salat with tuna and egg' },
            { name: 'Gemischter Salat mit Tandoori Chicken', price: '9,90', description: 'mixed salat with tandoori chicken' },
            { name: 'Gemischter Salat mit Mozzarella und Basilikumpesto', price: '9,90', description: 'mixed salat with mozzarella and basil pesto' },
        ] 
    },

    getraenke: { 
        title: 'Heiße Getränke', 
        description: '',
        items: [
            { name: '', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    spezial: { 
        title: 'Spezial Frühstück',
        description: 'Besondere Frühstücks-Spezialitäten', 
        items: [
            { name: '2 Rührei mit Toastbrot und Butter', price: '7,90', description: '2 scrambled eggs with toasted bread and butter' },
            { name: 'Omelett (2 Eier) mit Käse, Tomaten und Toastbrot', price: '8,90', description: 'omelet (2 eggs) with cheese, tomatoes and toasted bread' },
            { name: 'Omelett (2 Eier) mit Käse, Schinken und Toastbrot', price: '9,90', description: 'omelet (2 eggs) with cheese, ham and toasted bread' },
            { name: 'Omelett (2 Eier) mit Käse, Lachs und Toastbrot', price: '11,90', description: 'omelet (2 eggs) with cheese, salmon and toasted bread' },
        ]
    },
    catering: { 
        title: 'Office-/Partyservice', 
        description: 'Große Bestellungen für Teams und Veranstaltungen',
        items: [
            { name: 'Platzhalter Paket 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
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
    container.innerHTML = data.items.map(item => `
        <div class="menu-item">
            <div class="item-header">
                <h3>${item.name}</h3>
                <span class="price">€ ${item.price}</span>
            </div>
            <p class="item-description">${item.description}</p>
        </div>
    `).join('');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuCategory() {
    document.getElementById('menuModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openModal(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    return false;
}

function closeModal(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    return false;
}

function initScrollToTop() {
    const btn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.pageYOffset > 300);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (localStorage.getItem('cookieConsent')) banner.style.display = 'none';
    document.getElementById('cookieAccept').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.style.display = 'none';
        loadGoogleMaps();
    });
    document.getElementById('cookieReject').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        banner.style.display = 'none';
    });
}

function loadGoogleMaps() {
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        const container = document.getElementById('googleMapsContainer');
        if (container && !container.innerHTML) {
            container.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8474922845697!2d8.6764115!3d50.1064764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0c6a7c7c7c7d%3A0x1234567890abc!2sPlatz%20der%20Einheit%201%2C%2060327%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1234567890" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    const modals = document.querySelectorAll('.modal');
    [document.getElementById('menuModal'), ...modals].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (modal.id === 'menuModal') closeMenuCategory();
                else closeModal(modal.id.replace('Modal', ''));
            }
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('menuModal').classList.remove('active');
            modals.forEach(m => m.classList.remove('active'));
            document.body.style.overflow = 'auto';
        }
    });
    initCookieBanner();
    initScrollToTop();
});