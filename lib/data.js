const fs = require('fs');
const path = require('path');

const lib = {}

lib.baseDir = path.join(__dirname, '/../.data/');

lib.create = (dir, file, data, callback) => {
    fs.open(lib.baseDir + dir + '/' + file + '.json', 'wx', (err, fileDes) => {
        if (!err && fileDes) {
            const stringData = JSON.stringify(data);

            fs.writeFile(stringData, (err) => {
                if(!err) {
                    fs.close(fileDes, (err) => {
                        if (!err) {
                            callback(false);
                        } else {
                            callback(err);
                        }
                    })
                } else {
                    callback(err);
                }
            });
        } else {
            callback(err);
        }
    });
}

module.exports = lib;