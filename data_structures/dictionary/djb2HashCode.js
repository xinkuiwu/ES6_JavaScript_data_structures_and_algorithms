djb2HashCode(key) {
  const tableKey = this.toStrFn(key);
  let hash = 5381;
  for(let i = 0; i < tableKey.length; i++) {
   hash = (hash * 33) + tableKey.charCodeAt(i);  
    }  
 return hash % 1013;        
}

djb2
