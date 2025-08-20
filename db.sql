-- db/query.sql
-- Vulnerable SQL: user input directly concatenated
SELECT * FROM orders WHERE order_id = 'USER_INPUT';
