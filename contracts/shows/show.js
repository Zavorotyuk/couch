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



  if (req.query.change_id){
    if("*" == req.query.change_id)
      return formatResponse(doc.changes);

    for(key in doc.changes){
      if(doc.changes[key].id === req.query.change_id)
        return formatResponse(doc.changes[key]);
    }
    return formatResponse();
  }



  if (req.query.credentail_id){
    if("*" == req.query.credentail_id)
      return formatResponse(doc.credentials);
  }


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
