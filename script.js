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
        this.hitcnt=0;
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
        this.xpos+=this.dx;
        this.ypos+=this.dy;
        if(this.xpos>c1/2)
            this.dx=-this.dx        
        if(this.xpos<10)
        {
            if(this.ypos>rect.ypos && this.ypos<rect.ypos+100)
            {
                this.dx=-this.dx;        
                this.dy=rect.dy;
                this.hitcnt+=1;
            }
        }
        if(this.ypos>c2)
            this.dy=-this.dy        
        if(this.ypos<0)
            this.dy=-this.dy        
        this.draw(context);
    }
}
function moveBall()
{
    context.clearRect(10,0,c1/2,c2);
    requestAnimationFrame(moveBall);
    ball.update();
}
class Rectangle
{
    constructor(xpos,ypos,width,height,speed)
    {
        this.xpos=xpos;
        this.ypos=ypos;
        this.width=width;
        this.height=height;
        this.speed=speed;
        this.dy=speed;
    }
    keychange(y)
    {
        this.dy=y;
    }
    draw(context)
    {
        context.fillStyle='white';
        context.fillRect(this.xpos,this.ypos,this.width,this.height);
    }
    update()
    {
        this.ypos+=this.dy;
        if(this.ypos+100>c2)
            this.ypos-=this.dy;
        if(this.ypos<0)
            this.ypos-=this.dy;
        this.draw(context);
    }
}
function moveRectangle()
{
    context.clearRect(0,0,10,c2);
    requestAnimationFrame(moveRectangle);
    rect.update();
}
let ball=new Circle(c1/4,c2/2,2,'white',2);
ball.draw(context);
moveBall();
let y=1;
let rect=new Rectangle(1,1,10,100,0);
rect.draw(context);
moveRectangle();

document.addEventListener('keypress',(e)=>{
    switch(e.key)
    {
        case 'w':y=3;
        console.log('w');
        break;
        case 's':y=-3;
        console.log('s');
        break;
        default : y=0;
        break;
    }
    rect.keychange(y);
})
function gameOver()
{
    console.log(ball.hitcnt);
}