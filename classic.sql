-- sql_queries/vulnerable_query.sql
-- Vulnerable dynamic SQL
DECLARE @userInput NVARCHAR(50) = '1 OR 1=1'; -- imagine user input
DECLARE @sql NVARCHAR(MAX);
SET @sql = 'SELECT * FROM orders WHERE order_id = ' + @userInput;
EXEC sp_executesql @sql;
