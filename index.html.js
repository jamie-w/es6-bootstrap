module.exports = function render(params){
    return `
<!doctype html>
<html>
    <head>
        <title>Le App</title>
    </head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://bootswatch.com/cosmo/bootstrap.min.css">
    <link rel="stylesheet" href="https://bootswatch.com/simplex/bootstrap.min.css">

    <style>
        html {
            min-height:100%;
            position: relative;
        }
    </style>
    <body>
        <div id='root'></div>
        <script>window.__GLOBALS__ = ${JSON.stringify(params)}</script>
        <script src="/static/bundle.js"></script>
    </body>
</html>
`};
