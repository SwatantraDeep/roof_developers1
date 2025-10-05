import React, {useState, useEffect} from 'react';
import './app.css';
import config from './config.json';

function Admin({onUpdate}){
  const [cfg, setCfg] = useState(config);
  useEffect(()=>{ const stored = localStorage.getItem('rd_config'); if(stored) setCfg(JSON.parse(stored)); },[]);
  function save(){ localStorage.setItem('rd_config', JSON.stringify(cfg)); onUpdate(cfg); alert('Saved to browser storage (localStorage).'); }
  function addImage(e){ const f = e.target.files[0]; if(!f) return; const reader = new FileReader(); reader.onload = ()=>{ const gallery = JSON.parse(localStorage.getItem('rd_gallery')||'[]'); gallery.unshift(reader.result); localStorage.setItem('rd_gallery', JSON.stringify(gallery)); alert('Image added to gallery (stored in browser).'); onUpdate(cfg); }; reader.readAsDataURL(f); }
  return (<div className='admin'><h3>Admin (browser-only)</h3><label>Company name<input value={cfg.companyName} onChange={e=>setCfg({...cfg,companyName:e.target.value})}/></label><label>Tagline<input value={cfg.tagline} onChange={e=>setCfg({...cfg,tagline:e.target.value})}/></label><label>Phone<input value={cfg.phone} onChange={e=>setCfg({...cfg,phone:e.target.value})}/></label><label>Email<input value={cfg.email} onChange={e=>setCfg({...cfg,email:e.target.value})}/></label><div><input type='file' onChange={addImage}/><button onClick={save}>Save</button></div></div>);
}

export default function App(){
  const [cfg, setCfg] = useState(config);
  const [gallery, setGallery] = useState([]);
  useEffect(()=>{ const stored = localStorage.getItem('rd_config'); if(stored) setCfg(JSON.parse(stored)); const g = JSON.parse(localStorage.getItem('rd_gallery')||'[]'); setGallery(g); },[]);
  function refresh(){ const g = JSON.parse(localStorage.getItem('rd_gallery')||'[]'); setGallery(g); const s = localStorage.getItem('rd_config'); if(s) setCfg(JSON.parse(s)); }
  return (<div className='wrap'>
    <header className='header'><div className='brand'><div className='logo'>RD</div><div><h1>{cfg.companyName}</h1><p>{cfg.tagline}</p></div></div><nav><a href='#services'>Services</a><a href='#gallery'>Gallery</a><a href='#contact'>Contact</a><button onClick={refresh}>Refresh</button></nav></header>
    <section className='hero'><img src='/hero.png' alt='hero'/><div className='hero-box'><h2>End-to-end construction & design solutions</h2><p>Structural, architectural, interior, exterior, vastu & material consultancy.</p></div></section>
    <main className='container'>
      <section id='services'><h3>Our Services</h3><div className='cards'>{['Structural Design','Architectural Design','Interior Design','Exterior Design','Vastu Consultancy','Material Consultancy'].map(s=>(<div className='card' key={s}><h4>{s}</h4><p>Brief description about {s}.</p></div>))}</div></section>
      <section id='gallery'><h3>Gallery</h3><div className='gallery'>{gallery.length?gallery.map((g,i)=>(<img key={i} src={g} alt={'img'+i}/>)):([1,2,3,4,5,6].map(n=>(<img key={n} src={'/gallery/g'+n+'.png'} alt={'p'+n}/>)))}</div></section>
      <section id='contact'><h3>Contact</h3><p><strong>Phone:</strong> {cfg.phone} <br/><strong>Email:</strong> {cfg.email}</p></section>
      <section id='admin'><Admin onUpdate={setCfg}/></section>
    </main>
    <footer className='footer'>© {new Date().getFullYear()} Roof Developers</footer>
  </div>);
}