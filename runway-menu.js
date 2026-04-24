// Menu Daten Struktur
const menuData = {
    sandwiches: {
        title: 'Sandwiches & Panini',
        description: '',
        items: [
            { name: 'Platzhalter Sandwich 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Sandwich 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    wraps: {
        title: 'Wraps',
        description: '',
        items: [
            { name: 'Platzhalter Wrap 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Wrap 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
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
     lunch: {
        title: 'Mittagessen und Abendessen',
        description: '',
        items: [
            { name: 'Platzhalter Gericht 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Gericht 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    fruestueck: {
        title: 'Süßes Frühstück',
        description: '',
        items: [
            { name: 'Platzhalter Gebäck 1', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' },
            { name: 'Platzhalter Gebäck 2', price: '0,00', description: 'Hier kommt bald eine Beschreibung hin' }
        ]
    },
    catering: {
        title: 'Office-/Partyservice',
        description: '',
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

    // Titel und Beschreibung setzen
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;

    // Menu Items generieren
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

    // Modal anzeigen
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuCategory() {
    const modal = document.getElementById('menuModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal schließen wenn auf Hintergrund geklickt
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('menuModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeMenuCategory();
        }
    });

    // Escape-Taste zum Schließen
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenuCategory();
        }
    });
});