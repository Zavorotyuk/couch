## by_dateModified

### To get list of tenders as JSON (limit 100)

curl --noproxy -x GET http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_list/basicJSON/by_dateModified?limit=100

### To get list of tenders with start key
curl --noproxy -x GET http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_list/basicJSON/by_dateModified?limit=100&start_key="2015-02-08T15:18:00.547349+02:00"

## by_local_seq

### To get list of tenders as JSON (limit 100)

curl --noproxy -x GET http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_list/localSeq/by_local_seq?limit=100

### To get list of tenders with start key

curl --noproxy -x GET http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_list/localSeq/by_local_seq?limit=100&start_key=14
