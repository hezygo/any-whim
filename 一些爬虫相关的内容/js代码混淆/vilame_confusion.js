var vilame;
vilame = (() => {
    "use strict";
    var t = {
            834: (t, e) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const s = !0,
                    i = !0,
                    r = !0,
                    a = !0;
                class n {
                    constructor(t, e = {}) {
                        this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.updateContext = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = null != e.binop ? e.binop : null, this.updateContext = null
                    }
                }
                const o = new Map;

                function h(t, e = {}) {
                    e.keyword = t;
                    const s = new n(t, e);
                    return o.set(t, s), s
                }

                function p(t, e) {
                    return new n(t, {
                        beforeExpr: s,
                        binop: e
                    })
                }
                const c = {
                        num: new n("num", {
                            startsExpr: i
                        }),
                        bigint: new n("bigint", {
                            startsExpr: i
                        }),
                        decimal: new n("decimal", {
                            startsExpr: i
                        }),
                        regexp: new n("regexp", {
                            startsExpr: i
                        }),
                        string: new n("string", {
                            startsExpr: i
                        }),
                        name: new n("name", {
                            startsExpr: i
                        }),
                        eof: new n("eof"),
                        bracketL: new n("[", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        bracketHashL: new n("#[", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        bracketBarL: new n("[|", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        bracketR: new n("]"),
                        bracketBarR: new n("|]"),
                        braceL: new n("{", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        braceBarL: new n("{|", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        braceHashL: new n("#{", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        braceR: new n("}"),
                        braceBarR: new n("|}"),
                        parenL: new n("(", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        parenR: new n(")"),
                        comma: new n(",", {
                            beforeExpr: s
                        }),
                        semi: new n(";", {
                            beforeExpr: s
                        }),
                        colon: new n(":", {
                            beforeExpr: s
                        }),
                        doubleColon: new n("::", {
                            beforeExpr: s
                        }),
                        dot: new n("."),
                        question: new n("?", {
                            beforeExpr: s
                        }),
                        questionDot: new n("?."),
                        arrow: new n("=>", {
                            beforeExpr: s
                        }),
                        template: new n("template"),
                        ellipsis: new n("...", {
                            beforeExpr: s
                        }),
                        backQuote: new n("`", {
                            startsExpr: i
                        }),
                        dollarBraceL: new n("${", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        at: new n("@"),
                        hash: new n("#", {
                            startsExpr: i
                        }),
                        interpreterDirective: new n("#!..."),
                        eq: new n("=", {
                            beforeExpr: s,
                            isAssign: !0
                        }),
                        assign: new n("_=", {
                            beforeExpr: s,
                            isAssign: !0
                        }),
                        incDec: new n("++/--", {
                            prefix: a,
                            postfix: !0,
                            startsExpr: i
                        }),
                        bang: new n("!", {
                            beforeExpr: s,
                            prefix: a,
                            startsExpr: i
                        }),
                        tilde: new n("~", {
                            beforeExpr: s,
                            prefix: a,
                            startsExpr: i
                        }),
                        pipeline: p("|>", 0),
                        nullishCoalescing: p("??", 1),
                        logicalOR: p("||", 1),
                        logicalAND: p("&&", 2),
                        bitwiseOR: p("|", 3),
                        bitwiseXOR: p("^", 4),
                        bitwiseAND: p("&", 5),
                        equality: p("==/!=/===/!==", 6),
                        relational: p("</>/<=/>=", 7),
                        bitShift: p("<</>>/>>>", 8),
                        plusMin: new n("+/-", {
                            beforeExpr: s,
                            binop: 9,
                            prefix: a,
                            startsExpr: i
                        }),
                        modulo: new n("%", {
                            beforeExpr: s,
                            binop: 10,
                            startsExpr: i
                        }),
                        star: new n("*", {
                            binop: 10
                        }),
                        slash: p("/", 10),
                        exponent: new n("**", {
                            beforeExpr: s,
                            binop: 11,
                            rightAssociative: !0
                        }),
                        _break: h("break"),
                        _case: h("case", {
                            beforeExpr: s
                        }),
                        _catch: h("catch"),
                        _continue: h("continue"),
                        _debugger: h("debugger"),
                        _default: h("default", {
                            beforeExpr: s
                        }),
                        _do: h("do", {
                            isLoop: r,
                            beforeExpr: s
                        }),
                        _else: h("else", {
                            beforeExpr: s
                        }),
                        _finally: h("finally"),
                        _for: h("for", {
                            isLoop: r
                        }),
                        _function: h("function", {
                            startsExpr: i
                        }),
                        _if: h("if"),
                        _return: h("return", {
                            beforeExpr: s
                        }),
                        _switch: h("switch"),
                        _throw: h("throw", {
                            beforeExpr: s,
                            prefix: a,
                            startsExpr: i
                        }),
                        _try: h("try"),
                        _var: h("var"),
                        _const: h("const"),
                        _while: h("while", {
                            isLoop: r
                        }),
                        _with: h("with"),
                        _new: h("new", {
                            beforeExpr: s,
                            startsExpr: i
                        }),
                        _this: h("this", {
                            startsExpr: i
                        }),
                        _super: h("super", {
                            startsExpr: i
                        }),
                        _class: h("class", {
                            startsExpr: i
                        }),
                        _extends: h("extends", {
                            beforeExpr: s
                        }),
                        _export: h("export"),
                        _import: h("import", {
                            startsExpr: i
                        }),
                        _null: h("null", {
                            startsExpr: i
                        }),
                        _true: h("true", {
                            startsExpr: i
                        }),
                        _false: h("false", {
                            startsExpr: i
                        }),
                        _in: h("in", {
                            beforeExpr: s,
                            binop: 7
                        }),
                        _instanceof: h("instanceof", {
                            beforeExpr: s,
                            binop: 7
                        }),
                        _typeof: h("typeof", {
                            beforeExpr: s,
                            prefix: a,
                            startsExpr: i
                        }),
                        _void: h("void", {
                            beforeExpr: s,
                            prefix: a,
                            startsExpr: i
                        }),
                        _delete: h("delete", {
                            beforeExpr: s,
                            prefix: a,
                            startsExpr: i
                        })
                    },
                    l = /\r\n?|[\n\u2028\u2029]/,
                    u = new RegExp(l.source, "g");

                function d(t) {
                    switch (t) {
                        case 10:
                        case 13:
                        case 8232:
                        case 8233:
                            return !0;
                        default:
                            return !1
                    }
                }
                const m = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

                function f(t) {
                    switch (t) {
                        case 9:
                        case 11:
                        case 12:
                        case 32:
                        case 160:
                        case 5760:
                        case 8192:
                        case 8193:
                        case 8194:
                        case 8195:
                        case 8196:
                        case 8197:
                        case 8198:
                        case 8199:
                        case 8200:
                        case 8201:
                        case 8202:
                        case 8239:
                        case 8287:
                        case 12288:
                        case 65279:
                            return !0;
                        default:
                            return !1
                    }
                }
                class y {
                    constructor(t, e) {
                        this.line = void 0, this.column = void 0, this.line = t, this.column = e
                    }
                }
                class x {
                    constructor(t, e) {
                        this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e
                    }
                }

                function P(t) {
                    return t[t.length - 1]
                }
                const g = Object.freeze({
                    AccessorIsGenerator: "A %0ter cannot be a generator",
                    ArgumentsInClass: "'arguments' is only allowed in functions and class methods",
                    AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block",
                    AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function",
                    AwaitExpressionFormalParameter: "await is not allowed in async function parameters",
                    AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules",
                    AwaitNotInAsyncFunction: "'await' is only allowed within async functions",
                    BadGetterArity: "getter must not have any formal parameters",
                    BadSetterArity: "setter must have exactly one formal parameter",
                    BadSetterRestParameter: "setter function argument must not be a rest parameter",
                    ConstructorClassField: "Classes may not have a field named 'constructor'",
                    ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'",
                    ConstructorIsAccessor: "Class constructor may not be an accessor",
                    ConstructorIsAsync: "Constructor can't be an async function",
                    ConstructorIsGenerator: "Constructor can't be a generator",
                    DeclarationMissingInitializer: "%0 require an initialization value",
                    DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax",
                    DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
                    DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
                    DecoratorSemicolon: "Decorators must not be followed by a semicolon",
                    DecoratorStaticBlock: "Decorators can't be used with a static block",
                    DeletePrivateField: "Deleting a private field is not allowed",
                    DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
                    DuplicateConstructor: "Duplicate constructor in the same class",
                    DuplicateDefaultExport: "Only one default export allowed per module.",
                    DuplicateExport: "`%0` has already been exported. Exported identifiers must be unique.",
                    DuplicateProto: "Redefinition of __proto__ property",
                    DuplicateRegExpFlags: "Duplicate regular expression flag",
                    DuplicateStaticBlock: "Duplicate static block in the same class",
                    ElementAfterRest: "Rest element must be last element",
                    EscapedCharNotAnIdentifier: "Invalid Unicode escape",
                    ExportBindingIsString: "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '%0' as '%1' } from 'some-module'`?",
                    ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'",
                    ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
                    GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block",
                    IllegalBreakContinue: "Unsyntactic %0",
                    IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
                    IllegalReturn: "'return' outside of function",
                    ImportBindingIsString: 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
                    ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments",
                    ImportCallArity: "import() requires exactly %0",
                    ImportCallNotNewExpression: "Cannot use new with import(...)",
                    ImportCallSpreadArgument: "... is not allowed in import()",
                    ImportMetaOutsideModule: "import.meta may appear only with 'sourceType: \"module\"'",
                    ImportOutsideModule: "'import' and 'export' may appear only with 'sourceType: \"module\"'",
                    InvalidBigIntLiteral: "Invalid BigIntLiteral",
                    InvalidCodePoint: "Code point out of bounds",
                    InvalidDecimal: "Invalid decimal",
                    InvalidDigit: "Expected number in radix %0",
                    InvalidEscapeSequence: "Bad character escape sequence",
                    InvalidEscapeSequenceTemplate: "Invalid escape sequence in template",
                    InvalidEscapedReservedWord: "Escape sequence in keyword %0",
                    InvalidIdentifier: "Invalid identifier %0",
                    InvalidLhs: "Invalid left-hand side in %0",
                    InvalidLhsBinding: "Binding invalid left-hand side in %0",
                    InvalidNumber: "Invalid number",
                    InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'",
                    InvalidOrUnexpectedToken: "Unexpected character '%0'",
                    InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern",
                    InvalidPrivateFieldResolution: "Private name #%0 is not defined",
                    InvalidPropertyBindingPattern: "Binding member expression",
                    InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions",
                    InvalidRestAssignmentPattern: "Invalid rest operator's argument",
                    LabelRedeclaration: "Label '%0' is already declared",
                    LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
                    LineTerminatorBeforeArrow: "No line break is allowed before '=>'",
                    MalformedRegExpFlags: "Invalid regular expression flag",
                    MissingClassName: "A class name is required",
                    MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
                    MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX",
                    MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators",
                    ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`",
                    ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values",
                    ModuleAttributesWithDuplicateKeys: 'Duplicate key "%0" is not allowed in module attributes',
                    ModuleExportNameHasLoneSurrogate: "An export name cannot include a lone surrogate, found '\\u%0'",
                    ModuleExportUndefined: "Export '%0' is not defined",
                    MultipleDefaultsInSwitch: "Multiple default clauses",
                    NewlineAfterThrow: "Illegal newline after throw",
                    NoCatchOrFinally: "Missing catch or finally clause",
                    NumberIdentifier: "Identifier directly after number",
                    NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences",
                    ObsoleteAwaitStar: "await* has been removed from the async functions proposal. Use Promise.all() instead.",
                    OptionalChainingNoNew: "constructors in/after an Optional Chain are not allowed",
                    OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain",
                    ParamDupe: "Argument name clash",
                    PatternHasAccessor: "Object pattern can't contain getter or setter",
                    PatternHasMethod: "Object pattern can't contain methods",
                    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized',
                    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression",
                    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression",
                    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference",
                    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding",
                    PrimaryTopicRequiresSmartPipeline: "Primary Topic Reference found but pipelineOperator not passed 'smart' for 'proposal' option.",
                    PrivateInExpectedIn: "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`)",
                    PrivateNameRedeclaration: "Duplicate private name #%0",
                    RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
                    RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
                    RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
                    RecordNoProto: "'__proto__' is not allowed in Record expressions",
                    RestTrailingComma: "Unexpected trailing comma after rest element",
                    SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
                    StaticPrototype: "Classes may not have static property named prototype",
                    StrictDelete: "Deleting local variable in strict mode",
                    StrictEvalArguments: "Assigning to '%0' in strict mode",
                    StrictEvalArgumentsBinding: "Binding '%0' in strict mode",
                    StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
                    StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'",
                    StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode",
                    StrictWith: "'with' in strict mode",
                    SuperNotAllowed: "super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
                    SuperPrivateField: "Private fields can't be accessed on super",
                    TrailingDecorator: "Decorators must be attached to a class element",
                    TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
                    TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
                    TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
                    UnexpectedArgumentPlaceholder: "Unexpected argument placeholder",
                    UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal',
                    UnexpectedDigitAfterHash: "Unexpected digit after hash token",
                    UnexpectedImportExport: "'import' and 'export' may only appear at the top level",
                    UnexpectedKeyword: "Unexpected keyword '%0'",
                    UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration",
                    UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context",
                    UnexpectedNewTarget: "new.target can only be used in functions",
                    UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits",
                    UnexpectedPrivateField: "Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).",
                    UnexpectedReservedWord: "Unexpected reserved word '%0'",
                    UnexpectedSuper: "super is only allowed in object methods and classes",
                    UnexpectedToken: "Unexpected token '%0'",
                    UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
                    UnsupportedBind: "Binding should be performed on object property.",
                    UnsupportedDecoratorExport: "A decorated export must export a class declaration",
                    UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
                    UnsupportedImport: "import can only be used in import() or import.meta",
                    UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1",
                    UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters",
                    UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties",
                    UnsupportedSuper: "super can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop])",
                    UnterminatedComment: "Unterminated comment",
                    UnterminatedRegExp: "Unterminated regular expression",
                    UnterminatedString: "Unterminated string constant",
                    UnterminatedTemplate: "Unterminated template",
                    VarRedeclaration: "Identifier '%0' has already been declared",
                    YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator",
                    YieldInParameter: "Yield expression is not allowed in formal parameters",
                    ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0"
                });
                class b {
                    constructor(t, e, s, i) {
                        this.token = void 0, this.isExpr = void 0, this.preserveSpace = void 0, this.override = void 0, this.token = t, this.isExpr = !!e, this.preserveSpace = !!s, this.override = i
                    }
                }
                const T = {
                    braceStatement: new b("{", !1),
                    braceExpression: new b("{", !0),
                    recordExpression: new b("#{", !0),
                    templateQuasi: new b("${", !1),
                    parenStatement: new b("(", !1),
                    parenExpression: new b("(", !0),
                    template: new b("`", !0, !0, (t => t.readTmplToken())),
                    functionExpression: new b("function", !0),
                    functionStatement: new b("function", !1)
                };
                c.parenR.updateContext = c.braceR.updateContext = function() {
                    if (1 === this.state.context.length) return void(this.state.exprAllowed = !0);
                    let t = this.state.context.pop();
                    t === T.braceStatement && "function" === this.curContext().token && (t = this.state.context.pop()), this.state.exprAllowed = !t.isExpr
                }, c.name.updateContext = function(t) {
                    let e = !1;
                    t !== c.dot && ("of" !== this.state.value || this.state.exprAllowed || t === c._function || t === c._class || (e = !0)), this.state.exprAllowed = e, this.state.isIterator && (this.state.isIterator = !1)
                }, c.braceL.updateContext = function(t) {
                    this.state.context.push(this.braceIsBlock(t) ? T.braceStatement : T.braceExpression), this.state.exprAllowed = !0
                }, c.dollarBraceL.updateContext = function() {
                    this.state.context.push(T.templateQuasi), this.state.exprAllowed = !0
                }, c.parenL.updateContext = function(t) {
                    const e = t === c._if || t === c._for || t === c._with || t === c._while;
                    this.state.context.push(e ? T.parenStatement : T.parenExpression), this.state.exprAllowed = !0
                }, c.incDec.updateContext = function() {}, c._function.updateContext = c._class.updateContext = function(t) {
                    !t.beforeExpr || t === c.semi || t === c._else || t === c._return && this.hasPrecedingLineBreak() || (t === c.colon || t === c.braceL) && this.curContext() === T.b_stat ? this.state.context.push(T.functionStatement) : this.state.context.push(T.functionExpression), this.state.exprAllowed = !1
                }, c.backQuote.updateContext = function() {
                    this.curContext() === T.template ? this.state.context.pop() : this.state.context.push(T.template), this.state.exprAllowed = !1
                }, c.braceHashL.updateContext = function() {
                    this.state.context.push(T.recordExpression), this.state.exprAllowed = !0
                };
                let A = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                    w = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";
                const E = new RegExp("[" + A + "]"),
                    S = new RegExp("[" + A + w + "]");
                A = w = null;
                const C = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
                    N = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

                function k(t, e) {
                    let s = 65536;
                    for (let i = 0, r = e.length; i < r; i += 2) {
                        if (s += e[i], s > t) return !1;
                        if (s += e[i + 1], s >= t) return !0
                    }
                    return !1
                }

                function I(t) {
                    return t < 65 ? 36 === t : t <= 90 || (t < 97 ? 95 === t : t <= 122 || (t <= 65535 ? t >= 170 && E.test(String.fromCharCode(t)) : k(t, C)))
                }

                function v(t) {
                    return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t <= 90 || (t < 97 ? 95 === t : t <= 122 || (t <= 65535 ? t >= 170 && S.test(String.fromCharCode(t)) : k(t, C) || k(t, N))))
                }
                const L = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]),
                    D = new Set(["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"]),
                    M = new Set(["eval", "arguments"]);

                function R(t, e) {
                    return e && "await" === t || "enum" === t
                }

                function O(t, e) {
                    return R(t, e) || D.has(t)
                }

                function F(t) {
                    return M.has(t)
                }

                function B(t, e) {
                    return O(t, e) || F(t)
                }

                function _(t) {
                    return L.has(t)
                }
                const j = /^in(stanceof)?$/,
                    U = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]),
                    q = Object.freeze({
                        AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
                        AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module",
                        AssignReservedType: "Cannot overwrite reserved type %0",
                        DeclareClassElement: "The `declare` modifier can only appear on class fields.",
                        DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
                        DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement",
                        EnumBooleanMemberNotInitialized: "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.",
                        EnumDuplicateMemberName: "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.",
                        EnumInconsistentMemberValues: "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.",
                        EnumInvalidExplicitType: "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
                        EnumInvalidExplicitTypeUnknownSupplied: "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
                        EnumInvalidMemberInitializerPrimaryType: "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.",
                        EnumInvalidMemberInitializerSymbolType: "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.",
                        EnumInvalidMemberInitializerUnknownType: "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.",
                        EnumInvalidMemberName: "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
                        EnumNumberMemberNotInitialized: "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.",
                        EnumStringMemberInconsistentlyInitailized: "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.",
                        ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements",
                        InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type",
                        InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions",
                        InexactVariance: "Explicit inexact syntax cannot have variance",
                        InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`",
                        MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
                        NestedDeclareModule: "`declare module` cannot be used inside another `declare module`",
                        NestedFlowComment: "Cannot have a flow comment inside another flow comment",
                        OptionalBindingPattern: "A binding pattern parameter cannot be optional in an implementation signature.",
                        SpreadVariance: "Spread properties cannot have variance",
                        TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
                        TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis",
                        UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object",
                        UnexpectedReservedType: "Unexpected reserved type %0",
                        UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new",
                        UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
                        UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions",
                        UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint"',
                        UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration",
                        UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`",
                        UnsupportedDeclareExportKind: "`declare export %0` is not supported. Use `%1` instead",
                        UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module",
                        UnterminatedFlowComment: "Unterminated flow-comment"
                    });

                function V(t) {
                    return "type" === t.importKind || "typeof" === t.importKind
                }

                function z(t) {
                    return (t.type === c.name || !!t.type.keyword) && "from" !== t.value
                }
                const H = {
                        const: "declare export var",
                        let: "declare export var",
                        type: "export type",
                        interface: "export interface"
                    },
                    K = /\*?\s*@((?:no)?flow)\b/,
                    W = {
                        quot: '"',
                        amp: "&",
                        apos: "'",
                        lt: "<",
                        gt: ">",
                        nbsp: " ",
                        iexcl: "¡",
                        cent: "¢",
                        pound: "£",
                        curren: "¤",
                        yen: "¥",
                        brvbar: "¦",
                        sect: "§",
                        uml: "¨",
                        copy: "©",
                        ordf: "ª",
                        laquo: "«",
                        not: "¬",
                        shy: "­",
                        reg: "®",
                        macr: "¯",
                        deg: "°",
                        plusmn: "±",
                        sup2: "²",
                        sup3: "³",
                        acute: "´",
                        micro: "µ",
                        para: "¶",
                        middot: "·",
                        cedil: "¸",
                        sup1: "¹",
                        ordm: "º",
                        raquo: "»",
                        frac14: "¼",
                        frac12: "½",
                        frac34: "¾",
                        iquest: "¿",
                        Agrave: "À",
                        Aacute: "Á",
                        Acirc: "Â",
                        Atilde: "Ã",
                        Auml: "Ä",
                        Aring: "Å",
                        AElig: "Æ",
                        Ccedil: "Ç",
                        Egrave: "È",
                        Eacute: "É",
                        Ecirc: "Ê",
                        Euml: "Ë",
                        Igrave: "Ì",
                        Iacute: "Í",
                        Icirc: "Î",
                        Iuml: "Ï",
                        ETH: "Ð",
                        Ntilde: "Ñ",
                        Ograve: "Ò",
                        Oacute: "Ó",
                        Ocirc: "Ô",
                        Otilde: "Õ",
                        Ouml: "Ö",
                        times: "×",
                        Oslash: "Ø",
                        Ugrave: "Ù",
                        Uacute: "Ú",
                        Ucirc: "Û",
                        Uuml: "Ü",
                        Yacute: "Ý",
                        THORN: "Þ",
                        szlig: "ß",
                        agrave: "à",
                        aacute: "á",
                        acirc: "â",
                        atilde: "ã",
                        auml: "ä",
                        aring: "å",
                        aelig: "æ",
                        ccedil: "ç",
                        egrave: "è",
                        eacute: "é",
                        ecirc: "ê",
                        euml: "ë",
                        igrave: "ì",
                        iacute: "í",
                        icirc: "î",
                        iuml: "ï",
                        eth: "ð",
                        ntilde: "ñ",
                        ograve: "ò",
                        oacute: "ó",
                        ocirc: "ô",
                        otilde: "õ",
                        ouml: "ö",
                        divide: "÷",
                        oslash: "ø",
                        ugrave: "ù",
                        uacute: "ú",
                        ucirc: "û",
                        uuml: "ü",
                        yacute: "ý",
                        thorn: "þ",
                        yuml: "ÿ",
                        OElig: "Œ",
                        oelig: "œ",
                        Scaron: "Š",
                        scaron: "š",
                        Yuml: "Ÿ",
                        fnof: "ƒ",
                        circ: "ˆ",
                        tilde: "˜",
                        Alpha: "Α",
                        Beta: "Β",
                        Gamma: "Γ",
                        Delta: "Δ",
                        Epsilon: "Ε",
                        Zeta: "Ζ",
                        Eta: "Η",
                        Theta: "Θ",
                        Iota: "Ι",
                        Kappa: "Κ",
                        Lambda: "Λ",
                        Mu: "Μ",
                        Nu: "Ν",
                        Xi: "Ξ",
                        Omicron: "Ο",
                        Pi: "Π",
                        Rho: "Ρ",
                        Sigma: "Σ",
                        Tau: "Τ",
                        Upsilon: "Υ",
                        Phi: "Φ",
                        Chi: "Χ",
                        Psi: "Ψ",
                        Omega: "Ω",
                        alpha: "α",
                        beta: "β",
                        gamma: "γ",
                        delta: "δ",
                        epsilon: "ε",
                        zeta: "ζ",
                        eta: "η",
                        theta: "θ",
                        iota: "ι",
                        kappa: "κ",
                        lambda: "λ",
                        mu: "μ",
                        nu: "ν",
                        xi: "ξ",
                        omicron: "ο",
                        pi: "π",
                        rho: "ρ",
                        sigmaf: "ς",
                        sigma: "σ",
                        tau: "τ",
                        upsilon: "υ",
                        phi: "φ",
                        chi: "χ",
                        psi: "ψ",
                        omega: "ω",
                        thetasym: "ϑ",
                        upsih: "ϒ",
                        piv: "ϖ",
                        ensp: " ",
                        emsp: " ",
                        thinsp: " ",
                        zwnj: "‌",
                        zwj: "‍",
                        lrm: "‎",
                        rlm: "‏",
                        ndash: "–",
                        mdash: "—",
                        lsquo: "‘",
                        rsquo: "’",
                        sbquo: "‚",
                        ldquo: "“",
                        rdquo: "”",
                        bdquo: "„",
                        dagger: "†",
                        Dagger: "‡",
                        bull: "•",
                        hellip: "…",
                        permil: "‰",
                        prime: "′",
                        Prime: "″",
                        lsaquo: "‹",
                        rsaquo: "›",
                        oline: "‾",
                        frasl: "⁄",
                        euro: "€",
                        image: "ℑ",
                        weierp: "℘",
                        real: "ℜ",
                        trade: "™",
                        alefsym: "ℵ",
                        larr: "←",
                        uarr: "↑",
                        rarr: "→",
                        darr: "↓",
                        harr: "↔",
                        crarr: "↵",
                        lArr: "⇐",
                        uArr: "⇑",
                        rArr: "⇒",
                        dArr: "⇓",
                        hArr: "⇔",
                        forall: "∀",
                        part: "∂",
                        exist: "∃",
                        empty: "∅",
                        nabla: "∇",
                        isin: "∈",
                        notin: "∉",
                        ni: "∋",
                        prod: "∏",
                        sum: "∑",
                        minus: "−",
                        lowast: "∗",
                        radic: "√",
                        prop: "∝",
                        infin: "∞",
                        ang: "∠",
                        and: "∧",
                        or: "∨",
                        cap: "∩",
                        cup: "∪",
                        int: "∫",
                        there4: "∴",
                        sim: "∼",
                        cong: "≅",
                        asymp: "≈",
                        ne: "≠",
                        equiv: "≡",
                        le: "≤",
                        ge: "≥",
                        sub: "⊂",
                        sup: "⊃",
                        nsub: "⊄",
                        sube: "⊆",
                        supe: "⊇",
                        oplus: "⊕",
                        otimes: "⊗",
                        perp: "⊥",
                        sdot: "⋅",
                        lceil: "⌈",
                        rceil: "⌉",
                        lfloor: "⌊",
                        rfloor: "⌋",
                        lang: "〈",
                        rang: "〉",
                        loz: "◊",
                        spades: "♠",
                        clubs: "♣",
                        hearts: "♥",
                        diams: "♦"
                    },
                    J = /^[\da-fA-F]+$/,
                    X = /^\d+$/,
                    G = Object.freeze({
                        AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression",
                        MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>",
                        MissingClosingTagElement: "Expected corresponding JSX closing tag for <%0>",
                        UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
                        UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text",
                        UnterminatedJsxContent: "Unterminated JSX contents",
                        UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
                    });

                function Q(t) {
                    return !!t && ("JSXOpeningFragment" === t.type || "JSXClosingFragment" === t.type)
                }

                function Y(t) {
                    if ("JSXIdentifier" === t.type) return t.name;
                    if ("JSXNamespacedName" === t.type) return t.namespace.name + ":" + t.name.name;
                    if ("JSXMemberExpression" === t.type) return Y(t.object) + "." + Y(t.property);
                    throw new Error("Node had unexpected type: " + t.type)
                }
                T.j_oTag = new b("<tag", !1), T.j_cTag = new b("</tag", !1), T.j_expr = new b("<tag>...</tag>", !0, !0), c.jsxName = new n("jsxName"), c.jsxText = new n("jsxText", {
                    beforeExpr: !0
                }), c.jsxTagStart = new n("jsxTagStart", {
                    startsExpr: !0
                }), c.jsxTagEnd = new n("jsxTagEnd"), c.jsxTagStart.updateContext = function() {
                    this.state.context.push(T.j_expr), this.state.context.push(T.j_oTag), this.state.exprAllowed = !1
                }, c.jsxTagEnd.updateContext = function(t) {
                    const e = this.state.context.pop();
                    e === T.j_oTag && t === c.slash || e === T.j_cTag ? (this.state.context.pop(), this.state.exprAllowed = this.curContext() === T.j_expr) : this.state.exprAllowed = !0
                };
                class $ {
                    constructor(t) {
                        this.flags = void 0, this.var = [], this.lexical = [], this.functions = [], this.flags = t
                    }
                }
                class Z {
                    constructor(t, e) {
                        this.scopeStack = [], this.undefinedExports = new Map, this.undefinedPrivateNames = new Map, this.raise = t, this.inModule = e
                    }
                    get inFunction() {
                        return (2 & this.currentVarScope().flags) > 0
                    }
                    get allowSuper() {
                        return (16 & this.currentThisScope().flags) > 0
                    }
                    get allowDirectSuper() {
                        return (32 & this.currentThisScope().flags) > 0
                    }
                    get inClass() {
                        return (64 & this.currentThisScope().flags) > 0
                    }
                    get inNonArrowFunction() {
                        return (2 & this.currentThisScope().flags) > 0
                    }
                    get treatFunctionsAsVar() {
                        return this.treatFunctionsAsVarInScope(this.currentScope())
                    }
                    createScope(t) {
                        return new $(t)
                    }
                    enter(t) {
                        this.scopeStack.push(this.createScope(t))
                    }
                    exit() {
                        this.scopeStack.pop()
                    }
                    treatFunctionsAsVarInScope(t) {
                        return !!(2 & t.flags || !this.inModule && 1 & t.flags)
                    }
                    declareName(t, e, s) {
                        let i = this.currentScope();
                        if (8 & e || 16 & e) this.checkRedeclarationInScope(i, t, e, s), 16 & e ? i.functions.push(t) : i.lexical.push(t), 8 & e && this.maybeExportDefined(i, t);
                        else if (4 & e)
                            for (let r = this.scopeStack.length - 1; r >= 0 && (i = this.scopeStack[r], this.checkRedeclarationInScope(i, t, e, s), i.var.push(t), this.maybeExportDefined(i, t), !(131 & i.flags)); --r);
                        this.inModule && 1 & i.flags && this.undefinedExports.delete(t)
                    }
                    maybeExportDefined(t, e) {
                        this.inModule && 1 & t.flags && this.undefinedExports.delete(e)
                    }
                    checkRedeclarationInScope(t, e, s, i) {
                        this.isRedeclaredInScope(t, e, s) && this.raise(i, g.VarRedeclaration, e)
                    }
                    isRedeclaredInScope(t, e, s) {
                        return !!(1 & s) && (8 & s ? t.lexical.indexOf(e) > -1 || t.functions.indexOf(e) > -1 || t.var.indexOf(e) > -1 : 16 & s ? t.lexical.indexOf(e) > -1 || !this.treatFunctionsAsVarInScope(t) && t.var.indexOf(e) > -1 : t.lexical.indexOf(e) > -1 && !(8 & t.flags && t.lexical[0] === e) || !this.treatFunctionsAsVarInScope(t) && t.functions.indexOf(e) > -1)
                    }
                    checkLocalExport(t) {
                        -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && -1 === this.scopeStack[0].functions.indexOf(t.name) && this.undefinedExports.set(t.name, t.start)
                    }
                    currentScope() {
                        return this.scopeStack[this.scopeStack.length - 1]
                    }
                    currentVarScope() {
                        for (let t = this.scopeStack.length - 1;; t--) {
                            const e = this.scopeStack[t];
                            if (131 & e.flags) return e
                        }
                    }
                    currentThisScope() {
                        for (let t = this.scopeStack.length - 1;; t--) {
                            const e = this.scopeStack[t];
                            if ((131 & e.flags || 64 & e.flags) && !(4 & e.flags)) return e
                        }
                    }
                }
                class tt extends $ {
                    constructor(...t) {
                        super(...t), this.types = [], this.enums = [], this.constEnums = [], this.classes = [], this.exportOnlyBindings = []
                    }
                }
                class et extends Z {
                    createScope(t) {
                        return new tt(t)
                    }
                    declareName(t, e, s) {
                        const i = this.currentScope();
                        if (1024 & e) return this.maybeExportDefined(i, t), void i.exportOnlyBindings.push(t);
                        super.declareName(...arguments), 2 & e && (1 & e || (this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t)), i.types.push(t)), 256 & e && i.enums.push(t), 512 & e && i.constEnums.push(t), 128 & e && i.classes.push(t)
                    }
                    isRedeclaredInScope(t, e, s) {
                        return t.enums.indexOf(e) > -1 ? !(256 & s) || !!(512 & s) != t.constEnums.indexOf(e) > -1 : 128 & s && t.classes.indexOf(e) > -1 ? t.lexical.indexOf(e) > -1 && !!(1 & s) : !!(2 & s && t.types.indexOf(e) > -1) || super.isRedeclaredInScope(...arguments)
                    }
                    checkLocalExport(t) {
                        -1 === this.scopeStack[0].types.indexOf(t.name) && -1 === this.scopeStack[0].exportOnlyBindings.indexOf(t.name) && super.checkLocalExport(t)
                    }
                }
                class st {
                    constructor() {
                        this.stacks = []
                    }
                    enter(t) {
                        this.stacks.push(t)
                    }
                    exit() {
                        this.stacks.pop()
                    }
                    currentFlags() {
                        return this.stacks[this.stacks.length - 1]
                    }
                    get hasAwait() {
                        return (2 & this.currentFlags()) > 0
                    }
                    get hasYield() {
                        return (1 & this.currentFlags()) > 0
                    }
                    get hasReturn() {
                        return (4 & this.currentFlags()) > 0
                    }
                    get hasIn() {
                        return (8 & this.currentFlags()) > 0
                    }
                }

                function it(t, e) {
                    return (t ? 2 : 0) | (e ? 1 : 0)
                }

                function rt(t) {
                    if (null == t) throw new Error(`Unexpected ${t} value.`);
                    return t
                }

                function at(t) {
                    if (!t) throw new Error("Assert fail")
                }
                const nt = Object.freeze({
                    ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier",
                    ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier",
                    ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
                    DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
                    DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
                    DuplicateModifier: "Duplicate modifier: '%0'",
                    EmptyHeritageClauseType: "'%0' list cannot be empty.",
                    EmptyTypeArguments: "Type argument list cannot be empty.",
                    EmptyTypeParameters: "Type parameter list cannot be empty.",
                    IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier",
                    IndexSignatureHasAccessibility: "Index signatures cannot have an accessibility modifier ('%0')",
                    IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier",
                    IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier",
                    InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
                    MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
                    OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
                    PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
                    PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
                    PrivateElementHasAccessibility: "Private elements cannot have an accessibility modifier ('%0')",
                    TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
                    UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
                    UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
                    UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
                    UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
                    UnsupportedImportTypeArgument: "Argument in a type import must be a string literal",
                    UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
                    UnsupportedSignatureParameterKind: "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0"
                });

                function ot(t, e) {
                    return t.some((t => Array.isArray(t) ? t[0] === e : t === e))
                }

                function ht(t, e, s) {
                    const i = t.find((t => Array.isArray(t) ? t[0] === e : t === e));
                    return i && Array.isArray(i) ? i[1][s] : null
                }
                c.placeholder = new n("%%", {
                    startsExpr: !0
                });
                const pt = ["minimal", "smart", "fsharp"],
                    ct = ["hash", "bar"],
                    lt = {
                        estree: t => class extends t {
                            estreeParseRegExpLiteral({
                                pattern: t,
                                flags: e
                            }) {
                                let s = null;
                                try {
                                    s = new RegExp(t, e)
                                } catch (t) {}
                                const i = this.estreeParseLiteral(s);
                                return i.regex = {
                                    pattern: t,
                                    flags: e
                                }, i
                            }
                            estreeParseBigIntLiteral(t) {
                                let e;
                                try {
                                    e = BigInt(t)
                                } catch (t) {
                                    e = null
                                }
                                const s = this.estreeParseLiteral(e);
                                return s.bigint = String(s.value || t), s
                            }
                            estreeParseDecimalLiteral(t) {
                                const e = this.estreeParseLiteral(null);
                                return e.decimal = String(e.value || t), e
                            }
                            estreeParseLiteral(t) {
                                return this.parseLiteral(t, "Literal")
                            }
                            directiveToStmt(t) {
                                const e = t.value,
                                    s = this.startNodeAt(t.start, t.loc.start),
                                    i = this.startNodeAt(e.start, e.loc.start);
                                return i.value = e.extra.expressionValue, i.raw = e.extra.raw, s.expression = this.finishNodeAt(i, "Literal", e.end, e.loc.end), s.directive = e.extra.raw.slice(1, -1), this.finishNodeAt(s, "ExpressionStatement", t.end, t.loc.end)
                            }
                            initFunction(t, e) {
                                super.initFunction(t, e), t.expression = !1
                            }
                            checkDeclaration(t) {
                                null != t && this.isObjectProperty(t) ? this.checkDeclaration(t.value) : super.checkDeclaration(t)
                            }
                            getObjectOrClassMethodParams(t) {
                                return t.value.params
                            }
                            isValidDirective(t) {
                                var e;
                                return "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && !(null == (e = t.expression.extra) ? void 0 : e.parenthesized)
                            }
                            stmtToDirective(t) {
                                const e = super.stmtToDirective(t),
                                    s = t.expression.value;
                                return this.addExtra(e.value, "expressionValue", s), e
                            }
                            parseBlockBody(t, ...e) {
                                super.parseBlockBody(t, ...e);
                                const s = t.directives.map((t => this.directiveToStmt(t)));
                                t.body = s.concat(t.body), delete t.directives
                            }
                            pushClassMethod(t, e, s, i, r, a) {
                                this.parseMethod(e, s, i, r, a, "ClassMethod", !0), e.typeParameters && (e.value.typeParameters = e.typeParameters, delete e.typeParameters), t.body.push(e)
                            }
                            parseExprAtom(t) {
                                switch (this.state.type) {
                                    case c.num:
                                    case c.string:
                                        return this.estreeParseLiteral(this.state.value);
                                    case c.regexp:
                                        return this.estreeParseRegExpLiteral(this.state.value);
                                    case c.bigint:
                                        return this.estreeParseBigIntLiteral(this.state.value);
                                    case c.decimal:
                                        return this.estreeParseDecimalLiteral(this.state.value);
                                    case c._null:
                                        return this.estreeParseLiteral(null);
                                    case c._true:
                                        return this.estreeParseLiteral(!0);
                                    case c._false:
                                        return this.estreeParseLiteral(!1);
                                    default:
                                        return super.parseExprAtom(t)
                                }
                            }
                            parseLiteral(t, e, s, i) {
                                const r = super.parseLiteral(t, e, s, i);
                                return r.raw = r.extra.raw, delete r.extra, r
                            }
                            parseFunctionBody(t, e, s = !1) {
                                super.parseFunctionBody(t, e, s), t.expression = "BlockStatement" !== t.body.type
                            }
                            parseMethod(t, e, s, i, r, a, n = !1) {
                                let o = this.startNode();
                                return o.kind = t.kind, o = super.parseMethod(o, e, s, i, r, a, n), o.type = "FunctionExpression", delete o.kind, t.value = o, a = "ClassMethod" === a ? "MethodDefinition" : a, this.finishNode(t, a)
                            }
                            parseObjectMethod(t, e, s, i, r) {
                                const a = super.parseObjectMethod(t, e, s, i, r);
                                return a && (a.type = "Property", "method" === a.kind && (a.kind = "init"), a.shorthand = !1), a
                            }
                            parseObjectProperty(t, e, s, i, r) {
                                const a = super.parseObjectProperty(t, e, s, i, r);
                                return a && (a.kind = "init", a.type = "Property"), a
                            }
                            toAssignable(t, e = !1) {
                                return null != t && this.isObjectProperty(t) ? (this.toAssignable(t.value, e), t) : super.toAssignable(t, e)
                            }
                            toAssignableObjectExpressionProp(t, ...e) {
                                "get" === t.kind || "set" === t.kind ? this.raise(t.key.start, g.PatternHasAccessor) : t.method ? this.raise(t.key.start, g.PatternHasMethod) : super.toAssignableObjectExpressionProp(t, ...e)
                            }
                            finishCallExpression(t, e) {
                                return super.finishCallExpression(t, e), "Import" === t.callee.type && (t.type = "ImportExpression", t.source = t.arguments[0], delete t.arguments, delete t.callee), t
                            }
                            toReferencedArguments(t) {
                                "ImportExpression" !== t.type && super.toReferencedArguments(t)
                            }
                            parseExport(t) {
                                switch (super.parseExport(t), t.type) {
                                    case "ExportAllDeclaration":
                                        t.exported = null;
                                        break;
                                    case "ExportNamedDeclaration":
                                        1 === t.specifiers.length && "ExportNamespaceSpecifier" === t.specifiers[0].type && (t.type = "ExportAllDeclaration", t.exported = t.specifiers[0].exported, delete t.specifiers)
                                }
                                return t
                            }
                            parseSubscript(t, e, s, i, r) {
                                const a = super.parseSubscript(t, e, s, i, r);
                                if (r.optionalChainMember) {
                                    if ("OptionalMemberExpression" !== a.type && "OptionalCallExpression" !== a.type || (a.type = a.type.substring(8)), r.stop) {
                                        const t = this.startNodeAtNode(a);
                                        return t.expression = a, this.finishNode(t, "ChainExpression")
                                    }
                                } else "MemberExpression" !== a.type && "CallExpression" !== a.type || (a.optional = !1);
                                return a
                            }
                            hasPropertyAsPrivateName(t) {
                                return "ChainExpression" === t.type && (t = t.expression), super.hasPropertyAsPrivateName(t)
                            }
                            isOptionalChain(t) {
                                return "ChainExpression" === t.type
                            }
                            isObjectProperty(t) {
                                return "Property" === t.type && "init" === t.kind && !t.method
                            }
                            isObjectMethod(t) {
                                return t.method || "get" === t.kind || "set" === t.kind
                            }
                        },
                        jsx: t => class extends t {
                            jsxReadToken() {
                                let t = "",
                                    e = this.state.pos;
                                for (;;) {
                                    if (this.state.pos >= this.length) throw this.raise(this.state.start, G.UnterminatedJsxContent);
                                    const s = this.input.charCodeAt(this.state.pos);
                                    switch (s) {
                                        case 60:
                                        case 123:
                                            return this.state.pos === this.state.start ? 60 === s && this.state.exprAllowed ? (++this.state.pos, this.finishToken(c.jsxTagStart)) : super.getTokenFromCode(s) : (t += this.input.slice(e, this.state.pos), this.finishToken(c.jsxText, t));
                                        case 38:
                                            t += this.input.slice(e, this.state.pos), t += this.jsxReadEntity(), e = this.state.pos;
                                            break;
                                        default:
                                            d(s) ? (t += this.input.slice(e, this.state.pos), t += this.jsxReadNewLine(!0), e = this.state.pos) : ++this.state.pos
                                    }
                                }
                            }
                            jsxReadNewLine(t) {
                                const e = this.input.charCodeAt(this.state.pos);
                                let s;
                                return ++this.state.pos, 13 === e && 10 === this.input.charCodeAt(this.state.pos) ? (++this.state.pos, s = t ? "\n" : "\r\n") : s = String.fromCharCode(e), ++this.state.curLine, this.state.lineStart = this.state.pos, s
                            }
                            jsxReadString(t) {
                                let e = "",
                                    s = ++this.state.pos;
                                for (;;) {
                                    if (this.state.pos >= this.length) throw this.raise(this.state.start, g.UnterminatedString);
                                    const i = this.input.charCodeAt(this.state.pos);
                                    if (i === t) break;
                                    38 === i ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos) : d(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(!1), s = this.state.pos) : ++this.state.pos
                                }
                                return e += this.input.slice(s, this.state.pos++), this.finishToken(c.string, e)
                            }
                            jsxReadEntity() {
                                let t, e = "",
                                    s = 0,
                                    i = this.input[this.state.pos];
                                const r = ++this.state.pos;
                                for (; this.state.pos < this.length && s++ < 10;) {
                                    if (i = this.input[this.state.pos++], ";" === i) {
                                        "#" === e[0] ? "x" === e[1] ? (e = e.substr(2), J.test(e) && (t = String.fromCodePoint(parseInt(e, 16)))) : (e = e.substr(1), X.test(e) && (t = String.fromCodePoint(parseInt(e, 10)))) : t = W[e];
                                        break
                                    }
                                    e += i
                                }
                                return t || (this.state.pos = r, "&")
                            }
                            jsxReadWord() {
                                let t;
                                const e = this.state.pos;
                                do {
                                    t = this.input.charCodeAt(++this.state.pos)
                                } while (v(t) || 45 === t);
                                return this.finishToken(c.jsxName, this.input.slice(e, this.state.pos))
                            }
                            jsxParseIdentifier() {
                                const t = this.startNode();
                                return this.match(c.jsxName) ? t.name = this.state.value : this.state.type.keyword ? t.name = this.state.type.keyword : this.unexpected(), this.next(), this.finishNode(t, "JSXIdentifier")
                            }
                            jsxParseNamespacedName() {
                                const t = this.state.start,
                                    e = this.state.startLoc,
                                    s = this.jsxParseIdentifier();
                                if (!this.eat(c.colon)) return s;
                                const i = this.startNodeAt(t, e);
                                return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName")
                            }
                            jsxParseElementName() {
                                const t = this.state.start,
                                    e = this.state.startLoc;
                                let s = this.jsxParseNamespacedName();
                                if ("JSXNamespacedName" === s.type) return s;
                                for (; this.eat(c.dot);) {
                                    const i = this.startNodeAt(t, e);
                                    i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression")
                                }
                                return s
                            }
                            jsxParseAttributeValue() {
                                let t;
                                switch (this.state.type) {
                                    case c.braceL:
                                        return t = this.startNode(), this.next(), t = this.jsxParseExpressionContainer(t), "JSXEmptyExpression" === t.expression.type && this.raise(t.start, G.AttributeIsEmpty), t;
                                    case c.jsxTagStart:
                                    case c.string:
                                        return this.parseExprAtom();
                                    default:
                                        throw this.raise(this.state.start, G.UnsupportedJsxValue)
                                }
                            }
                            jsxParseEmptyExpression() {
                                const t = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
                                return this.finishNodeAt(t, "JSXEmptyExpression", this.state.start, this.state.startLoc)
                            }
                            jsxParseSpreadChild(t) {
                                return this.next(), t.expression = this.parseExpression(), this.expect(c.braceR), this.finishNode(t, "JSXSpreadChild")
                            }
                            jsxParseExpressionContainer(t) {
                                if (this.match(c.braceR)) t.expression = this.jsxParseEmptyExpression();
                                else {
                                    const e = this.parseExpression();
                                    t.expression = e
                                }
                                return this.expect(c.braceR), this.finishNode(t, "JSXExpressionContainer")
                            }
                            jsxParseAttribute() {
                                const t = this.startNode();
                                return this.eat(c.braceL) ? (this.expect(c.ellipsis), t.argument = this.parseMaybeAssignAllowIn(), this.expect(c.braceR), this.finishNode(t, "JSXSpreadAttribute")) : (t.name = this.jsxParseNamespacedName(), t.value = this.eat(c.eq) ? this.jsxParseAttributeValue() : null, this.finishNode(t, "JSXAttribute"))
                            }
                            jsxParseOpeningElementAt(t, e) {
                                const s = this.startNodeAt(t, e);
                                return this.match(c.jsxTagEnd) ? (this.expect(c.jsxTagEnd), this.finishNode(s, "JSXOpeningFragment")) : (s.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s))
                            }
                            jsxParseOpeningElementAfterName(t) {
                                const e = [];
                                for (; !this.match(c.slash) && !this.match(c.jsxTagEnd);) e.push(this.jsxParseAttribute());
                                return t.attributes = e, t.selfClosing = this.eat(c.slash), this.expect(c.jsxTagEnd), this.finishNode(t, "JSXOpeningElement")
                            }
                            jsxParseClosingElementAt(t, e) {
                                const s = this.startNodeAt(t, e);
                                return this.match(c.jsxTagEnd) ? (this.expect(c.jsxTagEnd), this.finishNode(s, "JSXClosingFragment")) : (s.name = this.jsxParseElementName(), this.expect(c.jsxTagEnd), this.finishNode(s, "JSXClosingElement"))
                            }
                            jsxParseElementAt(t, e) {
                                const s = this.startNodeAt(t, e),
                                    i = [],
                                    r = this.jsxParseOpeningElementAt(t, e);
                                let a = null;
                                if (!r.selfClosing) {
                                    t: for (;;) switch (this.state.type) {
                                        case c.jsxTagStart:
                                            if (t = this.state.start, e = this.state.startLoc, this.next(), this.eat(c.slash)) {
                                                a = this.jsxParseClosingElementAt(t, e);
                                                break t
                                            }
                                            i.push(this.jsxParseElementAt(t, e));
                                            break;
                                        case c.jsxText:
                                            i.push(this.parseExprAtom());
                                            break;
                                        case c.braceL: {
                                            const t = this.startNode();
                                            this.next(), this.match(c.ellipsis) ? i.push(this.jsxParseSpreadChild(t)) : i.push(this.jsxParseExpressionContainer(t));
                                            break
                                        }
                                        default:
                                            throw this.unexpected()
                                    }
                                    Q(r) && !Q(a) ? this.raise(a.start, G.MissingClosingTagFragment) : !Q(r) && Q(a) ? this.raise(a.start, G.MissingClosingTagElement, Y(r.name)) : Q(r) || Q(a) || Y(a.name) !== Y(r.name) && this.raise(a.start, G.MissingClosingTagElement, Y(r.name))
                                }
                                if (Q(r) ? (s.openingFragment = r, s.closingFragment = a) : (s.openingElement = r, s.closingElement = a), s.children = i, this.isRelational("<")) throw this.raise(this.state.start, G.UnwrappedAdjacentJSXElements);
                                return Q(r) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement")
                            }
                            jsxParseElement() {
                                const t = this.state.start,
                                    e = this.state.startLoc;
                                return this.next(), this.jsxParseElementAt(t, e)
                            }
                            parseExprAtom(t) {
                                return this.match(c.jsxText) ? this.parseLiteral(this.state.value, "JSXText") : this.match(c.jsxTagStart) ? this.jsxParseElement() : this.isRelational("<") && 33 !== this.input.charCodeAt(this.state.pos) ? (this.finishToken(c.jsxTagStart), this.jsxParseElement()) : super.parseExprAtom(t)
                            }
                            getTokenFromCode(t) {
                                if (this.state.inPropertyName) return super.getTokenFromCode(t);
                                const e = this.curContext();
                                if (e === T.j_expr) return this.jsxReadToken();
                                if (e === T.j_oTag || e === T.j_cTag) {
                                    if (I(t)) return this.jsxReadWord();
                                    if (62 === t) return ++this.state.pos, this.finishToken(c.jsxTagEnd);
                                    if ((34 === t || 39 === t) && e === T.j_oTag) return this.jsxReadString(t)
                                }
                                return 60 === t && this.state.exprAllowed && 33 !== this.input.charCodeAt(this.state.pos + 1) ? (++this.state.pos, this.finishToken(c.jsxTagStart)) : super.getTokenFromCode(t)
                            }
                            updateContext(t) {
                                if (this.match(c.braceL)) {
                                    const e = this.curContext();
                                    e === T.j_oTag ? this.state.context.push(T.braceExpression) : e === T.j_expr ? this.state.context.push(T.templateQuasi) : super.updateContext(t), this.state.exprAllowed = !0
                                } else {
                                    if (!this.match(c.slash) || t !== c.jsxTagStart) return super.updateContext(t);
                                    this.state.context.length -= 2, this.state.context.push(T.j_cTag), this.state.exprAllowed = !1
                                }
                            }
                        },
                        flow: t => class extends t {
                            constructor(t, e) {
                                super(t, e), this.flowPragma = void 0, this.flowPragma = void 0
                            }
                            shouldParseTypes() {
                                return this.getPluginOption("flow", "all") || "flow" === this.flowPragma
                            }
                            shouldParseEnums() {
                                return !!this.getPluginOption("flow", "enums")
                            }
                            finishToken(t, e) {
                                return t !== c.string && t !== c.semi && t !== c.interpreterDirective && void 0 === this.flowPragma && (this.flowPragma = null), super.finishToken(t, e)
                            }
                            addComment(t) {
                                if (void 0 === this.flowPragma) {
                                    const e = K.exec(t.value);
                                    if (e)
                                        if ("flow" === e[1]) this.flowPragma = "flow";
                                        else {
                                            if ("noflow" !== e[1]) throw new Error("Unexpected flow pragma");
                                            this.flowPragma = "noflow"
                                        }
                                }
                                return super.addComment(t)
                            }
                            flowParseTypeInitialiser(t) {
                                const e = this.state.inType;
                                this.state.inType = !0, this.expect(t || c.colon);
                                const s = this.flowParseType();
                                return this.state.inType = e, s
                            }
                            flowParsePredicate() {
                                const t = this.startNode(),
                                    e = this.state.startLoc,
                                    s = this.state.start;
                                this.expect(c.modulo);
                                const i = this.state.startLoc;
                                return this.expectContextual("checks"), e.line === i.line && e.column === i.column - 1 || this.raise(s, q.UnexpectedSpaceBetweenModuloChecks), this.eat(c.parenL) ? (t.value = this.parseExpression(), this.expect(c.parenR), this.finishNode(t, "DeclaredPredicate")) : this.finishNode(t, "InferredPredicate")
                            }
                            flowParseTypeAndPredicateInitialiser() {
                                const t = this.state.inType;
                                this.state.inType = !0, this.expect(c.colon);
                                let e = null,
                                    s = null;
                                return this.match(c.modulo) ? (this.state.inType = t, s = this.flowParsePredicate()) : (e = this.flowParseType(), this.state.inType = t, this.match(c.modulo) && (s = this.flowParsePredicate())), [e, s]
                            }
                            flowParseDeclareClass(t) {
                                return this.next(), this.flowParseInterfaceish(t, !0), this.finishNode(t, "DeclareClass")
                            }
                            flowParseDeclareFunction(t) {
                                this.next();
                                const e = t.id = this.parseIdentifier(),
                                    s = this.startNode(),
                                    i = this.startNode();
                                this.isRelational("<") ? s.typeParameters = this.flowParseTypeParameterDeclaration() : s.typeParameters = null, this.expect(c.parenL);
                                const r = this.flowParseFunctionTypeParams();
                                return s.params = r.params, s.rest = r.rest, this.expect(c.parenR), [s.returnType, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), i.typeAnnotation = this.finishNode(s, "FunctionTypeAnnotation"), e.typeAnnotation = this.finishNode(i, "TypeAnnotation"), this.resetEndLocation(e), this.semicolon(), this.finishNode(t, "DeclareFunction")
                            }
                            flowParseDeclare(t, e) {
                                if (this.match(c._class)) return this.flowParseDeclareClass(t);
                                if (this.match(c._function)) return this.flowParseDeclareFunction(t);
                                if (this.match(c._var)) return this.flowParseDeclareVariable(t);
                                if (this.eatContextual("module")) return this.match(c.dot) ? this.flowParseDeclareModuleExports(t) : (e && this.raise(this.state.lastTokStart, q.NestedDeclareModule), this.flowParseDeclareModule(t));
                                if (this.isContextual("type")) return this.flowParseDeclareTypeAlias(t);
                                if (this.isContextual("opaque")) return this.flowParseDeclareOpaqueType(t);
                                if (this.isContextual("interface")) return this.flowParseDeclareInterface(t);
                                if (this.match(c._export)) return this.flowParseDeclareExportDeclaration(t, e);
                                throw this.unexpected()
                            }
                            flowParseDeclareVariable(t) {
                                return this.next(), t.id = this.flowParseTypeAnnotatableIdentifier(!0), this.scope.declareName(t.id.name, 5, t.id.start), this.semicolon(), this.finishNode(t, "DeclareVariable")
                            }
                            flowParseDeclareModule(t) {
                                this.scope.enter(0), this.match(c.string) ? t.id = this.parseExprAtom() : t.id = this.parseIdentifier();
                                const e = t.body = this.startNode(),
                                    s = e.body = [];
                                for (this.expect(c.braceL); !this.match(c.braceR);) {
                                    let t = this.startNode();
                                    this.match(c._import) ? (this.next(), this.isContextual("type") || this.match(c._typeof) || this.raise(this.state.lastTokStart, q.InvalidNonTypeImportInDeclareModule), this.parseImport(t)) : (this.expectContextual("declare", q.UnsupportedStatementInDeclareModule), t = this.flowParseDeclare(t, !0)), s.push(t)
                                }
                                this.scope.exit(), this.expect(c.braceR), this.finishNode(e, "BlockStatement");
                                let i = null,
                                    r = !1;
                                return s.forEach((t => {
                                    ! function(t) {
                                        return "DeclareExportAllDeclaration" === t.type || "DeclareExportDeclaration" === t.type && (!t.declaration || "TypeAlias" !== t.declaration.type && "InterfaceDeclaration" !== t.declaration.type)
                                    }(t) ? "DeclareModuleExports" === t.type && (r && this.raise(t.start, q.DuplicateDeclareModuleExports), "ES" === i && this.raise(t.start, q.AmbiguousDeclareModuleKind), i = "CommonJS", r = !0): ("CommonJS" === i && this.raise(t.start, q.AmbiguousDeclareModuleKind), i = "ES")
                                })), t.kind = i || "CommonJS", this.finishNode(t, "DeclareModule")
                            }
                            flowParseDeclareExportDeclaration(t, e) {
                                if (this.expect(c._export), this.eat(c._default)) return this.match(c._function) || this.match(c._class) ? t.declaration = this.flowParseDeclare(this.startNode()) : (t.declaration = this.flowParseType(), this.semicolon()), t.default = !0, this.finishNode(t, "DeclareExportDeclaration");
                                if (this.match(c._const) || this.isLet() || (this.isContextual("type") || this.isContextual("interface")) && !e) {
                                    const t = this.state.value,
                                        e = H[t];
                                    throw this.raise(this.state.start, q.UnsupportedDeclareExportKind, t, e)
                                }
                                if (this.match(c._var) || this.match(c._function) || this.match(c._class) || this.isContextual("opaque")) return t.declaration = this.flowParseDeclare(this.startNode()), t.default = !1, this.finishNode(t, "DeclareExportDeclaration");
                                if (this.match(c.star) || this.match(c.braceL) || this.isContextual("interface") || this.isContextual("type") || this.isContextual("opaque")) return "ExportNamedDeclaration" === (t = this.parseExport(t)).type && (t.type = "ExportDeclaration", t.default = !1, delete t.exportKind), t.type = "Declare" + t.type, t;
                                throw this.unexpected()
                            }
                            flowParseDeclareModuleExports(t) {
                                return this.next(), this.expectContextual("exports"), t.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(t, "DeclareModuleExports")
                            }
                            flowParseDeclareTypeAlias(t) {
                                return this.next(), this.flowParseTypeAlias(t), t.type = "DeclareTypeAlias", t
                            }
                            flowParseDeclareOpaqueType(t) {
                                return this.next(), this.flowParseOpaqueType(t, !0), t.type = "DeclareOpaqueType", t
                            }
                            flowParseDeclareInterface(t) {
                                return this.next(), this.flowParseInterfaceish(t), this.finishNode(t, "DeclareInterface")
                            }
                            flowParseInterfaceish(t, e = !1) {
                                if (t.id = this.flowParseRestrictedIdentifier(!e, !0), this.scope.declareName(t.id.name, e ? 17 : 9, t.id.start), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.extends = [], t.implements = [], t.mixins = [], this.eat(c._extends))
                                    do {
                                        t.extends.push(this.flowParseInterfaceExtends())
                                    } while (!e && this.eat(c.comma));
                                if (this.isContextual("mixins")) {
                                    this.next();
                                    do {
                                        t.mixins.push(this.flowParseInterfaceExtends())
                                    } while (this.eat(c.comma))
                                }
                                if (this.isContextual("implements")) {
                                    this.next();
                                    do {
                                        t.implements.push(this.flowParseInterfaceExtends())
                                    } while (this.eat(c.comma))
                                }
                                t.body = this.flowParseObjectType({
                                    allowStatic: e,
                                    allowExact: !1,
                                    allowSpread: !1,
                                    allowProto: e,
                                    allowInexact: !1
                                })
                            }
                            flowParseInterfaceExtends() {
                                const t = this.startNode();
                                return t.id = this.flowParseQualifiedTypeIdentifier(), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterInstantiation() : t.typeParameters = null, this.finishNode(t, "InterfaceExtends")
                            }
                            flowParseInterface(t) {
                                return this.flowParseInterfaceish(t), this.finishNode(t, "InterfaceDeclaration")
                            }
                            checkNotUnderscore(t) {
                                "_" === t && this.raise(this.state.start, q.UnexpectedReservedUnderscore)
                            }
                            checkReservedType(t, e, s) {
                                U.has(t) && this.raise(e, s ? q.AssignReservedType : q.UnexpectedReservedType, t)
                            }
                            flowParseRestrictedIdentifier(t, e) {
                                return this.checkReservedType(this.state.value, this.state.start, e), this.parseIdentifier(t)
                            }
                            flowParseTypeAlias(t) {
                                return t.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(t.id.name, 9, t.id.start), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.right = this.flowParseTypeInitialiser(c.eq), this.semicolon(), this.finishNode(t, "TypeAlias")
                            }
                            flowParseOpaqueType(t, e) {
                                return this.expectContextual("type"), t.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(t.id.name, 9, t.id.start), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.supertype = null, this.match(c.colon) && (t.supertype = this.flowParseTypeInitialiser(c.colon)), t.impltype = null, e || (t.impltype = this.flowParseTypeInitialiser(c.eq)), this.semicolon(), this.finishNode(t, "OpaqueType")
                            }
                            flowParseTypeParameter(t = !1) {
                                const e = this.state.start,
                                    s = this.startNode(),
                                    i = this.flowParseVariance(),
                                    r = this.flowParseTypeAnnotatableIdentifier();
                                return s.name = r.name, s.variance = i, s.bound = r.typeAnnotation, this.match(c.eq) ? (this.eat(c.eq), s.default = this.flowParseType()) : t && this.raise(e, q.MissingTypeParamDefault), this.finishNode(s, "TypeParameter")
                            }
                            flowParseTypeParameterDeclaration() {
                                const t = this.state.inType,
                                    e = this.startNode();
                                e.params = [], this.state.inType = !0, this.isRelational("<") || this.match(c.jsxTagStart) ? this.next() : this.unexpected();
                                let s = !1;
                                do {
                                    const t = this.flowParseTypeParameter(s);
                                    e.params.push(t), t.default && (s = !0), this.isRelational(">") || this.expect(c.comma)
                                } while (!this.isRelational(">"));
                                return this.expectRelational(">"), this.state.inType = t, this.finishNode(e, "TypeParameterDeclaration")
                            }
                            flowParseTypeParameterInstantiation() {
                                const t = this.startNode(),
                                    e = this.state.inType;
                                t.params = [], this.state.inType = !0, this.expectRelational("<");
                                const s = this.state.noAnonFunctionType;
                                for (this.state.noAnonFunctionType = !1; !this.isRelational(">");) t.params.push(this.flowParseType()), this.isRelational(">") || this.expect(c.comma);
                                return this.state.noAnonFunctionType = s, this.expectRelational(">"), this.state.inType = e, this.finishNode(t, "TypeParameterInstantiation")
                            }
                            flowParseTypeParameterInstantiationCallOrNew() {
                                const t = this.startNode(),
                                    e = this.state.inType;
                                for (t.params = [], this.state.inType = !0, this.expectRelational("<"); !this.isRelational(">");) t.params.push(this.flowParseTypeOrImplicitInstantiation()), this.isRelational(">") || this.expect(c.comma);
                                return this.expectRelational(">"), this.state.inType = e, this.finishNode(t, "TypeParameterInstantiation")
                            }
                            flowParseInterfaceType() {
                                const t = this.startNode();
                                if (this.expectContextual("interface"), t.extends = [], this.eat(c._extends))
                                    do {
                                        t.extends.push(this.flowParseInterfaceExtends())
                                    } while (this.eat(c.comma));
                                return t.body = this.flowParseObjectType({
                                    allowStatic: !1,
                                    allowExact: !1,
                                    allowSpread: !1,
                                    allowProto: !1,
                                    allowInexact: !1
                                }), this.finishNode(t, "InterfaceTypeAnnotation")
                            }
                            flowParseObjectPropertyKey() {
                                return this.match(c.num) || this.match(c.string) ? this.parseExprAtom() : this.parseIdentifier(!0)
                            }
                            flowParseObjectTypeIndexer(t, e, s) {
                                return t.static = e, this.lookahead().type === c.colon ? (t.id = this.flowParseObjectPropertyKey(), t.key = this.flowParseTypeInitialiser()) : (t.id = null, t.key = this.flowParseType()), this.expect(c.bracketR), t.value = this.flowParseTypeInitialiser(), t.variance = s, this.finishNode(t, "ObjectTypeIndexer")
                            }
                            flowParseObjectTypeInternalSlot(t, e) {
                                return t.static = e, t.id = this.flowParseObjectPropertyKey(), this.expect(c.bracketR), this.expect(c.bracketR), this.isRelational("<") || this.match(c.parenL) ? (t.method = !0, t.optional = !1, t.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t.start, t.loc.start))) : (t.method = !1, this.eat(c.question) && (t.optional = !0), t.value = this.flowParseTypeInitialiser()), this.finishNode(t, "ObjectTypeInternalSlot")
                            }
                            flowParseObjectTypeMethodish(t) {
                                for (t.params = [], t.rest = null, t.typeParameters = null, this.isRelational("<") && (t.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(c.parenL); !this.match(c.parenR) && !this.match(c.ellipsis);) t.params.push(this.flowParseFunctionTypeParam()), this.match(c.parenR) || this.expect(c.comma);
                                return this.eat(c.ellipsis) && (t.rest = this.flowParseFunctionTypeParam()), this.expect(c.parenR), t.returnType = this.flowParseTypeInitialiser(), this.finishNode(t, "FunctionTypeAnnotation")
                            }
                            flowParseObjectTypeCallProperty(t, e) {
                                const s = this.startNode();
                                return t.static = e, t.value = this.flowParseObjectTypeMethodish(s), this.finishNode(t, "ObjectTypeCallProperty")
                            }
                            flowParseObjectType({
                                allowStatic: t,
                                allowExact: e,
                                allowSpread: s,
                                allowProto: i,
                                allowInexact: r
                            }) {
                                const a = this.state.inType;
                                this.state.inType = !0;
                                const n = this.startNode();
                                let o, h;
                                n.callProperties = [], n.properties = [], n.indexers = [], n.internalSlots = [];
                                let p = !1;
                                for (e && this.match(c.braceBarL) ? (this.expect(c.braceBarL), o = c.braceBarR, h = !0) : (this.expect(c.braceL), o = c.braceR, h = !1), n.exact = h; !this.match(o);) {
                                    let e = !1,
                                        a = null,
                                        o = null;
                                    const l = this.startNode();
                                    if (i && this.isContextual("proto")) {
                                        const e = this.lookahead();
                                        e.type !== c.colon && e.type !== c.question && (this.next(), a = this.state.start, t = !1)
                                    }
                                    if (t && this.isContextual("static")) {
                                        const t = this.lookahead();
                                        t.type !== c.colon && t.type !== c.question && (this.next(), e = !0)
                                    }
                                    const u = this.flowParseVariance();
                                    if (this.eat(c.bracketL)) null != a && this.unexpected(a), this.eat(c.bracketL) ? (u && this.unexpected(u.start), n.internalSlots.push(this.flowParseObjectTypeInternalSlot(l, e))) : n.indexers.push(this.flowParseObjectTypeIndexer(l, e, u));
                                    else if (this.match(c.parenL) || this.isRelational("<")) null != a && this.unexpected(a), u && this.unexpected(u.start), n.callProperties.push(this.flowParseObjectTypeCallProperty(l, e));
                                    else {
                                        let t = "init";
                                        if (this.isContextual("get") || this.isContextual("set")) {
                                            const e = this.lookahead();
                                            e.type !== c.name && e.type !== c.string && e.type !== c.num || (t = this.state.value, this.next())
                                        }
                                        const i = this.flowParseObjectTypeProperty(l, e, a, u, t, s, null != r ? r : !h);
                                        null === i ? (p = !0, o = this.state.lastTokStart) : n.properties.push(i)
                                    }
                                    this.flowObjectTypeSemicolon(), !o || this.match(c.braceR) || this.match(c.braceBarR) || this.raise(o, q.UnexpectedExplicitInexactInObject)
                                }
                                this.expect(o), s && (n.inexact = p);
                                const l = this.finishNode(n, "ObjectTypeAnnotation");
                                return this.state.inType = a, l
                            }
                            flowParseObjectTypeProperty(t, e, s, i, r, a, n) {
                                if (this.eat(c.ellipsis)) return this.match(c.comma) || this.match(c.semi) || this.match(c.braceR) || this.match(c.braceBarR) ? (a ? n || this.raise(this.state.lastTokStart, q.InexactInsideExact) : this.raise(this.state.lastTokStart, q.InexactInsideNonObject), i && this.raise(i.start, q.InexactVariance), null) : (a || this.raise(this.state.lastTokStart, q.UnexpectedSpreadType), null != s && this.unexpected(s), i && this.raise(i.start, q.SpreadVariance), t.argument = this.flowParseType(), this.finishNode(t, "ObjectTypeSpreadProperty")); {
                                    t.key = this.flowParseObjectPropertyKey(), t.static = e, t.proto = null != s, t.kind = r;
                                    let a = !1;
                                    return this.isRelational("<") || this.match(c.parenL) ? (t.method = !0, null != s && this.unexpected(s), i && this.unexpected(i.start), t.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t.start, t.loc.start)), "get" !== r && "set" !== r || this.flowCheckGetterSetterParams(t)) : ("init" !== r && this.unexpected(), t.method = !1, this.eat(c.question) && (a = !0), t.value = this.flowParseTypeInitialiser(), t.variance = i), t.optional = a, this.finishNode(t, "ObjectTypeProperty")
                                }
                            }
                            flowCheckGetterSetterParams(t) {
                                const e = "get" === t.kind ? 0 : 1,
                                    s = t.start;
                                t.value.params.length + (t.value.rest ? 1 : 0) !== e && ("get" === t.kind ? this.raise(s, g.BadGetterArity) : this.raise(s, g.BadSetterArity)), "set" === t.kind && t.value.rest && this.raise(s, g.BadSetterRestParameter)
                            }
                            flowObjectTypeSemicolon() {
                                this.eat(c.semi) || this.eat(c.comma) || this.match(c.braceR) || this.match(c.braceBarR) || this.unexpected()
                            }
                            flowParseQualifiedTypeIdentifier(t, e, s) {
                                t = t || this.state.start, e = e || this.state.startLoc;
                                let i = s || this.flowParseRestrictedIdentifier(!0);
                                for (; this.eat(c.dot);) {
                                    const s = this.startNodeAt(t, e);
                                    s.qualification = i, s.id = this.flowParseRestrictedIdentifier(!0), i = this.finishNode(s, "QualifiedTypeIdentifier")
                                }
                                return i
                            }
                            flowParseGenericType(t, e, s) {
                                const i = this.startNodeAt(t, e);
                                return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(t, e, s), this.isRelational("<") && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation")
                            }
                            flowParseTypeofType() {
                                const t = this.startNode();
                                return this.expect(c._typeof), t.argument = this.flowParsePrimaryType(), this.finishNode(t, "TypeofTypeAnnotation")
                            }
                            flowParseTupleType() {
                                const t = this.startNode();
                                for (t.types = [], this.expect(c.bracketL); this.state.pos < this.length && !this.match(c.bracketR) && (t.types.push(this.flowParseType()), !this.match(c.bracketR));) this.expect(c.comma);
                                return this.expect(c.bracketR), this.finishNode(t, "TupleTypeAnnotation")
                            }
                            flowParseFunctionTypeParam() {
                                let t = null,
                                    e = !1,
                                    s = null;
                                const i = this.startNode(),
                                    r = this.lookahead();
                                return r.type === c.colon || r.type === c.question ? (t = this.parseIdentifier(), this.eat(c.question) && (e = !0), s = this.flowParseTypeInitialiser()) : s = this.flowParseType(), i.name = t, i.optional = e, i.typeAnnotation = s, this.finishNode(i, "FunctionTypeParam")
                            }
                            reinterpretTypeAsFunctionTypeParam(t) {
                                const e = this.startNodeAt(t.start, t.loc.start);
                                return e.name = null, e.optional = !1, e.typeAnnotation = t, this.finishNode(e, "FunctionTypeParam")
                            }
                            flowParseFunctionTypeParams(t = []) {
                                let e = null;
                                for (; !this.match(c.parenR) && !this.match(c.ellipsis);) t.push(this.flowParseFunctionTypeParam()), this.match(c.parenR) || this.expect(c.comma);
                                return this.eat(c.ellipsis) && (e = this.flowParseFunctionTypeParam()), {
                                    params: t,
                                    rest: e
                                }
                            }
                            flowIdentToTypeAnnotation(t, e, s, i) {
                                switch (i.name) {
                                    case "any":
                                        return this.finishNode(s, "AnyTypeAnnotation");
                                    case "bool":
                                    case "boolean":
                                        return this.finishNode(s, "BooleanTypeAnnotation");
                                    case "mixed":
                                        return this.finishNode(s, "MixedTypeAnnotation");
                                    case "empty":
                                        return this.finishNode(s, "EmptyTypeAnnotation");
                                    case "number":
                                        return this.finishNode(s, "NumberTypeAnnotation");
                                    case "string":
                                        return this.finishNode(s, "StringTypeAnnotation");
                                    case "symbol":
                                        return this.finishNode(s, "SymbolTypeAnnotation");
                                    default:
                                        return this.checkNotUnderscore(i.name), this.flowParseGenericType(t, e, i)
                                }
                            }
                            flowParsePrimaryType() {
                                const t = this.state.start,
                                    e = this.state.startLoc,
                                    s = this.startNode();
                                let i, r, a = !1;
                                const n = this.state.noAnonFunctionType;
                                switch (this.state.type) {
                                    case c.name:
                                        return this.isContextual("interface") ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(t, e, s, this.parseIdentifier());
                                    case c.braceL:
                                        return this.flowParseObjectType({
                                            allowStatic: !1,
                                            allowExact: !1,
                                            allowSpread: !0,
                                            allowProto: !1,
                                            allowInexact: !0
                                        });
                                    case c.braceBarL:
                                        return this.flowParseObjectType({
                                            allowStatic: !1,
                                            allowExact: !0,
                                            allowSpread: !0,
                                            allowProto: !1,
                                            allowInexact: !1
                                        });
                                    case c.bracketL:
                                        return this.state.noAnonFunctionType = !1, r = this.flowParseTupleType(), this.state.noAnonFunctionType = n, r;
                                    case c.relational:
                                        if ("<" === this.state.value) return s.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(c.parenL), i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, this.expect(c.parenR), this.expect(c.arrow), s.returnType = this.flowParseType(), this.finishNode(s, "FunctionTypeAnnotation");
                                        break;
                                    case c.parenL:
                                        if (this.next(), !this.match(c.parenR) && !this.match(c.ellipsis))
                                            if (this.match(c.name)) {
                                                const t = this.lookahead().type;
                                                a = t !== c.question && t !== c.colon
                                            } else a = !0;
                                        if (a) {
                                            if (this.state.noAnonFunctionType = !1, r = this.flowParseType(), this.state.noAnonFunctionType = n, this.state.noAnonFunctionType || !(this.match(c.comma) || this.match(c.parenR) && this.lookahead().type === c.arrow)) return this.expect(c.parenR), r;
                                            this.eat(c.comma)
                                        }
                                        return i = r ? this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]) : this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, this.expect(c.parenR), this.expect(c.arrow), s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
                                    case c.string:
                                        return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
                                    case c._true:
                                    case c._false:
                                        return s.value = this.match(c._true), this.next(), this.finishNode(s, "BooleanLiteralTypeAnnotation");
                                    case c.plusMin:
                                        if ("-" === this.state.value) {
                                            if (this.next(), this.match(c.num)) return this.parseLiteral(-this.state.value, "NumberLiteralTypeAnnotation", s.start, s.loc.start);
                                            if (this.match(c.bigint)) return this.parseLiteral(-this.state.value, "BigIntLiteralTypeAnnotation", s.start, s.loc.start);
                                            throw this.raise(this.state.start, q.UnexpectedSubtractionOperand)
                                        }
                                        throw this.unexpected();
                                    case c.num:
                                        return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
                                    case c.bigint:
                                        return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
                                    case c._void:
                                        return this.next(), this.finishNode(s, "VoidTypeAnnotation");
                                    case c._null:
                                        return this.next(), this.finishNode(s, "NullLiteralTypeAnnotation");
                                    case c._this:
                                        return this.next(), this.finishNode(s, "ThisTypeAnnotation");
                                    case c.star:
                                        return this.next(), this.finishNode(s, "ExistsTypeAnnotation");
                                    default:
                                        if ("typeof" === this.state.type.keyword) return this.flowParseTypeofType();
                                        if (this.state.type.keyword) {
                                            const t = this.state.type.label;
                                            return this.next(), super.createIdentifier(s, t)
                                        }
                                }
                                throw this.unexpected()
                            }
                            flowParsePostfixType() {
                                const t = this.state.start,
                                    e = this.state.startLoc;
                                let s = this.flowParsePrimaryType();
                                for (; this.match(c.bracketL) && !this.canInsertSemicolon();) {
                                    const i = this.startNodeAt(t, e);
                                    i.elementType = s, this.expect(c.bracketL), this.expect(c.bracketR), s = this.finishNode(i, "ArrayTypeAnnotation")
                                }
                                return s
                            }
                            flowParsePrefixType() {
                                const t = this.startNode();
                                return this.eat(c.question) ? (t.typeAnnotation = this.flowParsePrefixType(), this.finishNode(t, "NullableTypeAnnotation")) : this.flowParsePostfixType()
                            }
                            flowParseAnonFunctionWithoutParens() {
                                const t = this.flowParsePrefixType();
                                if (!this.state.noAnonFunctionType && this.eat(c.arrow)) {
                                    const e = this.startNodeAt(t.start, t.loc.start);
                                    return e.params = [this.reinterpretTypeAsFunctionTypeParam(t)], e.rest = null, e.returnType = this.flowParseType(), e.typeParameters = null, this.finishNode(e, "FunctionTypeAnnotation")
                                }
                                return t
                            }
                            flowParseIntersectionType() {
                                const t = this.startNode();
                                this.eat(c.bitwiseAND);
                                const e = this.flowParseAnonFunctionWithoutParens();
                                for (t.types = [e]; this.eat(c.bitwiseAND);) t.types.push(this.flowParseAnonFunctionWithoutParens());
                                return 1 === t.types.length ? e : this.finishNode(t, "IntersectionTypeAnnotation")
                            }
                            flowParseUnionType() {
                                const t = this.startNode();
                                this.eat(c.bitwiseOR);
                                const e = this.flowParseIntersectionType();
                                for (t.types = [e]; this.eat(c.bitwiseOR);) t.types.push(this.flowParseIntersectionType());
                                return 1 === t.types.length ? e : this.finishNode(t, "UnionTypeAnnotation")
                            }
                            flowParseType() {
                                const t = this.state.inType;
                                this.state.inType = !0;
                                const e = this.flowParseUnionType();
                                return this.state.inType = t, this.state.exprAllowed = this.state.exprAllowed || this.state.noAnonFunctionType, e
                            }
                            flowParseTypeOrImplicitInstantiation() {
                                if (this.state.type === c.name && "_" === this.state.value) {
                                    const t = this.state.start,
                                        e = this.state.startLoc,
                                        s = this.parseIdentifier();
                                    return this.flowParseGenericType(t, e, s)
                                }
                                return this.flowParseType()
                            }
                            flowParseTypeAnnotation() {
                                const t = this.startNode();
                                return t.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(t, "TypeAnnotation")
                            }
                            flowParseTypeAnnotatableIdentifier(t) {
                                const e = t ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
                                return this.match(c.colon) && (e.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e)), e
                            }
                            typeCastToParameter(t) {
                                return t.expression.typeAnnotation = t.typeAnnotation, this.resetEndLocation(t.expression, t.typeAnnotation.end, t.typeAnnotation.loc.end), t.expression
                            }
                            flowParseVariance() {
                                let t = null;
                                return this.match(c.plusMin) && (t = this.startNode(), "+" === this.state.value ? t.kind = "plus" : t.kind = "minus", this.next(), this.finishNode(t, "Variance")), t
                            }
                            parseFunctionBody(t, e, s = !1) {
                                return e ? this.forwardNoArrowParamsConversionAt(t, (() => super.parseFunctionBody(t, !0, s))) : super.parseFunctionBody(t, !1, s)
                            }
                            parseFunctionBodyAndFinish(t, e, s = !1) {
                                if (this.match(c.colon)) {
                                    const e = this.startNode();
                                    [e.typeAnnotation, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), t.returnType = e.typeAnnotation ? this.finishNode(e, "TypeAnnotation") : null
                                }
                                super.parseFunctionBodyAndFinish(t, e, s)
                            }
                            parseStatement(t, e) {
                                if (this.state.strict && this.match(c.name) && "interface" === this.state.value) {
                                    const t = this.lookahead();
                                    if (t.type === c.name || _(t.value)) {
                                        const t = this.startNode();
                                        return this.next(), this.flowParseInterface(t)
                                    }
                                } else if (this.shouldParseEnums() && this.isContextual("enum")) {
                                    const t = this.startNode();
                                    return this.next(), this.flowParseEnumDeclaration(t)
                                }
                                const s = super.parseStatement(t, e);
                                return void 0 !== this.flowPragma || this.isValidDirective(s) || (this.flowPragma = null), s
                            }
                            parseExpressionStatement(t, e) {
                                if ("Identifier" === e.type)
                                    if ("declare" === e.name) {
                                        if (this.match(c._class) || this.match(c.name) || this.match(c._function) || this.match(c._var) || this.match(c._export)) return this.flowParseDeclare(t)
                                    } else if (this.match(c.name)) {
                                    if ("interface" === e.name) return this.flowParseInterface(t);
                                    if ("type" === e.name) return this.flowParseTypeAlias(t);
                                    if ("opaque" === e.name) return this.flowParseOpaqueType(t, !1)
                                }
                                return super.parseExpressionStatement(t, e)
                            }
                            shouldParseExportDeclaration() {
                                return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || this.shouldParseEnums() && this.isContextual("enum") || super.shouldParseExportDeclaration()
                            }
                            isExportDefaultSpecifier() {
                                return (!this.match(c.name) || !("type" === this.state.value || "interface" === this.state.value || "opaque" === this.state.value || this.shouldParseEnums() && "enum" === this.state.value)) && super.isExportDefaultSpecifier()
                            }
                            parseExportDefaultExpression() {
                                if (this.shouldParseEnums() && this.isContextual("enum")) {
                                    const t = this.startNode();
                                    return this.next(), this.flowParseEnumDeclaration(t)
                                }
                                return super.parseExportDefaultExpression()
                            }
                            parseConditional(t, e, s, i) {
                                if (!this.match(c.question)) return t;
                                if (i) {
                                    const r = this.tryParse((() => super.parseConditional(t, e, s)));
                                    return r.node ? (r.error && (this.state = r.failState), r.node) : (i.start = r.error.pos || this.state.start, t)
                                }
                                this.expect(c.question);
                                const r = this.state.clone(),
                                    a = this.state.noArrowAt,
                                    n = this.startNodeAt(e, s);
                                let {
                                    consequent: o,
                                    failed: h
                                } = this.tryParseConditionalConsequent(), [p, l] = this.getArrowLikeExpressions(o);
                                if (h || l.length > 0) {
                                    const t = [...a];
                                    if (l.length > 0) {
                                        this.state = r, this.state.noArrowAt = t;
                                        for (let e = 0; e < l.length; e++) t.push(l[e].start);
                                        ({
                                            consequent: o,
                                            failed: h
                                        } = this.tryParseConditionalConsequent()), [p, l] = this.getArrowLikeExpressions(o)
                                    }
                                    h && p.length > 1 && this.raise(r.start, q.AmbiguousConditionalArrow), h && 1 === p.length && (this.state = r, this.state.noArrowAt = t.concat(p[0].start), ({
                                        consequent: o,
                                        failed: h
                                    } = this.tryParseConditionalConsequent()))
                                }
                                return this.getArrowLikeExpressions(o, !0), this.state.noArrowAt = a, this.expect(c.colon), n.test = t, n.consequent = o, n.alternate = this.forwardNoArrowParamsConversionAt(n, (() => this.parseMaybeAssign(void 0, void 0, void 0))), this.finishNode(n, "ConditionalExpression")
                            }
                            tryParseConditionalConsequent() {
                                this.state.noArrowParamsConversionAt.push(this.state.start);
                                const t = this.parseMaybeAssignAllowIn(),
                                    e = !this.match(c.colon);
                                return this.state.noArrowParamsConversionAt.pop(), {
                                    consequent: t,
                                    failed: e
                                }
                            }
                            getArrowLikeExpressions(t, e) {
                                const s = [t],
                                    i = [];
                                for (; 0 !== s.length;) {
                                    const t = s.pop();
                                    "ArrowFunctionExpression" === t.type ? (t.typeParameters || !t.returnType ? this.finishArrowValidation(t) : i.push(t), s.push(t.body)) : "ConditionalExpression" === t.type && (s.push(t.consequent), s.push(t.alternate))
                                }
                                return e ? (i.forEach((t => this.finishArrowValidation(t))), [i, []]) : function(t, e) {
                                    const s = [],
                                        i = [];
                                    for (let r = 0; r < t.length; r++)(e(t[r]) ? s : i).push(t[r]);
                                    return [s, i]
                                }(i, (t => t.params.every((t => this.isAssignable(t, !0)))))
                            }
                            finishArrowValidation(t) {
                                var e;
                                this.toAssignableList(t.params, null == (e = t.extra) ? void 0 : e.trailingComma, !1), this.scope.enter(6), super.checkParams(t, !1, !0), this.scope.exit()
                            }
                            forwardNoArrowParamsConversionAt(t, e) {
                                let s;
                                return -1 !== this.state.noArrowParamsConversionAt.indexOf(t.start) ? (this.state.noArrowParamsConversionAt.push(this.state.start), s = e(), this.state.noArrowParamsConversionAt.pop()) : s = e(), s
                            }
                            parseParenItem(t, e, s) {
                                if (t = super.parseParenItem(t, e, s), this.eat(c.question) && (t.optional = !0, this.resetEndLocation(t)), this.match(c.colon)) {
                                    const i = this.startNodeAt(e, s);
                                    return i.expression = t, i.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(i, "TypeCastExpression")
                                }
                                return t
                            }
                            assertModuleNodeAllowed(t) {
                                "ImportDeclaration" === t.type && ("type" === t.importKind || "typeof" === t.importKind) || "ExportNamedDeclaration" === t.type && "type" === t.exportKind || "ExportAllDeclaration" === t.type && "type" === t.exportKind || super.assertModuleNodeAllowed(t)
                            }
                            parseExport(t) {
                                const e = super.parseExport(t);
                                return "ExportNamedDeclaration" !== e.type && "ExportAllDeclaration" !== e.type || (e.exportKind = e.exportKind || "value"), e
                            }
                            parseExportDeclaration(t) {
                                if (this.isContextual("type")) {
                                    t.exportKind = "type";
                                    const e = this.startNode();
                                    return this.next(), this.match(c.braceL) ? (t.specifiers = this.parseExportSpecifiers(), this.parseExportFrom(t), null) : this.flowParseTypeAlias(e)
                                }
                                if (this.isContextual("opaque")) {
                                    t.exportKind = "type";
                                    const e = this.startNode();
                                    return this.next(), this.flowParseOpaqueType(e, !1)
                                }
                                if (this.isContextual("interface")) {
                                    t.exportKind = "type";
                                    const e = this.startNode();
                                    return this.next(), this.flowParseInterface(e)
                                }
                                if (this.shouldParseEnums() && this.isContextual("enum")) {
                                    t.exportKind = "value";
                                    const e = this.startNode();
                                    return this.next(), this.flowParseEnumDeclaration(e)
                                }
                                return super.parseExportDeclaration(t)
                            }
                            eatExportStar(t) {
                                return !!super.eatExportStar(...arguments) || !(!this.isContextual("type") || this.lookahead().type !== c.star) && (t.exportKind = "type", this.next(), this.next(), !0)
                            }
                            maybeParseExportNamespaceSpecifier(t) {
                                const e = this.state.start,
                                    s = super.maybeParseExportNamespaceSpecifier(t);
                                return s && "type" === t.exportKind && this.unexpected(e), s
                            }
                            parseClassId(t, e, s) {
                                super.parseClassId(t, e, s), this.isRelational("<") && (t.typeParameters = this.flowParseTypeParameterDeclaration())
                            }
                            parseClassMember(t, e, s) {
                                const i = this.state.start;
                                if (this.isContextual("declare")) {
                                    if (this.parseClassMemberFromModifier(t, e)) return;
                                    e.declare = !0
                                }
                                super.parseClassMember(t, e, s), e.declare && ("ClassProperty" !== e.type && "ClassPrivateProperty" !== e.type ? this.raise(i, q.DeclareClassElement) : e.value && this.raise(e.value.start, q.DeclareClassFieldInitializer))
                            }
                            getTokenFromCode(t) {
                                const e = this.input.charCodeAt(this.state.pos + 1);
                                return 123 === t && 124 === e ? this.finishOp(c.braceBarL, 2) : !this.state.inType || 62 !== t && 60 !== t ? this.state.inType && 63 === t ? this.finishOp(c.question, 1) : function(t, e) {
                                    return 64 === t && 64 === e
                                }(t, e) ? (this.state.isIterator = !0, super.readWord()) : super.getTokenFromCode(t) : this.finishOp(c.relational, 1)
                            }
                            isAssignable(t, e) {
                                switch (t.type) {
                                    case "Identifier":
                                    case "ObjectPattern":
                                    case "ArrayPattern":
                                    case "AssignmentPattern":
                                        return !0;
                                    case "ObjectExpression": {
                                        const e = t.properties.length - 1;
                                        return t.properties.every(((t, s) => "ObjectMethod" !== t.type && (s === e || "SpreadElement" === t.type) && this.isAssignable(t)))
                                    }
                                    case "ObjectProperty":
                                        return this.isAssignable(t.value);
                                    case "SpreadElement":
                                        return this.isAssignable(t.argument);
                                    case "ArrayExpression":
                                        return t.elements.every((t => this.isAssignable(t)));
                                    case "AssignmentExpression":
                                        return "=" === t.operator;
                                    case "ParenthesizedExpression":
                                    case "TypeCastExpression":
                                        return this.isAssignable(t.expression);
                                    case "MemberExpression":
                                    case "OptionalMemberExpression":
                                        return !e;
                                    default:
                                        return !1
                                }
                            }
                            toAssignable(t, e = !1) {
                                return "TypeCastExpression" === t.type ? super.toAssignable(this.typeCastToParameter(t), e) : super.toAssignable(t, e)
                            }
                            toAssignableList(t, e, s) {
                                for (let e = 0; e < t.length; e++) {
                                    const s = t[e];
                                    "TypeCastExpression" === (null == s ? void 0 : s.type) && (t[e] = this.typeCastToParameter(s))
                                }
                                return super.toAssignableList(t, e, s)
                            }
                            toReferencedList(t, e) {
                                for (let i = 0; i < t.length; i++) {
                                    var s;
                                    const r = t[i];
                                    r && "TypeCastExpression" === r.type && !(null == (s = r.extra) ? void 0 : s.parenthesized) && (t.length > 1 || !e) && this.raise(r.typeAnnotation.start, q.TypeCastInPattern)
                                }
                                return t
                            }
                            parseArrayLike(t, e, s, i) {
                                const r = super.parseArrayLike(t, e, s, i);
                                return e && !this.state.maybeInArrowParameters && this.toReferencedList(r.elements), r
                            }
                            checkLVal(t, ...e) {
                                if ("TypeCastExpression" !== t.type) return super.checkLVal(t, ...e)
                            }
                            parseClassProperty(t) {
                                return this.match(c.colon) && (t.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(t)
                            }
                            parseClassPrivateProperty(t) {
                                return this.match(c.colon) && (t.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(t)
                            }
                            isClassMethod() {
                                return this.isRelational("<") || super.isClassMethod()
                            }
                            isClassProperty() {
                                return this.match(c.colon) || super.isClassProperty()
                            }
                            isNonstaticConstructor(t) {
                                return !this.match(c.colon) && super.isNonstaticConstructor(t)
                            }
                            pushClassMethod(t, e, s, i, r, a) {
                                e.variance && this.unexpected(e.variance.start), delete e.variance, this.isRelational("<") && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(t, e, s, i, r, a)
                            }
                            pushClassPrivateMethod(t, e, s, i) {
                                e.variance && this.unexpected(e.variance.start), delete e.variance, this.isRelational("<") && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(t, e, s, i)
                            }
                            parseClassSuper(t) {
                                if (super.parseClassSuper(t), t.superClass && this.isRelational("<") && (t.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual("implements")) {
                                    this.next();
                                    const e = t.implements = [];
                                    do {
                                        const t = this.startNode();
                                        t.id = this.flowParseRestrictedIdentifier(!0), this.isRelational("<") ? t.typeParameters = this.flowParseTypeParameterInstantiation() : t.typeParameters = null, e.push(this.finishNode(t, "ClassImplements"))
                                    } while (this.eat(c.comma))
                                }
                            }
                            parsePropertyName(t, e) {
                                const s = this.flowParseVariance(),
                                    i = super.parsePropertyName(t, e);
                                return t.variance = s, i
                            }
                            parseObjPropValue(t, e, s, i, r, a, n, o) {
                                let h;
                                t.variance && this.unexpected(t.variance.start), delete t.variance, this.isRelational("<") && !n && (h = this.flowParseTypeParameterDeclaration(), this.match(c.parenL) || this.unexpected()), super.parseObjPropValue(t, e, s, i, r, a, n, o), h && ((t.value || t).typeParameters = h)
                            }
                            parseAssignableListItemTypes(t) {
                                return this.eat(c.question) && ("Identifier" !== t.type && this.raise(t.start, q.OptionalBindingPattern), t.optional = !0), this.match(c.colon) && (t.typeAnnotation = this.flowParseTypeAnnotation()), this.resetEndLocation(t), t
                            }
                            parseMaybeDefault(t, e, s) {
                                const i = super.parseMaybeDefault(t, e, s);
                                return "AssignmentPattern" === i.type && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(i.typeAnnotation.start, q.TypeBeforeInitializer), i
                            }
                            shouldParseDefaultImport(t) {
                                return V(t) ? z(this.state) : super.shouldParseDefaultImport(t)
                            }
                            parseImportSpecifierLocal(t, e, s, i) {
                                e.local = V(t) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), this.checkLVal(e.local, i, 9), t.specifiers.push(this.finishNode(e, s))
                            }
                            maybeParseDefaultImportSpecifier(t) {
                                t.importKind = "value";
                                let e = null;
                                if (this.match(c._typeof) ? e = "typeof" : this.isContextual("type") && (e = "type"), e) {
                                    const s = this.lookahead();
                                    "type" === e && s.type === c.star && this.unexpected(s.start), (z(s) || s.type === c.braceL || s.type === c.star) && (this.next(), t.importKind = e)
                                }
                                return super.maybeParseDefaultImportSpecifier(t)
                            }
                            parseImportSpecifier(t) {
                                const e = this.startNode(),
                                    s = this.state.start,
                                    i = this.parseModuleExportName();
                                let r = null;
                                "Identifier" === i.type && ("type" === i.name ? r = "type" : "typeof" === i.name && (r = "typeof"));
                                let a = !1;
                                if (this.isContextual("as") && !this.isLookaheadContextual("as")) {
                                    const t = this.parseIdentifier(!0);
                                    null === r || this.match(c.name) || this.state.type.keyword ? (e.imported = i, e.importKind = null, e.local = this.parseIdentifier()) : (e.imported = t, e.importKind = r, e.local = t.__clone())
                                } else if (null !== r && (this.match(c.name) || this.state.type.keyword)) e.imported = this.parseIdentifier(!0), e.importKind = r, this.eatContextual("as") ? e.local = this.parseIdentifier() : (a = !0, e.local = e.imported.__clone());
                                else {
                                    if ("StringLiteral" === i.type) throw this.raise(e.start, g.ImportBindingIsString, i.value);
                                    a = !0, e.imported = i, e.importKind = null, e.local = e.imported.__clone()
                                }
                                const n = V(t),
                                    o = V(e);
                                n && o && this.raise(s, q.ImportTypeShorthandOnlyInPureImport), (n || o) && this.checkReservedType(e.local.name, e.local.start, !0), !a || n || o || this.checkReservedWord(e.local.name, e.start, !0, !0), this.checkLVal(e.local, "import specifier", 9), t.specifiers.push(this.finishNode(e, "ImportSpecifier"))
                            }
                            parseFunctionParams(t, e) {
                                const s = t.kind;
                                "get" !== s && "set" !== s && this.isRelational("<") && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(t, e)
                            }
                            parseVarId(t, e) {
                                super.parseVarId(t, e), this.match(c.colon) && (t.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(t.id))
                            }
                            parseAsyncArrowFromCallExpression(t, e) {
                                if (this.match(c.colon)) {
                                    const e = this.state.noAnonFunctionType;
                                    this.state.noAnonFunctionType = !0, t.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = e
                                }
                                return super.parseAsyncArrowFromCallExpression(t, e)
                            }
                            shouldParseAsyncArrow() {
                                return this.match(c.colon) || super.shouldParseAsyncArrow()
                            }
                            parseMaybeAssign(t, e, s) {
                                var i;
                                let r, a = null;
                                if (this.hasPlugin("jsx") && (this.match(c.jsxTagStart) || this.isRelational("<"))) {
                                    if (a = this.state.clone(), r = this.tryParse((() => super.parseMaybeAssign(t, e, s)), a), !r.error) return r.node;
                                    const {
                                        context: i
                                    } = this.state;
                                    i[i.length - 1] === T.j_oTag ? i.length -= 2 : i[i.length - 1] === T.j_expr && (i.length -= 1)
                                }
                                if ((null == (i = r) ? void 0 : i.error) || this.isRelational("<")) {
                                    var n, o;
                                    let i;
                                    a = a || this.state.clone();
                                    const h = this.tryParse((r => {
                                        var a;
                                        i = this.flowParseTypeParameterDeclaration();
                                        const n = this.forwardNoArrowParamsConversionAt(i, (() => {
                                            const r = super.parseMaybeAssign(t, e, s);
                                            return this.resetStartLocationFromNode(r, i), r
                                        }));
                                        "ArrowFunctionExpression" !== n.type && (null == (a = n.extra) ? void 0 : a.parenthesized) && r();
                                        const o = this.maybeUnwrapTypeCastExpression(n);
                                        return o.typeParameters = i, this.resetStartLocationFromNode(o, i), n
                                    }), a);
                                    let p = null;
                                    if (h.node && "ArrowFunctionExpression" === this.maybeUnwrapTypeCastExpression(h.node).type) {
                                        if (!h.error && !h.aborted) return h.node.async && this.raise(i.start, q.UnexpectedTypeParameterBeforeAsyncArrowFunction), h.node;
                                        p = h.node
                                    }
                                    if (null == (n = r) ? void 0 : n.node) return this.state = r.failState, r.node;
                                    if (p) return this.state = h.failState, p;
                                    if (null == (o = r) ? void 0 : o.thrown) throw r.error;
                                    if (h.thrown) throw h.error;
                                    throw this.raise(i.start, q.UnexpectedTokenAfterTypeParameter)
                                }
                                return super.parseMaybeAssign(t, e, s)
                            }
                            parseArrow(t) {
                                if (this.match(c.colon)) {
                                    const e = this.tryParse((() => {
                                        const e = this.state.noAnonFunctionType;
                                        this.state.noAnonFunctionType = !0;
                                        const s = this.startNode();
                                        return [s.typeAnnotation, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = e, this.canInsertSemicolon() && this.unexpected(), this.match(c.arrow) || this.unexpected(), s
                                    }));
                                    if (e.thrown) return null;
                                    e.error && (this.state = e.failState), t.returnType = e.node.typeAnnotation ? this.finishNode(e.node, "TypeAnnotation") : null
                                }
                                return super.parseArrow(t)
                            }
                            shouldParseArrow() {
                                return this.match(c.colon) || super.shouldParseArrow()
                            }
                            setArrowFunctionParameters(t, e) {
                                -1 !== this.state.noArrowParamsConversionAt.indexOf(t.start) ? t.params = e : super.setArrowFunctionParameters(t, e)
                            }
                            checkParams(t, e, s) {
                                if (!s || -1 === this.state.noArrowParamsConversionAt.indexOf(t.start)) return super.checkParams(...arguments)
                            }
                            parseParenAndDistinguishExpression(t) {
                                return super.parseParenAndDistinguishExpression(t && -1 === this.state.noArrowAt.indexOf(this.state.start))
                            }
                            parseSubscripts(t, e, s, i) {
                                if ("Identifier" === t.type && "async" === t.name && -1 !== this.state.noArrowAt.indexOf(e)) {
                                    this.next();
                                    const i = this.startNodeAt(e, s);
                                    i.callee = t, i.arguments = this.parseCallExpressionArguments(c.parenR, !1), t = this.finishNode(i, "CallExpression")
                                } else if ("Identifier" === t.type && "async" === t.name && this.isRelational("<")) {
                                    const r = this.state.clone(),
                                        a = this.tryParse((t => this.parseAsyncArrowWithTypeParameters(e, s) || t()), r);
                                    if (!a.error && !a.aborted) return a.node;
                                    const n = this.tryParse((() => super.parseSubscripts(t, e, s, i)), r);
                                    if (n.node && !n.error) return n.node;
                                    if (a.node) return this.state = a.failState, a.node;
                                    if (n.node) return this.state = n.failState, n.node;
                                    throw a.error || n.error
                                }
                                return super.parseSubscripts(t, e, s, i)
                            }
                            parseSubscript(t, e, s, i, r) {
                                if (this.match(c.questionDot) && this.isLookaheadToken_lt()) {
                                    if (r.optionalChainMember = !0, i) return r.stop = !0, t;
                                    this.next();
                                    const a = this.startNodeAt(e, s);
                                    return a.callee = t, a.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(c.parenL), a.arguments = this.parseCallExpressionArguments(c.parenR, !1), a.optional = !0, this.finishCallExpression(a, !0)
                                }
                                if (!i && this.shouldParseTypes() && this.isRelational("<")) {
                                    const i = this.startNodeAt(e, s);
                                    i.callee = t;
                                    const a = this.tryParse((() => (i.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(c.parenL), i.arguments = this.parseCallExpressionArguments(c.parenR, !1), r.optionalChainMember && (i.optional = !1), this.finishCallExpression(i, r.optionalChainMember))));
                                    if (a.node) return a.error && (this.state = a.failState), a.node
                                }
                                return super.parseSubscript(t, e, s, i, r)
                            }
                            parseNewArguments(t) {
                                let e = null;
                                this.shouldParseTypes() && this.isRelational("<") && (e = this.tryParse((() => this.flowParseTypeParameterInstantiationCallOrNew())).node), t.typeArguments = e, super.parseNewArguments(t)
                            }
                            parseAsyncArrowWithTypeParameters(t, e) {
                                const s = this.startNodeAt(t, e);
                                if (this.parseFunctionParams(s), this.parseArrow(s)) return this.parseArrowExpression(s, void 0, !0)
                            }
                            readToken_mult_modulo(t) {
                                const e = this.input.charCodeAt(this.state.pos + 1);
                                if (42 === t && 47 === e && this.state.hasFlowComment) return this.state.hasFlowComment = !1, this.state.pos += 2, void this.nextToken();
                                super.readToken_mult_modulo(t)
                            }
                            readToken_pipe_amp(t) {
                                const e = this.input.charCodeAt(this.state.pos + 1);
                                124 !== t || 125 !== e ? super.readToken_pipe_amp(t) : this.finishOp(c.braceBarR, 2)
                            }
                            parseTopLevel(t, e) {
                                const s = super.parseTopLevel(t, e);
                                return this.state.hasFlowComment && this.raise(this.state.pos, q.UnterminatedFlowComment), s
                            }
                            skipBlockComment() {
                                if (this.hasPlugin("flowComments") && this.skipFlowComment()) return this.state.hasFlowComment && this.unexpected(null, q.NestedFlowComment), this.hasFlowCommentCompletion(), this.state.pos += this.skipFlowComment(), void(this.state.hasFlowComment = !0);
                                if (this.state.hasFlowComment) {
                                    const t = this.input.indexOf("*-/", this.state.pos += 2);
                                    if (-1 === t) throw this.raise(this.state.pos - 2, g.UnterminatedComment);
                                    this.state.pos = t + 3
                                } else super.skipBlockComment()
                            }
                            skipFlowComment() {
                                const {
                                    pos: t
                                } = this.state;
                                let e = 2;
                                for (;
                                    [32, 9].includes(this.input.charCodeAt(t + e));) e++;
                                const s = this.input.charCodeAt(e + t),
                                    i = this.input.charCodeAt(e + t + 1);
                                return 58 === s && 58 === i ? e + 2 : "flow-include" === this.input.slice(e + t, e + t + 12) ? e + 12 : 58 === s && 58 !== i && e
                            }
                            hasFlowCommentCompletion() {
                                if (-1 === this.input.indexOf("*/", this.state.pos)) throw this.raise(this.state.pos, g.UnterminatedComment)
                            }
                            flowEnumErrorBooleanMemberNotInitialized(t, {
                                enumName: e,
                                memberName: s
                            }) {
                                this.raise(t, q.EnumBooleanMemberNotInitialized, s, e)
                            }
                            flowEnumErrorInvalidMemberName(t, {
                                enumName: e,
                                memberName: s
                            }) {
                                const i = s[0].toUpperCase() + s.slice(1);
                                this.raise(t, q.EnumInvalidMemberName, s, i, e)
                            }
                            flowEnumErrorDuplicateMemberName(t, {
                                enumName: e,
                                memberName: s
                            }) {
                                this.raise(t, q.EnumDuplicateMemberName, s, e)
                            }
                            flowEnumErrorInconsistentMemberValues(t, {
                                enumName: e
                            }) {
                                this.raise(t, q.EnumInconsistentMemberValues, e)
                            }
                            flowEnumErrorInvalidExplicitType(t, {
                                enumName: e,
                                suppliedType: s
                            }) {
                                return this.raise(t, null === s ? q.EnumInvalidExplicitTypeUnknownSupplied : q.EnumInvalidExplicitType, e, s)
                            }
                            flowEnumErrorInvalidMemberInitializer(t, {
                                enumName: e,
                                explicitType: s,
                                memberName: i
                            }) {
                                let r = null;
                                switch (s) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                        r = q.EnumInvalidMemberInitializerPrimaryType;
                                        break;
                                    case "symbol":
                                        r = q.EnumInvalidMemberInitializerSymbolType;
                                        break;
                                    default:
                                        r = q.EnumInvalidMemberInitializerUnknownType
                                }
                                return this.raise(t, r, e, i, s)
                            }
                            flowEnumErrorNumberMemberNotInitialized(t, {
                                enumName: e,
                                memberName: s
                            }) {
                                this.raise(t, q.EnumNumberMemberNotInitialized, e, s)
                            }
                            flowEnumErrorStringMemberInconsistentlyInitailized(t, {
                                enumName: e
                            }) {
                                this.raise(t, q.EnumStringMemberInconsistentlyInitailized, e)
                            }
                            flowEnumMemberInit() {
                                const t = this.state.start,
                                    e = () => this.match(c.comma) || this.match(c.braceR);
                                switch (this.state.type) {
                                    case c.num: {
                                        const s = this.parseLiteral(this.state.value, "NumericLiteral");
                                        return e() ? {
                                            type: "number",
                                            pos: s.start,
                                            value: s
                                        } : {
                                            type: "invalid",
                                            pos: t
                                        }
                                    }
                                    case c.string: {
                                        const s = this.parseLiteral(this.state.value, "StringLiteral");
                                        return e() ? {
                                            type: "string",
                                            pos: s.start,
                                            value: s
                                        } : {
                                            type: "invalid",
                                            pos: t
                                        }
                                    }
                                    case c._true:
                                    case c._false: {
                                        const s = this.parseBooleanLiteral();
                                        return e() ? {
                                            type: "boolean",
                                            pos: s.start,
                                            value: s
                                        } : {
                                            type: "invalid",
                                            pos: t
                                        }
                                    }
                                    default:
                                        return {
                                            type: "invalid", pos: t
                                        }
                                }
                            }
                            flowEnumMemberRaw() {
                                const t = this.state.start;
                                return {
                                    id: this.parseIdentifier(!0),
                                    init: this.eat(c.eq) ? this.flowEnumMemberInit() : {
                                        type: "none",
                                        pos: t
                                    }
                                }
                            }
                            flowEnumCheckExplicitTypeMismatch(t, e, s) {
                                const {
                                    explicitType: i
                                } = e;
                                null !== i && i !== s && this.flowEnumErrorInvalidMemberInitializer(t, e)
                            }
                            flowEnumMembers({
                                enumName: t,
                                explicitType: e
                            }) {
                                const s = new Set,
                                    i = {
                                        booleanMembers: [],
                                        numberMembers: [],
                                        stringMembers: [],
                                        defaultedMembers: []
                                    };
                                for (; !this.match(c.braceR);) {
                                    const r = this.startNode(),
                                        {
                                            id: a,
                                            init: n
                                        } = this.flowEnumMemberRaw(),
                                        o = a.name;
                                    if ("" === o) continue;
                                    /^[a-z]/.test(o) && this.flowEnumErrorInvalidMemberName(a.start, {
                                        enumName: t,
                                        memberName: o
                                    }), s.has(o) && this.flowEnumErrorDuplicateMemberName(a.start, {
                                        enumName: t,
                                        memberName: o
                                    }), s.add(o);
                                    const h = {
                                        enumName: t,
                                        explicitType: e,
                                        memberName: o
                                    };
                                    switch (r.id = a, n.type) {
                                        case "boolean":
                                            this.flowEnumCheckExplicitTypeMismatch(n.pos, h, "boolean"), r.init = n.value, i.booleanMembers.push(this.finishNode(r, "EnumBooleanMember"));
                                            break;
                                        case "number":
                                            this.flowEnumCheckExplicitTypeMismatch(n.pos, h, "number"), r.init = n.value, i.numberMembers.push(this.finishNode(r, "EnumNumberMember"));
                                            break;
                                        case "string":
                                            this.flowEnumCheckExplicitTypeMismatch(n.pos, h, "string"), r.init = n.value, i.stringMembers.push(this.finishNode(r, "EnumStringMember"));
                                            break;
                                        case "invalid":
                                            throw this.flowEnumErrorInvalidMemberInitializer(n.pos, h);
                                        case "none":
                                            switch (e) {
                                                case "boolean":
                                                    this.flowEnumErrorBooleanMemberNotInitialized(n.pos, h);
                                                    break;
                                                case "number":
                                                    this.flowEnumErrorNumberMemberNotInitialized(n.pos, h);
                                                    break;
                                                default:
                                                    i.defaultedMembers.push(this.finishNode(r, "EnumDefaultedMember"))
                                            }
                                    }
                                    this.match(c.braceR) || this.expect(c.comma)
                                }
                                return i
                            }
                            flowEnumStringMembers(t, e, {
                                enumName: s
                            }) {
                                if (0 === t.length) return e;
                                if (0 === e.length) return t;
                                if (e.length > t.length) {
                                    for (let e = 0; e < t.length; e++) {
                                        const i = t[e];
                                        this.flowEnumErrorStringMemberInconsistentlyInitailized(i.start, {
                                            enumName: s
                                        })
                                    }
                                    return e
                                }
                                for (let t = 0; t < e.length; t++) {
                                    const i = e[t];
                                    this.flowEnumErrorStringMemberInconsistentlyInitailized(i.start, {
                                        enumName: s
                                    })
                                }
                                return t
                            }
                            flowEnumParseExplicitType({
                                enumName: t
                            }) {
                                if (this.eatContextual("of")) {
                                    if (!this.match(c.name)) throw this.flowEnumErrorInvalidExplicitType(this.state.start, {
                                        enumName: t,
                                        suppliedType: null
                                    });
                                    const {
                                        value: e
                                    } = this.state;
                                    return this.next(), "boolean" !== e && "number" !== e && "string" !== e && "symbol" !== e && this.flowEnumErrorInvalidExplicitType(this.state.start, {
                                        enumName: t,
                                        suppliedType: e
                                    }), e
                                }
                                return null
                            }
                            flowEnumBody(t, {
                                enumName: e,
                                nameLoc: s
                            }) {
                                const i = this.flowEnumParseExplicitType({
                                    enumName: e
                                });
                                this.expect(c.braceL);
                                const r = this.flowEnumMembers({
                                    enumName: e,
                                    explicitType: i
                                });
                                switch (i) {
                                    case "boolean":
                                        return t.explicitType = !0, t.members = r.booleanMembers, this.expect(c.braceR), this.finishNode(t, "EnumBooleanBody");
                                    case "number":
                                        return t.explicitType = !0, t.members = r.numberMembers, this.expect(c.braceR), this.finishNode(t, "EnumNumberBody");
                                    case "string":
                                        return t.explicitType = !0, t.members = this.flowEnumStringMembers(r.stringMembers, r.defaultedMembers, {
                                            enumName: e
                                        }), this.expect(c.braceR), this.finishNode(t, "EnumStringBody");
                                    case "symbol":
                                        return t.members = r.defaultedMembers, this.expect(c.braceR), this.finishNode(t, "EnumSymbolBody");
                                    default: {
                                        const i = () => (t.members = [], this.expect(c.braceR), this.finishNode(t, "EnumStringBody"));
                                        t.explicitType = !1;
                                        const a = r.booleanMembers.length,
                                            n = r.numberMembers.length,
                                            o = r.stringMembers.length,
                                            h = r.defaultedMembers.length;
                                        if (a || n || o || h) {
                                            if (a || n) {
                                                if (!n && !o && a >= h) {
                                                    for (let t = 0, s = r.defaultedMembers; t < s.length; t++) {
                                                        const i = s[t];
                                                        this.flowEnumErrorBooleanMemberNotInitialized(i.start, {
                                                            enumName: e,
                                                            memberName: i.id.name
                                                        })
                                                    }
                                                    return t.members = r.booleanMembers, this.expect(c.braceR), this.finishNode(t, "EnumBooleanBody")
                                                }
                                                if (!a && !o && n >= h) {
                                                    for (let t = 0, s = r.defaultedMembers; t < s.length; t++) {
                                                        const i = s[t];
                                                        this.flowEnumErrorNumberMemberNotInitialized(i.start, {
                                                            enumName: e,
                                                            memberName: i.id.name
                                                        })
                                                    }
                                                    return t.members = r.numberMembers, this.expect(c.braceR), this.finishNode(t, "EnumNumberBody")
                                                }
                                                return this.flowEnumErrorInconsistentMemberValues(s, {
                                                    enumName: e
                                                }), i()
                                            }
                                            return t.members = this.flowEnumStringMembers(r.stringMembers, r.defaultedMembers, {
                                                enumName: e
                                            }), this.expect(c.braceR), this.finishNode(t, "EnumStringBody")
                                        }
                                        return i()
                                    }
                                }
                            }
                            flowParseEnumDeclaration(t) {
                                const e = this.parseIdentifier();
                                return t.id = e, t.body = this.flowEnumBody(this.startNode(), {
                                    enumName: e.name,
                                    nameLoc: e.start
                                }), this.finishNode(t, "EnumDeclaration")
                            }
                            updateContext(t) {
                                this.match(c.name) && "of" === this.state.value && t === c.name && "interface" === this.input.slice(this.state.lastTokStart, this.state.lastTokEnd) ? this.state.exprAllowed = !1 : super.updateContext(t)
                            }
                            isLookaheadToken_lt() {
                                const t = this.nextTokenStart();
                                if (60 === this.input.charCodeAt(t)) {
                                    const e = this.input.charCodeAt(t + 1);
                                    return 60 !== e && 61 !== e
                                }
                                return !1
                            }
                            maybeUnwrapTypeCastExpression(t) {
                                return "TypeCastExpression" === t.type ? t.expression : t
                            }
                        },
                        typescript: t => class extends t {
                            getScopeHandler() {
                                return et
                            }
                            tsIsIdentifier() {
                                return this.match(c.name)
                            }
                            tsNextTokenCanFollowModifier() {
                                return this.next(), (this.match(c.bracketL) || this.match(c.braceL) || this.match(c.star) || this.match(c.ellipsis) || this.match(c.hash) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak()
                            }
                            tsParseModifier(t) {
                                if (!this.match(c.name)) return;
                                const e = this.state.value;
                                return -1 !== t.indexOf(e) && this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)) ? e : void 0
                            }
                            tsParseModifiers(t, e) {
                                for (;;) {
                                    const s = this.state.start,
                                        i = this.tsParseModifier(e);
                                    if (!i) break;
                                    Object.hasOwnProperty.call(t, i) && this.raise(s, nt.DuplicateModifier, i), t[i] = !0
                                }
                            }
                            tsIsListTerminator(t) {
                                switch (t) {
                                    case "EnumMembers":
                                    case "TypeMembers":
                                        return this.match(c.braceR);
                                    case "HeritageClauseElement":
                                        return this.match(c.braceL);
                                    case "TupleElementTypes":
                                        return this.match(c.bracketR);
                                    case "TypeParametersOrArguments":
                                        return this.isRelational(">")
                                }
                                throw new Error("Unreachable")
                            }
                            tsParseList(t, e) {
                                const s = [];
                                for (; !this.tsIsListTerminator(t);) s.push(e());
                                return s
                            }
                            tsParseDelimitedList(t, e) {
                                return rt(this.tsParseDelimitedListWorker(t, e, !0))
                            }
                            tsParseDelimitedListWorker(t, e, s) {
                                const i = [];
                                for (; !this.tsIsListTerminator(t);) {
                                    const r = e();
                                    if (null == r) return;
                                    if (i.push(r), !this.eat(c.comma)) {
                                        if (this.tsIsListTerminator(t)) break;
                                        return void(s && this.expect(c.comma))
                                    }
                                }
                                return i
                            }
                            tsParseBracketedList(t, e, s, i) {
                                i || (s ? this.expect(c.bracketL) : this.expectRelational("<"));
                                const r = this.tsParseDelimitedList(t, e);
                                return s ? this.expect(c.bracketR) : this.expectRelational(">"), r
                            }
                            tsParseImportType() {
                                const t = this.startNode();
                                return this.expect(c._import), this.expect(c.parenL), this.match(c.string) || this.raise(this.state.start, nt.UnsupportedImportTypeArgument), t.argument = this.parseExprAtom(), this.expect(c.parenR), this.eat(c.dot) && (t.qualifier = this.tsParseEntityName(!0)), this.isRelational("<") && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSImportType")
                            }
                            tsParseEntityName(t) {
                                let e = this.parseIdentifier();
                                for (; this.eat(c.dot);) {
                                    const s = this.startNodeAtNode(e);
                                    s.left = e, s.right = this.parseIdentifier(t), e = this.finishNode(s, "TSQualifiedName")
                                }
                                return e
                            }
                            tsParseTypeReference() {
                                const t = this.startNode();
                                return t.typeName = this.tsParseEntityName(!1), !this.hasPrecedingLineBreak() && this.isRelational("<") && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSTypeReference")
                            }
                            tsParseThisTypePredicate(t) {
                                this.next();
                                const e = this.startNodeAtNode(t);
                                return e.parameterName = t, e.typeAnnotation = this.tsParseTypeAnnotation(!1), e.asserts = !1, this.finishNode(e, "TSTypePredicate")
                            }
                            tsParseThisTypeNode() {
                                const t = this.startNode();
                                return this.next(), this.finishNode(t, "TSThisType")
                            }
                            tsParseTypeQuery() {
                                const t = this.startNode();
                                return this.expect(c._typeof), this.match(c._import) ? t.exprName = this.tsParseImportType() : t.exprName = this.tsParseEntityName(!0), this.finishNode(t, "TSTypeQuery")
                            }
                            tsParseTypeParameter() {
                                const t = this.startNode();
                                return t.name = this.parseIdentifierName(t.start), t.constraint = this.tsEatThenParseType(c._extends), t.default = this.tsEatThenParseType(c.eq), this.finishNode(t, "TSTypeParameter")
                            }
                            tsTryParseTypeParameters() {
                                if (this.isRelational("<")) return this.tsParseTypeParameters()
                            }
                            tsParseTypeParameters() {
                                const t = this.startNode();
                                return this.isRelational("<") || this.match(c.jsxTagStart) ? this.next() : this.unexpected(), t.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), !1, !0), 0 === t.params.length && this.raise(t.start, nt.EmptyTypeParameters), this.finishNode(t, "TSTypeParameterDeclaration")
                            }
                            tsTryNextParseConstantContext() {
                                return this.lookahead().type === c._const ? (this.next(), this.tsParseTypeReference()) : null
                            }
                            tsFillSignature(t, e) {
                                const s = t === c.arrow;
                                e.typeParameters = this.tsTryParseTypeParameters(), this.expect(c.parenL), e.parameters = this.tsParseBindingListForSignature(), (s || this.match(t)) && (e.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(t))
                            }
                            tsParseBindingListForSignature() {
                                return this.parseBindingList(c.parenR, 41).map((t => ("Identifier" !== t.type && "RestElement" !== t.type && "ObjectPattern" !== t.type && "ArrayPattern" !== t.type && this.raise(t.start, nt.UnsupportedSignatureParameterKind, t.type), t)))
                            }
                            tsParseTypeMemberSemicolon() {
                                this.eat(c.comma) || this.semicolon()
                            }
                            tsParseSignatureMember(t, e) {
                                return this.tsFillSignature(c.colon, e), this.tsParseTypeMemberSemicolon(), this.finishNode(e, t)
                            }
                            tsIsUnambiguouslyIndexSignature() {
                                return this.next(), this.eat(c.name) && this.match(c.colon)
                            }
                            tsTryParseIndexSignature(t) {
                                if (!this.match(c.bracketL) || !this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) return;
                                this.expect(c.bracketL);
                                const e = this.parseIdentifier();
                                e.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(e), this.expect(c.bracketR), t.parameters = [e];
                                const s = this.tsTryParseTypeAnnotation();
                                return s && (t.typeAnnotation = s), this.tsParseTypeMemberSemicolon(), this.finishNode(t, "TSIndexSignature")
                            }
                            tsParsePropertyOrMethodSignature(t, e) {
                                this.eat(c.question) && (t.optional = !0);
                                const s = t;
                                if (e || !this.match(c.parenL) && !this.isRelational("<")) {
                                    const t = s;
                                    e && (t.readonly = !0);
                                    const i = this.tsTryParseTypeAnnotation();
                                    return i && (t.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(t, "TSPropertySignature")
                                } {
                                    const t = s;
                                    return this.tsFillSignature(c.colon, t), this.tsParseTypeMemberSemicolon(), this.finishNode(t, "TSMethodSignature")
                                }
                            }
                            tsParseTypeMember() {
                                const t = this.startNode();
                                if (this.match(c.parenL) || this.isRelational("<")) return this.tsParseSignatureMember("TSCallSignatureDeclaration", t);
                                if (this.match(c._new)) {
                                    const e = this.startNode();
                                    return this.next(), this.match(c.parenL) || this.isRelational("<") ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", t) : (t.key = this.createIdentifier(e, "new"), this.tsParsePropertyOrMethodSignature(t, !1))
                                }
                                const e = !!this.tsParseModifier(["readonly"]),
                                    s = this.tsTryParseIndexSignature(t);
                                return s ? (e && (t.readonly = !0), s) : (this.parsePropertyName(t, !1), this.tsParsePropertyOrMethodSignature(t, e))
                            }
                            tsParseTypeLiteral() {
                                const t = this.startNode();
                                return t.members = this.tsParseObjectTypeMembers(), this.finishNode(t, "TSTypeLiteral")
                            }
                            tsParseObjectTypeMembers() {
                                this.expect(c.braceL);
                                const t = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
                                return this.expect(c.braceR), t
                            }
                            tsIsStartOfMappedType() {
                                return this.next(), this.eat(c.plusMin) ? this.isContextual("readonly") : (this.isContextual("readonly") && this.next(), !!this.match(c.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(c._in))))
                            }
                            tsParseMappedTypeParameter() {
                                const t = this.startNode();
                                return t.name = this.parseIdentifierName(t.start), t.constraint = this.tsExpectThenParseType(c._in), this.finishNode(t, "TSTypeParameter")
                            }
                            tsParseMappedType() {
                                const t = this.startNode();
                                return this.expect(c.braceL), this.match(c.plusMin) ? (t.readonly = this.state.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (t.readonly = !0), this.expect(c.bracketL), t.typeParameter = this.tsParseMappedTypeParameter(), t.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(c.bracketR), this.match(c.plusMin) ? (t.optional = this.state.value, this.next(), this.expect(c.question)) : this.eat(c.question) && (t.optional = !0), t.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(c.braceR), this.finishNode(t, "TSMappedType")
                            }
                            tsParseTupleType() {
                                const t = this.startNode();
                                t.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
                                let e = !1,
                                    s = null;
                                return t.elementTypes.forEach((t => {
                                    var i;
                                    let {
                                        type: r
                                    } = t;
                                    !e || "TSRestType" === r || "TSOptionalType" === r || "TSNamedTupleMember" === r && t.optional || this.raise(t.start, nt.OptionalTypeBeforeRequired), e = e || "TSNamedTupleMember" === r && t.optional || "TSOptionalType" === r, "TSRestType" === r && (r = (t = t.typeAnnotation).type);
                                    const a = "TSNamedTupleMember" === r;
                                    s = null != (i = s) ? i : a, s !== a && this.raise(t.start, nt.MixedLabeledAndUnlabeledElements)
                                })), this.finishNode(t, "TSTupleType")
                            }
                            tsParseTupleElementType() {
                                const {
                                    start: t,
                                    startLoc: e
                                } = this.state, s = this.eat(c.ellipsis);
                                let i = this.tsParseType();
                                const r = this.eat(c.question);
                                if (this.eat(c.colon)) {
                                    const t = this.startNodeAtNode(i);
                                    t.optional = r, "TSTypeReference" !== i.type || i.typeParameters || "Identifier" !== i.typeName.type ? (this.raise(i.start, nt.InvalidTupleMemberLabel), t.label = i) : t.label = i.typeName, t.elementType = this.tsParseType(), i = this.finishNode(t, "TSNamedTupleMember")
                                } else if (r) {
                                    const t = this.startNodeAtNode(i);
                                    t.typeAnnotation = i, i = this.finishNode(t, "TSOptionalType")
                                }
                                if (s) {
                                    const s = this.startNodeAt(t, e);
                                    s.typeAnnotation = i, i = this.finishNode(s, "TSRestType")
                                }
                                return i
                            }
                            tsParseParenthesizedType() {
                                const t = this.startNode();
                                return this.expect(c.parenL), t.typeAnnotation = this.tsParseType(), this.expect(c.parenR), this.finishNode(t, "TSParenthesizedType")
                            }
                            tsParseFunctionOrConstructorType(t) {
                                const e = this.startNode();
                                return "TSConstructorType" === t && this.expect(c._new), this.tsFillSignature(c.arrow, e), this.finishNode(e, t)
                            }
                            tsParseLiteralTypeNode() {
                                const t = this.startNode();
                                return t.literal = (() => {
                                    switch (this.state.type) {
                                        case c.num:
                                        case c.bigint:
                                        case c.string:
                                        case c._true:
                                        case c._false:
                                            return this.parseExprAtom();
                                        default:
                                            throw this.unexpected()
                                    }
                                })(), this.finishNode(t, "TSLiteralType")
                            }
                            tsParseTemplateLiteralType() {
                                const t = this.startNode();
                                return t.literal = this.parseTemplate(!1), this.finishNode(t, "TSLiteralType")
                            }
                            parseTemplateSubstitution() {
                                return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution()
                            }
                            tsParseThisTypeOrThisTypePredicate() {
                                const t = this.tsParseThisTypeNode();
                                return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(t) : t
                            }
                            tsParseNonArrayType() {
                                switch (this.state.type) {
                                    case c.name:
                                    case c._void:
                                    case c._null: {
                                        const t = this.match(c._void) ? "TSVoidKeyword" : this.match(c._null) ? "TSNullKeyword" : function(t) {
                                            switch (t) {
                                                case "any":
                                                    return "TSAnyKeyword";
                                                case "boolean":
                                                    return "TSBooleanKeyword";
                                                case "bigint":
                                                    return "TSBigIntKeyword";
                                                case "never":
                                                    return "TSNeverKeyword";
                                                case "number":
                                                    return "TSNumberKeyword";
                                                case "object":
                                                    return "TSObjectKeyword";
                                                case "string":
                                                    return "TSStringKeyword";
                                                case "symbol":
                                                    return "TSSymbolKeyword";
                                                case "undefined":
                                                    return "TSUndefinedKeyword";
                                                case "unknown":
                                                    return "TSUnknownKeyword";
                                                default:
                                                    return
                                            }
                                        }(this.state.value);
                                        if (void 0 !== t && 46 !== this.lookaheadCharCode()) {
                                            const e = this.startNode();
                                            return this.next(), this.finishNode(e, t)
                                        }
                                        return this.tsParseTypeReference()
                                    }
                                    case c.string:
                                    case c.num:
                                    case c.bigint:
                                    case c._true:
                                    case c._false:
                                        return this.tsParseLiteralTypeNode();
                                    case c.plusMin:
                                        if ("-" === this.state.value) {
                                            const t = this.startNode(),
                                                e = this.lookahead();
                                            if (e.type !== c.num && e.type !== c.bigint) throw this.unexpected();
                                            return t.literal = this.parseMaybeUnary(), this.finishNode(t, "TSLiteralType")
                                        }
                                        break;
                                    case c._this:
                                        return this.tsParseThisTypeOrThisTypePredicate();
                                    case c._typeof:
                                        return this.tsParseTypeQuery();
                                    case c._import:
                                        return this.tsParseImportType();
                                    case c.braceL:
                                        return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
                                    case c.bracketL:
                                        return this.tsParseTupleType();
                                    case c.parenL:
                                        return this.tsParseParenthesizedType();
                                    case c.backQuote:
                                        return this.tsParseTemplateLiteralType()
                                }
                                throw this.unexpected()
                            }
                            tsParseArrayTypeOrHigher() {
                                let t = this.tsParseNonArrayType();
                                for (; !this.hasPrecedingLineBreak() && this.eat(c.bracketL);)
                                    if (this.match(c.bracketR)) {
                                        const e = this.startNodeAtNode(t);
                                        e.elementType = t, this.expect(c.bracketR), t = this.finishNode(e, "TSArrayType")
                                    } else {
                                        const e = this.startNodeAtNode(t);
                                        e.objectType = t, e.indexType = this.tsParseType(), this.expect(c.bracketR), t = this.finishNode(e, "TSIndexedAccessType")
                                    } return t
                            }
                            tsParseTypeOperator(t) {
                                const e = this.startNode();
                                return this.expectContextual(t), e.operator = t, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), "readonly" === t && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator")
                            }
                            tsCheckTypeAnnotationForReadOnly(t) {
                                switch (t.typeAnnotation.type) {
                                    case "TSTupleType":
                                    case "TSArrayType":
                                        return;
                                    default:
                                        this.raise(t.start, nt.UnexpectedReadonly)
                                }
                            }
                            tsParseInferType() {
                                const t = this.startNode();
                                this.expectContextual("infer");
                                const e = this.startNode();
                                return e.name = this.parseIdentifierName(e.start), t.typeParameter = this.finishNode(e, "TSTypeParameter"), this.finishNode(t, "TSInferType")
                            }
                            tsParseTypeOperatorOrHigher() {
                                const t = ["keyof", "unique", "readonly"].find((t => this.isContextual(t)));
                                return t ? this.tsParseTypeOperator(t) : this.isContextual("infer") ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher()
                            }
                            tsParseUnionOrIntersectionType(t, e, s) {
                                this.eat(s);
                                let i = e();
                                if (this.match(s)) {
                                    const r = [i];
                                    for (; this.eat(s);) r.push(e());
                                    const a = this.startNodeAtNode(i);
                                    a.types = r, i = this.finishNode(a, t)
                                }
                                return i
                            }
                            tsParseIntersectionTypeOrHigher() {
                                return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), c.bitwiseAND)
                            }
                            tsParseUnionTypeOrHigher() {
                                return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), c.bitwiseOR)
                            }
                            tsIsStartOfFunctionType() {
                                return !!this.isRelational("<") || this.match(c.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this))
                            }
                            tsSkipParameterStart() {
                                if (this.match(c.name) || this.match(c._this)) return this.next(), !0;
                                if (this.match(c.braceL)) {
                                    let t = 1;
                                    for (this.next(); t > 0;) this.match(c.braceL) ? ++t : this.match(c.braceR) && --t, this.next();
                                    return !0
                                }
                                if (this.match(c.bracketL)) {
                                    let t = 1;
                                    for (this.next(); t > 0;) this.match(c.bracketL) ? ++t : this.match(c.bracketR) && --t, this.next();
                                    return !0
                                }
                                return !1
                            }
                            tsIsUnambiguouslyStartOfFunctionType() {
                                if (this.next(), this.match(c.parenR) || this.match(c.ellipsis)) return !0;
                                if (this.tsSkipParameterStart()) {
                                    if (this.match(c.colon) || this.match(c.comma) || this.match(c.question) || this.match(c.eq)) return !0;
                                    if (this.match(c.parenR) && (this.next(), this.match(c.arrow))) return !0
                                }
                                return !1
                            }
                            tsParseTypeOrTypePredicateAnnotation(t) {
                                return this.tsInType((() => {
                                    const e = this.startNode();
                                    this.expect(t);
                                    const s = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
                                    if (s && this.match(c._this)) {
                                        let t = this.tsParseThisTypeOrThisTypePredicate();
                                        if ("TSThisType" === t.type) {
                                            const s = this.startNodeAtNode(e);
                                            s.parameterName = t, s.asserts = !0, t = this.finishNode(s, "TSTypePredicate")
                                        } else t.asserts = !0;
                                        return e.typeAnnotation = t, this.finishNode(e, "TSTypeAnnotation")
                                    }
                                    const i = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
                                    if (!i) {
                                        if (!s) return this.tsParseTypeAnnotation(!1, e);
                                        const t = this.startNodeAtNode(e);
                                        return t.parameterName = this.parseIdentifier(), t.asserts = s, e.typeAnnotation = this.finishNode(t, "TSTypePredicate"), this.finishNode(e, "TSTypeAnnotation")
                                    }
                                    const r = this.tsParseTypeAnnotation(!1),
                                        a = this.startNodeAtNode(e);
                                    return a.parameterName = i, a.typeAnnotation = r, a.asserts = s, e.typeAnnotation = this.finishNode(a, "TSTypePredicate"), this.finishNode(e, "TSTypeAnnotation")
                                }))
                            }
                            tsTryParseTypeOrTypePredicateAnnotation() {
                                return this.match(c.colon) ? this.tsParseTypeOrTypePredicateAnnotation(c.colon) : void 0
                            }
                            tsTryParseTypeAnnotation() {
                                return this.match(c.colon) ? this.tsParseTypeAnnotation() : void 0
                            }
                            tsTryParseType() {
                                return this.tsEatThenParseType(c.colon)
                            }
                            tsParseTypePredicatePrefix() {
                                const t = this.parseIdentifier();
                                if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), t
                            }
                            tsParseTypePredicateAsserts() {
                                if (!this.match(c.name) || "asserts" !== this.state.value || this.hasPrecedingLineBreak()) return !1;
                                const t = this.state.containsEsc;
                                return this.next(), !(!this.match(c.name) && !this.match(c._this) || (t && this.raise(this.state.lastTokStart, g.InvalidEscapedReservedWord, "asserts"), 0))
                            }
                            tsParseTypeAnnotation(t = !0, e = this.startNode()) {
                                return this.tsInType((() => {
                                    t && this.expect(c.colon), e.typeAnnotation = this.tsParseType()
                                })), this.finishNode(e, "TSTypeAnnotation")
                            }
                            tsParseType() {
                                at(this.state.inType);
                                const t = this.tsParseNonConditionalType();
                                if (this.hasPrecedingLineBreak() || !this.eat(c._extends)) return t;
                                const e = this.startNodeAtNode(t);
                                return e.checkType = t, e.extendsType = this.tsParseNonConditionalType(), this.expect(c.question), e.trueType = this.tsParseType(), this.expect(c.colon), e.falseType = this.tsParseType(), this.finishNode(e, "TSConditionalType")
                            }
                            tsParseNonConditionalType() {
                                return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(c._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.tsParseUnionTypeOrHigher()
                            }
                            tsParseTypeAssertion() {
                                const t = this.startNode(),
                                    e = this.tsTryNextParseConstantContext();
                                return t.typeAnnotation = e || this.tsNextThenParseType(), this.expectRelational(">"), t.expression = this.parseMaybeUnary(), this.finishNode(t, "TSTypeAssertion")
                            }
                            tsParseHeritageClause(t) {
                                const e = this.state.start,
                                    s = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
                                return s.length || this.raise(e, nt.EmptyHeritageClauseType, t), s
                            }
                            tsParseExpressionWithTypeArguments() {
                                const t = this.startNode();
                                return t.expression = this.tsParseEntityName(!1), this.isRelational("<") && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSExpressionWithTypeArguments")
                            }
                            tsParseInterfaceDeclaration(t) {
                                t.id = this.parseIdentifier(), this.checkLVal(t.id, "typescript interface declaration", 130), t.typeParameters = this.tsTryParseTypeParameters(), this.eat(c._extends) && (t.extends = this.tsParseHeritageClause("extends"));
                                const e = this.startNode();
                                return e.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), t.body = this.finishNode(e, "TSInterfaceBody"), this.finishNode(t, "TSInterfaceDeclaration")
                            }
                            tsParseTypeAliasDeclaration(t) {
                                return t.id = this.parseIdentifier(), this.checkLVal(t.id, "typescript type alias", 2), t.typeParameters = this.tsTryParseTypeParameters(), t.typeAnnotation = this.tsInType((() => {
                                    if (this.expect(c.eq), this.isContextual("intrinsic") && this.lookahead().type !== c.dot) {
                                        const t = this.startNode();
                                        return this.next(), this.finishNode(t, "TSIntrinsicKeyword")
                                    }
                                    return this.tsParseType()
                                })), this.semicolon(), this.finishNode(t, "TSTypeAliasDeclaration")
                            }
                            tsInNoContext(t) {
                                const e = this.state.context;
                                this.state.context = [e[0]];
                                try {
                                    return t()
                                } finally {
                                    this.state.context = e
                                }
                            }
                            tsInType(t) {
                                const e = this.state.inType;
                                this.state.inType = !0;
                                try {
                                    return t()
                                } finally {
                                    this.state.inType = e
                                }
                            }
                            tsEatThenParseType(t) {
                                return this.match(t) ? this.tsNextThenParseType() : void 0
                            }
                            tsExpectThenParseType(t) {
                                return this.tsDoThenParseType((() => this.expect(t)))
                            }
                            tsNextThenParseType() {
                                return this.tsDoThenParseType((() => this.next()))
                            }
                            tsDoThenParseType(t) {
                                return this.tsInType((() => (t(), this.tsParseType())))
                            }
                            tsParseEnumMember() {
                                const t = this.startNode();
                                return t.id = this.match(c.string) ? this.parseExprAtom() : this.parseIdentifier(!0), this.eat(c.eq) && (t.initializer = this.parseMaybeAssignAllowIn()), this.finishNode(t, "TSEnumMember")
                            }
                            tsParseEnumDeclaration(t, e) {
                                return e && (t.const = !0), t.id = this.parseIdentifier(), this.checkLVal(t.id, "typescript enum declaration", e ? 779 : 267), this.expect(c.braceL), t.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(c.braceR), this.finishNode(t, "TSEnumDeclaration")
                            }
                            tsParseModuleBlock() {
                                const t = this.startNode();
                                return this.scope.enter(0), this.expect(c.braceL), this.parseBlockOrModuleBlockBody(t.body = [], void 0, !0, c.braceR), this.scope.exit(), this.finishNode(t, "TSModuleBlock")
                            }
                            tsParseModuleOrNamespaceDeclaration(t, e = !1) {
                                if (t.id = this.parseIdentifier(), e || this.checkLVal(t.id, "module or namespace declaration", 1024), this.eat(c.dot)) {
                                    const e = this.startNode();
                                    this.tsParseModuleOrNamespaceDeclaration(e, !0), t.body = e
                                } else this.scope.enter(128), this.prodParam.enter(0), t.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
                                return this.finishNode(t, "TSModuleDeclaration")
                            }
                            tsParseAmbientExternalModuleDeclaration(t) {
                                return this.isContextual("global") ? (t.global = !0, t.id = this.parseIdentifier()) : this.match(c.string) ? t.id = this.parseExprAtom() : this.unexpected(), this.match(c.braceL) ? (this.scope.enter(128), this.prodParam.enter(0), t.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(t, "TSModuleDeclaration")
                            }
                            tsParseImportEqualsDeclaration(t, e) {
                                return t.isExport = e || !1, t.id = this.parseIdentifier(), this.checkLVal(t.id, "import equals declaration", 9), this.expect(c.eq), t.moduleReference = this.tsParseModuleReference(), this.semicolon(), this.finishNode(t, "TSImportEqualsDeclaration")
                            }
                            tsIsExternalModuleReference() {
                                return this.isContextual("require") && 40 === this.lookaheadCharCode()
                            }
                            tsParseModuleReference() {
                                return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1)
                            }
                            tsParseExternalModuleReference() {
                                const t = this.startNode();
                                if (this.expectContextual("require"), this.expect(c.parenL), !this.match(c.string)) throw this.unexpected();
                                return t.expression = this.parseExprAtom(), this.expect(c.parenR), this.finishNode(t, "TSExternalModuleReference")
                            }
                            tsLookAhead(t) {
                                const e = this.state.clone(),
                                    s = t();
                                return this.state = e, s
                            }
                            tsTryParseAndCatch(t) {
                                const e = this.tryParse((e => t() || e()));
                                if (!e.aborted && e.node) return e.error && (this.state = e.failState), e.node
                            }
                            tsTryParse(t) {
                                const e = this.state.clone(),
                                    s = t();
                                return void 0 !== s && !1 !== s ? s : void(this.state = e)
                            }
                            tsTryParseDeclare(t) {
                                if (this.isLineTerminator()) return;
                                let e, s = this.state.type;
                                return this.isContextual("let") && (s = c._var, e = "let"), this.tsInDeclareContext((() => {
                                    switch (s) {
                                        case c._function:
                                            return t.declare = !0, this.parseFunctionStatement(t, !1, !0);
                                        case c._class:
                                            return t.declare = !0, this.parseClass(t, !0, !1);
                                        case c._const:
                                            if (this.match(c._const) && this.isLookaheadContextual("enum")) return this.expect(c._const), this.expectContextual("enum"), this.tsParseEnumDeclaration(t, !0);
                                        case c._var:
                                            return e = e || this.state.value, this.parseVarStatement(t, e);
                                        case c.name: {
                                            const e = this.state.value;
                                            return "global" === e ? this.tsParseAmbientExternalModuleDeclaration(t) : this.tsParseDeclaration(t, e, !0)
                                        }
                                    }
                                }))
                            }
                            tsTryParseExportDeclaration() {
                                return this.tsParseDeclaration(this.startNode(), this.state.value, !0)
                            }
                            tsParseExpressionStatement(t, e) {
                                switch (e.name) {
                                    case "declare": {
                                        const e = this.tsTryParseDeclare(t);
                                        if (e) return e.declare = !0, e;
                                        break
                                    }
                                    case "global":
                                        if (this.match(c.braceL)) {
                                            this.scope.enter(128), this.prodParam.enter(0);
                                            const s = t;
                                            return s.global = !0, s.id = e, s.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(s, "TSModuleDeclaration")
                                        }
                                        break;
                                    default:
                                        return this.tsParseDeclaration(t, e.name, !1)
                                }
                            }
                            tsParseDeclaration(t, e, s) {
                                switch (e) {
                                    case "abstract":
                                        if (this.tsCheckLineTerminatorAndMatch(c._class, s)) {
                                            const e = t;
                                            return e.abstract = !0, s && (this.next(), this.match(c._class) || this.unexpected(null, c._class)), this.parseClass(e, !0, !1)
                                        }
                                        break;
                                    case "enum":
                                        if (s || this.match(c.name)) return s && this.next(), this.tsParseEnumDeclaration(t, !1);
                                        break;
                                    case "interface":
                                        if (this.tsCheckLineTerminatorAndMatch(c.name, s)) return s && this.next(), this.tsParseInterfaceDeclaration(t);
                                        break;
                                    case "module":
                                        if (s && this.next(), this.match(c.string)) return this.tsParseAmbientExternalModuleDeclaration(t);
                                        if (this.tsCheckLineTerminatorAndMatch(c.name, s)) return this.tsParseModuleOrNamespaceDeclaration(t);
                                        break;
                                    case "namespace":
                                        if (this.tsCheckLineTerminatorAndMatch(c.name, s)) return s && this.next(), this.tsParseModuleOrNamespaceDeclaration(t);
                                        break;
                                    case "type":
                                        if (this.tsCheckLineTerminatorAndMatch(c.name, s)) return s && this.next(), this.tsParseTypeAliasDeclaration(t)
                                }
                            }
                            tsCheckLineTerminatorAndMatch(t, e) {
                                return (e || this.match(t)) && !this.isLineTerminator()
                            }
                            tsTryParseGenericAsyncArrowFunction(t, e) {
                                if (!this.isRelational("<")) return;
                                const s = this.state.maybeInArrowParameters;
                                this.state.maybeInArrowParameters = !0;
                                const i = this.tsTryParseAndCatch((() => {
                                    const s = this.startNodeAt(t, e);
                                    return s.typeParameters = this.tsParseTypeParameters(), super.parseFunctionParams(s), s.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(c.arrow), s
                                }));
                                return this.state.maybeInArrowParameters = s, i ? this.parseArrowExpression(i, null, !0) : void 0
                            }
                            tsParseTypeArguments() {
                                const t = this.startNode();
                                return t.params = this.tsInType((() => this.tsInNoContext((() => (this.expectRelational("<"), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))))), 0 === t.params.length && this.raise(t.start, nt.EmptyTypeArguments), this.state.exprAllowed = !1, this.expectRelational(">"), this.finishNode(t, "TSTypeParameterInstantiation")
                            }
                            tsIsDeclarationStart() {
                                if (this.match(c.name)) switch (this.state.value) {
                                    case "abstract":
                                    case "declare":
                                    case "enum":
                                    case "interface":
                                    case "module":
                                    case "namespace":
                                    case "type":
                                        return !0
                                }
                                return !1
                            }
                            isExportDefaultSpecifier() {
                                return !this.tsIsDeclarationStart() && super.isExportDefaultSpecifier()
                            }
                            parseAssignableListItem(t, e) {
                                const s = this.state.start,
                                    i = this.state.startLoc;
                                let r, a = !1;
                                void 0 !== t && (r = this.parseAccessModifier(), a = !!this.tsParseModifier(["readonly"]), !1 === t && (r || a) && this.raise(s, nt.UnexpectedParameterModifier));
                                const n = this.parseMaybeDefault();
                                this.parseAssignableListItemTypes(n);
                                const o = this.parseMaybeDefault(n.start, n.loc.start, n);
                                if (r || a) {
                                    const t = this.startNodeAt(s, i);
                                    return e.length && (t.decorators = e), r && (t.accessibility = r), a && (t.readonly = a), "Identifier" !== o.type && "AssignmentPattern" !== o.type && this.raise(t.start, nt.UnsupportedParameterPropertyKind), t.parameter = o, this.finishNode(t, "TSParameterProperty")
                                }
                                return e.length && (n.decorators = e), o
                            }
                            parseFunctionBodyAndFinish(t, e, s = !1) {
                                this.match(c.colon) && (t.returnType = this.tsParseTypeOrTypePredicateAnnotation(c.colon));
                                const i = "FunctionDeclaration" === e ? "TSDeclareFunction" : "ClassMethod" === e ? "TSDeclareMethod" : void 0;
                                i && !this.match(c.braceL) && this.isLineTerminator() ? this.finishNode(t, i) : "TSDeclareFunction" === i && this.state.isDeclareContext && (this.raise(t.start, nt.DeclareFunctionHasImplementation), t.declare) ? super.parseFunctionBodyAndFinish(t, i, s) : super.parseFunctionBodyAndFinish(t, e, s)
                            }
                            registerFunctionStatementId(t) {
                                !t.body && t.id ? this.checkLVal(t.id, "function name", 1024) : super.registerFunctionStatementId(...arguments)
                            }
                            tsCheckForInvalidTypeCasts(t) {
                                t.forEach((t => {
                                    "TSTypeCastExpression" === (null == t ? void 0 : t.type) && this.raise(t.typeAnnotation.start, nt.UnexpectedTypeAnnotation)
                                }))
                            }
                            toReferencedList(t, e) {
                                return this.tsCheckForInvalidTypeCasts(t), t
                            }
                            parseArrayLike(...t) {
                                const e = super.parseArrayLike(...t);
                                return "ArrayExpression" === e.type && this.tsCheckForInvalidTypeCasts(e.elements), e
                            }
                            parseSubscript(t, e, s, i, r) {
                                if (!this.hasPrecedingLineBreak() && this.match(c.bang)) {
                                    this.state.exprAllowed = !1, this.next();
                                    const i = this.startNodeAt(e, s);
                                    return i.expression = t, this.finishNode(i, "TSNonNullExpression")
                                }
                                if (this.isRelational("<")) {
                                    const a = this.tsTryParseAndCatch((() => {
                                        if (!i && this.atPossibleAsyncArrow(t)) {
                                            const t = this.tsTryParseGenericAsyncArrowFunction(e, s);
                                            if (t) return t
                                        }
                                        const a = this.startNodeAt(e, s);
                                        a.callee = t;
                                        const n = this.tsParseTypeArguments();
                                        if (n) {
                                            if (!i && this.eat(c.parenL)) return a.arguments = this.parseCallExpressionArguments(c.parenR, !1), this.tsCheckForInvalidTypeCasts(a.arguments), a.typeParameters = n, this.finishCallExpression(a, r.optionalChainMember);
                                            if (this.match(c.backQuote)) {
                                                const i = this.parseTaggedTemplateExpression(t, e, s, r);
                                                return i.typeParameters = n, i
                                            }
                                        }
                                        this.unexpected()
                                    }));
                                    if (a) return a
                                }
                                return super.parseSubscript(t, e, s, i, r)
                            }
                            parseNewArguments(t) {
                                if (this.isRelational("<")) {
                                    const e = this.tsTryParseAndCatch((() => {
                                        const t = this.tsParseTypeArguments();
                                        return this.match(c.parenL) || this.unexpected(), t
                                    }));
                                    e && (t.typeParameters = e)
                                }
                                super.parseNewArguments(t)
                            }
                            parseExprOp(t, e, s, i) {
                                if (rt(c._in.binop) > i && !this.hasPrecedingLineBreak() && this.isContextual("as")) {
                                    const r = this.startNodeAt(e, s);
                                    r.expression = t;
                                    const a = this.tsTryNextParseConstantContext();
                                    return r.typeAnnotation = a || this.tsNextThenParseType(), this.finishNode(r, "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(r, e, s, i)
                                }
                                return super.parseExprOp(t, e, s, i)
                            }
                            checkReservedWord(t, e, s, i) {}
                            checkDuplicateExports() {}
                            parseImport(t) {
                                if (this.match(c.name) || this.match(c.star) || this.match(c.braceL)) {
                                    const e = this.lookahead();
                                    if (this.match(c.name) && e.type === c.eq) return this.tsParseImportEqualsDeclaration(t);
                                    !this.isContextual("type") || e.type === c.comma || e.type === c.name && "from" === e.value || (t.importKind = "type", this.next())
                                }
                                t.importKind || (t.importKind = "value");
                                const e = super.parseImport(t);
                                return "type" === e.importKind && e.specifiers.length > 1 && "ImportDefaultSpecifier" === e.specifiers[0].type && this.raise(e.start, "A type-only import can specify a default import or named bindings, but not both."), e
                            }
                            parseExport(t) {
                                if (this.match(c._import)) return this.expect(c._import), this.tsParseImportEqualsDeclaration(t, !0);
                                if (this.eat(c.eq)) {
                                    const e = t;
                                    return e.expression = this.parseExpression(), this.semicolon(), this.finishNode(e, "TSExportAssignment")
                                }
                                if (this.eatContextual("as")) {
                                    const e = t;
                                    return this.expectContextual("namespace"), e.id = this.parseIdentifier(), this.semicolon(), this.finishNode(e, "TSNamespaceExportDeclaration")
                                }
                                return this.isContextual("type") && this.lookahead().type === c.braceL ? (this.next(), t.exportKind = "type") : t.exportKind = "value", super.parseExport(t)
                            }
                            isAbstractClass() {
                                return this.isContextual("abstract") && this.lookahead().type === c._class
                            }
                            parseExportDefaultExpression() {
                                if (this.isAbstractClass()) {
                                    const t = this.startNode();
                                    return this.next(), this.parseClass(t, !0, !0), t.abstract = !0, t
                                }
                                if ("interface" === this.state.value) {
                                    const t = this.tsParseDeclaration(this.startNode(), this.state.value, !0);
                                    if (t) return t
                                }
                                return super.parseExportDefaultExpression()
                            }
                            parseStatementContent(t, e) {
                                if (this.state.type === c._const) {
                                    const t = this.lookahead();
                                    if (t.type === c.name && "enum" === t.value) {
                                        const t = this.startNode();
                                        return this.expect(c._const), this.expectContextual("enum"), this.tsParseEnumDeclaration(t, !0)
                                    }
                                }
                                return super.parseStatementContent(t, e)
                            }
                            parseAccessModifier() {
                                return this.tsParseModifier(["public", "protected", "private"])
                            }
                            parseClassMember(t, e, s) {
                                this.tsParseModifiers(e, ["declare"]);
                                const i = this.parseAccessModifier();
                                i && (e.accessibility = i), this.tsParseModifiers(e, ["declare"]);
                                const r = () => {
                                    super.parseClassMember(t, e, s)
                                };
                                e.declare ? this.tsInDeclareContext(r) : r()
                            }
                            parseClassMemberWithIsStatic(t, e, s, i) {
                                this.tsParseModifiers(e, ["abstract", "readonly", "declare"]);
                                const r = this.tsTryParseIndexSignature(e);
                                if (r) return t.body.push(r), e.abstract && this.raise(e.start, nt.IndexSignatureHasAbstract), i && this.raise(e.start, nt.IndexSignatureHasStatic), e.accessibility && this.raise(e.start, nt.IndexSignatureHasAccessibility, e.accessibility), void(e.declare && this.raise(e.start, nt.IndexSignatureHasDeclare));
                                super.parseClassMemberWithIsStatic(t, e, s, i)
                            }
                            parsePostMemberNameModifiers(t) {
                                this.eat(c.question) && (t.optional = !0), t.readonly && this.match(c.parenL) && this.raise(t.start, nt.ClassMethodHasReadonly), t.declare && this.match(c.parenL) && this.raise(t.start, nt.ClassMethodHasDeclare)
                            }
                            parseExpressionStatement(t, e) {
                                return ("Identifier" === e.type ? this.tsParseExpressionStatement(t, e) : void 0) || super.parseExpressionStatement(t, e)
                            }
                            shouldParseExportDeclaration() {
                                return !!this.tsIsDeclarationStart() || super.shouldParseExportDeclaration()
                            }
                            parseConditional(t, e, s, i) {
                                if (!i || !this.match(c.question)) return super.parseConditional(t, e, s, i);
                                const r = this.tryParse((() => super.parseConditional(t, e, s)));
                                return r.node ? (r.error && (this.state = r.failState), r.node) : (i.start = r.error.pos || this.state.start, t)
                            }
                            parseParenItem(t, e, s) {
                                if (t = super.parseParenItem(t, e, s), this.eat(c.question) && (t.optional = !0, this.resetEndLocation(t)), this.match(c.colon)) {
                                    const i = this.startNodeAt(e, s);
                                    return i.expression = t, i.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(i, "TSTypeCastExpression")
                                }
                                return t
                            }
                            parseExportDeclaration(t) {
                                const e = this.state.start,
                                    s = this.state.startLoc,
                                    i = this.eatContextual("declare");
                                let r;
                                return this.match(c.name) && (r = this.tsTryParseExportDeclaration()), r || (r = super.parseExportDeclaration(t)), r && ("TSInterfaceDeclaration" === r.type || "TSTypeAliasDeclaration" === r.type || i) && (t.exportKind = "type"), r && i && (this.resetStartLocation(r, e, s), r.declare = !0), r
                            }
                            parseClassId(t, e, s) {
                                if ((!e || s) && this.isContextual("implements")) return;
                                super.parseClassId(t, e, s, t.declare ? 1024 : 139);
                                const i = this.tsTryParseTypeParameters();
                                i && (t.typeParameters = i)
                            }
                            parseClassPropertyAnnotation(t) {
                                !t.optional && this.eat(c.bang) && (t.definite = !0);
                                const e = this.tsTryParseTypeAnnotation();
                                e && (t.typeAnnotation = e)
                            }
                            parseClassProperty(t) {
                                return this.parseClassPropertyAnnotation(t), this.state.isDeclareContext && this.match(c.eq) && this.raise(this.state.start, nt.DeclareClassFieldHasInitializer), super.parseClassProperty(t)
                            }
                            parseClassPrivateProperty(t) {
                                return t.abstract && this.raise(t.start, nt.PrivateElementHasAbstract), t.accessibility && this.raise(t.start, nt.PrivateElementHasAccessibility, t.accessibility), this.parseClassPropertyAnnotation(t), super.parseClassPrivateProperty(t)
                            }
                            pushClassMethod(t, e, s, i, r, a) {
                                const n = this.tsTryParseTypeParameters();
                                n && r && this.raise(n.start, nt.ConstructorHasTypeParameters), n && (e.typeParameters = n), super.pushClassMethod(t, e, s, i, r, a)
                            }
                            pushClassPrivateMethod(t, e, s, i) {
                                const r = this.tsTryParseTypeParameters();
                                r && (e.typeParameters = r), super.pushClassPrivateMethod(t, e, s, i)
                            }
                            parseClassSuper(t) {
                                super.parseClassSuper(t), t.superClass && this.isRelational("<") && (t.superTypeParameters = this.tsParseTypeArguments()), this.eatContextual("implements") && (t.implements = this.tsParseHeritageClause("implements"))
                            }
                            parseObjPropValue(t, ...e) {
                                const s = this.tsTryParseTypeParameters();
                                s && (t.typeParameters = s), super.parseObjPropValue(t, ...e)
                            }
                            parseFunctionParams(t, e) {
                                const s = this.tsTryParseTypeParameters();
                                s && (t.typeParameters = s), super.parseFunctionParams(t, e)
                            }
                            parseVarId(t, e) {
                                super.parseVarId(t, e), "Identifier" === t.id.type && this.eat(c.bang) && (t.definite = !0);
                                const s = this.tsTryParseTypeAnnotation();
                                s && (t.id.typeAnnotation = s, this.resetEndLocation(t.id))
                            }
                            parseAsyncArrowFromCallExpression(t, e) {
                                return this.match(c.colon) && (t.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(t, e)
                            }
                            parseMaybeAssign(...t) {
                                var e, s, i, r, a, n, o;
                                let h, p, l, u;
                                if (this.match(c.jsxTagStart)) {
                                    if (h = this.state.clone(), p = this.tryParse((() => super.parseMaybeAssign(...t)), h), !p.error) return p.node;
                                    const {
                                        context: e
                                    } = this.state;
                                    e[e.length - 1] === T.j_oTag ? e.length -= 2 : e[e.length - 1] === T.j_expr && (e.length -= 1)
                                }
                                if (!(null == (e = p) ? void 0 : e.error) && !this.isRelational("<")) return super.parseMaybeAssign(...t);
                                h = h || this.state.clone();
                                const d = this.tryParse((e => {
                                    var s;
                                    u = this.tsParseTypeParameters();
                                    const i = super.parseMaybeAssign(...t);
                                    return ("ArrowFunctionExpression" !== i.type || i.extra && i.extra.parenthesized) && e(), 0 !== (null == (s = u) ? void 0 : s.params.length) && this.resetStartLocationFromNode(i, u), i.typeParameters = u, i
                                }), h);
                                if (!d.error && !d.aborted) return d.node;
                                if (!p && (at(!this.hasPlugin("jsx")), l = this.tryParse((() => super.parseMaybeAssign(...t)), h), !l.error)) return l.node;
                                if (null == (s = p) ? void 0 : s.node) return this.state = p.failState, p.node;
                                if (d.node) return this.state = d.failState, d.node;
                                if (null == (i = l) ? void 0 : i.node) return this.state = l.failState, l.node;
                                if (null == (r = p) ? void 0 : r.thrown) throw p.error;
                                if (d.thrown) throw d.error;
                                if (null == (a = l) ? void 0 : a.thrown) throw l.error;
                                throw (null == (n = p) ? void 0 : n.error) || d.error || (null == (o = l) ? void 0 : o.error)
                            }
                            parseMaybeUnary(t) {
                                return !this.hasPlugin("jsx") && this.isRelational("<") ? this.tsParseTypeAssertion() : super.parseMaybeUnary(t)
                            }
                            parseArrow(t) {
                                if (this.match(c.colon)) {
                                    const e = this.tryParse((t => {
                                        const e = this.tsParseTypeOrTypePredicateAnnotation(c.colon);
                                        return !this.canInsertSemicolon() && this.match(c.arrow) || t(), e
                                    }));
                                    if (e.aborted) return;
                                    e.thrown || (e.error && (this.state = e.failState), t.returnType = e.node)
                                }
                                return super.parseArrow(t)
                            }
                            parseAssignableListItemTypes(t) {
                                this.eat(c.question) && ("Identifier" === t.type || this.state.isDeclareContext || this.state.inType || this.raise(t.start, nt.PatternIsOptional), t.optional = !0);
                                const e = this.tsTryParseTypeAnnotation();
                                return e && (t.typeAnnotation = e), this.resetEndLocation(t), t
                            }
                            toAssignable(t, e = !1) {
                                switch (t.type) {
                                    case "TSTypeCastExpression":
                                        return super.toAssignable(this.typeCastToParameter(t), e);
                                    case "TSParameterProperty":
                                        return super.toAssignable(t, e);
                                    case "TSAsExpression":
                                    case "TSNonNullExpression":
                                    case "TSTypeAssertion":
                                        return t.expression = this.toAssignable(t.expression, e), t;
                                    default:
                                        return super.toAssignable(t, e)
                                }
                            }
                            checkLVal(t, e, ...s) {
                                switch (t.type) {
                                    case "TSTypeCastExpression":
                                        return;
                                    case "TSParameterProperty":
                                        return void this.checkLVal(t.parameter, "parameter property", ...s);
                                    case "TSAsExpression":
                                    case "TSNonNullExpression":
                                    case "TSTypeAssertion":
                                        return void this.checkLVal(t.expression, e, ...s);
                                    default:
                                        return void super.checkLVal(t, e, ...s)
                                }
                            }
                            parseBindingAtom() {
                                switch (this.state.type) {
                                    case c._this:
                                        return this.parseIdentifier(!0);
                                    default:
                                        return super.parseBindingAtom()
                                }
                            }
                            parseMaybeDecoratorArguments(t) {
                                if (this.isRelational("<")) {
                                    const e = this.tsParseTypeArguments();
                                    if (this.match(c.parenL)) {
                                        const s = super.parseMaybeDecoratorArguments(t);
                                        return s.typeParameters = e, s
                                    }
                                    this.unexpected(this.state.start, c.parenL)
                                }
                                return super.parseMaybeDecoratorArguments(t)
                            }
                            isClassMethod() {
                                return this.isRelational("<") || super.isClassMethod()
                            }
                            isClassProperty() {
                                return this.match(c.bang) || this.match(c.colon) || super.isClassProperty()
                            }
                            parseMaybeDefault(...t) {
                                const e = super.parseMaybeDefault(...t);
                                return "AssignmentPattern" === e.type && e.typeAnnotation && e.right.start < e.typeAnnotation.start && this.raise(e.typeAnnotation.start, nt.TypeAnnotationAfterAssign), e
                            }
                            getTokenFromCode(t) {
                                return !this.state.inType || 62 !== t && 60 !== t ? super.getTokenFromCode(t) : this.finishOp(c.relational, 1)
                            }
                            reScan_lt_gt() {
                                if (this.match(c.relational)) {
                                    const t = this.input.charCodeAt(this.state.start);
                                    60 !== t && 62 !== t || (this.state.pos -= 1, this.readToken_lt_gt(t))
                                }
                            }
                            toAssignableList(t) {
                                for (let e = 0; e < t.length; e++) {
                                    const s = t[e];
                                    if (s) switch (s.type) {
                                        case "TSTypeCastExpression":
                                            t[e] = this.typeCastToParameter(s);
                                            break;
                                        case "TSAsExpression":
                                        case "TSTypeAssertion":
                                            this.state.maybeInArrowParameters ? this.raise(s.start, nt.UnexpectedTypeCastInParameter) : t[e] = this.typeCastToParameter(s)
                                    }
                                }
                                return super.toAssignableList(...arguments)
                            }
                            typeCastToParameter(t) {
                                return t.expression.typeAnnotation = t.typeAnnotation, this.resetEndLocation(t.expression, t.typeAnnotation.end, t.typeAnnotation.loc.end), t.expression
                            }
                            shouldParseArrow() {
                                return this.match(c.colon) || super.shouldParseArrow()
                            }
                            shouldParseAsyncArrow() {
                                return this.match(c.colon) || super.shouldParseAsyncArrow()
                            }
                            canHaveLeadingDecorator() {
                                return super.canHaveLeadingDecorator() || this.isAbstractClass()
                            }
                            jsxParseOpeningElementAfterName(t) {
                                if (this.isRelational("<")) {
                                    const e = this.tsTryParseAndCatch((() => this.tsParseTypeArguments()));
                                    e && (t.typeParameters = e)
                                }
                                return super.jsxParseOpeningElementAfterName(t)
                            }
                            getGetterSetterExpectedParamCount(t) {
                                const e = super.getGetterSetterExpectedParamCount(t),
                                    s = this.getObjectOrClassMethodParams(t)[0];
                                return s && "Identifier" === s.type && "this" === s.name ? e + 1 : e
                            }
                            parseCatchClauseParam() {
                                const t = super.parseCatchClauseParam(),
                                    e = this.tsTryParseTypeAnnotation();
                                return e && (t.typeAnnotation = e, this.resetEndLocation(t)), t
                            }
                            tsInDeclareContext(t) {
                                const e = this.state.isDeclareContext;
                                this.state.isDeclareContext = !0;
                                try {
                                    return t()
                                } finally {
                                    this.state.isDeclareContext = e
                                }
                            }
                        },
                        v8intrinsic: t => class extends t {
                            parseV8Intrinsic() {
                                if (this.match(c.modulo)) {
                                    const t = this.state.start,
                                        e = this.startNode();
                                    if (this.eat(c.modulo), this.match(c.name)) {
                                        const t = this.parseIdentifierName(this.state.start),
                                            s = this.createIdentifier(e, t);
                                        if (s.type = "V8IntrinsicIdentifier", this.match(c.parenL)) return s
                                    }
                                    this.unexpected(t)
                                }
                            }
                            parseExprAtom() {
                                return this.parseV8Intrinsic() || super.parseExprAtom(...arguments)
                            }
                        },
                        placeholders: t => class extends t {
                            parsePlaceholder(t) {
                                if (this.match(c.placeholder)) {
                                    const e = this.startNode();
                                    return this.next(), this.assertNoSpace("Unexpected space in placeholder."), e.name = super.parseIdentifier(!0), this.assertNoSpace("Unexpected space in placeholder."), this.expect(c.placeholder), this.finishPlaceholder(e, t)
                                }
                            }
                            finishPlaceholder(t, e) {
                                const s = !(!t.expectedNode || "Placeholder" !== t.type);
                                return t.expectedNode = e, s ? t : this.finishNode(t, "Placeholder")
                            }
                            getTokenFromCode(t) {
                                return 37 === t && 37 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(c.placeholder, 2) : super.getTokenFromCode(...arguments)
                            }
                            parseExprAtom() {
                                return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments)
                            }
                            parseIdentifier() {
                                return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments)
                            }
                            checkReservedWord(t) {
                                void 0 !== t && super.checkReservedWord(...arguments)
                            }
                            parseBindingAtom() {
                                return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments)
                            }
                            checkLVal(t) {
                                "Placeholder" !== t.type && super.checkLVal(...arguments)
                            }
                            toAssignable(t) {
                                return t && "Placeholder" === t.type && "Expression" === t.expectedNode ? (t.expectedNode = "Pattern", t) : super.toAssignable(...arguments)
                            }
                            verifyBreakContinue(t) {
                                t.label && "Placeholder" === t.label.type || super.verifyBreakContinue(...arguments)
                            }
                            parseExpressionStatement(t, e) {
                                if ("Placeholder" !== e.type || e.extra && e.extra.parenthesized) return super.parseExpressionStatement(...arguments);
                                if (this.match(c.colon)) {
                                    const s = t;
                                    return s.label = this.finishPlaceholder(e, "Identifier"), this.next(), s.body = this.parseStatement("label"), this.finishNode(s, "LabeledStatement")
                                }
                                return this.semicolon(), t.name = e.name, this.finishPlaceholder(t, "Statement")
                            }
                            parseBlock() {
                                return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments)
                            }
                            parseFunctionId() {
                                return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments)
                            }
                            parseClass(t, e, s) {
                                const i = e ? "ClassDeclaration" : "ClassExpression";
                                this.next(), this.takeDecorators(t);
                                const r = this.state.strict,
                                    a = this.parsePlaceholder("Identifier");
                                if (a)
                                    if (this.match(c._extends) || this.match(c.placeholder) || this.match(c.braceL)) t.id = a;
                                    else {
                                        if (s || !e) return t.id = null, t.body = this.finishPlaceholder(a, "ClassBody"), this.finishNode(t, i);
                                        this.unexpected(null, "A class name is required")
                                    }
                                else this.parseClassId(t, e, s);
                                return this.parseClassSuper(t), t.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!t.superClass, r), this.finishNode(t, i)
                            }
                            parseExport(t) {
                                const e = this.parsePlaceholder("Identifier");
                                if (!e) return super.parseExport(...arguments);
                                if (!this.isContextual("from") && !this.match(c.comma)) return t.specifiers = [], t.source = null, t.declaration = this.finishPlaceholder(e, "Declaration"), this.finishNode(t, "ExportNamedDeclaration");
                                this.expectPlugin("exportDefaultFrom");
                                const s = this.startNode();
                                return s.exported = e, t.specifiers = [this.finishNode(s, "ExportDefaultSpecifier")], super.parseExport(t)
                            }
                            isExportDefaultSpecifier() {
                                if (this.match(c._default)) {
                                    const t = this.nextTokenStart();
                                    if (this.isUnparsedContextual(t, "from") && this.input.startsWith(c.placeholder.label, this.nextTokenStartSince(t + 4))) return !0
                                }
                                return super.isExportDefaultSpecifier()
                            }
                            maybeParseExportDefaultSpecifier(t) {
                                return !!(t.specifiers && t.specifiers.length > 0) || super.maybeParseExportDefaultSpecifier(...arguments)
                            }
                            checkExport(t) {
                                const {
                                    specifiers: e
                                } = t;
                                (null == e ? void 0 : e.length) && (t.specifiers = e.filter((t => "Placeholder" === t.exported.type))), super.checkExport(t), t.specifiers = e
                            }
                            parseImport(t) {
                                const e = this.parsePlaceholder("Identifier");
                                if (!e) return super.parseImport(...arguments);
                                if (t.specifiers = [], !this.isContextual("from") && !this.match(c.comma)) return t.source = this.finishPlaceholder(e, "StringLiteral"), this.semicolon(), this.finishNode(t, "ImportDeclaration");
                                const s = this.startNodeAtNode(e);
                                return s.local = e, this.finishNode(s, "ImportDefaultSpecifier"), t.specifiers.push(s), this.eat(c.comma) && (this.maybeParseStarImportSpecifier(t) || this.parseNamedImportSpecifiers(t)), this.expectContextual("from"), t.source = this.parseImportSource(), this.semicolon(), this.finishNode(t, "ImportDeclaration")
                            }
                            parseImportSource() {
                                return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments)
                            }
                        }
                    },
                    ut = Object.keys(lt),
                    dt = {
                        sourceType: "script",
                        sourceFilename: void 0,
                        startLine: 1,
                        allowAwaitOutsideFunction: !1,
                        allowReturnOutsideFunction: !1,
                        allowImportExportEverywhere: !1,
                        allowSuperOutsideMethod: !1,
                        allowUndeclaredExports: !1,
                        plugins: [],
                        strictMode: null,
                        ranges: !1,
                        tokens: !1,
                        createParenthesizedExpressions: !1,
                        errorRecovery: !1
                    };
                class mt {
                    constructor() {
                        this.strict = void 0, this.curLine = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = !1, this.inPipeline = !1, this.inType = !1, this.noAnonFunctionType = !1, this.inPropertyName = !1, this.hasFlowComment = !1, this.isIterator = !1, this.isDeclareContext = !1, this.topicContext = {
                            maxNumOfResolvableTopics: 0,
                            maxTopicIndex: null
                        }, this.soloAwait = !1, this.inFSharpPipelineDirectBody = !1, this.labels = [], this.decoratorStack = [
                            []
                        ], this.comments = [], this.trailingComments = [], this.leadingComments = [], this.commentStack = [], this.commentPreviousNode = null, this.pos = 0, this.lineStart = 0, this.type = c.eof, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.lastTokEnd = 0, this.context = [T.braceStatement], this.exprAllowed = !0, this.containsEsc = !1, this.strictErrors = new Map, this.exportedIdentifiers = [], this.tokensLength = 0
                    }
                    init(t) {
                        this.strict = !1 !== t.strictMode && "module" === t.sourceType, this.curLine = t.startLine, this.startLoc = this.endLoc = this.curPosition()
                    }
                    curPosition() {
                        return new y(this.curLine, this.pos - this.lineStart)
                    }
                    clone(t) {
                        const e = new mt,
                            s = Object.keys(this);
                        for (let i = 0, r = s.length; i < r; i++) {
                            const r = s[i];
                            let a = this[r];
                            !t && Array.isArray(a) && (a = a.slice()), e[r] = a
                        }
                        return e
                    }
                }
                var ft = function(t) {
                    return t >= 48 && t <= 57
                };
                const yt = new Set(["g", "m", "s", "i", "y", "u"]),
                    xt = {
                        decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
                        hex: [46, 88, 95, 120]
                    },
                    Pt = {
                        bin: [48, 49]
                    };
                Pt.oct = [...Pt.bin, 50, 51, 52, 53, 54, 55], Pt.dec = [...Pt.oct, 56, 57], Pt.hex = [...Pt.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
                class gt {
                    constructor(t) {
                        this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new x(t.startLoc, t.endLoc)
                    }
                }
                class bt {
                    constructor() {
                        this.shorthandAssign = -1, this.doubleProto = -1
                    }
                }
                class Tt {
                    constructor(t, e, s) {
                        this.type = void 0, this.start = void 0, this.end = void 0, this.loc = void 0, this.range = void 0, this.leadingComments = void 0, this.trailingComments = void 0, this.innerComments = void 0, this.extra = void 0, this.type = "", this.start = e, this.end = 0, this.loc = new x(s), (null == t ? void 0 : t.options.ranges) && (this.range = [e, 0]), (null == t ? void 0 : t.filename) && (this.loc.filename = t.filename)
                    }
                    __clone() {
                        const t = new Tt,
                            e = Object.keys(this);
                        for (let s = 0, i = e.length; s < i; s++) {
                            const i = e[s];
                            "leadingComments" !== i && "trailingComments" !== i && "innerComments" !== i && (t[i] = this[i])
                        }
                        return t
                    }
                }
                const At = t => "ParenthesizedExpression" === t.type ? At(t.expression) : t;
                class wt {
                    constructor(t = 0) {
                        this.type = void 0, this.type = t
                    }
                    canBeArrowParameterDeclaration() {
                        return 2 === this.type || 1 === this.type
                    }
                    isCertainlyParameterDeclaration() {
                        return 3 === this.type
                    }
                }
                class Et extends wt {
                    constructor(t) {
                        super(t), this.errors = new Map
                    }
                    recordDeclarationError(t, e) {
                        this.errors.set(t, e)
                    }
                    clearDeclarationError(t) {
                        this.errors.delete(t)
                    }
                    iterateErrors(t) {
                        this.errors.forEach(t)
                    }
                }
                class St {
                    constructor(t) {
                        this.stack = [new wt], this.raise = t
                    }
                    enter(t) {
                        this.stack.push(t)
                    }
                    exit() {
                        this.stack.pop()
                    }
                    recordParameterInitializerError(t, e) {
                        const {
                            stack: s
                        } = this;
                        let i = s.length - 1,
                            r = s[i];
                        for (; !r.isCertainlyParameterDeclaration();) {
                            if (!r.canBeArrowParameterDeclaration()) return;
                            r.recordDeclarationError(t, e), r = s[--i]
                        }
                        this.raise(t, e)
                    }
                    recordParenthesizedIdentifierError(t, e) {
                        const {
                            stack: s
                        } = this, i = s[s.length - 1];
                        if (i.isCertainlyParameterDeclaration()) this.raise(t, e);
                        else {
                            if (!i.canBeArrowParameterDeclaration()) return;
                            i.recordDeclarationError(t, e)
                        }
                    }
                    recordAsyncArrowParametersError(t, e) {
                        const {
                            stack: s
                        } = this;
                        let i = s.length - 1,
                            r = s[i];
                        for (; r.canBeArrowParameterDeclaration();) 2 === r.type && r.recordDeclarationError(t, e), r = s[--i]
                    }
                    validateAsPattern() {
                        const {
                            stack: t
                        } = this, e = t[t.length - 1];
                        e.canBeArrowParameterDeclaration() && e.iterateErrors(((e, s) => {
                            this.raise(s, e);
                            let i = t.length - 2,
                                r = t[i];
                            for (; r.canBeArrowParameterDeclaration();) r.clearDeclarationError(s), r = t[--i]
                        }))
                    }
                }

                function Ct() {
                    return new wt
                }
                const Nt = {
                        kind: "loop"
                    },
                    kt = {
                        kind: "switch"
                    },
                    It = /[\uD800-\uDFFF]/u;
                class vt {
                    constructor() {
                        this.privateNames = new Set, this.loneAccessors = new Map, this.undefinedPrivateNames = new Map
                    }
                }
                class Lt {
                    constructor(t) {
                        this.stack = [], this.undefinedPrivateNames = new Map, this.raise = t
                    }
                    current() {
                        return this.stack[this.stack.length - 1]
                    }
                    enter() {
                        this.stack.push(new vt)
                    }
                    exit() {
                        const t = this.stack.pop(),
                            e = this.current();
                        for (let s = 0, i = Array.from(t.undefinedPrivateNames); s < i.length; s++) {
                            const [t, r] = i[s];
                            e ? e.undefinedPrivateNames.has(t) || e.undefinedPrivateNames.set(t, r) : this.raise(r, g.InvalidPrivateFieldResolution, t)
                        }
                    }
                    declarePrivateName(t, e, s) {
                        const i = this.current();
                        let r = i.privateNames.has(t);
                        if (3 & e) {
                            const s = r && i.loneAccessors.get(t);
                            if (s) {
                                const a = 4 & s,
                                    n = 4 & e;
                                r = (3 & s) == (3 & e) || a !== n, r || i.loneAccessors.delete(t)
                            } else r || i.loneAccessors.set(t, e)
                        }
                        r && this.raise(s, g.PrivateNameRedeclaration, t), i.privateNames.add(t), i.undefinedPrivateNames.delete(t)
                    }
                    usePrivateName(t, e) {
                        let s;
                        for (let e = 0, i = this.stack; e < i.length; e++)
                            if (s = i[e], s.privateNames.has(t)) return;
                        s ? s.undefinedPrivateNames.set(t, e) : this.raise(e, g.InvalidPrivateFieldResolution, t)
                    }
                }
                class Dt extends class extends class extends class extends class extends class extends class extends class extends class extends class {
                    constructor() {
                        this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1
                    }
                    hasPlugin(t) {
                        return this.plugins.has(t)
                    }
                    getPluginOption(t, e) {
                        if (this.hasPlugin(t)) return this.plugins.get(t)[e]
                    }
                } {
                    addComment(t) {
                        this.filename && (t.loc.filename = this.filename), this.state.trailingComments.push(t), this.state.leadingComments.push(t)
                    }
                    adjustCommentsAfterTrailingComma(t, e, s) {
                        if (0 === this.state.leadingComments.length) return;
                        let i = null,
                            r = e.length;
                        for (; null === i && r > 0;) i = e[--r];
                        if (null === i) return;
                        for (let t = 0; t < this.state.leadingComments.length; t++) this.state.leadingComments[t].end < this.state.commentPreviousNode.end && (this.state.leadingComments.splice(t, 1), t--);
                        const a = [];
                        for (let e = 0; e < this.state.leadingComments.length; e++) {
                            const i = this.state.leadingComments[e];
                            i.end < t.end ? (a.push(i), s || (this.state.leadingComments.splice(e, 1), e--)) : (void 0 === t.trailingComments && (t.trailingComments = []), t.trailingComments.push(i))
                        }
                        s && (this.state.leadingComments = []), a.length > 0 ? i.trailingComments = a : void 0 !== i.trailingComments && (i.trailingComments = [])
                    }
                    processComment(t) {
                        if ("Program" === t.type && t.body.length > 0) return;
                        const e = this.state.commentStack;
                        let s, i, r, a, n;
                        if (this.state.trailingComments.length > 0) this.state.trailingComments[0].start >= t.end ? (r = this.state.trailingComments, this.state.trailingComments = []) : this.state.trailingComments.length = 0;
                        else if (e.length > 0) {
                            const s = P(e);
                            s.trailingComments && s.trailingComments[0].start >= t.end && (r = s.trailingComments, delete s.trailingComments)
                        }
                        for (e.length > 0 && P(e).start >= t.start && (s = e.pop()); e.length > 0 && P(e).start >= t.start;) i = e.pop();
                        if (!i && s && (i = s), s) switch (t.type) {
                            case "ObjectExpression":
                                this.adjustCommentsAfterTrailingComma(t, t.properties);
                                break;
                            case "ObjectPattern":
                                this.adjustCommentsAfterTrailingComma(t, t.properties, !0);
                                break;
                            case "CallExpression":
                                this.adjustCommentsAfterTrailingComma(t, t.arguments);
                                break;
                            case "ArrayExpression":
                                this.adjustCommentsAfterTrailingComma(t, t.elements);
                                break;
                            case "ArrayPattern":
                                this.adjustCommentsAfterTrailingComma(t, t.elements, !0)
                        } else this.state.commentPreviousNode && ("ImportSpecifier" === this.state.commentPreviousNode.type && "ImportSpecifier" !== t.type || "ExportSpecifier" === this.state.commentPreviousNode.type && "ExportSpecifier" !== t.type) && this.adjustCommentsAfterTrailingComma(t, [this.state.commentPreviousNode]);
                        if (i) {
                            if (i.leadingComments)
                                if (i !== t && i.leadingComments.length > 0 && P(i.leadingComments).end <= t.start) t.leadingComments = i.leadingComments, delete i.leadingComments;
                                else
                                    for (a = i.leadingComments.length - 2; a >= 0; --a)
                                        if (i.leadingComments[a].end <= t.start) {
                                            t.leadingComments = i.leadingComments.splice(0, a + 1);
                                            break
                                        }
                        } else if (this.state.leadingComments.length > 0)
                            if (P(this.state.leadingComments).end <= t.start) {
                                if (this.state.commentPreviousNode)
                                    for (n = 0; n < this.state.leadingComments.length; n++) this.state.leadingComments[n].end < this.state.commentPreviousNode.end && (this.state.leadingComments.splice(n, 1), n--);
                                this.state.leadingComments.length > 0 && (t.leadingComments = this.state.leadingComments, this.state.leadingComments = [])
                            } else {
                                for (a = 0; a < this.state.leadingComments.length && !(this.state.leadingComments[a].end > t.start); a++);
                                const e = this.state.leadingComments.slice(0, a);
                                e.length && (t.leadingComments = e), r = this.state.leadingComments.slice(a), 0 === r.length && (r = null)
                            } if (this.state.commentPreviousNode = t, r)
                            if (r.length && r[0].start >= t.start && P(r).end <= t.end) t.innerComments = r;
                            else {
                                const e = r.findIndex((e => e.end >= t.end));
                                e > 0 ? (t.innerComments = r.slice(0, e), t.trailingComments = r.slice(e)) : t.trailingComments = r
                            } e.push(t)
                    }
                } {
                    getLocationForPosition(t) {
                        let e;
                        return e = t === this.state.start ? this.state.startLoc : t === this.state.lastTokStart ? this.state.lastTokStartLoc : t === this.state.end ? this.state.endLoc : t === this.state.lastTokEnd ? this.state.lastTokEndLoc : function(t, e) {
                            let s, i = 1,
                                r = 0;
                            for (u.lastIndex = 0;
                                (s = u.exec(t)) && s.index < e;) i++, r = u.lastIndex;
                            return new y(i, e - r)
                        }(this.input, t), e
                    }
                    raise(t, e, ...s) {
                        return this.raiseWithData(t, void 0, e, ...s)
                    }
                    raiseWithData(t, e, s, ...i) {
                        const r = this.getLocationForPosition(t),
                            a = s.replace(/%(\d+)/g, ((t, e) => i[e])) + ` (${r.line}:${r.column})`;
                        return this._raise(Object.assign({
                            loc: r,
                            pos: t
                        }, e), a)
                    }
                    _raise(t, e) {
                        const s = new SyntaxError(e);
                        if (Object.assign(s, t), this.options.errorRecovery) return this.isLookahead || this.state.errors.push(s), s;
                        throw s
                    }
                } {
                    constructor(t, e) {
                        super(), this.isLookahead = void 0, this.tokens = [], this.state = new mt, this.state.init(t), this.input = e, this.length = e.length, this.isLookahead = !1
                    }
                    pushToken(t) {
                        this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength
                    }
                    next() {
                        this.isLookahead || (this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new gt(this.state))), this.state.lastTokEnd = this.state.end, this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken()
                    }
                    eat(t) {
                        return !!this.match(t) && (this.next(), !0)
                    }
                    match(t) {
                        return this.state.type === t
                    }
                    lookahead() {
                        const t = this.state;
                        this.state = t.clone(!0), this.isLookahead = !0, this.next(), this.isLookahead = !1;
                        const e = this.state;
                        return this.state = t, e
                    }
                    nextTokenStart() {
                        return this.nextTokenStartSince(this.state.pos)
                    }
                    nextTokenStartSince(t) {
                        return m.lastIndex = t, t + m.exec(this.input)[0].length
                    }
                    lookaheadCharCode() {
                        return this.input.charCodeAt(this.nextTokenStart())
                    }
                    setStrict(t) {
                        this.state.strict = t, t && (this.state.strictErrors.forEach(((t, e) => this.raise(e, t))), this.state.strictErrors.clear())
                    }
                    curContext() {
                        return this.state.context[this.state.context.length - 1]
                    }
                    nextToken() {
                        const t = this.curContext();
                        if ((null == t ? void 0 : t.preserveSpace) || this.skipSpace(), this.state.start = this.state.pos, this.state.startLoc = this.state.curPosition(), this.state.pos >= this.length) return void this.finishToken(c.eof);
                        const e = null == t ? void 0 : t.override;
                        e ? e(this) : this.getTokenFromCode(this.input.codePointAt(this.state.pos))
                    }
                    pushComment(t, e, s, i, r, a) {
                        const n = {
                            type: t ? "CommentBlock" : "CommentLine",
                            value: e,
                            start: s,
                            end: i,
                            loc: new x(r, a)
                        };
                        this.options.tokens && this.pushToken(n), this.state.comments.push(n), this.addComment(n)
                    }
                    skipBlockComment() {
                        const t = this.state.curPosition(),
                            e = this.state.pos,
                            s = this.input.indexOf("*/", this.state.pos + 2);
                        if (-1 === s) throw this.raise(e, g.UnterminatedComment);
                        let i;
                        for (this.state.pos = s + 2, u.lastIndex = e;
                            (i = u.exec(this.input)) && i.index < this.state.pos;) ++this.state.curLine, this.state.lineStart = i.index + i[0].length;
                        this.isLookahead || this.pushComment(!0, this.input.slice(e + 2, s), e, this.state.pos, t, this.state.curPosition())
                    }
                    skipLineComment(t) {
                        const e = this.state.pos,
                            s = this.state.curPosition();
                        let i = this.input.charCodeAt(this.state.pos += t);
                        if (this.state.pos < this.length)
                            for (; !d(i) && ++this.state.pos < this.length;) i = this.input.charCodeAt(this.state.pos);
                        this.isLookahead || this.pushComment(!1, this.input.slice(e + t, this.state.pos), e, this.state.pos, s, this.state.curPosition())
                    }
                    skipSpace() {
                        t: for (; this.state.pos < this.length;) {
                            const t = this.input.charCodeAt(this.state.pos);
                            switch (t) {
                                case 32:
                                case 160:
                                case 9:
                                    ++this.state.pos;
                                    break;
                                case 13:
                                    10 === this.input.charCodeAt(this.state.pos + 1) && ++this.state.pos;
                                case 10:
                                case 8232:
                                case 8233:
                                    ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
                                    break;
                                case 47:
                                    switch (this.input.charCodeAt(this.state.pos + 1)) {
                                        case 42:
                                            this.skipBlockComment();
                                            break;
                                        case 47:
                                            this.skipLineComment(2);
                                            break;
                                        default:
                                            break t
                                    }
                                    break;
                                default:
                                    if (!f(t)) break t;
                                    ++this.state.pos
                            }
                        }
                    }
                    finishToken(t, e) {
                        this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
                        const s = this.state.type;
                        this.state.type = t, this.state.value = e, this.isLookahead || this.updateContext(s)
                    }
                    readToken_numberSign() {
                        if (0 === this.state.pos && this.readToken_interpreter()) return;
                        const t = this.state.pos + 1,
                            e = this.input.charCodeAt(t);
                        if (e >= 48 && e <= 57) throw this.raise(this.state.pos, g.UnexpectedDigitAfterHash);
                        if (123 === e || 91 === e && this.hasPlugin("recordAndTuple")) {
                            if (this.expectPlugin("recordAndTuple"), "hash" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(this.state.pos, 123 === e ? g.RecordExpressionHashIncorrectStartSyntaxType : g.TupleExpressionHashIncorrectStartSyntaxType);
                            123 === e ? this.finishToken(c.braceHashL) : this.finishToken(c.bracketHashL), this.state.pos += 2
                        } else this.finishOp(c.hash, 1)
                    }
                    readToken_dot() {
                        const t = this.input.charCodeAt(this.state.pos + 1);
                        t >= 48 && t <= 57 ? this.readNumber(!0) : 46 === t && 46 === this.input.charCodeAt(this.state.pos + 2) ? (this.state.pos += 3, this.finishToken(c.ellipsis)) : (++this.state.pos, this.finishToken(c.dot))
                    }
                    readToken_slash() {
                        if (this.state.exprAllowed && !this.state.inType) return ++this.state.pos, void this.readRegexp();
                        61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(c.assign, 2) : this.finishOp(c.slash, 1)
                    }
                    readToken_interpreter() {
                        if (0 !== this.state.pos || this.length < 2) return !1;
                        let t = this.input.charCodeAt(this.state.pos + 1);
                        if (33 !== t) return !1;
                        const e = this.state.pos;
                        for (this.state.pos += 1; !d(t) && ++this.state.pos < this.length;) t = this.input.charCodeAt(this.state.pos);
                        const s = this.input.slice(e + 2, this.state.pos);
                        return this.finishToken(c.interpreterDirective, s), !0
                    }
                    readToken_mult_modulo(t) {
                        let e = 42 === t ? c.star : c.modulo,
                            s = 1,
                            i = this.input.charCodeAt(this.state.pos + 1);
                        const r = this.state.exprAllowed;
                        42 === t && 42 === i && (s++, i = this.input.charCodeAt(this.state.pos + 2), e = c.exponent), 61 !== i || r || (s++, e = c.assign), this.finishOp(e, s)
                    }
                    readToken_pipe_amp(t) {
                        const e = this.input.charCodeAt(this.state.pos + 1);
                        if (e !== t) {
                            if (124 === t) {
                                if (62 === e) return void this.finishOp(c.pipeline, 2);
                                if (this.hasPlugin("recordAndTuple") && 125 === e) {
                                    if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(this.state.pos, g.RecordExpressionBarIncorrectEndSyntaxType);
                                    return void this.finishOp(c.braceBarR, 2)
                                }
                                if (this.hasPlugin("recordAndTuple") && 93 === e) {
                                    if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(this.state.pos, g.TupleExpressionBarIncorrectEndSyntaxType);
                                    return void this.finishOp(c.bracketBarR, 2)
                                }
                            }
                            61 !== e ? this.finishOp(124 === t ? c.bitwiseOR : c.bitwiseAND, 1) : this.finishOp(c.assign, 2)
                        } else 61 === this.input.charCodeAt(this.state.pos + 2) ? this.finishOp(c.assign, 3) : this.finishOp(124 === t ? c.logicalOR : c.logicalAND, 2)
                    }
                    readToken_caret() {
                        61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(c.assign, 2) : this.finishOp(c.bitwiseXOR, 1)
                    }
                    readToken_plus_min(t) {
                        const e = this.input.charCodeAt(this.state.pos + 1);
                        if (e === t) return 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.state.pos + 2) || 0 !== this.state.lastTokEnd && !this.hasPrecedingLineBreak() ? void this.finishOp(c.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), void this.nextToken());
                        61 === e ? this.finishOp(c.assign, 2) : this.finishOp(c.plusMin, 1)
                    }
                    readToken_lt_gt(t) {
                        const e = this.input.charCodeAt(this.state.pos + 1);
                        let s = 1;
                        return e === t ? (s = 62 === t && 62 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.state.pos + s) ? void this.finishOp(c.assign, s + 1) : void this.finishOp(c.bitShift, s)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.state.pos + 2) || 45 !== this.input.charCodeAt(this.state.pos + 3) ? (61 === e && (s = 2), void this.finishOp(c.relational, s)) : (this.skipLineComment(4), this.skipSpace(), void this.nextToken())
                    }
                    readToken_eq_excl(t) {
                        const e = this.input.charCodeAt(this.state.pos + 1);
                        if (61 !== e) return 61 === t && 62 === e ? (this.state.pos += 2, void this.finishToken(c.arrow)) : void this.finishOp(61 === t ? c.eq : c.bang, 1);
                        this.finishOp(c.equality, 61 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2)
                    }
                    readToken_question() {
                        const t = this.input.charCodeAt(this.state.pos + 1),
                            e = this.input.charCodeAt(this.state.pos + 2);
                        63 === t ? 61 === e ? this.finishOp(c.assign, 3) : this.finishOp(c.nullishCoalescing, 2) : 46 !== t || e >= 48 && e <= 57 ? (++this.state.pos, this.finishToken(c.question)) : (this.state.pos += 2, this.finishToken(c.questionDot))
                    }
                    getTokenFromCode(t) {
                        switch (t) {
                            case 46:
                                return void this.readToken_dot();
                            case 40:
                                return ++this.state.pos, void this.finishToken(c.parenL);
                            case 41:
                                return ++this.state.pos, void this.finishToken(c.parenR);
                            case 59:
                                return ++this.state.pos, void this.finishToken(c.semi);
                            case 44:
                                return ++this.state.pos, void this.finishToken(c.comma);
                            case 91:
                                if (this.hasPlugin("recordAndTuple") && 124 === this.input.charCodeAt(this.state.pos + 1)) {
                                    if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(this.state.pos, g.TupleExpressionBarIncorrectStartSyntaxType);
                                    this.finishToken(c.bracketBarL), this.state.pos += 2
                                } else ++this.state.pos, this.finishToken(c.bracketL);
                                return;
                            case 93:
                                return ++this.state.pos, void this.finishToken(c.bracketR);
                            case 123:
                                if (this.hasPlugin("recordAndTuple") && 124 === this.input.charCodeAt(this.state.pos + 1)) {
                                    if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(this.state.pos, g.RecordExpressionBarIncorrectStartSyntaxType);
                                    this.finishToken(c.braceBarL), this.state.pos += 2
                                } else ++this.state.pos, this.finishToken(c.braceL);
                                return;
                            case 125:
                                return ++this.state.pos, void this.finishToken(c.braceR);
                            case 58:
                                return void(this.hasPlugin("functionBind") && 58 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(c.doubleColon, 2) : (++this.state.pos, this.finishToken(c.colon)));
                            case 63:
                                return void this.readToken_question();
                            case 96:
                                return ++this.state.pos, void this.finishToken(c.backQuote);
                            case 48: {
                                const t = this.input.charCodeAt(this.state.pos + 1);
                                if (120 === t || 88 === t) return void this.readRadixNumber(16);
                                if (111 === t || 79 === t) return void this.readRadixNumber(8);
                                if (98 === t || 66 === t) return void this.readRadixNumber(2)
                            }
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                return void this.readNumber(!1);
                            case 34:
                            case 39:
                                return void this.readString(t);
                            case 47:
                                return void this.readToken_slash();
                            case 37:
                            case 42:
                                return void this.readToken_mult_modulo(t);
                            case 124:
                            case 38:
                                return void this.readToken_pipe_amp(t);
                            case 94:
                                return void this.readToken_caret();
                            case 43:
                            case 45:
                                return void this.readToken_plus_min(t);
                            case 60:
                            case 62:
                                return void this.readToken_lt_gt(t);
                            case 61:
                            case 33:
                                return void this.readToken_eq_excl(t);
                            case 126:
                                return void this.finishOp(c.tilde, 1);
                            case 64:
                                return ++this.state.pos, void this.finishToken(c.at);
                            case 35:
                                return void this.readToken_numberSign();
                            case 92:
                                return void this.readWord();
                            default:
                                if (I(t)) return void this.readWord()
                        }
                        throw this.raise(this.state.pos, g.InvalidOrUnexpectedToken, String.fromCodePoint(t))
                    }
                    finishOp(t, e) {
                        const s = this.input.slice(this.state.pos, this.state.pos + e);
                        this.state.pos += e, this.finishToken(t, s)
                    }
                    readRegexp() {
                        const t = this.state.pos;
                        let e, s;
                        for (;;) {
                            if (this.state.pos >= this.length) throw this.raise(t, g.UnterminatedRegExp);
                            const i = this.input.charAt(this.state.pos);
                            if (l.test(i)) throw this.raise(t, g.UnterminatedRegExp);
                            if (e) e = !1;
                            else {
                                if ("[" === i) s = !0;
                                else if ("]" === i && s) s = !1;
                                else if ("/" === i && !s) break;
                                e = "\\" === i
                            }++this.state.pos
                        }
                        const i = this.input.slice(t, this.state.pos);
                        ++this.state.pos;
                        let r = "";
                        for (; this.state.pos < this.length;) {
                            const t = this.input[this.state.pos],
                                e = this.input.codePointAt(this.state.pos);
                            if (yt.has(t)) r.indexOf(t) > -1 && this.raise(this.state.pos + 1, g.DuplicateRegExpFlags);
                            else {
                                if (!v(e) && 92 !== e) break;
                                this.raise(this.state.pos + 1, g.MalformedRegExpFlags)
                            }++this.state.pos, r += t
                        }
                        this.finishToken(c.regexp, {
                            pattern: i,
                            flags: r
                        })
                    }
                    readInt(t, e, s, i = !0) {
                        const r = this.state.pos,
                            a = 16 === t ? xt.hex : xt.decBinOct,
                            n = 16 === t ? Pt.hex : 10 === t ? Pt.dec : 8 === t ? Pt.oct : Pt.bin;
                        let o = !1,
                            h = 0;
                        for (let r = 0, p = null == e ? 1 / 0 : e; r < p; ++r) {
                            const e = this.input.charCodeAt(this.state.pos);
                            let p;
                            if (95 !== e) {
                                if (p = e >= 97 ? e - 97 + 10 : e >= 65 ? e - 65 + 10 : ft(e) ? e - 48 : 1 / 0, p >= t)
                                    if (this.options.errorRecovery && p <= 9) p = 0, this.raise(this.state.start + r + 2, g.InvalidDigit, t);
                                    else {
                                        if (!s) break;
                                        p = 0, o = !0
                                    }++ this.state.pos, h = h * t + p
                            } else {
                                const t = this.input.charCodeAt(this.state.pos - 1),
                                    e = this.input.charCodeAt(this.state.pos + 1);
                                (-1 === n.indexOf(e) || a.indexOf(t) > -1 || a.indexOf(e) > -1 || Number.isNaN(e)) && this.raise(this.state.pos, g.UnexpectedNumericSeparator), i || this.raise(this.state.pos, g.NumericSeparatorInEscapeSequence), ++this.state.pos
                            }
                        }
                        return this.state.pos === r || null != e && this.state.pos - r !== e || o ? null : h
                    }
                    readRadixNumber(t) {
                        const e = this.state.pos;
                        let s = !1;
                        this.state.pos += 2;
                        const i = this.readInt(t);
                        null == i && this.raise(this.state.start + 2, g.InvalidDigit, t);
                        const r = this.input.charCodeAt(this.state.pos);
                        if (110 === r) ++this.state.pos, s = !0;
                        else if (109 === r) throw this.raise(e, g.InvalidDecimal);
                        if (I(this.input.codePointAt(this.state.pos))) throw this.raise(this.state.pos, g.NumberIdentifier);
                        if (s) {
                            const t = this.input.slice(e, this.state.pos).replace(/[_n]/g, "");
                            this.finishToken(c.bigint, t)
                        } else this.finishToken(c.num, i)
                    }
                    readNumber(t) {
                        const e = this.state.pos;
                        let s = !1,
                            i = !1,
                            r = !1,
                            a = !1,
                            n = !1;
                        t || null !== this.readInt(10) || this.raise(e, g.InvalidNumber);
                        const o = this.state.pos - e >= 2 && 48 === this.input.charCodeAt(e);
                        if (o) {
                            const t = this.input.slice(e, this.state.pos);
                            if (this.recordStrictModeErrors(e, g.StrictOctalLiteral), !this.state.strict) {
                                const s = t.indexOf("_");
                                s > 0 && this.raise(s + e, g.ZeroDigitNumericSeparator)
                            }
                            n = o && !/[89]/.test(t)
                        }
                        let h = this.input.charCodeAt(this.state.pos);
                        if (46 !== h || n || (++this.state.pos, this.readInt(10), s = !0, h = this.input.charCodeAt(this.state.pos)), 69 !== h && 101 !== h || n || (h = this.input.charCodeAt(++this.state.pos), 43 !== h && 45 !== h || ++this.state.pos, null === this.readInt(10) && this.raise(e, g.InvalidOrMissingExponent), s = !0, a = !0, h = this.input.charCodeAt(this.state.pos)), 110 === h && ((s || o) && this.raise(e, g.InvalidBigIntLiteral), ++this.state.pos, i = !0), 109 === h && (this.expectPlugin("decimal", this.state.pos), (a || o) && this.raise(e, g.InvalidDecimal), ++this.state.pos, r = !0), I(this.input.codePointAt(this.state.pos))) throw this.raise(this.state.pos, g.NumberIdentifier);
                        const p = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
                        if (i) return void this.finishToken(c.bigint, p);
                        if (r) return void this.finishToken(c.decimal, p);
                        const l = n ? parseInt(p, 8) : parseFloat(p);
                        this.finishToken(c.num, l)
                    }
                    readCodePoint(t) {
                        let e;
                        if (123 === this.input.charCodeAt(this.state.pos)) {
                            const s = ++this.state.pos;
                            if (e = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, !0, t), ++this.state.pos, null !== e && e > 1114111) {
                                if (!t) return null;
                                this.raise(s, g.InvalidCodePoint)
                            }
                        } else e = this.readHexChar(4, !1, t);
                        return e
                    }
                    readString(t) {
                        let e = "",
                            s = ++this.state.pos;
                        for (;;) {
                            if (this.state.pos >= this.length) throw this.raise(this.state.start, g.UnterminatedString);
                            const i = this.input.charCodeAt(this.state.pos);
                            if (i === t) break;
                            if (92 === i) e += this.input.slice(s, this.state.pos), e += this.readEscapedChar(!1), s = this.state.pos;
                            else if (8232 === i || 8233 === i) ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
                            else {
                                if (d(i)) throw this.raise(this.state.start, g.UnterminatedString);
                                ++this.state.pos
                            }
                        }
                        e += this.input.slice(s, this.state.pos++), this.finishToken(c.string, e)
                    }
                    readTmplToken() {
                        let t = "",
                            e = this.state.pos,
                            s = !1;
                        for (;;) {
                            if (this.state.pos >= this.length) throw this.raise(this.state.start, g.UnterminatedTemplate);
                            const i = this.input.charCodeAt(this.state.pos);
                            if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.state.pos + 1)) return this.state.pos === this.state.start && this.match(c.template) ? 36 === i ? (this.state.pos += 2, void this.finishToken(c.dollarBraceL)) : (++this.state.pos, void this.finishToken(c.backQuote)) : (t += this.input.slice(e, this.state.pos), void this.finishToken(c.template, s ? null : t));
                            if (92 === i) {
                                t += this.input.slice(e, this.state.pos);
                                const i = this.readEscapedChar(!0);
                                null === i ? s = !0 : t += i, e = this.state.pos
                            } else if (d(i)) {
                                switch (t += this.input.slice(e, this.state.pos), ++this.state.pos, i) {
                                    case 13:
                                        10 === this.input.charCodeAt(this.state.pos) && ++this.state.pos;
                                    case 10:
                                        t += "\n";
                                        break;
                                    default:
                                        t += String.fromCharCode(i)
                                }++this.state.curLine, this.state.lineStart = this.state.pos, e = this.state.pos
                            } else ++this.state.pos
                        }
                    }
                    recordStrictModeErrors(t, e) {
                        this.state.strict && !this.state.strictErrors.has(t) ? this.raise(t, e) : this.state.strictErrors.set(t, e)
                    }
                    readEscapedChar(t) {
                        const e = !t,
                            s = this.input.charCodeAt(++this.state.pos);
                        switch (++this.state.pos, s) {
                            case 110:
                                return "\n";
                            case 114:
                                return "\r";
                            case 120: {
                                const t = this.readHexChar(2, !1, e);
                                return null === t ? null : String.fromCharCode(t)
                            }
                            case 117: {
                                const t = this.readCodePoint(e);
                                return null === t ? null : String.fromCodePoint(t)
                            }
                            case 116:
                                return "\t";
                            case 98:
                                return "\b";
                            case 118:
                                return "\v";
                            case 102:
                                return "\f";
                            case 13:
                                10 === this.input.charCodeAt(this.state.pos) && ++this.state.pos;
                            case 10:
                                this.state.lineStart = this.state.pos, ++this.state.curLine;
                            case 8232:
                            case 8233:
                                return "";
                            case 56:
                            case 57:
                                if (t) return null;
                                this.recordStrictModeErrors(this.state.pos - 1, g.StrictNumericEscape);
                            default:
                                if (s >= 48 && s <= 55) {
                                    const e = this.state.pos - 1;
                                    let s = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0],
                                        i = parseInt(s, 8);
                                    i > 255 && (s = s.slice(0, -1), i = parseInt(s, 8)), this.state.pos += s.length - 1;
                                    const r = this.input.charCodeAt(this.state.pos);
                                    if ("0" !== s || 56 === r || 57 === r) {
                                        if (t) return null;
                                        this.recordStrictModeErrors(e, g.StrictNumericEscape)
                                    }
                                    return String.fromCharCode(i)
                                }
                                return String.fromCharCode(s)
                        }
                    }
                    readHexChar(t, e, s) {
                        const i = this.state.pos,
                            r = this.readInt(16, t, e, !1);
                        return null === r && (s ? this.raise(i, g.InvalidEscapeSequence) : this.state.pos = i - 1), r
                    }
                    readWord1() {
                        let t = "";
                        this.state.containsEsc = !1;
                        const e = this.state.pos;
                        let s = this.state.pos;
                        for (; this.state.pos < this.length;) {
                            const i = this.input.codePointAt(this.state.pos);
                            if (v(i)) this.state.pos += i <= 65535 ? 1 : 2;
                            else if (this.state.isIterator && 64 === i) ++this.state.pos;
                            else {
                                if (92 !== i) break; {
                                    this.state.containsEsc = !0, t += this.input.slice(s, this.state.pos);
                                    const i = this.state.pos,
                                        r = this.state.pos === e ? I : v;
                                    if (117 !== this.input.charCodeAt(++this.state.pos)) {
                                        this.raise(this.state.pos, g.MissingUnicodeEscape);
                                        continue
                                    }++this.state.pos;
                                    const a = this.readCodePoint(!0);
                                    null !== a && (r(a) || this.raise(i, g.EscapedCharNotAnIdentifier), t += String.fromCodePoint(a)), s = this.state.pos
                                }
                            }
                        }
                        return t + this.input.slice(s, this.state.pos)
                    }
                    isIterator(t) {
                        return "@@iterator" === t || "@@asyncIterator" === t
                    }
                    readWord() {
                        const t = this.readWord1(),
                            e = o.get(t) || c.name;
                        !this.state.isIterator || this.isIterator(t) && this.state.inType || this.raise(this.state.pos, g.InvalidIdentifier, t), this.finishToken(e, t)
                    }
                    checkKeywordEscapes() {
                        const t = this.state.type.keyword;
                        t && this.state.containsEsc && this.raise(this.state.start, g.InvalidEscapedReservedWord, t)
                    }
                    braceIsBlock(t) {
                        const e = this.curContext();
                        return e === T.functionExpression || e === T.functionStatement || (t !== c.colon || e !== T.braceStatement && e !== T.braceExpression ? t === c._return || t === c.name && this.state.exprAllowed ? this.hasPrecedingLineBreak() : t === c._else || t === c.semi || t === c.eof || t === c.parenR || t === c.arrow || (t === c.braceL ? e === T.braceStatement : t !== c._var && t !== c._const && t !== c.name && (t === c.relational || !this.state.exprAllowed)) : !e.isExpr)
                    }
                    updateContext(t) {
                        const e = this.state.type;
                        let s;
                        !e.keyword || t !== c.dot && t !== c.questionDot ? (s = e.updateContext) ? s.call(this, t) : this.state.exprAllowed = e.beforeExpr : this.state.exprAllowed = !1
                    }
                } {
                    addExtra(t, e, s) {
                        t && ((t.extra = t.extra || {})[e] = s)
                    }
                    isRelational(t) {
                        return this.match(c.relational) && this.state.value === t
                    }
                    expectRelational(t) {
                        this.isRelational(t) ? this.next() : this.unexpected(null, c.relational)
                    }
                    isContextual(t) {
                        return this.match(c.name) && this.state.value === t && !this.state.containsEsc
                    }
                    isUnparsedContextual(t, e) {
                        const s = t + e.length;
                        return this.input.slice(t, s) === e && (s === this.input.length || !v(this.input.charCodeAt(s)))
                    }
                    isLookaheadContextual(t) {
                        const e = this.nextTokenStart();
                        return this.isUnparsedContextual(e, t)
                    }
                    eatContextual(t) {
                        return this.isContextual(t) && this.eat(c.name)
                    }
                    expectContextual(t, e) {
                        this.eatContextual(t) || this.unexpected(null, e)
                    }
                    canInsertSemicolon() {
                        return this.match(c.eof) || this.match(c.braceR) || this.hasPrecedingLineBreak()
                    }
                    hasPrecedingLineBreak() {
                        return l.test(this.input.slice(this.state.lastTokEnd, this.state.start))
                    }
                    isLineTerminator() {
                        return this.eat(c.semi) || this.canInsertSemicolon()
                    }
                    semicolon() {
                        this.isLineTerminator() || this.unexpected(null, c.semi)
                    }
                    expect(t, e) {
                        this.eat(t) || this.unexpected(e, t)
                    }
                    assertNoSpace(t = "Unexpected space.") {
                        this.state.start > this.state.lastTokEnd && this.raise(this.state.lastTokEnd, t)
                    }
                    unexpected(t, e = "Unexpected token") {
                        throw "string" != typeof e && (e = `Unexpected token, expected "${e.label}"`), this.raise(null != t ? t : this.state.start, e)
                    }
                    expectPlugin(t, e) {
                        if (!this.hasPlugin(t)) throw this.raiseWithData(null != e ? e : this.state.start, {
                            missingPlugin: [t]
                        }, `This experimental syntax requires enabling the parser plugin: '${t}'`);
                        return !0
                    }
                    expectOnePlugin(t, e) {
                        if (!t.some((t => this.hasPlugin(t)))) throw this.raiseWithData(null != e ? e : this.state.start, {
                            missingPlugin: t
                        }, `This experimental syntax requires enabling one of the following parser plugin(s): '${t.join(", ")}'`)
                    }
                    tryParse(t, e = this.state.clone()) {
                        const s = {
                            node: null
                        };
                        try {
                            const i = t(((t = null) => {
                                throw s.node = t, s
                            }));
                            if (this.state.errors.length > e.errors.length) {
                                const t = this.state;
                                return this.state = e, {
                                    node: i,
                                    error: t.errors[e.errors.length],
                                    thrown: !1,
                                    aborted: !1,
                                    failState: t
                                }
                            }
                            return {
                                node: i,
                                error: null,
                                thrown: !1,
                                aborted: !1,
                                failState: null
                            }
                        } catch (t) {
                            const i = this.state;
                            if (this.state = e, t instanceof SyntaxError) return {
                                node: null,
                                error: t,
                                thrown: !0,
                                aborted: !1,
                                failState: i
                            };
                            if (t === s) return {
                                node: s.node,
                                error: null,
                                thrown: !1,
                                aborted: !0,
                                failState: i
                            };
                            throw t
                        }
                    }
                    checkExpressionErrors(t, e) {
                        if (!t) return !1;
                        const {
                            shorthandAssign: s,
                            doubleProto: i
                        } = t;
                        if (!e) return s >= 0 || i >= 0;
                        s >= 0 && this.unexpected(s), i >= 0 && this.raise(i, g.DuplicateProto)
                    }
                    isLiteralPropertyName() {
                        return this.match(c.name) || !!this.state.type.keyword || this.match(c.string) || this.match(c.num) || this.match(c.bigint) || this.match(c.decimal)
                    }
                    isPrivateName(t) {
                        return "PrivateName" === t.type
                    }
                    getPrivateNameSV(t) {
                        return t.id.name
                    }
                    hasPropertyAsPrivateName(t) {
                        return ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && this.isPrivateName(t.property)
                    }
                    isOptionalChain(t) {
                        return "OptionalMemberExpression" === t.type || "OptionalCallExpression" === t.type
                    }
                    isObjectProperty(t) {
                        return "ObjectProperty" === t.type
                    }
                    isObjectMethod(t) {
                        return "ObjectMethod" === t.type
                    }
                } {
                    startNode() {
                        return new Tt(this, this.state.start, this.state.startLoc)
                    }
                    startNodeAt(t, e) {
                        return new Tt(this, t, e)
                    }
                    startNodeAtNode(t) {
                        return this.startNodeAt(t.start, t.loc.start)
                    }
                    finishNode(t, e) {
                        return this.finishNodeAt(t, e, this.state.lastTokEnd, this.state.lastTokEndLoc)
                    }
                    finishNodeAt(t, e, s, i) {
                        return t.type = e, t.end = s, t.loc.end = i, this.options.ranges && (t.range[1] = s), this.processComment(t), t
                    }
                    resetStartLocation(t, e, s) {
                        t.start = e, t.loc.start = s, this.options.ranges && (t.range[0] = e)
                    }
                    resetEndLocation(t, e = this.state.lastTokEnd, s = this.state.lastTokEndLoc) {
                        t.end = e, t.loc.end = s, this.options.ranges && (t.range[1] = e)
                    }
                    resetStartLocationFromNode(t, e) {
                        this.resetStartLocation(t, e.start, e.loc.start)
                    }
                } {
                    toAssignable(t, e = !1) {
                        var s, i;
                        let r;
                        switch (("ParenthesizedExpression" === t.type || (null == (s = t.extra) ? void 0 : s.parenthesized)) && (r = At(t), e ? "Identifier" === r.type ? this.expressionScope.recordParenthesizedIdentifierError(t.start, g.InvalidParenthesizedAssignment) : "MemberExpression" !== r.type && this.raise(t.start, g.InvalidParenthesizedAssignment) : this.raise(t.start, g.InvalidParenthesizedAssignment)), t.type) {
                            case "Identifier":
                            case "ObjectPattern":
                            case "ArrayPattern":
                            case "AssignmentPattern":
                                break;
                            case "ObjectExpression":
                                t.type = "ObjectPattern";
                                for (let s = 0, i = t.properties.length, r = i - 1; s < i; s++) {
                                    var a;
                                    const i = t.properties[s],
                                        n = s === r;
                                    this.toAssignableObjectExpressionProp(i, n, e), n && "RestElement" === i.type && (null == (a = t.extra) ? void 0 : a.trailingComma) && this.raiseRestNotLast(t.extra.trailingComma)
                                }
                                break;
                            case "ObjectProperty":
                                this.toAssignable(t.value, e);
                                break;
                            case "SpreadElement": {
                                this.checkToRestConversion(t), t.type = "RestElement";
                                const s = t.argument;
                                this.toAssignable(s, e);
                                break
                            }
                            case "ArrayExpression":
                                t.type = "ArrayPattern", this.toAssignableList(t.elements, null == (i = t.extra) ? void 0 : i.trailingComma, e);
                                break;
                            case "AssignmentExpression":
                                "=" !== t.operator && this.raise(t.left.end, g.MissingEqInAssignment), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
                                break;
                            case "ParenthesizedExpression":
                                this.toAssignable(r, e)
                        }
                        return t
                    }
                    toAssignableObjectExpressionProp(t, e, s) {
                        if ("ObjectMethod" === t.type) {
                            const e = "get" === t.kind || "set" === t.kind ? g.PatternHasAccessor : g.PatternHasMethod;
                            this.raise(t.key.start, e)
                        } else "SpreadElement" !== t.type || e ? this.toAssignable(t, s) : this.raiseRestNotLast(t.start)
                    }
                    toAssignableList(t, e, s) {
                        let i = t.length;
                        if (i) {
                            const r = t[i - 1];
                            if ("RestElement" === (null == r ? void 0 : r.type)) --i;
                            else if ("SpreadElement" === (null == r ? void 0 : r.type)) {
                                r.type = "RestElement";
                                let t = r.argument;
                                this.toAssignable(t, s), t = At(t), "Identifier" !== t.type && "MemberExpression" !== t.type && "ArrayPattern" !== t.type && "ObjectPattern" !== t.type && this.unexpected(t.start), e && this.raiseTrailingCommaAfterRest(e), --i
                            }
                        }
                        for (let e = 0; e < i; e++) {
                            const i = t[e];
                            i && (this.toAssignable(i, s), "RestElement" === i.type && this.raiseRestNotLast(i.start))
                        }
                        return t
                    }
                    toReferencedList(t, e) {
                        return t
                    }
                    toReferencedListDeep(t, e) {
                        this.toReferencedList(t, e);
                        for (let e = 0; e < t.length; e++) {
                            const s = t[e];
                            "ArrayExpression" === (null == s ? void 0 : s.type) && this.toReferencedListDeep(s.elements)
                        }
                    }
                    parseSpread(t, e) {
                        const s = this.startNode();
                        return this.next(), s.argument = this.parseMaybeAssignAllowIn(t, void 0, e), this.finishNode(s, "SpreadElement")
                    }
                    parseRestBinding() {
                        const t = this.startNode();
                        return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
                    }
                    parseBindingAtom() {
                        switch (this.state.type) {
                            case c.bracketL: {
                                const t = this.startNode();
                                return this.next(), t.elements = this.parseBindingList(c.bracketR, 93, !0), this.finishNode(t, "ArrayPattern")
                            }
                            case c.braceL:
                                return this.parseObjectLike(c.braceR, !0)
                        }
                        return this.parseIdentifier()
                    }
                    parseBindingList(t, e, s, i) {
                        const r = [];
                        let a = !0;
                        for (; !this.eat(t);)
                            if (a ? a = !1 : this.expect(c.comma), s && this.match(c.comma)) r.push(null);
                            else {
                                if (this.eat(t)) break;
                                if (this.match(c.ellipsis)) {
                                    r.push(this.parseAssignableListItemTypes(this.parseRestBinding())), this.checkCommaAfterRest(e), this.expect(t);
                                    break
                                } {
                                    const t = [];
                                    for (this.match(c.at) && this.hasPlugin("decorators") && this.raise(this.state.start, g.UnsupportedParameterDecorator); this.match(c.at);) t.push(this.parseDecorator());
                                    r.push(this.parseAssignableListItem(i, t))
                                }
                            } return r
                    }
                    parseAssignableListItem(t, e) {
                        const s = this.parseMaybeDefault();
                        this.parseAssignableListItemTypes(s);
                        const i = this.parseMaybeDefault(s.start, s.loc.start, s);
                        return e.length && (s.decorators = e), i
                    }
                    parseAssignableListItemTypes(t) {
                        return t
                    }
                    parseMaybeDefault(t, e, s) {
                        var i, r, a;
                        if (e = null != (i = e) ? i : this.state.startLoc, t = null != (r = t) ? r : this.state.start, s = null != (a = s) ? a : this.parseBindingAtom(), !this.eat(c.eq)) return s;
                        const n = this.startNodeAt(t, e);
                        return n.left = s, n.right = this.parseMaybeAssignAllowIn(), this.finishNode(n, "AssignmentPattern")
                    }
                    checkLVal(t, e, s = 64, i, r, a = !1) {
                        switch (t.type) {
                            case "Identifier": {
                                const {
                                    name: e
                                } = t;
                                this.state.strict && (a ? B(e, this.inModule) : F(e)) && this.raise(t.start, 64 === s ? g.StrictEvalArguments : g.StrictEvalArgumentsBinding, e), i && (i.has(e) ? this.raise(t.start, g.ParamDupe) : i.add(e)), r && "let" === e && this.raise(t.start, g.LetInLexicalBinding), 64 & s || this.scope.declareName(e, s, t.start);
                                break
                            }
                            case "MemberExpression":
                                64 !== s && this.raise(t.start, g.InvalidPropertyBindingPattern);
                                break;
                            case "ObjectPattern":
                                for (let e = 0, a = t.properties; e < a.length; e++) {
                                    let t = a[e];
                                    if (this.isObjectProperty(t)) t = t.value;
                                    else if (this.isObjectMethod(t)) continue;
                                    this.checkLVal(t, "object destructuring pattern", s, i, r)
                                }
                                break;
                            case "ArrayPattern":
                                for (let e = 0, a = t.elements; e < a.length; e++) {
                                    const t = a[e];
                                    t && this.checkLVal(t, "array destructuring pattern", s, i, r)
                                }
                                break;
                            case "AssignmentPattern":
                                this.checkLVal(t.left, "assignment pattern", s, i);
                                break;
                            case "RestElement":
                                this.checkLVal(t.argument, "rest element", s, i);
                                break;
                            case "ParenthesizedExpression":
                                this.checkLVal(t.expression, "parenthesized expression", s, i);
                                break;
                            default:
                                this.raise(t.start, 64 === s ? g.InvalidLhs : g.InvalidLhsBinding, e)
                        }
                    }
                    checkToRestConversion(t) {
                        "Identifier" !== t.argument.type && "MemberExpression" !== t.argument.type && this.raise(t.argument.start, g.InvalidRestAssignmentPattern)
                    }
                    checkCommaAfterRest(t) {
                        this.match(c.comma) && (this.lookaheadCharCode() === t ? this.raiseTrailingCommaAfterRest(this.state.start) : this.raiseRestNotLast(this.state.start))
                    }
                    raiseRestNotLast(t) {
                        throw this.raise(t, g.ElementAfterRest)
                    }
                    raiseTrailingCommaAfterRest(t) {
                        this.raise(t, g.RestTrailingComma)
                    }
                } {
                    checkProto(t, e, s, i) {
                        if ("SpreadElement" === t.type || this.isObjectMethod(t) || t.computed || t.shorthand) return;
                        const r = t.key;
                        if ("__proto__" === ("Identifier" === r.type ? r.name : r.value)) {
                            if (e) return void this.raise(r.start, g.RecordNoProto);
                            s.used && (i ? -1 === i.doubleProto && (i.doubleProto = r.start) : this.raise(r.start, g.DuplicateProto)), s.used = !0
                        }
                    }
                    shouldExitDescending(t, e) {
                        return "ArrowFunctionExpression" === t.type && t.start === e
                    }
                    getExpression() {
                        let t = 0;
                        this.hasPlugin("topLevelAwait") && this.inModule && (t |= 2), this.scope.enter(1), this.prodParam.enter(t), this.nextToken();
                        const e = this.parseExpression();
                        return this.match(c.eof) || this.unexpected(), e.comments = this.state.comments, e.errors = this.state.errors, e
                    }
                    parseExpression(t, e) {
                        return t ? this.disallowInAnd((() => this.parseExpressionBase(e))) : this.allowInAnd((() => this.parseExpressionBase(e)))
                    }
                    parseExpressionBase(t) {
                        const e = this.state.start,
                            s = this.state.startLoc,
                            i = this.parseMaybeAssign(t);
                        if (this.match(c.comma)) {
                            const r = this.startNodeAt(e, s);
                            for (r.expressions = [i]; this.eat(c.comma);) r.expressions.push(this.parseMaybeAssign(t));
                            return this.toReferencedList(r.expressions), this.finishNode(r, "SequenceExpression")
                        }
                        return i
                    }
                    parseMaybeAssignDisallowIn(t, e, s) {
                        return this.disallowInAnd((() => this.parseMaybeAssign(t, e, s)))
                    }
                    parseMaybeAssignAllowIn(t, e, s) {
                        return this.allowInAnd((() => this.parseMaybeAssign(t, e, s)))
                    }
                    parseMaybeAssign(t, e, s) {
                        const i = this.state.start,
                            r = this.state.startLoc;
                        if (this.isContextual("yield") && this.prodParam.hasYield) {
                            this.state.exprAllowed = !0;
                            let t = this.parseYield();
                            return e && (t = e.call(this, t, i, r)), t
                        }
                        let a;
                        t ? a = !1 : (t = new bt, a = !0), (this.match(c.parenL) || this.match(c.name)) && (this.state.potentialArrowAt = this.state.start);
                        let n = this.parseMaybeConditional(t, s);
                        if (e && (n = e.call(this, n, i, r)), this.state.type.isAssign) {
                            const e = this.startNodeAt(i, r),
                                s = this.state.value;
                            return e.operator = s, this.match(c.eq) ? (e.left = this.toAssignable(n, !0), t.doubleProto = -1) : e.left = n, t.shorthandAssign >= e.left.start && (t.shorthandAssign = -1), this.checkLVal(n, "assignment expression"), this.next(), e.right = this.parseMaybeAssign(), this.finishNode(e, "AssignmentExpression")
                        }
                        return a && this.checkExpressionErrors(t, !0), n
                    }
                    parseMaybeConditional(t, e) {
                        const s = this.state.start,
                            i = this.state.startLoc,
                            r = this.state.potentialArrowAt,
                            a = this.parseExprOps(t);
                        return this.shouldExitDescending(a, r) ? a : this.parseConditional(a, s, i, e)
                    }
                    parseConditional(t, e, s, i) {
                        if (this.eat(c.question)) {
                            const i = this.startNodeAt(e, s);
                            return i.test = t, i.consequent = this.parseMaybeAssignAllowIn(), this.expect(c.colon), i.alternate = this.parseMaybeAssign(), this.finishNode(i, "ConditionalExpression")
                        }
                        return t
                    }
                    parseExprOps(t) {
                        const e = this.state.start,
                            s = this.state.startLoc,
                            i = this.state.potentialArrowAt,
                            r = this.parseMaybeUnary(t);
                        return this.shouldExitDescending(r, i) ? r : this.parseExprOp(r, e, s, -1)
                    }
                    parseExprOp(t, e, s, i) {
                        let r = this.state.type.binop;
                        if (null != r && (this.prodParam.hasIn || !this.match(c._in)) && r > i) {
                            const a = this.state.type;
                            if (a === c.pipeline) {
                                if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody) return t;
                                this.state.inPipeline = !0, this.checkPipelineAtInfixOperator(t, e)
                            }
                            const n = this.startNodeAt(e, s);
                            n.left = t, n.operator = this.state.value, a !== c.exponent || "UnaryExpression" !== t.type || !this.options.createParenthesizedExpressions && t.extra && t.extra.parenthesized || this.raise(t.argument.start, g.UnexpectedTokenUnaryExponentiation);
                            const o = a === c.logicalOR || a === c.logicalAND,
                                h = a === c.nullishCoalescing;
                            if (h && (r = c.logicalAND.binop), this.next(), a === c.pipeline && "minimal" === this.getPluginOption("pipelineOperator", "proposal") && this.match(c.name) && "await" === this.state.value && this.prodParam.hasAwait) throw this.raise(this.state.start, g.UnexpectedAwaitAfterPipelineBody);
                            n.right = this.parseExprOpRightExpr(a, r), this.finishNode(n, o || h ? "LogicalExpression" : "BinaryExpression");
                            const p = this.state.type;
                            if (h && (p === c.logicalOR || p === c.logicalAND) || o && p === c.nullishCoalescing) throw this.raise(this.state.start, g.MixingCoalesceWithLogical);
                            return this.parseExprOp(n, e, s, i)
                        }
                        return t
                    }
                    parseExprOpRightExpr(t, e) {
                        const s = this.state.start,
                            i = this.state.startLoc;
                        switch (t) {
                            case c.pipeline:
                                switch (this.getPluginOption("pipelineOperator", "proposal")) {
                                    case "smart":
                                        return this.withTopicPermittingContext((() => this.parseSmartPipelineBody(this.parseExprOpBaseRightExpr(t, e), s, i)));
                                    case "fsharp":
                                        return this.withSoloAwaitPermittingContext((() => this.parseFSharpPipelineBody(e)))
                                }
                                default:
                                    return this.parseExprOpBaseRightExpr(t, e)
                        }
                    }
                    parseExprOpBaseRightExpr(t, e) {
                        const s = this.state.start,
                            i = this.state.startLoc;
                        return this.parseExprOp(this.parseMaybeUnary(), s, i, t.rightAssociative ? e - 1 : e)
                    }
                    parseMaybeUnary(t) {
                        if (this.isContextual("await") && this.isAwaitAllowed()) return this.parseAwait();
                        const e = this.match(c.incDec),
                            s = this.startNode();
                        if (this.state.type.prefix) {
                            s.operator = this.state.value, s.prefix = !0, this.match(c._throw) && this.expectPlugin("throwExpressions");
                            const i = this.match(c._delete);
                            if (this.next(), s.argument = this.parseMaybeUnary(), this.checkExpressionErrors(t, !0), this.state.strict && i) {
                                const t = s.argument;
                                "Identifier" === t.type ? this.raise(s.start, g.StrictDelete) : this.hasPropertyAsPrivateName(t) && this.raise(s.start, g.DeletePrivateField)
                            }
                            if (!e) return this.finishNode(s, "UnaryExpression")
                        }
                        return this.parseUpdate(s, e, t)
                    }
                    parseUpdate(t, e, s) {
                        if (e) return this.checkLVal(t.argument, "prefix operation"), this.finishNode(t, "UpdateExpression");
                        const i = this.state.start,
                            r = this.state.startLoc;
                        let a = this.parseExprSubscripts(s);
                        if (this.checkExpressionErrors(s, !1)) return a;
                        for (; this.state.type.postfix && !this.canInsertSemicolon();) {
                            const t = this.startNodeAt(i, r);
                            t.operator = this.state.value, t.prefix = !1, t.argument = a, this.checkLVal(a, "postfix operation"), this.next(), a = this.finishNode(t, "UpdateExpression")
                        }
                        return a
                    }
                    parseExprSubscripts(t) {
                        const e = this.state.start,
                            s = this.state.startLoc,
                            i = this.state.potentialArrowAt,
                            r = this.parseExprAtom(t);
                        return this.shouldExitDescending(r, i) ? r : this.parseSubscripts(r, e, s)
                    }
                    parseSubscripts(t, e, s, i) {
                        const r = {
                            optionalChainMember: !1,
                            maybeAsyncArrow: this.atPossibleAsyncArrow(t),
                            stop: !1
                        };
                        do {
                            t = this.parseSubscript(t, e, s, i, r), r.maybeAsyncArrow = !1
                        } while (!r.stop);
                        return t
                    }
                    parseSubscript(t, e, s, i, r) {
                        if (!i && this.eat(c.doubleColon)) return this.parseBind(t, e, s, i, r);
                        if (this.match(c.backQuote)) return this.parseTaggedTemplateExpression(t, e, s, r);
                        let a = !1;
                        if (this.match(c.questionDot)) {
                            if (i && 40 === this.lookaheadCharCode()) return r.stop = !0, t;
                            r.optionalChainMember = a = !0, this.next()
                        }
                        return !i && this.match(c.parenL) ? this.parseCoverCallAndAsyncArrowHead(t, e, s, r, a) : a || this.match(c.bracketL) || this.eat(c.dot) ? this.parseMember(t, e, s, r, a) : (r.stop = !0, t)
                    }
                    parseMember(t, e, s, i, r) {
                        const a = this.startNodeAt(e, s),
                            n = this.eat(c.bracketL);
                        a.object = t, a.computed = n;
                        const o = n ? this.parseExpression() : this.parseMaybePrivateName(!0);
                        return this.isPrivateName(o) && ("Super" === a.object.type && this.raise(e, g.SuperPrivateField), this.classScope.usePrivateName(this.getPrivateNameSV(o), o.start)), a.property = o, n && this.expect(c.bracketR), i.optionalChainMember ? (a.optional = r, this.finishNode(a, "OptionalMemberExpression")) : this.finishNode(a, "MemberExpression")
                    }
                    parseBind(t, e, s, i, r) {
                        const a = this.startNodeAt(e, s);
                        return a.object = t, a.callee = this.parseNoCallExpr(), r.stop = !0, this.parseSubscripts(this.finishNode(a, "BindExpression"), e, s, i)
                    }
                    parseCoverCallAndAsyncArrowHead(t, e, s, i, r) {
                        const a = this.state.maybeInArrowParameters;
                        this.state.maybeInArrowParameters = !0, this.next();
                        let n = this.startNodeAt(e, s);
                        return n.callee = t, i.maybeAsyncArrow && this.expressionScope.enter(new Et(2)), i.optionalChainMember && (n.optional = r), n.arguments = r ? this.parseCallExpressionArguments(c.parenR, !1) : this.parseCallExpressionArguments(c.parenR, i.maybeAsyncArrow, "Import" === t.type, "Super" !== t.type, n), this.finishCallExpression(n, i.optionalChainMember), i.maybeAsyncArrow && this.shouldParseAsyncArrow() && !r ? (i.stop = !0, this.expressionScope.validateAsPattern(), this.expressionScope.exit(), n = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e, s), n)) : (i.maybeAsyncArrow && this.expressionScope.exit(), this.toReferencedArguments(n)), this.state.maybeInArrowParameters = a, n
                    }
                    toReferencedArguments(t, e) {
                        this.toReferencedListDeep(t.arguments, e)
                    }
                    parseTaggedTemplateExpression(t, e, s, i) {
                        const r = this.startNodeAt(e, s);
                        return r.tag = t, r.quasi = this.parseTemplate(!0), i.optionalChainMember && this.raise(e, g.OptionalChainingNoTemplate), this.finishNode(r, "TaggedTemplateExpression")
                    }
                    atPossibleAsyncArrow(t) {
                        return "Identifier" === t.type && "async" === t.name && this.state.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && t.start === this.state.potentialArrowAt
                    }
                    finishCallExpression(t, e) {
                        if ("Import" === t.callee.type)
                            if (2 === t.arguments.length && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), 0 === t.arguments.length || t.arguments.length > 2) this.raise(t.start, g.ImportCallArity, this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? "one or two arguments" : "one argument");
                            else
                                for (let e = 0, s = t.arguments; e < s.length; e++) {
                                    const t = s[e];
                                    "SpreadElement" === t.type && this.raise(t.start, g.ImportCallSpreadArgument)
                                }
                        return this.finishNode(t, e ? "OptionalCallExpression" : "CallExpression")
                    }
                    parseCallExpressionArguments(t, e, s, i, r) {
                        const a = [];
                        let n = !0;
                        const o = this.state.inFSharpPipelineDirectBody;
                        for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(t);) {
                            if (n) n = !1;
                            else if (this.expect(c.comma), this.match(t)) {
                                !s || this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") || this.raise(this.state.lastTokStart, g.ImportCallArgumentTrailingComma), r && this.addExtra(r, "trailingComma", this.state.lastTokStart), this.next();
                                break
                            }
                            a.push(this.parseExprListItem(!1, e ? new bt : void 0, e ? {
                                start: 0
                            } : void 0, i))
                        }
                        return this.state.inFSharpPipelineDirectBody = o, a
                    }
                    shouldParseAsyncArrow() {
                        return this.match(c.arrow) && !this.canInsertSemicolon()
                    }
                    parseAsyncArrowFromCallExpression(t, e) {
                        var s;
                        return this.expect(c.arrow), this.parseArrowExpression(t, e.arguments, !0, null == (s = e.extra) ? void 0 : s.trailingComma), t
                    }
                    parseNoCallExpr() {
                        const t = this.state.start,
                            e = this.state.startLoc;
                        return this.parseSubscripts(this.parseExprAtom(), t, e, !0)
                    }
                    parseExprAtom(t) {
                        this.state.type === c.slash && this.readRegexp();
                        const e = this.state.potentialArrowAt === this.state.start;
                        let s;
                        switch (this.state.type) {
                            case c._super:
                                return this.parseSuper();
                            case c._import:
                                return s = this.startNode(), this.next(), this.match(c.dot) ? this.parseImportMetaProperty(s) : (this.match(c.parenL) || this.raise(this.state.lastTokStart, g.UnsupportedImport), this.finishNode(s, "Import"));
                            case c._this:
                                return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");
                            case c.name: {
                                const t = this.state.containsEsc,
                                    s = this.parseIdentifier();
                                if (!t && "async" === s.name && !this.canInsertSemicolon()) {
                                    if (this.match(c._function)) {
                                        const t = this.state.context.length - 1;
                                        if (this.state.context[t] !== T.functionStatement) throw new Error("Internal error");
                                        return this.state.context[t] = T.functionExpression, this.next(), this.parseFunction(this.startNodeAtNode(s), void 0, !0)
                                    }
                                    if (this.match(c.name)) return this.parseAsyncArrowUnaryFunction(s)
                                }
                                return e && this.match(c.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(s), [s], !1)) : s
                            }
                            case c._do:
                                return this.parseDo();
                            case c.regexp: {
                                const t = this.state.value;
                                return s = this.parseLiteral(t.value, "RegExpLiteral"), s.pattern = t.pattern, s.flags = t.flags, s
                            }
                            case c.num:
                                return this.parseLiteral(this.state.value, "NumericLiteral");
                            case c.bigint:
                                return this.parseLiteral(this.state.value, "BigIntLiteral");
                            case c.decimal:
                                return this.parseLiteral(this.state.value, "DecimalLiteral");
                            case c.string:
                                return this.parseLiteral(this.state.value, "StringLiteral");
                            case c._null:
                                return s = this.startNode(), this.next(), this.finishNode(s, "NullLiteral");
                            case c._true:
                            case c._false:
                                return this.parseBooleanLiteral();
                            case c.parenL:
                                return this.parseParenAndDistinguishExpression(e);
                            case c.bracketBarL:
                            case c.bracketHashL:
                                return this.parseArrayLike(this.state.type === c.bracketBarL ? c.bracketBarR : c.bracketR, !1, !0, t);
                            case c.bracketL:
                                return this.parseArrayLike(c.bracketR, !0, !1, t);
                            case c.braceBarL:
                            case c.braceHashL:
                                return this.parseObjectLike(this.state.type === c.braceBarL ? c.braceBarR : c.braceR, !1, !0, t);
                            case c.braceL:
                                return this.parseObjectLike(c.braceR, !1, !1, t);
                            case c._function:
                                return this.parseFunctionOrFunctionSent();
                            case c.at:
                                this.parseDecorators();
                            case c._class:
                                return s = this.startNode(), this.takeDecorators(s), this.parseClass(s, !1);
                            case c._new:
                                return this.parseNewOrNewTarget();
                            case c.backQuote:
                                return this.parseTemplate(!1);
                            case c.doubleColon: {
                                s = this.startNode(), this.next(), s.object = null;
                                const t = s.callee = this.parseNoCallExpr();
                                if ("MemberExpression" === t.type) return this.finishNode(s, "BindExpression");
                                throw this.raise(t.start, g.UnsupportedBind)
                            }
                            case c.hash: {
                                if (this.state.inPipeline) return s = this.startNode(), "smart" !== this.getPluginOption("pipelineOperator", "proposal") && this.raise(s.start, g.PrimaryTopicRequiresSmartPipeline), this.next(), this.primaryTopicReferenceIsAllowedInCurrentTopicContext() || this.raise(s.start, g.PrimaryTopicNotAllowed), this.registerTopicReference(), this.finishNode(s, "PipelinePrimaryTopicReference");
                                const t = this.input.codePointAt(this.state.end);
                                if (I(t) || 92 === t) {
                                    const t = this.state.start;
                                    if (s = this.parseMaybePrivateName(!0), this.match(c._in)) this.expectPlugin("privateIn"), this.classScope.usePrivateName(s.id.name, s.start);
                                    else {
                                        if (!this.hasPlugin("privateIn")) throw this.unexpected(t);
                                        this.raise(this.state.start, g.PrivateInExpectedIn, s.id.name)
                                    }
                                    return s
                                }
                            }
                            case c.relational:
                                if ("<" === this.state.value) {
                                    const t = this.input.codePointAt(this.nextTokenStart());
                                    (I(t) || 62 === t) && this.expectOnePlugin(["jsx", "flow", "typescript"])
                                }
                                default:
                                    throw this.unexpected()
                        }
                    }
                    parseAsyncArrowUnaryFunction(t) {
                        const e = this.startNodeAtNode(t);
                        this.prodParam.enter(it(!0, this.prodParam.hasYield));
                        const s = [this.parseIdentifier()];
                        return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(this.state.pos, g.LineTerminatorBeforeArrow), this.expect(c.arrow), this.parseArrowExpression(e, s, !0), e
                    }
                    parseDo() {
                        this.expectPlugin("doExpressions");
                        const t = this.startNode();
                        this.next();
                        const e = this.state.labels;
                        return this.state.labels = [], t.body = this.parseBlock(), this.state.labels = e, this.finishNode(t, "DoExpression")
                    }
                    parseSuper() {
                        const t = this.startNode();
                        return this.next(), !this.match(c.parenL) || this.scope.allowDirectSuper || this.options.allowSuperOutsideMethod ? this.scope.allowSuper || this.options.allowSuperOutsideMethod || this.raise(t.start, g.UnexpectedSuper) : this.raise(t.start, g.SuperNotAllowed), this.match(c.parenL) || this.match(c.bracketL) || this.match(c.dot) || this.raise(t.start, g.UnsupportedSuper), this.finishNode(t, "Super")
                    }
                    parseBooleanLiteral() {
                        const t = this.startNode();
                        return t.value = this.match(c._true), this.next(), this.finishNode(t, "BooleanLiteral")
                    }
                    parseMaybePrivateName(t) {
                        if (this.match(c.hash)) {
                            this.expectOnePlugin(["classPrivateProperties", "classPrivateMethods"]), t || this.raise(this.state.pos, g.UnexpectedPrivateField);
                            const e = this.startNode();
                            return this.next(), this.assertNoSpace("Unexpected space between # and identifier"), e.id = this.parseIdentifier(!0), this.finishNode(e, "PrivateName")
                        }
                        return this.parseIdentifier(!0)
                    }
                    parseFunctionOrFunctionSent() {
                        const t = this.startNode();
                        if (this.next(), this.prodParam.hasYield && this.match(c.dot)) {
                            const e = this.createIdentifier(this.startNodeAtNode(t), "function");
                            return this.next(), this.parseMetaProperty(t, e, "sent")
                        }
                        return this.parseFunction(t)
                    }
                    parseMetaProperty(t, e, s) {
                        t.meta = e, "function" === e.name && "sent" === s && (this.isContextual(s) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected());
                        const i = this.state.containsEsc;
                        return t.property = this.parseIdentifier(!0), (t.property.name !== s || i) && this.raise(t.property.start, g.UnsupportedMetaProperty, e.name, s), this.finishNode(t, "MetaProperty")
                    }
                    parseImportMetaProperty(t) {
                        const e = this.createIdentifier(this.startNodeAtNode(t), "import");
                        return this.next(), this.isContextual("meta") && (this.inModule || this.raiseWithData(e.start, {
                            code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
                        }, g.ImportMetaOutsideModule), this.sawUnambiguousESM = !0), this.parseMetaProperty(t, e, "meta")
                    }
                    parseLiteral(t, e, s, i) {
                        s = s || this.state.start, i = i || this.state.startLoc;
                        const r = this.startNodeAt(s, i);
                        return this.addExtra(r, "rawValue", t), this.addExtra(r, "raw", this.input.slice(s, this.state.end)), r.value = t, this.next(), this.finishNode(r, e)
                    }
                    parseParenAndDistinguishExpression(t) {
                        const e = this.state.start,
                            s = this.state.startLoc;
                        let i;
                        this.next(), this.expressionScope.enter(new Et(1));
                        const r = this.state.maybeInArrowParameters,
                            a = this.state.inFSharpPipelineDirectBody;
                        this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
                        const n = this.state.start,
                            o = this.state.startLoc,
                            h = [],
                            p = new bt,
                            l = {
                                start: 0
                            };
                        let u, d, m = !0;
                        for (; !this.match(c.parenR);) {
                            if (m) m = !1;
                            else if (this.expect(c.comma, l.start || null), this.match(c.parenR)) {
                                d = this.state.start;
                                break
                            }
                            if (this.match(c.ellipsis)) {
                                const t = this.state.start,
                                    e = this.state.startLoc;
                                u = this.state.start, h.push(this.parseParenItem(this.parseRestBinding(), t, e)), this.checkCommaAfterRest(41);
                                break
                            }
                            h.push(this.parseMaybeAssignAllowIn(p, this.parseParenItem, l))
                        }
                        const f = this.state.lastTokEnd,
                            y = this.state.lastTokEndLoc;
                        this.expect(c.parenR), this.state.maybeInArrowParameters = r, this.state.inFSharpPipelineDirectBody = a;
                        let x = this.startNodeAt(e, s);
                        if (t && this.shouldParseArrow() && (x = this.parseArrow(x))) return this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(x, h, !1), x;
                        if (this.expressionScope.exit(), h.length || this.unexpected(this.state.lastTokStart), d && this.unexpected(d), u && this.unexpected(u), this.checkExpressionErrors(p, !0), l.start && this.unexpected(l.start), this.toReferencedListDeep(h, !0), h.length > 1 ? (i = this.startNodeAt(n, o), i.expressions = h, this.finishNodeAt(i, "SequenceExpression", f, y)) : i = h[0], !this.options.createParenthesizedExpressions) return this.addExtra(i, "parenthesized", !0), this.addExtra(i, "parenStart", e), i;
                        const P = this.startNodeAt(e, s);
                        return P.expression = i, this.finishNode(P, "ParenthesizedExpression"), P
                    }
                    shouldParseArrow() {
                        return !this.canInsertSemicolon()
                    }
                    parseArrow(t) {
                        if (this.eat(c.arrow)) return t
                    }
                    parseParenItem(t, e, s) {
                        return t
                    }
                    parseNewOrNewTarget() {
                        const t = this.startNode();
                        if (this.next(), this.match(c.dot)) {
                            const e = this.createIdentifier(this.startNodeAtNode(t), "new");
                            this.next();
                            const s = this.parseMetaProperty(t, e, "target");
                            if (!this.scope.inNonArrowFunction && !this.scope.inClass) {
                                let t = g.UnexpectedNewTarget;
                                this.hasPlugin("classProperties") && (t += " or class properties"), this.raise(s.start, t)
                            }
                            return s
                        }
                        return this.parseNew(t)
                    }
                    parseNew(t) {
                        return t.callee = this.parseNoCallExpr(), "Import" === t.callee.type ? this.raise(t.callee.start, g.ImportCallNotNewExpression) : this.isOptionalChain(t.callee) ? this.raise(this.state.lastTokEnd, g.OptionalChainingNoNew) : this.eat(c.questionDot) && this.raise(this.state.start, g.OptionalChainingNoNew), this.parseNewArguments(t), this.finishNode(t, "NewExpression")
                    }
                    parseNewArguments(t) {
                        if (this.eat(c.parenL)) {
                            const e = this.parseExprList(c.parenR);
                            this.toReferencedList(e), t.arguments = e
                        } else t.arguments = []
                    }
                    parseTemplateElement(t) {
                        const e = this.startNode();
                        return null === this.state.value && (t || this.raise(this.state.start + 1, g.InvalidEscapeSequenceTemplate)), e.value = {
                            raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
                            cooked: this.state.value
                        }, this.next(), e.tail = this.match(c.backQuote), this.finishNode(e, "TemplateElement")
                    }
                    parseTemplate(t) {
                        const e = this.startNode();
                        this.next(), e.expressions = [];
                        let s = this.parseTemplateElement(t);
                        for (e.quasis = [s]; !s.tail;) this.expect(c.dollarBraceL), e.expressions.push(this.parseTemplateSubstitution()), this.expect(c.braceR), e.quasis.push(s = this.parseTemplateElement(t));
                        return this.next(), this.finishNode(e, "TemplateLiteral")
                    }
                    parseTemplateSubstitution() {
                        return this.parseExpression()
                    }
                    parseObjectLike(t, e, s, i) {
                        s && this.expectPlugin("recordAndTuple");
                        const r = this.state.inFSharpPipelineDirectBody;
                        this.state.inFSharpPipelineDirectBody = !1;
                        const a = Object.create(null);
                        let n = !0;
                        const o = this.startNode();
                        for (o.properties = [], this.next(); !this.match(t);) {
                            if (n) n = !1;
                            else if (this.expect(c.comma), this.match(t)) {
                                this.addExtra(o, "trailingComma", this.state.lastTokStart);
                                break
                            }
                            const r = this.parsePropertyDefinition(e, i);
                            e || this.checkProto(r, s, a, i), s && !this.isObjectProperty(r) && "SpreadElement" !== r.type && this.raise(r.start, g.InvalidRecordProperty), r.shorthand && this.addExtra(r, "shorthand", !0), o.properties.push(r)
                        }
                        this.state.exprAllowed = !1, this.next(), this.state.inFSharpPipelineDirectBody = r;
                        let h = "ObjectExpression";
                        return e ? h = "ObjectPattern" : s && (h = "RecordExpression"), this.finishNode(o, h)
                    }
                    maybeAsyncOrAccessorProp(t) {
                        return !t.computed && "Identifier" === t.key.type && (this.isLiteralPropertyName() || this.match(c.bracketL) || this.match(c.star))
                    }
                    parsePropertyDefinition(t, e) {
                        let s = [];
                        if (this.match(c.at))
                            for (this.hasPlugin("decorators") && this.raise(this.state.start, g.UnsupportedPropertyDecorator); this.match(c.at);) s.push(this.parseDecorator());
                        const i = this.startNode();
                        let r, a, n = !1,
                            o = !1,
                            h = !1;
                        if (this.match(c.ellipsis)) return s.length && this.unexpected(), t ? (this.next(), i.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(i, "RestElement")) : this.parseSpread();
                        s.length && (i.decorators = s, s = []), i.method = !1, (t || e) && (r = this.state.start, a = this.state.startLoc), t || (n = this.eat(c.star));
                        const p = this.state.containsEsc,
                            l = this.parsePropertyName(i, !1);
                        if (!t && !n && !p && this.maybeAsyncOrAccessorProp(i)) {
                            const t = l.name;
                            "async" !== t || this.hasPrecedingLineBreak() || (o = !0, n = this.eat(c.star), this.parsePropertyName(i, !1)), "get" !== t && "set" !== t || (h = !0, i.kind = t, this.match(c.star) && (n = !0, this.raise(this.state.pos, g.AccessorIsGenerator, t), this.next()), this.parsePropertyName(i, !1))
                        }
                        return this.parseObjPropValue(i, r, a, n, o, t, h, e), i
                    }
                    getGetterSetterExpectedParamCount(t) {
                        return "get" === t.kind ? 0 : 1
                    }
                    getObjectOrClassMethodParams(t) {
                        return t.params
                    }
                    checkGetterSetterParams(t) {
                        var e;
                        const s = this.getGetterSetterExpectedParamCount(t),
                            i = this.getObjectOrClassMethodParams(t),
                            r = t.start;
                        i.length !== s && ("get" === t.kind ? this.raise(r, g.BadGetterArity) : this.raise(r, g.BadSetterArity)), "set" === t.kind && "RestElement" === (null == (e = i[i.length - 1]) ? void 0 : e.type) && this.raise(r, g.BadSetterRestParameter)
                    }
                    parseObjectMethod(t, e, s, i, r) {
                        return r ? (this.parseMethod(t, e, !1, !1, !1, "ObjectMethod"), this.checkGetterSetterParams(t), t) : s || e || this.match(c.parenL) ? (i && this.unexpected(), t.kind = "method", t.method = !0, this.parseMethod(t, e, s, !1, !1, "ObjectMethod")) : void 0
                    }
                    parseObjectProperty(t, e, s, i, r) {
                        return t.shorthand = !1, this.eat(c.colon) ? (t.value = i ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(r), this.finishNode(t, "ObjectProperty")) : t.computed || "Identifier" !== t.key.type ? void 0 : (this.checkReservedWord(t.key.name, t.key.start, !0, !1), i ? t.value = this.parseMaybeDefault(e, s, t.key.__clone()) : this.match(c.eq) && r ? (-1 === r.shorthandAssign && (r.shorthandAssign = this.state.start), t.value = this.parseMaybeDefault(e, s, t.key.__clone())) : t.value = t.key.__clone(), t.shorthand = !0, this.finishNode(t, "ObjectProperty"))
                    }
                    parseObjPropValue(t, e, s, i, r, a, n, o) {
                        const h = this.parseObjectMethod(t, i, r, a, n) || this.parseObjectProperty(t, e, s, a, o);
                        return h || this.unexpected(), h
                    }
                    parsePropertyName(t, e) {
                        if (this.eat(c.bracketL)) t.computed = !0, t.key = this.parseMaybeAssignAllowIn(), this.expect(c.bracketR);
                        else {
                            const s = this.state.inPropertyName;
                            this.state.inPropertyName = !0, t.key = this.match(c.num) || this.match(c.string) || this.match(c.bigint) || this.match(c.decimal) ? this.parseExprAtom() : this.parseMaybePrivateName(e), this.isPrivateName(t.key) || (t.computed = !1), this.state.inPropertyName = s
                        }
                        return t.key
                    }
                    initFunction(t, e) {
                        t.id = null, t.generator = !1, t.async = !!e
                    }
                    parseMethod(t, e, s, i, r, a, n = !1) {
                        this.initFunction(t, s), t.generator = !!e;
                        const o = i;
                        return this.scope.enter(18 | (n ? 64 : 0) | (r ? 32 : 0)), this.prodParam.enter(it(s, t.generator)), this.parseFunctionParams(t, o), this.parseFunctionBodyAndFinish(t, a, !0), this.prodParam.exit(), this.scope.exit(), t
                    }
                    parseArrayLike(t, e, s, i) {
                        s && this.expectPlugin("recordAndTuple");
                        const r = this.state.inFSharpPipelineDirectBody;
                        this.state.inFSharpPipelineDirectBody = !1;
                        const a = this.startNode();
                        return this.next(), a.elements = this.parseExprList(t, !s, i, a), this.state.inFSharpPipelineDirectBody = r, this.finishNode(a, s ? "TupleExpression" : "ArrayExpression")
                    }
                    parseArrowExpression(t, e, s, i) {
                        this.scope.enter(6);
                        let r = it(s, !1);
                        !this.match(c.bracketL) && this.prodParam.hasIn && (r |= 8), this.prodParam.enter(r), this.initFunction(t, s);
                        const a = this.state.maybeInArrowParameters;
                        return e && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(t, e, i)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(t, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = a, this.finishNode(t, "ArrowFunctionExpression")
                    }
                    setArrowFunctionParameters(t, e, s) {
                        t.params = this.toAssignableList(e, s, !1)
                    }
                    parseFunctionBodyAndFinish(t, e, s = !1) {
                        this.parseFunctionBody(t, !1, s), this.finishNode(t, e)
                    }
                    parseFunctionBody(t, e, s = !1) {
                        const i = e && !this.match(c.braceL);
                        if (this.expressionScope.enter(Ct()), i) t.body = this.parseMaybeAssign(), this.checkParams(t, !1, e, !1);
                        else {
                            const i = this.state.strict,
                                r = this.state.labels;
                            this.state.labels = [], this.prodParam.enter(4 | this.prodParam.currentFlags()), t.body = this.parseBlock(!0, !1, (r => {
                                const a = !this.isSimpleParamList(t.params);
                                if (r && a) {
                                    const e = "method" !== t.kind && "constructor" !== t.kind || !t.key ? t.start : t.key.end;
                                    this.raise(e, g.IllegalLanguageModeDirective)
                                }
                                const n = !i && this.state.strict;
                                this.checkParams(t, !(this.state.strict || e || s || a), e, n), this.state.strict && t.id && this.checkLVal(t.id, "function name", 65, void 0, void 0, n)
                            })), this.prodParam.exit(), this.expressionScope.exit(), this.state.labels = r
                        }
                    }
                    isSimpleParamList(t) {
                        for (let e = 0, s = t.length; e < s; e++)
                            if ("Identifier" !== t[e].type) return !1;
                        return !0
                    }
                    checkParams(t, e, s, i = !0) {
                        const r = new Set;
                        for (let s = 0, a = t.params; s < a.length; s++) {
                            const t = a[s];
                            this.checkLVal(t, "function parameter list", 5, e ? null : r, void 0, i)
                        }
                    }
                    parseExprList(t, e, s, i) {
                        const r = [];
                        let a = !0;
                        for (; !this.eat(t);) {
                            if (a) a = !1;
                            else if (this.expect(c.comma), this.match(t)) {
                                i && this.addExtra(i, "trailingComma", this.state.lastTokStart), this.next();
                                break
                            }
                            r.push(this.parseExprListItem(e, s))
                        }
                        return r
                    }
                    parseExprListItem(t, e, s, i) {
                        let r;
                        if (this.match(c.comma)) t || this.raise(this.state.pos, g.UnexpectedToken, ","), r = null;
                        else if (this.match(c.ellipsis)) {
                            const t = this.state.start,
                                i = this.state.startLoc;
                            r = this.parseParenItem(this.parseSpread(e, s), t, i)
                        } else if (this.match(c.question)) {
                            this.expectPlugin("partialApplication"), i || this.raise(this.state.start, g.UnexpectedArgumentPlaceholder);
                            const t = this.startNode();
                            this.next(), r = this.finishNode(t, "ArgumentPlaceholder")
                        } else r = this.parseMaybeAssignAllowIn(e, this.parseParenItem, s);
                        return r
                    }
                    parseIdentifier(t) {
                        const e = this.startNode(),
                            s = this.parseIdentifierName(e.start, t);
                        return this.createIdentifier(e, s)
                    }
                    createIdentifier(t, e) {
                        return t.name = e, t.loc.identifierName = e, this.finishNode(t, "Identifier")
                    }
                    parseIdentifierName(t, e) {
                        let s;
                        const {
                            start: i,
                            type: r
                        } = this.state;
                        if (r === c.name) s = this.state.value;
                        else {
                            if (!r.keyword) throw this.unexpected(); {
                                s = r.keyword;
                                const t = this.curContext();
                                r !== c._class && r !== c._function || t !== T.functionStatement && t !== T.functionExpression || this.state.context.pop()
                            }
                        }
                        return e ? this.state.type = c.name : this.checkReservedWord(s, i, !!r.keyword, !1), this.next(), s
                    }
                    checkReservedWord(t, e, s, i) {
                        if (this.prodParam.hasYield && "yield" === t) this.raise(e, g.YieldBindingIdentifier);
                        else {
                            if ("await" === t) {
                                if (this.prodParam.hasAwait) return void this.raise(e, g.AwaitBindingIdentifier);
                                this.expressionScope.recordAsyncArrowParametersError(e, g.AwaitBindingIdentifier)
                            }!this.scope.inClass || this.scope.inNonArrowFunction || "arguments" !== t ? s && _(t) ? this.raise(e, g.UnexpectedKeyword, t) : (this.state.strict ? i ? B : O : R)(t, this.inModule) && (this.prodParam.hasAwait || "await" !== t ? this.raise(e, g.UnexpectedReservedWord, t) : this.raise(e, this.hasPlugin("topLevelAwait") ? g.AwaitNotInAsyncContext : g.AwaitNotInAsyncFunction)) : this.raise(e, g.ArgumentsInClass)
                        }
                    }
                    isAwaitAllowed() {
                        return !!this.prodParam.hasAwait || !(!this.options.allowAwaitOutsideFunction || this.scope.inFunction)
                    }
                    parseAwait() {
                        const t = this.startNode();
                        return this.next(), this.expressionScope.recordParameterInitializerError(t.start, g.AwaitExpressionFormalParameter), this.eat(c.star) && this.raise(t.start, g.ObsoleteAwaitStar), this.scope.inFunction || this.options.allowAwaitOutsideFunction || (this.hasPrecedingLineBreak() || this.match(c.plusMin) || this.match(c.parenL) || this.match(c.bracketL) || this.match(c.backQuote) || this.match(c.regexp) || this.match(c.slash) || this.hasPlugin("v8intrinsic") && this.match(c.modulo) ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (t.argument = this.parseMaybeUnary()), this.finishNode(t, "AwaitExpression")
                    }
                    parseYield() {
                        const t = this.startNode();
                        return this.expressionScope.recordParameterInitializerError(t.start, g.YieldInParameter), this.next(), this.match(c.semi) || !this.match(c.star) && !this.state.type.startsExpr || this.hasPrecedingLineBreak() ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(c.star), t.argument = this.parseMaybeAssign()), this.finishNode(t, "YieldExpression")
                    }
                    checkPipelineAtInfixOperator(t, e) {
                        "smart" === this.getPluginOption("pipelineOperator", "proposal") && "SequenceExpression" === t.type && this.raise(e, g.PipelineHeadSequenceExpression)
                    }
                    parseSmartPipelineBody(t, e, s) {
                        return this.checkSmartPipelineBodyEarlyErrors(t, e), this.parseSmartPipelineBodyInStyle(t, e, s)
                    }
                    checkSmartPipelineBodyEarlyErrors(t, e) {
                        if (this.match(c.arrow)) throw this.raise(this.state.start, g.PipelineBodyNoArrow);
                        "SequenceExpression" === t.type && this.raise(e, g.PipelineBodySequenceExpression)
                    }
                    parseSmartPipelineBodyInStyle(t, e, s) {
                        const i = this.startNodeAt(e, s),
                            r = this.isSimpleReference(t);
                        return r ? i.callee = t : (this.topicReferenceWasUsedInCurrentTopicContext() || this.raise(e, g.PipelineTopicUnused), i.expression = t), this.finishNode(i, r ? "PipelineBareFunction" : "PipelineTopicExpression")
                    }
                    isSimpleReference(t) {
                        switch (t.type) {
                            case "MemberExpression":
                                return !t.computed && this.isSimpleReference(t.object);
                            case "Identifier":
                                return !0;
                            default:
                                return !1
                        }
                    }
                    withTopicPermittingContext(t) {
                        const e = this.state.topicContext;
                        this.state.topicContext = {
                            maxNumOfResolvableTopics: 1,
                            maxTopicIndex: null
                        };
                        try {
                            return t()
                        } finally {
                            this.state.topicContext = e
                        }
                    }
                    withTopicForbiddingContext(t) {
                        const e = this.state.topicContext;
                        this.state.topicContext = {
                            maxNumOfResolvableTopics: 0,
                            maxTopicIndex: null
                        };
                        try {
                            return t()
                        } finally {
                            this.state.topicContext = e
                        }
                    }
                    withSoloAwaitPermittingContext(t) {
                        const e = this.state.soloAwait;
                        this.state.soloAwait = !0;
                        try {
                            return t()
                        } finally {
                            this.state.soloAwait = e
                        }
                    }
                    allowInAnd(t) {
                        const e = this.prodParam.currentFlags();
                        if (8 & ~e) {
                            this.prodParam.enter(8 | e);
                            try {
                                return t()
                            } finally {
                                this.prodParam.exit()
                            }
                        }
                        return t()
                    }
                    disallowInAnd(t) {
                        const e = this.prodParam.currentFlags();
                        if (8 & e) {
                            this.prodParam.enter(-9 & e);
                            try {
                                return t()
                            } finally {
                                this.prodParam.exit()
                            }
                        }
                        return t()
                    }
                    registerTopicReference() {
                        this.state.topicContext.maxTopicIndex = 0
                    }
                    primaryTopicReferenceIsAllowedInCurrentTopicContext() {
                        return this.state.topicContext.maxNumOfResolvableTopics >= 1
                    }
                    topicReferenceWasUsedInCurrentTopicContext() {
                        return null != this.state.topicContext.maxTopicIndex && this.state.topicContext.maxTopicIndex >= 0
                    }
                    parseFSharpPipelineBody(t) {
                        const e = this.state.start,
                            s = this.state.startLoc;
                        this.state.potentialArrowAt = this.state.start;
                        const i = this.state.inFSharpPipelineDirectBody;
                        this.state.inFSharpPipelineDirectBody = !0;
                        const r = this.parseExprOp(this.parseMaybeUnary(), e, s, t);
                        return this.state.inFSharpPipelineDirectBody = i, r
                    }
                } {
                    parseTopLevel(t, e) {
                        if (e.sourceType = this.options.sourceType, e.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(e, !0, !0, c.eof), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
                            for (let t = 0, e = Array.from(this.scope.undefinedExports); t < e.length; t++) {
                                const [s] = e[t], i = this.scope.undefinedExports.get(s);
                                this.raise(i, g.ModuleExportUndefined, s)
                            }
                        return t.program = this.finishNode(e, "Program"), t.comments = this.state.comments, this.options.tokens && (t.tokens = this.tokens), this.finishNode(t, "File")
                    }
                    stmtToDirective(t) {
                        const e = t.expression,
                            s = this.startNodeAt(e.start, e.loc.start),
                            i = this.startNodeAt(t.start, t.loc.start),
                            r = this.input.slice(e.start, e.end),
                            a = s.value = r.slice(1, -1);
                        return this.addExtra(s, "raw", r), this.addExtra(s, "rawValue", a), i.value = this.finishNodeAt(s, "DirectiveLiteral", e.end, e.loc.end), this.finishNodeAt(i, "Directive", t.end, t.loc.end)
                    }
                    parseInterpreterDirective() {
                        if (!this.match(c.interpreterDirective)) return null;
                        const t = this.startNode();
                        return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective")
                    }
                    isLet(t) {
                        if (!this.isContextual("let")) return !1;
                        const e = this.nextTokenStart(),
                            s = this.input.charCodeAt(e);
                        if (91 === s) return !0;
                        if (t) return !1;
                        if (123 === s) return !0;
                        if (I(s)) {
                            let t = e + 1;
                            for (; v(this.input.charCodeAt(t));) ++t;
                            const s = this.input.slice(e, t);
                            if (!j.test(s)) return !0
                        }
                        return !1
                    }
                    parseStatement(t, e) {
                        return this.match(c.at) && this.parseDecorators(!0), this.parseStatementContent(t, e)
                    }
                    parseStatementContent(t, e) {
                        let s = this.state.type;
                        const i = this.startNode();
                        let r;
                        switch (this.isLet(t) && (s = c._var, r = "let"), s) {
                            case c._break:
                            case c._continue:
                                return this.parseBreakContinueStatement(i, s.keyword);
                            case c._debugger:
                                return this.parseDebuggerStatement(i);
                            case c._do:
                                return this.parseDoStatement(i);
                            case c._for:
                                return this.parseForStatement(i);
                            case c._function:
                                if (46 === this.lookaheadCharCode()) break;
                                return t && (this.state.strict ? this.raise(this.state.start, g.StrictFunction) : "if" !== t && "label" !== t && this.raise(this.state.start, g.SloppyFunction)), this.parseFunctionStatement(i, !1, !t);
                            case c._class:
                                return t && this.unexpected(), this.parseClass(i, !0);
                            case c._if:
                                return this.parseIfStatement(i);
                            case c._return:
                                return this.parseReturnStatement(i);
                            case c._switch:
                                return this.parseSwitchStatement(i);
                            case c._throw:
                                return this.parseThrowStatement(i);
                            case c._try:
                                return this.parseTryStatement(i);
                            case c._const:
                            case c._var:
                                return r = r || this.state.value, t && "var" !== r && this.raise(this.state.start, g.UnexpectedLexicalDeclaration), this.parseVarStatement(i, r);
                            case c._while:
                                return this.parseWhileStatement(i);
                            case c._with:
                                return this.parseWithStatement(i);
                            case c.braceL:
                                return this.parseBlock();
                            case c.semi:
                                return this.parseEmptyStatement(i);
                            case c._import: {
                                const t = this.lookaheadCharCode();
                                if (40 === t || 46 === t) break
                            }
                            case c._export: {
                                let t;
                                return this.options.allowImportExportEverywhere || e || this.raise(this.state.start, g.UnexpectedImportExport), this.next(), s === c._import ? (t = this.parseImport(i), "ImportDeclaration" !== t.type || t.importKind && "value" !== t.importKind || (this.sawUnambiguousESM = !0)) : (t = this.parseExport(i), ("ExportNamedDeclaration" !== t.type || t.exportKind && "value" !== t.exportKind) && ("ExportAllDeclaration" !== t.type || t.exportKind && "value" !== t.exportKind) && "ExportDefaultDeclaration" !== t.type || (this.sawUnambiguousESM = !0)), this.assertModuleNodeAllowed(i), t
                            }
                            default:
                                if (this.isAsyncFunction()) return t && this.raise(this.state.start, g.AsyncFunctionInSingleStatementContext), this.next(), this.parseFunctionStatement(i, !0, !t)
                        }
                        const a = this.state.value,
                            n = this.parseExpression();
                        return s === c.name && "Identifier" === n.type && this.eat(c.colon) ? this.parseLabeledStatement(i, a, n, t) : this.parseExpressionStatement(i, n)
                    }
                    assertModuleNodeAllowed(t) {
                        this.options.allowImportExportEverywhere || this.inModule || this.raiseWithData(t.start, {
                            code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
                        }, g.ImportOutsideModule)
                    }
                    takeDecorators(t) {
                        const e = this.state.decoratorStack[this.state.decoratorStack.length - 1];
                        e.length && (t.decorators = e, this.resetStartLocationFromNode(t, e[0]), this.state.decoratorStack[this.state.decoratorStack.length - 1] = [])
                    }
                    canHaveLeadingDecorator() {
                        return this.match(c._class)
                    }
                    parseDecorators(t) {
                        const e = this.state.decoratorStack[this.state.decoratorStack.length - 1];
                        for (; this.match(c.at);) {
                            const t = this.parseDecorator();
                            e.push(t)
                        }
                        if (this.match(c._export)) t || this.unexpected(), this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(this.state.start, g.DecoratorExportClass);
                        else if (!this.canHaveLeadingDecorator()) throw this.raise(this.state.start, g.UnexpectedLeadingDecorator)
                    }
                    parseDecorator() {
                        this.expectOnePlugin(["decorators-legacy", "decorators"]);
                        const t = this.startNode();
                        if (this.next(), this.hasPlugin("decorators")) {
                            this.state.decoratorStack.push([]);
                            const e = this.state.start,
                                s = this.state.startLoc;
                            let i;
                            if (this.eat(c.parenL)) i = this.parseExpression(), this.expect(c.parenR);
                            else
                                for (i = this.parseIdentifier(!1); this.eat(c.dot);) {
                                    const t = this.startNodeAt(e, s);
                                    t.object = i, t.property = this.parseIdentifier(!0), t.computed = !1, i = this.finishNode(t, "MemberExpression")
                                }
                            t.expression = this.parseMaybeDecoratorArguments(i), this.state.decoratorStack.pop()
                        } else t.expression = this.parseExprSubscripts();
                        return this.finishNode(t, "Decorator")
                    }
                    parseMaybeDecoratorArguments(t) {
                        if (this.eat(c.parenL)) {
                            const e = this.startNodeAtNode(t);
                            return e.callee = t, e.arguments = this.parseCallExpressionArguments(c.parenR, !1), this.toReferencedList(e.arguments), this.finishNode(e, "CallExpression")
                        }
                        return t
                    }
                    parseBreakContinueStatement(t, e) {
                        const s = "break" === e;
                        return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, e), this.finishNode(t, s ? "BreakStatement" : "ContinueStatement")
                    }
                    verifyBreakContinue(t, e) {
                        const s = "break" === e;
                        let i;
                        for (i = 0; i < this.state.labels.length; ++i) {
                            const e = this.state.labels[i];
                            if (null == t.label || e.name === t.label.name) {
                                if (null != e.kind && (s || "loop" === e.kind)) break;
                                if (t.label && s) break
                            }
                        }
                        i === this.state.labels.length && this.raise(t.start, g.IllegalBreakContinue, e)
                    }
                    parseDebuggerStatement(t) {
                        return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
                    }
                    parseHeaderExpression() {
                        this.expect(c.parenL);
                        const t = this.parseExpression();
                        return this.expect(c.parenR), t
                    }
                    parseDoStatement(t) {
                        return this.next(), this.state.labels.push(Nt), t.body = this.withTopicForbiddingContext((() => this.parseStatement("do"))), this.state.labels.pop(), this.expect(c._while), t.test = this.parseHeaderExpression(), this.eat(c.semi), this.finishNode(t, "DoWhileStatement")
                    }
                    parseForStatement(t) {
                        this.next(), this.state.labels.push(Nt);
                        let e = -1;
                        if (this.isAwaitAllowed() && this.eatContextual("await") && (e = this.state.lastTokStart), this.scope.enter(0), this.expect(c.parenL), this.match(c.semi)) return e > -1 && this.unexpected(e), this.parseFor(t, null);
                        const s = this.isLet();
                        if (this.match(c._var) || this.match(c._const) || s) {
                            const i = this.startNode(),
                                r = s ? "let" : this.state.value;
                            return this.next(), this.parseVar(i, !0, r), this.finishNode(i, "VariableDeclaration"), (this.match(c._in) || this.isContextual("of")) && 1 === i.declarations.length ? this.parseForIn(t, i, e) : (e > -1 && this.unexpected(e), this.parseFor(t, i))
                        }
                        const i = new bt,
                            r = this.parseExpression(!0, i);
                        if (this.match(c._in) || this.isContextual("of")) {
                            this.toAssignable(r, !0);
                            const s = this.isContextual("of") ? "for-of statement" : "for-in statement";
                            return this.checkLVal(r, s), this.parseForIn(t, r, e)
                        }
                        return this.checkExpressionErrors(i, !0), e > -1 && this.unexpected(e), this.parseFor(t, r)
                    }
                    parseFunctionStatement(t, e, s) {
                        return this.next(), this.parseFunction(t, 1 | (s ? 0 : 2), e)
                    }
                    parseIfStatement(t) {
                        return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(c._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
                    }
                    parseReturnStatement(t) {
                        return this.prodParam.hasReturn || this.options.allowReturnOutsideFunction || this.raise(this.state.start, g.IllegalReturn), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
                    }
                    parseSwitchStatement(t) {
                        this.next(), t.discriminant = this.parseHeaderExpression();
                        const e = t.cases = [];
                        let s, i;
                        for (this.expect(c.braceL), this.state.labels.push(kt), this.scope.enter(0); !this.match(c.braceR);)
                            if (this.match(c._case) || this.match(c._default)) {
                                const t = this.match(c._case);
                                s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), t ? s.test = this.parseExpression() : (i && this.raise(this.state.lastTokStart, g.MultipleDefaultsInSwitch), i = !0, s.test = null), this.expect(c.colon)
                            } else s ? s.consequent.push(this.parseStatement(null)) : this.unexpected();
                        return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement")
                    }
                    parseThrowStatement(t) {
                        return this.next(), this.hasPrecedingLineBreak() && this.raise(this.state.lastTokEnd, g.NewlineAfterThrow), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
                    }
                    parseCatchClauseParam() {
                        const t = this.parseBindingAtom(),
                            e = "Identifier" === t.type;
                        return this.scope.enter(e ? 8 : 0), this.checkLVal(t, "catch clause", 9), t
                    }
                    parseTryStatement(t) {
                        if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(c._catch)) {
                            const e = this.startNode();
                            this.next(), this.match(c.parenL) ? (this.expect(c.parenL), e.param = this.parseCatchClauseParam(), this.expect(c.parenR)) : (e.param = null, this.scope.enter(0)), e.body = this.withTopicForbiddingContext((() => this.parseBlock(!1, !1))), this.scope.exit(), t.handler = this.finishNode(e, "CatchClause")
                        }
                        return t.finalizer = this.eat(c._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, g.NoCatchOrFinally), this.finishNode(t, "TryStatement")
                    }
                    parseVarStatement(t, e) {
                        return this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration")
                    }
                    parseWhileStatement(t) {
                        return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(Nt), t.body = this.withTopicForbiddingContext((() => this.parseStatement("while"))), this.state.labels.pop(), this.finishNode(t, "WhileStatement")
                    }
                    parseWithStatement(t) {
                        return this.state.strict && this.raise(this.state.start, g.StrictWith), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withTopicForbiddingContext((() => this.parseStatement("with"))), this.finishNode(t, "WithStatement")
                    }
                    parseEmptyStatement(t) {
                        return this.next(), this.finishNode(t, "EmptyStatement")
                    }
                    parseLabeledStatement(t, e, s, i) {
                        for (let t = 0, i = this.state.labels; t < i.length; t++) i[t].name === e && this.raise(s.start, g.LabelRedeclaration, e);
                        const r = this.state.type.isLoop ? "loop" : this.match(c._switch) ? "switch" : null;
                        for (let e = this.state.labels.length - 1; e >= 0; e--) {
                            const s = this.state.labels[e];
                            if (s.statementStart !== t.start) break;
                            s.statementStart = this.state.start, s.kind = r
                        }
                        return this.state.labels.push({
                            name: e,
                            kind: r,
                            statementStart: this.state.start
                        }), t.body = this.parseStatement(i ? -1 === i.indexOf("label") ? i + "label" : i : "label"), this.state.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement")
                    }
                    parseExpressionStatement(t, e) {
                        return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
                    }
                    parseBlock(t = !1, e = !0, s) {
                        const i = this.startNode();
                        return t && this.state.strictErrors.clear(), this.expect(c.braceL), e && this.scope.enter(0), this.parseBlockBody(i, t, !1, c.braceR, s), e && this.scope.exit(), this.finishNode(i, "BlockStatement")
                    }
                    isValidDirective(t) {
                        return "ExpressionStatement" === t.type && "StringLiteral" === t.expression.type && !t.expression.extra.parenthesized
                    }
                    parseBlockBody(t, e, s, i, r) {
                        const a = t.body = [],
                            n = t.directives = [];
                        this.parseBlockOrModuleBlockBody(a, e ? n : void 0, s, i, r)
                    }
                    parseBlockOrModuleBlockBody(t, e, s, i, r) {
                        const a = this.state.strict;
                        let n = !1,
                            o = !1;
                        for (; !this.match(i);) {
                            const i = this.parseStatement(null, s);
                            if (e && !o) {
                                if (this.isValidDirective(i)) {
                                    const t = this.stmtToDirective(i);
                                    e.push(t), n || "use strict" !== t.value.value || (n = !0, this.setStrict(!0));
                                    continue
                                }
                                o = !0, this.state.strictErrors.clear()
                            }
                            t.push(i)
                        }
                        r && r.call(this, n), a || this.setStrict(!1), this.next()
                    }
                    parseFor(t, e) {
                        return t.init = e, this.expect(c.semi), t.test = this.match(c.semi) ? null : this.parseExpression(), this.expect(c.semi), t.update = this.match(c.parenR) ? null : this.parseExpression(), this.expect(c.parenR), t.body = this.withTopicForbiddingContext((() => this.parseStatement("for"))), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement")
                    }
                    parseForIn(t, e, s) {
                        const i = this.match(c._in);
                        return this.next(), i ? s > -1 && this.unexpected(s) : t.await = s > -1, "VariableDeclaration" !== e.type || null == e.declarations[0].init || i && !this.state.strict && "var" === e.kind && "Identifier" === e.declarations[0].id.type ? "AssignmentPattern" === e.type && this.raise(e.start, g.InvalidLhs, "for-loop") : this.raise(e.start, g.ForInOfLoopInitializer, i ? "for-in" : "for-of"), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(c.parenR), t.body = this.withTopicForbiddingContext((() => this.parseStatement("for"))), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement")
                    }
                    parseVar(t, e, s) {
                        const i = t.declarations = [],
                            r = this.hasPlugin("typescript");
                        for (t.kind = s;;) {
                            const t = this.startNode();
                            if (this.parseVarId(t, s), this.eat(c.eq) ? t.init = e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : ("const" !== s || this.match(c._in) || this.isContextual("of") ? "Identifier" === t.id.type || e && (this.match(c._in) || this.isContextual("of")) || this.raise(this.state.lastTokEnd, g.DeclarationMissingInitializer, "Complex binding patterns") : r || this.raise(this.state.lastTokEnd, g.DeclarationMissingInitializer, "Const declarations"), t.init = null), i.push(this.finishNode(t, "VariableDeclarator")), !this.eat(c.comma)) break
                        }
                        return t
                    }
                    parseVarId(t, e) {
                        t.id = this.parseBindingAtom(), this.checkLVal(t.id, "variable declaration", "var" === e ? 5 : 9, void 0, "var" !== e)
                    }
                    parseFunction(t, e = 0, s = !1) {
                        const i = 1 & e,
                            r = 2 & e,
                            a = !(!i || 4 & e);
                        this.initFunction(t, s), this.match(c.star) && r && this.raise(this.state.start, g.GeneratorInSingleStatementContext), t.generator = this.eat(c.star), i && (t.id = this.parseFunctionId(a));
                        const n = this.state.maybeInArrowParameters;
                        return this.state.maybeInArrowParameters = !1, this.scope.enter(2), this.prodParam.enter(it(s, t.generator)), i || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, !1), this.withTopicForbiddingContext((() => {
                            this.parseFunctionBodyAndFinish(t, i ? "FunctionDeclaration" : "FunctionExpression")
                        })), this.prodParam.exit(), this.scope.exit(), i && !r && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = n, t
                    }
                    parseFunctionId(t) {
                        return t || this.match(c.name) ? this.parseIdentifier() : null
                    }
                    parseFunctionParams(t, e) {
                        this.expect(c.parenL), this.expressionScope.enter(new wt(3)), t.params = this.parseBindingList(c.parenR, 41, !1, e), this.expressionScope.exit()
                    }
                    registerFunctionStatementId(t) {
                        t.id && this.scope.declareName(t.id.name, this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? 5 : 9 : 17, t.id.start)
                    }
                    parseClass(t, e, s) {
                        this.next(), this.takeDecorators(t);
                        const i = this.state.strict;
                        return this.state.strict = !0, this.parseClassId(t, e, s), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, i), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
                    }
                    isClassProperty() {
                        return this.match(c.eq) || this.match(c.semi) || this.match(c.braceR)
                    }
                    isClassMethod() {
                        return this.match(c.parenL)
                    }
                    isNonstaticConstructor(t) {
                        return !(t.computed || t.static || "constructor" !== t.key.name && "constructor" !== t.key.value)
                    }
                    parseClassBody(t, e) {
                        this.classScope.enter();
                        const s = {
                            constructorAllowsSuper: t,
                            hadConstructor: !1,
                            hadStaticBlock: !1
                        };
                        let i = [];
                        const r = this.startNode();
                        if (r.body = [], this.expect(c.braceL), this.withTopicForbiddingContext((() => {
                                for (; !this.match(c.braceR);) {
                                    if (this.eat(c.semi)) {
                                        if (i.length > 0) throw this.raise(this.state.lastTokEnd, g.DecoratorSemicolon);
                                        continue
                                    }
                                    if (this.match(c.at)) {
                                        i.push(this.parseDecorator());
                                        continue
                                    }
                                    const t = this.startNode();
                                    i.length && (t.decorators = i, this.resetStartLocationFromNode(t, i[0]), i = []), this.parseClassMember(r, t, s), "constructor" === t.kind && t.decorators && t.decorators.length > 0 && this.raise(t.start, g.DecoratorConstructor)
                                }
                            })), this.state.strict = e, this.next(), i.length) throw this.raise(this.state.start, g.TrailingDecorator);
                        return this.classScope.exit(), this.finishNode(r, "ClassBody")
                    }
                    parseClassMemberFromModifier(t, e) {
                        const s = this.parseIdentifier(!0);
                        if (this.isClassMethod()) {
                            const i = e;
                            return i.kind = "method", i.computed = !1, i.key = s, i.static = !1, this.pushClassMethod(t, i, !1, !1, !1, !1), !0
                        }
                        if (this.isClassProperty()) {
                            const i = e;
                            return i.computed = !1, i.key = s, i.static = !1, t.body.push(this.parseClassProperty(i)), !0
                        }
                        return !1
                    }
                    parseClassMember(t, e, s) {
                        const i = this.isContextual("static");
                        if (i) {
                            if (this.parseClassMemberFromModifier(t, e)) return;
                            if (this.eat(c.braceL)) return void this.parseClassStaticBlock(t, e, s)
                        }
                        this.parseClassMemberWithIsStatic(t, e, s, i)
                    }
                    parseClassMemberWithIsStatic(t, e, s, i) {
                        const r = e,
                            a = e,
                            n = e,
                            o = e,
                            h = r,
                            p = r;
                        if (e.static = i, this.eat(c.star)) return h.kind = "method", this.parseClassElementName(h), this.isPrivateName(h.key) ? void this.pushClassPrivateMethod(t, a, !0, !1) : (this.isNonstaticConstructor(r) && this.raise(r.key.start, g.ConstructorIsGenerator), void this.pushClassMethod(t, r, !0, !1, !1, !1));
                        const l = this.state.containsEsc,
                            u = this.parseClassElementName(e),
                            d = this.isPrivateName(u),
                            m = "Identifier" === u.type,
                            f = this.state.start;
                        if (this.parsePostMemberNameModifiers(p), this.isClassMethod()) {
                            if (h.kind = "method", d) return void this.pushClassPrivateMethod(t, a, !1, !1);
                            const e = this.isNonstaticConstructor(r);
                            let i = !1;
                            e && (r.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(u.start, g.DuplicateConstructor), s.hadConstructor = !0, i = s.constructorAllowsSuper), this.pushClassMethod(t, r, !1, !1, e, i)
                        } else if (this.isClassProperty()) d ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n);
                        else if (!m || "async" !== u.name || l || this.isLineTerminator()) !m || "get" !== u.name && "set" !== u.name || l || this.match(c.star) && this.isLineTerminator() ? this.isLineTerminator() ? d ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n) : this.unexpected() : (h.kind = u.name, this.parseClassElementName(r), this.isPrivateName(h.key) ? this.pushClassPrivateMethod(t, a, !1, !1) : (this.isNonstaticConstructor(r) && this.raise(r.key.start, g.ConstructorIsAccessor), this.pushClassMethod(t, r, !1, !1, !1, !1)), this.checkGetterSetterParams(r));
                        else {
                            const e = this.eat(c.star);
                            p.optional && this.unexpected(f), h.kind = "method", this.parseClassElementName(h), this.parsePostMemberNameModifiers(p), this.isPrivateName(h.key) ? this.pushClassPrivateMethod(t, a, e, !0) : (this.isNonstaticConstructor(r) && this.raise(r.key.start, g.ConstructorIsAsync), this.pushClassMethod(t, r, e, !0, !1, !1))
                        }
                    }
                    parseClassElementName(t) {
                        const e = this.parsePropertyName(t, !0);
                        return t.computed || !t.static || "prototype" !== e.name && "prototype" !== e.value || this.raise(e.start, g.StaticPrototype), this.isPrivateName(e) && "constructor" === this.getPrivateNameSV(e) && this.raise(e.start, g.ConstructorClassPrivateField), e
                    }
                    parseClassStaticBlock(t, e, s) {
                        var i;
                        this.expectPlugin("classStaticBlock", e.start), this.scope.enter(80), this.expressionScope.enter(Ct());
                        const r = this.state.labels;
                        this.state.labels = [], this.prodParam.enter(0);
                        const a = e.body = [];
                        this.parseBlockOrModuleBlockBody(a, void 0, !1, c.braceR), this.prodParam.exit(), this.expressionScope.exit(), this.scope.exit(), this.state.labels = r, t.body.push(this.finishNode(e, "StaticBlock")), s.hadStaticBlock && this.raise(e.start, g.DuplicateStaticBlock), (null == (i = e.decorators) ? void 0 : i.length) && this.raise(e.start, g.DecoratorStaticBlock), s.hadStaticBlock = !0
                    }
                    pushClassProperty(t, e) {
                        e.computed || "constructor" !== e.key.name && "constructor" !== e.key.value || this.raise(e.key.start, g.ConstructorClassField), t.body.push(this.parseClassProperty(e))
                    }
                    pushClassPrivateProperty(t, e) {
                        this.expectPlugin("classPrivateProperties", e.key.start);
                        const s = this.parseClassPrivateProperty(e);
                        t.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), 0, s.key.start)
                    }
                    pushClassMethod(t, e, s, i, r, a) {
                        t.body.push(this.parseMethod(e, s, i, r, a, "ClassMethod", !0))
                    }
                    pushClassPrivateMethod(t, e, s, i) {
                        this.expectPlugin("classPrivateMethods", e.key.start);
                        const r = this.parseMethod(e, s, i, !1, !1, "ClassPrivateMethod", !0);
                        t.body.push(r);
                        const a = "get" === r.kind ? r.static ? 6 : 2 : "set" === r.kind ? r.static ? 5 : 1 : 0;
                        this.classScope.declarePrivateName(this.getPrivateNameSV(r.key), a, r.key.start)
                    }
                    parsePostMemberNameModifiers(t) {}
                    parseClassPrivateProperty(t) {
                        return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty")
                    }
                    parseClassProperty(t) {
                        return t.typeAnnotation && !this.match(c.eq) || this.expectPlugin("classProperties"), this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty")
                    }
                    parseInitializer(t) {
                        this.scope.enter(80), this.expressionScope.enter(Ct()), this.prodParam.enter(0), t.value = this.eat(c.eq) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit()
                    }
                    parseClassId(t, e, s, i = 139) {
                        this.match(c.name) ? (t.id = this.parseIdentifier(), e && this.checkLVal(t.id, "class name", i)) : s || !e ? t.id = null : this.unexpected(null, g.MissingClassName)
                    }
                    parseClassSuper(t) {
                        t.superClass = this.eat(c._extends) ? this.parseExprSubscripts() : null
                    }
                    parseExport(t) {
                        const e = this.maybeParseExportDefaultSpecifier(t),
                            s = !e || this.eat(c.comma),
                            i = s && this.eatExportStar(t),
                            r = i && this.maybeParseExportNamespaceSpecifier(t),
                            a = s && (!r || this.eat(c.comma)),
                            n = e || i;
                        if (i && !r) return e && this.unexpected(), this.parseExportFrom(t, !0), this.finishNode(t, "ExportAllDeclaration");
                        const o = this.maybeParseExportNamedSpecifiers(t);
                        if (e && s && !i && !o || r && a && !o) throw this.unexpected(null, c.braceL);
                        let h;
                        if (n || o ? (h = !1, this.parseExportFrom(t, n)) : h = this.maybeParseExportDeclaration(t), n || o || h) return this.checkExport(t, !0, !1, !!t.source), this.finishNode(t, "ExportNamedDeclaration");
                        if (this.eat(c._default)) return t.declaration = this.parseExportDefaultExpression(), this.checkExport(t, !0, !0), this.finishNode(t, "ExportDefaultDeclaration");
                        throw this.unexpected(null, c.braceL)
                    }
                    eatExportStar(t) {
                        return this.eat(c.star)
                    }
                    maybeParseExportDefaultSpecifier(t) {
                        if (this.isExportDefaultSpecifier()) {
                            this.expectPlugin("exportDefaultFrom");
                            const e = this.startNode();
                            return e.exported = this.parseIdentifier(!0), t.specifiers = [this.finishNode(e, "ExportDefaultSpecifier")], !0
                        }
                        return !1
                    }
                    maybeParseExportNamespaceSpecifier(t) {
                        if (this.isContextual("as")) {
                            t.specifiers || (t.specifiers = []);
                            const e = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
                            return this.next(), e.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(e, "ExportNamespaceSpecifier")), !0
                        }
                        return !1
                    }
                    maybeParseExportNamedSpecifiers(t) {
                        return !!this.match(c.braceL) && (t.specifiers || (t.specifiers = []), t.specifiers.push(...this.parseExportSpecifiers()), t.source = null, t.declaration = null, !0)
                    }
                    maybeParseExportDeclaration(t) {
                        return !!this.shouldParseExportDeclaration() && (t.specifiers = [], t.source = null, t.declaration = this.parseExportDeclaration(t), !0)
                    }
                    isAsyncFunction() {
                        if (!this.isContextual("async")) return !1;
                        const t = this.nextTokenStart();
                        return !l.test(this.input.slice(this.state.pos, t)) && this.isUnparsedContextual(t, "function")
                    }
                    parseExportDefaultExpression() {
                        const t = this.startNode(),
                            e = this.isAsyncFunction();
                        if (this.match(c._function) || e) return this.next(), e && this.next(), this.parseFunction(t, 5, e);
                        if (this.match(c._class)) return this.parseClass(t, !0, !0);
                        if (this.match(c.at)) return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(this.state.start, g.DecoratorBeforeExport), this.parseDecorators(!1), this.parseClass(t, !0, !0);
                        if (this.match(c._const) || this.match(c._var) || this.isLet()) throw this.raise(this.state.start, g.UnsupportedDefaultExport); {
                            const t = this.parseMaybeAssignAllowIn();
                            return this.semicolon(), t
                        }
                    }
                    parseExportDeclaration(t) {
                        return this.parseStatement(null)
                    }
                    isExportDefaultSpecifier() {
                        if (this.match(c.name)) {
                            const t = this.state.value;
                            if ("async" === t && !this.state.containsEsc || "let" === t) return !1;
                            if (("type" === t || "interface" === t) && !this.state.containsEsc) {
                                const t = this.lookahead();
                                if (t.type === c.name && "from" !== t.value || t.type === c.braceL) return this.expectOnePlugin(["flow", "typescript"]), !1
                            }
                        } else if (!this.match(c._default)) return !1;
                        const t = this.nextTokenStart(),
                            e = this.isUnparsedContextual(t, "from");
                        if (44 === this.input.charCodeAt(t) || this.match(c.name) && e) return !0;
                        if (this.match(c._default) && e) {
                            const e = this.input.charCodeAt(this.nextTokenStartSince(t + 4));
                            return 34 === e || 39 === e
                        }
                        return !1
                    }
                    parseExportFrom(t, e) {
                        if (this.eatContextual("from")) {
                            t.source = this.parseImportSource(), this.checkExport(t);
                            const e = this.maybeParseImportAssertions();
                            e && (t.assertions = e)
                        } else e ? this.unexpected() : t.source = null;
                        this.semicolon()
                    }
                    shouldParseExportDeclaration() {
                        if (this.match(c.at) && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators"))) {
                            if (!this.getPluginOption("decorators", "decoratorsBeforeExport")) return !0;
                            this.unexpected(this.state.start, g.DecoratorBeforeExport)
                        }
                        return "var" === this.state.type.keyword || "const" === this.state.type.keyword || "function" === this.state.type.keyword || "class" === this.state.type.keyword || this.isLet() || this.isAsyncFunction()
                    }
                    checkExport(t, e, s, i) {
                        if (e)
                            if (s) {
                                if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
                                    var r;
                                    const e = t.declaration;
                                    "Identifier" !== e.type || "from" !== e.name || e.end - e.start != 4 || (null == (r = e.extra) ? void 0 : r.parenthesized) || this.raise(e.start, g.ExportDefaultFromAsIdentifier)
                                }
                            } else if (t.specifiers && t.specifiers.length)
                            for (let e = 0, s = t.specifiers; e < s.length; e++) {
                                const t = s[e],
                                    {
                                        exported: r
                                    } = t,
                                    a = "Identifier" === r.type ? r.name : r.value;
                                if (this.checkDuplicateExports(t, a), !i && t.local) {
                                    const {
                                        local: e
                                    } = t;
                                    "StringLiteral" === e.type ? this.raise(t.start, g.ExportBindingIsString, e.value, a) : (this.checkReservedWord(e.name, e.start, !0, !1), this.scope.checkLocalExport(e))
                                }
                            } else if (t.declaration)
                                if ("FunctionDeclaration" === t.declaration.type || "ClassDeclaration" === t.declaration.type) {
                                    const e = t.declaration.id;
                                    if (!e) throw new Error("Assertion failure");
                                    this.checkDuplicateExports(t, e.name)
                                } else if ("VariableDeclaration" === t.declaration.type)
                            for (let e = 0, s = t.declaration.declarations; e < s.length; e++) {
                                const t = s[e];
                                this.checkDeclaration(t.id)
                            }
                        if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length) throw this.raise(t.start, g.UnsupportedDecoratorExport)
                    }
                    checkDeclaration(t) {
                        if ("Identifier" === t.type) this.checkDuplicateExports(t, t.name);
                        else if ("ObjectPattern" === t.type)
                            for (let e = 0, s = t.properties; e < s.length; e++) {
                                const t = s[e];
                                this.checkDeclaration(t)
                            } else if ("ArrayPattern" === t.type)
                                for (let e = 0, s = t.elements; e < s.length; e++) {
                                    const t = s[e];
                                    t && this.checkDeclaration(t)
                                } else "ObjectProperty" === t.type ? this.checkDeclaration(t.value) : "RestElement" === t.type ? this.checkDeclaration(t.argument) : "AssignmentPattern" === t.type && this.checkDeclaration(t.left)
                    }
                    checkDuplicateExports(t, e) {
                        this.state.exportedIdentifiers.indexOf(e) > -1 && this.raise(t.start, "default" === e ? g.DuplicateDefaultExport : g.DuplicateExport, e), this.state.exportedIdentifiers.push(e)
                    }
                    parseExportSpecifiers() {
                        const t = [];
                        let e = !0;
                        for (this.expect(c.braceL); !this.eat(c.braceR);) {
                            if (e) e = !1;
                            else if (this.expect(c.comma), this.eat(c.braceR)) break;
                            const s = this.startNode();
                            s.local = this.parseModuleExportName(), s.exported = this.eatContextual("as") ? this.parseModuleExportName() : s.local.__clone(), t.push(this.finishNode(s, "ExportSpecifier"))
                        }
                        return t
                    }
                    parseModuleExportName() {
                        if (this.match(c.string)) {
                            this.expectPlugin("moduleStringNames");
                            const t = this.parseLiteral(this.state.value, "StringLiteral"),
                                e = t.value.match(It);
                            return e && this.raise(t.start, g.ModuleExportNameHasLoneSurrogate, e[0].charCodeAt(0).toString(16)), t
                        }
                        return this.parseIdentifier(!0)
                    }
                    parseImport(t) {
                        if (t.specifiers = [], !this.match(c.string)) {
                            const e = !this.maybeParseDefaultImportSpecifier(t) || this.eat(c.comma),
                                s = e && this.maybeParseStarImportSpecifier(t);
                            e && !s && this.parseNamedImportSpecifiers(t), this.expectContextual("from")
                        }
                        t.source = this.parseImportSource();
                        const e = this.maybeParseImportAssertions();
                        if (e) t.assertions = e;
                        else {
                            const e = this.maybeParseModuleAttributes();
                            e && (t.attributes = e)
                        }
                        return this.semicolon(), this.finishNode(t, "ImportDeclaration")
                    }
                    parseImportSource() {
                        return this.match(c.string) || this.unexpected(), this.parseExprAtom()
                    }
                    shouldParseDefaultImport(t) {
                        return this.match(c.name)
                    }
                    parseImportSpecifierLocal(t, e, s, i) {
                        e.local = this.parseIdentifier(), this.checkLVal(e.local, i, 9), t.specifiers.push(this.finishNode(e, s))
                    }
                    parseAssertEntries() {
                        const t = [],
                            e = new Set;
                        do {
                            if (this.match(c.braceR)) break;
                            const s = this.startNode(),
                                i = this.state.value;
                            if (this.match(c.string) ? s.key = this.parseLiteral(i, "StringLiteral") : s.key = this.parseIdentifier(!0), this.expect(c.colon), "type" !== i && this.raise(s.key.start, g.ModuleAttributeDifferentFromType, i), e.has(i) && this.raise(s.key.start, g.ModuleAttributesWithDuplicateKeys, i), e.add(i), !this.match(c.string)) throw this.unexpected(this.state.start, g.ModuleAttributeInvalidValue);
                            s.value = this.parseLiteral(this.state.value, "StringLiteral"), this.finishNode(s, "ImportAttribute"), t.push(s)
                        } while (this.eat(c.comma));
                        return t
                    }
                    maybeParseModuleAttributes() {
                        if (!this.match(c._with) || this.hasPrecedingLineBreak()) return this.hasPlugin("moduleAttributes") ? [] : null;
                        this.expectPlugin("moduleAttributes"), this.next();
                        const t = [],
                            e = new Set;
                        do {
                            const s = this.startNode();
                            if (s.key = this.parseIdentifier(!0), "type" !== s.key.name && this.raise(s.key.start, g.ModuleAttributeDifferentFromType, s.key.name), e.has(s.key.name) && this.raise(s.key.start, g.ModuleAttributesWithDuplicateKeys, s.key.name), e.add(s.key.name), this.expect(c.colon), !this.match(c.string)) throw this.unexpected(this.state.start, g.ModuleAttributeInvalidValue);
                            s.value = this.parseLiteral(this.state.value, "StringLiteral"), this.finishNode(s, "ImportAttribute"), t.push(s)
                        } while (this.eat(c.comma));
                        return t
                    }
                    maybeParseImportAssertions() {
                        if (!this.isContextual("assert") || this.hasPrecedingLineBreak()) return this.hasPlugin("importAssertions") ? [] : null;
                        this.expectPlugin("importAssertions"), this.next(), this.eat(c.braceL);
                        const t = this.parseAssertEntries();
                        return this.eat(c.braceR), t
                    }
                    maybeParseDefaultImportSpecifier(t) {
                        return !!this.shouldParseDefaultImport(t) && (this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier", "default import specifier"), !0)
                    }
                    maybeParseStarImportSpecifier(t) {
                        if (this.match(c.star)) {
                            const e = this.startNode();
                            return this.next(), this.expectContextual("as"), this.parseImportSpecifierLocal(t, e, "ImportNamespaceSpecifier", "import namespace specifier"), !0
                        }
                        return !1
                    }
                    parseNamedImportSpecifiers(t) {
                        let e = !0;
                        for (this.expect(c.braceL); !this.eat(c.braceR);) {
                            if (e) e = !1;
                            else {
                                if (this.eat(c.colon)) throw this.raise(this.state.start, g.DestructureNamedImport);
                                if (this.expect(c.comma), this.eat(c.braceR)) break
                            }
                            this.parseImportSpecifier(t)
                        }
                    }
                    parseImportSpecifier(t) {
                        const e = this.startNode();
                        if (e.imported = this.parseModuleExportName(), this.eatContextual("as")) e.local = this.parseIdentifier();
                        else {
                            const {
                                imported: t
                            } = e;
                            if ("StringLiteral" === t.type) throw this.raise(e.start, g.ImportBindingIsString, t.value);
                            this.checkReservedWord(t.name, e.start, !0, !0), e.local = t.__clone()
                        }
                        this.checkLVal(e.local, "import specifier", 9), t.specifiers.push(this.finishNode(e, "ImportSpecifier"))
                    }
                } {
                    constructor(t, e) {
                        super(t = function(t) {
                            const e = {};
                            for (let s = 0, i = Object.keys(dt); s < i.length; s++) {
                                const r = i[s];
                                e[r] = t && null != t[r] ? t[r] : dt[r]
                            }
                            return e
                        }(t), e);
                        const s = this.getScopeHandler();
                        this.options = t, this.inModule = "module" === this.options.sourceType, this.scope = new s(this.raise.bind(this), this.inModule), this.prodParam = new st, this.classScope = new Lt(this.raise.bind(this)), this.expressionScope = new St(this.raise.bind(this)), this.plugins = function(t) {
                            const e = new Map;
                            for (let s = 0; s < t.length; s++) {
                                const i = t[s],
                                    [r, a] = Array.isArray(i) ? i : [i, {}];
                                e.has(r) || e.set(r, a || {})
                            }
                            return e
                        }(this.options.plugins), this.filename = t.sourceFilename
                    }
                    getScopeHandler() {
                        return Z
                    }
                    parse() {
                        let t = 0;
                        this.hasPlugin("topLevelAwait") && this.inModule && (t |= 2), this.scope.enter(1), this.prodParam.enter(t);
                        const e = this.startNode(),
                            s = this.startNode();
                        return this.nextToken(), e.errors = null, this.parseTopLevel(e, s), e.errors = this.state.errors, e
                    }
                }

                function Mt(t, e) {
                    let s = Dt;
                    return (null == t ? void 0 : t.plugins) && (function(t) {
                        if (ot(t, "decorators")) {
                            if (ot(t, "decorators-legacy")) throw new Error("Cannot use the decorators and decorators-legacy plugin together");
                            const e = ht(t, "decorators", "decoratorsBeforeExport");
                            if (null == e) throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.");
                            if ("boolean" != typeof e) throw new Error("'decoratorsBeforeExport' must be a boolean.")
                        }
                        if (ot(t, "flow") && ot(t, "typescript")) throw new Error("Cannot combine flow and typescript plugins.");
                        if (ot(t, "placeholders") && ot(t, "v8intrinsic")) throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
                        if (ot(t, "pipelineOperator") && !pt.includes(ht(t, "pipelineOperator", "proposal"))) throw new Error("'pipelineOperator' requires 'proposal' option whose value should be one of: " + pt.map((t => `'${t}'`)).join(", "));
                        if (ot(t, "moduleAttributes")) {
                            if (ot(t, "importAssertions")) throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
                            if ("may-2020" !== ht(t, "moduleAttributes", "version")) throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.")
                        }
                        if (ot(t, "recordAndTuple") && !ct.includes(ht(t, "recordAndTuple", "syntaxType"))) throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + ct.map((t => `'${t}'`)).join(", "))
                    }(t.plugins), s = function(t) {
                        const e = ut.filter((e => ot(t, e))),
                            s = e.join("/");
                        let i = Rt[s];
                        if (!i) {
                            i = Dt;
                            for (let t = 0; t < e.length; t++) {
                                const s = e[t];
                                i = lt[s](i)
                            }
                            Rt[s] = i
                        }
                        return i
                    }(t.plugins)), new s(t, e)
                }
                const Rt = {};
                e.parse = function(t, e) {
                    var s;
                    if ("unambiguous" !== (null == (s = e) ? void 0 : s.sourceType)) return Mt(e, t).parse();
                    e = Object.assign({}, e);
                    try {
                        e.sourceType = "module";
                        const s = Mt(e, t),
                            i = s.parse();
                        if (s.sawUnambiguousESM) return i;
                        if (s.ambiguousScriptDifferentAst) try {
                            return e.sourceType = "script", Mt(e, t).parse()
                        } catch (t) {} else i.program.sourceType = "script";
                        return i
                    } catch (s) {
                        try {
                            return e.sourceType = "script", Mt(e, t).parse()
                        } catch (t) {}
                        throw s
                    }
                }, e.parseExpression = function(t, e) {
                    const s = Mt(e, t);
                    return s.options.strictMode && (s.state.strict = !0), s.getExpression()
                }, e.tokTypes = c
            },
            904: (t, e, s) => {
                s.r(e), s.d(e, {
                    parser: () => i
                });
                const i = s(834)
            }
        },
        e = {};

    function s(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            exports: {}
        };
        return t[i](r, r.exports, s), r.exports
    }
    return s.d = (t, e) => {
        for (var i in e) s.o(e, i) && !s.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), s.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s(904)
})();

const parser = vilame.parser




















// 似乎这两个函数的增强提升不大
// function str2hex(str){
//   var unitoggle = /^[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_\$]+$/.test(str)
//   if (unitoggle){
//     var v = '00';
//     for(var i = 0; i < str.length; i++){
//       v += str.charCodeAt(i).toString(16);
//     }
//   }else{
//     var v = "01";
//     for(var i = 0; i < str.length; i++){
//       var s = str.charCodeAt(i).toString(16);
//       if (s.length == 2){
//         s = '00' + s;
//       }
//       v += s;
//     }
//   }
//   return v
// }
// function hex2str(hex){
//   gap = parseInt(hex.slice(0, 2))?4:2
//   hex = hex.slice(2)
//   var v = "";
//   for (var i = 0; i < hex.length/gap; i++) {
//     v += String.fromCharCode(parseInt(hex.slice(i*gap, (i+1)*gap), 16))
//   }
//   return v;
// }
function str2hex(str){
  var v = "";
  for(var i = 0; i < str.length; i++){
    var s = str.charCodeAt(i).toString(16);
    if (s.length == 2){
      s = '00' + s;
    }
    v += s;
  }
  return v
}
function _hex2str(hex, gap){
  var v = "";
  for (var i = 0; i < hex.length/gap; i++) {
    v += String.fromCharCode(parseInt(hex.slice(i*gap, (i+1)*gap), 16))
  }
  return v;
}
function hex2str(hex){
  return _hex2str(hex, 4)
}
function istr2hex(str){
  var v = "";
  for(var i = 0; i < str.length; i++){
    v += str.charCodeAt(i).toString(16);
  }
  return v
}
function hex2istr(hex){
  return _hex2str(hex, 2)
}
function num2hex(num){
  nstr = num.toString()
  if (/^[0-9]+.?[0-9]*$/.test(nstr)){
    nstr = int2str(0, 2) + nstr
  }else if (/^[1-9]+[0-9]*]*$/.test(nstr)){
    nstr = int2str(1, 2) + nstr
  }else{
    throw "error num2hex";
  }
  return istr2hex(nstr)
}
function hex2num(hex){
  str = hex2istr(hex)
  ntype = parseInt(str.slice(0,2))
  if (ntype == 0){
    nret = parseFloat(str.slice(2,))
  }else if (ntype == 1){
    nret = parseInt(str.slice(2,))
  }else{
    throw "error hex2num"
  }
  return nret;
}

function int2str(int, length){
  var v = int.toString(16)
  for (var i = 0; v.length < length; i++) {
    v = '0' + v
  }
  return v
}
function str2int(string){
  return parseInt(string, 16)
}



var types = {
    'Identifier': 0,
    'StringLiteral': 1,
    'NumericLiteral': 2,
    'CallExpression': 3,
    'VariableDeclaration': 5,
    'VariableDeclarator': 6,
    'ExpressionStatement': 8,
    'SequenceExpression': 9,
    'AssignmentExpression': 10,
    'operator': 11,

    'FunctionDeclaration': 12,
    'BlockStatement': 13,
    'ReturnStatement': 14,
    'IfStatement': 15,
    'MemberExpression': 16,
    'BinaryExpression': 17,
    'ForStatement': 18,
    'UpdateExpression': 19,
    'ConditionalExpression': 20,
    'FunctionExpression': 21,
    'SwitchStatement': 22,
    'SwitchCase': 23,
    'WhileStatement': 24,
    'Program': 0xff,
}

function pack_node(node){
    if (node.type == 'Program'){
        var v = node.body.map(function(e){
            return pack_node(e)
        }).join('')
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'operator'){
        var v = istr2hex(node.name)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'Identifier'){
        var v = istr2hex(node.name)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'StringLiteral'){
        var v = str2hex(node.value)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'NumericLiteral'){
        var v = num2hex(node.value)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'CallExpression'){
        let call = node.callee
        let args = node.arguments
        args = args.map(function(e){
            return pack_node(e)
        }).join('')
        var v = pack_node(call) + args
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'VariableDeclaration'){
        var v = node.declarations.map(function(e){
            return pack_node(e)
        }).join('')
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'VariableDeclarator'){
        let init = node.init;
        var v = pack_node(node.id) + (init?pack_node(init):pack_node({name:'undefined', type:'Identifier'}))
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'ExpressionStatement'){
        var v = pack_node(node.expression)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'AssignmentExpression'){
        let init = node.right
        var v = pack_node({name:node.operator, type:'operator'}) + pack_node(node.left) + pack_node(init)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'SequenceExpression'){
        var v = node.expressions.map(function(e){
            return pack_node(e)
        }).join('')
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v;
    }
    if (node.type == 'FunctionDeclaration'){
        var params = node.params.map(function(e){
            return pack_node(e)
        }).join('')
        var v = pack_node(node.id) + params + pack_node(node.body)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'FunctionExpression'){
        var params = node.params.map(function(e){
            return pack_node(e)
        }).join('')
        var v = (node.id?pack_node(node.id):pack_node({name:'null', type:'Identifier'})) + params + pack_node(node.body)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'BlockStatement'){
        var v = node.body.map(function(e){
            return pack_node(e)
        }).join('')
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'ReturnStatement'){
        var v = pack_node(node.argument)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'IfStatement'){
        let test = node.test
        let cons = node.consequent
        let alte = node.alternate
        var v = pack_node(test) + pack_node(cons) + (alte?pack_node(alte):pack_node({name:'null', type:'Identifier'}))
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'MemberExpression'){
        let obje = node.object
        let prop = node.property
        var v = pack_node(obje) + pack_node(prop)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'BinaryExpression'){
        var v = pack_node({name:node.operator, type:'operator'}) + pack_node(node.left) + pack_node(node.right)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'ForStatement'){
        let init = pack_node(node.init)
        let test = pack_node(node.test)
        let upda = pack_node(node.update)
        let body = pack_node(node.body)
        var v = init + test + upda + body
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'UpdateExpression'){
        var v = pack_node({name:node.operator, type:'operator'}) + pack_node(node.argument)
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'ConditionalExpression'){
        let test = pack_node(node.test)
        let cons = pack_node(node.consequent)
        let alte = pack_node(node.alternate)
        var v = test + cons + alte
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'SwitchStatement'){
        let discr = pack_node(node.discriminant)
        let cases = node.cases.map(function(e){
            return pack_node(e)
        }).join('')
        var v = discr + cases
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'SwitchCase'){
        let test = node.test?pack_node(node.test):pack_node({name:'null', type:'Identifier'})
        let cons = node.consequent.map(function(e){
            return pack_node(e)
        }).join('')
        var v = test + cons
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
    if (node.type == 'WhileStatement'){
        let test = pack_node(node.test)
        let body = pack_node(node.body)
        var v = test + body
        return int2str(types[node.type], 2) + int2str(v.length, 4) + v
    }
}

function parse_encjs(encjs){
    function parse_one(encjs, type){
        let length = str2int(encjs.slice(2, 6))
        let restda = encjs.slice(6, 6 + length)
        while (restda.length){
            let type = str2int(restda.slice(0, 2))
            let leng = str2int(restda.slice(2, 6))
            let rest = restda.slice(6, 6 + leng)
            if (type == types['StringLiteral']){
                console.log(rest, hex2str(rest))
            }
            if (type == types['NumericLiteral']){
                console.log(rest, hex2num(rest))
            }
            if (type == types['Identifier']){
                console.log(rest, hex2istr(rest))
            }
            if (type == types['operator']){
                console.log(rest, hex2istr(rest))
            }
            parse_node(restda)
            restda = restda.slice(6 + leng)
        }
    }
    function parse_node(encjs){
        let type = str2int(encjs.slice(0, 2))
        // console.log(type)
        // if (type == types['Identifier']){parse_one(encjs, type)}
        // if (type == types['StringLiteral']){parse_one(encjs, type)}
        // if (type == types['NumericLiteral']){parse_one(encjs, type)}
        // if (type == types['operator']){parse_one(encjs, type)}

        // 这部分为基础单元
        if (type == types['ExpressionStatement']){parse_one(encjs, type)}
        if (type == types['IfStatement']){parse_one(encjs, type)}
        if (type == types['ForStatement']){parse_one(encjs, type)}
        if (type == types['FunctionDeclaration']){parse_one(encjs, type)}
        if (type == types['VariableDeclaration']){parse_one(encjs, type)}
        if (type == types['BlockStatement']){parse_one(encjs, type)}
        if (type == types['ReturnStatement']){parse_one(encjs, type)}
        if (type == types['WhileStatement']){parse_one(encjs, type)}
        if (type == types['SwitchStatement']){parse_one(encjs, type)}

        if (type == types['SequenceExpression']){parse_one(encjs, type)}
        if (type == types['AssignmentExpression']){parse_one(encjs, type)}
        if (type == types['CallExpression']){parse_one(encjs, type)}
        if (type == types['VariableDeclarator']){parse_one(encjs, type)}
        if (type == types['MemberExpression']){parse_one(encjs, type)}
        if (type == types['BinaryExpression']){parse_one(encjs, type)}
        if (type == types['FunctionExpression']){parse_one(encjs, type)}
        if (type == types['UpdateExpression']){parse_one(encjs, type)}
        if (type == types['ConditionalExpression']){parse_one(encjs, type)}
        if (type == types['SwitchCase']){parse_one(encjs, type)}
        if (type == types['Program']){parse_one(encjs, type)}
    }
    parse_node(encjs)
}


function vilame_confusion(jscode){
    var ast = parser.parse(jscode);
    var ret = pack_node(ast.program)
    console.log(ret, ret.length)
    parse_encjs(ret)
    // parse_encjs('0b00022b')
}
const fs = require('fs');
var jscode = fs.readFileSync("./src.js", {
    encoding: "utf-8"
});
console.log(jscode);
console.log('jscode(length):', jscode.length);
code = vilame_confusion(jscode);