#!/usr/bin/env node

const prog = require('caporal');
const shell = require('shelljs');

const templatePath = `${__dirname}/templates`
const localPath = process.cwd();
const camelCase = require('camelcase');

prog
    .version('1.0.0')
    .command('create', 'Create a new angular component')
    .argument('<name>', 'Component name')
    .option('--short', 'Short files names')
    .option('--r', 'React component')
    .action((args, options, logger) => {
        const name = args.name
        shell.mkdir(name)
        shell.cd(name)
        if(options.r) 
            createReactComponent(name)
        else if(options.short)
            createFilesWithShortNames(name)
        else
            createFilesWithFullNames(name)
        shell.ls('*.js').forEach(function (file) {
            shell.sed('-i', '{name}', name, file);
            shell.sed('-i', '{nameVar}', camelCase(name), file);
            shell.sed('-i', '"./{name}"', `"./${name}"`, file);
        });
        shell.ls('*.jsx').forEach(function (file) {
            shell.sed('-i', '{name}', name, file);
        });
    });

prog.parse(process.argv);

function createReactComponent(name) {
    shell.cp(`${templatePath}/react/index.js`, `${localPath}/${name}/index.js`)
    shell.cp(`${templatePath}/react/component.jsx`, `${localPath}/${name}/${name}.jsx`)
    shell.touch(`${name}.test.js`)
}

function createFilesWithFullNames(name){
    shell.cp(`${templatePath}/component/component.js`, `${localPath}/${name}/${name}.component.js`)
    shell.cp(`${templatePath}/controller/controller.js`, `${localPath}/${name}/${name}.controller.js`)
    shell.cp(`${templatePath}/test/test.js`, `${localPath}/${name}/${name}.controller.spec.js`)
    shell.touch(`${name}.html`)
    shell.touch(`${name}.style.css`)
}

function createFilesWithShortNames(name){
    shell.cp(`${templatePath}/component/component.js`, `${localPath}/${name}/component.js`)
    shell.cp(`${templatePath}/controller/controller.js`, `${localPath}/${name}/controller.js`)
    shell.cp(`${templatePath}/test/test.js`, `${localPath}/${name}/test.js`)
    shell.touch(`template.html`)
    shell.touch(`style.css`)
}