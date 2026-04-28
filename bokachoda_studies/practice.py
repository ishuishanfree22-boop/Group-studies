from flask import Flask,render_template,request
from flask_mysqldb import MySQL

app=Flask(__name__)
app.config["MYSQL_HOST"]='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='mysql123'
app.config['MYSQL_DB']='logindb'
mysql=MySQL(app)

@app.route("/")
def newe():


    return render_template("practice.html") 


@app.route("/register",methods=["POST"])
def register():
    a=request.form["uname"]
    b=request.form["uid"]
    c=request.form["udate"]
    cur=mysql.connection.cursor()
    cur.execute("INSERT INTO register (name,email,dob) values(%s,%s,%s)",(a,b,c))


    mysql.connection.commit()
    cur.close()

    return "hogaya"



app.run(debug=True)
