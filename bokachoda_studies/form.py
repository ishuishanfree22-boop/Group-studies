from flask import Flask,render_template,request
f    rom flask_mysqldb import MySQL
app=Flask(__name__)
app.secret_key="a"
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='mysql123'
app.config['MYSQL_DB']='practicedb'
mysql=MySQL(app)
@app.route("/")
def home():
     return render_template("form.html")

@app.route("/secondpage",methods=['POST'])
def second():
     a=request.form["txtname"]
     cur=mysql.connection.cursor()
     cur.execute("INSERT INTO record (name) VALUES (%s)", (a,))

     mysql.connection.commit()
     cur.close()
     
 

     return "hogaya"
app.run(debug=True)