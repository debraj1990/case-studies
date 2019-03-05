'use strict';

module.exports = function (Cart) {
  Cart.beforeRemote('create', function (context, user, next) {
    // context.args.data.date = Date.now();
    // context.args.data.publisherId = context.req.accessToken.userId;
    console.log('============');
    console.log(context.req.body.products[0]);
    // console.log(Cart.app.models);
    // next();
  });
};
