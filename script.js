const menuData = {
  starters: [
    {
      name: 'Sourdough & Cultured Butter',
      description: 'House-baked sourdough served warm with sea salt and whipped cultured butter.',
      price: '$9'
    },
    {
      name: 'Burrata & Heirloom Tomato',
      description: 'Victorian tomatoes, basil oil, aged balsamic, toasted seeds, and sourdough crumb.',
      price: '$23'
    },
    {
      name: 'Crispy Calamari',
      description: 'Lemon myrtle aioli, pickled fennel, chilli, and parsley.',
      price: '$24'
    },
    {
      name: 'Pumpkin Arancini',
      description: 'Roasted pumpkin, sage, parmesan, smoked paprika aioli, and rocket.',
      price: '$19'
    }
  ],
  mains: [
    {
      name: 'Chargrilled Victorian Lamb',
      description: 'Slow-cooked lamb shoulder, smoked eggplant, rosemary jus, and herb salad.',
      price: '$44'
    },
    {
      name: 'Port Phillip Seafood Linguine',
      description: 'Market fish, prawns, tomato saffron sugo, garlic, chilli, and basil.',
      price: '$38'
    },
    {
      name: 'Crisp-Skin Barramundi',
      description: 'Cauliflower puree, charred greens, caper butter, lemon, and garden herbs.',
      price: '$41'
    },
    {
      name: 'Wild Mushroom Risotto',
      description: 'Porcini butter, truffle pecorino, fresh herbs, lemon, and toasted hazelnut.',
      price: '$32'
    }
  ],
  desserts: [
    {
      name: 'Wattleseed Chocolate Tart',
      description: 'Dark chocolate ganache, native wattleseed, raspberry gel, and mascarpone.',
      price: '$18'
    },
    {
      name: 'Lemon Myrtle Pavlova',
      description: 'Crisp meringue, passionfruit, berries, double cream, and mint.',
      price: '$17'
    },
    {
      name: 'Espresso Affogato',
      description: 'Vanilla bean gelato, fresh espresso, almond biscotti, and optional liqueur.',
      price: '$14'
    },
    {
      name: 'Victorian Cheese Selection',
      description: 'Three artisan cheeses with quince paste, lavosh, muscatels, and walnuts.',
      price: '$27'
    }
  ],
  drinks: [
    {
      name: 'Yarra Valley Chardonnay',
      description: 'Stone fruit, citrus, fine oak, and a crisp mineral finish.',
      price: '$16 glass'
    },
    {
      name: 'Mornington Pinot Noir',
      description: 'Bright cherry, gentle spice, soft tannins, and savoury depth.',
      price: '$18 glass'
    },
    {
      name: 'Federation Spritz',
      description: 'Australian aperitif, sparkling wine, orange, rosemary, and soda.',
      price: '$19'
    },
    {
      name: 'Native Garden Mocktail',
      description: 'Lemon myrtle, cucumber, mint, lime, and sparkling water.',
      price: '$13'
    }
  ]
};

const menuItems = document.querySelector('#menu-items');
const menuTabs = document.querySelectorAll('.menu-tab');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#primary-menu');
const bookingForm = document.querySelector('#booking-form');
const formMessage = document.querySelector('#form-message');

function renderMenu(category) {
  const categoryItems = menuData[category];

  menuItems.innerHTML = categoryItems.map((item) => `
    <article class="menu-item">
      <div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <span class="price">${item.price}</span>
    </article>
  `).join('');
}

menuTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    menuTabs.forEach((button) => button.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.category);
  });
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const booking = new FormData(bookingForm);
  const guestName = booking.get('name');
  const bookingDate = booking.get('date');
  const bookingTime = booking.get('time');
  const guestCount = booking.get('guests');

  formMessage.textContent = `Thanks, ${guestName}. Your request for ${guestCount} on ${bookingDate} at ${bookingTime} has been received.`;
  bookingForm.reset();
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
renderMenu('starters');
