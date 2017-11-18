describe('Testing Names', function() {

  it('will find the first user\'s name', function() {

    cy.fixture('users.json')
    .then(function(users) {
      console.log('users = ', users);
      cy.contains(users[0]);
    });
  });
});