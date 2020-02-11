from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/model.json")
def json_model():
    return send_from_directory("saved_model", "model.json")


@app.route("/group1-shard1of1.bin")
def bin_model():
    return send_from_directory("saved_model", "group1-shard1of1.bin")


if __name__ == "__main__":
    app.run()
