
function toggleSchool(schoolNumber) {
    console.log("clicked");
    for (var i = 1; i <= 3; i++) {
        var schoolDiv = document.getElementById("school" + i);
        if (i === schoolNumber) {
            schoolDiv.removeAttribute("hidden");
        } else {
            schoolDiv.setAttribute("hidden", "");
        }
    }
}


function toggleTheme() {
    var body = document.body;
    body.classList.toggle("night");
}

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

openNavBtn.addEventListener("click", () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
});
closeNavBtn.addEventListener("click", () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
});


// Find the image element
const image = document.getElementById('myImg');

// Disable context menu for the image
image.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});



var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    delay: 200,
    reset: true
};
var slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: 0,
    delay: 200,
    reset: true
};
var slideBottom = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 200,
    reset: true
};

ScrollReveal().reveal('.home-left-container', slideLeft);
ScrollReveal().reveal('.about-left-container', slideLeft);
ScrollReveal().reveal('.home-right-container', slideRight);
ScrollReveal().reveal('.about-right-container', slideRight);
ScrollReveal().reveal('.inner', slideLeft);
ScrollReveal().reveal('#carouselExampleIndicators', slideRight);
ScrollReveal().reveal('.contact-container', slideLeft);



let rating = 0;
let isCommentSubmitted = false;

function rate(value) {
    if (isCommentSubmitted) {
        return;
    }

    rating = value;
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function submitComment() {
    if (isCommentSubmitted) {
        return;
    }

    const comment = document.getElementById('comment').value;

    if (rating === 0 && comment.trim() === '') {
        alert('Please rate and leave a comment before submitting.');
        return;
    }

    // Display rating and comment
    const ratingComments = document.getElementById('ratingComments');
    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('rating-comment');
    ratingDiv.innerHTML = `
    <p><strong>Rating:</strong> ${rating}</p>
    <p><strong>Comment:</strong> ${comment}</p>`;
    ratingComments.appendChild(ratingDiv);

    // Clear rating and comment input
    rating = 0;
    document.getElementById('comment').value = '';

    // Disable comment section and submit button
    document.getElementById('comment').disabled = true;
    document.getElementById('submitBtn').disabled = true;
    isCommentSubmitted = true;

    // Show rating message
    const ratingMessage = document.querySelector('.rating-message');
    ratingMessage.style.display = 'block';
    ratingMessage.textContent = 'Thank you for your rating and comment!';

    // Disable star rating
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.pointerEvents = 'none';
    });
}
