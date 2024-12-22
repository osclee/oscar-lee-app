<template>
    <div>
      <canvas ref="gameCanvas" width="600" height="300"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Create the game when the component is mounted
      this.setupGame();
    },
    methods: {
      setupGame() {
        const canvas = this.$refs.gameCanvas;
        const ctx = canvas.getContext('2d');
  
        // Initialize basic game state
        let player = {
          x: 0,
          y: 0,
          width: 50,
          height: 50,
          speed: 50,
        };
  
        // Draw the player
        const drawPlayer = () => {
          ctx.fillStyle = 'blue';
          ctx.fillRect(player.x, player.y, player.width, player.height);
        };

        const drawBackground = () => {
            ctx.fillStyle = '#87CEEB'; // Sky blue
            ctx.fillRect(0, 0, canvas.width, canvas.height); // Cover the whole canvas
        };
  
        // Game loop
        const gameLoop = () => {
          drawBackground();
          drawPlayer();
          requestAnimationFrame(gameLoop); // Continue the game loop
        };
  
        gameLoop();
  
        // Handle keyboard events
        const handleKeyDown = (e) => {

          if (e.key === 'w') {
            player.y -= player.speed;
          } else if (e.key === 's') {
            player.y += player.speed;
          }
        };
  
        window.addEventListener('keydown', handleKeyDown);
      },
    },
  };
  </script>
  
  <style scoped>
  canvas {
    border: 2px solid #000;
  }
  </style>