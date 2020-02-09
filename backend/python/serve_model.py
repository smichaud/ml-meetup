from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/model.json")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    app.run()
