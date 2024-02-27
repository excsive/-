document.addEventListener('DOMContentLoaded', function() {
    // Открытие модального окна при клике на кнопку "Заказать звонок"
    document.getElementById('openModalButton1').addEventListener('click', function() {
      document.getElementById('modalCallback').style.display = 'block';
    });
  
    // Открытие модального окна при клике на кнопку "Звоните"
    document.getElementById('openModalButton2').addEventListener('click', function() {
      document.getElementById('modalCallback').style.display = 'block';
    });

    // Открытие модального окна при клике на кнопку "Звоните"
    document.getElementById('openModalButton3').addEventListener('click', function() {
        document.getElementById('modalCallback').style.display = 'block';
      });
  
    // Закрытие модального окна при клике на кнопку закрытия (крестик)
    document.getElementById('closeModalButton').addEventListener('click', function() {
      document.getElementById('modalCallback').style.display = 'none';
    });
  
    // Закрытие модального окна при клике вне окна
    window.addEventListener('click', function(event) {
      if (event.target === document.getElementById('modalCallback')) {
        document.getElementById('modalCallback').style.display = 'none';
      }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('ul a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          smoothScrollTo(targetElement.offsetTop, 1000);
        }
      });
    });
  
    function smoothScrollTo(targetPosition, duration) {
      const startPosition = window.scrollY || window.pageYOffset;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
      function scrollAnimation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutQuad(progress);
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * easing);
  
        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }
  
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
  
      requestAnimationFrame(scrollAnimation);
    }
  });



  document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const sliderWrapper = document.querySelector('.element-content');
  
    let currentIndex = 0;
  
    nextButton.addEventListener('click', function() {
      if (currentIndex < getTotalSlides() - 1) {
        currentIndex++;
        updateSliderPosition();
      }
    });
  
    prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });
  
    function updateSliderPosition() {
      const newPosition = -currentIndex * 100 + '%';
      sliderWrapper.style.transform = 'translateX(' + newPosition + ')';
    }
  
    function getTotalSlides() {
      return document.querySelectorAll('.slide').length;
    }
  });


  function toggleaccordeon(title) {
    const item = title.parentElement;
    const content = item.querySelector('.element-content');
    
    if (content.classList.contains('active')) {
      content.classList.remove('active');
    } else {
      closeAllItems();
      content.classList.add('active');
    }
  }
  
  function closeAllItems() {
    const allItems = document.querySelectorAll('.title');
    allItems.forEach(function(item) {
      const content = item.querySelector('.element-content');
      content.classList.remove('active');
    });
  }