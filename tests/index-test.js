import expect from 'expect'

import index from 'src/index'

import CodeMirror from 'codemirror';
import "codemirror/lib/codemirror.css";

describe('Module template', () => {

  it('displays a welcome message', () => {
    const msg = index();
    
    const ta = document.createElement("textarea");
    document.body.appendChild(ta);
    const editor = CodeMirror.fromTextArea(ta, {
      lineNumbers: true,
      mode: "nunjucks"
    });
    
    // editor.enableNunjucksTags(null);

    editor.enableNunjucksTags(function(text, contextCacheKey = null){
      // console.log("rendered", text, contextCacheKey);
      return text;
    });
  
    expect(msg).toContain('Welcome to codemirror-nunjuckss');
  })
})
