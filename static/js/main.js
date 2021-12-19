console.log("test ok!");

'use strict';

if ('serviceWorker' in navigator){
    console.log("Service Worker and Push is supported");

    navigator.serviceWorker.register('/sw')
    .then(function(swReg){ 
        console.log("Service Worker is registered", swReg);
        
        swRegistration = swReg;
    })
    .catch(function(error){
        console.error('Service Worker Error', error);
    });
}else{
    console.warn('Push messaging is not supported');
    pushButton.textContent = 'Push Not Supported'
}

console.log("loaded end~!");