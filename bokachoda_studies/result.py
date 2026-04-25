import mysql.connector as db

# Connect to MySQL and select database
conn = db.connect(
    host="localhost",
    user="root",
    passwd="mysql123",
    database="practicedb"
)

cur = conn.cursor()

# 1️⃣ Show all tables
print("Tables in practicedb:")
cur.execute("SHOW TABLES")
tables = cur.fetchall()
print(tables)

for t in tables:
    print(t[0])

print("\nRecords from table 'record':")

# 2️⃣ Select all records from record table
cur.execute("SELECT * FROM record")
rows = cur.fetchall()

for row in rows:
    print(row)

cur.close()
conn.close()
