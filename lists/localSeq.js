 function (head, req) { provides('json', function() { var results = []; while (row = getRow()) { results.push({ id: row.id, _local_seq: row.key});} send(JSON.stringify(results));});}
