document.addEventListener('DOMContentLoaded', function() {
  const awardsContainer = document.querySelector('.awardsContainer');
  const awardsList = document.getElementById('awardsList');
  const snsImages = document.querySelectorAll('.snsImage');

  awardsContainer.addEventListener('mouseenter', function() {
    awardsList.style.display = 'block';
  });

  awardsContainer.addEventListener('mouseleave', function() {
    awardsList.style.display = 'none';
  });

  snsImages.forEach(image => {
    image.addEventListener('click', function() {
      const href = this.getAttribute('data-href');
      window.open(href, '_blank');
    });
  });
});


