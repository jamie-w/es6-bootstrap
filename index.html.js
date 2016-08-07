module.exports = function render(params){
    return `
<!doctype html>
<html>
    <head>
        <title>Le App</title>
        <meta charset="utf-8" />
    </head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://bootswatch.com/simplex/bootstrap.min.css">
    <body>
        <div id='root'></div>
        <script>window.__GLOBALS__ = ${JSON.stringify(params)}</script>
        <script src="/static/bundle.js"></script>
    </body>
</html>
`};
