module.exports = {
    chainWebpack: config => {
        config;

        if('development' === config.store.get('mode')){
            config.plugin("html").tap(args => {
                args[0].inject = true;
                args[0].template = "./example/index.html"; // path to html template
                args[0].filename = "index.html";
                args[0].favicon = "./example/favicon.png"; // path to favicon

                return args;
            });
        }

    },
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    css: {extract: true},
}