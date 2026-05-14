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
            { name: 'Hausgemachter Milchreis', price: '3,90', description: 'homemade milk rice' }
        ] 
    },

    lunch: {
        title: 'Mittagessen & Abendessen',
        description: 'Warme Gerichte und Spezialitäten', 
        items: [
            { name: 'Tagessuppe', price: '6,90', description: 'daily soup', allergies: '' },
            { name: 'Zwei Samosa (vegetarisch) mit gemischten Salat', price: '8,90', description: 'two samosa (vegetarian) with mixed salad', allergies: '' },
            { name: 'Nachos mit Käse überbacken', price: '7,90', description: 'nachos gratinated with cheese', allergies: '' },
            { name: 'Nachos mit Käse überbacken & Salsauce', price: '8,90', description: 'nachos gratinated with cheese & salsy sauce', allergies: '' },
            { name: 'Chili con carne with Nachos', price: '8,90', description: 'chili con carne with nachos', allergies: '' },
            { name: 'Chili con carne mit Reis', price: '11,90', description: 'chili con carne with rice', allergies: '1,2,3' },
            { name: 'Chili con carne mit Brot', price: '11,90', description: 'chili con carne with bread', allergies: '1,2,3' },
            { name: 'Asiatische Nudeln mit frischen Gemüse', price: '9,90', description: 'asian noodles with fresh vegetables', allergies: '1,2,3,4' },
            { name: 'Asiatische Nudeln mit Hühnerfleisch', price: '12,90', description: 'asian noodles with chicken', allergies: '1,2,3,4' },
            { name: 'Indisches Curry mit frischem Gemüse & Reis', price: '9,90', description: 'Indian curry with fresh vegetables & rice', allergies: '1,2,3,4' },
            { name: 'Indisches Curry mit frischem Gemüse, Hühnerfleisch und Reis', price: '11,90', description: 'Indian curry with fresh vegetables, chicken and rice', allergies: '' },
            { name: 'Flammkuchen mit Créme fraîche, Zwiebeln & Schinken', price: '12,90', description: 'tarte flambée with cream fraiche, onions & ham', allergies: '' },
            { name: 'Flammkuchen mit Créme fraîche, Zwiebeln, Schinken und Käse überbacken', price: '13,90', description: 'tarte flambée with cream fraiche, onions, ham and gratinated with cheese', allergies: '1,2,3' },
            { name: 'Flammkuchen mit Créme fraîche, Serranoschinken und Käse', price: '14,90', description: 'tarte flambée with cream fraiche, serrano ham and cheese', allergies: '1,2,3' },
            { name: 'Flammkuchen mit Tomatencreme, Mozzarella und Basilikumpesto', price: '14,90', description: 'tarte flambée with tomato cream, mozzarella and basil pesto', allergies: '1,2,3' }
        ] 
    },

    sandwiches: { 
        title: 'Sandwiches & Panini', 
        description: 'Creme nach Wahl sowie Tomatenscheiben, Gurken und Salate', 
        items: [
            { name: 'Kichererbsen mit Rohkostsalat', price: '5,90', description: 'humus with raw vegetable', allergies: '' },
            { name: 'Gouda', price: '6,90', description: 'gouda', allergies: '' },
            { name: 'Mozzarella, Tomaten, Basilikumpesto', price: '6,90', description: 'mozzarella, tomatoes, basil pesto', allergies: '' },
            { name: 'Salami/ Geflügelwurst/ Kochschinken', price: '6,90', description: 'salami/ turkey-sausage/ boiled ham', allergies: '1,2,3' },
            { name: 'Serranoschinken', price: '7,90', description: 'serrano ham', allergies: '' },
            { name: 'Tandoori Chicken', price: '6,90', description: 'tandoori chicken', allergies: '' },
            { name: 'Lachs', price: '7,90', description: 'salmon', allergies: '' },
            { name: 'Panini mit Salami/ Geflügelwurst/ Kochschinken', price: '7,90', description: 'panini with salami/ turkey-sausage/ boiled ham', allergies: '1,2,3' }
        ] 
    },

    wraps: { title: 'Wraps', 
        description: '', 
        items: [
            { name: 'Spicy, Indische Art (vegetarisch)', price: '7,90', description: 'spicy, indian style (vegetarian)', allergies: '' },
            { name: 'Feta mit Spinat', price: '7,90', description: 'feta cheese with spinach', allergies: '' },
            { name: 'Mozzarella', price: '8,90', description: 'mozzarella', allergies: '' },
            { name: 'Feta oder Gouda', price: '8,90', description: 'feta or gouda', allergies: '' },  
            { name: 'Chili con Carne', price: '8,90', description: 'chili con carne', allergies: '1,2,3' },
            { name: 'Tandoori Chicken', price: '8,90', description: 'tandoori chicken', allergies: '2' },
            { name: 'Thunfisch', price: '8,90', description: 'tuna', allergies: '3' },
            { name: 'Lachs', price: '8,90', description: 'salmon', allergies: '1,2,3' }
        ] 
    },

    salate: { 
        title: 'Salate', 
        description: '',
        items: [
            { name: 'Großer Haussalat', price: '8,90', description: 'large house-style salat', allergies: '' },
            { name: 'Gemischter Salat mit Oliven und Feta', price: '9,90', description: 'mixed salat with olives and feta cheese', allergies: '2' },
            { name: 'Gemischter Salat mit Thunfisch und Ei', price: '9,90', description: 'mixed salat with tuna and egg', allergies: '3' },
            { name: 'Gemischter Salat mit Tandoori Chicken', price: '9,90', description: 'mixed salat with tandoori chicken', allergies: '1,2,3' },
            { name: 'Gemischter Salat mit Mozzarella und Basilikumpesto', price: '9,90', description: 'mixed salat with mozzarella and basil pesto', allergies: '' }
        ] 
    },

    getraenke: { 
        title: 'Getränke', 
        description: '',
        items: [
            { name: 'Espresso', price: '2,80', description: '' },
            { name: 'Espresso macchiato', price: '3,00', description: '' },
            { name: 'Kaffee', price: '3,90', description: 'coffee' },
            { name: 'Cappuccino/ Milchkaffe klein', price: '4,00', description: 'cappuccino/milk coffee small' },
            { name: 'Cappuccino/ Milchkaffe groß', price: '5,90', description: 'cappuccino/milk large' },
            { name: 'Late macchiato', price: '4,50', description: '' },
            { name: 'Heiße Schokolade (mit Milch zubereitet)', price: '4,90', description: 'hot chocolate with milk' },
            { name: 'Tee (diverse)', price: '4,00', description: 'cup of tea (diverse)' },
            { name: 'Lassi Natur', price: '4,90', description: '' },
            { name: 'Lassi Mango', price: '4,90', description: '' },
            { name: 'Mineralwasser (spritzig)', price: '3,50', description: 'mineral water (sparkling)' },
            { name: 'Mineralwasser (natur)', price: '3,50', description: 'mineral water (natur)' },
            { name: 'Cola, Cola light, Fanta', price: '4,25', description: 'coke, coke light, fanta' },
            { name: 'Apfelsaftschorle', price: '4,25', description: 'apple spritzer' }, 
            { name: 'Fruchtsaft (diverse)', price: '4,50', description: 'juice (diverse)' },
            { name: 'Bionade (diverse)', price: '4,25', description: 'Bionade (diverse)' },
            { name: 'Red Bull', price: '3,75', description: '' },
            { name: 'Arizona Ice Tea', price: '4,75', description: '' },
            { name: 'Pilsener Bier klein', price: '3,90', description: 'Pilsener beer small' },
            { name: 'Pilsener Bier groß', price: '4,40', description: 'Pilsener beer large' },
            { name: 'Hefeweizen', price: '5,90', description: 'wheat beer' },
            { name: 'Kristallweizen', price: '5,90', description: 'crystal wheat beer' },
            { name: 'Apfelwein', price: '4,00', description: 'apple cider' },
            { name: 'Rotwein/ Weißwein', price: '6,90', description: 'red wine/ white wine' },
            { name: 'Weinschorle rot / weiß', price: '5,90', description: 'wine spritzer red/white' },
            { name: 'Piccolo Sekt', price: '5,90', description: 'piccolo sparkling wine' }
        ]
    },
    spezial: { 
        title: 'Spezial Frühstück',
        description: 'Besondere Frühstücks-Spezialitäten', 
        items: [
            { name: '2 Rührei mit Toastbrot und Butter', price: '7,90', description: '2 scrambled eggs with toasted bread and butter' },
            { name: 'Omelett (2 Eier) mit Käse, Tomaten und Toastbrot', price: '8,90', description: 'omelet (2 eggs) with cheese, tomatoes and toasted bread' },
            { name: 'Omelett (2 Eier) mit Käse, Schinken und Toastbrot', price: '9,90', description: 'omelet (2 eggs) with cheese, ham and toasted bread' },
            { name: 'Omelett (2 Eier) mit Käse, Lachs und Toastbrot', price: '11,90', description: 'omelet (2 eggs) with cheese, salmon and toasted bread' }
        ]
    },
    catering: { title: 'Office-/Partyservice', 
        description: 'Große Bestellungen für Teams und Veranstaltungen', 
        items: [
            { name: 'Sandwich-Platte (20 Hälften)', price: '64,90', description: '' },
            { name: 'warme Wrap-Platte (16 Hälften)', price: '59,90', description: '' },
            { name: 'kalte Wrap-Platte (16 Hälften)', price: '59,90', description: '' },
            { name: 'gemischte Sandwich-Wrap-Platte (10 Sandwich und 10 Wrap-Hälften)', price: '69,90', description: '' },
            { name: 'Samosa-Platte (vegetarisch, 20 Stück)', price: '59,90', description: '' },
            { name: 'gefüllter Blätterteig mit Spinat und Feta (25 Stück)', price: '49,90', description: '' },
            { name: 'gefüllte Teigtaschen mit Spinat und Feta (20 Hälften)', price: '49,90', description: '' },
            { name: 'gefüllte Teigtaschen mit Hähnchenbrust und Gemüse (20 Hälften)', price: '55,90', description: '' },
            { name: 'Fingerfood-Platte (50 Stück, Vorbestellung!)', price: '89,90', description: '' },
            { name: 'Fingerfood-Platte (100 Stück, Vorbestellung!)', price: '179,80', description: '' }
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
            ${item.allergies ? `<p class="item-allergies">Allergene: ${item.allergies}</p>` : ''}
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