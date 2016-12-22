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
    return {
      json: {data:data}
    };
  }

  if (!doc)
    return formatResponse(doc);

  if (req.query.document_id){
    for(key in doc.documents){
    if(doc.documents[key].id === req.query.document_id)
      return formatResponse(doc.documents[key]);
    }
    return formatResponse();
  }

  if (req.query.bid_id){
    for(key in doc.bids){
      if(doc.bids[key].id === req.query.bid_id)
        return formatResponse(doc.bids[key]);
    }
    return formatResponse();
  }

  if (req.query.bid_id && req.query.document_id){
    for(key in doc.bids){
      if(doc.bids[key].id === req.query.bid_id)
        for(key2 in doc.bids[key].documents){
          if(doc.bids[key].documents[key2].id === req.query.document_id)
            return formatResponse(doc.bids[key].documents[key2]);
        }
    }
    return formatResponse();
  }

  if (req.query.award_id){
    for(key in doc.awards){
      if(doc.awards[key].id === req.query.award_id)
        return formatResponse(doc.awards[key]);
    }
    return formatResponse();
  }

  if (req.query.award_id && req.query.document_id){
    for(key in doc.awards){
      if(doc.awards[key].id === req.query.award_id)
        for(key2 in doc.awards[key].documents){
          if(doc.awards[key].documents[key2].id === req.query.document_id)
            return formatResponse(doc.awards[key].documents[key2]);
        }
    }
    return formatResponse();
  }

  if (req.query.contract_id){
    for(key in doc.contracts){
      if(doc.contracts[key].id === req.query.contract_id)
        return formatResponse(doc.contracts[key]);
    }
    return formatResponse();
  }

  if (req.query.contract_id && req.query.document_id){
    for(key in doc.contracts){
      if(doc.contracts[key].id === req.query.contract_id)
        for(key2 in doc.contracts[key].documents){
          if(doc.contracts[key].documents[key2].id === req.query.document_id)
            return formatResponse(doc.contracts[key].documents[key2]);
        }
    }
    return formatResponse();
  }

  return formatResponse(doc);
}
