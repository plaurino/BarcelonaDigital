import Base from 'simple-auth/authenticators/base';

var KioskoAuthorizer = Base.extend({
  authorize: function(jqXHR) {
    if (this.get('session.isAuthenticated')) {
      jqXHR.setRequestHeader('Authorization', 'Bearer ' + this.get('session.token'));
    }
  }
});

export default {
  name: 'kiosko-authorizer',
  before: 'simple-auth',
  initialize: function(container) {
    container.register('authorizer:kiosko', KioskoAuthorizer);
  }
};
