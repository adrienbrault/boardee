Handlebars.registerHelper('isUser', isUser);
Handlebars.registerHelper('isAdmin', isAdmin);

Handlebars.registerHelper('isRoute', function (route) {
    var current = Router.current();

    if (!current) {
        return false;
    }

    return current.route.name == route;
});

Handlebars.registerHelper('blockClass', blockClass);
