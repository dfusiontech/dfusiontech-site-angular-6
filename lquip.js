const lqip = require('lqip');
const path =require('path');
const fs = require('fs');
const glob = require('glob');
const chalk = require('chalk');

glob(`${__dirname}/src/assets/images/pages/case-page/**/heading.jpg`, (er, files) =>
  files.forEach(file =>
    lqip.base64(file).then(res => {
      fs.writeFile(`${path.dirname(file)}/heading.placeholder.jpg`, res.split(';base64,').pop(), 'base64', (err) => {
          console.log(`${chalk.green(path.dirname(file).split(path.sep).pop())} placeholder has been created`);
      })
    })
  )
)
