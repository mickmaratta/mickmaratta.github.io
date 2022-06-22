const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Circle Colors:
let opacity = 0.25
let colorArray = [
    `hsla(135, 28%, 30%, ${opacity})`,
    `hsla(81, 28%, 37%, ${opacity})`,
    `hsla(196, 26%, 25%, ${opacity})`,
    `hsla(197, 71%, 24%, ${opacity})`,
    `hsla(81, 75%, 35%, ${opacity})`,
 ]

function Circle(x, y, dx, dy, radius, minRadius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

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
    let numOfCircles = 15;
    let circleSize = 70;
    let circleSpeed = 0.3;

    for (let i=0; i<numOfCircles; i++) {
        //Circle size
        let radius = Math.floor(Math.random() * circleSize + 1.6);
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        //Control speed
        let dx = (Math.random() - 0.5) * circleSpeed;
        let dy = (Math.random() - 0.5) * circleSpeed;
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