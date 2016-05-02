module.exports = {
    context: __dirname,
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js" // no hash in main.js because index.html is a static page
    }
};
