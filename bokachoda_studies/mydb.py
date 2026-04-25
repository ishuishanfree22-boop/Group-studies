import mysql.connector as db

# connect to MySQL
from flask import Flask,render_template

app=Flask(__name__)
@app.route("/")
def loginpage():
    

    return render_template("login.html")
@app.route("/land",methods=["post"])
def landing():
    return "info submitted"

app.run(port=5002,debug=True)

b = a.cursor()

# show databases
b.execute("SHOW DATABASES")
print(b.fetchall())

# create database if not exists
b.execute("CREATE DATABASE IF NOT EXISTS practicedb")

# use database
b.execute("USE practicedb")

# create table
b.execute("""
CREATE TABLE IF NOT EXISTS record (
    name VARCHAR(100) NOT NULL
)
""")

print("done")
