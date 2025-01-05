let canvs=document.getElementById('my_canvas');
let c1=window.innerWidth;
let c2=window.innerHeight;
canvs.height=c2;
canvs.width=c1/2;
canvs.style.backgroundColor='black';
let context=canvs.getContext('2d');
class Circle
{
    constructor(xpos,ypos,radius,color,speed)
    {
        this.xpos=xpos;
        this.ypos=ypos;
        this.radius=radius;
        this.color=color;
        this.speed=speed;
        this.dx=speed;
        this.dy=speed;
    }
    draw(context)
    {
        context.beginPath();
        context.strokeStyle=this.color;
        context.lineWidth=10;
        context.arc(this.xpos,this.ypos,this.radius,0,Math.PI*2,false);
        context.stroke();
        context.closePath();
    }
    update()
    {
        context.clearRect(0,0,c1/2,c2);
        this.xpos+=this.dx;
        this.ypos+=this.dy;
    if(this.xpos>c1/2)
        this.dx=-this.dx        
    if(this.xpos<0)
        this.dx=-this.dx        
    if(this.ypos>c2)
        this.dy=-this.dy        
    if(this.ypos<0)
        this.dy=-this.dy        
        this.draw(context);
    }
}
function move()
{
    requestAnimationFrame(move);
    ball.update();
}
let ball=new Circle(c1/4,c2/2,2,'white',1);
ball.draw(context);
move();