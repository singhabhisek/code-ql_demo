# python_api/handler.py
import os
from flask import Flask, request

app = Flask(__name__)

@app.route("/run")
def run_command():
    user_input = request.args.get("cmd")  # user-controlled
    # Vulnerable: directly executing user input
    os.system(user_input)
    return "Executed"

# Start Flask app if run standalone
if __name__ == "__main__":
    app.run(debug=True)
