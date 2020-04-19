const vscode = require('vscode');
const execFile = require('child_process').execFile
const path_1 = require('path')
const default_luacheck_executor = path_1.resolve(__dirname, '../../../3rd/luacheck/luacheck.exe');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('lua-611-clear.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from Lua 611 Clear!');
	});

	console.log(execFile(`${default_luacheck_executor} E:\\git_project\\ma_yun\\test_folders\\test_superpathcopy\\Core\\Game\\guild_manager.lua`));

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
