import sqlite3

def unsafe_query(user_input):
    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    # Vulnerable: directly interpolating user input into SQL
    cursor.execute(f"SELECT * FROM users WHERE name = '{user_input}'")
    return cursor.fetchall()

# Example call
unsafe_query("alice'; DROP TABLE users; --")
