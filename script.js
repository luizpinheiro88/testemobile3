document.getElementById('askButton').addEventListener('click', function() {
    var locationName = document.getElementById('locationInput').value.trim();
    
    if (locationName === '') {
        alert('Please enter a location.');
        return;
    }

    var mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(locationName);
    window.open(mapUrl, '_blank');
});
