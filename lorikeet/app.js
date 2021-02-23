const osenv = require('osenv');
const fs = require('fs');

function getUsersHomeFolder() {
    return osenv.home();
}

function getFilesInFolder(folderPath, cb) {
    fs.readdir(folderPath, cb);
}

function main() {
    const folderPath = getUsersHomeFolder();
    getFilesInFolder(folderPath, (err, files) => {
        if (err) {
            return alert('Sorry, we could not load your home folder');
        }
        files.array.forEach(element => {
            console.log('${folderPath}/${element}');
        })
    })
}