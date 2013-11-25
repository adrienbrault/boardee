collectionAllowIfUser = function (userId, doc) {
    if (!userId) {
        return false;
    }

    return isUser();
};

collectionAllowIfAdmin = function (userId, doc) {
    console.log('supHHHH');
    if (!userId) {
        return false;
    }

    return isAdmin();
};

isUser = function () {
    var user = Meteor.user();
    if (!user) {
        return false;
    }

    return _.contains(['user', 'admin'], user.role);
};

isAdmin = function () {
    var user = Meteor.user();
    if (!user) {
        return false;
    }

    return _.contains(['admin'], user.role);
};
