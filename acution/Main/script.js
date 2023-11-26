alert("This is auction Web page.....");

AOS.init();


document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
  