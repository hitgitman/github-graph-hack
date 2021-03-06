const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const random = require('random')

const FilePath = './data.json';

const makeCommit = (x, y,n ) => {
    if (n === 0) return simpleGit().push();
    x = random.int(0, 54)
     y = random.int(0, 54)
    // const DATE = moment().subtract(1, 'd').format();
    const DATE = moment().subtract(1, 'y').add(1, 'd').add(x,'w').add(y,'d').format();
    

    
    const data = {
        date: DATE
    }
    console.log(DATE)
    jsonfile.writeFile(FilePath, data, () => {
        simpleGit().add('./*').commit(DATE, {'--date': DATE}, makeCommit.bind(this, --n));
    });
    
    
}

makeCommit(1,1,100)