from flask import Flask, jsonify
import pickle
import statsmodels.api as sm

# If a custom object was used, ensure its definition is accessible when loading
from statsmodels.tsa.arima.model import ARIMA

app = Flask(__name__)

# Load the model
with open('../model/arima_model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['GET'])
def predict():
    forecast = model.forecast(steps=24).tolist()
    return jsonify(forecast)

if __name__ == '__main__':
    app.run(port=5000)
