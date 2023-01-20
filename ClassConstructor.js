// class ClassConstructor {
//     constructor() {
//     console.log('Hello My Name Is mahbub')
//     }
// }
// new ClassConstructor();

class ClassConstructor {
    constructor(a,b,c) {
    this.prothom =a
    this.ditio=b
        this.titio=c
}
add(){
        let result=this.prothom-this.ditio+this.titio;
        console.log(result)
}
}
let obj=new ClassConstructor(35,25,36);
obj.add();





