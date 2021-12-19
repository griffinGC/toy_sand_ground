from flask import Flask, render_template


app = Flask(__name__)

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/sw', methods=['GET'])
def sw():
    print("sw called")
    return app.send_static_file('sw.js'), {'Content-Type': 'text/javascript'}
    # return app.send_static_file('sw.js')

if __name__ == '__main__':
    app.run(debug=True)
    
    