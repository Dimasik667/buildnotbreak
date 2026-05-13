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
    { id: 21, name: "Сварочный инвертор Ресанта", type: "heavy", brand: "Other", price: 1100, wide: false, lat: 56.85, lon: 60.68, img: "https://ir.ozone.ru/s3/multimedia-1-u/7472734518.jpg", desc: "Компактный аппарат для ручной дуговой сварки." },
    { id: 22, name: "Лобзик Makita 4329", type: "hand", brand: "Makita", price: 500, wide: false, lat: 56.90, lon: 60.68, img: "https://cdn-products.sdvor.com/images/sdvor-catalog/800x800/0/r2615.jpg?t=1709267773030", desc: "Удобный лобзик Makita." },
    {id: 23, name: "Шуруповерт Bosch GSR 18V-50", type: "hand", brand: "Bosch", price: 900, wide: true, lat: 56.84, lon: 60.61, img: "https://kotofoto.ru/product_img/2301/344201/344201_bosch-gsr-18v-50-06019h5020_4.jpg?v=1764338611", desc: "Надежный бесщеточный двигатель для тяжелых работ." },
    { id: 24, name: "Строительный фен DeWalt D26411", type: "hand", brand: "DeWalt", price: 650, wide: false, lat: 56.81, lon: 60.55, img: "https://avatars.mds.yandex.net/get-mpic/5177644/img_id2941562101652140239.jpeg/orig", desc: "Две настройки температуры для снятия краски и сварки пластика." },
    { id: 25, name: "Сабельная пила Makita DJR187Z", type: "hand", brand: "Makita", price: 1350, wide: false, lat: 56.86, lon: 60.52, img: "https://avatars.mds.yandex.net/get-mpic/11474376/2a0000019a5769a0a9670ec9e8f220095568/orig", desc: "Высокая скорость резки металла и дерева." },
    { id: 26, name: "Лазерный уровень Bosch GLL 3-80", type: "hand", brand: "Bosch", price: 1800, wide: true, lat: 56.83, lon: 60.65, img: "https://avatars.mds.yandex.net/get-mpic/5304975/img_id1625323576000750485.jpeg/orig", desc: "Построение трех плоскостей на 360 градусов." },
    { id: 27, name: "Подъемник ножничный", type: "high", brand: "Other", price: 4500, wide: false, lat: 56.78, lon: 60.63, img: "https://cdn.vseinstrumenti.ru/images/goods/skladskoe-oborudovanie-i-tehnika-dlya-sklada/skladskaya-tehnika/20995994/2400x1600/206512298.jpg", desc: "Электрический подъемник для монтажных работ в цехах." },
    { id: 28, name: "Альпинистское снаряжение (комплект)", type: "high", brand: "Other", price: 1200, wide: false, lat: 56.85, lon: 60.60, img: "https://bigwall.ru/upload/iblock/c37/mlzg6xkmwo1g2689tcxh3gtsbrvd3ias/Komplekt-SHTURM_3.jpg", desc: "Полный набор для промышленного альпинизма: обвязка, верёвки." },
    { id: 29, name: "Воздуходувка Stihl BG 86", type: "garden", brand: "Stihl", price: 950, wide: false, lat: 56.87, lon: 60.58, img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/164/915/585/672/813/31/100023843603b0.jpg", desc: "Мощная очистка территорий от листвы и мусора." },
    { id: 30, name: "Мотобур Stihl BT 131", type: "garden", brand: "Stihl", price: 2100, wide: true, lat: 56.89, lon: 60.62, img: "https://img.gardengear.ru/upload/iblock/bca/bca467e8b5802f30db89bf706b44a693.png", desc: "Профессиональный бур для установки заборов и посадок." },
    { id: 31, name: "Триммер Makita UR3501", type: "garden", brand: "Makita", price: 750, wide: false, lat: 56.80, lon: 60.54, img: "https://avatars.mds.yandex.net/get-mpic/16413949/2a00000196fe67fe259304fa979e2abf28cc/orig", desc: "Электрический триммер для кошения травы у забора." },
    { id: 32, name: "Виброплита Wacker Neuson", type: "heavy", brand: "Other", price: 3800, wide: true, lat: 56.84, lon: 60.48, img: "https://illeon.ru/upload/iblock/3b6/DPU3760H_wacker_neuson1.jpg", desc: "Уплотнение грунта, песка и асфальта при строительстве дорожек." },
    { id: 33, name: "Бетоносмеситель 180л", type: "heavy", brand: "Other", price: 1400, wide: false, lat: 56.91, lon: 60.60, img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnoe-oborudovanie-i-tehnika/oborudovanie-dlya-betonnyh-rabot/1092410/2400x1600/79727383.jpg", desc: "Электрическая бетономешалка для больших объемов раствора." },
    { id: 34, name: "Отбойный молоток Bosch GSH 11 E", type: "heavy", brand: "Bosch", price: 2400, wide: false, lat: 56.83, lon: 60.72, img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/otbojnye-molotki/676/2400x1600/51593641.jpg", desc: "Максимальная энергия удара для демонтажа перекрытий." },
    { id: 35, name: "Дизельная пушка Ballu BHDP-20", type: "heavy", brand: "Other", price: 1600, wide: false, lat: 56.77, lon: 60.59, img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/ccs/95012/MjExMDA3NzdfNzk5MDE4NTQ2/b0.jpg", desc: "Мощный обогрев строящихся объектов и складов." }
];

// --- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ---
let activeTool = null;
let currentType = 'all';
let currentBrand = 'all';
let usersDB = JSON.parse(localStorage.getItem('bnb_users')) || [];
let myBookings = JSON.parse(localStorage.getItem('bnb_bookings')) || [];

// --- АВТОРИЗАЦИЯ ---
function toggleAuth() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('reg-form').classList.toggle('hidden');
}

// Регистрация
document.getElementById('reg-btn-final').onclick = () => {
    const email = document.getElementById('reg-email').value.trim();
    const name = document.getElementById('reg-user').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();

    if (!email || !name || !pass) return showToast("Заполните все поля");
    if (usersDB.find(u => u.name === name)) return showToast("Логин занят");

    const newUser = { email, name, pass };
    usersDB.push(newUser);
    localStorage.setItem('bnb_users', JSON.stringify(usersDB));
    
    showToast("Регистрация успешна!");
    toggleAuth(); // Перекидываем на вход
};

// Вход
document.getElementById('login-btn-final').onclick = () => {
    const name = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value.trim();

    const user = usersDB.find(u => u.name === name && u.pass === pass);

    if (user) {
        localStorage.setItem('bnb_user', name);
        loginUser(name);
    } else {
        showToast("Неверный логин или пароль");
    }
};


function openInfo(type) {
    const body = document.getElementById('info-body');
    body.innerHTML = infoData[type];
    document.getElementById('info-modal').classList.remove('hidden');
}

function closeInfo() {
    document.getElementById('info-modal').classList.add('hidden');
}

function loginUser(name) {
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('display-name').innerText = name;
    document.getElementById('avatar-initials').innerText = name[0].toUpperCase();
    
    // ЗАГРУЗКА ЛИЧНЫХ БРОНЕЙ:
    // Ищем брони по ключу "bookings_ИмяПользователя"
    myBookings = JSON.parse(localStorage.getItem(`bookings_${name}`)) || [];
    
    updateUI();
    render();
}

// Выход (исправлено, чтобы не удалять базу пользователей)
document.getElementById('logout-btn').onclick = (e) => {
    e.stopPropagation();
    if(confirm("Выйти из системы?")) {
        localStorage.removeItem('bnb_user'); // Удаляем только текущую сессию
        window.location.reload(); 
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

    // 1. Добавляем инструмент в локальный массив
    myBookings.push({...activeTool, bId: Date.now()});

    // 2. Получаем имя текущего пользователя
    const currentUser = localStorage.getItem('bnb_user');

    // 3. Сохраняем в localStorage с уникальным ключом для этого юзера
    // Используем `bookings_${currentUser}`, чтобы брони Дмитрия не видел Никита
    localStorage.setItem(`bookings_${currentUser}`, JSON.stringify(myBookings));

    // 4. Обновляем интерфейс
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
    if (savedName) {
        loginUser(savedName); // Внутри этой функции уже вызывается render() и updateUI()
    } else {
        render(); // Если не залогинены, просто показываем карточки
    }
});



// Регистрация Service Worker для PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log("Service Worker зарегистрирован"))
            .catch(err => console.log("Ошибка SW:", err));
    });
}

