import expect from 'expect'

import index from 'src/index'

import CodeMirror from 'codemirror';

import "codemirror/lib/codemirror.css";
import "./highlight.css";

describe('Module template', () => {

  it('displays a welcome message', () => {
    const msg = index();
    
    const ta = document.createElement("textarea");
    document.body.appendChild(ta);
    const editor = CodeMirror.fromTextArea(ta, {
      lineNumbers: true,
      mode: "nunjucks",
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
      },
      environmentAutocomplete:{
        getVariables: ()=>Promise.resolve(["bang"]),
        getTags: ()=>Promise.resolve([
            {
              name: "foo",
              displayName: "The Foo",
              description: "The most foo",
              args: []
            }
        ]),
        getConstants: ()=>Promise.resolve(["barr"])
      }      
    });
    
    // editor.enableNunjucksTags(null);

    editor.enableNunjucksTags(function(text, contextCacheKey = null){
      // console.log("rendered", text, contextCacheKey);
      return text;
    });
  
    expect(msg).toContain('Welcome to codemirror-nunjuckss');
  })
})
