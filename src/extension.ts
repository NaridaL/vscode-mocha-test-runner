import * as vscode from 'vscode';
import { TestsCodeLensProvider, TestCodeLensBase } from "./TestsCodeLensProvider";
import { languages } from "./Utils";
import { commandRunTests, commandRunAllTests, commandRunFileTests, commandRunScript } from "./commands";

export let codeLensProvider: TestsCodeLensProvider;
export let outputChannel: vscode.OutputChannel;
let compilerWatch;

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    try {
        codeLensProvider = new TestsCodeLensProvider();
        outputChannel = vscode.window.createOutputChannel('Mocha test runner');
        outputChannel.show();

        context.subscriptions.push(vscode.commands.registerCommand('vscode-mocha-test-runner.run-test', commandRunTests));
        context.subscriptions.push(vscode.commands.registerCommand('vscode-mocha-test-runner.run-all-tests', commandRunAllTests));
        context.subscriptions.push(vscode.commands.registerCommand('vscode-mocha-test-runner.run-file-tests', commandRunFileTests));
        context.subscriptions.push(vscode.commands.registerCommand('vscode-mocha-test-runner.run-script', commandRunScript));

        context.subscriptions.push(vscode.languages.registerCodeLensProvider(languages, codeLensProvider));

        console.log('vscode-mocha-test-runner started');
    } catch (err) {
        console.error('vscode-mocha-test-runner activate error: ' + err);
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}