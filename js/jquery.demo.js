// line below loads jquery so it can be used in this file
$(function () {
    const topHeader = $('section h1');
    console.log(topHeader);

    const sections = $('section');
    console.log(sections);

    const currentSection = sections.find('.current');
    console.log(currentSection);

    const h3 = $(sections).find('h3');
    const h2Div = $(sections).find('h2.highlight').parent();
    console.log(h3);
    console.log(h2Div);

    $('#pageButton').click(function (event) {
        const btn = $(this);
        btn.addClass('red');
    });

    $("#content")
        .find("h3")
        .eq(2)
        .html("new text for the third h3!")
        .end() // Restores the selection to all h3s in #content
        .eq(0)
        .html("new text for the first h3!");

    // html form exercise below:

    $('#submit').click(function (event) {
        const submitBtn = $(this);
        const nameInput = $('#name');
        const emailInput = $('#email');
        const phoneInput = $('#phone');
        const messageInput = $('#message');
        const errors = $('.errors');

        const requiredArray = [nameInput, emailInput, phoneInput];

        for (let requiredInput of requiredArray) {
            if (requiredInput.val() === '') {
                errors.text('Please fill out required fields!');
                errors.addClass('warning');
                requiredInput.prev().addClass('warning');
            }
            else {
                requiredInput.prev().removeClass('warning');
            }
        }

        $('input[type="text"], #phone, #email').change(function (event) {
            const inputBox = $(this);

            if (inputBox.val() !== '' && inputBox.prev().hasClass('warning')) {
                inputBox.prev().removeClass('warning');
            }
        });

        // the above is equivalent to the below loop:

/*        for (let index = 0; index < requiredArray.length; ++index) {
            if (requiredArray[index].val() === '') {
                errors.text('Please fill out required fields!');
                errors.addClass('warning');
                requiredArray[index].prev().addClass('warning');
            }
            else {
                requiredArray[index].prev().removeClass('warning');
            }
        }*/

        if ($('#form label').hasClass('warning') === false) {
            $('#form')[0].remove();
            $('#pre-form h2').text('Thanks for your feedback!');
        }
    });


    // animation slide demo:

    $('#box').fadeOut(); //Animate fade out
    $('#box').fadeIn(); //Animate fadeIn
    $('#box').slideUp('slow'); //Slide and remove element
    $("#box").animate({
     // Custom effects with .animate()
        opacity: 0.25
    }, 300,  // Duration
        function () {
            console.log("done!"); //Callback to invoke when the animation is finished
    });

});

