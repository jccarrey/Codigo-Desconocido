import json
from flask import Flask, request, jsonify
from pymongo import MongoClient
from pymongo.errors import ServerSelectionTimeoutError, OperationFailure
from bson import ObjectId

app = Flask(__name__)

class ConnectionMongoDB2:
    def __init__(self, data):
        self.server     = data['server']
        self.port       = data['port']
        self.username   = data['username']
        self.password   = data['password']
        
    def getDB(self):
        mongoClient = MongoClient("mongodb+srv://" + str(self.username) + ":" + str(self.password) + "@" + str(self.server))

        try:
            if mongoClient.admin.command('ismaster')['ismaster']:
                return mongoClient['codigodesconocido']
        except OperationFailure:
            return None
        except ServerSelectionTimeoutError:
            return None

data = {
    "server":   "cluster0.fksupeq.mongodb.net/",
    "port":     '27017',
    "username": "aferpol1711",
    "password": "alexd17",
}

db = ConnectionMongoDB2(data).getDB()

@app.route('/api/clients', methods=['GET'])
def get_clients():
    clients = list(db.clients.find())
    for client in clients:
        client['_id'] = str(client['_id'])
    return jsonify(clients)

@app.route('/api/clients', methods=['POST'])
def create_client():
    data = request.json
    db.clients.insert_one(data)
    return jsonify({"msg": "Client created"}), 201

@app.route('/api/clients/<id>', methods=['PUT'])
def update_client(id):
    data = request.json
    db.clients.update_one({"_id": ObjectId(id)}, {"$set": data})
    return jsonify({"msg": "Client updated"})

@app.route('/api/clients/<id>', methods=['DELETE'])
def delete_client(id):
    db.clients.delete_one({"_id": ObjectId(id)})
    return jsonify({"msg": "Client deleted"})

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
