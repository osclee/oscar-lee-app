<template>
    <div class="footer-content">
        <!-- <div class="footer-links">
            <NuxtLink to="/books">Books</NuxtLink>
            <NuxtLink to="/funfacts">Fun Facts</NuxtLink>
            <NuxtLink to="/links">Links</NuxtLink>
            <NuxtLink to="/resume">Resume</NuxtLink>
        </div> -->
        <div class="footer-info">
            <p>&copy; 2026 Oscar Lee. Built with Nuxt.js and Firebase</p>
            <div class="contact-info">
                <p>Contact: <a href="mailto:oscar.h.lee@gmail.com">oscar.h.lee@gmail.com</a> | <a href="https://linkedin.com/in/ohlee" target="_blank">LinkedIn</a></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer-content {
    margin-top: 40px;
    background-color: var(--background2);
    padding: 20px;
    border-radius: 10px;
    /* box-shadow: 0 4px 6px var(--shadow); */
    text-align: center;
}

.footer-links {
    margin-bottom: 10px;
}

.footer-links a {
    margin: 0 10px;
    color: var(--text);
    text-decoration: none;
}

.footer-links a:hover {
    text-decoration: underline;
}

.footer-info p {
    margin: 0;
    font-size: 0.9em;
    color: var(--text-secondary);
}

.contact-info a {
    color: var(--text-secondary);
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline;
}
</style>