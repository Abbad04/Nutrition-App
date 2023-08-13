# Import necessary modules
from flask import Flask, render_template, request
import requests

# Function to count items in a list
def countItems(inputList):
    itemCount = len(inputList)
    return itemCount

# Create a Flask app
app = Flask(__name__)

# Route for the index page
@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        query = request.form['foodChoice']
        apiUrl = 'https://api.api-ninjas.com/v1/nutrition?query={}'.format(query)
        response = requests.get(apiUrl, headers={'X-Api-Key': 'd1OfhXPGy3n7OBvo88EaUBhqsANWAOQjiCbePDtY'})

        # Check if the API response is successful
        if response.status_code == requests.codes.ok:
            # Count the number of items in the response
            numberOfItems = countItems(eval(response.text))
            # Render the template with data
            return render_template('index.html', numberOfItems=numberOfItems, response=response.text)
        else:
            print("Error:", response.status_code, result)
    else:
        # Render the template without data
        return render_template('index.html')

# Run the Flask app
if __name__ == '__main__':
    app.run() # Running the app on http://127.0.0.1:5000
