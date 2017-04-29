import * as vscode from 'vscode';

interface Config {
    options?: any;
    env?: any;
    files: {
        rootPath: string;
        ignore: string[];
        setup?: string[];
    };
}

export const config: Config = vscode.workspace.getConfiguration('mocha') as any;
