import { Bubble } from './main.animation.models';

let offsetX = 0;
let offsetY = 0;
let mouseX = 0;
let mouseY = 0;
const bubbles: Array<Bubble> = [];

export const initMainAnimation = (ctx: CanvasRenderingContext2D) => {

    initValues(ctx);

    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const circle = drawCircle(ctx);

    const resetBubbleAtIndex = resetBubble(ctx);
    // Animate bubbles
    for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        const { coordinates, step, radius } = bubble;
        coordinates.y = coordinates.y - step;
        // bubble.coordinates.x = Math.floor(Math.random() * bubble.coordinates.x);
        if (coordinates.y <= 0) {
            resetBubbleAtIndex(i);
        }
        circle(coordinates.x, coordinates.y, radius);
    }

    ctx.canvas.onmousemove = handleMouseMove;

    window.requestAnimationFrame(() => {
        initMainAnimation(ctx);
    });
}

const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    mouseX = e.x - offsetX;
    mouseY = e.y - offsetY;
}

const drawCircle = (ctx: CanvasRenderingContext2D) => (x: number, y: number, radius: number) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#FFF';
    ctx.stroke();
}

const createBubble = (x: number, y: number, radius: number, step: number): Bubble => {
    return {
        coordinates: {
            x,
            y,
        },
        radius,
        step,
    };
}

const resetBubble = (ctx: CanvasRenderingContext2D) => (index: number) => {
    const element = ctx.canvas;
    bubbles[index] = generateBubble(element);
};


const initValues = (ctx: CanvasRenderingContext2D) => {
    // console.log('init values', bubbles.length);
    const element = ctx.canvas;
    element.width = window.innerWidth;
    element.height = window.innerHeight;

    offsetX = element.clientLeft;
    offsetY = element.clientTop;

    const maxBubbles = 10;

    if (bubbles.length >= maxBubbles) {
        return;
    }

    while (bubbles.length < maxBubbles) {
        const bubble = generateBubble(element);
        bubbles.push(bubble);
    }
}

const generateBubble = (canvas: HTMLCanvasElement): Bubble => {
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(canvas.height - 50);
    const radius = (Math.random() * 15) + 10;
    const step = (Math.random() * 0.5) + 1;

    return createBubble(x, y, radius, step);
}
