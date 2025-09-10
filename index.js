document.addEventListener('DOMContentLoaded', function() {

    const monthlyToggle = document.getElementById('toggle-monthly');
    const yearlyToggle = document.getElementById('toggle-yearly');
    
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    function updatePlanDisplay() {
        if (monthlyToggle.checked) {
            monthlyPrices.forEach(el => el.style.display = '');
            yearlyPrices.forEach(el => el.style.display = 'none');
        } else {
            monthlyPrices.forEach(el => el.style.display = 'none');
            yearlyPrices.forEach(el => el.style.display = '');
        }
    }
    
    updatePlanDisplay();
    
    monthlyToggle.addEventListener('change', updatePlanDisplay);
    yearlyToggle.addEventListener('change', updatePlanDisplay);
    
    const toggleLabels = document.querySelectorAll('.toggle-container label');
    toggleLabels.forEach(label => {
        label.setAttribute('tabindex', '0');
        label.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const radioId = this.getAttribute('for');
                document.getElementById(radioId).checked = true;
                updatePlanDisplay();
            }
        });
    });

 
    const slider = document.getElementById('slider');
    const btnIzquierda = document.querySelector('.slider-btn.izquierda');
    const btnDerecha = document.querySelector('.slider-btn.derecha');

    if (slider && btnIzquierda && btnDerecha) {
        btnIzquierda.addEventListener('click', () => {
            slider.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        btnDerecha.addEventListener('click', () => {
            slider.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    
    const categoriesData = {
        'Drama': [
            { img: 'https://beam-images.warnermediacdn.com/2024-05/got_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/euphoria.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/succesion.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/hotd_s1_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-08/indusry_s3_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/the_gilded_age_s2_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' }
        ],
        'Realities': [
            { img: 'https://beam-images.warnermediacdn.com/2024-05/property_bros_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/90df_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/naked_and_afraid_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/cheapskates_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/dra_pimple_popper_spa_eng.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/fixer_upper_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' }

        ],
        'Acción': [
            { img: 'https://beam-images.warnermediacdn.com/2024-05/tlou.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/ninja_kamui.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/supernatural.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'},
            { img: ' https://beam-images.warnermediacdn.com/2024-08/mad_max_furiosa_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'},
            { img: 'https://beam-images.warnermediacdn.com/2024-08/godzilla_v_kong_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/blue_beetle_spa_eng.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'}
        ],
        'Comedia': [
            { img: 'https://beam-images.warnermediacdn.com/2024-05/friends.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/tbbt.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/rick_and_morty.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'},
            { img: 'https://beam-images.warnermediacdn.com/2024-05/hacks_s3.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/the_office.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/two_and_a_half_men.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'},
        ],
        'Crimen': [
            { img: 'https://beam-images.warnermediacdn.com/2024-08/city-of-god-spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/quiet_on_set_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'},
            { img: 'https://beam-images.warnermediacdn.com/2024-05/the_staircase_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/maria_marta_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/garavito_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/true_detective_s4_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' }
        ],
        'Películas': [
            { img: 'https://beam-images.warnermediacdn.com/2024-05/barbie.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/wonka.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com ' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/the_color_purple_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },   
            { img: ' https://beam-images.warnermediacdn.com/2024-05/dune_spa_bpo.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },
            { img: 'https://beam-images.warnermediacdn.com/2024-05/harry_potter_saga_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' },	
            { img: 'https://beam-images.warnermediacdn.com/2024-05/spiderman_across_spa.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com' }
        ]
    };

    const tabsContainer = document.querySelector('.category-tabs-container');
    const carouselsContainer = document.querySelector('.carousels-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (tabsContainer && carouselsContainer) {
        Object.keys(categoriesData).forEach((categoryName, index) => {
            const tabButton = document.createElement('button');
            tabButton.textContent = categoryName;
            tabButton.classList.add('category-tab');
            tabButton.dataset.category = categoryName.toLowerCase();
            tabsContainer.appendChild(tabButton);

            const carouselWrapper = document.createElement('div');
            carouselWrapper.classList.add('carousel-wrapper');
            carouselWrapper.dataset.category = categoryName.toLowerCase();

            const carousel = document.createElement('div');
            carousel.classList.add('carousel');

            categoriesData[categoryName].forEach(item => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                const img = document.createElement('img');
                img.src = item.img;
                img.alt = `Poster de ${categoryName}`;
                carouselItem.appendChild(img);
                carousel.appendChild(carouselItem);
            });

            carouselWrapper.appendChild(carousel);
            carouselsContainer.appendChild(carouselWrapper);

            if (index === 0) {
                tabButton.classList.add('active');
                carouselWrapper.classList.add('active');
            }
        });

      
        tabsContainer.addEventListener('click', (event) => {
            const clickedTab = event.target.closest('.category-tab');
            if (!clickedTab) return;

            document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.carousel-wrapper').forEach(carousel => carousel.classList.remove('active'));

            const category = clickedTab.dataset.category;
            clickedTab.classList.add('active');
            document.querySelector(`.carousel-wrapper[data-category="${category}"]`).classList.add('active');
        });
    }


    const tabsWrapper = document.querySelector('.category-tabs-container');
    const tabs = document.querySelectorAll('.category-tab');

    if (prevBtn && nextBtn && tabsWrapper) {
        let currentTabIndex = 0;

        function updateActiveCategory(index) {
            tabs.forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.carousel-wrapper').forEach(wrapper => wrapper.classList.remove('active'));

    
            tabs[index].classList.add('active');
            const category = tabs[index].dataset.category;
            document.querySelector(`.carousel-wrapper[data-category="${category}"]`).classList.add('active');
        }

        prevBtn.addEventListener('click', () => {
            currentTabIndex = (currentTabIndex > 0) ? currentTabIndex - 1 : tabs.length - 1;
            tabsWrapper.scrollBy({
                left: -200, 
                behavior: 'smooth'
            });
            updateActiveCategory(currentTabIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentTabIndex = (currentTabIndex < tabs.length - 1) ? currentTabIndex + 1 : 0;
            tabsWrapper.scrollBy({
                left: 200, 
                behavior: 'smooth'
            });
            updateActiveCategory(currentTabIndex);
        });
    }
});
  
   
   const faqQuestions = document.querySelectorAll('.faq-question');

   faqQuestions.forEach(question => {
       question.addEventListener('click', () => {
           const faqItem = question.closest('.faq-item');
           
           if (faqItem.classList.contains('active')) {
               faqItem.classList.remove('active');
               question.classList.remove('active');
           } else {
               document.querySelectorAll('.faq-item.active').forEach(item => {
                   item.classList.remove('active');
                   item.querySelector('.faq-question').classList.remove('active');
               });

               faqItem.classList.add('active');
               question.classList.add('active');
           }
       });
   });