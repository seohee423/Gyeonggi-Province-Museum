/* main 요소 색상 변경 */
$(window).on('scroll', () => {
  const scrollY = $(window).scrollTop();
  
  if (scrollY > 0) {
    $('.main-logo img').addClass('on'); 
    $('.main-logo h2').addClass('on');
    $('.agency-logo img').addClass('on');
    $('.main-right').addClass('on'); 
  }
});

/* main video 스크롤 */
document.addEventListener('DOMContentLoaded', function() {
  const videoWrapper = document.querySelector('.video-wrapper');
  const videoContainer = document.querySelector('.video-container');

  let initialWidth = videoWrapper.offsetWidth;
  let initialHeight = videoWrapper.offsetHeight;

  let isScrollLocked = false;

  const maxScale = 1.5;

  function handleScrollEvent() {
    if (isScrollLocked) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const videoContainerHeight = videoContainer.offsetHeight;
    const viewportHeight = window.innerHeight;

    if (scrollY + viewportHeight < videoContainer.offsetTop + videoContainerHeight) {
      const scrollPercentage = scrollY / videoContainerHeight;

      let scale = 1 + scrollPercentage * maxScale;
      scale = Math.min(scale, maxScale);

      const newWidth = initialWidth * scale;
      const newHeight = initialHeight * scale;

      videoWrapper.style.transition = 'width 0.5s, height 0.5s';
      videoWrapper.style.width = `${newWidth}px`;
      videoWrapper.style.height = `${newHeight}px`;

      isScrollLocked = true;
      window.scrollTo(0, scrollY);
    } else {
      videoWrapper.style.width = '100%';
      videoWrapper.style.height = '100%';

      isScrollLocked = true;
      window.scrollTo(0, scrollY);
    }
  }

  window.addEventListener('scroll', handleScrollEvent);
});

/* 오시는길 이미지 슬라이드 쇼 */
  const slides = document.querySelectorAll('.location-img');
  let index = 0;
  const slideInterval = 3000;

  function showSlide() {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  setInterval(function() {
    index++;
    if (index === slides.length) {
      index = 0;
    }
    showSlide();
  }, slideInterval);

  showSlide();


/* 마우스 커서 이미지 */
  const cursorImage = document.getElementById('cursorImage');
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  const speed = 0.1;

  document.addEventListener('mousemove', (e) => {
      targetX = e.pageX;
      targetY = e.pageY;
      cursorImage.style.display = 'block';
  });

  document.addEventListener('mouseout', () => {
      cursorImage.style.display = 'none';
  });

  function animate() {
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;
      cursorImage.style.left = currentX + 'px';
      cursorImage.style.top = currentY + 'px';
      requestAnimationFrame(animate);
  }

  animate();

  /* 커서 이미지 색상 변경 */
  document.addEventListener('DOMContentLoaded', function() {
    const cursorImage = document.getElementById('cursorImage');
    const viewMoreBtn = document.querySelector('.view-more-btn');
  
    document.addEventListener('mousemove', function(event) {
      const { clientX, clientY } = event;
  
      const element = document.elementFromPoint(clientX, clientY);
  
      const backgroundColor = window.getComputedStyle(element).getPropertyValue('background-color');
  
      if (backgroundColor === 'rgb(0, 0, 0)' || backgroundColor === 'var(--color-black)') {
        cursorImage.classList.add('light');
        cursorImage.style.width = '40px';
        cursorImage.style.height = '40px';
      } else {
        cursorImage.classList.remove('light');
        cursorImage.style.width = '20px';
        cursorImage.style.height = '20px';
      }
  
      const viewMoreBtnRect = viewMoreBtn.getBoundingClientRect();
      if (
        clientX >= viewMoreBtnRect.left &&
        clientX <= viewMoreBtnRect.right &&
        clientY >= viewMoreBtnRect.top &&
        clientY <= viewMoreBtnRect.bottom
      ) {
        cursorImage.style.width = '35px';
        cursorImage.style.height = '35px';
      }
    });
  });

/* main logo */
  const mainLeft = document.querySelector('.main-left');

  function handleScroll() {
    const positionFromTop = mainLeft.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight <= 0) {
      mainLeft.classList.add('show');
    } else {
      mainLeft.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });

/* header 스크롤 이벤트 */
$(window).on('scroll', () => {
  const scrollY = $(window).scrollTop();
  
  if (scrollY > 0) {
    $('header').addClass('on');
    $('.menu-logo-wrapper').addClass('on');
  }
});


/* 오시는길 텍스트 애니메이션 */
$(function() {
  function movingText(num) {
    const $txtWrappers = $('.wrapper .txt-wrapper');
    const nextIdx = (num + 1) % $txtWrappers.length;

    $txtWrappers.removeClass('active');
    $txtWrappers.eq(nextIdx).addClass('active');

    setTimeout(() => movingText(nextIdx), 2000);
  }
  movingText(0);
});
