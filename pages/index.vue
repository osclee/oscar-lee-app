<template>
    <div class="content-div">
        <div class="intro-section">
            <img src="../assets/images/headshot.jpg" alt="Oscar's Headshot" class="profile-img" width="25%"
                height="25%">
            <div class="intro">
                <p>Hello! My name is Oscar Lee and welcome to my personal site. </p>
                <p>I am a Dartmouth College alumnus and live in Boston, Massachusetts, working as a product software
                    engineer
                    at <a class="inactive-link" target="_blank" href="https://www.wolterskluwer.com/en">Wolters
                        Kluwer</a>
                    on <a class="inactive-link" target="_blank"
                        href="https://www.wolterskluwer.com/en/solutions/uptodate">UpToDate</a>, a
                    clinical support software with millions of users across the globe. I'm a full stack engineer, but
                    primarily focus on
                    backend systems.
                </p>
                <p>
                    My recent projects with Wolters Kluwer include work on our generative AI and natural language
                    processing
                    solutions in UpToDate. You can read about the work
                    <a class="inactive-link" target="_blank"
                        href="https://www.wolterskluwer.com/en/news/wolters-kluwer-unveils-generative-ai-labs-uptodate">here</a>.
                </p>

                <p>
                    I love staying fit and being outside, I rowed throughout high school and at Dartmouth College but
                    have now turned by athletic pursuits to running.
                </p>
                <div class="center-div">
                    <NuxtLink active-class="active-link" to="/resume"><button>Resume</button></NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.profile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    height: 20%;
}
</style>