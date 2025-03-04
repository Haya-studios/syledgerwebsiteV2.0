document.addEventListener('DOMContentLoaded', () => {
    const infoForm = document.getElementById('info-form');
  
    infoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const siteName = document.getElementById('site-name').value;
      const siteUsername = document.getElementById('site-username').value;
      const sitePassword = document.getElementById('site-password').value;
  
      const info = {
        siteName,
        siteUsername,
        sitePassword
      };
  
      fetch('/save-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        alert('Info saved successfully');
        document.getElementById('info-manager').style.display = 'none';
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to save info');
      });
    });
  });