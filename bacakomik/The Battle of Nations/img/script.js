let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    showSlides();
}

showSlides(); 

function filterGenre(genre) {
    const komikCards = document.querySelectorAll('.komik-card');
    komikCards.forEach(card => {
        const genreTag = card.getAttribute('data-genre');
        if (genre === 'all' || genreTag.includes(genre)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function showTab(tabName) {

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('active'));

    document.querySelector(`.button[onclick="showTab('${tabName}')"]`).classList.add('active');

    const sections = document.querySelectorAll('.details > div');
    sections.forEach(section => section.classList.remove('active'));

    document.querySelector(`.${tabName}`).classList.add('active');
}


const urlParams = new URLSearchParams(window.location.search);

const genre = urlParams.get('genre');


const genreTitle = document.getElementById('genre-title');
const genreContent = document.getElementById('genre-content');

if (genre) {
    genreTitle.innerText = `Genre: ${genre}`;
    genreContent.innerText = `Showing comics for genre: ${genre}`;
} else {
    genreTitle.innerText = "Genre not found";
    genreContent.innerText = "No comics available for this genre.";
}

