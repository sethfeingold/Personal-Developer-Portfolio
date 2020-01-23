// Click 'View Skill Set' button from home to view skills section

$(document).on("click", "#skillsButton", function() {
    $('.hero').fadeTo(1000,0);
    $('#skillsButton').attr('disabled', 'disabled');
    setTimeout(()=> {
    $('body').html(`
        <div class="skill-page-container">
            <div class="prev-btn-container">
                <button id="homeButton">Back to Home</button>
                <button id="projectFromSkillsBtn">View Projects</button>
            </div>
            <div class="skill-container">
                <div class="about-me">
                    <div class="skill-logo">
                        <img src="./images/seth_headshot.jpg" alt="photo of Seth Feingold" height="85px" width="85px" style="border-radius:50%">
                    </div>
                    <h4 class="skill-title">About Me</h4>
                    <br/>
                    <p class="skill-desc">I'm a self-taught web developer focused on learning front-end technologies such as React, Redux, and VueJS. I am currently seeking opportunities for a junior web developer position in order to continue learning and adding to my skill set. I believe that building and contributing to projects is the best way to learn programming, thus I'm seeking to get as much hands-on experience as possible.</p>
                    <br/>
                    <p class="skill-desc">In my own projects I strive to implement a modern, mobile-first approach in order to ensure that they display correctly on any device regardless of screen width and maintain cross-browser compatibility.</p>
                </div>

                <div class="skill-list">
                    <div class="skills-wrapper">
                        <div class="logo-wrapper">
                            <div class="skill-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="70px" height="70px" class=""><g><circle style="fill:#69CDFF;" cx="267" cy="256" r="245" data-original="#69CDFF" class=""/><rect x="185.72" y="358.53" style="fill:#445EA0;" width="78.71" height="41.23" data-original="#445EA0" class=""/><rect x="185.72" y="358.53" style="fill:#2E4C89;" width="19.842" height="41.23" data-original="#2E4C89"/><path style="fill:#293D7C;" d="M316.856,398.763H127.56c-2.806,0-5.101,2.296-5.101,5.102v25.571c0,2.806,2.296,5.102,5.101,5.102  h189.296L316.856,398.763L316.856,398.763z" data-original="#293D7C" class=""/><path style="fill:#1A2B63;" d="M142.301,429.435v-25.571c0-2.806,2.296-5.102,5.102-5.102H127.56c-2.806,0-5.101,2.296-5.101,5.102  v25.571c0,2.806,2.296,5.102,5.101,5.102h19.842C144.597,434.537,142.301,432.241,142.301,429.435z" data-original="#1A2B63" class=""/><path style="fill:#293D7C;" d="M445.054,58.964H5.102C2.296,58.964,0,61.26,0,64.066V354.43c0,2.807,2.296,5.102,5.102,5.102  h311.754V206.768c0-3.859,3.14-7,7-7h126.3V64.066C450.156,61.26,447.86,58.964,445.054,58.964z" data-original="#293D7C" class=""/><path style="fill:#FFFFFF;" d="M22.396,308.514c0,1.684,1.377,3.06,3.061,3.06h291.399V206.768c0-3.859,3.14-7,7-7H427.76v-90.77  H22.396V308.514z" data-original="#FFFFFF" class=""/><path style="fill:#D9EAFC;" d="M42.239,308.514V108.998H22.396v199.516c0,1.684,1.377,3.06,3.061,3.06H45.3  C43.616,311.574,42.239,310.197,42.239,308.514z" data-original="#D9EAFC" class=""/><circle style="fill:#445EA0;" cx="225.08" cy="335.46" r="13.774" data-original="#445EA0" class=""/><path style="fill:#C3DDF4;" d="M316.856,223.146h-53.424c-1.65,0-3,1.35-3,3v59.639c0,1.65,1.35,3,3,3h53.424V223.146z" data-original="#C3DDF4" class=""/><path style="fill:#AEC1ED;" d="M280.274,285.785v-59.639c0-1.65,1.35-3,3-3h-19.842c-1.65,0-3,1.35-3,3v59.639c0,1.65,1.35,3,3,3  h19.842C281.624,288.785,280.274,287.435,280.274,285.785z" data-original="#AEC1ED" class=""/><path style="fill:#C3DDF4;" d="M323.856,199.768h46.618v-65.382c0-2.75-2.25-5-5-5H84.682c-2.75,0-5,2.25-5,5v66.525  c0,2.75,2.25,5,5,5h232.233C317.339,202.455,320.288,199.768,323.856,199.768z" data-original="#C3DDF4" class=""/><path style="fill:#AEC1ED;" d="M99.524,200.91v-66.525c0-2.75,2.25-5,5-5H84.682c-2.75,0-5,2.25-5,5v66.525c0,2.75,2.25,5,5,5  h19.842C101.774,205.91,99.524,203.66,99.524,200.91z" data-original="#AEC1ED" class=""/><path style="fill:#7176BF" d="M424.699,84.983H25.457c-1.684,0-3.061,1.377-3.061,3.062v21.953H427.76V88.045  C427.76,86.36,426.382,84.983,424.699,84.983z" data-original="#FFAF10" class="active-path" data-old_color="#FFAF10"/><path style="fill:#7176BF" d="M45.3,84.983H25.457c-1.684,0-3.061,1.377-3.061,3.062v21.953h19.842V88.045  C42.239,86.36,43.616,84.983,45.3,84.983z" data-original="#FF9518" class="" data-old_color="#FF9518"/><g>
                                    <path style="fill:#7176BF" d="M171.504,238.979h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17   c4.142,0,7.5,3.357,7.5,7.5S175.646,238.979,171.504,238.979z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                    <path style="fill:#7176BF" d="M171.504,263.466h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17   c4.142,0,7.5,3.357,7.5,7.5C179.004,260.108,175.646,263.466,171.504,263.466z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                    <path style="fill:#7176BF" d="M171.504,287.953h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17   c4.142,0,7.5,3.357,7.5,7.5S175.646,287.953,171.504,287.953z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                    <path style="fill:#7176BF" d="M237.56,238.979h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326   c4.142,0,7.5,3.357,7.5,7.5S241.702,238.979,237.56,238.979z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                    <path style="fill:#7176BF" d="M237.56,263.466h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326   c4.142,0,7.5,3.357,7.5,7.5C245.06,260.108,241.702,263.466,237.56,263.466z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                    <path style="fill:#7176BF" d="M237.56,287.953h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326   c4.142,0,7.5,3.357,7.5,7.5S241.702,287.953,237.56,287.953z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                </g><path style="fill:#445EA0;" d="M504,198.768c4.4,0,8,3.6,8,8v241.77c0,4.4-3.6,8-8,8H323.856c-4.4,0-8-3.6-8-8v-241.77  c0-4.4,3.6-8,8-8L504,198.768L504,198.768z" data-original="#445EA0" class=""/><path style="fill:#FFFFFF;" d="M337.567,425.125c-2.75,0-5-2.25-5-5V219.18c0-2.75,2.25-5,5-5H490.29c2.75,0,5,2.25,5,5v200.945  c0,2.75-2.25,5-5,5H337.567z" data-original="#FFFFFF" class=""/><path style="fill:#D9EAFC;" d="M352.409,420.125V219.18c0-2.75,2.25-5,5-5h-19.842c-2.75,0-5,2.25-5,5v200.945c0,2.75,2.25,5,5,5  h19.842C354.659,425.125,352.409,422.875,352.409,420.125z" data-original="#D9EAFC" class=""/><path style="fill:#445EA0;" d="M404.567,445.125c-2.75,0-5-2.25-5-5v-1.945c0-2.75,2.25-5,5-5h18.723c2.75,0,5,2.25,5,5v1.945  c0,2.75-2.25,5-5,5H404.567z" data-original="#445EA0" class=""/><path style="fill:#7176BF" d="M495.29,233.473V219.18c0-2.75-2.25-5-5-5H337.567c-2.75,0-5,2.25-5,5v14.293L495.29,233.473  L495.29,233.473z" data-original="#FFAF10" class="active-path" data-old_color="#FFAF10"/><path style="fill:#7176BF" d="M357.409,214.18h-19.842c-2.75,0-5,2.25-5,5v14.293h19.842V219.18  C352.409,216.43,354.659,214.18,357.409,214.18z" data-original="#FF9518" class="" data-old_color="#FF9518"/><g>
                                    <path style="fill:#7176BF" d="M448.013,324.933h-68.169c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h68.169   c4.142,0,7.5,3.357,7.5,7.5C455.513,321.575,452.155,324.933,448.013,324.933z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                    <path style="fill:#7176BF" d="M448.013,348.06h-68.169c-4.142,0-7.5-3.357-7.5-7.5c0-4.142,3.358-7.5,7.5-7.5h68.169   c4.142,0,7.5,3.358,7.5,7.5C455.513,344.703,452.155,348.06,448.013,348.06z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                    <path style="fill:#7176BF" d="M448.013,371.185h-68.169c-4.142,0-7.5-3.357-7.5-7.5c0-4.142,3.358-7.5,7.5-7.5h68.169   c4.142,0,7.5,3.358,7.5,7.5C455.513,367.828,452.155,371.185,448.013,371.185z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                </g><path style="fill:#C3DDF4;" d="M479.756,292.257c0,2.75-2.25,5-5,5H353.101c-2.75,0-5-2.25-5-5v-41.244c0-2.75,2.25-5,5-5h121.655  c2.75,0,5,2.25,5,5V292.257z" data-original="#C3DDF4" class=""/><path style="fill:#AEC1ED;" d="M367.943,292.257v-41.244c0-2.75,2.25-5,5-5h-19.842c-2.75,0-5,2.25-5,5v41.244c0,2.75,2.25,5,5,5  h19.842C370.193,297.257,367.943,295.007,367.943,292.257z" data-original="#AEC1ED" class=""/><path style="fill:#C3DDF4;" d="M461.757,409.416c0,2.75-2.25,5-5,5H371.1c-2.75,0-5-2.25-5-5v-16.91c0-2.75,2.25-5,5-5h85.657  c2.75,0,5,2.25,5,5L461.757,409.416L461.757,409.416z" data-original="#C3DDF4" class=""/><path style="fill:#AEC1ED;" d="M385.942,409.416v-16.91c0-2.75,2.25-5,5-5H371.1c-2.75,0-5,2.25-5,5v16.91c0,2.75,2.25,5,5,5h19.842  C388.192,414.416,385.942,412.166,385.942,409.416z" data-original="#AEC1ED" class=""/></g> 
                                </svg>
                            </div>
                            <div class="skill-logo">
                                <svg width="70px" height="70px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                    <path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 
                                    7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 
                                    0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 
                                    16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 
                                    35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 
                                    4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 
                                    33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
                                </svg>
                            </div>
                            <div class="skill-logo">
                                <svg width="70px" height="70px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                <path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 
                                14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 
                                7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 
                                69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 
                                0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 
                                1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 
                                111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#7176BF"/>
                                </svg>
                            </div>
                        </div>
                        <h4 class="skill-title">My Current Skill Set</h4>
                        <ul>
                            <li class="skill-desc">JavaScript (ES6+, AJAX, Fetch API)</li>
                            <li class="skill-desc">REST API/JSON</li>
                            <li class="skill-desc">HTML5</li>
                            <li class="skill-desc">CSS3 (Flexbox and Grid)</li>
                            <li class="skill-desc">SASS</li>
                            <li class="skill-desc">Bootstrap 4</li>
                            <li class="skill-desc">JQuery</li>
                            <li class="skill-desc">Version Control (Git)</li>
                            <li class="skill-desc">Babel</li>
                            <li class="skill-desc">SQL</li>
                        </ul>
                        <h4 class="skill-title">Currently Learning</h4>
                        <ul>
                            <li class="skill-desc">React/Redux</li>
                            <li class="skill-desc">Node.js</li>
                            <li class="skill-desc">Express.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `);
    $('.skill-container').fadeTo(1000,1);
    }, 1000);
});

