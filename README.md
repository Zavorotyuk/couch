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
## To get data from couchDB use the following format:
```
curl --noproxy -x GET <db_path>/<db_name>/_design/<design_doc_name>/_show/show/<document_id>
```
## To get data from couchDB using query:
```
curl --noproxy -x GET <db_path>/<db_name>/_design/<design_doc_name>/_show/show/<document_id>?<your_query>
```

curl --noproxy -x GET db_path/public_edge_db/_design/tenders/_list/localSeq/by_local_seq?limit=100&start_key=14
