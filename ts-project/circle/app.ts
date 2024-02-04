function getRandomColor():string{
    const hue: number = Math.floor(Math.random() * 361);
    const saturation: number = 100;
    const lightness: number = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getRandomSize(min: number, max:number):number{
    return Math.random() * (max - min ) + min;
}


function createCircle(): HTMLDivElement {
    const circle: HTMLDivElement = document.createElement('div');
    const size: number = getRandomSize(10,200);
    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = getRandomColor();
    return circle;
}

let currentCircle = createCircle() as HTMLDivElement;
document.body.appendChild(currentCircle);

document.addEventListener("mousemove", (e: MouseEvent)=>{
    currentCircle.style.left = `${e.clientX - currentCircle.offsetWidth / 2}px`;
    currentCircle.style.top = `${e.clientY - currentCircle.offsetHeight / 2}px`;
});

document.body.addEventListener('click', (e: MouseEvent)=> {
    currentCircle = createCircle();
    currentCircle.style.left = `${
        e.clientX - parseFloat(currentCircle.style.width) / 2
    }px`;
    currentCircle.style.top = `${
        e.clientY - parseFloat(currentCircle.style.height) / 2
    }px`;

    document.body.appendChild(currentCircle)
});
