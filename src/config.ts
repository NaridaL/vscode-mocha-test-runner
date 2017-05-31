import * as vscode from 'vscode';

interface Config {
    options?: any;
    env?: any;
    glob: string;
    debugPort: number;
    sourceDir: string;
    outputDir: string;
    setupFile: string;
    ignoreGlobs: string[];    
    debugTrace: string;
}

export const config: Config = vscode.workspace.getConfiguration('mocha') as any;
