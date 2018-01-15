const expect = require('expect');
const {Users} = require ('./users');


describe('Users', () => {

	var users;

	beforeEach(() => {
	
	users = new Users;
	users.users = [{
		id: '1',
		name: 'Mike',
		room: 'Room1'
		},
		{
      id: '2',
      name: 'Mike2',
      room: 'Room2'
      },
   	{
      id: '3',
      name: 'Mike3',
      room: 'Room2'
      }]
	});

	it('should add new user to users class', () => {

		var users = new Users();
		var user = {
			id: '123',
			name: 'ed',
			room: 'office'
			};

		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);

	});


	it('it should return names for Room2', () => {

		var userList = users.getUserList('Room2');

		expect(userList).toEqual(['Mike2', 'Mike3']);
	})

	it('it should return names for Room1', () => {

		var userList = users.getUserList('Room1');

		expect(userList).toEqual(['Mike']);
	})

	it('should remove a user', () => {


		var userId = '1';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);

	});

	it('should not remove a user - invalid id', () => {

		var userId = '55';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);

	});


	it('should find user', () => {
		
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);

	})

	it('should not find user - invalid id', () => {
		
		var userId = '6';
		var user = users.getUser(userId);

		expect(user).toNotExist();
	})
});

