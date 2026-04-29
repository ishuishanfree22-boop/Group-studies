import mysql.connector as db
conn=db.connect(
    host='localhost',
    user='root',
    passwd="mysql123",
    database='logindb'
)
cur=conn.cursor()
cur.execute("SHOW tables")
tabels=cur.fetchall()

print(tabels)
cur.execute("DESC register")
x=cur.fetchall()
print(x)

cur.execute("SELECT * FROM register")
 
detail=cur.fetchall()
for row in detail:
    print(row)

cur.close()
conn.close()