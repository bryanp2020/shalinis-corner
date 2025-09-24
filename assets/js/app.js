// Simple rotating menu and hours WITH PHOTOS
const menu = [
  { day: 'Monday',    items: [] },
  { day: 'Tuesday',   items: [
    { name:'Chicken Biryani', img:'assets/img/menu/chicken-biriyani.jpg', tags:['spicy','halal'] },
    { name:'Veg Biryani', img:'assets/img/menu/veg-biryani.jpg', tags:['veg'] },
    { name:'Raita & Salad', img:'assets/img/menu/raita-salad.jpg', tags:['veg'] }
  ]},
  { day: 'Wednesday', items: [
    { name:'Butter Chicken', img:'assets/img/menu/butter-chicken.jpg', tags:['halal'] },
    { name:'Dal Tadka & Jeera Rice', img:'assets/img/menu/dal-tadka-jeera-rice.jpg', tags:['veg'] },
    { name:'Garlic Naan', img:'assets/img/menu/garlic-naan.jpg', tags:['veg'] }
  ]},
  { day: 'Thursday',  items: [
    { name:'Mauritian Dholl Puri (2)', img:'assets/img/menu/dholl-puri.jpg', tags:['veg'] },
    { name:'Cari Gros Pois (butter bean curry)', img:'assets/img/menu/cari-gros-pois.jpg', tags:['veg'] },
    { name:'Mazavaroo (chili paste)', img:'assets/img/menu/mazavaroo.jpg', tags:['spicy','veg'] }
  ]},
  { day: 'Friday',    items: [
    { name:'Fish Vindaye', img:'assets/img/menu/fish-vindaye.jpg', tags:[] },
    { name:'Farata (paratha) (2)', img:'assets/img/menu/farata.jpg', tags:['veg'] },
    { name:'Gateau Piment (chili fritters) (6)', img:'assets/img/menu/gateau-piment.jpg', tags:['spicy','veg'] }
  ]},
  { day: 'Saturday',  items: [
    { name:'Lamb Curry & Basmati', img:'assets/img/menu/lamb-curry.jpg', tags:['halal'] },
    { name:'Aloo Gobi', img:'assets/img/menu/aloo-gobi.jpg', tags:['veg'] },
    { name:'Roti (2)', img:'assets/img/menu/roti.jpg', tags:['veg'] }
  ]},
  { day: 'Sunday',    items: [
    { name:'Special Pop-Up: Chef’s Choice', img:'assets/img/menu/chefs-choice.jpg', tags:[] }
  ]},
];

const typicalOpenDays = ['Thursday','Friday','Saturday']; // tweak as needed

function renderTodaySpecial(){
  const d = new Date();
  const todayIdx = d.getDay(); // 0 Sun .. 6 Sat
  const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][todayIdx];
  const today = menu.find(m => m.day === dayName);
  const el = document.querySelector('#todaySpecial .special-body');
  if (!today || today.items.length === 0){
    el.innerHTML = `<p>No set menu today. Check upcoming days below—pre-orders open soon!</p>`;
    return;
  }
  el.innerHTML = `<ul class="list">${today.items.map(i => `<li>${i.name} ${renderTags(i.tags)}</li>`).join('')}</ul>`;
}

function renderMenuGrid(){
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = menu.map(day => `
    <div class="menu-item">
      ${firstImage(day.items)}
      <div class="menu-body">
        <h3>${day.day}</h3>
        ${day.items.length ? day.items.map(i => itemRow(i)).join('') : '<p class="muted">No regular service.</p>'}
      </div>
    </div>
  `).join('');
}

function itemRow(i){
  return `
    <div class="item-row">
      <div style="display:flex; align-items:center; gap:.6rem; margin:.45rem 0;">
        ${i.img ? `<img src="${i.img}" alt="${i.name}" style="width:56px;height:56px;object-fit:cover;border-radius:10px;border:1px solid #eee;">` : ''}
        <div>
          <h4>${i.name}</h4>
          <div class="menu-meta">${(i.tags||[]).map(t => `<span class="chip ${t}">${label(t)}</span>`).join(' ')}</div>
        </div>
      </div>
    </div>
  `;
}

function firstImage(items){
  const withImg = (items||[]).find(i => i.img);
  if (!withImg) return '';
  return `<img src="${withImg.img}" alt="${withImg.name}">`;
}

function renderOpenDays(){
  const ul = document.getElementById('openDays');
  ul.innerHTML = typicalOpenDays.map(d => `<li><strong>${d}</strong> — rotating menu, limited quantities</li>`).join('');
}

function label(t){
  return t === 'veg' ? 'Vegetarian' : (t === 'spicy' ? 'Spicy' : (t === 'halal' ? 'Halal-friendly' : t));
}

function renderTags(tags){
  if (!tags || !tags.length) return '';
  return `&nbsp;${tags.map(t => `<span class="chip ${t}">${label(t)}</span>`).join(' ')}`;
}

function setYear(){ document.getElementById('year').textContent = new Date().getFullYear(); }

document.addEventListener('DOMContentLoaded', () => {
  renderTodaySpecial();
  renderMenuGrid();
  renderOpenDays();
  setYear();
});
