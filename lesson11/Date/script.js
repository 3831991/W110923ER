function showCurrentTime() {
    const now = new Date();

    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const result = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    document.querySelector('.time').innerHTML = result;
}

showCurrentTime();

setInterval(showCurrentTime, 1000);