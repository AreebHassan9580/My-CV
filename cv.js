// Toggle visibility of sections
document.getElementById('about').style.display = 'block';

document.getElementById('experience').addEventListener('click', function () {
  document.getElementById('experience-list').style.display = 'block';
  document.getElementById('education-list').style.display = 'none';
  document.getElementById('skills-list').style.display = 'none';
});

document.getElementById('education').addEventListener('click', function () {
  document.getElementById('education-list').style.display = 'block';
  document.getElementById('experience-list').style.display = 'none';
  document.getElementById('skills-list').style.display = 'none';
});

document.getElementById('skills').addEventListener('click', function () {
  document.getElementById('skills-list').style.display = 'block';
  document.getElementById('experience-list').style.display = 'none';
  document.getElementById('education-list').style.display = 'none';
});
