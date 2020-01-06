$('#skillsButton').click(function(){
    $('.hero-container').fadeTo(1000,0);
    $('.button-container').fadeTo(1000,0);
    $('#skillsButton').attr('disabled', 'disabled');
    setTimeout(()=> {
    $('.hero-container').html(`
        <div class="skill-container">
            <div class="skill-one">
                <p>HTML and CSS</p>
            </div>

            <div class="skill-two">
                <p>JavaScript and JQuery</p>
            </div>

            <div class="skill-three">
                <p>Version Control with GitHub</p>
            </div>
        </div>
    `);
    $('.hero-container').fadeTo(1000,1);
    }, 1000)
  });
