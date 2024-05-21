import json
from flask import Flask, json, Response
from pymongo import MongoClient
from pymongo.errors import ServerSelectionTimeoutError, OperationFailure

app = Flask(__name__)

class ConnectionMongoDB:
    def __init__(self, data):
        self.server     = data['server']
        self.port       = data['port']
        self.username   = data['username']
        self.password   = data['password']
        self.db         = data['db']
        
    def getDB(self):
        mongoClient = MongoClient("mongodb://" + str(self.username) + ":" + str(self.password) + "@" + str(self.server) + ":" + str(self.port) + "/?authMechanism=DEFAULT&authSource=" + str(self.db), serverSelectionTimeoutMS=500)

        try:
            if mongoClient.admin.command('ismaster')['ismaster']:
                return "Connected to the MongoDB Server!"
        except OperationFailure:
            return (self.db+"Database not found")
        except ServerSelectionTimeoutError:
            return ("MongoDB Server is down.")

@app.route('/api')
def get_api():
    data = {
        "server":   "cs_mongodb",
        "port":     '27017',
        "username": "root",
        "password": "cdpi2024",
        "db":       "codigodesconocido"
    }

    response = ConnectionMongoDB(data).getDB()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')


@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)