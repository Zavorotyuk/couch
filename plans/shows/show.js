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

  function formatResponse(data){
    if (!data)
      return {code:404};
    data._id && delete data._id;
    data._rev && delete data._rev;
    return {
      json: {data:data}
    };
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
