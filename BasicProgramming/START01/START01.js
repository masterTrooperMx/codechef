// https://nodejs-es.github.io/api/process.html

// prepara un stream de lectura
process.stdin.resume();
process.stdin.setEncoding('utf8');
// lee pedazos de informacion
process.stdin.on('data', function (chunk) {
    process.stdout.write('data: ' + chunk);
  });
// CTRL+END
  process.stdin.on('end', function () {
    process.stdout.write('end');
  });