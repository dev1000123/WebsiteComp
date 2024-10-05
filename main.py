from flask import *
from flask import Flask
app = Flask(__name__)

@app.route("/",methods=["GET","POST"])
def index():
    ind = make_response(render_template("index.html"))
    return ind

@app.route("/cart",methods=["GET","POST"])
def cart():
    ct = make_response(render_template("cart.html"))
    return ct

@app.route("/products",methods=["GET","POST"])
def products():
    pr = make_response(render_template("product.html"))
    return pr

@app.route('/add/<i>',methods=["GET","SET"])
def add_item(i):
    c = session.get("cost")
    if i == 1:
        c
    session.update("cost",)
    return(redirect("/products"))

if __name__ == "__main__":
    app.run(debug=True)