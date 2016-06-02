module.exports = function render(params){
    return `
        <!doctype html>
        <html>
            <head>
                <title>Le App</title>
                <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,300' rel='stylesheet' type='text/css'>
            </head>
            <body>
                <div id='root'></div>
                <script>
                    window.__GLOBALS__ = ${JSON.stringify(params)}
                </script>
                <script src="/static/bundle.js"></script>
            </body>
        </html>`
};
