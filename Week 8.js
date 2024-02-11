//just a little starting pop up
window.alert(`Ready to pick some dream teams?!?!?!`);
//first class, to add riders to your teams
class Rider {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    describe() {
        return `${this.name} ${this.number}`
    }
}
//next class, to pick the manufacture teams
class Manufacture {
    constructor(name) {
        this.name = name;
        this.riders = [];
    }


    addRider(riders) {
        if (riders instanceof Rider) {
            this.riders.push(riders);
        }
    }
//forgot to put this description in and everything got so messed up for SO LONG
    describe() {
        return `${this.name} has ${this.riders.length} riders.`
    }
}
//
class Menu {
    constructor() {
        this.manufacture = [];
        this.selectedManufacture = null;
    }
//i don't know why, but it won't work for me unless i put those spaces before the colon
//kept getting the spacing wrong here
    start() {
        let selection = this.mainMenu();
        while (selection != 0) {
            switch (selection) {
                case '1' :
                    this.createManufacture();
                    break;
                case '2' :
                    this.viewManufacture();
                    break;
                case '3' :
                    this.deleteManufacture();
                    break;
                case '4' :
                    this.displayManufacture();
                    break;
                case '5' :
                    this.startDate();
                    break;    
                default:
                    selection = 0;    
            }
            selection = this.mainMenu();        
        }
        alert('Good luck!');
    }
//i think this was the easiest part, once i figured out how selection worked
    mainMenu() {
        return prompt(`
            Welcome! Build your MotoGP fantasy Manufacture team!
            We'll all pretend Rossi still races and Suzuki didn't drop :)
            -----------------------------------------------------
            0 - Exit
            1 - Create Manufacture Dream Team
            2 - View Your Manufacture Team
            3 - Delete A Manufacture Team
            4 - Show All Manufacture Teams
            5 - Special!
        `);
    }

    manufactureMenu(manufactureInfo) {
        return prompt(`
            0 - Back
            1 - Add Rider
            2 - Fire Rider
            -----------------
            ${manufactureInfo}
        `);
    }
//pushing a new team to the array
    createManufacture() {
        let name = prompt('Which Manufacture team are you building?');
        this.manufacture.push(new Manufacture(name));
    }
//this part was super confusing, and i'm not sure i get it 100%, but it started to make sense so that's good enough for me
    viewManufacture() {
        let index = prompt('Which manufacture do you want to look at?');
        if (index > -1 && index < this.manufacture.length) {
            this.selectedManufacture = this.manufacture[index];
            let description = 'Manufacture Name: ' + this.selectedManufacture.name + '\n';

            for (let i = 0; i < this.selectedManufacture.riders.length; i++) {
                description += i + ') ' + this.selectedManufacture.riders[i].name
                    + ' ' + this.selectedManufacture.riders[i].number + '\n';
            }

            let selection = this.manufactureMenu(description);
            switch (selection) {
                case '1' :
                    this.createRider();
                    break;
                case '2' :
                    this.deleteRider();    
            }
        }
    }
//i had to read that if statement aloud like ten times before it made sense
    deleteManufacture() {
        let index = prompt('Which manufacture team is getting the ax?');
        if (index > -1 && index < this.manufacture.length) {
            this.manufacture.splice(index, 1);
        }
    }

    displayManufacture() {
        let manufactureString = '';
        for (let i = 0; i < this.manufacture.length; i++) {
            manufactureString += i+ ') ' + this.manufacture[i].name + '\n';
        }
        alert(manufactureString);
    }
//THESE TWO KILLED ME
//i don't wanna see the word manufacture for a week
    createRider() {
        let name = prompt('Which Rider are you picking?');
        let number = prompt("What's their race number?");
        this.selectedManufacture.riders.push(new Rider(name, number));
    }

    deleteRider() {
        let index = prompt("Who's contract expired?");
        if (index > -1 && index < this.selectedManufacture.riders.length) {
            this.selectedManufacture.riders.splice(index, 1);
        }
    }
//I had to add this in
    startDate() {
        let index = prompt('MotoGP Races start on March 8th!!!!')
    }
}
//and allow the menu to pop up
let menu = new Menu();
menu.start();