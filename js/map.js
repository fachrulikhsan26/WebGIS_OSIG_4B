const peta = L.map('peta'); // kanvas peta
peta.setView([0, 110], 5); // titik tengah

const atribusiOSM = {
    attribution: '<a href= "https://www.openstreetmap.org/about" target = "_blank">© OpenStreetMap</a>'
  }
  
  // menambahkan basemap
  const basemapOSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', atribusiOSM);
  basemapOSM.addTo(peta);
  
  const attribusiNaturalEarth = {
    attribution: '<a href= "https://github.com/lukasmartinelli/naturalearthtiles#license">Natural Earth</a>'
  }
  
  const basemapNaturalEarth = L.tileLayer('https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png', attribusiNaturalEarth);
  basemapNaturalEarth.addTo(peta);
  