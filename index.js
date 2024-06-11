


/* main logo */
document.addEventListener('DOMContentLoaded', function() {
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
  handleScroll(); // 초기 로드 시에도 체크

  // Optional: smooth scroll effect
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
});

/* header 스크롤 이벤트 */
$(window).on('scroll', () => {
  const exhibitionTop = $('.exhibition-wrapper').offset().top;
  const exhibitionBottom = exhibitionTop + $('.exhibition-wrapper').outerHeight();
  const headerHeight = $('header').outerHeight();
  const scrollY = $(window).scrollTop();
  const windowHeight = $(window).height();

  if (scrollY > exhibitionTop - headerHeight && scrollY < exhibitionBottom - headerHeight - windowHeight) {
    $('header').addClass('on');
    $('.menu-logo-wrapper').addClass('on'); 
  } else {
    $('header').removeClass('on');
    $('.menu-logo-wrapper').removeClass('on'); 
  }

  if (scrollY >= exhibitionBottom - headerHeight - windowHeight) {
    $('header').addClass('on');
    $('.menu-logo-wrapper').addClass('on'); 
  }
});

/* 오시는길 텍스트 애니메이션 */
$(function() {
  function movingText(num) {
    const $txtWrappers = $('.wrapper .txt-wrapper');
    const nextIdx = (num + 1) % $txtWrappers.length;

    // Remove active class from all text wrappers
    $txtWrappers.removeClass('active');
    
    // Add active class to the next text wrapper
    $txtWrappers.eq(nextIdx).addClass('active');

    setTimeout(() => movingText(nextIdx), 2000);
  }

  // Start the animation
  movingText(0);
});
