# Write your MySQL query statement below
# SELECT product_id FROM Products 
# WHERE low_fats = "Y" AND recyclable = "Y"

SELECT product_id FROM Products
WHERE low_fats like "Y" AND recyclable like "Y"