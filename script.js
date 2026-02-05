const toolsDB = [
    { id: 1, name: "Гайковерт Makita DTW1002Z", type: "hand", brand: "Makita", price: 1200, wide: true, lat: 56.83, lon: 60.60, img: "https://avatars.mds.yandex.net/get-mpic/5234821/img_id1721688660724640538.jpeg/orig", desc: "Ударный инструмент с крутящим моментом 1000 Нм." },
    { id: 2, name: "Перфоратор DeWalt DCH263", type: "hand", brand: "DeWalt", price: 1550, wide: false, lat: 56.85, lon: 60.59, img: "https://ir.ozone.ru/s3/multimedia-1-k/7380860132.jpg", desc: "Мощный перфоратор системы SDS-Plus для бетона." },
    { id: 3, name: "УШМ Bosch GWS 18V-10", type: "hand", brand: "Bosch", price: 850, wide: false, lat: 56.82, lon: 60.62, img: "https://ir.ozone.ru/s3/multimedia-1/6449068969.jpg", desc: "Аккумуляторная болгарка с защитой от заклинивания." },
    { id: 17, name: "Циркулярная пила DeWalt DCS570", type: "hand", brand: "DeWalt", price: 1400, wide: false, lat: 56.86, lon: 60.64, img: "https://avatars.mds.yandex.net/get-mpic/4709279/2a00000195f15d2347d5564cf125eeda9adc/orig", desc: "Профессиональная пила для точного раскроя дерева." },
    { id: 13, name: "Лестница 3-х секционная 9м", type: "high", brand: "Other", price: 800, wide: false, lat: 56.80, lon: 60.61, img: "https://cdn.vseinstrumenti.ru/images/goods/sadovaya-tehnika-i-instrument/lestnitsy/960812/1000x1000/157201595.jpg", desc: "Алюминиевая лестница-трансформер для фасадных работ." },
    { id: 14, name: "Вышка-тура ВСП-250 (12м)", type: "high", brand: "Other", price: 1500, wide: true, lat: 56.88, lon: 60.50, img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/ccs/245140/dnNwXzIuMHgyLjBfMTIsNF9zOV80NTMxNjA5MDc=/b0.jpg", desc: "Мобильная строительная вышка на колесах с рабочей площадкой." },
    { id: 18, name: "Стремянка-трансформер 4x4", type: "high", brand: "Other", price: 600, wide: false, lat: 56.81, lon: 60.58, img: "https://cdn.vseinstrumenti.ru/images/goods/sadovaya-tehnika-i-instrument/lestnitsy/829435/2400x1600/53005194.jpg", desc: "Многофункциональная лестница для внутренних работ." },
    { id: 15, name: "Бензопила Stihl MS 180", type: "garden", brand: "Stihl", price: 1100, wide: false, lat: 56.82, lon: 60.70, img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-42/738/992/451/012/29/100051836075b0.jpg", desc: "Легендарная легкая бензопила для сада и заготовки дров." },
    { id: 16, name: "Цепная пила Makita UC4050A", type: "garden", brand: "Makita", price: 1300, wide: false, lat: 56.84, lon: 60.55, img: "https://rostov.artem-tools.ru/upload/iblock/533/makita_uc4050a.jpg", desc: "Электрическая цепная пила для чистого реза без выхлопов." },
    { id: 19, name: "Газонокосилка Bosch ARM 34", type: "garden", brand: "Bosch", price: 950, wide: false, lat: 56.87, lon: 60.65, img: "https://cdn1.ozone.ru/s3/multimedia-h/6668234729.jpg", desc: "Легкая роторная косилка для идеального газона." },
    { id: 4, name: "Генератор Fubag TI 2300", type: "heavy", brand: "Other", price: 3200, wide: true, lat: 56.79, lon: 60.55, img: "https://avatars.mds.yandex.net/i?id=3cf5ea8d4ad47da7b2984695f3189a8f_l-5289481-images-thumbs&n=13", desc: "Инверторный генератор для чувствительной электроники." },
    { id: 20, name: "Бензогенератор Makita EG2250A", type: "heavy", brand: "Makita", price: 2800, wide: false, lat: 56.83, lon: 60.52, img: "https://makita-dv.ru/product/big/eg2250a.jpg", desc: "Надежный источник питания для строительной площадки." },
    { id: 21, name: "Сварочный инвертор Ресанта", type: "heavy", brand: "Other", price: 1100, wide: false, lat: 56.85, lon: 60.68, img: "https://ir.ozone.ru/s3/multimedia-1-u/7472734518.jpg", desc: "Компактный аппарат для ручной дуговой сварки." }
];

// --- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ---
let myBookings = JSON.parse(localStorage.getItem('bnb_bookings')) || [];
let activeTool = null;
let currentType = 'all';
let currentBrand = 'all';

// --- АВТОРИЗАЦИЯ ---
function loginUser(name) {
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('display-name').innerText = name;
    document.getElementById('avatar-initials').innerText = name[0].toUpperCase();
    updateUI();
    render();
}

document.getElementById('login-btn').onclick = () => {
    const name = document.getElementById('user-input').value;
    if(name.trim()) {
        localStorage.setItem('bnb_user', name);
        loginUser(name);
    }
};

document.getElementById('logout-btn').onclick = (e) => {
    e.stopPropagation();
    if(confirm("Выйти из системы? Все данные сессии будут удалены.")) {
        localStorage.clear(); // Удаляет и пользователя, и брони
        window.location.href = window.location.pathname + "?" + Date.now(); 
    }
};

// --- ОТРИСОВКА СЕТКИ (BENTO GRID) ---
function render() {
    const grid = document.getElementById('grid-container');
    if (!grid) return;
    grid.innerHTML = '';

    // Фильтрация
    const filtered = toolsDB.filter(t => 
        (currentType === 'all' || t.type === currentType) && 
        (currentBrand === 'all' || t.brand === currentBrand)
    );

    // Обработка пустого результата
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #666;">
                <span class="material-symbols-outlined" style="font-size: 64px; margin-bottom: 20px; opacity: 0.5;">search_off</span>
                <h3 style="color: #fff; margin-bottom: 10px;">Ничего не найдено</h3>
                <p>Попробуйте выбрать другой бренд или сбросить фильтры</p>
            </div>`;
        return;
    }

    filtered.forEach(tool => {
        const card = document.createElement('div');
        card.className = `card ${tool.wide ? 'wide' : ''}`;
        card.innerHTML = `
            <div class="dist-badge">📍 ${tool.dist ? tool.dist.toFixed(1) + ' km' : 'Екб'}</div>
            <div class="card-img"><img src="${tool.img}" alt="${tool.name}"></div>
            <div class="card-title">${tool.name}</div>
            <div class="card-price">${tool.price} ₽ <span>/ сутки</span></div>
        `;
        card.onclick = () => openModal(tool);
        grid.appendChild(card);
    });
}

// --- МОДАЛЬНОЕ ОКНО ---
function openModal(tool) {
    activeTool = tool;
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <img src="${tool.img}" style="width:100%; border-radius:20px; margin-bottom:20px;">
        <h2 style="font-size:28px; font-weight:900; line-height:1.2;">${tool.name}</h2>
        <p style="margin:20px 0; color:#aaa; line-height:1.5;">${tool.desc}</p>
        <div style="font-size:24px; font-weight:900; color:var(--accent); margin-bottom:20px;">${tool.price} ₽ / сут.</div>
        <button class="map-btn" onclick="openRoute(event, ${tool.lat}, ${tool.lon})">
            <span class="material-symbols-outlined">directions_car</span> Проложить маршрут
        </button>
    `;
    document.getElementById('modal').classList.remove('hidden');
}

window.openRoute = (e, lat, lon) => {
    e.stopPropagation();
    window.open(`https://yandex.ru/maps/?rtext=~${lat},${lon}&rtt=auto`, '_blank');
};

// --- БРОНИРОВАНИЕ ---
document.getElementById('main-book-btn').onclick = () => {
    if (!activeTool) return;
    myBookings.push({...activeTool, bId: Date.now()});
    localStorage.setItem('bnb_bookings', JSON.stringify(myBookings));
    updateUI();
    document.getElementById('modal').classList.add('hidden');
    showToast("Инструмент забронирован!");
};

function updateUI() {
    const countText = document.getElementById('booking-count-simple');
    if(countText) countText.innerText = `Активных броней: ${myBookings.length}`;
    
    const list = document.getElementById('bookings-list');
    if(!list) return;
    
    list.innerHTML = myBookings.length ? '' : '<li style="color:#555; text-align:center; padding: 20px;">Инвентарь пуст</li>';
    
    myBookings.forEach(item => {
        const li = document.createElement('li');
        li.style.cssText = "margin-bottom:20px; border-bottom:1px solid #222; padding-bottom:15px; list-style:none;";
        li.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; gap: 10px;">
                <span style="font-weight:700; color:#fff; font-size:13px;">${item.name}</span>
                <button class="cancel-btn" onclick="confirmCancel(event, ${item.bId})">ОТМЕНА</button>
            </div>
            <button class="map-btn" style="padding:10px; font-size:11px;" onclick="openRoute(event, ${item.lat}, ${item.lon})">Найти на карте</button>
        `;
        list.appendChild(li);
    });
}

window.confirmCancel = (e, id) => {
    e.stopPropagation();
    if(confirm("Вы уверены, что хотите отменить бронь?")) {
        myBookings = myBookings.filter(b => b.bId !== id);
        localStorage.setItem('bnb_bookings', JSON.stringify(myBookings));
        updateUI();
        showToast("Бронирование отменено");
    }
};

// --- ГЕОЛОКАЦИЯ (ФОРМУЛА ГАВЕРСИНУСОВ) ---
document.getElementById('geo-btn').onclick = function(e) {
    e.stopPropagation();
    if (!navigator.geolocation) {
        showToast("Ваш браузер не поддерживает GPS");
        return;
    }
    const btnText = this.querySelector('span:last-child');
    const originalText = btnText.innerText;
    btnText.innerText = "Поиск...";

    navigator.geolocation.getCurrentPosition(
        pos => {
            const uLat = pos.coords.latitude;
            const uLon = pos.coords.longitude;
            
            toolsDB.forEach(t => {
                const R = 6371; // Радиус Земли в км
                const dLat = (t.lat - uLat) * Math.PI / 180;
                const dLon = (t.lon - uLon) * Math.PI / 180;
                const a = Math.sin(dLat/2)**2 + 
                          Math.cos(uLat * Math.PI/180) * Math.cos(t.lat * Math.PI/180) * Math.sin(dLon/2)**2;
                t.dist = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            });
            
            toolsDB.sort((a,b) => (a.dist || 0) - (b.dist || 0));
            render();
            btnText.innerText = "Обновлено";
            setTimeout(() => { btnText.innerText = originalText; }, 3000);
        },
        err => {
            btnText.innerText = "Ошибка GPS";
            showToast("Включите доступ к геопозиции");
            setTimeout(() => { btnText.innerText = originalText; }, 2000);
        }
    );
};

// --- ФИЛЬТРЫ ---
document.querySelectorAll('.filter-chip, .brand-chip').forEach(btn => {
    btn.onclick = (e) => {
        const target = e.currentTarget;
        const isBrand = target.classList.contains('brand-chip');
        const selector = isBrand ? '.brand-chip' : '.filter-chip';
        
        document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
        target.classList.add('active');
        
        if(isBrand) currentBrand = target.dataset.brand;
        else currentType = target.dataset.type;
        
        render();
    };
});

// --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---
function showToast(msg) {
    const t = document.getElementById('toast');
    if(t) {
        t.innerText = msg; 
        t.classList.remove('hidden');
        setTimeout(() => t.classList.add('hidden'), 3000);
    }
}

document.getElementById('close-modal').onclick = () => document.getElementById('modal').classList.add('hidden');

document.getElementById('user-hub').onclick = (e) => { 
    e.stopPropagation(); 
    document.getElementById('my-bookings').classList.toggle('hidden'); 
};

window.onclick = () => {
    const dropdown = document.getElementById('my-bookings');
    if(dropdown) dropdown.classList.add('hidden');
};

// --- ИНИЦИАЛИЗАЦИЯ ---
window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('bnb_user');
    if (savedName) loginUser(savedName);
    else render();
});

// Регистрация Service Worker для PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log("Service Worker зарегистрирован"))
            .catch(err => console.log("Ошибка SW:", err));
    });
}