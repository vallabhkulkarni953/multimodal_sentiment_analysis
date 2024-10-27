from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    # Your sentiment analysis logic here
    return "Analysis result"

if __name__ == '__main__':
    app.run(debug=True)