// Click 'View Skill Set' button from projects page to go back to skills

$(document).on("click", "#skillsFromProjectsBtn", function() {
    $('.project-container').fadeTo(1000,0);
    $('#skillsButton').attr('disabled', 'disabled');
    setTimeout(()=> {
    $('body').html(`
    <div class="skill-page-container">
        <div class="prev-btn-container">
            <button id="homeButton">Back to Home</button>
            <button id="projectFromSkillsBtn">View Projects</button>
        </div>
        <div class="skill-container">
            <div class="about-me">
                <div class="skill-logo">
                    <img src="./images/seth_headshot.jpg" alt="photo of Seth Feingold" height="85px" width="85px" style="border-radius:50%">
                </div>
                <h4 class="skill-title">About Me</h4>
                <br/>
                <p class="skill-desc">I'm a self-taught web developer focused on learning front-end technologies such as React, Redux, and VueJS. I am currently seeking opportunities for a junior web developer position in order to continue learning and adding to my skill set. I believe that building and contributing to projects is the best way to learn programming, thus I'm seeking to get as much hands-on experience as possible.</p>
                <br/>
                <p class="skill-desc">In my own projects I strive to implement a modern, mobile-first approach in order to ensure that they display correctly on any device regardless of screen width and maintain cross-browser compatibility.</p>
            </div>

            <div class="skill-list">
                <div class="skills-wrapper">
                    <div class="logo-wrapper">
                        <div class="skill-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="70px" height="70px" class=""><g><circle style="fill:#69CDFF;" cx="267" cy="256" r="245" data-original="#69CDFF" class=""/><rect x="185.72" y="358.53" style="fill:#445EA0;" width="78.71" height="41.23" data-original="#445EA0" class=""/><rect x="185.72" y="358.53" style="fill:#2E4C89;" width="19.842" height="41.23" data-original="#2E4C89"/><path style="fill:#293D7C;" d="M316.856,398.763H127.56c-2.806,0-5.101,2.296-5.101,5.102v25.571c0,2.806,2.296,5.102,5.101,5.102  h189.296L316.856,398.763L316.856,398.763z" data-original="#293D7C" class=""/><path style="fill:#1A2B63;" d="M142.301,429.435v-25.571c0-2.806,2.296-5.102,5.102-5.102H127.56c-2.806,0-5.101,2.296-5.101,5.102  v25.571c0,2.806,2.296,5.102,5.101,5.102h19.842C144.597,434.537,142.301,432.241,142.301,429.435z" data-original="#1A2B63" class=""/><path style="fill:#293D7C;" d="M445.054,58.964H5.102C2.296,58.964,0,61.26,0,64.066V354.43c0,2.807,2.296,5.102,5.102,5.102  h311.754V206.768c0-3.859,3.14-7,7-7h126.3V64.066C450.156,61.26,447.86,58.964,445.054,58.964z" data-original="#293D7C" class=""/><path style="fill:#FFFFFF;" d="M22.396,308.514c0,1.684,1.377,3.06,3.061,3.06h291.399V206.768c0-3.859,3.14-7,7-7H427.76v-90.77  H22.396V308.514z" data-original="#FFFFFF" class=""/><path style="fill:#D9EAFC;" d="M42.239,308.514V108.998H22.396v199.516c0,1.684,1.377,3.06,3.061,3.06H45.3  C43.616,311.574,42.239,310.197,42.239,308.514z" data-original="#D9EAFC" class=""/><circle style="fill:#445EA0;" cx="225.08" cy="335.46" r="13.774" data-original="#445EA0" class=""/><path style="fill:#C3DDF4;" d="M316.856,223.146h-53.424c-1.65,0-3,1.35-3,3v59.639c0,1.65,1.35,3,3,3h53.424V223.146z" data-original="#C3DDF4" class=""/><path style="fill:#AEC1ED;" d="M280.274,285.785v-59.639c0-1.65,1.35-3,3-3h-19.842c-1.65,0-3,1.35-3,3v59.639c0,1.65,1.35,3,3,3  h19.842C281.624,288.785,280.274,287.435,280.274,285.785z" data-original="#AEC1ED" class=""/><path style="fill:#C3DDF4;" d="M323.856,199.768h46.618v-65.382c0-2.75-2.25-5-5-5H84.682c-2.75,0-5,2.25-5,5v66.525  c0,2.75,2.25,5,5,5h232.233C317.339,202.455,320.288,199.768,323.856,199.768z" data-original="#C3DDF4" class=""/><path style="fill:#AEC1ED;" d="M99.524,200.91v-66.525c0-2.75,2.25-5,5-5H84.682c-2.75,0-5,2.25-5,5v66.525c0,2.75,2.25,5,5,5  h19.842C101.774,205.91,99.524,203.66,99.524,200.91z" data-original="#AEC1ED" class=""/><path style="fill:#7176BF" d="M424.699,84.983H25.457c-1.684,0-3.061,1.377-3.061,3.062v21.953H427.76V88.045  C427.76,86.36,426.382,84.983,424.699,84.983z" data-original="#FFAF10" class="active-path" data-old_color="#FFAF10"/><path style="fill:#7176BF" d="M45.3,84.983H25.457c-1.684,0-3.061,1.377-3.061,3.062v21.953h19.842V88.045  C42.239,86.36,43.616,84.983,45.3,84.983z" data-original="#FF9518" class="" data-old_color="#FF9518"/><g>
                                <path style="fill:#7176BF" d="M171.504,238.979h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17   c4.142,0,7.5,3.357,7.5,7.5S175.646,238.979,171.504,238.979z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                <path style="fill:#7176BF" d="M171.504,263.466h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17   c4.142,0,7.5,3.357,7.5,7.5C179.004,260.108,175.646,263.466,171.504,263.466z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                <path style="fill:#7176BF" d="M171.504,287.953h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17   c4.142,0,7.5,3.357,7.5,7.5S175.646,287.953,171.504,287.953z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                <path style="fill:#7176BF" d="M237.56,238.979h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326   c4.142,0,7.5,3.357,7.5,7.5S241.702,238.979,237.56,238.979z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                <path style="fill:#7176BF" d="M237.56,263.466h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326   c4.142,0,7.5,3.357,7.5,7.5C245.06,260.108,241.702,263.466,237.56,263.466z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                <path style="fill:#7176BF" d="M237.56,287.953h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326   c4.142,0,7.5,3.357,7.5,7.5S241.702,287.953,237.56,287.953z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                            </g><path style="fill:#445EA0;" d="M504,198.768c4.4,0,8,3.6,8,8v241.77c0,4.4-3.6,8-8,8H323.856c-4.4,0-8-3.6-8-8v-241.77  c0-4.4,3.6-8,8-8L504,198.768L504,198.768z" data-original="#445EA0" class=""/><path style="fill:#FFFFFF;" d="M337.567,425.125c-2.75,0-5-2.25-5-5V219.18c0-2.75,2.25-5,5-5H490.29c2.75,0,5,2.25,5,5v200.945  c0,2.75-2.25,5-5,5H337.567z" data-original="#FFFFFF" class=""/><path style="fill:#D9EAFC;" d="M352.409,420.125V219.18c0-2.75,2.25-5,5-5h-19.842c-2.75,0-5,2.25-5,5v200.945c0,2.75,2.25,5,5,5  h19.842C354.659,425.125,352.409,422.875,352.409,420.125z" data-original="#D9EAFC" class=""/><path style="fill:#445EA0;" d="M404.567,445.125c-2.75,0-5-2.25-5-5v-1.945c0-2.75,2.25-5,5-5h18.723c2.75,0,5,2.25,5,5v1.945  c0,2.75-2.25,5-5,5H404.567z" data-original="#445EA0" class=""/><path style="fill:#7176BF" d="M495.29,233.473V219.18c0-2.75-2.25-5-5-5H337.567c-2.75,0-5,2.25-5,5v14.293L495.29,233.473  L495.29,233.473z" data-original="#FFAF10" class="active-path" data-old_color="#FFAF10"/><path style="fill:#7176BF" d="M357.409,214.18h-19.842c-2.75,0-5,2.25-5,5v14.293h19.842V219.18  C352.409,216.43,354.659,214.18,357.409,214.18z" data-original="#FF9518" class="" data-old_color="#FF9518"/><g>
                                <path style="fill:#7176BF" d="M448.013,324.933h-68.169c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h68.169   c4.142,0,7.5,3.357,7.5,7.5C455.513,321.575,452.155,324.933,448.013,324.933z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                <path style="fill:#7176BF" d="M448.013,348.06h-68.169c-4.142,0-7.5-3.357-7.5-7.5c0-4.142,3.358-7.5,7.5-7.5h68.169   c4.142,0,7.5,3.358,7.5,7.5C455.513,344.703,452.155,348.06,448.013,348.06z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                                <path style="fill:#7176BF" d="M448.013,371.185h-68.169c-4.142,0-7.5-3.357-7.5-7.5c0-4.142,3.358-7.5,7.5-7.5h68.169   c4.142,0,7.5,3.358,7.5,7.5C455.513,367.828,452.155,371.185,448.013,371.185z" data-original="#5DC1D8" class="" data-old_color="#5DC1D8"/>
                            </g><path style="fill:#C3DDF4;" d="M479.756,292.257c0,2.75-2.25,5-5,5H353.101c-2.75,0-5-2.25-5-5v-41.244c0-2.75,2.25-5,5-5h121.655  c2.75,0,5,2.25,5,5V292.257z" data-original="#C3DDF4" class=""/><path style="fill:#AEC1ED;" d="M367.943,292.257v-41.244c0-2.75,2.25-5,5-5h-19.842c-2.75,0-5,2.25-5,5v41.244c0,2.75,2.25,5,5,5  h19.842C370.193,297.257,367.943,295.007,367.943,292.257z" data-original="#AEC1ED" class=""/><path style="fill:#C3DDF4;" d="M461.757,409.416c0,2.75-2.25,5-5,5H371.1c-2.75,0-5-2.25-5-5v-16.91c0-2.75,2.25-5,5-5h85.657  c2.75,0,5,2.25,5,5L461.757,409.416L461.757,409.416z" data-original="#C3DDF4" class=""/><path style="fill:#AEC1ED;" d="M385.942,409.416v-16.91c0-2.75,2.25-5,5-5H371.1c-2.75,0-5,2.25-5,5v16.91c0,2.75,2.25,5,5,5h19.842  C388.192,414.416,385.942,412.166,385.942,409.416z" data-original="#AEC1ED" class=""/></g> 
                            </svg>
                        </div>
                        <div class="skill-logo">
                            <svg width="70px" height="70px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                <path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 
                                7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 
                                0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 
                                16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 
                                35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 
                                4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 
                                33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
                            </svg>
                        </div>
                        <div class="skill-logo">
                            <svg width="70px" height="70px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                            <path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 
                            14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 
                            7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 
                            69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 
                            0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 
                            1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 
                            111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#7176BF"/>
                            </svg>
                        </div>
                    </div>
                    <h4 class="skill-title">My Current Skill Set</h4>
                    <ul>
                        <li class="skill-desc">JavaScript (ES6+, AJAX, Fetch API)</li>
                        <li class="skill-desc">REST API/JSON</li>
                        <li class="skill-desc">HTML5</li>
                        <li class="skill-desc">CSS3 (Flexbox and Grid)</li>
                        <li class="skill-desc">SASS</li>
                        <li class="skill-desc">Bootstrap 4</li>
                        <li class="skill-desc">JQuery</li>
                        <li class="skill-desc">Version Control (Git)</li>
                        <li class="skill-desc">Babel</li>
                        <li class="skill-desc">SQL</li>
                    </ul>
                    <h4 class="skill-title">Currently Learning</h4>
                    <ul>
                        <li class="skill-desc">React/Redux</li>
                        <li class="skill-desc">Node.js</li>
                        <li class="skill-desc">Express.js</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `);
    $('.skill-container').fadeTo(1000,1);
    }, 1000);
});

