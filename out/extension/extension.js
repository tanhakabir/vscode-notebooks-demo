"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const notebookContentSerializer_1 = require("./notebookContentSerializer");
const notebookExecutionKernel_1 = require("./notebookExecutionKernel");
// This method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    context.subscriptions.push(vscode.notebook.registerNotebookSerializer('todo-notebook', new notebookContentSerializer_1.TodoNotebookContentSerializer()), vscode.notebook.registerNotebookKernelProvider({ viewType: 'todo-notebook' }, new notebookExecutionKernel_1.TodoNotebookKernelProvider()));
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map