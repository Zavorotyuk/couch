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
  var id = req.query.document_id;
  var key;

  function formatResponse(data){
    if (!data) 
      return {code:404};
    data._id && delete data._id;
    data._rev && delete data._rev;
    return {
      json: {data:data}
    };
  }

  function getDocuments(obj){
    var key;

    if("*" == id)
      return formatResponse(obj.documents);
    for(key in obj.documents){
      if(obj.documents[key].id === id)
        return formatResponse(obj.documents[key]);
    }
    return formatResponse();
  }

  function getProperty(property, obj){

  }

  if (!doc)
    return formatResponse();

  if (req.query.bid_id && id){
    for(key in doc.bids){
      if(doc.bids[key].id === req.query.bid_id)
        return getDocuments(doc.bids[key]);
    }
    return formatResponse();
  }

  if (req.query.bid_id){
    if("*" == req.query.bid_id)
      return formatResponse(doc.bids);

    for(key in doc.bids){
      if(doc.bids[key].id === req.query.bid_id)
        return formatResponse(doc.bids[key]);
    }
    return formatResponse();
  }

  if (req.query.award_id && id){
    for(key in doc.awards){
      if(doc.awards[key].id === req.query.award_id)
        return getDocuments(doc.awards[key]);
    }
    return formatResponse();
  }

  if (req.query.award_id){
    if("*" == req.query.award_id)
      return formatResponse(doc.awards);

    for(key in doc.awards){
      if(doc.awards[key].id === req.query.award_id)
        return formatResponse(doc.awards[key]);
    }
    return formatResponse();
  }

  if (req.query.contract_id && id){
    for(key in doc.contracts){
      if(doc.contracts[key].id === req.query.contract_id)
        return getDocuments(doc.contracts[key]);
    }
    return formatResponse();
  }

  if (req.query.contract_id){
    if("*" == req.query.contract_id)
      return formatResponse(doc.contracts);

    for(key in doc.contracts){
      if(doc.contracts[key].id === req.query.contract_id)
        return formatResponse(doc.contracts[key]);
    }
    return formatResponse();
  }

  if (id)
    return getDocuments(doc);

  return formatResponse(doc);
}
