import React, {useState, useEffect} from 'react';
import './app.css';
import config from './config.json';
import BannerCarousel from './BannerCarousel';

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
  const [modal, setModal] = useState({open: false, service: ''});
  const [galleryModal, setGalleryModal] = useState({open: false, img: ''});
  const [allProjectsModal, setAllProjectsModal] = useState(false);
  useEffect(()=>{ const stored = localStorage.getItem('rd_config'); if(stored) setCfg(JSON.parse(stored)); const g = JSON.parse(localStorage.getItem('rd_gallery')||'[]'); setGallery(g); },[]);
  function openModal(service) {
    setModal({open: true, service});
  }
  function closeModal() {
    setModal({open: false, service: ''});
  }
  function openGalleryModal(img) {
    setGalleryModal({open: true, img});
  }
  function closeGalleryModal() {
    setGalleryModal({open: false, img: ''});
  }
  function openAllProjectsModal() {
    setAllProjectsModal(true);
  }
  function closeAllProjectsModal() {
    setAllProjectsModal(false);
  }
  const serviceDetails = {
    'Structural Design': 'Safe, efficient structural engineering and load analysis. We ensure your building stands strong and meets all safety standards.',
    'Architectural Design': 'Concepts, drawings, and permit-ready plans. We create beautiful, functional spaces tailored to your needs.',
    'Interior Design': 'Space planning, finishes, furniture layouts. Transform interiors for comfort, style, and utility.',
    'Exterior Design': 'Façade design, landscape coordination. Enhance curb appeal and outdoor living.',
    'Vastu Consultancy': 'Harmonize design with vastu principles for wellbeing. Traditional wisdom for modern spaces.',
    'Material Consultancy': 'Sourcing, costing and material performance guidance. Choose the right materials for durability and aesthetics.'
  };
  return (<div className='wrap'>
    <header className='header'>
      <div className='container'>
        <div className='brand'>
          {/* Show logo image if available, else fallback to text */}
          <img src='/logo.jpg' alt='Logo' className='logo-img' onError={e => {e.target.style.display='none'; e.target.nextSibling.style.display='flex';}} />
          <div className='logo' style={{display:'none'}}>RD</div>
          <div className='titles'>
            <h1>{cfg.companyName}</h1>
            <p>{cfg.tagline}</p>
          </div>
        </div>
        <nav>
          <a href='#services'>Services</a>
          <a href='#projects'>Our Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div>
    </header>
    <section className='hero'>
      {/* Animated image slider with overlayed hero content and button */}
      <BannerCarousel />
    </section>
    <main className='container'>
      <section id='services'>
        <h3>Our Services</h3>
        <div className='cards'>
          {['Structural Design','Architectural Design','Interior Design','Exterior Design','Vastu Consultancy','Material Consultancy'].map(s=>(
            <div className='card' key={s} onClick={()=>openModal(s)} style={{cursor:'pointer'}}>
              <h4>{s}</h4>
              <p>Brief description about {s}.</p>
            </div>
          ))}
        </div>
        {modal.open && (
          <div className='modal-overlay' onClick={closeModal}>
            <div className='modal' onClick={e=>e.stopPropagation()}>
              <h2>{modal.service}</h2>
              <p>{serviceDetails[modal.service]}</p>
              <button className='close-btn' onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </section>
      <section id='projects'>
        <h3>Our Projects</h3>
        <div className='gallery'>
          {(gallery.length ? gallery.slice(0,8) : [1,2,3,4,5,6,7,8].map(n=>'/gallery/g'+n+'.png')).map((g,i)=>(
            <img key={i} src={gallery.length ? g : g} alt={'img'+i} onClick={()=>openGalleryModal(g)} />
          ))}
        </div>
        {gallery.length > 8 && (
          <div style={{textAlign:'center',marginTop:'18px'}}>
            <button className='btn' onClick={openAllProjectsModal}>View All Projects</button>
          </div>
        )}
        {galleryModal.open && (
          <div className='gallery-modal-overlay' onClick={closeGalleryModal}>
            <div className='gallery-modal' onClick={e=>e.stopPropagation()}>
              <img src={galleryModal.img} alt='Preview'/>
              <button className='close-btn' onClick={closeGalleryModal}>Close</button>
            </div>
          </div>
        )}
        {allProjectsModal && (
          <div className='gallery-modal-overlay' onClick={closeAllProjectsModal}>
            <div className='gallery-modal' style={{maxWidth:'1000px',maxHeight:'90vh',overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
              <h2 style={{marginBottom:'18px'}}>All Projects</h2>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'18px'}}>
                {gallery.map((g,i)=>(
                  <img key={i} src={g} alt={'img'+i} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'12px',cursor:'pointer'}} onClick={()=>openGalleryModal(g)} />
                ))}
              </div>
              <button className='close-btn' style={{marginTop:'24px'}} onClick={closeAllProjectsModal}>Close</button>
            </div>
          </div>
        )}
      </section>
      <section id='contact'><h3>Contact</h3><p><strong>Phone:</strong> {cfg.phone} <br/><strong>Email:</strong> {cfg.email}</p></section>
      <section id='admin'><Admin onUpdate={setCfg}/></section>
    </main>
    <footer className='footer'>© {new Date().getFullYear()} Roof Developers</footer>
  </div>);
}