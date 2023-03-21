<script>
info="<html lang=&#34;en&#34;>

<head>
    <title>Rafly Maulana</title>
    <%- include(&#39;../components/head&#39;); %>
</head>

<body class=&#34;relative w-full overflow-x-hidden&#34;>
    <!-- Navbar -->
    <nav>
        <%- include(&#39;../components/navbar&#39;); %>
    </nav>

    <!-- Header -->
    <section id=&#34;header&#34;
        class=&#34;w-full h-full pt-10 flex flex-col items-center justify-center relative bg-blue-300 max-h-[850px]&#34;>
        <section
            class=&#34;container max-w-screen-xl min-h-full h-full mx-auto px-12 py-12 relative text-blue-900 text-center z-30&#34;>
            <section class=&#34;flex flex-wrap flex-col items-center justify-start relative z-50 rellax&#34;
                data-rellax-speed=&#34;2&#34;>
                <p class=&#34;leading-normal text-base md:text-xl font-maven-pro font-medium mx-auto&#34;>
                    Hello There! Nice to Meet You,
                </p>

                <a id=&#34;head-me&#34;
                    class=&#34;mb-4 md:mt-3 text-4xl transform hover:scale-105 lg:text-6xl font-bold leading-tight w-full font-rubik text-white transition-all duration-200 ease-in-out tracking-wide&#34;
                    href=&#34;#&#34;>
                    <span id=&#34;head-title&#34; class=&#34;tracking-wide&#34;>I&#39;m Rafly Maulana</span>
                </a>

                <p class=&#34;leading-normal text-base md:text-lg mb-2 max-w-2xl mx-auto font-domine&#34;>
                    A person who loves to code, design, play games and discover something new!
                </p>

                <section>
                    <%- include(&#39;../components/socials&#39;); %>
                </section>
            </section>

            <section class=&#34;absolute bottom-0 left-0 w-full flex items-center justify-center z-20 rellax&#34;
                data-rellax-speed=&#34;2&#34;>
                <img alt=&#34;&#34; loading=&#34;lazy&#34; src=&#34;/assets/img/3D/citytown.png&#34;
                    class=&#34;absolute max-h-[600px] max-w-[910px] !opacity-50 w-full mx-auto h-full flex items-center justify-center z-10 animate__animated animate__backInUp animate__delay-1s&#34;>
                <img alt=&#34;&#34; loading=&#34;lazy&#34; src=&#34;/assets/img/3D/Saly/Saly-10.png&#34;
                    class=&#34;relative z-20  animate__animated animate__fadeInUpBig animate__delay-2s max-h-[452px]&#34;>
                <a href=&#34;#cta&#34;
                    class=&#34;absolute bottom-20 md:bottom-14 mx-auto text-white z-30 transform hover:scale-110 ease-in duration-200 animate__animated animate__fadeIn animate__delay-3s&#34;>
                    <i class=&#34;fa fa-chevron-down text-4xl animate__animated animate__bounce animate__delay-4s&#34;></i>
                </a>
            </section>
        </section>

        <section
            class=&#34;absolute bottom-1/2 left-0 w-full flex items-center justify-center z-10 max-w-full blend-overlay overflow-x-hidden rellax&#34;
            data-rellax-speed=&#34;-3&#34;>
            <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/cloud.png&#34; class=&#34;animate-moveclouds cloud-slow -mt-8&#34;>
            <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/cloud.png&#34; class=&#34;animate-moveclouds cloud-slower -mt-14&#34;>
            <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/cloud.png&#34; class=&#34;animate-moveclouds cloud-slowest&#34;>
            <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/cloud.png&#34; class=&#34;animate-moveclouds cloud-super-slow mt-10&#34;>
        </section>
    </section>

    <!-- CTA -->
    <section id=&#34;cta&#34;
        class=&#34;container max-w-screen-xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 text-white space-y-5 lg:space-y-0&#34;>
        <a class=&#34;w-full lg:pr-8&#34; href=&#34;#about&#34;>
            <div
                class=&#34;w-full btn h-auto sm:h-56 relative rounded-3xl py-10 flex flex-col-reverse sm:flex-row items-center justify-between px-8 lg:px-0 lg:block border-b-4 bg-red-300 border-red-400&#34;>
                <section class=&#34;w-full sm:w-2/3 lg:ml-8&#34;>
                    <h1 class=&#34;font-rubik font-bold text-3xl sm:text-4xl&#34;>Get to Know Me</h1>
                    <p class=&#34;font-maven-pro font-bold text-base mt-3 leading-tight&#34;>Get to know me better, maybe we can
                        be friends!
                    </p>
                </section>
                <section class=&#34;mb-4 sm:mb-0&#34;>
                    <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/Saly/Saly-15.png&#34;
                        data-cover=&#34;bottom:0;right:0;width:100%&#34;
                        class=&#34;illustration lg:absolute -bottom-12 -right-3 h-44 rellax&#34; data-rellax-speed=&#34;0&#34;>
                </section>
            </div>
        </a>
        <a class=&#34;w-full lg:px-4 xl:px-8&#34; href=&#34;#projects&#34;>
            <div
                class=&#34;w-full btn h-auto sm:h-56 relative rounded-3xl py-10 flex flex-col-reverse sm:flex-row items-center justify-between px-8 lg:px-0 lg:block border-b-4 bg-yellow-300 border-yellow-400&#34;>
                <section class=&#34;w-full sm:w-1/2 lg:ml-28&#34;>
                    <h1 class=&#34;font-rubik font-bold text-3xl sm:text-4xl&#34;>My <br class=&#34;hidden sm:block&#34;>Projects
                    </h1>
                    <p class=&#34;font-maven-pro font-bold text-base mt-3 leading-tight&#34;>See what i can do and how i do it.
                    </p>
                </section>
                <section class=&#34;mb-4 sm:mb-0&#34;>
                    <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/Saly/Saly-22.png&#34;
                        data-cover=&#34;top:0;left:0;width:100%&#34;
                        class=&#34;illustration lg:absolute top-10 -left-14 h-40 rellax&#34; data-rellax-speed=&#34;0&#34;>
                </section>
            </div>
        </a>
        <a class=&#34;w-full lg:pl-8 relative z-50&#34; href=&#34;#contact&#34; onclick=&#34;animateSocial();&#34;>
            <div
                class=&#34;w-full btn h-auto sm:h-56 relative rounded-3xl py-10 flex flex-col-reverse sm:flex-row items-center justify-between px-8 lg:px-0 lg:block border-b-4 z-30 bg-blue-300 border-blue-400&#34;>
                <section class=&#34;w-full sm:w-1/2 lg:ml-24&#34;>
                    <h1 class=&#34;font-rubik font-bold text-3xl sm:text-4xl&#34;>Contact <br class=&#34;hidden sm:block&#34;>Me
                    </h1>
                    <p class=&#34;font-maven-pro font-bold text-base mt-3 leading-tight&#34;>Wanted to hire me? Or just wanted
                        to say Hi?</p>
                </section>
                <section class=&#34;mb-4 sm:mb-0&#34;>
                    <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/Saly/Saly-14.png&#34;
                        data-cover=&#34;bottom:0;left:10;width:100%&#34;
                        class=&#34;illustration lg:absolute -bottom-12 -left-9 h-44 rellax&#34; data-rellax-speed=&#34;0&#34;>
                </section>
            </div>
        </a>
    </section>

    <!-- About -->
    <section id=&#34;about&#34;
        class=&#34;relative container max-w-screen-xl mx-auto px-6 lg:px-0 py-12 lg:py-4 flex flex-col lg:justify-start lg:items-stretch items-center lg:flex-row&#34;>
        <div id=&#34;circle-left&#34; class=&#34;bg-blue-300 animate-float rounded-full absolute top-16 -left-52 z-10&#34;></div>
        <div id=&#34;circle-right&#34; class=&#34;bg-yellow-300 animate-float rounded-full absolute -top-32 -right-52 z-10&#34;>
            <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/Saly/Saly-28.png&#34; data-cover=&#34;width:100%;bottom:0;left:0&#34;
                class=&#34;illustration animate-float max-h-28 absolute bottom-10 -left-10 hidden sm:block&#34;>
        </div>

        <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/Saly/Saly-12.png&#34;
            class=&#34;illustration animate-float relative z-20 max-h-[415px]&#34;>
        <section
            class=&#34;relative about-box z-20 max-w-2xl my-auto bg-white lg:bg-transparent rounded-3xl py-12 px-6 lg:p-0 lg:pr-8 xl:pr-0 xl:pl-12 md:shadow-none animate__animated&#34;>
            <h1 class=&#34;text-4xl text-blue-800 font-rubik font-bold&#34;>Doing it with <span
                    class=&#34;text-blue-400&#34;>passion</span>.</h1>
            <p id=&#34;about-me&#34; class=&#34;font-domine text-base mt-4 text-blue-700&#34;>
                My name is Muhammad Rafly Maulana. In my 18 years of life I have experienced things like Producing
                Music, Graphic Designing, Fullstack Programming, etc. But one thing I always stick with is, I always do
                it as my passion, and that&#39;s what makes it the best.
            </p>
            <section class=&#34;flex flex-col sm:flex-row mt-4 space-y-3 sm:space-y-0 sm:space-x-3&#34;>
                <a class=&#34;bg-blue-400 btn w-full sm:w-max text-center sm:text-left border-b-4 rounded-3xl py-3 px-6 font-rubik font-bold text-white border-blue-500&#34;
                    onclick=&#34;moreAboutMe(this)&#34; data-switch=&#34;1&#34;>
                    More About Me
                </a>
                <a class=&#34;bg-red-300 btn border-b-4 w-full sm:w-max text-center sm:text-left rounded-3xl py-3 px-6 font-rubik font-bold text-white border-red-500&#34;
                    onclick=&#34;alert(&#39;Will be out soon!&#39;)&#34;>
                    My Resume
                </a>
                <a class=&#34;bg-yellow-300 btn border-b-4 w-full sm:w-max text-center sm:text-left rounded-3xl py-3 px-6 font-rubik font-bold text-white border-yellow-500&#34;
                    onclick=&#34;alert(&#39;Will be out soon!&#39;)&#34;>
                    My CV
                </a>
            </section>
        </section>
    </section>

    <!-- Projects -->
    <section id=&#34;projects&#34; class=&#34;min-h-screen bg-blue-400 relative&#34; x-data=&#34;{ tab: &#39;page0&#39; }&#34;>
        <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/dots.png&#34; class=&#34;h-64 w-64 absolute -top-32 -right-32&#34;>

        <section class=&#34;relative container max-w-screen-xl mx-auto px-6 xl:px-0 pt-24 pb-8 mt-4 flex flex-col&#34;>
            <div class=&#34;w-full flex flex-col md:flex-row justify-between items-start&#34;>
                <img loading=&#34;lazy&#34; alt=&#34;&#34; src=&#34;/assets/img/3D/Saly/Saly-1.png&#34; class=&#34;illustration max-h-60&#34;>
                <section class=&#34;text-right text-white mt-4 md:mt-0 w-full&#34;>
                    <h1 class=&#34;text-6xl font-rubik font-bold&#34;>My Projects</h1>
                    <p class=&#34;font-domine text-lg max-w-xl mt-4 ml-auto&#34;>Herein lies all my work that I have done
                        before. Hope you like it!</p>
                    <section id=&#34;pagination&#34; class=&#34;flex flex-row space-x-3 justify-end mt-4&#34;>
                        <% projects.map((project, page)=> { %> 
                            <a class=&#34;h-9 w-9 flex items-center justify-center bg-white text-lg font-rubik font-bold text-center text-blue-400 rounded-md cursor-pointer transform hover:scale-105&#34; :class=&#34;{ &#39;!bg-blue-700&#39;: tab === &#39;page<%-page%>&#39; }&#34; @click=&#34;tab = &#39;page<%-page%>&#39;&#34;>
                                <%-page+1%>
                            </a>
                        <% }) %>
                    </section>
                </section>
            </div>
        </section>

        <section id=&#34;project-list&#34;>
            <% projects.map((project, page) => { %> 
                <section id=&#34;project-list-<%-page%>&#34; x-show=&#34;tab === &#39;page<%-page%>&#39;&#34; class=&#34;relative container max-w-screen-xl mx-auto px-6 xl:px-0 pt-12 pb-24 mt-4 flex flex-col space-y-24&#34;>
                    <% project.map(x => { %> 
                        <div class=&#34;flex flex-col-reverse lg:flex-row&#34;>
                            <section id=&#34;left&#34; class=&#34;flex flex-col items-start justify-between flex-grow mt-4 pt-8 lg:pt-0 lg:mt-0 space-y-4&#34;>
                                <section class=&#34;text-white&#34;>
                                    <p class=&#34;font-rubik text-sm font-medium uppercase opacity-50&#34;>Position</p>
                                    <h1 class=&#34;font-rubik font-bold text-xl mt-2&#34;>
                                        <%-x.position.join(&#39;<br>&#39;)%>
                                    </h1>
                                </section>
            
                                <section class=&#34;text-white&#34;>
                                    <p class=&#34;font-rubik text-sm font-medium uppercase opacity-50&#34;>Work</p>
                                    <h1 class=&#34;font-rubik font-bold text-xl mt-2&#34;>
                                        <%-x.work.join(&#39;<br>&#39;)%>
                                    </h1>
                                </section>
            
                                <section class=&#34;flex flex-row items-start space-x-3 w-full&#34;>
                                    <a href=<%-x.moreinfo%> class=&#34;bg-yellow-300 btn w-full sm:w-max text-center sm:text-left border-b-4 rounded-3xl py-3 px-8 font-rubik font-bold text-white border-yellow-400&#34;>
                                        Learn More
                                    </a>
            
                                    <a href=<%-x.link%> class=&#34;bg-red-300 btn w-max text-center sm:text-left border-b-4 rounded-3xl p-3 font-rubik font-bold text-white border-red-400&#34;>
                                        <i class=&#34;fa fa-globe-asia text-2xl&#34;></i>
                                    </a>
                                </section>
                            </section>
            
                            <section id=&#34;right&#34; class=&#34;relative&#34; style=&#34;background-image: url(<%-x.image%>);&#34;>
                                <div id=&#34;blocker&#34; class=&#34;absolute h-full w-full bg-black opacity-50 z-10&#34;></div>
            
                                <div class=&#34;w-full h-full relative z-20 flex flex-col justify-between items-center py-8&#34;>
                                    <span>&nbsp;</span>
                                    <h1 class=&#34;font-rubik font-bold text-4xl md:text-5xl text-white overflow-ellipsis overflow-hidden w-full px-5 text-center&#34;><%-x.name%></h1>
                                    <section class=&#34;text-center&#34;>
                                        <p class=&#34;font-rubik text-sm font-medium uppercase opacity-50 text-white&#34;>Status</p>
                                        <h1 class=&#34;font-rubik font-bold text-xl mt-2 project-status text-white&#34;><%-x.status.name%></h1>
                                    </section>
                                </div>
                            </section>
                        </div>
                    <% }) %> 
                </section>
            <% }) %> 
        </section>

        <section class=&#34;w-full mx-auto relative z-50&#34;>
            <section id=&#34;pagination2&#34; class=&#34;flex flex-row space-x-3 justify-center items-center mt-4&#34;>
                <% projects.map((project, page) => { %> 
                    <a class=&#34;h-9 w-9 flex items-center justify-center bg-white text-lg font-rubik font-bold text-center text-blue-400 rounded-md cursor-pointer transform hover:scale-105&#34; :class=&#34;{ &#39;!bg-blue-700&#39;: tab === &#39;page<%-page%>&#39; }&#34; @click=&#34;tab = &#39;page<%-page%>&#39;&#34;>
                        <%-page+1%>
                    </a>
                <% }) %>
            </section>
        </section>
    </section>

    <!-- Contact -->
    <section id=&#34;contact&#34; class=&#34;w-full relative&#34;>
        <section class=&#34;w-full absolute -top-1 left-0 z-0&#34;>
            <div class=&#34;h-24 w-full bg-blue-400&#34;></div>
            <svg class=&#34;-mt-3 xl:w-full&#34; width=&#34;1920&#34; height=&#34;174&#34; viewBox=&#34;0 0 1439 174&#34; preserveAspectRatio=&#34;none&#34; fill=&#34;none&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;>
                <path fill-rule=&#34;evenodd&#34; clip-rule=&#34;evenodd&#34;
                    d=&#34;M0 124.286L59.9583 111.857C119.917 99.4286 239.833 74.5714 359.75 74.5714C479.667 74.5714 599.583 99.4286 719.5 120.143C839.417 140.857 959.333 157.429 1079.25 165.714C1199.17 174 1319.08 174 1379.04 174H1439V0H1379.04C1319.08 0 1199.17 0 1079.25 0C959.333 0 839.417 0 719.5 0C599.583 0 479.667 0 359.75 0C239.833 0 119.917 0 59.9583 0H0V124.286Z&#34;
                    fill=&#34;#75ACE2&#34; />
            </svg>
        </section>
        <section class=&#34;flex justify-center items-center flex-col w-full space-y-4 relative container max-w-screen-xl mx-auto px-6 lg:px-0 pb-12&#34;>
            <img alt=&#34;&#34; src=&#34;/assets/img/3D/Saly/Saly-13.png&#34; class=&#34;max-h-72 illustration animate-float&#34;>

            <h2 class=&#34;font-maven-pro font-bold text-2xl text-center text-blue-900&#34;>Had Anything to Talk With Me?</h2>
            <p class=&#34;font-domine text-base md:text-lg text-center mt-5 max-w-2xl mx-auto&#34;>
                Interested in working with me? Need help on your project? Or just wanna say hi? I’d love to hear you about that.
            </p>
            <p class=&#34;font-domine text-base md:text-lg text-center mt-6 max-w-2xl mx-auto&#34;>
                Hit me up on my email:
            </p>
            <a href=&#34;mailto:mraflymaulana@gmail.com&#34; class=&#34;font-rubik font-bold text-lg md:text-2xl transform hover:scale-105 duration-200 ease-in&#34; data-social=&#34;email&#34;>mraflymaulana@gmail.com</a>

            <section>
                <%- include(&#39;../components/socials&#39;); %>
            </section>
        </section>
    </section>

    <footer>
        <%- include(&#39;../components/footer&#39;); %>
    </footer>
</body>

</html>"

document.write(info)
</script>