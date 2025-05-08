document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const estado = document.getElementById('estado-envio');
  
    if (nombre && email && mensaje) {
      estado.textContent = `Gracias por tu mensaje, ${nombre}. Te responderé pronto.`;
      estado.style.color = 'green';
      this.reset();
    } else {
      estado.textContent = 'Por favor, completa todos los campos.';
      estado.style.color = 'red';
    }

    
  });
  
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 }, // Reduce en móviles
      line_linked: { 
        enable: true,
        distance: 120,
        color: "#0d47a1",
        opacity: 0.3,
        width: 1
      },
      move: { speed: 1.5 } // Más lento para mejor rendimiento
    },
    retina_detect: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          particles: {
            number: {
              value: 40
            }
          }
        }
      }
    ]
  });

  