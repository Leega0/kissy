/*
Copyright 2013, KISSY v1.40dev
MIT Licensed
build time: Aug 27 21:55
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/indent
*/

/**
 * Add indent button.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/indent", function (S, Editor, indexCmd) {
    function Indent() {

    }

    S.augment(Indent, {
        pluginRenderUI:function (editor) {
            indexCmd.init(editor);
            editor.addButton("indent", {
                tooltip:"增加缩进量 ",
                listeners:{
                    click:function () {
                        editor.execCommand("indent");
                        editor.focus();
                    }
                },
                mode:Editor.Mode.WYSIWYG_MODE
            });
        }
    });

    return Indent;
}, {
    requires:['editor', './indent/cmd']
});

