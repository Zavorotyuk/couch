# Instructions

### Install couchapp
##### Insttructions for installation
https://github.com/couchapp/couchapp#installation
##### couchapp tutorial  
http://couchapp.readthedocs.io/en/latest/couchapp/gettingstarted.html

### Clone repository
```
git clone https://github.com/Zavorotyuk/couch.git
```
### Push to couchdb

To save your local changes, use command

```
cd couch
couchapp push "your db address here"
```
# Display data
## Show functions
### Tenders

#### To get tender
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6

#### To get all documents
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?document_id=*

#### To get current document by id
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?document_id=29999b03950e4bb2a267efa401356d3a

#### To get all bids
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?bid_id=*

#### To get current bid by id
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?bid_id=806fb3027fb04be38ef375a457a58fbe

#### To get current document of bid
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?bid_id=08ab6cea15304ea5be63fe2981291075&document_id=3dcf5f582a764cbd8c19e02a1dfcc2a7

#### To get all awards
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?award_id=*

#### To get current award by id
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?award_id=24ce627bf67b4b449ec4b67bd0dcfa0c


#### To get current doucment of award
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?award_id=24ce627bf67b4b449ec4b67bd0dcfa0c&document_id=f0eb8cd489994dac9a645838b2df8aa1

#### To get all contracts
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?contract_id=*

#### To get current contract by id
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?contract_id=6ce50bc9eed44b8e9b4f9803bed8c1a8


#### To get current document of contract
http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_show/show/0000058354d443a8a7b988198a1920c6?contract_id=6ce50bc9eed44b8e9b4f9803bed8c1a8&document_id=4cb0e9e441794d78ac8000eddbd8b40a








## List functions
### Tenders
#### Get tenders by_dateModified

##### To get list of tenders as JSON (limit 100)

curl --noproxy -x GET http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_list/basicJSON/by_dateModified?limit=100

##### To get list of tenders with start key
curl --noproxy -x GET http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_list/basicJSON/by_dateModified?limit=100&start_key=%222015-02-08T15:18:00.547349+02:00%22


#### Get tenders by_local_seq

##### To get list of tenders as JSON (limit 100)

curl --noproxy -x GET http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_list/localSeq/by_local_seq?limit=100

##### To get list of tenders with start key

curl --noproxy -x GET http://cygnet.office.quintagroup.com:10000/public_edge_db/_design/tenders/_list/localSeq/by_local_seq?limit=100&start_key=14
