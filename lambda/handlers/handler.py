import sqlite3
from flask import Flask, request

app = Flask(__name__)
conn = sqlite3.connect(":memory:", check_same_thread=False)
c = conn.cursor()
c.execute("CREATE TABLE users (id INT, name TEXT);")
c.execute("INSERT INTO users VALUES (1, 'Alice');")
conn.commit()

@app.route("/users")
def get_user():
    name = request.args.get("name")  # user-controlled input
    # Vulnerable: directly interpolating input into SQL
    c.execute(f"SELECT * FROM users WHERE name = '{name}'")
    return str(c.fetchall())

if __name__ == "__main__":
    app.run(port=5000)
