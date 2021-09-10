default: 
	node report.js
	node behaviorTree.js
	dot -Tsvg report/behavior_tree.dot >  report/behavior_tree.svg