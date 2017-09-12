mongod -f /etc/mongod.conf &
mongoimport -d FGLab -c projects --file /root/projects.json --type json
mongoimport -d FGLab -c users --file /root/users.json --type json
mongo --eval 'db.datasets.createIndex({username: 1})'
mongo --eval 'db.datasets.createIndex({name: 1})'
mongo --eval 'db.experiments.createIndex({username: 1})'
mongo --eval 'db.users.createIndex({username: 1})'
mongo --eval 'db.experiments.createIndex({_dataset_id: 1})'
bash
