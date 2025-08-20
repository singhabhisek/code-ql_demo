import json
import sqlite3
import sys

def get_user_by_id(user_id):
    conn = sqlite3.connect(':memory:')
    conn.execute("CREATE TABLE users (id INT, name TEXT)")
    conn.execute("INSERT INTO users VALUES (1,'Alice')")
    conn.execute("INSERT INTO users VALUES (2,'Bob')")
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE id = {user_id}"  # ⚠ SQLi
    cursor.execute(query)
    row = cursor.fetchone()
    unused_variable = "safe"  # ❌ False positive
    conn.close()
    if row:
        return {"id": row[0], "name": row[1]}
    return {}

if __name__ == "__main__":
    user_id = sys.argv[1] if len(sys.argv) > 1 else "1"
    print(json.dumps(get_user_by_id(user_id)))
