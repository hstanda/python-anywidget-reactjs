#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🔧 Creating virtual environment 'penv'..."
python3 -m venv penv

echo "✅ Activating virtual environment..."
source penv/bin/activate

echo "📦 Installing requirements from requirements.txt..."
pip install -r requirements.txt

echo "🚀 Launching Jupyter Notebook..."
jupyter notebook
