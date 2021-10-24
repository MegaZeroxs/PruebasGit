module.exports = function () {
    return `
        <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test</title>
    </head>

    <style>
        body{
            background-color: rgb(44, 44, 44);
            color: #EEE;
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    </style>

    <body>
        <div style="margin-top:3em;">
            <h1>
                Detectar información del dispositivo.
            </h1>
            <button id="showMessage">Detectar </button>
        </div>
    </body>

    <script>
        const $btnMessage = document.querySelector('#showMessage');
        $btnMessage.addEventListener('click', () => {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                alert(navigator.userAgent);
            }
        });
    </script>

    </html>
`};