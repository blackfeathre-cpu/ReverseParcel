document.getElementById('year').textContent=new Date().getFullYear();

// Reverse V1.2 brand treatment: official company logo + transparent grey header.
const brandLogo='https://reversedelivery.com/wp-content/uploads/2024/08/reverse-logo-light.png';
document.querySelectorAll('.brand').forEach(brand=>{
  brand.innerHTML=`<img class="official-reverse-logo" src="${brandLogo}" alt="Reverse Delivery">`;
});

const brandOverrides=document.createElement('style');
brandOverrides.textContent=`
  body{font-family:Inter,"Segoe UI",Arial,sans-serif!important}
  .nav{position:absolute!important;top:0!important;left:0!important;right:0!important;height:88px!important;background:rgba(101,115,132,.72)!important;border-bottom:1px solid rgba(255,255,255,.16)!important;box-shadow:none!important;backdrop-filter:blur(12px)!important;-webkit-backdrop-filter:blur(12px)!important}
  .nav .brand{display:flex!important;align-items:center!important;min-width:210px!important}
  .official-reverse-logo{display:block;width:205px;height:auto;max-height:52px;object-fit:contain;object-position:left center}
  .nav nav a,.nav .login{color:#fff!important;font-family:Inter,"Segoe UI",Arial,sans-serif!important;font-weight:700!important}
  .nav nav a:hover,.nav .login:hover{color:#dff2df!important}
  .nav .btn{background:#73bf72!important;border-color:#73bf72!important;color:#fff!important}
  .hero{padding-top:170px!important;background:radial-gradient(circle at 82% 18%,rgba(115,191,114,.18),transparent 26%),linear-gradient(125deg,#142946 0%,#1e3556 58%,#28496f 100%)!important}
  .hero h1,.section h2,.network h2,.about h2,.contact h2,.locations h2,.service-card h3,.tech-copy h3,.location-grid h3{font-family:Inter,"Segoe UI",Arial,sans-serif!important}
  footer .official-reverse-logo{width:180px}
  @media(max-width:1000px){.nav nav.open{top:88px!important;background:rgba(30,53,86,.97)!important}.menu{color:#fff!important}}
  @media(max-width:650px){.nav{height:76px!important}.official-reverse-logo{width:165px}.hero{padding-top:125px!important}}
`;
document.head.appendChild(brandOverrides);

const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('trackingForm').addEventListener('submit',e=>{e.preventDefault();const value=document.getElementById('trackingInput').value.trim(),msg=document.getElementById('trackingMessage');if(!value){msg.textContent='Please enter an AWB / tracking number.';return}msg.textContent='Opening Reverse Delivery tracking…';window.location.href='https://reversedelivery.com/track-delivery/?awb='+encodeURIComponent(value)});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.service-card,.location-grid article,.tech-panel,.country').forEach(el=>observer.observe(el));