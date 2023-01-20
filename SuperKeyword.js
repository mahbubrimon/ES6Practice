class parent {
    hello1(){
        console.log('Hello world');
    }
    hello2(){
        console.log('Hello world two');
    }
}
class child extends parent{
demo(){
    super.hello1();
    super.hello2();
}
}
var obj=new child();
obj.demo();


