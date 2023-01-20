class parent {
    hello1(){
        console.log('Hello world');
    }
    hello2(){
        console.log('Hello world two');
    }
}
class child extends parent{
    hello1(){
        console.log('Hello world i am from child');
    }
}

let obj=new child();
obj.hello1();
obj.hello2();

