// === Config ===
const WHATSAPP_NUMBER = "5492216168280";

// === Año en footer ===
document.getElementById("year").textContent = new Date().getFullYear();

// === Marquee ===
const stripTrack = document.getElementById("stripTrack");
const stripHTML = Array.from({ length: 8 }).map(() =>
  `<span>SMASH BURGERS <span class="star">★</span> hamburguesas <span class="star">★</span> TRAGOS DE AUTOR <span class="star">★</span></span>`
).join(" ");
stripTrack.innerHTML = stripHTML + stripHTML;

// === Opciones de personalización por categoría ===
// Cada categoría define su set de "extras" y "sauces". Categorías sin opciones = agregado directo.
const OPTIONS = {
  "Hamburguesas": {
    extras: [
      { id: "doble_carne",  label: "Doble carne",   price: 800 },
      { id: "triple_carne", label: "Triple carne",  price: 1500 },
      { id: "extra_queso",  label: "Extra queso",   price: 400 },
    ],
    sauces: [
      { id: "cheddar_extra", label: "Cheddar extra",     price: 200 },
      { id: "bbq",           label: "Salsa BBQ",         price: 200 },
      { id: "picante",       label: "Salsa picante",     price: 200 },
      { id: "ajo",           label: "Mayonesa de ajo",   price: 200 },
    ],
  },
  "papas": {
    extras: [
      { id: "doble_cheddar", label: "Doble cheddar", price: 600 },
      { id: "doble_bacon",   label: "Doble bacon",   price: 700 },
      { id: "extra_papas",   label: "Porción extra de papas", price: 900 },
      { id: "cebolla_car",   label: "Cebolla caramelizada",   price: 400 },
    ],
    sauces: [
      { id: "cheddar_extra", label: "Cheddar extra",   price: 200 },
      { id: "bbq",           label: "Salsa BBQ",       price: 200 },
      { id: "picante",       label: "Salsa picante",   price: 200 },
      { id: "ajo",           label: "Mayonesa de ajo", price: 200 },
    ],
  },
  "Bebidas": {
    extras: [
      { id: "hielo", label: "Bolsa de hielo", price: 800 },
      { id: "vaso",  label: "Vaso descartable extra", price: 150 },
    ],
    sauces: [],
  },
  // El resto de categorías se agrega sin modal.
};

