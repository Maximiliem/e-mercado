document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});



const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();

  searchResults.innerHTML = '';

  Promise.all([loadData('data1.json'), loadData('data2.json')])
    .then(results => {
      const allData = results.flat();

      const matchingResults = allData.filter(item => item.nombre.toLowerCase().includes(searchText));

      matchingResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = result.nombre;
        searchResults.appendChild(resultItem);
      });
    });
});

function loadData(jsonFile) {
  return fetch(jsonFile)
    .then(response => response.json())
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
      return [];
    });
}