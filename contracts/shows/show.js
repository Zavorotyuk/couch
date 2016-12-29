/**
 * Show function - use multiple `provides()` for media type-based content
 * negotiation.
 * @link http://docs.couchdb.org/en/latest/couchapp/ddocs.html#showfun
 *
 * @param {object} doc - Processed document, may be omitted.
 * @param {object} req - Request Object. http://docs.couchdb.org/en/latest/json-structure.html#request-object
 *
 * @returns {object} Response Object. http://docs.couchdb.org/en/latest/json-structure.html#response-object
 **/

function(doc, req) {
  var key, key2;

  var FIELDS_TO_CLEAR = ['_id','_rev', '_revisions', 'doc_type'];

  function formatResponse(data) {
    if (!data)
      return {code:404};
    clearFields(data);
    return {
      json: {data:data}
    };
  }

  function clearFields(data) {
    var key;
    for (key in FIELDS_TO_CLEAR)
      data[FIELDS_TO_CLEAR[key]] && delete data[FIELDS_TO_CLEAR[key]];
  }

  if (!doc)
    return formatResponse();



  if (req.query.document_id){
    if("*" == req.query.document_id)
      return formatResponse(doc.documents);

    for(key in doc.documents){
      if(doc.documents[key].id === req.query.document_id)
        return formatResponse(doc.documents[key]);
    }
    return formatResponse();
  }

  return formatResponse(doc);
}
