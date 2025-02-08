from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:5000")


# Create test route



# Create route uses the accepted JSON data to return the length of the string



if __name__ == "__main__":
    app.run(debug=True)