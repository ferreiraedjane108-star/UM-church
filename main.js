document.addEventListener('DOMContentLoaded', () => {

  
  if(document.getElementById('map')){
    var map = L.map('map').setView([-33.9249, 18.4241], 15);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles © Esri | UM Church',
      maxZoom: 19
    }).addTo(map);

    L.marker([-33.9249, 18.4241]).addTo(map)
      .bindPopup('<b>UM Church</b><br>123 Faith Road, Cape Town')
      .openPopup();

  
    setTimeout(() => map.invalidateSize(), 800);
  }

  
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      let valid=true;
      document.querySelectorAll('.error').forEach(el=>el.textContent='');
      const name = document.getElementById('cName').value.trim();
      const email = document.getElementById('cEmail').value.trim();
      const type = document.getElementById('cType').value;
      const msg = document.getElementById('cMessage').value.trim();
      if(name.length<3){ document.getElementById('cNameError').textContent='Name min 3'; valid=false; }
      if(!/^\S+@\S+\.\S+$/.test(email)){ document.getElementById('cEmailError').textContent='Valid email'; valid=false; }
      if(!type){ document.getElementById('cTypeError').textContent='Select type'; valid=false; }
      if(msg.length<10){ document.getElementById('cMessageError').textContent='Min 10 chars'; valid=false; }
      if(!valid) return;
      document.getElementById('cSuccess').style.display='block';
      document.getElementById('cSuccess').innerText='Message sent! Opening email...';
      setTimeout(()=>{
        window.location.href=`mailto:info@umchurch.co.za?subject=UM Church - ${type}&body=Name:${name}%0AEmail:${email}%0AMessage:${msg}`;
      },800);
      this.reset();
    });
  }
});