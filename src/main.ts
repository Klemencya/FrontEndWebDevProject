type Email = string;
type ID = string;
interface PictureData {
    title : string;
    img : string;
    alt : string;
    year : number;
    month : number;
    day : number;
}

let email = 'm.sidorskaya@innopolis.university'
getIDFromURL(email)

async function getIDFromURL(email: Email) {
    const params = new URLSearchParams({
        email: email
    }).toString();

    let response = await fetch('https://fwd.innopolis.app/api/hw2?' + params);
    const id : ID = await response.json();
    await getPictureUsingID(id)
}

async function getPictureUsingID(id: ID) {

    const params = new URLSearchParams({
        num: id
    }).toString();

    let response = await fetch('https://getxkcd.vercel.app/api/comic?' + params);
    let response_data : PictureData = await response.json();

    const pic = document.getElementById('picture') as HTMLImageElement;
    const picText = document.getElementById('picTitle') as HTMLHeadingElement;
    const picDate = document.getElementById('picDate') as HTMLParagraphElement;
    const altText = document.getElementById('altText') as HTMLParagraphElement;

    pic.alt = response_data.alt;
    altText.innerText = response_data.alt;
    pic.src = response_data.img;
    picText.innerText = response_data.title;

    let date = new Date(response_data.year, response_data.month - 1, response_data.day);
    picDate.innerText = date.toLocaleDateString();
}
