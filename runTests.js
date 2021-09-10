var shell = require('shelljs');
 
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}
 
// Run external tool synchronously
const result = shell.exec('LOCAL_RUN=true npx ui-shield test/e2e/protractor.conf.js --baseUrl https://retaillink.supplier.cert.wal-mart.com/item-mgr --test test/e2e/item-mgr/specs/scenarios/maintenance-hub/load-maintenance-hub.spec.js --testSuite dev')
console.log(result);