// === Datos del menú ===
const MENU = {
  "Hamburguesas": [
    { name: "La Planchetta Clásica", desc: "Doble medallón, cheddar, lechuga, tomate y salsa de la casa.", price: "$8.900",  img: "assets/fotolaplanchetta.jpg" },
    { name: "Bacon Brutal",          desc: "Triple bacon, cheddar fundido.",                                price: "$10.500", img: "assets/fotolaplanchetta.jpg" },
    { name: "Smash Doble",           desc: "Dos smash patis, queso, y mostaza.",                            price: "$9.400",  img: "assets/fotolaplanchetta.jpg" },
    { name: "La Picante",            desc: "Jalapeños, queso provolone, salsa y cebolla morada.",           price: "$9.800",  img: "assets/fotolaplanchetta.jpg" },
  ],
  "tragos": [
    { name: "Flowerss",         desc: "vodka rasberry, vodka piña, almibar frutos rojos y sprite.", price: "$10.000", img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
    { name: "gin-paff",         desc: "gin, flyn paffs y sprite",                                    price: "$8.000",  img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
    { name: "Fernet con Coca",  desc: "El clásico, bien cargado.",                                   price: "$7.000",  img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
  ],
  "Postres": [
    { name: "Tiramisu",        desc: "Postre italiano con crema de mascarpone y cafe",     price: "$7.500", img: "https://tinoxx010.github.io/LaPlacha/assets/tiramisu.jpg" },
    { name: "Chocotorta",      desc: "postre argentino que no falla jamas",                price: "$7.500", img: "https://tinoxx010.github.io/LaPlacha/assets/chocotorta.jpg" },
    { name: "Bombom Escoces",  desc: "Postre escoces helado, cobertura de chocolate con mani", price: "$4.000", img: "https://tinoxx010.github.io/LaPlacha/assets/bombom.jpg" },
  ],
  "papas": [
    { name: "Papas onduladas con cheddar y bacon", desc: "Papas fritas con forma ondulada, bañadas en cheddar y bacon.", price: "$4.500", img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
    { name: "Salchipapa con cheddar",              desc: "Papas cubierta con queso cheddar fundido y trozos de salchicha.", price: "$5.000", img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
    { name: "Papas Especiales",                    desc: "Papas especiales con especias de la casa.",                       price: "$5.000", img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
  ],
  "Bebidas": [
    { name: "Coca-Cola", desc: "La clásica bebida gaseosa.",     price: "$2.000", img: "https://tinoxx010.github.io/LaPlacha/assets/coca.jpg" },
    { name: "Sprite",    desc: "refresco de sabor a lima-limón",  price: "$1.500", img: "https://tinoxx010.github.io/LaPlacha/assets/sprite.jpg" },
    { name: "Manaos",    desc: "cola, lima y pomelo.",            price: "$3.500", img: "https://tinoxx010.github.io/LaPlacha/assets/MANAOS.jpg" },
  ],
  "Pizzas ": [
    { name: "Muzzarella",  desc: "Pizza clásica con muzzarella y salsa de tomate.", price: "$6.000", img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
    { name: "Napolitana",  desc: "Pizza con muzzarella, tomate, ajo y albahaca.",   price: "$7.000", img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
  ],
  "Promos": [
    { name: "2 burguers y coca de 1,5L", desc: "2 burguers, Doble cheddar y una coca de 1,5L", price: "$30000", img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
    { name: "2 Muzzas",                  desc: "2 MUZZAS",                                     price: "$40000", img: "https://tinoxx010.github.io/LaPlacha/assets/fotolaploanchetta.jpg" },
  ],
};

const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("menuGrid");
let currentTab = Object.keys(MENU)[0];

function renderTabs() {
  tabsEl.innerHTML = "";
  Object.keys(MENU).forEach((t) => {
    const b = document.createElement("button");
    b.className = "tab" + (t === currentTab ? " active" : "");
    b.textContent = t;
    b.onclick = () => { currentTab = t; renderTabs(); renderGrid(); };
    tabsEl.appendChild(b);
  });
}

function renderGrid() {
  gridEl.innerHTML = "";
  MENU[currentTab].forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.innerHTML = `
      <div class="img"><img src="${item.img}" alt="${item.name}" loading="lazy" /></div>
      <div class="body">
        <div class="row">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p class="desc">${item.desc}</p>
        <button class="add-btn">+ Agregar</button>
      </div>`;
    // Al click en la tarjeta o en el botón => abrir modal personalizador
    const openModal = () => openProductModal(item, currentTab);
    card.querySelector(".add-btn").onclick = (e) => { e.stopPropagation(); openModal(); };
    card.onclick = openModal;
    gridEl.appendChild(card);
  });
}

renderTabs();
renderGrid();

// === Utilidades de precio ===
function parsePrice(str) {
  return parseInt(String(str).replace(/[^\d]/g, ""), 10) || 0;
}
function formatPrice(n) {
  return "$" + n.toLocaleString("es-AR");
}

// === Carrito ===
let cart = [];
try { cart = JSON.parse(localStorage.getItem("cart") || "[]"); } catch {}

function saveCart() { localStorage.setItem("cart", JSON.stringify(cart)); }

// Construye una clave única para el mismo producto con los mismos extras
function itemKey(name, options) {
  const ids = (options || []).map(o => o.id).sort().join("|");
  return name + "::" + ids;
}

function addCustomToCart(product, options, qty) {
  const key = itemKey(product.name, options);
  const unit = parsePrice(product.price) + (options || []).reduce((s, o) => s + o.price, 0);
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      key,
      name: product.name,
      img: product.img,
      base: parsePrice(product.price),
      options: options || [],
      price: unit,
      qty,
    });
  }
  saveCart(); renderCart();
}

function decItem(key) {
  const ex = cart.find(i => i.key === key);
  if (!ex) return;
  ex.qty -= 1;
  if (ex.qty <= 0) cart = cart.filter(i => i.key !== key);
  saveCart(); renderCart();
}
function incItem(key) {
  const ex = cart.find(i => i.key === key);
  if (!ex) return;
  ex.qty += 1;
  saveCart(); renderCart();
}

const itemsEl = document.getElementById("cartItems");
const totalEl = document.getElementById("cartTotal");
const countEl = document.getElementById("cartCount");

function renderCart() {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  if (totalQty > 0) { countEl.hidden = false; countEl.textContent = totalQty; }
  else countEl.hidden = true;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty">Tu carrito está vacío.<br>Agregá algo del menú 🍔</div>`;
  } else {
    itemsEl.innerHTML = "";
    cart.forEach((i) => {
      const optsHTML = (i.options && i.options.length)
        ? `<div class="ci-opts">+ ${i.options.map(o => o.label).join(" · ")}</div>`
        : "";
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div class="ci-info">
          <div class="name">${i.name}</div>
          ${optsHTML}
          <div class="ip">${formatPrice(i.price)} c/u</div>
        </div>
        <div class="qty">
          <button data-act="dec">−</button>
          <span>${i.qty}</span>
          <button data-act="inc">+</button>
        </div>`;
      row.querySelector('[data-act="dec"]').onclick = () => decItem(i.key);
      row.querySelector('[data-act="inc"]').onclick = () => incItem(i.key);
      itemsEl.appendChild(row);
    });
  }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  totalEl.textContent = formatPrice(total);
}
renderCart();

// === Drawer del carrito ===
const drawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("cartOverlay");
function openCart() { drawer.classList.add("open"); overlay.hidden = false; drawer.setAttribute("aria-hidden", "false"); }
function closeCart() { drawer.classList.remove("open"); overlay.hidden = true; drawer.setAttribute("aria-hidden", "true"); }
document.getElementById("cartBtn").onclick = openCart;
document.getElementById("cartClose").onclick = closeCart;
overlay.onclick = closeCart;

// === Modal personalizador ===
const prodOverlay = document.getElementById("prodOverlay");
const prodModal   = document.getElementById("prodModal");
const prodImg     = document.getElementById("prodImg");
const prodName    = document.getElementById("prodName");
const prodDesc    = document.getElementById("prodDesc");
const prodBase    = document.getElementById("prodBase");
const prodExtras  = document.getElementById("prodExtras");
const prodSauces  = document.getElementById("prodSauces");
const prodExtrasWrap = document.getElementById("prodExtrasWrap");
const prodSaucesWrap = document.getElementById("prodSaucesWrap");
const prodQtyEl   = document.getElementById("prodQty");
const prodTotal   = document.getElementById("prodTotal");

let modalState = null;

function openProductModal(product, category) {
  const cfg = OPTIONS[category] || { extras: [], sauces: [] };
  modalState = {
    product,
    category,
    extras: cfg.extras || [],
    sauces: cfg.sauces || [],
    selected: {}, // id -> true
    qty: 1,
  };

  prodImg.src = product.img;
  prodImg.alt = product.name;
  prodName.textContent = product.name;
  prodDesc.textContent = product.desc || "";
  prodBase.textContent = product.price;

  renderOptGroup(prodExtras, modalState.extras);
  renderOptGroup(prodSauces, modalState.sauces);
  prodExtrasWrap.style.display = modalState.extras.length ? "" : "none";
  prodSaucesWrap.style.display = modalState.sauces.length ? "" : "none";

  prodQtyEl.textContent = "1";
  updateProdTotal();

  prodOverlay.hidden = false;
  prodModal.classList.add("open");
  prodModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function renderOptGroup(container, list) {
  container.innerHTML = "";
  list.forEach(opt => {
    const id = "opt_" + opt.id;
    const row = document.createElement("label");
    row.className = "prod-opt";
    row.innerHTML = `
      <input type="checkbox" id="${id}" />
      <span class="prod-opt-label">${opt.label}</span>
      <span class="prod-opt-price">+${formatPrice(opt.price)}</span>
    `;
    row.querySelector("input").onchange = (e) => {
      modalState.selected[opt.id] = e.target.checked;
      updateProdTotal();
    };
    container.appendChild(row);
  });
}

function selectedOptions() {
  const all = [...modalState.extras, ...modalState.sauces];
  return all.filter(o => modalState.selected[o.id]);
}

function updateProdTotal() {
  const base = parsePrice(modalState.product.price);
  const extras = selectedOptions().reduce((s, o) => s + o.price, 0);
  const total = (base + extras) * modalState.qty;
  prodTotal.textContent = formatPrice(total);
}

document.getElementById("prodInc").onclick = () => {
  modalState.qty += 1;
  prodQtyEl.textContent = modalState.qty;
  updateProdTotal();
};
document.getElementById("prodDec").onclick = () => {
  if (modalState.qty > 1) {
    modalState.qty -= 1;
    prodQtyEl.textContent = modalState.qty;
    updateProdTotal();
  }
};

function closeProductModal() {
  prodModal.classList.remove("open");
  prodOverlay.hidden = true;
  prodModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("prodClose").onclick = closeProductModal;
prodOverlay.onclick = closeProductModal;

document.getElementById("prodAdd").onclick = () => {
  addCustomToCart(modalState.product, selectedOptions(), modalState.qty);
  closeProductModal();
  openCart();
};

// === WhatsApp ===
const waText = "Hola! Me gustaría hacer un pedido en Las Bandidas 🍔";
document.getElementById("waBtn").href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

document.getElementById("cartSend").onclick = () => {
  if (cart.length === 0) { alert("Tu carrito está vacío."); return; }
  const lines = cart.map((i) => {
    const opts = (i.options && i.options.length) ? `\n   + ${i.options.map(o => o.label).join(", ")}` : "";
    return `• ${i.qty}x ${i.name}${opts} — ${formatPrice(i.price * i.qty)}`;
  }).join("\n");
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg =
`Hola! Quiero hacer este pedido en Las Bandidas 🍔

${lines}

Total: ${formatPrice(total)}
Tiempo estimado de delivery: 30 a 40 minutos.

Te paso el comprobante de la transferencia por acá. ¡Gracias!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
};
