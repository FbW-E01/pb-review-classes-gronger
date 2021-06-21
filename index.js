// 1. Create a class called "Component". The constructor for Component should take in one parameter "name". There should be one method called "render" that prints `<p>Component _name_  rendering` where `_name_`  is the provided name.


class Component {
    constructor(name) {
        this.name = name;
    }

    render() {
        return `Component ${this.name} rendering where ${this.name} is the provided name`;
    }
};

const componentOne = new Component("Component One");
console.log(componentOne);

console.log(componentOne.render());

console.log("----------------------------------------------------------------------------------------------------");

// 2. Create a child class called UserCard that extends Component. The UserCard should take in only one constructor parameter called "user". Expect the user to be an object with "name", "imageUrl" and "email" properties. The UserCard should override the original "render" method. The new render method should print out something like this: 


//         <div class="card card-user">
//             <img class="card-img-top" src="user imageUrl here" alt>
//             <div class="card-body">
//                 <h5 class="card-title">user name here</h5>
//                 <p class="card-text">To contact, please send a message to</p>
//                 <a
//                     href="mailto:user email here"
//                     class="btn btn-primary"
//                 >
//                     user email here
//                 </a>
//             </div>
//         </div>



class UserCard extends Component {
    // imageUrl;
    // email;

    constructor(user) {
        super(user.name);
        this.imageUrl = user.imageUrl;
        this.email = user.email;
    }
}

const billsCard = new UserCard( { name: "Bill Bobson", imageUrl: "www.image.url", email: "bill.bobson@aol.com"} );
console.log(billsCard);

console.log(billsCard.render());

console.log("----------------------------------------------------------------------------------------------------");


// 3. Create an array of at least 5 user objects.

const arrayOfUsers = [
    { name: "Xtina", 
    imageUrl: "www.a.com", 
    email: "xtina1991.hotmail.com" 
},
    { name: "Meryl Smith", 
    imageUrl: "wwww.b.com", 
    email: "merylmeryl@aol.com" 
},
    { name: "Ronald McDonald", 
    imageUrl: "www.mcdnlds.com", 
    email: "ronmcdon@mcdnlds.com" 
},
    { name: "Jim Johansen", 
    imageUrl: "www.jim.com", 
    email: "jim@jim.com" 
},
    { name: "Pea Pod", 
    imageUrl: "www.pea.com", 
    email: "pea@pod.com" 
},
    ];


console.log(arrayOfUsers);

console.log("----------------------------------------------------------------------------------------------------");

// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.

;

// const newUserCardInstances = new UserCard(arrayOfUsers.map(function(user) {
//     return this.user;
// }));

// console.log(newUserCardInstances);


const newUserCardInstances = arrayOfUsers.map(function(something) {
    return new UserCard(something)});


console.log(newUserCardInstances);




console.log("----------------------------------------------------------------------------------------------------");

// 5. Using .forEach(), call the render method of your instances.

const rendered = newUserCardInstances.forEach(function(callback) {
    console.log(callback.render());
});

// console.log(newUserCardInstances[1].render()); // this works!!

console.log(rendered);

// works now i added callback.render() -- problem before was i wasnt using a call back ?


console.log("----------------------------------------------------------------------------------------------------");

// 6. Print the type of the UserCard class.

console.log(typeof UserCard);


console.log("----------------------------------------------------------------------------------------------------");

// 7. Print the type of a UserCard instance.

console.log(typeof billsCard);
console.log(typeof newUserCardInstances);