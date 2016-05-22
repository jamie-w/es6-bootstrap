module.exports = function render(params){
    return `
        <!doctype html>
        <html>
            <head>
                <title>Le App</title>
            </head>
            <body>
                <div id='root'></div>
                <script>
                    window.__GLOBALS__ = ${JSON.stringify(params)}
                </script>
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    `
};
