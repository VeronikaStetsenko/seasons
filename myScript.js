function summer() {
   document.getElementById('id-h1').innerHTML="summer"; 
   document.getElementById('text').innerHTML="Summer is bright and full of adventure. Long sunny days, clear skies, and warm evenings make it the perfect season to relax and explore."; 

   document.querySelector('main').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('images/summer-img.jpg')";

   document.querySelector('.header').style.background = "linear-gradient(90deg, #0E9AA1, #00515A)"
   document.querySelector('.footer').style.background = "linear-gradient(90deg, #0E9AA1, #00515A)"
}

function spring() {
    document.getElementById('id-h1').innerHTML="spring";
    document.getElementById('text').innerHTML="Spring brings fresh flowers, green trees, and warm sunshine. Nature comes alive, and every day feels full of new energy and hope.";

    document.querySelector('main').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('images/spring-img.jpg')";

    document.querySelector('.header').style.background = "linear-gradient(90deg, #9CAAAD, #A475AE)"
    document.querySelector('.footer').style.background = "linear-gradient(90deg, #9CAAAD, #A475AE)"
}

function autumn() {
   document.getElementById('id-h1').innerHTML="autumn"; 
   document.getElementById('text').innerHTML="Autumn paints the world in shades of gold and red. Cool air, falling leaves, and peaceful afternoons create a calm and cozy atmosphere.";

   document.querySelector('main').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('images/autumn-img.jpg')";

   document.querySelector('.header').style.background = "linear-gradient(90deg, #A36300, #832600)"
   document.querySelector('.footer').style.background = "linear-gradient(90deg, #A36300, #832600)"
}

function winter() {
    document.getElementById('id-h1').innerHTML="winter";
    document.getElementById('text').innerHTML="Winter covers everything in sparkling snow. Crisp mornings, quiet nights, and festive lights make you feel magical and peaceful.";

    document.querySelector('main').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('images/winter-img.jpg')";

    document.querySelector('.header').style.background = "linear-gradient(90deg, #77749F, #1B2044)"
    document.querySelector('.footer').style.background = "linear-gradient(90deg, #77749F, #1B2044)"
}
