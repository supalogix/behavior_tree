const fs = require('fs');
const yaml = require('js-yaml');

function getPriorityStats(data, priority = null)
{
    let total = 0;
    let passing = 0;
    let failing = 0; 
    let notTested = 0;

    const handleCase = () => {
        total++;

        switch(datum.Status)
        {
            case "Pass":
                passing++;
                break;
            
            case "Fail":
                failing++;
                break;
            
            default:
                notTested++
                break;
        }

    }

    for(var datum of data)
    {
        if(priority === null)
            handleCase();
        else if(datum.Priority === priority)
            handleCase();
    }

    return {
        total,
        passing,
        failing,
        notTested,
        passingRate: Math.floor((passing / total) * 100),
        failingRate: Math.floor((failing / total) * 100),
        notTestedRate: Math.floor((notTested / total) * 100)
    }
}

try {
    let fileContents = fs.readFileSync('./config/requirements.yaml', 'utf8');
    let testStatusContents = fs.readFileSync('./config/test_status.yaml', 'utf8');
    let mappingContents = fs.readFileSync('./config/requirement_test_case_mapping.yaml', 'utf8');

    let data = yaml.load(fileContents);
    let testStatus = yaml.load(testStatusContents);
    let mapping = yaml.load(mappingContents);


    data = data.map(datum => {
        return {
            ...datum,
            File: mapping[datum.Id] || ""
        }
    })

    data = data.map(datum => {
        if(datum.File in testStatus)
        {
            const value = testStatus[datum.File]
            if(value)
            {
                return {
                    ...datum,
                    Status: "Pass"
                }
            }
            else
            {
                return {
                    ...datum,
                    Status: "Fail"
                }
            }
        }
        else
        {
            return {
                ...datum,
                Status: ""
            }
        }
    });

    const stats = getPriorityStats(data);
    const p1Stats = getPriorityStats(data, "P1");
    const p2Stats = getPriorityStats(data, "P2");
    const p3Stats = getPriorityStats(data, "P3");
    const p4Stats = getPriorityStats(data, "P4");

    const str = 
`
window.data.report = ${JSON.stringify(data,null,3)};
window.data.allStats = ${JSON.stringify(stats,null,3)};
window.data.p1Stats = ${JSON.stringify(p1Stats,null,3)};
window.data.p2Stats = ${JSON.stringify(p2Stats,null,3)};
window.data.p3Stats = ${JSON.stringify(p3Stats,null,3)};
window.data.p4Stats = ${JSON.stringify(p4Stats,null,3)};
`;
    console.log("All Stats");
    console.log(stats);
    console.log("");

    console.log("P1 Stats");
    console.log(p1Stats);
    console.log("");

    console.log("P2 Stats");
    console.log(p2Stats);
    console.log("");

    console.log("P3 Stats");
    console.log(p3Stats);
    console.log("");

    console.log("P4 Stats");
    console.log(p4Stats);
    console.log("");

    fs.writeFile('./report/requirements.js', str, function (err) {
        if (err) throw err;
    });
} catch (e) {
    console.log(e);
}