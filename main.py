from flask import *
from flask import Flask
app = Flask(__name__)

@app.route("/",methods=["GET","POST"])
def index():
    return render_template("index.html")

@app.route("/cart",methods=["GET","POST"])
def cart():
    return render_template("cart.html")

@app.route("/products",methods=["GET","POST"])
def products():
    return render_template("product.html")
if __name__ == "__main__":
    app.run(debug=True)