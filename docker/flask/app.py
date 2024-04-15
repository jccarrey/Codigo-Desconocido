from flask import Flask
app = Flask(__name__)

@app.route('/')
def helloworld():
    return '¡Hola, Mundo!'


if __name__ == '_main':
    app.run(host='0.0.0.0')