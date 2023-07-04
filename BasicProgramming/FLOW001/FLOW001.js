/* You don't need to add/edit anything to the below solution. */
/* Click on the SUBMIT button to solve your first problem on CodeChef.*/

var input = '';

function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split(/\s+/).map(Number);
}

function main() {
    prepareInput();
    var T = input.splice(0, 1)[0];
    for (var i = 0; i < T; ++i) {
        var A = input.splice(0, 1)[0];
        var B = input.splice(0, 1)[0];
        process.stdout.write((A + B) + '\n');
    }
    process.exit();
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);