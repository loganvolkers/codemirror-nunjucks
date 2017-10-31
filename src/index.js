
import CodeMirror from 'codemirror'
import NunjucksExtension from './nunjucks-tags'
import nunjucks from "./modes/nunjucks";

import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import './autocomplete';

export default function(){

    CodeMirror.defineMode('nunjucks', nunjucks);
    CodeMirror.defineExtension('enableNunjucksTags', function(options) {
      return new NunjucksExtension({editor: this, ...options});
    });
    
    
    return 'Welcome to codemirror-nunjuckss'
}