// Click 'View Projects' button from home to view projects section

$(document).on("click", "#projectsButton", function() {
    $('.hero').fadeTo(1000,0);
    $('#skillsButton').attr('disabled', 'disabled');
    setTimeout(()=> {
    $('body').html(`
        <div class="projects-page-container">
            <div class="prev-btn-container">
                <button id="homeButton">Back to Home</button>
                <button id="skillsFromProjectsBtn">View Skill Set</button>
            </div>
            <div class="project-container">
                <div class="project-card">
                    <h4 class="project-title">Web App Dashboard</h4>
                    <a href="https://sethfeingold.github.io/webapp-dashboard" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/webapp-dashboard.jpeg" alt="webapp dashboard screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">This project uses the browser's local storage in order to save user preferences such as email notifications, public profile options, and the user's timezone.
                    <br/><br/>I used the open-source ChartJS library in order to display dynamic graphs of hourly, daily, weekly, and monthly traffic.
                    <br/><br/>In the 'Message User' section, the user searchbar allows you to filter through the 'members' list and use the arrow keys to navigate up or down the list. Pressing enter will select the desired user.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Employee Directory</h4>
                    <a href="https://sethfeingold.github.io/employee-directory-using-api" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/employee-directory.jpeg" alt="employee directory screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">A mock employee directory which calls the RandomUser API and displays information for 12 random employees each time the page loads.
                    <br/><br/>Clicking on an employee card opens a modal window that displays more detailed information such as their phone number, address, and birthday. The search bar at the top allows employees to be filtered by name.
                    <br/><br/>This project was my first introduction to JavaScript's Fetch API and using promises to handle asynchronous operations.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Word Guessing Game</h4>
                    <a href="https://sethfeingold.github.io/word-guessing-game" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/word-guessing-game.jpeg" alt="word guessing game screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">A simple interactive game in which the player has 5 chances to guess a randomly generated phrase.
                    <br/><br/>Wrong guesses will take a heart away from the 'health bar' at the bottom, and letters which have already been chosen will be highlighted.
                    <br/><br/>This was my first project created with JavaScript, and completing it successfully gave me a lot of motivation to continue learning how to program.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Responsive Web Form</h4>
                    <a href="https://sethfeingold.github.io/tech-degree-project-3" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/responsive-web-form.jpeg" alt="responsive web form screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">This is a mobile-responsive web form which mimics a newsletter sign-up page.
                    <br/><br/>Forms are a recurring part of front end web development, and it's crucial to make sure that a web form is mobile-responsive. 
                    <br/><br/>Mobile-responsiveness ensures that visitors and customers alike can easily fill out their information regardless of the device they are using - whether it's a phone, tablet, laptop, or desktop computer.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Interactive Gallery</h4>
                    <a href="https://sethfeingold.github.io/tech-degree-project-5" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/interactive-gallery.jpeg" alt="interactive photo gallery screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">This is an interactive photo gallery, similar to what an artist or a photographer would use to display photos on their website.
                    <br/><br/>The project uses two jQuery plugins - one called FancyBox and one called HideSeek.
                    <br/><br/>FancyBox allows you to click on any photo to view it in detail, as well as navigate forward and back through the photo gallery.
                    <br/><br/>HideSeek lets you to type into a searchbox to filter through the photos by their titles and descriptions.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Personal Blog Page</h4>
                    <a href="https://sethfeingold.github.io/tech-degree-project-1" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/personal-page.jpeg" alt="personal blog page screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">A personal profile page that showcases some of my learning goals, work experience, and some of the places my previous job took me.
                    <br/><br/>This was the first project I created as part of the Tech Degree offered by Team Treehouse, an online learning platform which teaches both front-end and full-stack JavaScript development.
                    <br/><br/>Although I had played around with HTML and CSS before creating this project, this was my introduction to stucturing and styling a proper web page, complete with nav links, SVG icons that link to my external social media pages, and a cohesive design.</p>
                </div>
            </div>
        </div>
    `);
    $('.project-container').fadeTo(1000,1);
    }, 1000);
});

