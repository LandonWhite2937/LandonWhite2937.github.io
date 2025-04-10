// Sample JSON data for video games
const mediaData = `[
    {"title": "The Legend of Zelda: Breath of the Wild", "developer": "Nintendo", "price": 59.99, "image": "images/zelda_cover.jpg"},
    {"title": "The Witcher 3: Wild Hunt", "developer": "CD Projekt Red", "price": 39.99, "image": "images/witcher_cover.jpg"},
    {"title": "Super Mario Odyssey", "developer": "Nintendo", "price": 49.99, "image": "images/mario_odyssey_cover.jpg"}
]`;

class MediaItem {
    #price;

    constructor(title, developer, price, image) {
        this.title = title;
        this.developer = developer;
        this.image = image;
        this.setPrice(price); 
    }

    get price() {
        return this.#price;
    }

    setPrice(price) {
        if (price >= 0) {
            this.#price = price;
        } else {
            console.error('Price cannot be negative.');
            this.#price = 0;  
        }
    }

    toString() {
        return `${this.title} by ${this.developer}, priced at $${this.price.toFixed(2)}`;
    }

    createHtmlElement() {
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('media-item');

        const imageElem = document.createElement('img');
        imageElem.src = this.image;
        imageElem.alt = this.title;
        imageElem.onerror = function () {
            this.src = 'images/default_cover.jpg';
        };
        mediaDiv.appendChild(imageElem);

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('media-info');

        const titleElem = document.createElement('h3');
        titleElem.textContent = this.title;
        infoDiv.appendChild(titleElem);

        const developerElem = document.createElement('p');
        developerElem.textContent = `by ${this.developer}`;
        infoDiv.appendChild(developerElem);

        const priceElem = document.createElement('p');
        priceElem.textContent = `Price: $${this.price.toFixed(2)}`;
        infoDiv.appendChild(priceElem);

        mediaDiv.appendChild(infoDiv);
        return mediaDiv;
    }
}

let mediaArray = [];
try {
    mediaArray = JSON.parse(mediaData);
} catch (e) {
    console.error("Failed to parse media data:", e);
}

const mediaItems = mediaArray.map(item => new MediaItem(item.title, item.developer, item.price, item.image));
const mediaContainer = document.getElementById('media-container');

function renderMedia(items) {
    mediaContainer.innerHTML = '';
    items.forEach(mediaItem => {
        const mediaElement = mediaItem.createHtmlElement();
        mediaContainer.appendChild(mediaElement);
    });
}

// Initial render
renderMedia(mediaItems);

// Filter function
function filterGames() {
    const query = document.getElementById('search').value.toLowerCase();
    const filtered = mediaItems.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.developer.toLowerCase().includes(query)
    );
    renderMedia(filtered);
}
