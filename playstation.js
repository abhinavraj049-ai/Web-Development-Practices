document.addEventListener('DOMContentLoaded', () => {

    // Search bar 
    const searchTriggerBtn = document.getElementById('searchTriggerBtn');
    const megaSearchBar    = document.getElementById('megaSearchBar');
    const searchBackdrop   = document.getElementById('searchBackdrop');

    if (searchTriggerBtn && megaSearchBar && searchBackdrop) {
        searchTriggerBtn.addEventListener('click', () => {
            megaSearchBar.classList.toggle('active');
            searchBackdrop.classList.toggle('active');
        });
        searchBackdrop.addEventListener('click', () => {
            megaSearchBar.classList.remove('active');
            searchBackdrop.classList.remove('active');
        });
    }

    // Games hero carousel 
    const heroSlides      = document.querySelectorAll('.hero');
    const heroThumbnails  = document.querySelectorAll('.carousel-item');
    let   heroIndex       = 0;
    let   heroTimer;

    function showHeroSlide(index) {
        heroSlides.forEach(s  => s.classList.remove('active'));
        heroThumbnails.forEach(t => t.classList.remove('active'));
        heroSlides[index].classList.add('active');
        heroThumbnails[index].classList.add('active');
        heroIndex = index;
    }

    function nextHeroSlide() {
        showHeroSlide((heroIndex + 1) % heroSlides.length);
    }

    function startHeroTimer() {
        heroTimer = setInterval(nextHeroSlide, 5000);
    }

    function resetHeroTimer() {
        clearInterval(heroTimer);
        startHeroTimer();
    }

    heroThumbnails.forEach((thumb, i) => {
        thumb.addEventListener('click', () => {
            showHeroSlide(i);
            resetHeroTimer();
        });
    });

    if (heroSlides.length > 0) {
        showHeroSlide(0);
        startHeroTimer();
    }

    //  PS5 accessories ads carousel 
    const adsPanels     = document.querySelectorAll('.ads');
    const adsThumbs     = document.querySelectorAll('.adscarousel > div');
    const btnBack       = document.querySelector('.back');
    const btnForward    = document.querySelector('.forward');
    let   adsIndex      = 0;

    function showAdsSlide(index) {
       
        if (index < 0) index = adsPanels.length - 1;
        else if (index >= adsPanels.length) index = 0;

        adsPanels.forEach(ad  => ad.classList.remove('active'));
        adsThumbs.forEach(th  => th.className = 'ads-item');

        adsPanels[index].classList.add('active');
        adsThumbs[index].className = 'ads-item-active';
        adsThumbs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

        adsIndex = index;
    }

    adsThumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => showAdsSlide(i));
    });

    if (btnBack)    btnBack.addEventListener('click',    () => showAdsSlide(adsIndex - 1));
    if (btnForward) btnForward.addEventListener('click', () => showAdsSlide(adsIndex + 1));

    if (adsPanels.length > 0) showAdsSlide(0);

});
