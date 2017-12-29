const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'mike',
            room: 'a'
        },{
            id: '2',
            name: 'jen',
            room: 'b'
        },{
            id: '3',
            name: 'julie',
            room: 'a'
        }]
    });

    it('should add new user', () => {
        var users2 = new Users();

        var user = {
            id: '123',
            name: 'Andrew',
            room: 'office fans'
        };

        var resUser = users2.addUser(user.id, user.name, user.room);

        expect(users2.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var usrid = '1';
        var user = users.removeUser(usrid);
        expect(user.id).toBe(usrid);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var usrid = '2222';
        var user = users.removeUser(usrid);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var usrid = '2';
        var user = users.getUser(usrid);
        expect(user.id).toBe(usrid);
    });

    it('should not find user', () => {
        var usrid = '22';
        var user = users.getUser(usrid);
        expect(user).toNotExist();
    });

    it('should return names for room a', () => {
        var userList = users.getUserList('a');

        expect(userList).toEqual(['mike', 'julie']);
    });
    it('should return names for room b', () => {
        var userList = users.getUserList('b');

        expect(userList).toEqual(['jen']);
    });
});