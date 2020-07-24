console.log("THIS IS second QUESTION !!")

class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.course=[];
    }

    Login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }

    
