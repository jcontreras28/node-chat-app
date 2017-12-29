[{
    id: '/#asdfads',
    name: 'Andrew',
    room: 'The Office Fans'
}]

class Users {
    constructor () {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {id,name,room}
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        // return user that was removed
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user; 
    }
    getUser(id) {
        // return user object
        return this.users.filter((user) => user.id === id)[0];
    }
    getUserList(room) {
        // return all user names in room
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};

// class Person {
//     constructor (id, name, room) {
//         this.id = id;
//         this.name = name;
//         this.room = room;
//     }
// }

