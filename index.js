//@ts-check
import fs from 'fs';
const authorBlocksRe = /\*\*(.|)+[\s\S]*?(?=\n.*=|\/)/i
const authorRe = /(?<=\@author)[\w:, ]+/i
const descriptionRe = /(?<=\@function_description)[\w\s: ]+(?=\*)/i
const paramsRe = /(?<=input Params)[\w:, ]+/i
const returnRe = /(?<=\@return)[\w:, ]+/i
const methodRe = /(?<=async).+(?=\{)/i

var x;

fs.readFile('resources/Script1.js', 'utf8', function (err, data) {
    if (!err) {
        // console.log(data)
        let authorBlocks = data.match(authorBlocksRe)
        if (authorBlocks.length > 0) {
            authorBlocks.forEach(x => {
                let methodName = x.match(methodRe)
                let description = x.match(descriptionRe)
                let params = x.match(paramsRe)
                let author = x.match(authorRe)
                let return_ = x.match(returnRe)
                console.log(`Method Signature: ${methodName[0].trim().replace("function", "")}`)
                console.log(`Description: ${description[0].trim().replace(":", "")}`)
                console.log(`Input Params: ${params[0].trim().replace(":", "")}`)
                console.log(`Return: ${return_[0].trim().replace(":", "")}`)
                console.log(`Author: ${author[0].trim().replace(":", "")}`)
            })
        }
    } else {
        console.log(`Something went wrong ${err}`)
    }
})

