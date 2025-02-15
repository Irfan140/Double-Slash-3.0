import os
import joblib
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS if your Express backend needs it

# Construct absolute paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Points to ml-model
NOTEBOOKS_DIR = os.path.join(BASE_DIR, "notebooks")
pipeline_path = os.path.join(NOTEBOOKS_DIR, "pipeline.pkl")

# Debug prints to verify the file location
print("Looking for pipeline at:", pipeline_path)
if not os.path.exists(pipeline_path):
    print("Pipeline file not found!")
else:
    print("Pipeline file found!")

# Load the complete pipeline (preprocessing + model)
try:
    pipeline = joblib.load(pipeline_path)
    print("Pipeline loaded successfully!")
except Exception as e:
    print("Error loading pipeline:", e)
    pipeline = None

# Define the expected raw feature order (16 columns; target is excluded)
FEATURE_ORDER = [
    "Body Type",
    "Sex",
    "Diet",
    "How Often Shower",
    "Heating Energy Source",
    "Transport",
    "Social Activity",
    "Frequency of Traveling by Air",
    "Waste Bag Size",
    "Waste Bag Weekly Count",
    "Energy efficiency",
    "Monthly Grocery Bill",
    "Vehicle Monthly Distance Km",
    "How Long TV PC Daily Hour",
    "How Many New Clothes Monthly",
    "How Long Internet Daily Hour"
]

@app.route("/predict", methods=["POST"])
def predict():
    if pipeline is None:
        return jsonify({"error": "Pipeline not loaded"}), 500

    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        # Check for missing features
        missing_features = [feat for feat in FEATURE_ORDER if feat not in data]
        if missing_features:
            return jsonify({"error": f"Missing features: {missing_features}"}), 400

        # Build a dictionary for a single row; convert numerical features to float.
        row = {}
        for feat in FEATURE_ORDER:
            if feat in ["Monthly Grocery Bill", "Vehicle Monthly Distance Km",
                        "How Long TV PC Daily Hour", "How Many New Clothes Monthly",
                        "How Long Internet Daily Hour"]:
                try:
                    row[feat] = float(data[feat])
                except Exception as e:
                    return jsonify({"error": f"Invalid numeric value for '{feat}': {data[feat]}"}), 400
            else:
                row[feat] = str(data[feat])
        
        # Create a DataFrame with one row in the correct column order
        input_df = pd.DataFrame([row], columns=FEATURE_ORDER)
        print("Input DataFrame:\n", input_df)
        print("DataFrame dtypes:\n", input_df.dtypes)

        # Get prediction using the pipeline (which applies preprocessing automatically)
        prediction = pipeline.predict(input_df)[0]
        return jsonify({"CarbonEmission": float(prediction)})
    except Exception as e:
        print("Prediction error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
