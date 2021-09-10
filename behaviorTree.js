const fs = require('fs');
const yaml = require('js-yaml');

let fileContents = fs.readFileSync('./config/requirements.yaml', 'utf8');
let testStatusContents = fs.readFileSync('./config/test_status.yaml', 'utf8');
let mappingContents = fs.readFileSync('./config/requirement_test_case_mapping.yaml', 'utf8');
let itemsContents = fs.readFileSync('./config/model.yaml', 'utf8');
let linksContents = fs.readFileSync('./config/links.yaml', 'utf8');

let data = yaml.load(fileContents);
let testStatus = yaml.load(testStatusContents);
let mapping = yaml.load(mappingContents);
let items = yaml.load(itemsContents);
let links = yaml.load(linksContents);

const getErrors = () => {
    let keys = Object.keys(mapping);

    keys = keys.filter(key => {
        const file = mapping[key];
        const result = !testStatus[file];
        return result;
    })

    return keys;
}

const getSuccesses = () => {
    let keys = Object.keys(mapping);

    keys = keys.filter(key => {
        const file = mapping[key];
        const result = testStatus[file];
        return result;
    })

    return keys;
}

const edges = { };

const indicies = { };

for(const key in items)
{
    edges[key] = [];
}

for(const key in items)
{
    const charCode = key.charCodeAt(key.length - 1);
    const str = key.slice(0, key.length - 1) + String.fromCharCode(charCode - 1);

    const str2 = key.slice(0, key.length - 2)

    if(str in items)
    {
        edges[str].push(key)
    }
    else if(str2 in items)
    {
        edges[str2].push(key)
    }
}

const isSuccess = (key, successes) => {
    for(var str of successes)
    {
        if(key.includes(str))
            return true;
    }

    return false;
}

const isError = (key, errors) => {
    for(var str of errors)
    {
        if(key.includes(str))
            return true;
    }

    return false;
}

function newline()
{
    return "\n";
}

function getLabel(key, value, item)
{
    const {
        component,
        event,
        guard,
        state
    } = item;

    if('event' in item)
    {
        return `${value}\n|{${component}|??${event}??}`
    }
    else if('guard' in item)
    {
        return `${value}\n|{${component}|???${guard}???}`
    }
    else if('state' in item)
    {
        return `${value}\n|{${component}|[${state}]}`
    }

    return `${value}\n|{|}`
}

function getGraph(indicies, items, successes = [], errors = [])
{
    let output = "";
    output += `digraph G {
        concentrate=True;
        rankdir=TB;
        node [shape=record];
    ` + newline();

    for(const key in indicies)
    {
        const value = indicies[key]
        const label = getLabel(key, value, items[value])
        if (isError(key, errors))
            output += `${key} [style="filled" fillcolor="red" label="${label}"];` + newline();
        else if (isSuccess(key, successes))
            output += `${key} [style="filled" fillcolor="green" label="${label}"];` + newline();
        else
            output += `${key} [style="filled" label="${label}"];` + newline();

    }

    for(const key in indicies)
    {
        const charCode = key.charCodeAt(key.length - 1);
        const str = key.slice(0, key.length - 1) + String.fromCharCode(charCode - 1);

        const str2 = key.slice(0, key.length - 2)
        const str3 = key.slice(0, key.length - 3)

        if(str in indicies)
        {
            output += `${str} -> ${key};` + newline();
        }
        else if(str2 in indicies)
        {
            output += `${str2} -> ${key};` + newline();
        }
        else if(str3 in indicies)
        {
            output += `${str3} -> ${key};` + newline();
        }
    }

    output += "}" + newline();

    return output;
}


function createIndex(root, prefix = "")
{
    if(!root || root === '')
        return

    const integration = (root in links) ? links[root] : []

    for(var link of integration)
    {
        createIndex(link, prefix + root)
    }

    const index = prefix + root;
    indicies[index] = root;

    for(var next of edges[root])
    {
        createIndex(next, prefix);
    }

}

createIndex("S1a")

const successes = getSuccesses();
const errors = getErrors();

try
{
    const output = getGraph(indicies, items, successes, errors)
    fs.writeFile('./report/behavior_tree.dot', output, function (err) {
        if (err) throw err;
    });
}
catch(e)
{
    console.log(e)
}
