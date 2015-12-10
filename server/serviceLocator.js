var services = {
};

module.exports = {
    getService: function (key) {
        return services[key];
    },
    registerService: function (key, service) {
        services[key] = service;
    }
};
