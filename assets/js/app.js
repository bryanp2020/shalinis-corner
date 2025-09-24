// Simple rotating menu and hours
const menu = [
  { day: 'Monday',    items: [] },
  { day: 'Tuesday',   items: [
    { name:'Chicken Biryani', tags:['spicy','halal'] },
    { name:'Veg Biryani', tags:['veg'] },
    { name:'Raita & Salad', tags:['veg'] }
  ]},
  { day: 'Wednesday', items: [
    { name:'Butter Chicken', tags:['halal'] },
    { name:'Dal Tadka & Jeera Rice', tags:['veg'] },
    { name:'Garlic Naan', tags:['veg'] }
  ]},
  { day: 'Thursday',  items: [
    { name:'Mauritian Dholl Puri (2)', tags:['veg'] },
    { name:'Cari Gros Pois (butter bean curry)', tags:['veg'] },
    { name:'Mazavaroo (chili paste)', tags:['spicy','veg'] }
  ]},
  { day: 'Friday',    items: [
    { name:'Fish Vindaye', tags:[] },
    { name:'Farata (paratha) (2)', tags:['veg'] },
    { name:'Gateau Piment (chili fritters) (6)', tags:['spicy','veg'] }
  ]},
  { day: 'Saturday',  items: [
    { name:'Lamb Curry & Basmati', tags:['halal'] },
    { name:'Aloo Gobi', tags:['veg'] },
    { name:'Roti (2)', tags:['veg'] }
  ]},
  { day: 'Sunday',    items: [
    { name:'Special Pop‑Up: Chef’s Choice', tags:[] }
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
    el.innerHTML = `<p>No set menu today. Check upcoming days below—pre‑orders open soon!</p>`;
    return;
  }
  el.innerHTML = `<ul class="list">${today.items.map(i => `<li>${i.name} ${renderTags(i.tags)}</li>`).join('')}</ul>`;
}

function renderMenuGrid(){
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = menu.map(day => `
    <div class="card">
      <h3>${day.day}</h3>
      ${day.items.length ? `<ul class="list">${day.items.map(i => `<li>${i.name} ${renderTags(i.tags)}</li>`).join('')}</ul>` : '<p class="muted">No regular service.</p>'}
    </div>
  `).join('');
}

function renderOpenDays(){
  const ul = document.getElementById('openDays');
  ul.innerHTML = typicalOpenDays.map(d => `<li><strong>${d}</strong> — rotating menu, limited quantities</li>`).join('');
}

function renderTags(tags){
  if (!tags || !tags.length) return '';
  return `&nbsp;${tags.map(t => `<span class="chip ${t}">${label(t)}</span>`).join(' ')}`;
}
function label(t){
  return t === 'veg' ? 'Vegetarian' : (t === 'spicy' ? 'Spicy' : (t === 'halal' ? 'Halal‑friendly' : t));
}

function setYear(){ document.getElementById('year').textContent = new Date().getFullYear(); }

document.addEventListener('DOMContentLoaded', () => {
  renderTodaySpecial();
  renderMenuGrid();
  renderOpenDays();
  setYear();

  // Replace payment placeholders as needed:
  // document.getElementById('paypalLink').href = 'https://paypal.me/your-handle';
  // document.getElementById('zelleHandle').textContent = 'youremail@domain.com';
  // document.getElementById('venmoHandle').textContent = 'YourVenmo';
});
