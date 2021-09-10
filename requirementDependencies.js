const fs = require('fs');
const yaml = require('js-yaml');

let testStatusContents = fs.readFileSync('./config/test_status.yaml', 'utf8');
let mappingContents = fs.readFileSync('./config/requirement_test_case_mapping.yaml', 'utf8');

let testStatus = yaml.load(testStatusContents);
let mapping = yaml.load(mappingContents);

let requirementDependenciesContents = fs.readFileSync('./config/requirement_dependencies.yaml', 'utf8');

let dependencies = yaml.load(requirementDependenciesContents);

const keys = Object.keys(dependencies)

const nl = () => "\n";

let output = "";
output += `digraph G {
    concentrate=True;
    rankdir=TB;
    node [shape=record];
` + nl();

for(var key of keys)
{
    const testCase = mapping[key]

    if(testCase in testStatus)
    {
        const status = testStatus[testCase]
        if(status)
        {
            output += `${key} [style="filled" fillcolor="green" label="${key}"];` + nl();
        }
        else
        {
            output += `${key} [style="filled" fillcolor="red" label="${key}"];` + nl();
        }
    }
    else
    {
        output += key + ";" + nl()
    }
}

for(var key of keys)
{
    const dependency = dependencies[key]
    if(dependency)
    {
        output += `${dependency} -> ${key};` + nl();
    }
}

output += "}" + nl();

console.log(output);


