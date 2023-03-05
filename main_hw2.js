let email = 'm.sidorskaya@innopolis.university'
window.onload = getIDFromURL(email)

async function getIDFromURL(email) {
    const params = new URLSearchParams({
        email: email
    }).toString();

    let response = await fetch('https://fwd.innopolis.app/api/hw2?' + params);
    const id = await response.json();
    await getPictureUsingID(id)
}

async function getPictureUsingID(id) {

    const params = new URLSearchParams({
        num: id
    }).toString();

    let response = await fetch('https://getxkcd.vercel.app/api/comic?' + params);
    let response_data = await response.json();

    const pic = document.getElementById('picture');
    const picText = document.getElementById('picTitle');
    const picDate = document.getElementById('picDate');
    const altText = document.getElementById('altText');

    pic.alt = response_data.alt;
    altText.innerText = response_data.alt;
    pic.src = response_data.img;
    picText.innerText = response_data.title;

    let date = new Date(response_data.year, response_data.month - 1, response_data.day);
    picDate.innerText = date.toLocaleDateString();
}
