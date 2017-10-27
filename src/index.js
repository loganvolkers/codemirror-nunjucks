
import CodeMirror from 'codemirror'
import Extension from './extension'



export default function(){
    CodeMirror.defineExtension('enableNunjucksTags', Extension);
    
    return 'Welcome to codemirror-nunjuckss'
}
