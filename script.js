const toggle=document.getElementById('mobileToggle');
const links=document.getElementById('navLinks');
toggle.addEventListener('click',()=>links.classList.toggle('active'));

const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{if(window.scrollY>80)nav.classList.add('scrolled');else nav.classList.remove('scrolled');});

const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const s=window.scrollY;const d=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(s/d*100)+'%';});

gsap.registerPlugin(ScrollTrigger);
gsap.to('.hero-label',{opacity:1,y:0,duration:1,delay:0.3,ease:'power3.out'});
gsap.to('.hero-logo',{opacity:1,scale:1,duration:1.2,delay:0.5,ease:'power3.out'});
gsap.to('.hero-title',{opacity:1,duration:1,delay:0.7,ease:'power3.out'});
gsap.to('.hero-sub',{opacity:1,duration:1,delay:0.9,ease:'power3.out'});
gsap.to('.hero-cta',{opacity:1,duration:1,delay:1.1,ease:'power3.out'});
gsap.to('.scroll-hint',{opacity:1,duration:1,delay:1.5,ease:'power3.out'});

const reveal=(sel,opts={})=>{gsap.utils.toArray(sel).forEach(el=>{gsap.from(el,{scrollTrigger:{trigger:el,start:'top 85%',toggleActions:'play none none none'},opacity:0,y:30,duration:0.8,ease:'power3.out',...opts});});};
reveal('.section-label');
reveal('.section-title',{y:40,delay:0.1});
reveal('.section-desc',{y:20,delay:0.2});
reveal('.about-text p',{y:20,stagger:0.15});
reveal('.about-img-wrap',{x:30,delay:0.3});
reveal('.stat',{y:20,stagger:0.1});
reveal('.location-card',{y:40,stagger:0.2});
reveal('.gallery-item',{scale:0.95,stagger:0.06});
reveal('.pano-wrap',{y:40});
reveal('.hours-card',{y:30,stagger:0.15});

function copyEmail(btn){
  navigator.clipboard.writeText('br.woergl@gmail.com').then(()=>{
    btn.classList.add('copied');
    setTimeout(()=>btn.classList.remove('copied'),1500);
  });
}

function setLang(lang){
  document.querySelectorAll('.lang-toggle button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  document.querySelectorAll('[data-de][data-en]').forEach(el=>{
    const text=el.dataset[lang];
    if(el.children.length===0){el.textContent=text;}
    else if(el.children.length===1&&el.firstElementChild.tagName==='BR'){el.innerHTML=text;}
    else{
      const childText=Array.from(el.childNodes).find(n=>n.nodeType===3);
      if(childText)childText.textContent=text;
    }
  });
  document.documentElement.lang=lang==='de'?'de':'en';
}
