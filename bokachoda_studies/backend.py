import mysql.connector as db
conn=db.connect(
    host='localhost',
    user='root',
    password='mysql123',
    database='logindb',
    auth_plugin="mysql_native_password"
)

b=conn.cursor()
b.execute(" USE logindb")
b.execute("""CREATE TABLE register(
          name varchar(100),
          uid int(200),
          dob DATE )""")