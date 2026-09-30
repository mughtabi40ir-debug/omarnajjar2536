/* Open the text editor by adding ?edit=1 to this page's address. */
(()=>{
  const entry=document.getElementById('editEntry');
  if(new URLSearchParams(location.search).get('edit')!=='1')return;
  entry.hidden=false;
  const backdrop=document.getElementById('editorBackdrop');
  const fields=document.getElementById('editorFields');
  let tab='ar';
  let draft;
  const labels={brandName:'اسم المطعم',welcomeTo:'مقدمة الترحيب',welcomeLine:'عبارة الترحيب',heroEyebrow:'عبارة فوق العنوان',heroTitle1:'السطر الأول الرئيسي',heroTitle2:'السطر الثاني الرئيسي',heroSub:'سطر العنوان الإنجليزي',heroDesc:'وصف الواجهة',exploreMenu:'زر استكشف المنيو',exploreSub:'نص الزر الصغير',bestSeller:'شارة الأكثر طلباً',bestSellerSub:'سطر الشارة الصغير',popularToday:'عنوان الأكثر طلباً',customerChoices:'اختيارات الزبائن',popularSub:'عنوان القسم الصغير',viewAll:'زر عرض الكل',chefPick:'شارة اختيار الشيف',chefSub:'شرح شارة الشيف',loadedBeef:'عنوان طبق الشيف',chefDesc:'وصف طبق الشيف',viewDish:'زر عرض الطبق',fromOven:'عبارة من الفرن',bestSellersTitle:'عنوان الأكثر مبيعاً',bestSellersSub:'سطر الأكثر مبيعاً',specialOffer:'شارة العرض الخاص',discount:'الخصم',secondItem:'تفاصيل الخصم',useCode:'قبل الكود',offerCode:'كود الخصم',orderNow:'زر اطلب الآن',restaurantInfo:'عنوان معلومات المطعم',goodMood:'شعار المطعم',goodMoodSub:'الشعار الصغير',infoLead:'وصف المطعم',openingHours:'عنوان الدوام',hoursValue:'ساعات الدوام',phoneLabel:'عنوان الهاتف',phoneValue:'رقم الهاتف',locationValue:'المدينة / العنوان',home:'الرئيسية',menu:'المنيو',favorites:'المفضلة',cart:'السلة',contact:'اتصال'};
  const editable=(label,value,group,key,id,type)=>{
    const wrap=document.createElement('div');wrap.className='editor-field';
    const title=document.createElement('label');title.textContent=label;
    const control=document.createElement(type==='number'?'input':String(value??'').length>60?'textarea':'input');
    if(type==='number'){control.type='number';control.min='0';control.step='0.01'}
    control.value=String(value??'');control.dataset.group=group;control.dataset.key=key;if(id!=null)control.dataset.id=id;
    title.append(control);wrap.append(title);return wrap;
  };
  const button=(text,action,cls='')=>{const b=document.createElement('button');b.type='button';b.textContent=text;b.className='editor-tool '+cls;b.addEventListener('click',action);return b};
  function imageValue(value){const text=value.trim();if(text.startsWith('<')){const doc=new DOMParser().parseFromString(text,'text/html');return doc.querySelector('img')?.getAttribute('src')||''}return text}
  function render(){fields.replaceChildren();
    document.querySelectorAll('[data-editor-tab]').forEach(b=>b.classList.toggle('active',b.dataset.editorTab===tab));
    if(tab==='ar'||tab==='en'){
      for(const [key,value] of Object.entries(draft[tab]))fields.append(editable(labels[key]||key,value,tab,key));
      const heading=document.createElement('h3');heading.textContent='أسماء الأقسام';fields.append(heading);
      for(const category of draft.categories)fields.append(editable(category.key,category[tab],'categories',tab,category.key));
    }else{
      fields.append(button('+ إضافة طبق جديد',()=>{capture();const id=Math.max(0,...draft.products.map(p=>p.id))+1;draft.products.push({id,ar:'طبق جديد',en:'New dish',descAr:'',descEn:'',badgeAr:'جديد',badgeEn:'New',price:0,cat:draft.categories.find(c=>c.key!=='Popular')?.key||'Popular',image:'',rating:4.9});render();fields.lastElementChild?.scrollIntoView({block:'nearest'})}));
      for(const product of draft.products){
        const box=document.createElement('div');box.className='editor-product';
        const heading=document.createElement('h3');heading.textContent=`#${product.id} — ${product.ar}`;box.append(heading);
        const preview=document.createElement('img');preview.className='editor-image-preview';preview.alt='معاينة صورة الطبق';preview.src=product.image||'';preview.hidden=!product.image;box.append(preview);
        const imageField=editable('رابط الصورة / مسارها / كود <img> أو Base64',product.image,'products','image',product.id);
        const imageInput=imageField.querySelector('input,textarea');imageInput.dir='ltr';imageInput.addEventListener('change',()=>{const src=imageValue(imageInput.value);preview.src=src;preview.hidden=!src});box.append(imageField);
        const upload=document.createElement('input');upload.type='file';upload.accept='image/png,image/jpeg,image/webp,image/gif';upload.className='editor-upload';
        const uploadLabel=document.createElement('label');uploadLabel.className='editor-upload-label';uploadLabel.textContent='أو ارفع صورة من جهازك';uploadLabel.append(upload);box.append(uploadLabel);
        upload.addEventListener('change',async()=>{const file=upload.files[0];if(!file)return;if(file.size>15*1024*1024){alert('اختر صورة أصغر من 15 ميغابايت');return}const url=URL.createObjectURL(file);const img=new Image();img.onload=()=>{const scale=Math.min(1,1200/Math.max(img.width,img.height));const canvas=document.createElement('canvas');canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);const data=canvas.toDataURL('image/webp',.86);imageInput.value=data;product.image=data;preview.src=data;preview.hidden=false;URL.revokeObjectURL(url)};img.onerror=()=>{URL.revokeObjectURL(url);alert('تعذر قراءة الصورة. جرّب PNG أو JPG.')};img.src=url});
        for(const [key,label] of [['ar','اسم الطبق بالعربية'],['en','اسم الطبق بالإنجليزية'],['descAr','الوصف بالعربية'],['descEn','الوصف بالإنجليزية'],['badgeAr','الشارة بالعربية'],['badgeEn','الشارة بالإنجليزية']])box.append(editable(label,product[key],'products',key,product.id));
        box.append(editable('السعر بالدولار',product.price,'products','price',product.id,'number'));
        const catLabel=document.createElement('label');catLabel.className='editor-field';catLabel.textContent='القسم';const select=document.createElement('select');select.dataset.group='products';select.dataset.key='cat';select.dataset.id=product.id;for(const cat of draft.categories){const option=document.createElement('option');option.value=cat.key;option.textContent=cat.ar+' / '+cat.en;select.append(option)}select.value=product.cat;catLabel.append(select);box.append(catLabel);
        box.append(button('حذف هذا الطبق',()=>{if(!confirm('حذف هذا الطبق من القائمة؟'))return;capture();draft.products=draft.products.filter(p=>p.id!==product.id);render()},'danger'));
        fields.append(box);
      }
      const categoryBox=document.createElement('div');categoryBox.className='editor-product';const h=document.createElement('h3');h.textContent='إدارة الأقسام';categoryBox.append(h);
      for(const category of draft.categories){categoryBox.append(editable('اسم القسم بالعربية',category.ar,'categories','ar',category.key),editable('اسم القسم بالإنجليزية',category.en,'categories','en',category.key))}
      categoryBox.append(button('+ إضافة قسم جديد',()=>{capture();draft.categories.push({key:'Category_'+Date.now(),ar:'قسم جديد',en:'New category'});render()}));fields.append(categoryBox);
    }
  }
  function capture(){fields.querySelectorAll('[data-group]').forEach(control=>{
    const {group,key,id}=control.dataset;
    if(group==='ar'||group==='en')draft[group][key]=control.value;
    else if(group==='products'){const p=draft.products.find(item=>String(item.id)===id);p[key]=key==='price'?Number(control.value):key==='image'?imageValue(control.value):control.value}
    else if(group==='categories')draft.categories.find(item=>item.key===id)[key]=control.value;
  })}
  function save(){capture();
    if(draft.products.some(p=>!p.ar.trim()||!p.en.trim()||!Number.isFinite(p.price)||p.price<0)){alert('أدخل اسم كل طبق بالعربية والإنجليزية وسعراً صحيحاً يساوي صفرًا أو أكثر.');return false}
    draft.schemaVersion=3;
    for(const language of ['ar','en'])Object.assign(i18n[language],draft[language]);
    foods.splice(0,foods.length,...draft.products.map(p=>({...p})));cats.splice(0,cats.length,...draft.categories.map(c=>({...c})));
    cart=cart.filter(item=>foods.some(p=>p.id===item.id)).map(item=>({...foods.find(p=>p.id===item.id),qty:item.qty}));
    try{localStorage.setItem('komprenoContent',JSON.stringify(draft))}catch(e){alert('حجم الصور تجاوز مساحة المتصفح. التغييرات ظاهرة الآن؛ اضغط تنزيل content.js للاحتفاظ بها.')}
    closeSheets();applyLanguage();render();toast('تم تطبيق التعديلات');return true;
  }
  function open(){draft={schemaVersion:3,ar:{...i18n.ar},en:{...i18n.en},products:foods.map(p=>({...p})),categories:cats.map(c=>({...c}))};tab='products';render();backdrop.classList.add('open');backdrop.setAttribute('aria-hidden','false')}
  function close(){backdrop.classList.remove('open');backdrop.setAttribute('aria-hidden','true')}
  entry.addEventListener('click',open);document.getElementById('editorClose').addEventListener('click',close);
  backdrop.addEventListener('click',event=>{if(event.target===backdrop)close()});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&backdrop.classList.contains('open'))close()});
  document.querySelectorAll('[data-editor-tab]').forEach(b=>b.addEventListener('click',()=>{capture();tab=b.dataset.editorTab;render()}));
  document.getElementById('editorSave').addEventListener('click',save);
  document.getElementById('editorExport').addEventListener('click',()=>{if(!save())return;const output='/* MR. KOMPRENO menu content */\nwindow.KOMPRENO_CONTENT = '+JSON.stringify(draft,null,2)+';\n';const url=URL.createObjectURL(new Blob([output],{type:'text/javascript;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='content.js';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)});
  if(new URLSearchParams(location.search).get('openEditor')==='1'){finishIntro();open()}
})();
