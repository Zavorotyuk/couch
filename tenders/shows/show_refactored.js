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
  var ALL = "*";
  var schema = {
    awards: {
      id: req.query.award_id,
      complaints: {
        id: req.query.complaint_id
      }
    },
    bids: {
      id: req.query.bids_id,
      eligibility_documents: {
        id: req.query.eligibility_documents
      },
      financial_documents: {
        id: req.query.financial_documents
      },
      qualification_documents: {
        id: req.query.qualification_documents
      }
    },
    cancellations: {
      id: req.query.cancellation_id
    },
    complaints: {
      id: req.query.complaint_id
    },
    contracts: {
      id: req.query.contract_id
    },
    lots: {
      id: req.query.lot_id
    },
    qualifications: {
      id: req.query.qualification_id,
      complaints:{
        id: req.query.complaint_id
      }
    },
    questions:{
        id: req.query.question_id
      }
  };

  function getObject(schema, obj){
    var key, arrKey;
    for (key in schema){
      if (ALL == schema[key].id) return "ALL_OBJ";
      if(schema[key].id){
        for (arrKey in obj[key]){
          if (obj[key][arrKey].id===schema[key].id) 
            return getObject(schema[key], obj[key][arrKey])
        }
      }
    }

    if (req.query.document_id){
      if (ALL == req.query.document_id) return obj.documents;
      for (key in obj.documents)
        if (obj.documents[key]===req.query.document_id)
          return obj.documents[key];
    }

    return obj;
  }

  function formatResponse(data){
    if (!data) 
      return {code:404};
    data._id && delete data._id;
    data._rev && delete data._rev;
    return {
      json: {data:data}
    };
  }


  return formatResponse(getObject(schema, obj));
}
