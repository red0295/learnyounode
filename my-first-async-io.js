'use strict'
const fs=require('fs');

fs.readFile(process.argv[2],'utf-8',(err,contents)=>{
    if(err) throw err;
    const lines = contents.split('\n').length - 1
console.log(lines)
})
