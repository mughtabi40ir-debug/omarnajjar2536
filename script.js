const foods=[
{id:1,ar:'بطاطا اللحم المميزة',en:'Loaded Beef Potato',cat:'Popular',image:'assets/baked-meat.jpg',descAr:'بطاطا مخبوزة، جبن كريمي، لحم متبل، ذرة وفلفل.',descEn:'Baked potato, creamy cheese, seasoned beef, corn and fresh peppers.',price:7.5,rating:4.9,badgeAr:'الأكثر طلباً',badgeEn:'Best Seller'},
{id:2,ar:'بيتزا الخضار',en:'Veggie Melt Pizza',cat:'Pizza',image:'assets/pizza-veg.jpg',descAr:'جبن ذهبي، فطر، زيتون، فلفل وأعشاب.',descEn:'Golden cheese, mushrooms, olives, peppers and herbs.',price:9,rating:4.8,badgeAr:'طازج',badgeEn:'Fresh'},
{id:3,ar:'بيتزا ثلاثية اللحوم',en:'Triple Meat Pizza',cat:'Pizza',image:'assets/pizza-meat.jpg',descAr:'بيبروني، نقانق وسلامي مدخن مع جبن غني.',descEn:'Pepperoni, sausage and smoked salami with rich melted cheese.',price:11.5,rating:4.9,badgeAr:'مميز',badgeEn:'Special'},
{id:4,ar:'بطاطا الذرة الكريمية',en:'Creamy Corn Potato',cat:'Meals',image:'assets/baked-corn.jpg',descAr:'ذرة حلوة مع صوص كريمي بالأعشاب.',descEn:'Sweet corn with a creamy herb sauce.',price:6.5,rating:4.7,badgeAr:'جديد',badgeEn:'New'}];
const cats=[
 {key:'Popular',ar:'الأكثر طلباً',en:'Popular'},
 {key:'Pizza',ar:'بيتزا',en:'Pizza'},
 {key:'Meals',ar:'وجبات',en:'Meals'},
 {key:'Chicken',ar:'دجاج',en:'Chicken'},
 {key:'Sandwiches',ar:'ساندويشات',en:'Sandwiches'},
 {key:'Drinks',ar:'مشروبات',en:'Drinks'},
 {key:'Desserts',ar:'حلويات',en:'Desserts'}
];
const i18n={
 ar:{chooseLanguage:'اختر اللغة',heroEyebrow:'طازج • ساخن • محضّر بحب',heroTitle1:'جرّب طعماً',heroTitle2:'مميزاً',heroDesc:'بطاطا مخبوزة وبيتزا محمّلة بنكهات غنية، مقدمة بأسلوب مختلف.',exploreMenu:'استكشف المنيو',bestSeller:'الأكثر طلباً',popularToday:'الأكثر طلباً اليوم',customerChoices:'اختيارات الزبائن',viewAll:'الكل',chefPick:'اختيار الشيف',loadedBeef:'بطاطا اللحم المميزة',chefDesc:'جبن كريمي، لحم متبل، ذرة وفلفل طازج.',viewDish:'عرض الطبق',fromOven:'من الفرن مباشرة',bestSellersTitle:'الأكثر مبيعاً',specialOffer:'عرض خاص • SPECIAL OFFER',discount:'خصم',secondItem:'على المنتج الثاني',useCode:'استخدم الكود',orderNow:'اطلب الآن',restaurantInfo:'معلومات المطعم',goodMood:'طعم رائع. مزاج أروع.',restaurantLocation:'موقع المطعم',home:'الرئيسية',menu:'المنيو',favorites:'المفضلة',cart:'السلة',contact:'تواصل',yourCart:'سلة الطلب',total:'المجموع',sendOrder:'إرسال الطلب للكاشير',orderSent:'تم إرسال الطلب إلى الكاشير',orderSentDesc:'سيتم تجهيز طلبك الآن.',orderNumber:'رقم الطلب',invoiceTotal:'مجموع الفاتورة',done:'تم',addToCart:'أضف إلى السلة',emptyCart:'السلة فارغة حالياً',added:'تمت الإضافة للسلة',items:'عناصر',dishes:'أطباق',infoLead:'أكلات طازجة ومخبوزات ساخنة يومياً مع خدمة سريعة وتجربة مريحة داخل المطعم.',dineIn:'داخل المطعم',takeaway:'سفري',delivery:'توصيل',openingHours:'أوقات الدوام',phoneLabel:'رقم الهاتف',locationValue:'أربيل، العراق',callNow:'اتصل الآن',findUs:'اعثر علينا',followUs:'تابعنا',quickMenu:'القائمة السريعة',drawerTitle:'كل ما تحتاجه في مكان واحد',drawerDesc:'تنقل بسرعة بين الأقسام، اطلب بسهولة، وبدّل اللغة في أي وقت.',todayHours:'دوام اليوم',hotline:'الخط الساخن'},
 en:{chooseLanguage:'Choose your language',heroEyebrow:'FRESH • HOT • LOADED',heroTitle1:'Taste Something',heroTitle2:'Special',heroDesc:'Loaded baked potatoes and pizzas with rich flavors, served with a unique twist.',exploreMenu:'Explore Menu',bestSeller:'Best Seller',popularToday:'Popular Today',customerChoices:'Customer Favorites',viewAll:'View All',chefPick:"Chef's Pick",loadedBeef:'Loaded Beef Potato',chefDesc:'Creamy cheese, seasoned beef, corn and fresh peppers.',viewDish:'View Dish',fromOven:'Straight From The Oven',bestSellersTitle:'Best Sellers',specialOffer:'SPECIAL OFFER',discount:'OFF',secondItem:'on your second item',useCode:'Use code',orderNow:'Order Now',restaurantInfo:'Restaurant Information',goodMood:'Good Food. Good Mood.',restaurantLocation:'Restaurant Location',home:'Home',menu:'Menu',favorites:'Favorites',cart:'Cart',contact:'Contact',yourCart:'Your Cart',total:'Total',sendOrder:'Send Order to Cashier',orderSent:'Order Sent to Cashier',orderSentDesc:'Your order is now being prepared.',orderNumber:'Order Number',invoiceTotal:'Invoice Total',done:'Done',addToCart:'Add to Cart',emptyCart:'Your cart is empty',added:'Added to cart',items:'items',dishes:'dishes',infoLead:'Fresh dishes and hot bakes served daily with fast service and a comfortable in-store experience.',dineIn:'Dine In',takeaway:'Takeaway',delivery:'Delivery',openingHours:'Opening Hours',phoneLabel:'Phone Number',locationValue:'Erbil, Iraq',callNow:'Call Now',findUs:'Find Us',followUs:'Follow Us',quickMenu:'QUICK MENU',drawerTitle:'Everything you need in one place',drawerDesc:'Jump between sections, order easily, and switch language anytime.',todayHours:'Today Hours',hotline:'Hotline'}
};
Object.assign(i18n.ar,{welcomeTo:'WELCOME TO',welcomeLine:'Fresh food. Bold flavor. Made for you.',heroSub:'Taste Something Special',exploreSub:'EXPLORE MENU',bestSellerSub:'BEST SELLER',popularSub:'POPULAR TODAY',chefSub:"CHEF'S PICK",bestSellersSub:'BEST SELLERS',goodMoodSub:'GOOD FOOD. GOOD MOOD.'});
Object.assign(i18n.en,{welcomeTo:'WELCOME TO',welcomeLine:'Fresh food. Bold flavor. Made for you.',heroSub:'Taste Something Special',exploreSub:'EXPLORE MENU',bestSellerSub:'BEST SELLER',popularSub:'POPULAR TODAY',chefSub:"CHEF'S PICK",bestSellersSub:'BEST SELLERS',goodMoodSub:'GOOD FOOD. GOOD MOOD.'});
for(const language of ['ar','en'])Object.assign(i18n[language],{brandName:'MR. KOMPRENO',offerCode:'KOM20',hoursValue:'12:00 PM — 12:00 AM',phoneValue:'+964 750 000 0000'});
let contentOverrides=window.KOMPRENO_CONTENT||{};
try{const stored=JSON.parse(localStorage.getItem('komprenoContent')||'{}');if(stored && stored.schemaVersion===3)contentOverrides=stored}catch(e){}
for(const language of ['ar','en']) Object.assign(i18n[language],contentOverrides[language]||{});
if(contentOverrides.schemaVersion===3 && Array.isArray(contentOverrides.products))foods.splice(0,foods.length,...contentOverrides.products);
else for(const edited of contentOverrides.products||[]){const original=foods.find(item=>item.id===edited.id);if(original)Object.assign(original,edited)}
if(contentOverrides.schemaVersion===3 && Array.isArray(contentOverrides.categories))cats.splice(0,cats.length,...contentOverrides.categories);
else for(const edited of contentOverrides.categories||[]){const original=cats.find(item=>item.key===edited.key);if(original)Object.assign(original,edited)}
let lang=localStorage.getItem('komprenoLang')||'ar',active='Popular',cart=[],favorites=new Set(JSON.parse(localStorage.getItem('komprenoFavorites')||'[]'));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],money=n=>`$${n.toFixed(2)}`;
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const imageSrc=value=>esc(/^(https?:\/\/|data:image\/(png|jpeg|webp|gif);base64,|(?:\.?\.?\/)?[a-z0-9_-])/i.test(String(value||''))&&!/^javascript:/i.test(String(value))?value:'');
const txt=f=>esc(lang==='ar'?f.ar:f.en),desc=f=>esc(lang==='ar'?f.descAr:f.descEn),badge=f=>esc(lang==='ar'?f.badgeAr:f.badgeEn);
function applyLanguage(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';$$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(i18n[lang][key]!=null)el.textContent=i18n[lang][key]});$$('[data-set-lang]').forEach(b=>b.classList.toggle('active',b.dataset.setLang===lang));renderCats();renderFoods();updateCart();syncFeatured()}
function renderCats(){const strip=$('#categoryStrip');strip.innerHTML=cats.map(c=>`<button class="cat-btn ${c.key===active?'active':''}" data-cat="${c.key}">${esc(lang==='ar'?c.ar:c.en)}<small>${esc(c.en)}</small></button>`).join('');requestAnimationFrame(()=>strip.querySelector('.cat-btn.active')?.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'}))}
function card(f){return `<article class="food-card" data-product="${f.id}"><div class="food-image-wrap"><img src="${imageSrc(f.image)}" alt="${txt(f)}"></div><div class="food-body"><div class="card-top"><span class="food-tag">${badge(f)}</span><button class="favorite-btn ${favorites.has(f.id)?'is-favorite':''}" data-favorite="${f.id}" aria-label="${lang==='ar'?'المفضلة':'Favorite'}" aria-pressed="${favorites.has(f.id)}"><svg class="icon" aria-hidden="true"><use href="#ic-heart"/></svg></button></div><h3>${txt(f)}<small>${esc(lang==='ar'?f.en:f.ar)}</small></h3><p>${desc(f)}</p><div class="food-actions"><span class="price">${money(f.price)}</span><button class="round-add" data-add="${f.id}" aria-label="${i18n[lang].addToCart}">+</button></div></div></article>`}
function renderFoods(){let list=active==='Popular'?foods:active==='Favorites'?foods.filter(x=>favorites.has(x.id)):foods.filter(x=>x.cat===active);$('#foodGrid').innerHTML=list.length?list.map(card).join(''):`<p class="empty-category">${active==='Favorites'?(lang==='ar'?'لم تضف أطباقاً إلى المفضلة بعد':'No favorites yet'):(lang==='ar'?'لا توجد أطباق في هذا القسم حالياً':'No dishes in this category yet')}</p>`;$('#resultCount').textContent=`${list.length} ${i18n[lang].dishes}`;$('#popularRow').innerHTML=foods.map(f=>`<article class="swipe-card" data-product="${f.id}"><img src="${imageSrc(f.image)}" alt="${txt(f)}"><div class="swipe-card-body"><h3>${txt(f)}<small>${esc(lang==='ar'?f.en:f.ar)}</small></h3><p>${desc(f)}</p><div class="price-row"><b class="price">${money(f.price)}</b><button class="round-add" data-add="${f.id}" aria-label="${i18n[lang].addToCart}">+</button></div></div></article>`).join('')}
function updateCart(){const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.qty*x.price,0);$('#cartBadge').textContent=count;$('#cartSummary').textContent=`${count} ${i18n[lang].items} • ${money(total)}`;$('#cartTotal').textContent=money(total);$('#floatingCart').classList.toggle('visible',count>0);$('#cartItems').innerHTML=count?cart.map(x=>`<div class="cart-item"><img src="${imageSrc(x.image)}"><div><h3>${txt(x)}<br><small>${esc(lang==='ar'?x.en:x.ar)}</small></h3><div class="qty"><button data-dec="${x.id}">−</button><span>${x.qty}</span><button data-inc="${x.id}">+</button></div></div><b>${money(x.qty*x.price)}</b></div>`).join(''):`<p>${i18n[lang].emptyCart}</p>`}
function add(id){const f=foods.find(x=>x.id===id),h=cart.find(x=>x.id===id);if(!f)return;h?h.qty++:cart.push({...f,qty:1});updateCart();toast(i18n[lang].added)}
function openSheet(id){$('#sheetBackdrop').classList.add('open');$(id).classList.add('open')}
function closeSheets(){$$('.bottom-sheet').forEach(x=>x.classList.remove('open'));$('#sheetBackdrop').classList.remove('open')}
function openDrawer(){$('#sideDrawer')?.classList.add('open');$('#menuBackdrop')?.classList.add('open');$('#menuToggle')?.classList.add('active');$('#sideDrawer')?.setAttribute('aria-hidden','false')}
function closeDrawer(){$('#sideDrawer')?.classList.remove('open');$('#menuBackdrop')?.classList.remove('open');$('#menuToggle')?.classList.remove('active');$('#sideDrawer')?.setAttribute('aria-hidden','true')}
function detail(id){const f=foods.find(x=>x.id===id);if(!f)return;$('#detailContent').innerHTML=`<div class="detail-image"><img src="${imageSrc(f.image)}"></div><div class="detail-head"><h2>${txt(f)}<small>${esc(lang==='ar'?f.en:f.ar)}</small></h2><p>${desc(f)}</p><h3>${money(f.price)}</h3><button class="detail-add" data-add="${f.id}">${i18n[lang].addToCart}</button></div>`;openSheet('#detailSheet')}
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>$('#toast').classList.remove('show'),1200)}
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});$$('.reveal').forEach(x=>io.observe(x))}
function selectLanguage(next){lang=next;localStorage.setItem('komprenoLang',lang);applyLanguage()}
function finishIntro(){const intro=$('#intro');if(!intro)return;intro.classList.add('hide');setTimeout(()=>intro?.remove(),560)}
function checkout(){if(!cart.length){toast(i18n[lang].emptyCart);return}const total=cart.reduce((s,x)=>s+x.qty*x.price,0);const no='#'+Math.floor(1000+Math.random()*9000);$('#successTotal').textContent=money(total);$('#orderNumber').textContent=no;closeSheets();$('#orderSuccess').classList.add('open');$('#orderSuccess').setAttribute('aria-hidden','false');cart=[];updateCart()}
document.addEventListener('click',e=>{const lng=e.target.closest('[data-set-lang]');if(lng){selectLanguage(lng.dataset.setLang);return}if(e.target.closest('#menuToggle')){($('#sideDrawer')?.classList.contains('open')?closeDrawer:openDrawer)();return}if(e.target.closest('#drawerClose')||e.target.id==='menuBackdrop'){closeDrawer();return}const s=e.target.closest('[data-scroll]');if(s){$(s.dataset.scroll)?.scrollIntoView({behavior:'smooth'});closeDrawer()}const fav=e.target.closest('[data-favorite]');if(fav){const id=+fav.dataset.favorite;favorites.has(id)?favorites.delete(id):favorites.add(id);localStorage.setItem('komprenoFavorites',JSON.stringify([...favorites]));renderFoods();return}if(e.target.closest('#favoritesNav')){active='Favorites';renderCats();renderFoods();$('#allFoods').scrollIntoView({behavior:'smooth'});return}const c=e.target.closest('[data-cat]');if(c){active=c.dataset.cat;renderCats();renderFoods()}const a=e.target.closest('[data-add]');if(a){e.stopPropagation();add(+a.dataset.add);if(e.target.closest('#detailSheet'))closeSheets()}const p=e.target.closest('[data-product]');if(p&&(!e.target.closest('button')||e.target.closest('button[data-product]')))detail(+p.dataset.product);if(e.target.closest('#floatingCart')||e.target.closest('#cartNav')||e.target.closest('#drawerCartBtn')){openSheet('#cartSheet');closeDrawer();}if(e.target.closest('[data-close]')||e.target.id==='sheetBackdrop')closeSheets();const inc=e.target.closest('[data-inc]');if(inc){cart.find(x=>x.id===+inc.dataset.inc).qty++;updateCart()}const dec=e.target.closest('[data-dec]');if(dec){const x=cart.find(x=>x.id===+dec.dataset.dec);x.qty--;if(x.qty<1)cart=cart.filter(y=>y.id!==x.id);updateCart()}if(e.target.closest('#checkoutBtn'))checkout();if(e.target.closest('#successDone')){$('#orderSuccess').classList.remove('open');$('#orderSuccess').setAttribute('aria-hidden','true')}});
applyLanguage();setupCategoryDrag();reveal();setTimeout(finishIntro,1850);

