SELECT * FROM orders WHERE order_id = '12345';
# false_positive_py1.py
import os

# Safe constant string
user_input = "HelloWorld"

# Using f-string
cmd = f"echo {user_input}"
os.system(cmd)  # Might appear risky to CodeQL
