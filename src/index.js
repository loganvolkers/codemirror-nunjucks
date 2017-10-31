
import CodeMirror from 'codemirror'
import NunjucksExtension from './extension'
import nunjucks from "./modes/nunjucks";

export default function(){

    CodeMirror.defineMode('nunjucks', nunjucks);
    CodeMirror.defineExtension('enableNunjucksTags', function(options) {
      return new NunjucksExtension({editor: this, ...options});
    });
    
    return 'Welcome to codemirror-nunjuckss'
}