// --- ЛОГИКА ИНФОРМАЦИОННЫХ МОДАЛОК (ФУТЕР) ---
const infoData = {
    privacy: `
        <h2>Политика конфиденциальности</h2>
        <p>Мы собираем только те данные, которые необходимы для работы сервиса BNB OS: ваш логин и историю бронирований.</p>
        <p>Данные хранятся локально в вашем браузере и не передаются на сторонние сервера.</p>
    `,
    terms: `
        <h2>Условия использования</h2>
        <p>1. Инструмент выдается только авторизованным специалистам.</p>
        <p>2. Бронирование активно в течение 24 часов.</p>
        <p>3. Арендатор несет ответственность за сохранность и чистоту инструмента.</p>
    `,
    contacts: `
        <h2>Техническая поддержка</h2>
        <p>Возникли вопросы по работе BNB OS или неисправности инструмента?</p>
        <p><b>Локация базы:</b> Екатеринбург, ул. Малышева 117</p>
        <p><b>Email:</b> help@bnb-os.ru</p>
        <p><b>Телефон:</b> +7 (343) 123-45-67</p>
    `
};

function openInfo(type) {
    const body = document.getElementById('info-body');
    if (body && infoData[type]) {
        body.innerHTML = infoData[type];
        document.getElementById('info-modal').classList.remove('hidden');
    }
}

function closeInfo() {
    document.getElementById('info-modal').classList.add('hidden');
}