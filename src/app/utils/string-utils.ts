
export default class StringUtils {

    static toCamelCase(key: string): string {
      let tr: string = '';
      let tabKey: string[] = key.split("-");
  
      tr = tabKey[0];
  
      for(let i=1; i< tabKey.length;i++) {
        let word = tabKey[i];
        tr += (word[0]).toUpperCase();
        for(let j=1; j < word.length;j++) {
          tr += word[j].toLowerCase();
        }
      }
      
      return tr;
    }
}