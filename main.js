$('#skillsButton').click(function(){
    $('.hero').fadeTo(1000,0);
    $('#skillsButton').attr('disabled', 'disabled');
    setTimeout(()=> {
    $('body').html(`
        <div class="skill-container">
            <div class="skill-one">
                <h4>HTML and CSS</h4>
                <p>Creating mobile responsive websites using CSS Grid and Flexbox</p>
                <p>Using CSS Frameworks such as Bootstrap 4 for quick and simple implementations</p>
                <p>CSS Preprocessing with Sass</p>
            </div>

            <div class="skill-two">
                <h4>JavaScript and JQuery</h4>
            </div>

            <div class="skill-three">
                <h4>Version Control with GitHub</h4>
            </div>
        </div>
    `);
    $('.skill-container').fadeTo(1000,1);
    }, 1000)
  });
