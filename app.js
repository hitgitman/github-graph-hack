const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')

const FilePath = './data.json';

// const DATE = moment().subtract(1, 'd').format();
const DATE = moment().subtract(1, 'd').format();

const data = {
    date: DATE
}
jsonfile.writeFile(FilePath, data, () => {
    simpleGit().add('./*').commit(DATE, {'--date': DATE}).push();
});