function syncFeatured(){const f=foods[0];const hero=document.querySelector('.hero-visual');const chef=document.querySelector('.chef-card');hero.hidden=!f;chef.hidden=!f;if(!f)return;document.querySelector('.hero-food').src=f.image;document.querySelector('.chef-bg').src=f.image;chef.dataset.product=f.id;chef.querySelector('button').dataset.product=f.id;chef.querySelector('h2').textContent=lang==='ar'?f.ar:f.en;chef.querySelector('p').textContent=lang==='ar'?f.descAr:f.descEn;}


function setupCategoryDrag(){
  const strip=$('#categoryStrip');
  if(!strip||strip.dataset.dragReady==='1')return;
  strip.dataset.dragReady='1';
  let down=false,startX=0,startScroll=0,moved=false;
  strip.addEventListener('pointerdown',e=>{
    if(e.pointerType==='touch')return;
    down=true;moved=false;startX=e.clientX;startScroll=strip.scrollLeft;
    strip.classList.add('dragging');
    strip.setPointerCapture?.(e.pointerId);
  });
  strip.addEventListener('pointermove',e=>{
    if(!down||e.pointerType==='touch')return;
    const dx=e.clientX-startX;
    if(Math.abs(dx)>4)moved=true;
    strip.scrollLeft=startScroll-dx;
    if(moved)e.preventDefault();
  });
  const end=e=>{
    if(!down)return;
    down=false;strip.classList.remove('dragging');
    try{strip.releasePointerCapture?.(e.pointerId)}catch(_){}
  };
  strip.addEventListener('pointerup',end);
  strip.addEventListener('pointercancel',end);
  strip.addEventListener('pointerleave',e=>{if(down)end(e)});
  strip.addEventListener('click',e=>{
    if(moved){e.preventDefault();e.stopPropagation();moved=false;}
  },true);
  strip.addEventListener('wheel',e=>{
    if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){
      strip.scrollLeft+=e.deltaY;
      e.preventDefault();
    }
  },{passive:false});
}
