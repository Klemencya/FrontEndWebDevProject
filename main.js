window.onload = getIDFromURL()

async function getIDFromURL(email = 'm.sidorskaya@innopolis.university') {
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
    let data = await response.json();

    const pic = document.getElementById('picture');
    const picText = document.getElementById('picTitle');
    const picDate = document.getElementById('picDate');
    const altText = document.getElementById('altText');

    pic.alt = data.alt;
    altText.innerText = data.alt;
    pic.src = data.img;
    picText.innerText = data.title;

    let date = new Date(data.year, data.month, data.day);
    picDate.innerText = date.toLocaleDateString();
}
