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
  var SCHEMA = {
    awards: {
      id: req.query.award_id,
      complaints: {
        id: req.query.complaint_id
      }
    },
    bids: {
      id: req.query.bid_id,
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
  var FIELDS_TO_CLEAR = ['_id','_rev', '_revisions', 'doc_type'];

  function getField(schema, obj) {
    var key, arrKey;

    for (key in schema){
      if (ALL == schema[key].id) return obj[key];
      if(schema[key].id) {
        for (arrKey in obj[key]) {
          if (obj[key][arrKey].id === schema[key].id) 
            return getField(schema[key], obj[key][arrKey])
        }
        return;
      }
    }

    if (req.query.document_id) {
      if (ALL == req.query.document_id) return obj.documents;
      for (key in obj.documents) {
        if (obj.documents[key].id === req.query.document_id)
          return obj.documents[key];
      }
      return;
    }

    return obj;
  }

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

  return formatResponse( getField(SCHEMA, doc) );
}
