<template>
    <div class="content-div">        
        <h3>I am TikTok famous (for eating a rock)</h3>
        <blockquote class="tiktok-embed my-embed" cite="https://www.tiktok.com/@orhan702/video/6772704799067589894" data-video-id="6772704799067589894" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@orhan702" href="https://www.tiktok.com/@orhan702?refer=embed">@orhan702</a> Brownies anyone ? 🥳🥳  <a title="brownie" target="_blank" href="https://www.tiktok.com/tag/brownie?refer=embed">#brownie</a> <a title="upthemesong" target="_blank" href="https://www.tiktok.com/tag/upthemesong?refer=embed">#upthemesong</a> <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="ivyleague" target="_blank" href="https://www.tiktok.com/tag/ivyleague?refer=embed">#ivyleague</a> <a title="asphaultlife" target="_blank" href="https://www.tiktok.com/tag/asphaultlife?refer=embed">#asphaultlife</a> <a title="dontletitflop" target="_blank" href="https://www.tiktok.com/tag/dontletitflop?refer=embed">#dontletitflop</a> <a target="_blank" title="♬ Married Life - Michael Giacchino" href="https://www.tiktok.com/music/Married-Life-107716974?refer=embed">♬ Married Life - Michael Giacchino</a> </section> </blockquote>

        <hr class="horizontal-line">

        <h3>I made a little tic tac toe game</h3>
        <iframe :src=tictactoe width="800" height="800"></iframe>

        <hr class="horizontal-line">

        <h3>Here are my top 5 books!</h3>
        <p><b class="number">1</b> The Lord of the Rings</p>
        <p><b class="number">2</b> The Alchemist</p>
        <p><b class="number">3</b> The Count of Monte Cristo</p>
        <p><b class="number">4</b> The Harry Potter Series</p>
        <p><b class="number">5</b> The Sparrow</p>
    
</div></template>
<script>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://www.tiktok.com/embed.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  },

  data() {
    return {
        tictactoe: 'https://osclee.github.io/tic-tac-toe/'
    };
  }
};
</script>

<style scoped>
.my-embed {
    margin:0;
}
</style>
