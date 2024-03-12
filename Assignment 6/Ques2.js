// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class shape{
    width;
    height;
    constructor(w,h)
    {
        this.width=w;
        this.height=h;
    }
    getArea(){
        
    }
    
};

class Rectangle extends shape{
    constructor(w,h)
    {
        super(w,h);
    }
    getArea()
    {
        return this.height*this.width;
    }

}
const Rect=new Rectangle(10,20);
console.log(Rect.getArea());

class Triangle extends shape{
    constructor(w,h)
    {
        super(w,h);
    }
    getArea()
    {
        return 0.5*this.width*this.height;
    }

}

const tri=new Triangle(10,20);
console.log(tri.getArea());
