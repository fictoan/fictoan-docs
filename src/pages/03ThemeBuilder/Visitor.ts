/**
 * Acorn AST node visitor
 */

import acorn, { Parser, defaultOptions } from "acorn";

interface ProgramNode extends acorn.Node {
    body: acorn.Node[]
}
interface VariableDeclarationNode extends acorn.Node {
    declarations: VariableDeclaratorNode[]
}
interface VariableDeclaratorNode extends acorn.Node {
    id: IdentifierNode,
    init: any
}
interface IdentifierNode extends acorn.Node {
    name: string;
}
interface LiteralNode extends acorn.Node {
    value: String;
}
interface ObjectExpressionNode extends acorn.Node {
    properties: ObjectPropertyNode[]
}
interface ObjectPropertyNode extends acorn.Node {
    key: IdentifierNode;
    value: ObjectExpressionNode | IdentifierNode;
}
interface MemberExpressionNode extends acorn.Node {
    object: MemberExpressionNode | IdentifierNode;
    property: IdentifierNode;
}
interface CallExpressionNode extends acorn.Node {
    arguments: acorn.Node[];
    callee: IdentifierNode;
}



export class Visitor {
    constructor() {
        this.visitNode = this.visitNode.bind(this)
    }
    visitVariableDeclaration(node: VariableDeclarationNode) {
        return this.visitNodes(node.declarations);
    }
    visitVariableDeclarator(node: VariableDeclaratorNode) {
        this.visitNode(node.id);
        this.visitNode(node.init);
        return node.init;
    }
    visitIdentifier(node: IdentifierNode) {
        return node.name
    }
    visitLiteral(node: LiteralNode) {
        return node.value;
    }
    visitMemberExpression(node: MemberExpressionNode): any {
        return [this.visitNode(node.object), this.visitNode(node.property)];
    }
    visitObjectExpression(node: ObjectExpressionNode): any {
        return node.properties.map(this.visitNode);
    }
    visitObjectProperty(node: ObjectPropertyNode) {
        this.visitNode(node.key);
        this.visitNode(node.value);
    }
    visitCallExpression(node: CallExpressionNode) {
        this.visitNode(node.callee);
        this.visitNodes(node.arguments);
    }
    visitProgram(node: ProgramNode): any {
        return node.body.map(this.visitNode)
    }
    visitNodes(nodes: acorn.Node[]): any {
        return nodes.map(this.visitNode);
    }
    visitNode(node: acorn.Node) {
        if (node.type == 'Program')
            return this.visitProgram(node as ProgramNode);
        if (node.type == 'VariableDeclaration')
            return this.visitVariableDeclaration(node as VariableDeclarationNode);
        if (node.type == 'VariableDeclarator')
            return this.visitVariableDeclarator(node as VariableDeclaratorNode);
        if (node.type == 'MemberExpression')
            return this.visitMemberExpression(node as MemberExpressionNode)
        if (node.type == 'ObjectExpression')
            return this.visitObjectExpression(node as ObjectExpressionNode);
        if (node.type == 'Property')
            return this.visitObjectProperty(node as ObjectPropertyNode);
        if (node.type == 'Identifier')
            return this.visitIdentifier(node as IdentifierNode);
        if (node.type == 'Literal')
            return this.visitLiteral(node as LiteralNode);
    }
}



export class ThemeVisitor extends Visitor {
    key: string = '';
    sourceCodeString: string = '';
    astRoot: acorn.Node;
    constructor(sourceCodeString: string) {
        super();
        this.sourceCodeString = sourceCodeString;
        this.astRoot = Parser.parse(sourceCodeString, defaultOptions);
    }
    __toString(node: acorn.Node) {
        return this.sourceCodeString.substring(node.start, node.end);
    }
    visitProgram(node: ProgramNode) {
        return super.visitProgram(node).filter(filterOut)[0]
    }
    visitObjectExpression(node: ObjectExpressionNode): any {
        return super.visitObjectExpression(node).filter(filterOut)[0]
    }
    visitNodes(nodes: acorn.Node[]) {
        return super.visitNodes(nodes).filter(filterOut)[0]
    }
    visitVariableDeclarator(node: VariableDeclaratorNode) {
        if (node.id.name == this.key)
            return node.init;
    }
    visitObjectProperty(node: ObjectPropertyNode) {
        if (node.key.name == this.key)
            return node.value
    }

    visitCallExpression(node: CallExpressionNode) {
        return this.__toString(node);
    }
    visitMemberExpression(node: MemberExpressionNode) {
        return this.__toString(node);
    }

    visitPath(node: acorn.Node, path: string[]): any {
        if (path.length == 0)
            return node;
        this.key = path.shift()!;
        const nextNode = this.visitNode(node);
        return this.visitPath(nextNode, path);
    }
    getValueAtPath(path: string[]): string {
        const node = this.visitPath(this.astRoot, path);
        return this.__toString(node);
    }
}

export class JSVisitor extends Visitor {
    sourceCodeString: string = '';
    astRoot: acorn.Node;
    constructor(sourceCodeString: string) {
        super();
        this.sourceCodeString = sourceCodeString;
        this.astRoot = Parser.parse(sourceCodeString, defaultOptions);
    }
    __toString(node: acorn.Node) {
        return this.sourceCodeString.substring(node.start, node.end);
    }
    visitVariableDeclaration(node: VariableDeclarationNode) {
        return this.__toString(node);
    }
    getAllVariableDeclarations(){
        return this.visitNode(this.astRoot).filter((declaration:string) => !declaration.startsWith("const Theme"))
    }
}

function filterOut(val: Array<any> | any) {
    if (val == undefined)
        return false;
    if (val == [])
        return false;
    if (val.map) {
        return val.filter(filterOut).length == 0 ? false : true
    }
    return true;
}