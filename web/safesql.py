# lambda_py/safe.py
import sqlite3

conn = sqlite3.connect(":memory:")
c = conn.cursor()
c.execute("CREATE TABLE users (id INT, name TEXT);")
c.execute("INSERT INTO users VALUES (1, 'Alice');")
conn.commit()

# Safe query: no user input
c.execute("SELECT * FROM users WHERE name = 'Alice'")
print(c.fetchall())
