var glob = require('glob');
var filesArray = [];
var jsonfile = require('jsonfile')

glob('json/*.json', function (er, files) {
    files.map((file) => {
        filesArray.push(file.split('json/')[1].split('.json')[0]);
    });
});

exports.listOfJsonFiles = () => {
    return filesArray;
};

exports.getFileContents = (val) => {
    return jsonfile.readFileSync('json/' + val + '.json');
};