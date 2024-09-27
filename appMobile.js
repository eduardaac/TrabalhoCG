document.getElementById('fireButton').addEventListener('click', () => {
    // Lógica para disparar tiros
    console.log('Disparar tiro!');
  });
  
  document.getElementById('fullscreenButton').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  
  document.getElementById('soundButton').addEventListener('click', () => {
    // Lógica para ligar/desligar o som
    console.log('Som ligado/desligado!');
  });
  