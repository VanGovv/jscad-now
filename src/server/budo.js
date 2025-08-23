const budo = require("budo");

module.exports = function (opts) {
    const { filename, cleanup } = opts;
    return budo(filename, {
        live: true,
        open: true,
        port: 8099,
        stream: process.stdout,
        browserify: {
            plugin: (b) =>
                b.plugin(require("esmify"), {}).plugin(require("tsify"), {}).transform(require("browserify-css"), {
                    autoInject: false,
                    global: true,
                }),
        },
    }).on("exit", cleanup);
};
