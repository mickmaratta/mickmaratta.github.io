const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

let mouse = {
    x: undefined,
    y: undefined
};

let maxRadius = 40;

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});
 
let colorArray = [
    '#FF8C8A',
    '#FF7F11',
    '#BDFFD1',
    '#FF54BE',
    '#8EBF9C',
 ]

function Circle(x, y, dx, dy, radius, minRadius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * 5)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 3, false);
        c.fillStyle = this.color;
        c.fill();
    };

    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
};


let circleArray = [];
function init() {
    circleArray = [];
    for (let i=0; i<30; i++) {
        //Circle size
        let radius = Math.floor(Math.random() * 3 + 1.6);
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        //Control speed
        let dx = (Math.random() - 0.5) * 0.5;
        let dy = (Math.random() - 0.5) * 0.5;
        circleArray.push(new Circle(x, y , dx, dy, radius));
    };
};

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0 , innerWidth, innerHeight);
    
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
};

init();
animate();