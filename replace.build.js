// This isint used any more
// TODO: REMOVE THIS


var replace = require('replace-in-file');
const { ModuleResolutionKind } = require('typescript')
var package = require('./package.json');
var buildVersion = package.version;
const options = {
    files: 'src/environments/environment.prod.ts',
    from: /version: '(.*)'/g,
    to: "version: '" + buildVersion + "'",
    allowEmptyPaths: false,
};

try {
    let changedFiles = replace.sync(options);
    if (changedFiles == 0) {
        throw "Please make sure that file '" + options.files + "' has \"version: ''\"";
    }
    console.log("Build version set: " + buildVersion);
}
catch (error) {
    console.error('Error occured:', error);
    throw error;
}