// Click 'View Projects' button from skills section to view projects section

$(document).on("click", "#projectFromSkillsBtn", function() {
    $('.skill-container').fadeTo(1000,0);
    $('#skillsButton').attr('disabled', 'disabled');
    setTimeout(()=> {
        $('body').html(`
        <div class="projects-page-container">
            <div class="prev-btn-container">
                <button id="homeButton">Back to Home</button>
                <button id="skillsFromProjectsBtn">View Skill Set</button>
            </div>
            <div class="project-container">
                <div class="project-card">
                    <h4 class="project-title">Web App Dashboard</h4>
                    <a href="https://sethfeingold.github.io/webapp-dashboard" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/webapp-dashboard.jpeg" alt="webapp dashboard screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">This project uses the browser's local storage in order to save user preferences such as email notifications, public profile options, and the user's timezone.
                    <br/><br/>I used the open-source ChartJS library in order to display dynamic graphs of hourly, daily, weekly, and monthly traffic.
                    <br/><br/>In the 'Message User' section, the user searchbar allows you to filter through the 'members' list and use the arrow keys to navigate up or down the list. Pressing enter will select the desired user.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Employee Directory</h4>
                    <a href="https://sethfeingold.github.io/employee-directory-using-api" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/employee-directory.jpeg" alt="employee directory screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">A mock employee directory which calls the RandomUser API and displays information for 12 random employees each time the page loads.
                    <br/><br/>Clicking on an employee card opens a modal window that displays more detailed information such as their phone number, address, and birthday. The search bar at the top allows employees to be filtered by name.
                    <br/><br/>This project was my first introduction to JavaScript's Fetch API and using promises to handle asynchronous operations.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Word Guessing Game</h4>
                    <a href="https://sethfeingold.github.io/word-guessing-game" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/word-guessing-game.jpeg" alt="word guessing game screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">A simple interactive game in which the player has 5 chances to guess a randomly generated phrase.
                    <br/><br/>Wrong guesses will take a heart away from the 'health bar' at the bottom, and letters which have already been chosen will be highlighted.
                    <br/><br/>This was my first project created with JavaScript, and completing it successfully gave me a lot of motivation to continue learning how to program.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Responsive Web Form</h4>
                    <a href="https://sethfeingold.github.io/tech-degree-project-3" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/responsive-web-form.jpeg" alt="responsive web form screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">This is a mobile-responsive web form which mimics a newsletter sign-up page.
                    <br/><br/>Forms are a recurring part of front end web development, and it's crucial to make sure that a web form is mobile-responsive. 
                    <br/><br/>Mobile-responsiveness ensures that visitors and customers alike can easily fill out their information regardless of the device they are using - whether it's a phone, tablet, laptop, or desktop computer.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Interactive Gallery</h4>
                    <a href="https://sethfeingold.github.io/tech-degree-project-5" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/interactive-gallery.jpeg" alt="interactive photo gallery screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">This is an interactive photo gallery, similar to what an artist or a photographer would use to display photos on their website.
                    <br/><br/>The project uses two jQuery plugins - one called FancyBox and one called HideSeek.
                    <br/><br/>FancyBox allows you to click on any photo to view it in detail, as well as navigate forward and back through the photo gallery.
                    <br/><br/>HideSeek lets you to type into a searchbox to filter through the photos by their titles and descriptions.</p>
                </div>

                <div class="project-card">
                    <h4 class="project-title">Personal Blog Page</h4>
                    <a href="https://sethfeingold.github.io/tech-degree-project-1" target="_blank" class="project-link">
                        <img class="project-image" src="./images/project-images/personal-page.jpeg" alt="personal blog page screenshot" width="250px" height="250px">
                    </a>
                    <p class="project-desc">A personal profile page that showcases some of my learning goals, work experience, and some of the places my previous job took me.
                    <br/><br/>This was the first project I created as part of the Tech Degree offered by Team Treehouse, an online learning platform which teaches both front-end and full-stack JavaScript development.
                    <br/><br/>Although I had played around with HTML and CSS before creating this project, this was my introduction to stucturing and styling a proper web page, complete with nav links, SVG icons that link to my external social media pages, and a cohesive design.</p>
                </div>
            </div>
        </div>
    `);
    $('.project-container').fadeTo(1000,1);
    }, 1000);
});

// Click 'Back to Home' button to go back to front page

$(document).on("click", "#homeButton", function() {
    $('.project-container').fadeTo(800,0);
    $('.skill-container').fadeTo(800,0);
    $('.hero').fadeTo(1200,1);
    setTimeout( () => {
        location.reload(true);
    }, 800);
});
