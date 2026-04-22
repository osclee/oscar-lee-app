<template>
    <div>

        <div class="content-div">
            <div class="intro-section">
                <img src="../assets/images/headshot.jpg" alt="Oscar's Headshot" class="profile-img">
                <div class="intro">
                    <h2>Hey! I'm Oscar</h2>
                    <h3>Senior Software Engineer @ Wolters Kluwer</h3>
                    <p>I work on <a class="inactive-link" target="_blank"
                            href="https://www.wolterskluwer.com/en/solutions/uptodate/ai-clinical-decision-support">UpToDate
                            Expert AI</a>, a
                        generative AI solution for clinical support software with a growing user base of healthcare
                        professionals worldwide. I live in Boston and graduated from Dartmouth College.
                    </p>
                    <p>
                        As a full-stack engineer with AI expertise, I specialize in building mature user-facing
                        generative AI solutions that address real-world problems within the healthcare space.
                    </p>
                    <div class="center-div">
                        <h3>Connect with me on: </h3>
                        <!-- <button class="resume-link-button"
                    onclick="window.open('https://drive.google.com/file/d/1TkUWiwh2LtpsIziBvQQrH3wb9knWAKZG/view', '_blank');">
                    View Resume
                  </button> -->
                        <button class="resume-link-button"
                            onclick="window.open('mailto:oscar.h.lee@gmail.com', '_blank');">
                            Email
                        </button>
                        <button class="resume-link-button"
                            onclick="window.open('https://linkedin.com/in/ohlee', '_blank');">
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-div">
            <Collapsible class="content-section" :open="true">
                <template #header>
                    <h2 style="margin-bottom: 0; margin-top: 0;">My TL;DR</h2>
                </template>
                <h3 style="margin-bottom: 0;">Career Overview:</h3>
                <ul>
                    <li>
                        Building generative AI solutions for healthcare professionals at Wolters Kluwer.
                    </li>
                    <li>
                        Technical expertise in agentic workflows and implementing them into full-stack applications with mature CI/CD pipelines and cloud deployments.
                    </li>
                    <li>
                        Contributed to product management and cross-functional collaboration to deliver innovative and impactful AI solutions for healthcare.
                    </li>
                    <li>
                        I embrace leadership opportunities within dynamic and agile teams.
                    </li>
                </ul>

                <hr class="thematic-break" />

                <h3 style="margin-bottom: 0;">Top Skills:</h3>
                <ul>
                    <li>Building agentic workflows</li>
                    <li>Full-stack development</li>
                    <li>Software within healthcare</li>
                    <li>Leadership and teamwork</li>
                </ul>

                <hr class="thematic-break" />

                <h3 style="margin-bottom: 0;">Other Interests:</h3>
                <ul>
                    <li>Staying involved in Boston's running communities.</li>
                    <li>Rowing on the Charles River.</li>
                    <li>Reading science fiction (my favorite is Hyperion by Dan Simmons) and fantasy (The Lord of the Rings).</li>
                    <li>Hobby engineering that allows me to explore ideas and dive deeper into new technologies.</li>
                </ul>
            </Collapsible>
            <Collapsible class="content-section">
                <template #header>
                    <h2 style="margin-bottom: 0; margin-top: 0;">Wolters Kluwer</h2>
                    <p>2023-present</p>
                </template>

                <h3 style="margin-bottom: 0;">Senior Product Software Engineer</h3>
                <p class="date">2025-present</p>
                <p>
                    In 2025, I was pulled into one of Wolters Kluwer's most high-profile projects, <a
                        class="inactive-link" target="_blank"
                        href="https://www.wolterskluwer.com/en/solutions/uptodate/ai-clinical-decision-support">UpToDate
                        Expert AI</a>, a generative AI solution for clinical support software.
                    Our challenge was to build a mature, safe, and scalable project to deliver accurate medical
                    information to
                    clinicians at the point of care.
                    As a hands-on contributor, I worked with a team of skilled engineers to develop our AI agent,
                    observability
                    platforms, and integration points to roll out
                    our product across users.
                </p>
                <p>
                    As a senior software engineer on the project, I took on leadership responsibilities to drive the
                    technical direction
                    of the project, including:
                </p>
                <ul>
                    <li>Building our mobile application backend within a month to support mobile app AI functionality
                        securely and
                        efficiently. </li>
                    <li>Designing and implementing a new generative AI modality for our application to handle
                        dermatological image
                        analysis. </li>
                    <li>Extending agent infrastructure to offer passage retrieval built upon vectorized search.</li>
                    <li>Implementing new observability patterns for our front-end application.</li>
                    <li>Working with product, clinicians, and leadership to gather requirements and drive feature
                        development.</li>
                </ul>

                <hr class="thematic-break" />

                <h3 style="margin-bottom: 0;">Product Software Engineer</h3>
                <p class="date">2024-2025</p>
                <p>
                    In October of 2024, I moved to a new team within UpToDate tasked with developing AI solutions using
                    machine learning
                    and natural
                    language
                    processing to improve UpToDate's search engine. Since the team change, I've been working with a
                    skilled team of
                    data scientists and software engineers to build new features for our sandbox and production
                    environments. One
                    project I'm proud of
                    is the successful rollout of new features in time for the <a class="inactive-link" target="_blank"
                        href="https://www.wolterskluwer.com/en/expert-insights/focusing-ai-benefit-care-teams-harnessing-data-consumer-centric-care">2024
                        HLTH Conference</a> and enabled them for all users across UpToDate.
                </p>

                <p>
                    In the spring of 2025, I helped lead the rollout of verbatim search in UpToDate, allowing users to
                    use natural
                    language queries
                    in UpToDate's search engine. Working with multiple stakeholders, we designed and implemented a
                    solution that safely
                    and accurately
                    returned medical snippets and content to users. My role in this project was to design the backend
                    functionality and
                    provide our
                    search team with the necessary APIs to implement the feature.
                </p>

                <p>
                    Outside of my current role, I am also a security champion driving impactful change across our
                    product by
                    discovering vulnerabilities
                    and coordinating security upgrades. Furthermore, I participate in co-op and full-time interviews and
                    hope to
                    drive team success by helping hire
                    quality applicants who would fit technically and culturally.
                </p>

                <p>
                    I'm excited to continue improving the user experience within UpToDate by utilizing the latest
                    advancements in computer science and
                    technology. My goal is to become a better full-stack engineer, as well as learn more about machine
                    learning and
                    natural language processing.
                </p>

                <hr class="thematic-break" />

                <h3 style="margin-bottom: 0;">Associate Product Software Engineer</h3>
                <p class="date">2023-2024</p>
                <p>
                    Right after college, I started my full-time software engineering career working on the sustaining
                    engineering
                    team for UpToDate. The core responsibilities
                    of the team are fixing bugs, working on small features, and being a support network for other teams.
                    My
                    experience with this team provided
                    an amazing opportunity to become a professional software engineer. Mainly responsible for working on
                    backend
                    infrastructure, my ability to write high-quality Java code, SQL queries, and develop architecture
                    improved drastically. One notable project
                    that many
                    junior software engineers don't have the
                    opportunity to work on was rebuilding an outdated email infrastructure. For this project, I gathered
                    project
                    requirements, met with various
                    stakeholders, designed the replacement architecture from the ground up, and documented a solution
                    for successful
                    implementation and rollout.
                </p>

                <hr class="thematic-break" />

                <h4 style="margin-bottom: 0;">Skills</h4>
                <p>
                    I've utilized the following technical and non-technical skills:
                </p>
                <ul>
                    <li>Generative AI</li>
                    <ul>
                        <li>Langchain & Langgraph</li>
                        <li>RAG</li>
                        <li>Hugging Face</li>
                        <li>Ollama</li>
                        <li>Custom agentic workflows</li>
                    </ul>
                    <li>Java (Springboot, Spring Framework, JUnit) and Python (FastAPI)</li>
                    <li>Databases (Oracle SQL)</li>
                    <li>Vue, React</li>
                    <li>Cloud Infrastructure (GCP, AWS, Azure)</li>
                    <ul>
                        <li>Containerization (Docker, Kubernetes)</li>
                        <li>AWS Lambdas</li>
                        <li>Azure APIM</li>
                        <li>Firebase and Google Cloud Functions</li>
                    </ul>
                    <li>Technical product management and cross functional collaboration</li>
                </ul>

            </Collapsible>
            <Collapsible class="content-section">
                <template #header>
                    <h2 style="margin-bottom: 0; margin-top: 0;">MTech Systems</h2>
                    <p>2021 & 2022</p>
                </template>
                <h3 style="margin-bottom: 0;">Internship 2</h3>
                <p class="date">2022</p>
                <p>
                    Coming back to MTech Systems for a second internship, I returned to the application I had
                    built in my
                    previous internship. This time
                    I added additional features and functionality to improve user experience and business efficiency. I
                    integrated
                    Power BI report dashboards
                    into the application, developed a VSCode extension that called a custom endpoint on the application
                    for quick,
                    inline translations for developers,
                    and researched and prototyped the feasibility of integrating Google Translate.
                </p>

                <hr class="thematic-break" />

                <h3 style="margin-bottom: 0;">Internship 1</h3>
                <p class="date">2021</p>
                <p>
                    In my first internship, I was tasked with creating an application that interfaced with a database
                    of custom
                    translations used by the company for
                    localization efforts. I built a Blazor WebAssembly application, along with an API built in ASP.NET,
                    to perform CRUD
                    operations on a
                    database. Having no prior experience
                    with C#, LINQ, Blazor, or the other tools used, I had to learn while developing and successfully deployed a
                    working
                    version utilized across the business. As my
                    first semi-professional software engineering experience, I learned a lot about enterprise software
                    development
                    including the importance of testing, tracking work,
                    adding security features, and working with others.
                </p>

                <hr class="thematic-break" />

                <h3 style="margin-bottom: 0;">Skills</h3>
                <p>
                    I've utilized the following technical and non-technical skills:
                </p>
                <ul>
                    <li>C#, Linq</li>
                    <li>ASP.NET, Blazor</li>
                    <li>Databases (Microsoft SQL Server).</li>
                </ul>

            </Collapsible>
            <Collapsible class="content-section">
                <template #header>
                    <h2 style="margin-bottom: 0; margin-top: 0;">Education</h2>
                </template>
                <h3 style="margin-bottom: 0;"><a class="inactive-header-link" target="_blank"
                        href="https://home.dartmouth.edu/">Dartmouth College</a></h3>
                <h4 style="margin-bottom: 0; margin-top: 0;">BA Computer Science; BA Religion</h4>
                <p class="date">2019-2023</p>
                <p>I completed my undergraduate education at Dartmouth College in Hanover, New Hampshire. I went to
                    Dartmouth
                    planning to study
                    computer science, and I completed a BA. My studies in computer science focused heavily on
                    building a strong
                    foundation for software engineering
                    which I wanted to pursue as a career. However, the broad curriculum of the computer science
                    department allowed
                    me to study not only software engineering,
                    but also discrete math and algorithms, machine learning, and computer architecture, compilers, and
                    operating
                    systems. I even got to create
                    a video game for my senior design project called <a class="inactive-link" target="_blank"
                        href="https://arkendorf.itch.io/to-arithmos">To Arithmos</a>.
                </p>

                <p>
                    Dartmouth focuses on providing a well-rounded education, and I decided to pick up another major in
                    religious
                    studies because
                    the field let me learn about the world around me in new ways. I really enjoyed learning about
                    African religions,
                    Buddhism,
                    and Islam — religions that I hadn't been exposed to in the past. Taking on this second major was a
                    lot of work,
                    but it taught me skills like critical reading and analysis, writing, and strong communication.
                </p>

                <hr class="thematic-break" />

                <h4>Activities</h4>
                <p>I completed four years on the <a class="inactive-link" target="_blank"
                        href="https://dartmouthsports.com/sports/mens-rowing">varsity heavyweight rowing team</a>. I
                    shared many
                    successes with the team, including
                    multiple Eastern Sprints medals and an IRA medal. What my time on the team taught me most was grit,
                    perseverance,
                    and commitment to something greater than myself.
                </p>
            </Collapsible>
        </div>
    </div>

</template>

<script setup>
import Collapsible from '../components/Collapsible.vue'
</script>

<style scoped>
.profile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    max-width: 160px;
    aspect-ratio: 1/1;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 15%;
}
</style>