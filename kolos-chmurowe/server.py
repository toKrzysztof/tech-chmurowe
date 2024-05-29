import os
from flask import Flask, jsonify
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

port = os.getenv('APP_PORT')
server_metadata_enabled = os.getenv('SERVER_METADATA', 'false').lower() == 'true'
last_update = os.getenv('LAST_UPDATE', 'Unknown')

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello world!"

@app.route('/status')
def status():
    status_data = {
        "status": "OK",
        "server_ip": os.getenv('SERVER_IP', 'Unknown'),
        "server_port": port
    }
    if server_metadata_enabled:
        return jsonify(status_data)
    else:
        return jsonify({"status": "OK"})

@app.route('/version')
def version():
    return jsonify({
        "version": os.getenv('APP_VERSION', 'Unknown'),
        "last_update": last_update
    })

if __name__ == '__main__':
    app.run(debug=True, port=port)
