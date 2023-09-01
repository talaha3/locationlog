function setup(){

    noCanvas();
    const video = createCapture(VIDEO);
    video.size(320,240);
        
    const button = document.getElementById('submit');
    const input = document.getElementById('mood');
    let lat, lon;

    button.addEventListener('click', async event => {
    
        
    video.loadPixels();
    const image64 = video.canvas.toDataURL();    
    const mood = input.value;
    input.value ="";

     const data = {lat, lon, mood, image64};
     const options = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
        }
    
    
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);    
    console.log(mood)


     
    
    })


if('geolocation' in navigator) {
    
console.log('Ok')

navigator.geolocation.getCurrentPosition(async position => {

lat = position.coords.latitude;
lon = position.coords.longitude; 



document.getElementById('lat').textContent = lat;
document.getElementById('lon').textContent = lon;
}
)}
    else {
    console.log('not okay');
  } 


        }  
    
    
    
    

    


        
